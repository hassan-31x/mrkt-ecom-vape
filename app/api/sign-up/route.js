import bcrypt from "bcryptjs"
import { sanityAdminClient } from "@/sanity/lib/client"
import { FIRST_ORDER_DISCOUNT, REFER_FRIEND_DISCOUNT_BUS, REFER_FRIEND_DISCOUNT_IND } from "@/utils/discountValue.js"

export async function POST(request) {
    try {
        const body = await request.json()
        const { email, password, whatsapp, accountType, code } = body
        const existingUser = await sanityAdminClient.fetch(`*[_type == 'user' && email == $email][0]`, { email })

        if (existingUser) {
            return Response.json({
                status: "error",
                message: 'An account already exists with this email.'
            }, { status: 400 })
        }
        
        const hashedPassword = await bcrypt.hash(password, 10)

        let discountValid = false
        let discount = null
        let referalUserEmail
        let referalUser

        if (code) {
            discount = await sanityAdminClient.fetch(`*[_type == 'referral' && referredEmail == $email && referralCode == $code && referAvailed == false]`, { email, code })
            
            if (discount?.length) {
                referalUserEmail = discount[0].referralEmail
                referalUser = await sanityAdminClient.fetch(`*[_type == 'user' && email == $referalUserEmail]{..., discountAvailable}[0]`, { referalUserEmail })
                
                if (accountType === referalUser?.accountType) {
                    discountValid = true
                }
            }
        }
        
        if (accountType === 'user') {
            const { name, dob } = body

            const registeredUser = await sanityAdminClient.create({
                _type: 'user',
                name,
                email,
                password: hashedPassword,
                createdAt: new Date().toISOString(),
                accountType,
                approved:  true,
                whatsapp,
                dob,
                discountsAvailable: discountValid ? 
                [{
                    _key: Math.random().toString(36).substring(7),
                    name: "Refer Friend Discount",
                    code: code,
                    percentage: REFER_FRIEND_DISCOUNT_IND,
                }] :
                [{
                    _key: Math.random().toString(36).substring(7),
                    name: "First Order Discount",
                    code: code,
                    percentage: FIRST_ORDER_DISCOUNT,
                }]
            })
        } else if (accountType === 'business') {
            const { businessType } = body
            if (businessType === 'online') {
                const { onlineShops } = body
                const registeredBusiness = await sanityAdminClient.create({
                    _type: 'user',
                    email,
                    password: hashedPassword,
                    createdAt: new Date().toISOString(),
                    accountType,
                    businessType,
                    approved:  false,
                    whatsapp,
                    onlineShops: onlineShops.map(shop => {
                        return {
                            _key: Math.random().toString(36).substring(7),
                            name: shop.name,
                            accountId: shop.accountId
                        }
                    }),
                    discountsAvailable: discountValid ?
                    [{
                        _key: Math.random().toString(36).substring(7),
                        name: "Refer Friend Discount",
                        code: code,
                        percentage: REFER_FRIEND_DISCOUNT_BUS,
                    }] :
                    []
                })
            } else {
                const { businessName, toko, store, url, address } = body
                const registeredBusiness = await sanityAdminClient.create({
                    _type: 'user',
                    email,
                    password: hashedPassword,
                    createdAt: new Date().toISOString(),
                    accountType,
                    businessType,
                    approved:  false,
                    whatsapp,
                    businessName,
                    toko,
                    storeType: store,
                    businessUrl: url || '',
                    businessAddress: address || '',
                    discountsAvailable: discountValid ?
                    [{
                        _key: Math.random().toString(36).substring(7),
                        name: "Refer Friend Discount",
                        code: code,
                        percentage: REFER_FRIEND_DISCOUNT_BUS,
                    }] :
                    []
                })
            }
        }


        if (discountValid) {
            const res = await sanityAdminClient.patch(referalUser._id).set({ discountsAvailable: [
                ...(referalUser.discountsAvailable || []),
                {
                    _key: Math.random().toString(36).substring(7),
                    name: "Refer Friend Discount",
                    code: code,
                    percentage: REFER_FRIEND_DISCOUNT_IND,
                }
            ] }).commit()

            const res2 = await sanityAdminClient.patch(discount[0]._id).set({ referAvailed: true }).commit()
        }

        return Response.json({
            status: "success",
            message: `${accountType.charAt(0).toUpperCase() + accountType.slice(1)} registered successfully.`
        }, { status: 200 })

    } catch (err) {
        console.error(err)
        return Response.json({
            status: "error",
            message: "Error registering."
        }, { status: 500 })
    }
}
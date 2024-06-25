import bcrypt from "bcryptjs"
import { sanityAdminClient } from "@/sanity/lib/client"

export async function POST(request) {
    try {
        const body = await request.json()
        const { email, password, whatsapp, accountType } = body
        const existingUser = await sanityAdminClient.fetch(`*[_type == 'user' && email == $email][0]`, { email })

        if (existingUser) {
            return Response.json({
                status: "error",
                message: 'An account already exists with this email.'
            }, { status: 400 })
        }
        
        const hashedPassword = await bcrypt.hash(password, 10)

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
                dob
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
                            url: shop.url
                        }
                    })
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
                    businessAddress: address || ''
                })
            }
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
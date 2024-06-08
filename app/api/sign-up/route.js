import bcrypt from "bcryptjs"
import { sanityAdminClient } from "@/sanity/lib/client.js"

export async function POST(request) {
    try {
        const { name, email, password, accountType, discountCode } = await request.json()
        const typeName = accountType === "business" ? "business" : "user"
        const existingUser = await sanityAdminClient.fetch(`*[_type == $typeName && email == $email][0]`, { typeName, email })
        
        if (existingUser) {
            return Response.json({
                status: "error",
                message: `${typeName.charAt(0).toUpperCase() + typeName.slice(1)} already exists.`
            }, { status: 400 })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const registeredUser = await sanityAdminClient.create({
            _type: typeName,
            name,
            email,
            password: hashedPassword,
            createdAt: new Date().toISOString(),
        })

        return Response.json({
            status: "success",
            message: `${typeName} registered successfully.`
        }, { status: 200 })

    } catch (err) {
        console.error(err)
        return Response.json({
            status: "error",
            message: "Error registering."
        }, { status: 500 })
    }
}
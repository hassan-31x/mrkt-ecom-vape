import { sanityAdminClient } from "@/sanity/lib/client.js"
import bcrypt from "bcryptjs"

export async function POST(request) {
    try {
        const { name, email, password, accountType, discountCode } = await request.json()

        const existingUser = sanityAdminClient.fetch(`*[_type == "user" && email == $email][0]`, { email })
        if (existingUser) {
            return Response.json({
                status: "error",
                message: "User already exists."
            }, { status: 400 })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await sanityAdminClient.create({
            _type: "user",
            name,
            email,
            password: hashedPassword,
            accountType
        })

        return Response.json({
            status: "success",
            message: "User registered successfully."
        }, { status: 200 })

    } catch (err) {
        console.error(err)
        return Response.json({
            status: "error",
            message: "Error registering user."
        }, { status: 500 })
    }
}
import CredentialsProvider from 'next-auth/providers/credentials'

export const options = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password", placeholder: "Password" }
            },
            async authorize(credentials) {
                const user = { id: 1, name: 'J Smith', password: 'hello' }

                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                }
                return null
            }

        })
    ]
}
import NextAuth from "next-auth"

import Credentials from "next-auth/providers/credentials"

const authOptions = {
    providers: [
        Credentials({
            credentials: { password: { label: "Password", type: "password" } },
            async authorize(credentials) {
                if (credentials.password !== "pw") return null
                return { name: "Fill Murray", email: "bill@fillmurray.com", image: "https://www.fillmurray.com/64/64" }
            },
        }),
    ]
}

export default NextAuth(authOptions)
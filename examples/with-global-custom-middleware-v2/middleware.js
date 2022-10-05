import { withAuth } from "next-auth/middleware"

export default withAuth({
    pages: {
        signIn: "/custom-base/api/auth/signin",
        error: "/custom-base/api/auth/error",
    }
})
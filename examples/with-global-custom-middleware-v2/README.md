Uses `NEXTAUTH_URL=http://localhost:3000/custom-base` instead of `NEXTAUTH_URL=http://localhost:3000/custom-base/api/auth`
Will cause a redirect loop to `/custom-base/api/auth/signin`
// import { withAuth } from "next-auth/middleware"

// export default withAuth(
//   function middleware(req) {
//     console.log(req.nextauth.token)
//   },
  // {
  //   callbacks: {
  //     authorized: ({ token }) => token?.role === "admin",
  //   },
  // }
// )

export { default } from "next-auth/middleware"
// export const config = {
//   matcher: ["/", "/projects"]
// }
import { Route, Routes } from "react-router-dom"
import { Auth } from "@/pages/Auth/Auth"
import { SignupContainer } from "@/components/organisms/Auth/SignupContainer"
import { NotFound } from "@/pages/Auth/Notfound/Notfound"
import { SigninContainer } from "@/components/organisms/Auth/SigninContainer"
import { ProtectedRoute } from "./components/molecules/ProtectedRoute/ProtectedRoute"

export const AppRoutes = () => {
    return(
         <Routes>
        <Route path="/auth/signup" element={<Auth><SignupContainer /></Auth>} />
        <Route path="/auth/signin" element={<Auth><SigninContainer /></Auth>} />
        <Route path="/home" element={<ProtectedRoute><Auth><h1>Home</h1></Auth></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    )
}
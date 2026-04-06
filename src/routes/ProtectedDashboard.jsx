import { useContext } from "react"
import { Navigate, Outlet } from "react-router"
import { Auth } from "../context/AuthContext"
import { toast } from "react-toastify"

const ProtectedDashboard = () => {

    let {loggedInUser} = useContext(Auth)

    if(!loggedInUser){
        toast.error("Unauthorized user")
        return <Navigate to='/' />
    }
     return <Outlet />

    
}

export default ProtectedDashboard

import { Outlet } from "react-router";

export default function Login() {
    return (
        <>
            <div className="flex h-screen  w-screen">
             <Outlet/>
             
            </div>
        </>
    )
}

// export default LoginPage;
import { Outlet } from "react-router";

function LoginPage() {
    return (
        <>
            <div className="flex h-screen  justify-center items-center  bg-green-400 h-fit">
                <p>Internook</p>
             <Outlet/>
            </div>
        </>
    )
}

export default LoginPage;
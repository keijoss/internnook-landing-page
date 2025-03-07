import { Outlet } from "react-router";

export default function Auth() {
    return (
        <>
            <div className="flex h-screen  w-screen">
             <Outlet/>
             
            </div>
        </>
    )
}

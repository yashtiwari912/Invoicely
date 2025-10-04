import { SignIn, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    const { user } = useUser();

    return user ? (
        <>
            <div>Layout</div>
            <Outlet />
        </>

    ) : <div className="flex items-center justify-center h-screen">
        <SignIn />
    </div>;
}

export default Layout
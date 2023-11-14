// this layout will share a common component over the nested routes
// page.tsx will display a sepecific component in that routes
import React from "react";

//  arrow function + export module
//  declare a props with typescript  children is the page.tsx 
// typescript : object with children will be a react node
const Layout = ({children} : {children: React.ReactNode}) => {
    return (
        <main>
            Layout
            {children}
        </main>
    )
}

export default Layout 

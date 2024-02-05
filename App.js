import React, { useEffect, useState, lazy, Suspense } from "react"
import  ReactDOM  from "react-dom/client"
import Header from "./Header"
import Body from "./Body"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import About from "./About"
import Error from "./Error"
import Contact from "./Contact"
import RestaurantMenu from "./RestaurantMenu"
import Login from "./Login"
// import Grocery from "./Hooks/Grocery"

const Grocery = lazy(()=>import("./Hooks/Grocery"))


const App = () => {
    
    return (
        <>
        <Header/>
        <Outlet/>
        </>
    
    )
        }


        const appRoutes = createBrowserRouter([
            {
                path : "/",
                element : <App/>,
                errorElement: <Error/>,
                children:[
                    {
                        path: "/",
                        element: <Body/>
                    },
                    {
                        path: "/about",
                        element: <About/>
                    },
                    {
                        path:"/contact",
                        element:<Contact/>
                    },
                    {
                        path:"/restaurants/:resID",
                        element:<RestaurantMenu/>
                    },
                    {
                        path:"/login",
                        element:<Login/>
                    },
                    {
                        path:"/grocery",
                        element:(
                        <Suspense fallback={<h1>Loading...</h1>}>
                            <Grocery/>
                        </Suspense>
                        )
                    },
                ]
                }
            
           
        ])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRoutes}/>)

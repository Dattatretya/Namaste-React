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
import UserContext from "./UserContext"
import { Provider } from "react-redux"
import appStore from "./redux/appCart"
import Cart from "./Cart"
// import Grocery from "./Hooks/Grocery"

const Grocery = lazy(()=>import("./Hooks/Grocery"))



const App = () => {

    const [userName, setUserName] = useState ()

    useEffect(()=>{
        const data = {
            name:"Dattatreya"
        }
        setUserName(data.name)
    
    },[])
    
    
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{dummy:userName, setUserName}}>
        <>
        <Header/>
        <Outlet/>
        </>
        </UserContext.Provider>
        </Provider>
        
    
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
                        path:"/cart",
                        element:<Cart/>
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

import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { Nav } from "../components/Nav/Nav"
import { BurgerMenu } from "../components/Burgermenu/Burgermenu"
import { useState } from "react"

export const MainLayout = () => {
  const [isNavHidden, setIsNavHidden] = useState(true);
  return (
    <>
        <Header>
          <Nav isNavHidden={isNavHidden}/>
          <BurgerMenu setIsNavHidden={setIsNavHidden}/>
        </Header>
        <Outlet />
    </>
  )
}
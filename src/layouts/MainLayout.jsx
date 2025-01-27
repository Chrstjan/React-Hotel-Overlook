import { NavLink, Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { Nav } from "../components/Nav/Nav"
import { BurgerMenu } from "../components/Burgermenu/Burgermenu"
import { useState } from "react"
import { Footer } from "../components/Footer/Footer"
import { Icon } from "../components/Icon/Icon"
import { paths } from "../router/Paths"

export const MainLayout = () => {
  const [isNavHidden, setIsNavHidden] = useState(true);
  return (
    <>
        <Header>
          <img src="/images/hotel-overlook-logo.png" alt="hotel overlook logo"/>
          <Nav isNavHidden={isNavHidden}/>
          <BurgerMenu setIsNavHidden={setIsNavHidden}/>
        </Header>
        <Outlet />
        <Footer>
          <span>
            <Icon src="/images/twitter.svg" alt="Twitter Logo" type="s-icon"/>
            <Icon src="/images/facebook.svg" alt="Facebook Logo" type="s-icon"/>
          </span>
          <ul>
            {paths.map((item) => {
              return (
                <li key={item.name}>
                  <NavLink to={item.path}>{item.name}</NavLink>
                </li>
              )
            })}
          </ul>
        </Footer>
    </>
  )
}
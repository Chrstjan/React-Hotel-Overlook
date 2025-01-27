import { NavLink } from "react-router-dom"
import { paths } from "../../router/Paths"
import s from "./Nav.module.scss"

export const Nav = ({isNavHidden}) => {
  return (
    <nav>
      <ul className={`${s.navStyling} ${
          isNavHidden ? s.hiddenStyling : s.navStyling
        }`}>
        {paths.map((item) => {
          return (
            <li key={item.name}>
              <NavLink to={item.path}>{item.name}</NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
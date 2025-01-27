import s from "./Footer.module.scss";

export const Footer = ({children}) => {
  return (
    <footer className={s.footerStyling}>
        <p>&copy; 2021 Hotel Overlook. Alle rettigheder forbeholdt.</p>
        {children}
    </footer>
  )
}
import s from "./HeroHeader.module.scss";

export const HeroHeader = ({ text }) => {
  return (
    <div className={s.headerContainer}>
      <header className={s.headerStyling}>
        <h2>{text}</h2>
      </header>
      <span className={s.barStyling}></span>
    </div>
  );
};

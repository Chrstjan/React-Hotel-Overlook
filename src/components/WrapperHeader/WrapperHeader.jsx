import s from "./WrapperHeader.module.scss";

export const WrapperHeader = ({ text, subtext }) => {
  return (
    <header className={s.headerStyling}>
      <h3>{text}</h3>
      {subtext ? <p>{subtext}</p> : null}
    </header>
  );
};

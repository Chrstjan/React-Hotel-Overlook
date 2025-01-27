import s from "./WrapperHeader.module.scss";

export const WrapperHeader = ({ text }) => {
  return (
    <header className={s.headerStyling}>
      <h3>{text}</h3>
    </header>
  );
};

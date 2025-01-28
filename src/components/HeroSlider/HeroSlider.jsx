import s from "./HeroSlider.module.scss";

export const HeroSlider = ({ src }) => {
  return (
    <div className={s.heroStyling}>
      <img src={src} alt="Hero Slider images" />
    </div>
  );
};

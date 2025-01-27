import s from "./HeroSlider.module.scss";

import slider1 from "/images/frankfurt-skyline-germany.jpg";

export const HeroSlider = () => {
  return (
    <div className={s.heroStyling}>
      <img src={slider1} alt="Hero Slider images" />
    </div>
  );
};

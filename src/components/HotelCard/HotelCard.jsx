import thumbnail1 from "/images/room-superior-plus-bedroom.jpg";
import thumbnail2 from "/images/room-junior-suite-bedroom.jpg";
import thumbnail3 from "/images/room-standard-bedroom.jpg";
import s from "./HotelCard.module.scss";

export const HotelCard = ({ data, thumbnail }) => {
  const thumbnails = [thumbnail1, thumbnail2, thumbnail3];
  return (
    <>
      {data?.map((item, index) => {
        return (
          <figure className={s.cardStyling}>
            {thumbnail ? (
              <img src={thumbnails[index]} alt="Hotel room image" />
            ) : null}
            <figcaption>
              <h3>{item?.title}</h3>
            </figcaption>
          </figure>
        );
      })}
    </>
  );
};

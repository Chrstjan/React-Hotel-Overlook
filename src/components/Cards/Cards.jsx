import s from "./Cards.module.scss";

export const Cards = ({ data }) => {
  return (
    <>
      {data?.slice(0, 3).map((item) => {
        return (
          <figure className={s.cardStyling} key={item?.id}>
            <header>
              <img src={`/images/${item?.image?.filename}`} alt={item?.title} />
            </header>
            <figcaption>
              <h3>{item?.title}</h3>
              <p>{item?.teaser}</p>
            </figcaption>
          </figure>
        );
      })}
    </>
  );
};

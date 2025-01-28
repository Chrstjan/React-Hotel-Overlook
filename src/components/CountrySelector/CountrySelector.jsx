import s from "./CountrySelector.module.scss";

export const CountrySelector = ({ data, setSelectedCountry }) => {
  return (
    <ul className={s.countryStyling}>
      {data?.map((item) => {
        return (
          <li onClick={() => setSelectedCountry(item?.slug)} key={item?.id}>
            {item?.name}
          </li>
        );
      })}
    </ul>
  );
};

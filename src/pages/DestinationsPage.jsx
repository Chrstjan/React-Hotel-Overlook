import { useState } from "react";
import { HeroHeader } from "../components/HeroHeader/HeroHeader";
import { HeroSlider } from "../components/HeroSlider/HeroSlider";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { WrapperHeader } from "../components/WrapperHeader/WrapperHeader";
import { useFetch } from "../hooks/UseFetch";
import { useEffect } from "react";
import { CountrySelector } from "../components/CountrySelector/CountrySelector";
import { HotelCard } from "../components/HotelCard/HotelCard";
import { Breadcrumb } from "../components/Breadcrumb/Breadcrumb";

export const DestinationsPage = () => {
  const { data, isLoading, error } = useFetch(
    "http://localhost:4000/destinations"
  );
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("danmark");
  const [countryHotels, setCountryHotels] = useState({});

  useEffect(() => {
    if (data) {
      setCountries(data);
    }
  }, [data]);

  useEffect(() => {
    const getCountryHotels = async () => {
      const res = await fetch(
        `http://localhost:4000/destinations/${selectedCountry}`
      );

      if (!res.ok) {
        console.error("Failed fetching country hotels");
      }

      const data = await res.json();
      console.log(data);
      setCountryHotels(data);
    };

    getCountryHotels();
  }, [selectedCountry]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error in fetch, try again</h2>;
  }

  return (
    <>
      <Wrapper>
        <HeroSlider
          src={
            countryHotels
              ? `/images/${countryHotels?.CountryImage?.country_image_filename}
`
              : `/images/mons-klint-denmark.jpg`
          }
        />
        <HeroHeader text="Hoteller & Destinationer" />
        {countries.length > 0 && countries ? (
          <CountrySelector
            data={countries}
            setSelectedCountry={setSelectedCountry}
          />
        ) : null}
      </Wrapper>
      <Breadcrumb destination={selectedCountry ? selectedCountry : null} />
      <Wrapper type="cardsWrapper">
        {selectedCountry.length > 0 ? (
          <WrapperHeader
            text={`Vores hoteller i ${selectedCountry}`}
            subtext={countryHotels ? countryHotels?.description : null}
          />
        ) : null}
        {countryHotels && countryHotels?.cities?.length > 0 ? (
          <HotelCard data={countryHotels?.cities} />
        ) : null}
      </Wrapper>
    </>
  );
};

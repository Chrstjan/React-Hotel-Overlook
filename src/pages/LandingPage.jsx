import { useState, useEffect } from "react";
import { HeroHeader } from "../components/HeroHeader/HeroHeader";
import { HeroSlider } from "../components/HeroSlider/HeroSlider";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { WrapperHeader } from "../components/WrapperHeader/WrapperHeader";
import { useFetch } from "../hooks/UseFetch";
import { Cards } from "../components/Cards/Cards";
import { HotelCard } from "../components/HotelCard/HotelCard";

export const LandingPage = () => {
  const { data, isLoading, error } = useFetch("http://localhost:4000/news");
  const [news, setNews] = useState([]);
  const [hotelRooms, setHotelRooms] = useState([]);

  useEffect(() => {
    if (data) {
      setNews(data);
    }
  }, [data]);

  useEffect(() => {
    const getNearbyRooms = async () => {
      const res = await fetch(
        "http://localhost:4000/destinations/danmark/aalborg/overlook-aalborg-city"
      );

      if (!res.ok) {
        console.error("Error in fetching nearby rooms");
      }
      const data = await res.json();

      let rooms = [];
      const SupSelectedRooms = data?.cities[0]?.hotels[0]?.rooms.slice(2, 4);
      const standSelectedRoom = data?.cities[0]?.hotels[0]?.rooms.slice(5, 6);
      //Bruger spread operator til at kopier objekter fra data arayet til rooms
      rooms = [...SupSelectedRooms, standSelectedRoom];

      // console.log(rooms.flatMap((item) => item));
      //Bruger flatMap til at fjerne nested array i rooms arrayet
      setHotelRooms(rooms?.flatMap((item) => item));
    };
    getNearbyRooms();
  }, []);

  useEffect(() => {
    console.log(hotelRooms);
  }, [hotelRooms]);

  return (
    <>
      <Wrapper>
        <HeroSlider />
        <HeroHeader text="Velkommen til Hotel Overlook Online" />
      </Wrapper>
      <Wrapper type="cardsWrapper">
        <WrapperHeader text="Sidste Nyt" />
        {news.length > 0 && news ? <Cards data={news} /> : null}
      </Wrapper>
      <Wrapper type="cardsWrapper">
        <WrapperHeader text="Se vores udvalg af værelser" />
        {hotelRooms.length > 0 && hotelRooms ? (
          <HotelCard data={hotelRooms} thumbnail />
        ) : null}
      </Wrapper>
    </>
  );
};

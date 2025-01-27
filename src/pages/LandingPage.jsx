import { useState, useEffect } from "react";
import { HeroHeader } from "../components/HeroHeader/HeroHeader";
import { HeroSlider } from "../components/HeroSlider/HeroSlider";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { WrapperHeader } from "../components/WrapperHeader/WrapperHeader";
import { useFetch } from "../hooks/UseFetch";
import { Cards } from "../components/Cards/Cards";

export const LandingPage = () => {
  const { data, isLoading, error } = useFetch("http://localhost:4000/news");
  const [news, setNews] = useState([]);

  useEffect(() => {
    if (data) {
      setNews(data);
    }
  }, [data]);

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
    </>
  );
};

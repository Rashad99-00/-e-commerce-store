import {
  useEffect,
  useState,
} from "react";

import {
  DEFAULT_HOME_SLIDES,
  HOME_SLIDER_INTERVAL_MS,
} from "../constants/homeSlider.constants";

export const useHomeSlider = () => {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const slides =
    DEFAULT_HOME_SLIDES;

  const activeSlide =
    slides[activeIndex];

  const showPrevious = () => {
    setActiveIndex(
      (currentIndex) =>
        currentIndex === 0
          ? slides.length - 1
          : currentIndex - 1
    );
  };

  const showNext = () => {
    setActiveIndex(
      (currentIndex) =>
        (currentIndex + 1) %
        slides.length
    );
  };

  useEffect(() => {
    const sliderTimer =
      window.setInterval(
        () => {
          setActiveIndex(
            (currentIndex) =>
              (currentIndex + 1) %
              slides.length
          );
        },
        HOME_SLIDER_INTERVAL_MS
      );

    return () => {
      window.clearInterval(sliderTimer);
    };
  }, [
    slides.length,
  ]);

  return {
    activeIndex,
    activeSlide,
    setActiveIndex,
    showNext,
    showPrevious,
    slides,
  };
};

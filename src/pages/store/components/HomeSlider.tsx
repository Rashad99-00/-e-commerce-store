import {
  Link,
} from "react-router-dom";

import {
  useHomeSlider,
} from "../hooks/useHomeSlider";

function HomeSlider() {
  const {
    activeIndex,
    activeSlide,
    setActiveIndex,
    showNext,
    showPrevious,
    slides,
  } = useHomeSlider();

  return (
    <section className="home-slider">
      <div className="home-slide">
        <img
          src={activeSlide.image}
          alt={activeSlide.title}
        />

        <div className="home-slide-content">
          <p>{activeSlide.kicker}</p>
          <h2>{activeSlide.title}</h2>
          <span>{activeSlide.copy}</span>

          <div className="home-slide-actions">
            <Link
              className="home-slide-badge"
              to={activeSlide.badgeTo}
            >
              {activeSlide.badge}
            </Link>
            <Link
              className="home-slide-action"
              to={activeSlide.actionTo}
            >
              {activeSlide.action}
            </Link>
          </div>
        </div>
      </div>

      <button
        className="home-slider-arrow home-slider-prev"
        type="button"
        aria-label="Əvvəlki slayd"
        onClick={showPrevious}
      >
        ‹
      </button>
      <button
        className="home-slider-arrow home-slider-next"
        type="button"
        aria-label="Növbəti slayd"
        onClick={showNext}
      >
        ›
      </button>

      <div className="home-slider-dots">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={
              index === activeIndex
                ? "active"
                : ""
            }
            type="button"
            aria-label={`${index + 1}. slayd`}
            onClick={() =>
              setActiveIndex(index)
            }
          />
        ))}
      </div>
    </section>
  );
}

export default HomeSlider;

import sliderTechBanner from "../../../assets/slider-tech-banner.png";

export type HomeSlide = {
  id: string;
  kicker: string;
  title: string;
  copy: string;
  image: string;
  action: string;
  actionTo: string;
  badge: string;
  badgeTo: string;
};

export const HOME_SLIDER_INTERVAL_MS =
  5000;

export const DEFAULT_HOME_SLIDES: HomeSlide[] = [
  {
    id: "smart-devices",
    kicker: "Yeni alış-veriş ritmi",
    title: "Axtardığın cihaz bir klik uzaqda",
    copy:
      "Telefon, audio və ev texnologiyalarını səliqəli kataloqda rahat seç.",
    image: sliderTechBanner,
    action: "Məhsullara bax",
    actionTo: "/products",
    badge: "Smart seçim",
    badgeTo: "/products",
  },
  {
    id: "weekly-offers",
    kicker: "Həftəlik fürsətlər",
    title: "Bu həftənin texno seçimi hazırdır",
    copy:
      "Hər gün fərqli kateqoriyada endirim var. Uyğun günü seç, məhsullara keç.",
    image: sliderTechBanner,
    action: "Fürsətlərə bax",
    actionTo: "/products?collection=weekly-discounts",
    badge: "10-15% endirim",
    badgeTo: "/products?collection=weekly-discounts",
  },
  {
    id: "new-arrivals",
    kicker: "Yeni gələnlər",
    title: "Mağazaya təzə əlavə olunanlar",
    copy:
      "Son məhsulları navbar-dan aç, qiymətə bax və detallara tez keç.",
    image: sliderTechBanner,
    action: "Yeniliklərə bax",
    actionTo: "/products?collection=latest",
    badge: "Son 5 seçim",
    badgeTo: "/products?collection=latest",
  },
];

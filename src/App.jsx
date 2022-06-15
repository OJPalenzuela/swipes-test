import "./App.css";
import Swiper from "./Swiper";
import CarouselReactSwipe from "./ReactSwipe";
import { EmblaCarousel } from "./Embla";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Swiper{" "}
          <a href={"https://swiperjs.com/react/"} target={"_blank"}>
            Documentation
          </a>
        </h2>
        <div style={{ width: "100%" }}>
          <Swiper />
        </div>
        <h2>
          React-Swipe{""}
          <a
            href={"https://github.com/voronianski/react-swipe"}
            target={"_blank"}
          >
            Documentation
          </a>
        </h2>
        <div style={{ width: "100%" }}>
          <CarouselReactSwipe />
        </div>
        <h2>
          Embla{" "}
          <a href={"https://www.embla-carousel.com/"} target={"_blank"}>
            Documentation
          </a>
        </h2>
        <div style={{ width: "100%" }}>
          <EmblaCarousel />
        </div>
      </header>
    </div>
  );
}

export default App;

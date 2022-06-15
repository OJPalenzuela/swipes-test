import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const EmblaCarousel = () => {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      <style jsx>{`
        .embla {
          position: relative;
          padding: 20px;
          max-width: 670px;
          margin-left: auto;
          margin-right: auto;
        }

        .embla__viewport {
          overflow: hidden;
          width: 100%;
        }

        .embla__viewport.is-draggable {
          cursor: move;
          cursor: grab;
        }

        .embla__viewport.is-dragging {
          cursor: grabbing;
        }

        .embla__container {
          display: flex;
          user-select: none;
          -webkit-touch-callout: none;
          -khtml-user-select: none;
          -webkit-tap-highlight-color: transparent;
          margin-left: -10px;
        }

        .embla__slide {
          position: relative;
          min-width: 100%;
          padding-left: 10px;
        }

        .embla__slide__inner {
          position: relative;
          overflow: hidden;
          height: 190px;
        }

        .embla__slide__img {
          position: absolute;
          display: block;
          top: 50%;
          left: 50%;
          width: auto;
          min-height: 100%;
          min-width: 100%;
          max-width: none;
          transform: translate(-50%, -50%);
        }

        .embla__button {
          outline: 0;
          cursor: pointer;
          background-color: transparent;
          touch-action: manipulation;
          position: absolute;
          z-index: 1;
          top: 50%;
          transform: translateY(-50%);
          border: 0;
          width: 30px;
          height: 30px;
          justify-content: center;
          align-items: center;
          fill: #1bcacd;
          padding: 0;
        }

        .embla__button:disabled {
          cursor: default;
          opacity: 0.3;
        }

        .embla__button__svg {
          width: 100%;
          height: 100%;
        }

        .embla__button--prev {
          left: 27px;
        }

        .embla__button--next {
          right: 27px;
        }

        .embla__dots {
          display: flex;
          list-style: none;
          justify-content: center;
          padding-top: 10px;
        }

        .embla__dot {
          background-color: transparent;
          cursor: pointer;
          position: relative;
          padding: 0;
          outline: 0;
          border: 0;
          width: 30px;
          height: 30px;
          margin-right: 7.5px;
          margin-left: 7.5px;
          display: flex;
          align-items: center;
        }

        .embla__dot:after {
          background-color: #efefef;
          width: 100%;
          height: 4px;
          border-radius: 2px;
          content: "";
        }

        .embla__dot.is-selected:after {
          background-color: #1bcacd;
          opacity: 1;
        }
      `}</style>
      <div className="embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, key) => (
              <div className="embla__slide" key={item}>
                <img
                  style={{ width: "400px" }}
                  src="https://source.unsplash.com/random"
                />
              </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </>
  );
};

export const DotButton = ({ selected, onClick }) => (
  <button
    className={`embla__dot ${selected ? "is-selected" : ""}`}
    type="button"
    onClick={onClick}
  />
);

export const PrevButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--prev"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg className="embla__button__svg" viewBox="137.718 -1.001 366.563 644">
      <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
    </svg>
  </button>
);

export const NextButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--next"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg className="embla__button__svg" viewBox="0 0 238.003 238.003">
      <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
    </svg>
  </button>
);

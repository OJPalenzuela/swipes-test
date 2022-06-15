import ReactSwipe from "react-swipe";

const Carousel = () => {
  let reactSwipeEl;

  return (
    <div>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={(el) => (reactSwipeEl = el)}
        childCount={3}
      >
        <div>
          <div>
            <img
              style={{ width: "400px" }}
              src="https://source.unsplash.com/random"
            />
          </div>
        </div>
        <div>
          <div>
            <img
              style={{ width: "400px" }}
              src="https://source.unsplash.com/random"
            />
          </div>
        </div>
        <div>
          <div>
            <img
              style={{ width: "400px" }}
              src="https://source.unsplash.com/random"
            />
          </div>
        </div>
      </ReactSwipe>
      <button onClick={() => reactSwipeEl.prev()}>Previous</button>
      <button onClick={() => reactSwipeEl.next()}>Next</button>
    </div>
  );
};

export default Carousel;

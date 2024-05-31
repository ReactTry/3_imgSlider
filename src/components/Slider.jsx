import React, { useState } from "react";

import "../styles/slider.css";

const Slider = () => {
  const imgObj = [
    {
      id: 1,
      img: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg",
    },

    {
      id: 2,
      img: "https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_960_720.jpg",
    },
    {
      id: 3,
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    },
  ];

  const [images, setImages] = useState(imgObj);
  const [activeIndex, setactiveIndex] = useState(0);

  const onChangeImagePrev = () => {
    if (activeIndex != 0) {
      setactiveIndex(activeIndex - 1);
    }
  };
  const onChangeImageNext = () => {
    if (activeIndex < imgObj.length - 1) {
      setactiveIndex(activeIndex + 1);
    }
  };

  return (
    <>
      <div className="carousel-container">
        {images.map((img, index) => {
          return (
            <div>
              {activeIndex === index && (
                <div className="images fade">
                  <img src={img.img} />
                </div>
              )}
              {
                <a className="previous" onClick={onChangeImagePrev}>
                  {" "}
                  ❮
                </a>
              }{" "}
              {
                <a className="next" onClick={onChangeImageNext}>
                  {" "}
                  ❯
                </a>
              }
            </div>
          );
        })}
      </div>

      {/* <div className="carousel-container">
        <div className="images fade">
          <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg" />
        </div>

        <a className="previous">❮</a>
        <a className="next">❯</a>
      </div> */}
    </>
  );
};

export default Slider;

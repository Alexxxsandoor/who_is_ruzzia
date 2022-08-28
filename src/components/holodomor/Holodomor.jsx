import React from "react";
import { ScrollPage, Animator } from "react-scroll-motion";
import { FADE } from "../../config";
import "./holodomor-style.scss";
import { holodomorImage } from "../../config";

const Holodomor = () => {
  return (
    <ScrollPage>
      <Animator animation={FADE}>
        <div className="gallery">
          {holodomorImage.map((img, index) => (
            <div key={img.url + index + index} className="gallery-item">
              <img className="gallery-image" src={img.url} alt="" />
            </div>
          ))}
        </div>
      </Animator>
    </ScrollPage>
  );
};

export default Holodomor;

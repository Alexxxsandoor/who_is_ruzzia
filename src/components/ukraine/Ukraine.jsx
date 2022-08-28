import React from "react";
import { ScrollPage, Animator } from "react-scroll-motion";
import { FADE, ukraineImage } from "../../config";
import "./ukraine.scss";
const Ukraine = () => {
  return (
    <ScrollPage>
      <Animator animation={FADE}>
        <div className="gallery">
          {ukraineImage.map((img, index) => (
            <div key={img.url + index} className="gallery-item">
              <img className="gallery-image" src={img.url} alt="" />
            </div>
          ))}
        </div>
      </Animator>
    </ScrollPage>
  );
};

export default Ukraine;

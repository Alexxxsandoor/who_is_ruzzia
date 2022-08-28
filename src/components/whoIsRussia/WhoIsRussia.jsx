import React from "react";
import { ScrollPage, Animator } from "react-scroll-motion";
import { FADE_TEXT } from "../../config";
import "./WhoIsRussia.scss";

const WhoIsRussia = () => {
  return (
    <ScrollPage>
      <Animator animation={FADE_TEXT}>
        <h1>
          WHO IS <span className="blood">RUSSIA?</span>
        </h1>
      </Animator>
    </ScrollPage>
  );
};

export default WhoIsRussia;

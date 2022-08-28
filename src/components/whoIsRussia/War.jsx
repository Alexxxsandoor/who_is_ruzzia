import React from "react";
import { ScrollPage, Animator } from "react-scroll-motion";
import { FADE_TEXT } from "../../config";

const War = () => {
  return (
    <ScrollPage>
      <div className="war">
        <Animator animation={FADE_TEXT}>
          <h2>WHO IS RUSSIA?</h2>
        </Animator>
      </div>
    </ScrollPage>
  );
};

export default War;

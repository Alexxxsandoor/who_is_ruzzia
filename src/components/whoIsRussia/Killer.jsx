import React from "react";
import { ScrollPage, Animator } from "react-scroll-motion";
import { FADE_TEXT } from "../../config";

const Killer = () => {
  return (
    <ScrollPage>
      <div className="killer">
        <Animator animation={FADE_TEXT}>
          <h2>WHO IS RUZZIA?</h2>
        </Animator>
      </div>
    </ScrollPage>
  );
};

export default Killer;

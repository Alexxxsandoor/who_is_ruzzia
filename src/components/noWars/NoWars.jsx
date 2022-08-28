import React from "react";
import { ScrollPage, Animator } from "react-scroll-motion";
import { SCROLL_OUT } from "../../config";
import "./nowars-style.scss";

const NoWars = () => {
  return (
    <ScrollPage>
      <Animator animation={SCROLL_OUT}>
        <div className="no-wars">
          <h2>
            Do you think there were no more <span>wars?..</span>
          </h2>
        </div>
      </Animator>
    </ScrollPage>
  );
};

export default NoWars;

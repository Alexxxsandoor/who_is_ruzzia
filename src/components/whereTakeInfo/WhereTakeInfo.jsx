import React from "react";
import { ScrollPage, Animator } from "react-scroll-motion";
import { SCROLL_OUT } from "../../config";
import "./whereTakeInfo-style.scss";

const WhereTakeInfo = () => {
  return (
    <ScrollPage>
      <div className="container-where-take-info">
        <Animator animation={SCROLL_OUT}>
          <p className="where-take-info">
            Information about <span>100,000</span> dead people in Ukraine is not
            complete. Statistics are kept without taking into account dead
            people in the occupied territories. Right now <span>Russia</span> is{" "}
            <span>killing</span> Ukrainians, this is not the{" "}
            <span>first time</span> for them...
          </p>
          <br />
        </Animator>
        <a
          target="_blank"
          href="https://en.wikipedia.org/wiki/List_of_wars_involving_Russia"
        >
          where did the information come from
        </a>
      </div>
    </ScrollPage>
  );
};

export default WhereTakeInfo;

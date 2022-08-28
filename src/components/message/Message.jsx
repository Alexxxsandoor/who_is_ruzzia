import React from "react";
import { ScrollPage, Animator } from "react-scroll-motion";
import { SCROLL_OUT } from "../../config";
import "./message-style.scss";
const Messeng = (props) => {
  const { text } = props;
  return (
    <ScrollPage>
      <Animator animation={SCROLL_OUT}>
        <div className="message">
          <h2>{text}</h2>
        </div>
      </Animator>
    </ScrollPage>
  );
};

export default Messeng;

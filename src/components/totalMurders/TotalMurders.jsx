import React from "react";
import { ScrollPage, Animator } from "react-scroll-motion";
import { SCROLL_OUT, ROUNDING } from "../../config";
import "./totalMurders-style.scss";

const TotalMurders = (props) => {
  const { total } = props.state;
  let numbFmt = new Intl.NumberFormat("ru-RU").format(
    ROUNDING(total * 1000000)
  );
  return (
    <ScrollPage>
      <Animator animation={SCROLL_OUT}>
        <div className="total-murders">
          <h4>
            Population of Canada: 38 949 390
            <br />
            Population of Australia: 26 509 000
          </h4>
          <h3>
            {numbFmt}
            <br />
            MURDERS
          </h3>
          <h4>
            Population of Kazakhstan: 19 320 935
            <br />
            Population of Greece: 10 741 165
          </h4>
        </div>
      </Animator>
    </ScrollPage>
  );
};

export default TotalMurders;

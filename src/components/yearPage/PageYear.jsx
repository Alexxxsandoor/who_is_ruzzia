import React, { useEffect, useState } from "react";
import { ScrollPage, Animator, MoveIn } from "react-scroll-motion";
import { SCROLL_OUT } from "../../config";
import "./PageYear-style.scss";

const PageYear = (props) => {
  const {
    date,
    country,
    type,
    score,
    killer,
    dispatch = Function.prototype,
  } = props;
  const [plus, setPlus] = useState(true);

  useEffect(() => {
    if (plus) {
      setPlus(false);
      dispatch({ type: `${killer}`, value: score ? score : 0 });
      dispatch({ type: "total", value: score ? score : 0 });
    }
  }, [score]);

  return (
    <ScrollPage>
      <Animator animation={SCROLL_OUT}>
        <h3 className="dateYear">
          {date}
          <br />
          <span className="country">{country}</span>
          <span className="repression">{type ? ` - ${type}` : ""}</span>
          <br />
          <p className="score">
            {score ? (
              <>
                <span>+{score * 1000000}</span> murders
              </>
            ) : (
              ""
            )}
          </p>
        </h3>
      </Animator>
    </ScrollPage>
  );
};

export default PageYear;

import React, { useEffect, useState } from "react";
import { ScrollPage, Animator } from "react-scroll-motion";
import {
  MOVE_DOWN,
  MOVE_LEFT,
  MOVE_RIGHT,
  SCROLL_OUT,
  ROUNDING,
} from "../../config";
import "./killSchedule-style.scss";

const KillSchedule = (props) => {
  const { dispatch = Function.prototype } = props;
  const { stalyn, khrushchev, brezhnev, yeltsin, putin, total } = props.state;
  const [seconds, setSeconds] = useState(0);
  const numbFmt = (number) => {
    return new Intl.NumberFormat("ru-RU").format(ROUNDING(number));
  };

  useEffect(() => {
    setTimeout(setSeconds, 2500, seconds + 1);
    dispatch({ type: "total", value: 1 / 1000000 });
    dispatch({ type: "putin", value: 1 / 1000000 });
  }, [seconds]);

  return (
    <ScrollPage>
      <Animator animation={SCROLL_OUT}>
        <div className="kill-schedule">
          <Animator animation={MOVE_RIGHT}>
            <h5>
              Stalyn: <span>{numbFmt(ROUNDING(stalyn * 1000000))} murders</span>
            </h5>
          </Animator>
          <Animator animation={MOVE_LEFT}>
            <h5>
              Khrushchev: <span>{numbFmt(khrushchev * 1000000)} murders</span>
            </h5>
          </Animator>
          <Animator animation={MOVE_RIGHT}>
            <h5>
              Brezhnev: <span>{brezhnev * 1000000} murders</span>
            </h5>
          </Animator>
          <Animator animation={MOVE_LEFT}>
            <h5>
              Yeltsin:{" "}
              <span>{numbFmt(ROUNDING(yeltsin * 1000000))} murders</span>
            </h5>
          </Animator>
          <Animator animation={MOVE_RIGHT}>
            {" "}
            <h5>
              Putin: <span>{numbFmt(ROUNDING(putin * 1000000))} murders</span>
            </h5>
          </Animator>
          <Animator animation={MOVE_DOWN}>
            {" "}
            <h5 className="total">
              TOTAL <span>MURDERS: {numbFmt(ROUNDING(total * 1000000))} </span>
            </h5>
          </Animator>
        </div>
      </Animator>
    </ScrollPage>
  );
};

export default KillSchedule;

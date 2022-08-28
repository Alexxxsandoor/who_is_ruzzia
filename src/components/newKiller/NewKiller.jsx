import React from "react";
import { ScrollPage, Animator } from "react-scroll-motion";
import { SCROLL_OUT } from "../../config";
import "./newKiller.scss";

const NewKiller = (props) => {
  const { firsName, lastName, yearStart, yearEND, urlIMG, ruled } = props;

  let presidents = "president";
  if (yearStart === 1982) presidents = "presidents";

  return (
    <ScrollPage>
      <Animator animation={SCROLL_OUT}>
        <div className="king-killer">
          <div className="new-killer">
            <h2>
              new{" "}
              {yearStart === 1982 || yearStart === 1985 ? (
                presidents
              ) : (
                <span>KING</span>
              )}
            </h2>
            <h4>
              {firsName} <span>{lastName}</span>
            </h4>
            <p>
              {yearStart} - {yearEND}:{" "}
              <span>
                {ruled} {yearEND - yearStart} years
              </span>
            </p>
          </div>
          <div className="image-killer">
            <img src={urlIMG} alt="killer" />
          </div>
        </div>
      </Animator>
    </ScrollPage>
  );
};

export default NewKiller;

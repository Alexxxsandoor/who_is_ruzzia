import React from "react";
import {
  ScrollPage,
  Animator,
  ZoomIn,
  MoveOut,
  MoveIn,
  batch,
} from "react-scroll-motion";
import { FADE_UP, ZOOM_IN_SCROLL_OUT } from "../../config";
import "./year1939Poland-style.scss";
const MolotovRibbentrop = () => {
  const hitlerURL = "https://pngimg.com/uploads/hitler/hitler_PNG37.png";
  const stalynUrl =
    "https://papik.pro/uploads/posts/2021-11/thumbs/1636049763_12-papik-pro-p-stalin-vektornii-risunok-12.png";
  const polandGIF =
    "https://upload.wikimedia.org/wikipedia/commons/8/88/Kamp-wrzes22-anim.gif";

  return (
    <ScrollPage>
      <div className="molotov-ribbentrop">
        <Animator animation={batch(MoveIn(-1000, 0), MoveOut(-1000, 0))}>
          <div className="Hitler">
            <img style={{ background: "white" }} src={hitlerURL} />
            <h2>
              Hitler
              <br />
              <span>Nazi Germany</span>
            </h2>
          </div>
        </Animator>

        <div className="poland-info">
          <img className="polandGif" src={polandGIF} />
          <h2>Molotov-Ribbentrop pact</h2>
          <p>
            The Molotov–Ribbentrop Pact was a non-aggression pact between Nazi
            Germany and the Soviet Union that enabled those two powers to
            partition Poland between them
          </p>
        </div>
        <Animator animation={batch(MoveIn(0, -1000), MoveOut(0, -1000))}>
          <div className="Stalyn">
            <img style={{ background: "white" }} src={stalynUrl} />
            <h2>
              Stalyn
              <br />
              <span>U.S.S.R</span>
            </h2>
          </div>
        </Animator>
      </div>
    </ScrollPage>
  );
};

export default MolotovRibbentrop;

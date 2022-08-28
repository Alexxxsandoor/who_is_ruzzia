import {
  StickyIn,
  FadeIn,
  ZoomIn,
  batch,
  Fade,
  Move,
  Sticky,
  MoveIn,
  MoveOut,
} from "react-scroll-motion";

import holodomorimg1 from "./image/holodomor-img/img1.jpg";
import holodomorimg2 from "./image/holodomor-img/img2.jpg";
import holodomorimg3 from "./image/holodomor-img/img3.jpg";
import holodomorimg4 from "./image/holodomor-img/img4.jpg";
import holodomorimg5 from "./image/holodomor-img/img5.jpg";
import holodomorimg6 from "./image/holodomor-img/img6.jpg";
import holodomorimg7 from "./image/holodomor-img/img7.jpg";
import holodomorimg8 from "./image/holodomor-img/img8.jpg";
import holodomorimg9 from "./image/holodomor-img/img9.jpg";
import holodomorimg10 from "./image/holodomor-img/img10.jpg";

import ukraineimg1 from "./image/ukraine-img/img1.jpg";
import ukraineimg2 from "./image/ukraine-img/img2.jpg";
import ukraineimg3 from "./image/ukraine-img/img3.jpg";
import ukraineimg4 from "./image/ukraine-img/img4.jpg";
import ukraineimg5 from "./image/ukraine-img/img5.jpg";
import ukraineimg6 from "./image/ukraine-img/img6.jpg";
import ukraineimg7 from "./image/ukraine-img/img7.jpg";
import ukraineimg8 from "./image/ukraine-img/img8.jpg";
import ukraineimg9 from "./image/ukraine-img/img9.jpg";
import ukraineimg10 from "./image/ukraine-img/img10.jpg";
import ukraineimg11 from "./image/ukraine-img/img11.jpg";
import ukraineimg12 from "./image/ukraine-img/img12.jpg";
import ukraineimg13 from "./image/ukraine-img/img13.jpg";
import ukraineimg14 from "./image/ukraine-img/img14.jpg";
import ukraineimg15 from "./image/ukraine-img/img15.jpg";
import ukraineimg16 from "./image/ukraine-img/img16.jpg";
import ukraineimg17 from "./image/ukraine-img/img17.jpg";
import ukraineimg18 from "./image/ukraine-img/img18.jpg";
import ukraineimg19 from "./image/ukraine-img/img19.jpg";
import ukraineimg20 from "./image/ukraine-img/img20.jpg";
import ukraineimg21 from "./image/ukraine-img/img21.jpg";

export const holodomorImage = [
  {
    url: holodomorimg1,
  },
  {
    url: holodomorimg2,
  },
  {
    url: holodomorimg3,
  },
  {
    url: holodomorimg4,
  },
  {
    url: holodomorimg5,
  },
  {
    url: holodomorimg6,
  },
  {
    url: holodomorimg7,
  },
  {
    url: holodomorimg8,
  },
  {
    url: holodomorimg9,
  },
  {
    url: holodomorimg10,
  },
  {
    url: holodomorimg3,
  },
  {
    url: holodomorimg4,
  },
  {
    url: holodomorimg5,
  },
  {
    url: holodomorimg6,
  },
  {
    url: holodomorimg7,
  },
  {
    url: holodomorimg8,
  },
  {
    url: holodomorimg9,
  },
  {
    url: holodomorimg10,
  },
];

export const ukraineImage = [
  {
    url: ukraineimg1,
  },
  {
    url: ukraineimg2,
  },
  {
    url: ukraineimg3,
  },
  {
    url: ukraineimg4,
  },
  {
    url: ukraineimg5,
  },
  {
    url: ukraineimg6,
  },
  {
    url: ukraineimg7,
  },
  {
    url: ukraineimg8,
  },
  {
    url: ukraineimg9,
  },
  {
    url: ukraineimg10,
  },
  {
    url: ukraineimg11,
  },
  {
    url: ukraineimg12,
  },
  {
    url: ukraineimg13,
  },
  {
    url: ukraineimg14,
  },
  {
    url: ukraineimg15,
  },
  {
    url: ukraineimg16,
  },
  {
    url: ukraineimg17,
  },
  {
    url: ukraineimg18,
  },
  {
    url: ukraineimg19,
  },
  {
    url: ukraineimg20,
  },
  {
    url: ukraineimg21,
  },
  {
    url: ukraineimg13,
  },
  {
    url: ukraineimg14,
  },
  {
    url: ukraineimg15,
  },
  {
    url: ukraineimg16,
  },
  {
    url: ukraineimg17,
  },
  {
    url: ukraineimg18,
  },
  {
    url: ukraineimg19,
  },
  {
    url: ukraineimg21,
  },
];

export const ZOOM_IN_SCROLL_OUT = batch(StickyIn(), FadeIn(), ZoomIn());
export const SCROLL_OUT = batch(StickyIn(), FadeIn());
export const FADE_UP = batch(Fade(), Move(), Sticky());
export const FADE = batch(Fade(), Move());
export const FADE_TEXT = batch(Sticky(), Fade());

export const MOVE_LEFT = batch(MoveOut(-500, 0), MoveIn(-500, 0));
export const MOVE_RIGHT = batch(MoveOut(+500, 0), MoveIn(+500, 0));
export const MOVE_DOWN = batch(MoveOut(0, +1000), MoveIn(0, +1000));

export const ROUNDING = (number) => +number.toFixed(2);

import React from "react";
import Film from "../../components/Film/Film";
import Introduction from "../../components/Introduction/Introduction";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { film } from "../../components/Film/Film";
import { film2 } from "../../components/Film/Film";
import { film3 } from "../../components/Film/Film";
import { film4 } from "../../components/Film/Film";
import { film5 } from "../../components/Film/Film";
import { film6 } from "../../components/Film/Film";
import { film7 } from "../../components/Film/Film";
import { film8 } from "../../components/Film/Film";
import { film9 } from "../../components/Film/Film";
import { film10 } from "../../components/Film/Film";

import "./Films.css";

export default function Films() {
  return (
    <>
      <Header />
      <Introduction />
      <p className="films-title">Oblíbené na netflixu</p>
      <Film instance={film} />
      <Film instance={film2} />
      <Film instance={film3} />
      <Film instance={film4} />
      <Film instance={film5} />

      <p className="films-title">Uvedeno v posledním roce</p>
      <Film instance={film6} />
      <Film instance={film7} />
      <Film instance={film8} />
      <Film instance={film9} />
      <Film instance={film10} />
      <Footer />
    </>
  );
}

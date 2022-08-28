import React, { useReducer } from "react";
// import { reducer, initialState } from "./reducer";
import stalyn from "./image/stalyn.gif";
import khrushchev from "./image/khrushchev.gif";
import brezhnev from "./image/brezhnev.gif";
import yeltsin from "./image/yeltsin.gif";
import andropovChernenko from "./image/andropov-chernenko-1983.jpg";
import gorbachev from "./image/gorbachev.jpg";
import putin from "./image/putin.gif";

import { ScrollContainer } from "react-scroll-motion";

import WhoIsRussia from "./components/whoIsRussia/WhoIsRussia";
import Killer from "./components/whoIsRussia/Killer";
import War from "./components/whoIsRussia/War";
import MolotovRibbentrop from "./components/year1939Poland/MolotovRibbentrop";
import PageYear from "./components/yearPage/PageYear";
import Holodomor from "./components/holodomor/Holodomor";
import NewKiller from "./components/newKiller/NewKiller";
import NoWars from "./components/noWars/NoWars";
import Message from "./components/message/Message";
import KillSchedule from "./components/killSchedule/KillSchedule";
import Ukraine from "./components/ukraine/Ukraine";
import Donate from "./components/donate/Donate";
import TotalMurders from "./components/totalMurders/TotalMurders";
import WhereTakeInfo from "./components/whereTakeInfo/WhereTakeInfo";
import { initialState, reducer } from "./reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ScrollContainer snap="proximity">
      <WhoIsRussia />
      <War />
      <NewKiller
        key="asd"
        firsName={"Joseph Vissarionovich"}
        lastName={"Stalin"}
        ruled={"ruled"}
        yearStart={1922}
        yearEND={1953}
        urlIMG={stalyn}
      />
      <PageYear
        date={"1932-1933"}
        country={"Ukraine"}
        score={10.5}
        dispatch={dispatch}
        killer={"stalyn"}
        type={'GENOCIDE "HOLODOMOR"'}
      />
      <Holodomor />
      <PageYear
        date={"1939.09.17"}
        country={"POLAND"}
        type={"WAR"}
        dispatch={dispatch}
        killer={"stalyn"}
        score={0.0035}
      />
      <MolotovRibbentrop />
      <PageYear
        date={"1939-1940"}
        country={"Finland"}
        type={"WAR"}
        dispatch={dispatch}
        killer={"stalyn"}
        score={0.025}
      />

      <PageYear
        date={"1941-1945"}
        country={"The Great Patriotic War"}
        type={"Hitler attacked USSR"}
        dispatch={dispatch}
        killer={"stalyn"}
        score={13}
      />
      <PageYear
        date={"1944-1954"}
        country={"Western Ukraine"}
        type={"repression"}
        dispatch={dispatch}
        killer={"stalyn"}
        score={0.155}
      />
      <PageYear
        date={"1944-1954"}
        country={"Lithuania"}
        type={"repression"}
        dispatch={dispatch}
        killer={"stalyn"}
        score={0.03}
      />
      <PageYear
        date={"1945"}
        country={"Japanese empire"}
        type={"annexation of territories"}
        dispatch={dispatch}
        killer={"stalyn"}
        score={0.084}
      />
      <PageYear
        date={"1950-1953"}
        country={"Korean peninsula"}
        type={"help in WAR"}
        dispatch={dispatch}
        killer={"stalyn"}
        score={0.1}
      />
      <NewKiller
        firsName={"Nikita Sergeevich"}
        lastName={"Khrushchev"}
        ruled={"ruled"}
        yearStart={1953}
        yearEND={1964}
        urlIMG={khrushchev}
      />
      <PageYear
        date={"1956"}
        country={"Hungary"}
        type={"repression"}
        dispatch={dispatch}
        killer={"khrushchev"}
        score={0.003}
      />
      <PageYear
        date={"1957-1975"}
        country={"Indochina"}
        dispatch={dispatch}
        killer={"khrushchev"}
        type={"help in WAR"}
        score={0.3}
      />
      <NewKiller
        firsName={"Leonid Ilyich"}
        lastName={"Brezhnev"}
        ruled={"ruled"}
        yearStart={1964}
        yearEND={1982}
        urlIMG={brezhnev}
      />
      <NoWars />
      <PageYear
        date={"1968"}
        country={"Czechoslovakia"}
        type={"WAR"}
        score={0.001}
        dispatch={dispatch}
        killer={"brezhnev"}
      />
      <PageYear
        date={"1975-1991"}
        country={"Angola"}
        type={"help in WAR"}
        score={0.001}
        dispatch={dispatch}
        killer={"brezhnev"}
      />
      <PageYear
        date={"1979-1989"}
        country={"Afghan war"}
        type={"WAR"}
        score={0.09}
        dispatch={dispatch}
        killer={"brezhnev"}
      />
      <NewKiller
        firsName={""}
        lastName={"Andropov and Chernenko"}
        ruled={"ruled"}
        yearStart={1982}
        yearEND={1985}
        urlIMG={andropovChernenko}
      />
      <NewKiller
        firsName={"Mikhail Sergeyevich"}
        lastName={"Gorbachev"}
        ruled={"ruled"}
        yearStart={1985}
        yearEND={1991}
        urlIMG={gorbachev}
      />
      <Message text={"Has Russia stopped and won’t continue fighting?"} />
      <NewKiller
        firsName={"Boris Nikolaevich"}
        lastName={"Yeltsin"}
        ruled={"ruled"}
        yearStart={1991}
        yearEND={1999}
        urlIMG={yeltsin}
      />
      <PageYear
        date={"1991-1993"}
        country={"Georgia"}
        type={"Civil WAR"}
        dispatch={dispatch}
        killer={"yeltsin"}
        score={0.0004}
      />
      <PageYear
        date={"1992"}
        country={"Transnistria, Moldova"}
        type={"Weapon Support"}
        score={0.0004}
        dispatch={dispatch}
        killer={"yeltsin"}
      />
      <PageYear
        date={"1992-1993"}
        country={"Abkhazia, Georgia"}
        type={"WAR"}
        score={0.004}
        dispatch={dispatch}
        killer={"yeltsin"}
      />
      <PageYear
        date={"1992-1997"}
        country={"Tajikistan"}
        type={"Civil WAR"}
        score={0.1}
        dispatch={dispatch}
        killer={"yeltsin"}
      />
      <PageYear
        date={"1994-1996"}
        country={"Chechnya, Russia"}
        type={"first WAR"}
        score={0.02}
        dispatch={dispatch}
        killer={"yeltsin"}
      />
      <PageYear
        date={"1999"}
        country={"Dagestan, Russia"}
        type={"WAR"}
        score={0.003}
        dispatch={dispatch}
        killer={"yeltsin"}
      />
      <PageYear
        date={"1999-2009"}
        country={"Chechnya, Russia"}
        type={"second WAR"}
        score={0.02}
        dispatch={dispatch}
        killer={"yeltsin"}
      />
      <Message text={`Lord, let Russia calm down and stop the wars!`} />
      <Message text={"All hope for the new president..."} />
      <NewKiller
        firsName={"Vladimir Vladimirovich "}
        lastName={"Putin"}
        ruled={"rule"}
        yearStart={2000}
        yearEND={2022}
        urlIMG={putin}
      />
      <PageYear
        date={"2008"}
        country={"South Ossetia, Abkhazia, Georgia"}
        type={"WAR"}
        score={0.002}
        dispatch={dispatch}
        killer={"putin"}
      />
      <PageYear
        date={"2009-2017"}
        country={"North Caucasus, Russia"}
        type={'"Fight against terrorism"'}
        score={0.003}
        dispatch={dispatch}
        killer={"putin"}
      />
      <PageYear
        date={"2014"}
        country={"Ukraine: Crimea"}
        type={"annexation of territories"}
        dispatch={dispatch}
        killer={"putin"}
      />
      <PageYear
        date={"2014-..."}
        country={"Ukraine: Donetsk, Lugansk"}
        type={"WAR"}
        score={0.03}
        dispatch={dispatch}
        killer={"putin"}
      />
      <PageYear
        date={"2015-..."}
        country={"Syria"}
        type={"WAR"}
        score={0.13}
        dispatch={dispatch}
        killer={"putin"}
      />
      <PageYear
        date={"2018-..."}
        country={"Central African Republic"}
        type={"Civil WAR"}
        score={0.005}
        dispatch={dispatch}
        killer={"putin"}
      />
      <PageYear
        date={"2022.02.24-..."}
        country={"Ukraine"}
        type={"WAR"}
        score={0.1}
        dispatch={dispatch}
        killer={"putin"}
      />
      <Ukraine />
      <KillSchedule dispatch={dispatch} killer={"total"} state={state} />
      <TotalMurders state={state} />
      <Killer />
      <WhereTakeInfo />
      <Donate />
    </ScrollContainer>
  );
}

export default App;

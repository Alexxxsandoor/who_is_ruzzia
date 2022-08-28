import React from "react";
import { ScrollPage } from "react-scroll-motion";
import "./donate-style.scss";

const Donate = () => {
  return (
    <ScrollPage>
      <div className="donate">
        <h2>I ask you to send this site to everyone you know!</h2>
        <p>
          Help to Ukraine:
          <br />
          <a target="_blank" href="https://prytulafoundation.org/">
            "Sergey Prytula" Aid Fund for Ukraine
          </a>
          <br />
          <br />
          <a rel="noopener" target="_blank" href="https://savelife.in.ua/">
            "Come Back Alive" Foundation
          </a>
        </p>
        <br />
        <>
          You can also help the author find a job Frontend Developer(react){" "}
          <a
            className="linkidin"
            target="_blank"
            href="https://www.linkedin.com/in/aleksandr-verstukov-357741245/"
          >
            My LinkedIn
          </a>
          <p>
            <br />
            <a target="_blank" href="https://send.monobank.ua/jar/2Qq75bhfjs">
              Project support
            </a>
          </p>
        </>
      </div>
    </ScrollPage>
  );
};

export default Donate;

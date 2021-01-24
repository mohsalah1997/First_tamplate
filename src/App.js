import React, { Component } from "react";
import BodyProps from "./bodyProps";
import "./App.css";
import text from "./text.json";

const { nav, mainContent, contact, cta, footer } = text;
const navBar = Object.values(nav);
const content = Object.values(cta);
const body = Object.values(mainContent);
const contact_me = Object.values(contact);
const footer_app = Object.values(footer);

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="navbar">
          {navBar.map((e, index) =>
            !e.includes(".") ? (
              <li key={index} className="navbar-li">
                {" "}
                {e}
              </li>
            ) : (
              <li key={index} className="navbar-li">
                {" "}
                <img
                  alt="logo"
                  src={require(`${e}`)}
                  className="navbar__logo"
                />
              </li>
            )
          )}
        </ul>
        <div className="content">
          <div className="left">
            <div className="left-h1">
              {" "}
              <h1>{content[0].split(" ")[0]}</h1>
              <h1>{content[0].split(" ")[1]}</h1>
              <h1>{content[0].split(" ")[2]}</h1>
            </div>

            <button>{content[1]}</button>
          </div>
          <div className="right">
            <img
              src={require(`${content[2]}`)}
              className="content_img"
              alt=""
            />
          </div>
        </div>
        <div className="body">
          <div className="body-top">
            <BodyProps title={body[0]} contentBody={body[1]} />
            <BodyProps title={body[2]} contentBody={body[3]} />
          </div>
          {/* <div className="body-mid"></div> */}
          <img src={require(`${body[4]}`)} className="body_img" alt="" />

          <div className="body-buttom">
            <BodyProps title={body[5]} contentBody={body[6]} />
            <BodyProps title={body[7]} contentBody={body[8]} />
            <BodyProps title={body[9]} contentBody={body[10]} />
          </div>
        </div>
        <div className="contact">
          {contact_me.map((e) =>
            !e.includes(" ") ? <h4>{e}</h4> : <h5>{e}</h5>
          )}
        </div>

        <h5 className="footar">{footer_app[0]}</h5>
      </div>
    );
  }
}

export default App;

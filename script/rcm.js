function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}import React from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const API = "https://type.fit/api/quotes";

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      quotes:
      "Genius is one percent inspiration and ninety-nine percent perspiration.",
      authors: "Thomas Edison",
      index: 0 });_defineProperty(this, "getRandomIndex",


    () => {
      fetch(API).
      then(res => res.json()).
      then(res => {
        this.setState({
          index: Math.floor(Math.random() * res.length),
          quotes: res[this.state.index].text,
          authors: res[this.state.index].author });

      });
    });}

  render() {
    const tweetURL = `https://twitter.com/intent/tweet?text=${this.state.quotes}-${this.state.authors}`;
    return /*#__PURE__*/(
      React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
      React.createElement("header", { id: "text" }, /*#__PURE__*/
      React.createElement("i", { class: "fa fa-quote-left" }), " ", this.state.quotes, /*#__PURE__*/
      React.createElement("i", { class: "fa fa-quote-right" })), /*#__PURE__*/

      React.createElement("p", { id: "author" }, "- ", this.state.authors), /*#__PURE__*/
      React.createElement("button", { id: "new-quote", onClick: this.getRandomIndex }, "New Quote"), /*#__PURE__*/


      React.createElement("a", {
        href: tweetURL,
        id: "tweet-quote",
        title: "Tweet this quote!",
        target: "_top",
        class: "fa fa-twitter" })));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));
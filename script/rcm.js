import React from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const API =
    "https://type.fit/api/quotes";

class App extends React.Component {
    state = {
    quotes: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    authors: "Thomas Edison",
    index: 0
  }
 
  getRandomIndex = () => {
     fetch(API).then(res => res.json()).then(res => {
      this.setState({
        index: Math.floor(Math.random() * res.length),
        quotes: res[this.state.index].text,
        authors: res[this.state.index].author
      })
    })
  }
  

  
  render() {
 const tweetURL = `https://twitter.com/intent/tweet?text=${this.state.quotes}-${this.state.authors}`;
    return (
        <div id="quote-box">
            <header id="text"><i class="fa fa-quote-left"></i> {this.state.quotes}<i class="fa fa-quote-right"></i></header>
            <p id="author">- {this.state.authors}</p>
            <button id="new-quote" onClick={this.getRandomIndex}>New Quote</button>
            <a href ={tweetURL} id="tweet-quote" title="Tweet this quote!" target="_top" class="fa fa-twitter"></a>
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

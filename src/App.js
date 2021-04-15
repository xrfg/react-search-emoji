import React from "react";
import EmojiContainer from "./Components/EmojiContainer";
// import { render } from "react-dom";
import Header from "./Components/Header";
import emojiList from "./json/emoji.json";

class App extends React.Component {
  state = {
    searchValue: "",
    emojiData: emojiList,
  };

  grabValueFromInput = (e) => {
    // console.log(e.target.value, "user is typing");
    // store input data into state

    let filteredEmojis = this.state.emojiData.filter((item) => {
      let inputValue = e.target.value.toLowerCase();

      // if u return true it will return that item on the array
      if (item.title.toLowerCase().includes(inputValue)) {
        return true;
      }
      if (item.keywords.toLowerCase().includes(inputValue)) {
        return true;
      }

      // if not --> return false
      return false;
    });

    this.setState({
      searchValue: e.target.value,
      emojiData: filteredEmojis,
    });
  };

  render() {
    // console.log("render in App", this.state.searchValue);
    return (
      <div className="App" style={{ backgroundColor: "#EAEDF0" }}>
        <Header />
        <div
          style={{ display: "flex", justifyContent: "center", padding: "20px" }}
        >
          <input
            type="text"
            style={{
              fontSize: "16px",
              width: "300px",
              padding: "5px",
              outline: "none",
              borderRadius: "4px",
              border: "1px solid gray",
            }}
            onChange={this.grabValueFromInput}
          />
        </div>
        <EmojiContainer emojiData={this.state.emojiData} />
      </div>
    );
  }
}

export default App;

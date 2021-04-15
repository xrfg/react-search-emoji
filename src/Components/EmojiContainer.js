import React from "react";
import EmojiItem from "./EmojiItem";

export default function EmojiContainer(props) {
  return (
    <ul
      style={{
        width: "80vw",
        margin: "0 auto",
        padding: "20px",
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {props.emojiData.map((emoji) => {
        return <EmojiItem key={emoji.title} symbol={emoji.symbol} />;
      })}
    </ul>
  );
}

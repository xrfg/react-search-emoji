import React from "react";

export default function EmojiItem(props) {
  return (
    <li
      style={{
        listStyle: "none",
        width: "200px",
        height: "200px",
        textAlign: "center",
        lineHeight: "200px",
        fontSize: "40px",
        backgroundColor: "white",
        boxShadow: "3px 5px 5px gray",
      }}
    >
      {props.symbol}
    </li>
  );
}

import React from "react";
import GitHubButton from "react-github-btn";

export default function Header() {
  return (
    <div
      style={{ textAlign: "center", fontFamily: "sans-serif", padding: "20px" }}
    >
      <h1>
        Search Emoji{" "}
        <span aria-label="unicorn-emoji" role="img">
          &#x1F984;
        </span>
      </h1>
      <p>A simple emoji search tool made with ReactJS.</p>
      <p>
        <GitHubButton
          href="https://github.com/xrfg"
          data-icon="octicon-star"
          data-text="Star"
          data-show-count={true}
          data-size="large"
        />
        &nbsp;&nbsp;
        <GitHubButton
          href="https://github.com/xrfg"
          data-icon="octicon-repo-forked"
          data-text="Fork"
          data-show-count={true}
          data-size="large"
        />
      </p>
    </div>
  );
}

import React from "react";
import { Web3Provider, Web3Context } from "../components/Web3Context";

import { Web3EnabledWidget } from "../components/ExampleWeb3Widget"

export class App extends React.Component {
  render() {
    return (
      <Web3Provider>
        <Web3EnabledWidget></Web3EnabledWidget>
      </Web3Provider>
    );
  }
}

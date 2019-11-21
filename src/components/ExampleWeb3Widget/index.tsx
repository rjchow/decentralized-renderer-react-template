import React from "react";
import { Web3Context } from "../Web3Context";
import { Button } from "@material-ui/core";

export class Web3EnabledWidget extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Web3Context.Consumer>
        {({ web3 }) => {
          return <Widget web3={web3}></Widget>;
        }}
      </Web3Context.Consumer>
    );
  }
}

class Widget extends React.Component {
  constructor(props: { web3: any}) {
    super(props);

    this.state = {
      currentBlockNumber: 0
    };

    this.handleRefreshBlock.bind(this)
  }

  async handleRefreshBlock() {
    const blockNumber = await this.props.web3.eth.getBlockNumber();
    this.setState({ currentBlockNumber: blockNumber });
  }

  componentDidMount() {
    console.log("props", this.props)
  }

  render() {
    return (
      <>
        <p>{this.state.currentBlockNumber}</p>
        <Button onClick={this.handleRefreshBlock}>Test</Button>
      </>
    );
  }
}

import React, { Component } from "react";
import "./App.css";

class App extends Component {
  handleCreateTX = () => {
    // var mnemonic = bip39.generateMnemonic();

    // console.log(bip39.mnemonicToSeedHex(mnemonic));
    window.bitWeb.sendTransaction({
      network: 'bitcoin',
      to: '1MK2jqUQKnVzRLC79V18pdb3GM3CeAAqG',
      amount: 2000 * 1e8,
      data: "3r3243242334839248328efefeffefesfesfesfsghjhjyjygjydyjytjyt94"
    });


  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Demo wallets</h1>
        </header>
        <p className="App-intro">
          <button onClick={this.handleCreateTX}>Create TX</button>
        </p>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import Counter from './components/Counter';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 40,
    }
    this.mountCounter = () => this.setState({ mount: true });
    this.unmountCounter = () => this.setState({ mount: false });

    this.ignoreProp = () => this.setState({ ignoreProp: Math.random()});
    this.seedGenerator = () => this.setState({ seed: Number.parseInt(Math.random()*100) });
  }

  render() {
    return (
      <div>
        <button disabled={this.state.mount} onClick={this.mountCounter}>mount</button>
        <button disabled={!this.state.mount} onClick={this.unmountCounter}>unmount</button>
        <button onClick={this.ignoreProp}>ignore prop</button>
        <button onClick={this.seedGenerator}>generate seed</button>
        {this.state.mount
          ? <Counter
              ignoreProp={this.state.ignoreProp}
              seed={this.state.seed}
            />
          : null}
      </div>
    )
  }
}

export default App;

import React from "react";

// const ErrorComponent = () => <div>{props.ignore}</div>;

class Counter extends React.Component {
  constructor(props) {
    console.log('----------------')
    console.log('constructor run')
    super (props);

    this.state = {
      counter: 0,
      seed: 0,
      initializing: true
    }

    this.increment = () => this.setState({ counter: this.state.counter + 1});
    this.decrement = () => this.setState({ counter: this.state.counter - 1});
  }

  static getDerivedStateFromProps(props, state) { // copy any values from props into state
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed
      }
    }
    return null
  }

  componentDidMount() {
    console.log('component did mount');
    setTimeout(() => {
      this.setState({ initializing: false });
    }, 1000);
    console.log('-------------------')
  }

  shouldComponentUpdate(nextProps, nextState) { // should react re-render this component?
    console.log('should component update?')
    if (nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp) {
      console.log('no');
      return false;
    }
    console.log('yes')
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) { // capture some properties not stored in state before re-render
    console.log('get snapshot before update');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('component did update');
    console.log('--------------------')
  }

  componentWillUnmount() {
    console.log('component did mount');
  }

  componentDidCatch(error, info) {
    console.log('component did catch');
    this.setState({ error, info });
  }

  render() {
    console.log('render run');

    if (this.state.initializing) {
      return <div>initializing...</div>;
    }

    if (this.state.error) {
      console.log('catch in render', this.state.error)
      return <div>error!! {this.state.error.message}</div>;
    }
    return (
      <div>
        <div className="counter">
          Counter: {this.state.counter}
        </div>
        {/* <ErrorComponent /> */}
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.increment}>Increment</button>
      </div>
     )
  }
}

export default Counter;
import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count)
  }


  //// if in case you want to call one function after other use:
  // increment() {
  //   this.setState({
  //     count: this.state.count + 1
  //   }, () => {
  //     console.log('Callback value ', this.state.count)
  //   })
  //  }


  ////using Prev state
  // increment() {
  //   this.setState(prevState => ({
  //     count: prevState.count + 1
  //   }))
  //   console.log(this.state.count)
  // }

  //// Prev state with props
  // increment() {
  //   this.setState((prevState, props) => ({
  //     count: prevState.count + props.addValue
  //   }))
  //   console.log(this.state.count)
  // }

  // incrementFive() {
  //   this.increment()
  //   this.increment()
  //   this.increment()
  //   this.increment()
  //   this.increment()
  // }

  render() {
    return (
      <div>
        Count - {this.state.count}
        <br />
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    )
  }
}

export default Counter

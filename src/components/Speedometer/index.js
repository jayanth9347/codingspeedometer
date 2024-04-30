import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrese = () => {
    this.setState(prv => {
      console.log(`clicked ${prv.count}`)
      return {count: prv.count + 10}
    })
  }
  ondecrese = () => {
    this.setState(prv => {
      console.log(`clicked ${prv.count}`)
      return {count: prv.count - 10}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="background">
        <h1> SPEEDOMETER </h1>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="image" alt="speedometer"
          />
        </div>
        <h1> Speed is {count}mph </h1>
        <p className="para">
          Min Limit is 0mph, Max Limit is 200mph
        </p>
        <div>
          <button className="buttonblue" onClick={this.onIncrese}>
            {' '}
            Accelerate {' '}
          </button>
          <button className="button" onClick={this.ondecrese}>
            {' '}
            Apply Brake{' '}
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer

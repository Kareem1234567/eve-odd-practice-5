// Write your code here
import {Component} from 'react'

import './index.css'

import {random} from 'nanoid'

class EvenOddApp extends Component {
  state = {status: 0}

  randomNumberGenerator = () => {
    const num = Math.floor(Math.random() * 100)
    this.setState(prevState => ({status: prevState.status + num}))
  }

  render() {
    const {status} = this.state

    const getNumStatus = () => {
      if (status % 2 === 0) {
        return 'Even'
      }
      return 'Odd'
    }

    return (
      <div className="bg-container">
        <div className="even-odd-container">
          <h1 className="heading">Count {status}</h1>
          <p className="paragraph">Count is {getNumStatus()}</p>
          <button
            className="increment-button"
            type="button"
            onClick={this.randomNumberGenerator}
          >
            Increment
          </button>
          <p className="description">
            Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp

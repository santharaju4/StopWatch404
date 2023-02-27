// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, isTimeInSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.timerIntervalId)
  }

  onResetTime = () => {
    clearInterval(this.timerIntervalId)
    this.setState({isTimerRunning: false, isTimeInSeconds: 0})
  }

  onStopTime = () => {
    clearInterval(this.timerIntervalId)
    this.setState({isTimerRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      isTimeInSeconds: prevState.isTimeInSeconds + 1,
    }))
  }

  onStartTime = () => {
    const {isTimerRunning} = this.state
    console.log(isTimerRunning)
    this.timerIntervalId = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  renderTimerInSeconds = () => {
    const {isTimeInSeconds} = this.state

    const minutes = Math.floor(isTimeInSeconds / 60)
    const seconds = Math.floor(isTimeInSeconds % 60)
    const stringifiedMinutes = minutes > 10 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 10 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="clock-image"
              />
              <h1 className="title">Timer</h1>
            </div>
            <h1 className="stopwatch-timer">{this.renderTimerInSeconds()}</h1>

            <div className="buttons-container">
              <button
                type="button"
                className="button start-button"
                onClick={this.onStartTime}
              >
                Start
              </button>
              <button
                type="button"
                className="button stop-button"
                onClick={this.onStopTime}
              >
                Stop
              </button>
              <button
                type="button"
                className="button reset-button"
                onClick={this.onResetTime}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch

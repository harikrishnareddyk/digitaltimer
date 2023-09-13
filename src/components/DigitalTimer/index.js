import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {
    seconds: 0,
    minutes: 25,
    status: false,
    stringifiedMinutes: '25',
    stringifiedSeconds: '00',
    interval: '',
  }

  increment = () => {
    const {seconds, minutes} = this.state
    this.setState(prevState => ({minutes: prevState.minutes + 1}))
    const stringifiedMinutes1 = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds1 = seconds > 9 ? seconds : `0${seconds}`
    this.setState({stringifiedMinutes: stringifiedMinutes1})
    this.setState({stringifiedSeconds: stringifiedSeconds1})
  }

  decrement = () => {
    const {seconds, minutes} = this.state
    this.setState(prevState => ({minutes: prevState.minutes - 1}))
    const stringifiedMinutes1 = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds1 = seconds > 9 ? seconds : `0${seconds}`
    this.setState({stringifiedMinutes: stringifiedMinutes1})
    this.setState({stringifiedSeconds: stringifiedSeconds1})
  }

  seconds = () => {
    const {seconds, minutes} = this.state
    this.setState(prevState => ({seconds: prevState.seconds - 1}))
    if (seconds === 0) {
      this.setState({seconds: 59})
      this.setState(prevState => ({minutes: prevState.minutes - 1}))
    }
    const stringifiedMinutes1 = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds1 = seconds > 9 ? seconds : `0${seconds}`
    this.setState({stringifiedMinutes: stringifiedMinutes1})
    this.setState({stringifiedSeconds: stringifiedSeconds1})
  }

  start = () => {
    const {seconds, minutes, status} = this.state
    const timer = setInterval(this.seconds, 1000)
    console.log(seconds)
    this.setState({interval: timer})
    this.setState({status: true})
    const stringifiedMinutes1 = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds1 = seconds > 9 ? seconds : `0${seconds}`
    this.setState({stringifiedMinutes: stringifiedMinutes1})
    this.setState({stringifiedSeconds: stringifiedSeconds1})
  }

  pause = () => {
    const {seconds, minutes, status, interval} = this.state
    clearInterval(interval)
    console.log(seconds)
    this.setState({status: false})
    const stringifiedMinutes1 = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds1 = seconds > 9 ? seconds : `0${seconds}`
    this.setState({stringifiedMinutes: stringifiedMinutes1})
    this.setState({stringifiedSeconds: stringifiedSeconds1})
  }

  resetEl = () => {
    const {
      interval,
      seconds,
      minutes,
      status,
      stringifiedMinutes,
      stringifiedSeconds,
    } = this.state
    this.setState({seconds: 0, minutes: 25})
    this.setState({status: false})
    clearInterval(interval)
    const stringifiedMinutes1 = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds1 = seconds > 9 ? seconds : `0${seconds}`
    this.setState({stringifiedMinutes: stringifiedMinutes1})
    this.setState({stringifiedSeconds: stringifiedSeconds1})
  }

  render() {
    const {
      seconds,
      minutes,
      status,
      stringifiedMinutes,
      stringifiedSeconds,
    } = this.state
    return (
      <div>
        <h1>Digital timer</h1>
        <div>
          <div className="image">
            <div className="timer">
              <h1>
                {stringifiedMinutes}:{stringifiedSeconds}
              </h1>
              {status ? <p>Running</p> : <p>Paused</p>}
            </div>
          </div>
          <div>
            <div className="control-Buttons">
              <div className="row">
                {status ? (
                  <div>
                    <button>
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                        alt="pause icon"
                      />
                    </button>
                    <button onClick={this.pause}>Pause</button>
                  </div>
                ) : (
                  <div>
                    <button>
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                        alt="play icon"
                      />
                    </button>
                    <button onClick={this.start}>Start</button>
                  </div>
                )}
              </div>
              <div className="row">
                <button onClick={this.resetEl}>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                  />
                </button>
                <button>Reset</button>
              </div>
            </div>
            <p>Set Timer Limit</p>
            <div>
              <button onClick={this.decrement}>-</button>
              <p>{minutes}</p>
              <button onClick={this.increment}>+</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer

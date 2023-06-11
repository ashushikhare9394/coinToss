// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    head: 0,
    tail: 0,
    isHead: true,
  }

  onClickCoin = () => {
    const randomNum = Math.floor(Math.random() * 2)
    if (randomNum === 0) {
      this.setState(prevState => ({
        isHead: true,
        head: prevState.head + 1,
        total: prevState.total + 1,
      }))
    } else if (randomNum === 1) {
      this.setState(prevState => ({
        tail: prevState.tail + 1,
        total: prevState.total + 1,
        isHead: false,
      }))
    }
  }

  render() {
    const {total, head, tail, isHead} = this.state
    const imgSrc = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="app-container">
        <div className="bg-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={imgSrc} alt="toss result" className="image" />
          <button type="button" onClick={this.onClickCoin} className="button">
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result">Total:{total}</p>
            <p className="result">Heads:{head}</p>
            <p className="result">Tails:{tail}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss

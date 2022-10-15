// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {showAnswer: false}

  onAnswer = () => {
    this.setState(prevState => ({
      showAnswer: !prevState.showAnswer,
    }))
  }

  onRenderOfAnswer = () => {
    const {showAnswer} = this.state
    const imageUrl = showAnswer
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    return imageUrl
  }

  render() {
    const {showAnswer} = this.state
    const {eachFaqs} = this.props
    const {questionText, answerText} = eachFaqs
    const imgUrl = this.onRenderOfAnswer()
    const imgAlt = showAnswer ? 'minus' : 'plus'
    return (
      <li>
        <div className="quest-cont">
          <h1>{questionText}</h1>
          <button type="button" onClick={this.onAnswer}>
            <img src={imgUrl} alt={imgAlt} />
          </button>
        </div>
        <p>{showAnswer && answerText}</p>
      </li>
    )
  }
}
export default FaqItem

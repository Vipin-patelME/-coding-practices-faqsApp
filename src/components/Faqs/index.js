// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="main-cont">
        <h1>FAQs</h1>
        <ul className="list-item">
          {faqsList.map(eachFaqs => (
            <FaqItem eachFaqs={eachFaqs} key={eachFaqs.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs

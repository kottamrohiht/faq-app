import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  state = {
    faqsList: [],
  }

  componentDidMount() {
    this.flterProjects()
  }

  flterProjects = () => {
    const {faqsList} = this.props
    const modifiedItems = faqsList.map(each => ({...each, isLike: false}))
    this.setState({faqsList: modifiedItems})
  }

  addSelectedItem = id => {
    const {faqsList} = this.state
    const toggleIsClick = faqsList.map(each => {
      if (each.id === id) {
        return {
          ...each,
          isLike: !each.isLike,
        }
      }
      return each
    })
    this.setState({
      faqsList: [...toggleIsClick],
    })
  }

  render() {
    const {faqsList} = this.state
    return (
      <div className="app-container">
        <div className="inside-container">
          <h1 className="heading"> FAQs </h1>
          <ul className="answer-list-container">
            {faqsList.map(each => (
              <FaqItem
                item={each}
                addSelectedItem={this.addSelectedItem}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs

import './index.css'

const FaqItem = props => {
  const {item, addSelectedItem} = props
  const {id, questionText, answerText, isLike} = item

  const clickedButton = () => {
    /*
    const list = [0, 1, 2]
    console.log(list.includes(0))
    */
    addSelectedItem(id)
  }

  const crossImg = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const imgAltText = isLike ? 'minus' : 'plus'

  return (
    <li className="list-container">
      <div className="faq-heading-button">
        <h1 className="item-heading">{questionText}</h1>
        <button onClick={clickedButton} className="button" type="button">
          <img src={crossImg} alt={imgAltText} className="cross-img" />
        </button>
      </div>

      {isLike && (
        <div className="answerText-container">
          <hr className="horizontal-line" />
          <p className="item-answerText">{answerText}</p>
        </div>
      )}
    </li>
  )
}

export default FaqItem

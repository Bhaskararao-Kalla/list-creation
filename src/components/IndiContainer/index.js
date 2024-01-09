import EachItem from '../EachItem'
import './index.css'

const IndiContainer = props => {
  const {index, array} = props

  console.log(array)
  return (
    <ul className="Individual-container">
      <input type="checkbox" id={index} />
      <label htmlFor={index}>List {index + parseInt(1)}</label>
      {array.map(each => (
        <EachItem key={each.id} details={each} />
      ))}
    </ul>
  )
}

export default IndiContainer

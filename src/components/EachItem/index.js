import './index.css'

const Eachitem = props => {
  const {details} = props
  const {name, description} = details
  return (
    <li>
      <h1>{name}</h1>
      <p>{description}</p>
    </li>
  )
}

export default Eachitem

import IndiContainer from '../IndiContainer'
import './index.css'

const ViewsList = props => {
  const {listData} = props
  // console.log(listData)

  const listOrder = {}
  // console.log(listData.lists[0].list_number)

  for (const i of listData.lists) {
    if (listOrder[i.list_number]) {
      listOrder[i.list_number].push(i)
    } else {
      listOrder[i.list_number] = [i]
    }
  }

  // console.log(listOrder)

  const listArray = []
  for (const i in listOrder) {
    listArray.push(listOrder[i])
  }

  // // console.log(listArray)
  // console.log(listData)

  return (
    <ul className="total-items-container">
      {listArray.map((each, index) => (
        <li testid={each[0].list_number} key={index}>
          <IndiContainer index={index} array={each} />
        </li>
      ))}
    </ul>
  )
}

export default ViewsList

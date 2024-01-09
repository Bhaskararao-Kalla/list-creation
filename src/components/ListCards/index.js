import {Component} from 'react'
import Loader from 'react-loader-spinner'
import ViewsList from '../ViewLists'
import './index.css'

const initialState = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class ListCards extends Component {
  state = {
    listData: {},
    stateValue: initialState.initial,
    error: false,
  }

  componentDidMount() {
    this.setState({stateValue: initialState.loading})
    this.renderData()
  }

  renderData = async () => {
    const url = 'https://apis.ccbp.in/list-creation/lists'
    const response = await fetch(url)
    if (response.ok) {
      const resData = await response.json()
      this.setState({stateValue: initialState.success, listData: resData})
    } else {
      this.setState({stateValue: initialState.failure})
    }
  }

  renderLoder = () => (
    <div className="loader-container" testid="loader">
      <Loader type="TailSpin" color="#3b82f6" height={50} width={50} />
    </div>
  )

  renderSuccessView = () => {
    const {listData, error} = this.state
    return (
      <div className="success-view-container">
        <h1 className="success-view-heading">List Creation</h1>
        <button className="create-button" onClick={this.verifyToCrete}>
          Create a new List
        </button>
        {error && <p>You should select</p>}
        <div className="view-list-container">
          <ViewsList listData={listData} />
        </div>
      </div>
    )
  }

  renderFailureView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/list-creation/list-creation-failure-img.png"
        alt="failure view"
      />
      <h1>Something went wrong. Please try agin</h1>
      <button className="try-button" onClick={this.renderData}>
        Try Again
      </button>
    </>
  )

  renderViewDetails = () => {
    const {stateValue} = this.state
    switch (stateValue) {
      case initialState.loading:
        return this.renderLoder()
      case initialState.success:
        return this.renderSuccessView()
      case initialState.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {listData, stateValue} = this.state
    console.log(listData)
    // console.log(stateValue)
    return <div className="listcardcontainer">{this.renderViewDetails()}</div>
  }
}

export default ListCards

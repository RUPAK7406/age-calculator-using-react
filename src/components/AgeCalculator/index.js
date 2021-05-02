// Write your code here.
import {Component} from 'react'
import './index.css'

class AgeCalculator extends Component {
  state = {
    yearOfBirth: '',
    showError: false,
    showResult: false,
  }

  setIsResultVisible = value => {
    this.setState({showResult: value})
  }

  setIsErrorOccurred = value => {
    this.setState({showError: value})
  }

  getCalculatedAgeText = () => {
    const calculatedAge = this.getCalculatedAge()

    if (calculatedAge === 1) {
      return `You are 1 year old by the end of 2021`
    }
    return `You are ${calculatedAge} years old by the end of 2021`
  }

  getCalculatedAge = () => {
    const {yearOfBirth} = this.state
    const dateOfBirth = new Date(yearOfBirth)
    const dateOfBirthYear = dateOfBirth.getFullYear()

    const presentDate = new Date()
    const presentDateYear = presentDate.getFullYear()

    return presentDateYear - dateOfBirthYear
  }

  calculateAge = () => {
    const {yearOfBirth} = this.state
    const age = this.getCalculatedAge()

    if (age > 0 && yearOfBirth.length <= 4 && Number.isInteger(age)) {
      this.setIsErrorOccurred(false)
      this.setIsResultVisible(true)
    } else {
      this.setIsErrorOccurred(true)
    }
  }

  onChangeYearOfBirth = event => {
    const {value} = event.target
    // console.log(value)

    this.setState({yearOfBirth: value})
    this.setIsResultVisible(false)
    this.setIsErrorOccurred(false)
  }

  renderErrorMessage = () => {
    const {showError} = this.state

    if (showError) {
      return <p className="error-message">Enter the year that you are Born</p>
    }
    return null
  }

  renderCalculatedAge = () => {
    const {showResult} = this.state

    if (showResult) {
      return (
        <p className="calculated-age-text">{this.getCalculatedAgeText()}</p>
      )
    }
    return null
  }

  renderCalculateButton = () => (
    <div className="button-container">
      <button
        className="calculate-button"
        type="button"
        onClick={this.calculateAge}
      >
        Calculate
      </button>
    </div>
  )

  renderInputField = () => {
    const {yearOfBirth} = this.state

    return (
      <input
        className="input-field"
        onChange={this.onChangeYearOfBirth}
        type="text"
        value={yearOfBirth}
        placeholder="Enter the year that you are born"
      />
    )
  }

  render() {
    return (
      <div className="app-container">
        <div className="age-calculator-card">
          <h1 className="card-title">Age Calculator</h1>
          <div className="form-container">
            <div className="input-with-error-container">
              {this.renderInputField()}
              {this.renderErrorMessage()}
            </div>
            {this.renderCalculatedAge()}
            {this.renderCalculateButton()}
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/age-calculater-persons-img.png"
            alt="stages of human"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default AgeCalculator

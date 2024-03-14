import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    fNameInput: '',
    lNameInput: '',
    isFNameEmpty: false,
    isLNameEmpty: false,
    isSubmitClicked: false,
  }

  onChangeFName = event => {
    this.setState({fNameInput: event.target.value})
  }

  onChangeLName = event => {
    this.setState({lNameInput: event.target.value})
  }

  onRegister = event => {
    event.preventDefault()
    const {fNameInput, lNameInput} = this.state
    if (fNameInput !== '' && lNameInput !== '') {
      this.setState({isSubmitClicked: true})
    }

    if (fNameInput === '') {
      this.setState({isFNameEmpty: true})
    }

    if (lNameInput === '') {
      this.setState({isLNameEmpty: true})
    }
  }

  onAnotherResponse = () => {
    this.setState({isSubmitClicked: false})
  }

  onFNameBlur = event => {
    if (event.target.value === '') {
      this.setState({isFNameEmpty: true})
    } else {
      this.setState({isFNameEmpty: false})
    }
  }

  onLNameBlur = event => {
    if (event.target.value === '') {
      this.setState({isLNameEmpty: true})
    } else {
      this.setState({isLNameEmpty: false})
    }
  }

  renderSuccessPage = () => (
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-icon"
      />
      <p className="submitted-text">Submitted Successfully</p>
      <button
        type="button"
        className="submit-button-2"
        onClick={this.onAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  renderForm = () => {
    const {isFNameEmpty, isLNameEmpty, fNameInput, lNameInput} = this.state
    const fNameStyle = isFNameEmpty ? 'empty-input-field' : ''
    const lNameStyle = isLNameEmpty ? 'empty-input-field' : ''

    return (
      <form className="form-container" onSubmit={this.onRegister}>
        <label htmlFor="firstName" className="label-style">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          placeholder="First name"
          value={fNameInput}
          className={`input-field ${fNameStyle}`}
          onBlur={this.onFNameBlur}
          onChange={this.onChangeFName}
        />
        {isFNameEmpty && <p className="error-text">Required</p>}
        <label htmlFor="lastName" className="label-style">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          placeholder="Last name"
          value={lNameInput}
          className={`input-field ${lNameStyle}`}
          onBlur={this.onLNameBlur}
          onChange={this.onChangeLName}
        />
        {isLNameEmpty && <p className="error-text">Required</p>}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  render() {
    const {isSubmitClicked} = this.state

    return (
      <div className="registration-container">
        <h1 className="heading">Registration</h1>
        {isSubmitClicked ? this.renderSuccessPage() : this.renderForm()}
      </div>
    )
  }
}

export default RegistrationForm

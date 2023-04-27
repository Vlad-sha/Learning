import React from "react"

class SearchBar extends React.Component {
  state = { text: "" }

  inputChange = (event) => {
    this.setState({ text: event.target.value })
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.onTextSubmit(this.state.text)
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              onChange={this.inputChange}
              value={this.state.text}
              type="text"
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar

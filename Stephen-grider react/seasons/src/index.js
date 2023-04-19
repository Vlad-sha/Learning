import React from "react"
import ReactDOM from "react-dom"
import SeasonDisplay from "./SeasonDisplay"
import Spinner from "./Spinner"

class App extends React.Component {
  state = { lat: null, errorMessage: "" }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    )
  }
  // componentDidUpdate() {
  //   console.log("My component was just updated - it rerendered")
  // }

  // componentWillUnmount() {

  // }

  //React says we have to define render!!

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error : {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <Spinner message="Please accept location request" />
  }

  // Helper function to render all the contents at once with applied styles to parent <div> ^

  render() {
    return <div className="border red">{this.renderContent()}</div>
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)

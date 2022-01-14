import React, { Component } from 'react'
import { render } from 'react-dom'
import './main.scss'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div>somehting</div>
  }
}

export default App

const appDiv = document.getElementById('app')
render(<App />, appDiv)

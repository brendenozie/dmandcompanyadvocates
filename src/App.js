import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import { URL } from './config'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./pages/homepage";
import Footer from "./components/Footer/Footer";
import ContactUs from './pages/ContactUs/ContactUs';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: '',
      id: '',
      loading: false,
    }
  }

  //Function called when the button is clicked
  getServerDetails = async () => {
    const { id } = this.state

    this.setState({ loading: true, message: '' })

    const baseUrl = `${URL}${id}`

    try {
      const result = await axios.get(baseUrl) //Call the Cloud Function

      if (result.data && result.data.status === 200) {
        this.setState({ message: result.data.message })
      } else {
        console.log(result)
      }
    } catch (err) {
      console.log('ERROR', err)
      this.setState({ message: 'An internal error happened.' })
    }
    this.setState({ loading: false })
  }

  //Function called when inserting a value
  handleChange = ev => {
    const { value, name } = ev.target

    if (value.match(/\d/g))
      this.setState({ [name]: value.match(/\d/g).join('') })
    else this.setState({ [name]: '' })
  }

  //When user press Enter
  handleKeyDown = ev => {
    if (ev.key === 'Enter') {
      this.getDiagnosis()
    }
  }

  render() {

    const { message, id, loading } = this.state

    return (
      <div className='App'>
      {<Header />}      
        <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/contact" element={<ContactUs />} />
        </Routes>      
      {<Footer />}
      </div>
    )
  }
}

export default App

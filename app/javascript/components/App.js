import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HelloWorld from "./HelloWorld";
import Home from "./Home";
import { Provider } from 'react-redux'
import store from '../redux/configureStore'

class App extends React.Component {
  render () {
    return (
     <Provider store={store}>
          <Router>
            <Routes>
            <Route exact path="/" element={ <Home/> } />
            <Route exact path="/greetings" element={ <HelloWorld greeting="Hi Peeps!" />} />
            </Routes>
          </Router>
     </Provider>
    );
  }
}

export default App

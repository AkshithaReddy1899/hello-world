import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';
import store from '../configureStore';

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Greeting/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

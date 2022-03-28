import React from "react";
import ReactDom from 'react-dom'
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './store/store'
import { Provider } from 'react-redux'

ReactDom.render(<Provider store={store}>
    <App />
  </Provider>,document.getElementById("root"))

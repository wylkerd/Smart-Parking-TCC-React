import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { App } from './App'

// import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";

const rootElement = document.getElementById('root')

ReactDOM.render(
  <BrowserRouter>
    {/* <ContextContainer> */}
      <App />
    {/* </ContextContainer> */}
  </BrowserRouter>,
  rootElement
);


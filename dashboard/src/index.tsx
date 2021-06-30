import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { App } from './App'
import ContextContainer from './logic/ContextContainer'

const rootElement = document.getElementById('root')


ReactDOM.render(
  <BrowserRouter>
    <ContextContainer>
      <App />
    </ContextContainer>
  </BrowserRouter>,
  rootElement
);


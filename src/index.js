import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducer';

import LoginForm from './LoginForm';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Card body>
          <LoginForm />
        </Card>
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

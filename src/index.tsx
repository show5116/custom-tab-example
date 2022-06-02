import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from "./style/GlobalStyle";
import {Provider} from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <GlobalStyle />
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom';
import {Toaster} from 'react-hot-toast'
import { Provider } from 'react-redux';
import store from "../src/redux/Store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <BrowserRouter>
     <Provider store={store}>
     <App />
     </Provider>
    
    <Toaster/>
     </BrowserRouter> 
);

reportWebVitals();

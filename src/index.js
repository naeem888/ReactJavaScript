import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar/NavBar';
import TopHeader from './components/TopHeader/TopHeader';
import OurService from './components/OurService/OurService';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <NavBar/>
    <TopHeader/>
    <OurService/>

  </React.StrictMode>
);


reportWebVitals();

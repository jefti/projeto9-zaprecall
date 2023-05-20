import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Reset from './components/CSS/reset.jsx'
import Style from './components/CSS/style.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reset/>
    <Style/>
    <App />
  </React.StrictMode>,
)

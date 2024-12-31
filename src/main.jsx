
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  UserProvider } from './userContext/userContext.jsx'
import Debouncing from './debouncing/Debouncing.jsx'
import Test from './Test.jsx'

createRoot(document.getElementById('root')).render(
  <UserProvider>

    {/* <App /> */}
    {/* <Debouncing /> */}
    <Test />
  </UserProvider>
)

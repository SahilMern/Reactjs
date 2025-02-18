
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {  UserProvider } from './userContext/userContext.jsx'
// import Debouncing from './debouncing/Debouncing.jsx'
// import Test from './Test.jsx'
// import ParentEvent from './passingEventAsProps/ParentEvent.jsx'
import LiftingStateUp from './lifting/LiftingStateUp.jsx'
// import Test from './Test/Test.jsx'
import Aftermemo from './hooks/useMemo/Aftermemo.jsx'
import AfterCallback from './hooks/useCallback/AfterCallback.jsx'
import CallingApi from './Api/CallingApi.jsx'
import UseForm from './hooks/useForm/UseForm.jsx'
import UseTransitionExample from './hooks/UseTranstion.jsx'
import LiftParent from './Test/lifting/LiftParent.jsx'
import Background from './Design/Background.jsx'
import Test from './Test.jsx'
import Event from './Event/Event.jsx'
import Parent from './ParentChild/Parent.jsx'

createRoot(document.getElementById('root')).render(
  <UserProvider>

    {/* <App /> */}
    {/* <Debouncing /> */}
    {/* <Test /> */}
    {/* <ParentEvent /> */}
    {/* <LiftingStateUp /> */}
    {/* <Aftermemo /> */}
    {/* <AfterCallback /> */}
    {/* <CallingApi /> */}
    {/* <Test /> */}
    {/* <UseForm /> */}
    {/* <UseTransitionExample /> */}
    {/* <LiftParent /> */}
    {/* <Background />  */}

    {/* <Event /> */}
    <Parent />
    {/* <Test /> */}
  </UserProvider>
)

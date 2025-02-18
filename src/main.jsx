import { createRoot } from "react-dom/client";
import "./index.css";
import { UserProvider } from "./userContext/userContext.jsx"; // Import UserProvider (if needed)
import { UserProviders } from "./Context/UserContext.jsx"; // Import UserProviders (if needed)
import { Provider } from "react-redux";

import App from './App.jsx';
import store from "./redux/store.js";
// import Debouncing from './debouncing/Debouncing.jsx';
import Test from './Test.jsx';
// import ParentEvent from './passingEventAsProps/ParentEvent.jsx';
// import LiftingStateUp from './lifting/LiftingStateUp.jsx';
// import Aftermemo from './hooks/useMemo/Aftermemo.jsx';
// import AfterCallback from './hooks/useCallback/AfterCallback.jsx';
// import CallingApi from './Api/CallingApi.jsx';
// import UseForm from './hooks/useForm/UseForm.jsx';
// import UseTransitionExample from './hooks/UseTranstion.jsx';
// import LiftParent from './Test/lifting/LiftParent.jsx';
// import Background from './Design/Background.jsx';
// import Event from './Event/Event.jsx';
// import Parent from './ParentChild/Parent.jsx';

createRoot(document.getElementById("root")).render(
  <Provider store={store}> {/* Wrap with the Redux Provider and pass the store */}
    {/* You can choose which one you need based on your app */}
    <UserProviders> {/* Wrap with UserProvider or UserProviders */}
      {/* <App /> Render your main app */}
      {/* Uncomment the components you need to display */}
      {/* <Debouncing /> */}
      {/* <Test /> */}
      {/* <ParentEvent /> */}
      {/* <LiftingStateUp /> */}
      {/* <Aftermemo /> */}
      {/* <AfterCallback /> */}
      {/* <CallingApi /> */}
      {/* <UseForm /> */}
      {/* <UseTransitionExample /> */}
      {/* <LiftParent /> */}
      {/* <Background /> */}
      {/* <Event /> */}
      {/* <Parent /> */}
      <Test />
    </UserProviders>
  </Provider>
);

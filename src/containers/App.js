import { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./dashboard/Dashboard";
import SawoLogin from "./sawo-login/SawoLogin";

import { useCookies } from "react-cookie";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["payload"]);
  const user = localStorage.getItem("user_id");

  useEffect(() => {
    if (cookies.payload) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
    //write sawo api to compare between local storage userid
    //and sawo payload
  }, [loginStatus, cookies]);

  return (
    <div className="App">
      {!loginStatus && (
        <SawoLogin setLoginStatus={setLoginStatus} setCookie={setCookie} />
      )}
      {loginStatus && <Dashboard userId={user} removeCookie={removeCookie} />}
    </div>
  );
}

export default App;

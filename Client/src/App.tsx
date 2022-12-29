import { useContext, useEffect, useState } from "react";
import "./App.css";
import ApiData, { TApiData } from "./Components/ApiData";
import { useAuth0 } from "@auth0/auth0-react";

async function fetchApiData() {
  const url = import.meta.env.DEV
    ? "https://localhost:5000/api/test"
    : "/api/test";
  const res = await fetch(url);
  return (await res.text()) as string;
}

function App() {
  const [apiData, setApiData] = useState<TApiData | null>(null);
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (!user) return;
    fetchApiData().then((data) => setApiData(data));
  }, [user]);

  return (
    <div className="App">
      <h1>Vite + React + Asp.net Web API</h1>
      <h3>On The same domain</h3>
      <ApiData data={apiData} />
      {user ? (
        <>
          <div style={{ marginTop: "15px" }}>
            <div>
              <img src={user.picture} alt="" />
              <p>{user.name}</p>
            </div>
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Logout
            </button>
          </div>
        </>
      ) : (
        <>
          <div style={{ marginTop: "15px" }}>
            <button onClick={() => loginWithRedirect()}>Login</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

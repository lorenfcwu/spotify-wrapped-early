import { useEffect, useState } from "react";
import "./App.css";
import { accessToken, logout } from "./spotify";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(() => {
      return accessToken;
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {!token ? (
          <a className="App-link" href="http://localhost:8888/login">
            Log in to Spotify
          </a>
        ) : (
          <>
            <h1>Logged In!</h1>
            <button onClick={logout}>Log Out</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;

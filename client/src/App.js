import { useEffect, useState } from "react";
import { accessToken, logout, getCurrentUserProfile } from "./spotify";
import { catchErrors } from "./utils";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setToken(() => {
      return accessToken;
    });

    const fetchData = async () => {
      const { data } = await getCurrentUserProfile();
      setProfile(() => {
        return data;
        /* data = ...
          country: "CA"
          display_name: "Loren"
          email: "juanduwu@hotmail.com"
          explicit_content: {filter_enabled: false, filter_locked: false}
          external_urls: {spotify: 'https://open.spotify.com/user/4jgcpfz9vostgw60lqu0skps0'}
          followers: {href: null, total: 21}
          href: "https://api.spotify.com/v1/users/4jgcpfz9vostgw60lqu0skps0"
          id: "4jgcpfz9vostgw60lqu0skps0"
          images: Array(1)
            height: null
            url: "https://scontent-ord5-2.xx.fbcdn.net/v/t1.18169-1/16602737_1291961977557835_8669608254241593344_n.jpg?stp=dst-jpg_p320x320&_nc_cat=105&ccb=1-7&_nc_sid=0c64ff&_nc_ohc=Mmw_-7QzgrMAX-SGtlR&_nc_ht=scontent-ord5-2.xx&edm=AP4hL3IEAAAA&oh=00_AfC5e2fvmUf5GX06UjVR-7Q4f5CAZqe0D9-qoe1DrX2LWg&oe=6483A231"
            width: null
          product: "premium"
          type: "user"
          uri: "spotify:user:4jgcpfz9vostgw60lqu0skps0"
          [[Prototype]]: Object
        */
      });
    };

    catchErrors(fetchData());
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

            {profile && (
              <div>
                <h1>{profile.display_name}</h1>
                <p>{profile.followers.total} Followers</p>
                {profile.images.length && profile.images[0].url && (
                  <img src={profile.images[0].url} alt="pfp"></img>
                )}
              </div>
            )}
          </>
        )}
      </header>
    </div>
  );
}

export default App;

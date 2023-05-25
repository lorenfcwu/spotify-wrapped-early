import { useState, useEffect } from "react";
import { getCurrentUserPlaylists } from "../spotify";
import { catchErrors } from "../utils";
import { SectionWrapper, PlaylistsGrid } from "../components";

const Playlists = () => {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userPlaylists = await getCurrentUserPlaylists();
      setPlaylists(userPlaylists.data);
    };

    catchErrors(fetchData());
  }, []);

  return (
    <main>
      {playlists && (
        <SectionWrapper title="Playlists" breadcrumb={true}>
          {playlists && <PlaylistsGrid playlists={playlists.items} />}
        </SectionWrapper>
      )}
    </main>
  );
};

export default Playlists;

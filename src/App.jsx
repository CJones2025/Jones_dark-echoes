import { useState } from "react";
import { episodeList } from "./data";
import PropTypes from "prop-types";

function EpisodeDetails({ episode }) {
  return (
    <section className="details">
      <h2>Episode Details</h2>
      {episode ? (
        <>
          <h3>{episode.title}</h3>
          <p>{episode.description}</p>
          <p><strong>Episode ID:</strong> {episode.id}</p>
        </>
      ) : (
        <p>Select an episode to learn more.</p>
      )}
    </section>
  );
}

EpisodeDetails.propTypes = {
  episode: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

function Roster({ episodes, onSelect }) {
  return (
    <section className="roster">
      <h2>Episodes</h2>
      <ul className="episode-list">
        {episodes.map((episode) => (
          <li key={episode.id} onClick={() => onSelect(episode)}>
            {episode.title}
          </li>
        ))}
      </ul>
    </section>
  );
}

Roster.propTypes = {
  episodes: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};


export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <Roster episodes={episodes} onSelect={setSelectedEpisode} />
        <EpisodeDetails episode={selectedEpisode} />
      </main>
    </>
  );
}

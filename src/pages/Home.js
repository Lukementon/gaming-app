import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { loadGames } from "../actions/gamesAction";
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
import { fadeIn } from "../animations";

const Home = () => {
  // Get current loacation
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  if (pathId) {
    document.body.style.overflow = "hidden";
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  // Get the data back
  const { popular, upcoming, newGames, searched } = useSelector(
    state => state.games
  );

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      {pathId && <GameDetail />}

      {searched.length ? (
        <div className="searched">
          <h3>Searched Games</h3>
          <Games>
            {searched.map(game => (
              <Game
                key={game.id}
                id={game.id}
                name={game.name}
                released={game.released}
                img={game.background_image}
              />
            ))}
          </Games>
        </div>
      ) : (
        ""
      )}

      <h3>Upcoming Games</h3>
      <Games>
        {upcoming.map(game => (
          <Game
            key={game.id}
            id={game.id}
            name={game.name}
            released={game.released}
            img={game.background_image}
          />
        ))}
      </Games>
      <h3>Popular Games</h3>
      <Games>
        {popular.map(game => (
          <Game
            key={game.id}
            id={game.id}
            name={game.name}
            released={game.released}
            img={game.background_image}
          />
        ))}
      </Games>
      <h3>New Games</h3>
      <Games>
        {newGames.map(game => (
          <Game
            key={game.id}
            id={game.id}
            name={game.name}
            released={game.released}
            img={game.background_image}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  @media (max-width: 665px) {
    padding: 0 1rem;
    text-align: center;
  }
  h2 {
    padding: 5rem 0rem;
  }
  h3 {
    color: white;
  }
`;
const Games = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;

  @media (max-width: 580px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0rem;
  }
`;

export default Home;

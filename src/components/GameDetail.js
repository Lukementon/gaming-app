import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { resetDetails } from "../actions/detailAction";
import { smallImage } from "../util";

//IMAGES
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
//Star Images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetail = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // Exit detail
  const exitDetailHandler = e => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
      dispatch(resetDetails());
    }
  };

  // Get platform Images
  const getPlatform = platform => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  // Get stars
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img src={starFull} key={i} alt="half star"></img>);
      } else {
        stars.push(<img src={starEmpty} key={i} alt="full star"></img>);
      }
    }
    return stars;
  };

  // Data
  const { screen, game, isLoading } = useSelector(state => state.detail);

  return (
    <>
      {!isLoading && (
        <CardShadow onClick={exitDetailHandler} className="shadow">
          <Detail>
            <Stats>
              <div className="rating">
                <h3 style={{ color: "black" }}> {game.name}</h3>
                <p style={{ color: "black" }}>Rating: {game.rating}</p>
                {getStars()}
              </div>
              <Info>
                <h3 style={{ color: "black" }}>Plaforms</h3>
                <Platform>
                  {game.platforms.map(data => (
                    <img
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                      alt="platform"
                    ></img>
                  ))}
                </Platform>
              </Info>
            </Stats>
            <Media>
              <img
                src={smallImage(game.background_image, 1280)}
                alt="screenshot from the game"
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results.map(screen => (
                <img
                  key={screen.id}
                  src={smallImage(screen.image, 1280)}
                  alt="game screenshot"
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: white;
  }
  &::-webkit-scrollbar-track {
    background: rgb(120, 120, 120);
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  position: absolute;
  z-index: 10;
  left: 10%;
  background: white;
  color: black;
  @media (max-width: 1000px) {
    padding: 2rem 2rem;
  }
  @media (max-width: 666px) {
    padding: 2rem 1rem;
  }
  @media (max-width: 500px) {
    width: 90%;
    left: 6%;
  }

  img {
    width: 100%;
  }
  .show-details {
    transition: all 1s ease;
    opacity: 1;
  }
  .hide-details {
    opacity: 0;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  img {
    display: inline;
    height: 2rem;
    width: 2rem;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
  color: black;
`;

const Platform = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  color: black;

  img {
    margin-left: 3rem;
    @media (max-width: 1000px) {
      margin: 1rem;
    }
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetail;

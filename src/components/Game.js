import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";
import { popup } from "../animations";

const Game = ({ name, released, img, id }) => {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame
      variants={popup}
      initial="hidden"
      animate="show"
      onClick={loadDetailHandler}
    >
      <Link className="link" to={`/game/${id}`}>
        <h3 style={{ color: "black" }}>{name}</h3>
        <p style={{ color: "black" }}>{released}</p>
        <img src={smallImage(img, 640)} alt="game" />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 20rem;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.5);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  margin-bottom: 1rem;
  background: white;
  color: black;
  @media (max-width: 407px) {
    height: 20rem;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export default Game;

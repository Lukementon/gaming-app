import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn } from "../animations";
/// Redux and routes
import { fetchSearched } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = e => {
    setTextInput(e.target.value);
  };

  const submitSearch = e => {
    e.preventDefault();
    if (textInput === "") {
      alert("Please enter a game");
    } else {
      dispatch(fetchSearched(textInput));
      setTextInput("");
    }
  };

  const clearSearched = () => {
    dispatch({
      type: "CLEAR_SEARCHED",
    });
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearched}>
        <h1> GamingBuddy</h1>
      </Logo>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  @media (max-width: 580px) {
    padding: 3rem 2rem;
  }
  form {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    width: 30%;
    min-width: 300px;
    padding: 0.5rem;
    font-size: 1.4rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    border: none;
    outline: none;
    font-weight: bold;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    margin-left: 0.5rem;
    cursor: pointer;
    background: rgb(120, 120, 120);
    color: white;
  }

  @media (max-width: 665px) {
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    button {
      margin-top: 1rem;
      margin-left: 0rem;
    }
    input {
      margin-top: 1rem;
    }
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;

  h1 {
    color: white;
  }
`;

export default Nav;

import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import arrowIcon from "../../assets/icons/icon-arrow.svg";
import axios from "axios";

const SearchBar = (props) => {
  const [ip, setIp] = useState("");
  const sumbitHandler = (e) => {
    e.preventDefault();
    props.setSearchedIp(ip);
  };

  useEffect(() => {
    axios
      .get(
        `https://geo.ipify.org/api/v1?apiKey=${
          process.env.REACT_APP_GEO_API
        }&domain=${""}`
      ) //using domain as it will get both ipAddress and domain
      .then((response) => {
        setIp(response.data.ip);
      })
      .catch((error) => {
        setIp("");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form onSubmit={sumbitHandler}>
      <input
        className="search rubik-400-drk-gray"
        placeholder="Search for any IP address or domain"
        value={ip}
        onChange={(e) => setIp(e.target.value)}
      />
      <button className="search-button" type="submit">
        <img className="search-icon" src={arrowIcon} alt="icon" />
      </button>
    </form>
  );
};

export default SearchBar;

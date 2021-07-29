import React from "react";
import "./Header.css";
import { Container } from "@material-ui/core";

const Header = () => {
  return (
    <div className="header">
      <Container>
        <div className="header_container">
          <div>
            <span className="header_logo" onClick={() => window.scroll(0, 0)}>
              🎬 Entertainment Hub 🎥
            </span>
          </div>
          <div>
            <span className="header_myList">My List</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;

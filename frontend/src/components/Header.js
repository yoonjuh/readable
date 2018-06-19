import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div>
    ...HEADER
    <Link to="/">All</Link>
    <Link to="/React">React</Link>
    <Link to="/Redux">Redux</Link>
    <Link to="/Saga">Saga</Link>
    <div>
      <button>New Post</button>
    </div>
    <div>Sort by</div>
  </div>
);
export default Header;

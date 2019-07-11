import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledNav = styled.div`
  background: rgb(100, 100, 100);
  padding: 0 1rem;

  div.brand {
    a {
      color: rgb(250, 250, 250);
      text-decoration: none;
      font-size: 2rem;
      font-weight: bold;
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: flex-start;
    }

    ul {
      display: flex;
      flex-direction: column;
      list-style: none;

      @media screen and (min-width: 768px) {
        flex-direction: row;
      }

      li {
        margin: 0 15px 0 0;
        padding: 0;
        border-bottom: 1px solid #999;

        a {
          color: white;
          text-decoration: none;
          display: block;
          padding: 10px;
          text-align: center;

          &:hover {
            background: rgba(250, 250, 250, 0.2);
          }
        }
      }
    }
  }
`;

const CustomNavbar = ({ pageInfo, brand }) => {
  return (
    <StyledNav>
      <div className="container">
        <nav>
          <div className="brand">
            <Link to="/">{brand}</Link>
          </div>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page-2">Page Two</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/tags">Tags</Link>
            </li>
          </ul>
        </nav>
      </div>
    </StyledNav>
  );
};

export default CustomNavbar;

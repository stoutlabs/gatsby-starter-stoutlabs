import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledNavOuter = styled.div`
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
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
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
  }
`;

const StyledBrand = styled.div`
  a {
    color: rgb(250, 250, 250);
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
  }
`;

const StyledNavLink = styled.li`
  margin: 0 15px 0 0;
  padding: 0;

  a {
    color: #fff;
    text-decoration: none;
    display: block;
    padding: 10px;
    text-align: center;

    &.active,
    &:hover {
      background: rgba(250, 250, 250, 0.2);
    }
  }
`;

const NavLink = ({ to, children }) => (
  <StyledNavLink>
    <Link to={to} activeClassName="active">
      {children}
    </Link>
  </StyledNavLink>
);

const CustomNavbar = ({ pageInfo, brand }) => (
  <StyledNavOuter>
    <div className="container">
      <StyledNav>
        <StyledBrand>
          <Link to="/">{brand}</Link>
        </StyledBrand>

        <ul>
          <NavLink to="/">Home</NavLink>
        </ul>
      </StyledNav>
    </div>
  </StyledNavOuter>
);

export default CustomNavbar;

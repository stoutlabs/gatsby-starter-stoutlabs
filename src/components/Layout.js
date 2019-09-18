import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Navbar from "./NavBar";
import Footer from "./Footer";
import { GlobalStyle } from "../styles/globalStyles";

// this makes an easy sticky footer
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main.main-content {
    flex: 1;
    padding: 0;
  }
`;

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            company
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <StyledWrapper>
          <Navbar pageInfo={pageInfo} brand={data.site.siteMetadata.company} />
          <main className="main-content">{children}</main>
          <Footer />
        </StyledWrapper>
      </>
    )}
  />
);

export default Layout;

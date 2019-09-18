import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background: rgb(30, 30, 30);
  padding: 10px;
  color: rgb(220, 220, 220);
  text-align: center;
`;

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        site {
          siteMetadata {
            company
          }
        }
      }
    `}
    render={data => (
      <StyledFooter>
        <div>
          <p>
            &copy;{" "}
            {`${new Date().getFullYear()} ${data.site.siteMetadata.company}`}
          </p>
        </div>
      </StyledFooter>
    )}
  />
);

export default Footer;

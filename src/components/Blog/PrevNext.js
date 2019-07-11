import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti/index.esm";

const StyledPrevNext = styled.div`
  margin: 2.5rem 0;
  padding: 1.5rem;
  border: 1px solid rgba(55, 55, 55, 0.1);
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
  }
  li {
    margin: 0;
    width: 50%;
    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      padding: 0.3rem;
      color: #777;
      text-align: left;
      font-size: 0.95rem;
      text-decoration: none;

      &:visited {
        color: #777;
      }
      &:hover {
        color: #999;
        text-decoration: none;
      }
      span {
        padding: 0 1rem 0 0;
      }
    }
    a.next {
      justify-content: flex-end;
      span {
        padding: 0 0 0 1rem;
      }
    }
  }
`;

export const PrevNext = ({ prev, next }) => {
  return (
    <StyledPrevNext className="prevnext">
      <ul>
        {prev !== null ? (
          <li>
            <Link to={"/blog/" + prev.fields.slug + "#top"} rel="prev">
              <TiArrowLeft />{" "}
              Prev Post: {prev.frontmatter.title}
            </Link>
          </li>
        ) : (
          <li>&nbsp;</li>
        )}

        {next !== null ? (
          <li>
            <Link
              to={"/blog/" + next.fields.slug + "#top"}
              rel="next"
              className="next"
            >
              Next Post: {next.frontmatter.title}
              <TiArrowRight />
            </Link>
          </li>
        ) : (
          <li>&nbsp;</li>
        )}
      </ul>
    </StyledPrevNext>
  );
};

export default PrevNext;

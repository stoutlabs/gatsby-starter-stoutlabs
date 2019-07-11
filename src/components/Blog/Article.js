import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { TiArrowBack } from "react-icons/ti";
import styled from "styled-components";

import Content from "../Content";
import PrevNext from "./PrevNext";

const StyledFeatured = styled.div`
  max-width: 500px;
  margin: 2rem auto;
`;

const StyledPostContainer = styled.div`
  max-width: 900px;
  margin: 2rem auto;
`;

const BackToList = styled.div`
  margin: 0 0 2rem;
  text-align: center;
`;

const Post = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  date,
  helmet,
  prev,
  next,
  featureimg,
  timetoread,
  slug,
  allNode,
  shareImg,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <div>
      {featureimg && (
        <StyledFeatured>
          <Img fluid={featureimg.childImageSharp.fluid} />
        </StyledFeatured>
      )}
      <StyledPostContainer>
        <h1>{title}</h1>
        <p>Time to read: {timetoread}</p>
        <PostContent content={content} className="article-content" />
      </StyledPostContainer>

      <div className="container">
        <PrevNext prev={prev} next={next} />
        
        <BackToList>
          <TiArrowBack /> <Link to="/blog">Back to list</Link>
        </BackToList>
      </div>

    </div>
  );
};

export default Post;

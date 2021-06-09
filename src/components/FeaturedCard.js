import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const FeaturedCard = props => {
  return (
    <FeaturedWrapper>
      <CardDiv>
        <CardLeft imageurl={props.imageurl}>
          <CardTitleSmall title={props.imagealt ? `${props.imagealt}` : ``}>
            <CardTitleH3>{props.title || "Please add a title"}</CardTitleH3>
            <span>
              <ReadTime>
                {props.readtime
                  ? `${props.readtime} mins read`
                  : "Please include the readtime"}
              </ReadTime>
            </span>
          </CardTitleSmall>
        </CardLeft>
        <CardRight>
          <CardRightContent>
            <CardTitleBig title={props.imagealt ? `${props.imagealt}` : ``}>
              <CardTitleH3Big>
                {props.title || "Please add a title"}
              </CardTitleH3Big>
              <span>
                <ReadTime>
                  {props.readtime
                    ? `${props.readtime} mins read`
                    : "Please include the readtime"}
                </ReadTime>
              </span>
            </CardTitleBig>
            <Excerpt>{props.excerpt || "Please include an excerpt"}</Excerpt>
            <DateButton>
              <Date>{props.date || "forgot the date?"}</Date>
              <Link
                title={
                  props.title
                    ? `Read more on - ${props.title}`
                    : `Read more on this topic`
                }
                to={props.path}
                style={{ textDecoration: `none`, color: `#000` }}
              >
                <CardRightContentButton>Read More</CardRightContentButton>
              </Link>
            </DateButton>
          </CardRightContent>
        </CardRight>
      </CardDiv>
    </FeaturedWrapper>
  );
};

export default FeaturedCard;

const FeaturedWrapper = styled.div`
  height: 25em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* 
  background-color: green;
  padding: 1.5em;
*/

FeaturedCard.propTypes = {
  title: PropTypes.string,
  excerpt: PropTypes.string,
  readtime: PropTypes.number,
  date: PropTypes.string,
  imageurl: PropTypes.string,
};

const CardDiv = styled.div`
  background-color: #fff;
  height: 100%;
  width: 100%;
  position: relative;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  text-align: left;
  transition: all 0.3s ease-in-out;
  justify-content: space-between;
  @media (max-width: 600px) {
    & {
      flex-direction: column;
    }
  }
`;
/* flex-direction: column;
  &:hover:not(CardRight) {
    transform: scale(1.035);
    box-shadow: 10px 15px 13px rgb(0 0 0 / 11%);
  }
  box-shadow: -9px -7px 15px rgba(0, 0, 0, 0.11);
  align-items: center;
  
  
  */
const CardLeft = styled.div`
  border-radius: 10px;
  background: url(${props => props.imageurl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-self: center;
  margin: auto;
  width: 40%;
  height: 80%;
  @media (max-width: 600px) {
    & {
      width: 100%;
      margin: unset;
      min-height: 30%;
      max-height: 40%;
    }
  }
`;
/*
  min-height: 8em;
  max-height: 10em;
  flex: 1;
  
  */
const CardTitleSmall = styled.div`
  height: 100%;
  color: #ffffff;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.192);
  padding: 0.8em;
  @media (min-width: 600px) {
    content-visibility: hidden;
    @supports not (content-visibility: hidden) {
      display: hidden;
    }
  }
`;
/*
  position: absolute;

*/

const CardTitleH3 = styled.h3`
  text-transform: uppercase;
  max-width: 100%;
`;
const ReadTime = styled.small``;
const CardRight = styled.div`
  padding: 2.5em;
  width: 50%;
  @media (max-width: 600px) {
    & {
      width: unset;
      padding: 1em;
    }
  }
`;
/*
  flex: 1;

*/
const CardRightContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0.5em 0em;
`;
const CardTitleBig = styled.div``;
const CardTitleH3Big = styled.h3`
  text-transform: uppercase;
  max-width: 100%;
  font-size: x-large;
  @media (max-width: 600px) {
    & {
      font-size: unset;
    }
  }
`;
const Excerpt = styled.p`
  font-size: large;
  @media (max-width: 600px) {
    & {
      font-size: unset;
    }
  }
`;
const DateButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Date = styled.small`
  text-transform: capitalize;
`;
const CardRightContentButton = styled.button`
  padding: 0.6em 0.5em;
  background-color: #2f4293;
  border: none;
  cursor: inherit;
  color: #fff;
  border-radius: 0.3em;
`;

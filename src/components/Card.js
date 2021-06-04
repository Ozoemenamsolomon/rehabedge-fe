import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Card = props => {
  return (
    <CardDiv>
      <CardTop>
        <CardTitle>
          <CardTitleH3>{props.title || "Please add a title"}</CardTitleH3>
          <span>
            <ReadTime>
              {props.readtime
                ? `${props.readtime} mins read`
                : "Please include the readtime"}
            </ReadTime>
          </span>
        </CardTitle>
      </CardTop>
      <CardBottom>
        <CardBottomContent>
          <p>{props.excerpt || "Please include an excerpt"}</p>
          <DateButton>
            <Date>{props.date || "forgot the date?"}</Date>
            <Link
              title={
                props.title
                  ? `Read more on - ${props.title}`
                  : `Read more on this topic`
              }
              to="/"
              style={{ textDecoration: `none`, color: `#000` }}
            >
              <CardBottomContentButton>Read More</CardBottomContentButton>
            </Link>
          </DateButton>
        </CardBottomContent>
      </CardBottom>
    </CardDiv>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string,
  excerpt: PropTypes.string,
  readtime: PropTypes.number,
  date: PropTypes.string,
  imageurl: PropTypes.string,
};

const CardDiv = styled.div`
  width: 17em;
  background-color: #fff;
  box-shadow: -9px -7px 15px rgba(0, 0, 0, 0.11);
  height: 22em;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-align: left;
  transition: all 0.3s ease-in-out;
  @supports not (gap: 1.5em) {
    & {
      margin: 0.6em;
    }
  }
  /* mouse, touch pad */
  @media (hover: hover) and (pointer: fine) {
    &:hover{
      transform: scale(1.035);
      box-shadow: 10px 15px 13px rgb(0 0 0 / 11%);
  }
`;
const CardTop = styled.div`
  border-radius: 10px;
  flex: 1;
  background: url(https://images.unsplash.com/photo-1621275155732-2bff82c64fd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  height: clamp(8em, 9em, 10em);
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;
const CardTitle = styled.div`
  height: 100%;
  color: #ffffff;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.192);
  padding: 0.8em;
`;

const CardTitleH3 = styled.h3`
  text-transform: uppercase;
  max-width: 100%;
`;
const ReadTime = styled.small``;
const CardBottom = styled.div`
  flex: 1;
  padding: 0.8em;
`;

const CardBottomContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5em 0em;
`;

const DateButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Date = styled.small`
  text-transform: capitalize;
  color: #b7b7b7;
`;
const CardBottomContentButton = styled.button`
  padding: 0.6em 0.5em;
  background-color: #2f4293;
  border: none;
  cursor: inherit;
  color: #fff;
  border-radius: 0.3em;
`;

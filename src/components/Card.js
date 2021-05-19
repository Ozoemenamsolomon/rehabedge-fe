import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Card = props => {
  return (
    <>
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
              <CardBottomContentButton>Read More</CardBottomContentButton>
            </DateButton>
          </CardBottomContent>
        </CardBottom>
      </CardDiv>
    </>
  );
};

export default Card;

Card.propTypes = {
  readtime: PropTypes.number,
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
`;
const CardTop = styled.div`
  border-radius: 10px;
  flex: 1;
  background: url(https://images.unsplash.com/photo-1621275155732-2bff82c64fd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
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
`;
const Date = styled.small`
  text-transform: capitalize;
`;
const CardBottomContentButton = styled.button`
  padding: 0.6em 0.5em;
  margin-left: auto;
  background-color: #2f4293;
  border: none;
  color: #fff;
  border-radius: 0.3em;
`;

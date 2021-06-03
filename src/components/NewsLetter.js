import React from "react";
import styled from "styled-components";

const NewsLetter = () => {
  return (
    <NewsLetterDiv>
      <NewsLetterTitle>Subsribe to our newsletter</NewsLetterTitle>
      <NewsLetterWrapper>
        <Name>
          <NameLabel htmlFor="name">Name:</NameLabel>
          <NameInput type="text" name="name" id="name" />
        </Name>
        <Email>
          <EmailLabel htmlFor="email">E-Mail: </EmailLabel>
          <EmailInput type="email" name="email" id="email" />
        </Email>
        <Button type="submit">Submit</Button>
      </NewsLetterWrapper>
    </NewsLetterDiv>
  );
};

export default NewsLetter;

const NewsLetterDiv = styled.div`
  background-color: #2f4293;
  margin-top: 2.5em;
  display: flex;
  justify-content: center;
  padding: 2.5em 0em;
  flex-wrap: wrap;
`;
const NewsLetterTitle = styled.h4`
  color: #fff;
  margin-bottom: 1em;
  text-transform: uppercase;
`;
const NewsLetterWrapper = styled.form`
  width: 90%;
  display: flex;
  gap: 1.5em;

  & > div {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
  }
  & input {
    border-radius: 0.5em;
    height: 100%;
    flex: 1;
  }
  & label {
    color: #fff;
    margin-right: 0.4em;
  }
  @media (max-width: 900px) {
    & {
      display: block;
    }
    & input {
      height: unset;
      padding: 0.5em;
    }
    & > div {
      height: unset;
      display: grid;
      margin-bottom: 0.5em;
    }
  }
`;
const Name = styled.div``;
const NameLabel = styled.label``;
const NameInput = styled.input``;
const Email = styled.div``;
const EmailLabel = styled.label``;
const EmailInput = styled.input``;
const Button = styled.button`
  flex: 0.3;
  padding: 0.5em 2em;
`;

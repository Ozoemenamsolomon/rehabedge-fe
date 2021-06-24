import React from "react";
import styled from "styled-components";

const NewsLetter = () => {
  return (
    <NewsLetterDiv>
      <NewsLetterTitle>Subsribe to our newsletter</NewsLetterTitle>
      <NewsLetterWrapper
        name="newsletter-form"
        method="post"
        // netlify-honeypot="bot-field"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <Name>
          <NameLabel htmlFor="name">Name:</NameLabel>
          <NameInput autoComplete="name" type="text" name="name" id="name" />
        </Name>
        {/* <PreventSpamming name="prevent-spamming" /> */}
        <label style={{ display: `none` }}>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
        <Email>
          <EmailLabel htmlFor="email">E-Mail: </EmailLabel>
          <EmailInput
            autoComplete="email"
            type="email"
            name="email"
            id="email"
            required
          />
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
  margin-bottom: 2em;
  text-transform: uppercase;
`;
const NewsLetterWrapper = styled.form`
  width: 90%;
  display: flex;
  gap: 1.5em;

  & > div {
  }
  & input {
  }
  & label {
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
const Name = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
`;
const NameLabel = styled.label`
  color: #fff;
  margin-right: 0.4em;
`;
const NameInput = styled.input`
  border-radius: 0.5em;
  border: none;
  height: 100%;
  flex: 1;
  padding: 0 0.5em;

  // be careful!!!🤣

  $border: (
    radius: 0.25em,
    thickness: 1px,
  );

  $color: (
    blue: #2491eb,
    gray-light: #f8f8f8,
    gray-medium: #e0e0e0,
    gray-dark: #444444,
    white: #ffffff,
  );
  &:hover {
    border-color: map-get($color, gray-dark);
  }

  &:focus {
    border-color: map-get($color, blue);
    outline: map-get($border, thickness) solid map-get($color, blue);
  }
`;
// const PreventSpamming = styled.input`
//   display: none;
// `;
const Email = styled(Name)``;
const EmailLabel = styled(NameLabel)``;
const EmailInput = styled(NameInput)``;
const Button = styled.button`
  flex: 0.3;
  padding: 0.5em 2em;
`;

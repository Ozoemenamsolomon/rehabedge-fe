import React from "react";
import styled from "styled-components";

const NewsLetter = () => {
  return (
    <NewsLetterDiv>
      <NewsLetterTitle>Subsribe to our newsletter</NewsLetterTitle>
      <NewsLetterWrapper
      /*action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdSHa-ljM22hItoia69R7UweavCdzYftqhnZr-AhlE1EJrnAg/formResponse"
        method="POST"*/
      >
        <Name>
          <NameLabel htmlFor="name">Name:</NameLabel>
          <NameInput
            autoComplete="name"
            type="text"
            name="name"
            id="name"
            /*Be careful!!🤣------------------------------ className="quantumWizTextinputPaperinputInput exportInput"
            jsname="YPqjbf"
            tabindex="0"
            aria-labelledby="i1"
            aria-describedby="i2 i3"
            dir="auto"
            data-initial-dir="auto"
            data-initial-value=""*/
          />
        </Name>
        <Email>
          <EmailLabel htmlFor="email">E-Mail: </EmailLabel>
          <EmailInput
            autoComplete="email"
            type="email"
            name="email"
            id="email"
            required
            /*Be careful!!🤣------------------------------
            className="quantumWizTextinputPaperinputInput exportInput"
            jsname="YPqjbf"
            tabindex="0"
            aria-labelledby="i5"
            aria-describedby="i6 i7"
            dir="auto"
            data-initial-dir="auto"
            data-initial-value=""*/
          />
        </Email>
        <Button
          type="submit"
          /*Be careful!!🤣------------------------------

          role="button"
          className="appsMaterialWizButtonEl appsMaterialWizButtonPaperbuttonEl appsMaterialWizButtonPaperbuttonFilled freebirdFormviewerViewNavigationSubmitButton freebirdThemedFilledButtonM2"
          jscontroller="VXdfxd"
          jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;"
          jsshadow=""
          jsname="M2UYVd"
          tabindex="0"*/
        >
          Submit
        </Button>
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
const Email = styled(Name)``;
const EmailLabel = styled(NameLabel)``;
const EmailInput = styled(NameInput)``;
const Button = styled.button`
  flex: 0.3;
  padding: 0.5em 2em;
`;

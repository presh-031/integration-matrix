import React from "react";
import {
  Card,
  CardHeading,
  CardIcon,
  CardsContainer,
  CardText,
  InfoHeading,
  InfoText,
  StyledInfo,
} from "./styled/Info.styled";

import flag from "../assets/flag.svg";
import speed from "../assets/speed.svg";
import data from "../assets/data.svg";
const Info = () => {
  return (
    <StyledInfo>
      <InfoHeading>
        Accurate and reliable real time historical market data API for hundreds of global currencies.
      </InfoHeading>
      <InfoText>
        With over 180+ Countries, Street Rates Currency API is integrated with reputable global sources guranteeing
        accurate and up to date data, providing you with a currency API you can trust.
      </InfoText>
      <CardsContainer>
        <Card>
          <CardIcon></CardIcon>
          <CardHeading></CardHeading>
          <CardText></CardText>
        </Card>
        <Card>
          <CardIcon></CardIcon>
          <CardHeading></CardHeading>
          <CardText></CardText>
        </Card>
        <Card>
          <CardIcon></CardIcon>
          <CardHeading></CardHeading>
          <CardText></CardText>
        </Card>
      </CardsContainer>
    </StyledInfo>
  );
};

export default Info;

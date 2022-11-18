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
          <CardIcon>
            <img src={flag} alt="flag" />
          </CardIcon>
          <CardHeading>180+ Countries Covered</CardHeading>
          <CardText>
            Our Exchange rate API is built for developers. We make it easy to plug-in to yout existing software. You’ll
            receive SDKs for Java, NodeJS, PHP and Python.
          </CardText>
        </Card>
        <Card>
          <CardIcon>
            <img src={speed} alt="speed" />
          </CardIcon>
          <CardHeading>Simple and Quick Implementation</CardHeading>
          <CardText>
            Our Exchange rate API is built for developers. We make it easy to plug-in to yout existing software. You’ll
            receive SDKs for Java, NodeJS, PHP and Python.
          </CardText>
        </Card>
        <Card>
          <CardIcon>
            <img src={data} alt="data" />
          </CardIcon>
          <CardHeading>Accurate and Precise Data to Implement</CardHeading>
          <CardText>
            Our Exchange rate API is built for developers. We make it easy to plug-in to yout existing software. You’ll
            receive SDKs for Java, NodeJS, PHP and Python.
          </CardText>
        </Card>
      </CardsContainer>
    </StyledInfo>
  );
};

export default Info;

import styled from "styled-components";

export const StyledInfo = styled.section`
  margin: 0 2rem;
  background-color: #f1f5f9;
  margin-top: 4.8rem;
  padding: 3.2rem 2rem;
  outline: 1px solid red;
  @media (min-width: 1200px) {
    margin: 0 12rem;
    margin-top: 8rem;
    padding: 4.8rem 10rem;
  }
`;
export const InfoHeading = styled.p`
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.4rem;
  color: #334155;
  text-align: center;
  @media (min-width: 1200px) {
    font-size: 2.8rem;
    line-height: 3.2rem;
    letter-spacing: -0.002em;
    width: 80%;
    margin: 0 auto;
  }
`;
export const InfoText = styled.p`
  color: #334155;
  text-align: center;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.8rem;
  margin-top: 0.8rem;
  @media (min-width: 1200px) {
    font-size: 1.4rem;
    line-height: 2rem;
    letter-spacing: -0.001em;
    width: 48%;
    margin-top: 1.6rem;
    margin: 0 auto;
  }
`;
export const CardsContainer = styled.div`
  margin-top: 0.8rem;
  @media (min-width: 1200px) {
    margin-top: 8.2rem;
    display: flex;
    width: 100%;
    outline: 10px solid blue;
  }
`;
export const Card = styled.div`
  outline: 1px solid red;
  padding: 3.2rem 4rem;
  @media (min-width: 1200px) {
    padding: 0;
    padding-top: 1rem;
  }
  div {
    outline: 1px solid red;
    width: 3.2rem;
    height: 3.2rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    @media (min-width: 1200px) {
      width: 4rem;
      height: 4rem;
    }
  }
  p:nth-of-type(1) {
    outline: 1px solid yellow;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 2.4rem;
    color: #334155;
    margin: 1.6rem 0 0.8rem 0;
    @media (min-width: 1200px) {
      margin: 0;
      width: 60%;
      outline: 1px solid red;
      margin-top: 2.4rem;
      margin-bottom: 0.8rem;
    }
  }
  p:nth-of-type(2) {
    width: 91.7224%;
    outline: 1px solid red;
    color: #475569;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.8rem;
    @media (min-width: 1200px) {
      font-size: 1.4rem;
      line-height: 2rem;
      letter-spacing: 0.001em;
    }
  }
`;

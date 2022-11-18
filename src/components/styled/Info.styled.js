import styled from "styled-components";

export const StyledInfo = styled.section`
  margin: 0 2rem;
  background-color: #f1f5f9;
  margin-top: 4.8rem;
  /* Last card should have mb of 3.2rem for design */
  padding: 3.2rem 2rem;
  outline: 1px solid red;
`;
export const InfoHeading = styled.p`
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.4rem;
  color: #334155;
  text-align: center;
`;
export const InfoText = styled.p`
  color: #334155;
  text-align: center;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.8rem;
  margin-top: 0.8rem;
`;
export const CardsContainer = styled.div`
  margin-top: 0.8rem;
`;
export const Card = styled.div`
  outline: 1px solid red;
  padding: 3.2rem 4rem;
  div {
    outline: 1px solid red;
    width: 3.2rem;
    height: 3.2rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
  }
  p:nth-of-type(1) {
    outline: 1px solid yellow;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 2.4rem;
    color: #334155;
    margin: 1.6rem 0 0.8rem 0;
  }
  p:nth-of-type(2) {
    width: 91.7224%;
    outline: 1px solid red;
    color: #475569;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.8rem;
  }
`;

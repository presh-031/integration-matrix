import styled from "styled-components";

export const StyledPricing = styled.div`
  outline: 1px solid red;
  margin: 0 3.9rem;
  @media (min-width: 1200px) {
    margin: 0 12rem;
  }
`;

export const PricingHeader = styled.p`
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.4rem;
  color: #334155;
  text-align: center;
  margin-bottom: 0.8rem;
  @media (min-width: 1200px) {
    font-size: 2.8rem;
    line-height: 3.2rem;
    letter-spacing: -0.002em;
    margin-bottom: 1.6rem;
  }
`;
export const PricingInfo = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  margin-bottom: 2.4rem;
  line-height: 1.8rem;
  text-align: center;
  color: #334155;
  @media (min-width: 1200px) {
    font-size: 1.4rem;
    margin: 0 auto;
    line-height: 2rem;
    letter-spacing: 0.001em;
    width: 40%;
    margin-bottom: 3.2rem;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  @media (min-width: 1200px) {
    flex-direction: row;
    gap: 3rem;
  }
`;

export const PricingCard = styled.div`
  width: 27.9rem;
  margin: 0 auto;
  background-color: #f1f5f9;
  padding: 2.4rem 4.4rem 1.8rem 4.4rem;
  border-radius: 1.6rem;
  outline: 1px solid red;
  @media (min-width: 1200px) {
    width: 37.9rem;
    border-radius: 2rem;
  }
  ul {
    list-style: none;
    li {
      outline: 1px solid red;
      display: flex;
      align-items: center;
      gap: 1.94rem;
      font-weight: 400;
      font-size: 1.031rem;
      line-height: 1.472rem;
      letter-spacing: 0.001em;
      margin-bottom: 1.445rem;
      @media (min-width: 1200px) {
        gap: 2.6rem;
        font-size: 1.4rem;
        line-height: 2rem;
        margin-bottom: 2rem;
      }
    }
  }
  button {
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2.4rem;
    width: 18.3rem;
    height: 4.1rem;
    background-color: #0062ff;
    color: #f8fafc;
    border: none;
    margin-top: 2.2rem;
    border-radius: 0.294rem;
    @media (min-width: 1200px) {
      width: 24.9rem;
      height: 5.6rem;
      border-radius: 0.4rem;
      margin-top: 3rem;
    }
  }
`;

export const PlanName = styled.p`
  text-align: center;
  outline: 1px solid blue;
  font-weight: 700;
  font-size: 1.325rem;
  line-height: 1.76rem;
  margin-bottom: 2.8rem;
  @media (min-width: 1200px) {
    font-size: 1.8rem;
    line-height: 2.4rem;
    margin-bottom: 3.9rem;
  }
`;

export const PlanPrice = styled.p`
  font-weight: 700;
  font-size: 2.356rem;
  line-height: 2.94rem;
  letter-spacing: -0.002em;
  text-align: center;
  margin-bottom: 2.4rem;
  @media (min-width: 1200px) {
    font-size: 3.2rem;
    line-height: 4rem;
    margin-bottom: 3.4rem;
  }
`;

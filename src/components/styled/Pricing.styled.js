import styled from "styled-components";

export const StyledPricing = styled.div`
  outline: 1px solid red;
  margin: 0 3.9rem;
  div {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }
`;
export const PricingHeader = styled.p`
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.4rem;
  color: #334155;
  text-align: center;
  margin-bottom: 0.8rem;
`;
export const PricingInfo = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  margin-bottom: 2.4rem;
  line-height: 1.8rem;
  text-align: center;
  color: #334155;
`;
export const PricingCard = styled.div`
  width: 27.9rem;
  margin: 0 auto;
  background-color: #f1f5f9;
  padding: 2.4rem 4.4rem 1.8rem 4.4rem;
  border-radius: 1.6rem;
  outline: 1px solid red;
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
    border-radius: 0.294rem;
  }
`;

export const PlanName = styled.p`
  text-align: center;
  outline: 1px solid blue;
  font-weight: 700;
  font-size: 1.325rem;
  line-height: 1.76rem;
`;

export const PlanPrice = styled.p`
  font-weight: 700;
  font-size: 2.356rem;
  line-height: 2.94rem;
  letter-spacing: -0.002em;
  text-align: center;
`;

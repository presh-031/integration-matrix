import styled from "styled-components";

export const StyledFaqs = styled.section`
  outline: 1px solid red;
  margin-top: 4.8rem;
  @media (min-width: 1200px) {
    width: 72rem;
    margin: 0 auto;
    margin-top: 8rem;
  }
`;
export const FaqsHeading = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 1.272rem;
  line-height: 1.4rem;
  letter-spacing: -0.002em;
  margin-bottom: 1rem;
  @media (min-width: 1200px) {
    font-size: 2.8rem;
    line-height: 3.2rem;
    margin-bottom: 1.6rem;
  }
`;
export const Question = styled.div`
  padding: 1.3rem 1.4rem;
  display: flex;
  margin: 0 2.4rem;
  border-bottom: 0.45px solid #c6c8d3;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1200px) {
    padding: 3.2rem 1rem 2.4rem 0;
  }
  p {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: #334155;
    @media (min-width: 1200px) {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
  }
  /* check logo to use another - most likely */
  img {
    width: 1.2rem;
    height: 1.2rem;
    display: block;
    @media (min-width: 1200px) {
      width: 2.4rem;
      height: 2.4rem;
      outline: 1px solid red;
      object-fit: cover;
    }
  }
`;

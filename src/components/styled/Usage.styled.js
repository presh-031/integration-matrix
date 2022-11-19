import styled from "styled-components";

export const StyledUsage = styled.section`
  margin: 4.8rem 3rem;
  @media (min-width: 1200px) {
    outline: 1px solid red;
    margin: 0;
    margin-top: 8rem;
    margin: 8rem 22rem;
    display: flex;
    justify-content: space-between;
  }
`;
export const LeftSection = styled.div`
  @media (min-width: 1200px) {
    width: 40.5rem;
  }
  p:nth-of-type(1) {
    color: #334155;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.4rem;
    margin-bottom: 0.8rem;
    @media (min-width: 1200px) {
      font-size: 2.4rem;
      line-height: 3.2rem;
      margin-bottom: 2.4rem;
    }
  }
  p:nth-of-type(2) {
    color: #334155;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.8rem;
    margin-bottom: 2.4rem;
    @media (min-width: 1200px) {
      font-size: 1.4rem;
      line-height: 2rem;
      letter-spacing: 0.001em;
      margin-bottom: 4rem;
    }
  }
  ul {
    outline: 1px solid red;
    list-style-type: none;
    li {
      display: flex;
      gap: 1.6rem;
      align-items: center;
      outline: 1px solid red;
      div {
        background-color: #0064f1;
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
      }
      p {
        align-self: center;
        font-weight: 600;
        font-size: 2rem;
        line-height: 1.8rem;
        outline: 1px solid red;
        letter-spacing: -0.02em;
        color: #334155;
      }
    }
  }
  a {
    outline: 1px solid red;
    color: #0064f1;
    display: block;
    margin-top: 2.4rem;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;
    letter-spacing: 0.001em;
  }
`;
export const RightSection = styled.div`
  outline: 1px solid red;
  padding: 0;
  @media (min-width: 1200px) {
    display: grid;
    place-items: center;
  }
  img {
    width: 24.7rem;
    /* height: 28rem; */
    margin: 0 auto;
    display: block;
    outline: 1px solid blue;
    @media (min-width: 1200px) {
      width: 38rem;
      height: 34rem;
    }
  }
`;

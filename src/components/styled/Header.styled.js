import styled from "styled-components";

export const StyledHeader = styled.p`
  outline: 1px solid red;
  background-color: #00296b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.6rem;
  @media (min-width: 1200px) {
    border: 1px solid red;
    background-color: #fff;
    padding: 2.8rem 12rem;
  }
`;

export const LeftSection = styled.p`
  outline: 1px solid green;
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 2.8rem;
  color: #fff;
  @media (min-width: 1200px) {
    color: #202020;
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 4.3rem;
  }
`;

export const RightSection = styled.div`
  display: none;
  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
    outline: 1px solid red;
    color: #6d6d6d;
    gap: 4.4rem;
  }
  p {
    @media (min-width: 1200px) {
      outline: 1px solid red;
      font-size: 500;
      font-size: 1.6rem;
      line-height: 1.93rem;
    }
  }
`;

export const MenuContainer = styled.div`
  outline: 1px solid blue;
  @media (min-width: 1200px) {
    display: none;
  }
`;

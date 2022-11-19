import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #00296b;
  margin-top: 11.97rem;
  color: #f8fafc;
  padding: 6.6rem 1.6rem 0 1.6rem;
  div {
    outline: 1px solid red;
    text-align: center;
    p {
      padding: 1rem 0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.3rem;
      font-weight: 7;
      font-size: 1.8rem;
      line-height: 2.4rem;
      margin-bottom: 4.2rem;
      img {
        width: 1.32rem;
      }
    }
    ul {
      display: none;
      li {
      }
    }
  }
`;

export const FinalContainer = styled.section`
  display: flex;
  border-top: 1px solid #cbd5e1;
  align-items: center;
  justify-content: space-between;
  padding: 3.95rem 0;
  p {
  }
  p:nth-of-type(1) {
    font-weight: 800;
    font-size: 1.8rem;
    line-height: 2.4rem;
  }
`;

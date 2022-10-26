/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components';

const Banner = () => {
  return (
    <Container>
      <h1>
        2 B 1 <img src="/images/navlogo.png" alt="square and compass" /> ask 1
      </h1>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 10rem;
  background: linear-gradient(90deg, #870101 25%, #870101d3 45%, #870101 65%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
  color: #fff;
  h1 {
    margin: auto;
    letter-spacing: 0.25rem;
    font-size: clamp(2.5rem, 3vw, 4rem);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }

  img {
    height: 3rem;
    width: 3rem;
    margin: 0 0.75rem;
  }
`;
export default Banner;

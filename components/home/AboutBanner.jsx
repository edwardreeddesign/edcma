import styled from 'styled-components';

const AboutBanner = () => {
  return (
    <Container>
      <Content>
        <h1>14</h1>
        <p>District Lodges</p>
      </Content>
      <Content>
        <h1>170+</h1>
        <p>Years in Essex County</p>
      </Content>
      <Content>
        <h1>200+</h1>
        <p>Meetings per year</p>
      </Content>
      <Content>
        <h1>550+</h1>
        <p>District Members</p>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 10rem;
  background: linear-gradient(90deg, #870101 25%, #870101d3 45%, #870101 65%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
  padding: 2rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  color: #fff;

  h1 {
    letter-spacing: 0.25rem;
    font-size: clamp(2.5rem, 3vw, 4rem);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }

  p {
    margin: 0.5rem 0;

    @media (max-width: 768px) {
      margin-top: -0.25rem;
    }
  }
`;
export default AboutBanner;

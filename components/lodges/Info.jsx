import Link from 'next/link';
import styled from 'styled-components';
const Info = ({ lodge }) => {
  return (
    <Container>
      <h1>{lodge?.name} A.F. & A.M.</h1>
      <div>
        <h2>A Brief History</h2>
        <p>{lodge?.history}</p>
      </div>
      <div>
        <h2>Meetings</h2>
        <p>{lodge?.meeting}</p>
      </div>
      <div className="social">
        <a href={lodge.website} target="_blank" rel="noreferrer">
          <button>Website</button>
        </a>

        <a href={lodge.facebook} target="_blank" rel="noreferrer">
          <button>Facebook</button>
        </a>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-around;
  height: 100%;
  padding: 0 0.5rem;

  @media (min-width: 768px) {
    padding: 0 2em;
  }

  h1 {
    /* text-align: center; */
    margin-bottom: 1rem;
  }

  h2 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 0.5rem;
  }

  .social {
    margin-top: 2rem;
    gap: 1rem;
    display: flex;
  }

  button {
    font-size: 1.4rem;
    padding: 0.8rem 1.5rem;
    border-radius: 1.5rem;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
`;
export default Info;

import styled from 'styled-components';
const Info = ({ lodge }) => {
  return (
    <Container>
      <h1>{lodge?.name} A.F. & A.M.</h1>
      <h2>A Brief History</h2>
      <p>{lodge?.history}</p>
      <h2>Meetings</h2>
      <p>{lodge?.meeting}</p>
      <div className="social">
        <button>View Website</button>
        <button>Facebook</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 2rem;

  h1 {
    text-align: center;
    margin-bottom: 0.5rem;
  }
`;
export default Info;

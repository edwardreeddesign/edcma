import LodgeCard from '../components/LodgeCard';
import styled from 'styled-components';
import temples from '../data/lodges';
import Card from '../components/Card';
import Layout from '../components/Layout';
const lodges = () => {
  return (
    <Layout title="Lodges">
      <Container>
        {/* <div className="grid"> */}
        {temples.map((temple, idx) => (
          <LodgeCard temple={temple} key={idx} />
        ))}
        {/* </div> */}
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;

  /* display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 3rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  .grid {
    grid-column: span 1 / span 1;

    @media (min-width: 1024px) {
      grid-column: span 8 / span 8;
    }
  } */
`;
export default lodges;

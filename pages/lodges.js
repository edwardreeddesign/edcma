import LodgeCard from '../components/LodgeCard';
import styled from 'styled-components';
import temples from '../data/lodges';
import Card from '../components/Card';
import Layout from '../components/Layout';
const lodges = () => {
  return (
    <Layout title="Lodges">
      <Title>
        <h1>The Lodges of Essex County District</h1>
        <p>(alphabetically by location)</p>
      </Title>
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
const Title = styled.div`
  margin-top: 2rem;
  text-align: center;
  line-height: 175%;
  p {
    margin-bottom: 2rem;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;
export default lodges;

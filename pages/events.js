import Calendar from '../components/Calendar';
import Layout from '../components/Layout';
import styled from 'styled-components';

const events = () => {
  return (
    <Layout title="Events">
      <Container>
        <h1>District Calendar</h1>
        <Calendar />
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  padding: 2rem;

  h1 {
    margin-bottom: 2rem;
  }
`;
export default events;

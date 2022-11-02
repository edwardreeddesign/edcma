import styled from 'styled-components';
import Form from '../components/Form';
import Layout from '../components/Layout';

const contact = () => {
  return (
    <Layout title="Contact">
      <Container>
        <h1>Contact</h1>
        <p>Lets get in touch. Send us a message:</p>
        <>
          <Form />
        </>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  width: 80%;
  margin: 3rem auto;

  @media (min-width: 768px) {
    width: 60%;
  }
`;
export default contact;

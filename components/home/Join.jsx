import Link from 'next/link';
import styled from 'styled-components';

const Join = () => {
  return (
    <Container>
      <Title>
        <h2>How To Join</h2>
      </Title>
      <Text>
        <h3>
          Ask a Friend <hr />
        </h3>
        <p>
          You may have a friend who is a Mason who has shared information about
          Masonry with you, but he will never ask you to join. Masons do not
          solicit members. A man must come forward of his own free will and ask
          about joining.
        </p>
        <p>
          If you don&apos;t know anyone who is a Mason and would like to know
          more about our fraternal order, we invite you to enquire through the
          Lodge in your community. Friend to friend, we would be happy to answer
          your questions without obligation.
        </p>
        <p>
          Please use our{' '}
          <Link href="/contact">
            <a className="contact">Contact Form</a>
          </Link>{' '}
          to request a referral to a Lodge or for general information.
        </p>
      </Text>
      <button>More Info</button>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f1f1f1;
  padding: 0 2rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    padding: 0 6rem;
  }

  @media (min-width: 992px) {
    padding: 0 20rem;
  }
`;

const Title = styled.div`
  text-align: center;
  padding: 2rem 0;

  h2 {
    font-size: clamp(1.5rem, 2.5vw, 2.5rem);
  }
`;

const Text = styled.div`
  h3 {
    margin: 0 0 1rem 0rem;
    letter-spacing: 0.1rem;
  }

  p {
    line-height: 1.5rem;
    margin-bottom: 2rem;
  }

  .contact {
    font-weight: bold;
    color: #e20505;
  }
`;
export default Join;

import Link from 'next/link';
import styled from 'styled-components';

const About = () => {
  return (
    <Container>
      <Title>
        <h2>About Us</h2>
      </Title>
      <Text>
        <h3>
          What is Freemasonry?
          <hr />
        </h3>
        <p>
          Simply stated, it&apos;s a fraternal organization dedicated to helping
          a man develop in an ethical and moral environment.
        </p>
      </Text>
      <Text>
        <h3>
          What Freemasonry is <span>NOT</span>.
          <hr />
        </h3>
        <p>
          It is <span>not a service club</span>, though Masons serve their
          community in a variety of ways.
        </p>
        <p>
          It is <span>not a religion</span>, though a man must profess belief in
          a supreme being and act accordingly.
        </p>
        <p>
          It is <span>not a secret organization</span>, though there are
          harmless signs and symbols, the meaning of which are not shared with
          non-Masons.
        </p>
        <button>
          <Link href="/about">
            <a>More Info</a>
          </Link>
        </button>
      </Text>
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

  span {
    font-weight: bold;
  }
`;

export default About;

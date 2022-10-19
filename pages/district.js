import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import styled from 'styled-components';

const district = () => {
  return (
    <Layout title="District Association">
      <Container>
        <Title>
          <h1>District Association</h1>
        </Title>
        <Text>
          <p>
            The purpose of the Essex County District Masonic Association is to
            promote Masonry in general, to communicate with members thereby
            allowing them to fully participate in District events, and to
            facilitate communications of the District Deputy Grand Master for
            the benefit of the District.
          </p>
          <p>
            Membership in the Association consists of all Masons in good
            standing of a Craft Lodge in Essex County District. Annual dues are
            paid by each Lodge on behalf of its members.
          </p>
          <p>
            The Association&apos;s regular meetings are held at Essex on the
            third Monday of September, November, March, and June at 7:30 P.M.
            Please check the district calendar to be sure that a meeting has not
            been re-scheduled or relocated.
          </p>
          <Link href="/lodges">
            <a>
              <button>View the Lodges</button>
            </a>
          </Link>
          <Image
            src="https://ecdma.ca/2022/w3images/mapessex.png"
            alt="map of Essex District"
            layout="fill"
          />
        </Text>
      </Container>
    </Layout>
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

  h1 {
    font-size: clamp(2rem, 3vw, 2.75rem);
  }

  h2 {
    font-size: clamp(1.5rem, 2.5vw, 2rem);
  }

  h3 {
    text-align: left;
    margin: -0.5rem 0;
  }
`;

const Text = styled.div`
  h2 {
    margin: 0 0 1rem 0rem;
    letter-spacing: 0.1rem;
  }

  hr {
    border: 1px solid rgba(251, 233, 47, 7);
    margin-top: 0.25rem;
  }

  p {
    line-height: 1.5rem;
    margin-bottom: 2rem;
  }

  button {
    display: inline-block;
    margin-bottom: 2rem;
    width: 100%;
    padding: 0.85rem 1.25rem;
    border: 1.5px solid rgb(251, 233, 47);
    border-radius: 0.25rem;
    background-color: #fff;
    font-size: 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
    transition: all 300ms ease;

    &:hover {
      transform: scale(0.95);
      background: rgba(251, 233, 47, 0.9);
    }
  }
`;
export default district;

import Link from 'next/link';
import styled from 'styled-components';

const District = () => {
  return (
    <Container>
      <Title>
        <h2>District Association</h2>
      </Title>
      <Text>
        <p>
          The purpose of the Essex County District Masonic Association is to
          promote Masonry in general, to communicate with members thereby
          allowing them to fully participate in District events, and to
          facilitate communications of the District Deputy Grand Master for the
          benefit of the District.
        </p>
        <p>
          Membership in the Association consists of all Masons in good standing
          of a Craft Lodge in Essex County District. Annual dues are paid by
          each Lodge on behalf of its members.
        </p>
        <p>
          The Association&apos;s regular meetings are held at Essex on the third
          Monday of September, November, March, and June at 7:30 P.M. Please
          check the district calendar to be sure that a meeting has not been
          re-scheduled or relocated.
        </p>
      </Text>
      <button>
        <Link href="/">
          <a>View the Lodges</a>
        </Link>
      </button>
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

const Title = styled.div`
  text-align: center;
  padding: 2rem 0;

  h2 {
    font-size: clamp(1.5rem, 2.5vw, 2.5rem);
  }
`;

const Text = styled.div`
  p {
    line-height: 1.5rem;
    margin-bottom: 2rem;
  }
`;
export default District;

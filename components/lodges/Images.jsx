/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components';
const Images = ({ lodge }) => {
  return (
    <Container>
      <img src={lodge?.mainImage} alt={lodge?.name} />
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem 0.5rem;

  @media (min-width: 768px) {
    padding: 0;
  }
  img {
    height: 640px;
    width: 100%;
    object-fit: cover;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
    border-radius: 0.5rem;

    @media (min-width: 768px) {
      margin-bottom: 5rem;
    }
  }
`;
export default Images;

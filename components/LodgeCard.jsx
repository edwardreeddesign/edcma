/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import temple from '../data/lodges';

const LodgeCard = ({ temple }) => {
  return (
    <Container>
      <Img>
        <ImgWrapper>
          <Image
            src={temple.image}
            alt="lodge"
            objectFit="cover"
            layout="fill"
          />
        </ImgWrapper>
      </Img>
      <h2>
        {temple.location} <hr />
      </h2>
      <Info>
        <h4>{temple.address}</h4>
        <p>
          <span>Parking: </span> {temple.parking}
        </p>
      </Info>
      <h3>Our Lodges</h3>
      <Lodges>
        {temple.lodges.map(lodge => (
          <Link href={`lodge/${lodge.slug}`} key={lodge.name}>
            <a className="cta">
              {lodge.name}
              <img src={lodge.ctaImage} alt="logo" />
            </a>
          </Link>
        ))}
      </Lodges>
    </Container>
  );
};

const Container = styled.div`
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
  border-radius: 0.5rem;
  padding-bottom: 3rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 30rem;
  @media (min-width: 1024px) {
    padding: 2rem /* 32px */;
  }

  h2,
  h3 {
    text-align: center;
    margin-bottom: 2.5rem;
  }
`;
const Img = styled.div`
  position: relative;
  overflow: hidden;
  padding-bottom: 20rem;
  margin-bottom: 2rem;
  border-radius: 0.5rem 0.5rem 0 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
`;

const ImgWrapper = styled.div`
  object-position: top;
  position: absolute;
  height: 20rem;
  width: 100%;
`;

const Info = styled.div`
  margin: 1.5rem 0;
  padding: 0 1.5rem;

  h4 {
    margin-bottom: 0.25rem;
  }

  h3 {
    text-align: center;
    padding: 1rem 0;
  }

  span {
    font-weight: bold;
  }
`;

const Lodges = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 0.5rem;

  .cta {
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    border: 1.5px solid rgb(251, 233, 47);
    border-radius: 0.25rem;
    background-color: #fff;
    font-size: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
    transition: all 300ms ease;

    &:hover {
      transform: scale(0.95);
    }

    img {
      width: 2rem;
      height: 2rem;
      margin-left: 0.25rem;
      border-radius: 50%;
    }
  }
  /* .cta {
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  } */
`;

export default LodgeCard;

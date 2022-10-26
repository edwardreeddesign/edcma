/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import temple from '../data/lodges';

const LodgeCard = ({ temple }) => {
  return (
    <Container>
      <Img>
        <div className="overlay"></div>
        <img src={temple.image} alt={temple.name} />
        <div className="info">
          <h4>{temple.address}</h4>
          <h1>{temple.location}</h1>
          <p>
            <span>Parking: </span>
            {temple.parking}
          </p>
        </div>
      </Img>
      <Lodges>
        <h3>Our Lodges</h3>
        <div className="lodges">
          {temple.lodges.map(lodge => (
            <div className="cta" key={lodge.name}>
              <Link href={`/lodge/${lodge.slug}`} key={lodge.name}>
                <a>
                  {lodge.name} <img src={lodge.ctaImage} alt={lodge.name} />
                </a>
              </Link>
            </div>
          ))}
        </div>
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

  h2,
  h3 {
    position: absolute;
    left: 10%;
  }
`;
const Img = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 1rem;
  border-radius: 0.5rem 0.5rem 0 0;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 20rem;
    background: rgba(0, 0, 0, 0.3);
  }

  .info {
    position: absolute;
    left: 5%;
    bottom: 15%;
    color: #fff;
    display: flex;
    flex-direction: column;
  }

  img {
    object-fit: cover;
    height: 20rem;
    width: 100%;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
  }

  h1 {
    margin: 0.5rem 0;
  }
`;

const ImgWrapper = styled.div`
  object-position: top;
  position: absolute;
  height: 100%;
  width: 100%;
`;

const Info = styled.div`
  position: relative;
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
  /* display: flex;
  align-items: center;
  justify-content: left;
  flex-wrap: wrap; */
  width: 100%;
  padding: 0 2rem;
  gap: 0.5rem;

  h3 {
    position: unset;
    margin-bottom: 1rem;
  }

  .lodges {
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    /* border: 1px solid rgba(0, 0, 0, 0.2); */
    border-radius: 0.25rem;
    background-color: rgba(0, 0, 0, 0.05);
    font-size: 1rem;
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7); */
    transition: all 300ms ease;
    margin-bottom: 0.5rem;

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

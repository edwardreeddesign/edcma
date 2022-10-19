import Link from 'next/link';
import temple from '../data/lodges';
import styled from 'styled-components';

/* eslint-disable @next/next/no-img-element */
const Card = ({ temple }) => {
  return (
    <Container>
      <div className="lodge-info">
        <div className="image">
          <img
            src="/images/lodges/amhersburg.png"
            alt="lodge"
            className="img"
          />
        </div>
        <div className="info">
          <h2>{temple.location}</h2>
          <h4>{temple.address}</h4>
          <p>
            <span>Parking: </span> {temple.parking}
          </p>
        </div>
      </div>
      <div className="lodges">
        {temple.lodge.map(lodge => (
          <Link href="/" key={lodge.name}>
            <a className="cta">
              {lodge.name}
              <img
                src="/images/lodges/thistlelodge.png"
                alt="logo"
                className="cta-img"
              />
            </a>
          </Link>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  .lodge-info {
    display: flex;
  }

  img {
    height: 10rem;
    width: 10rem;
    object-fit: cover;
  }

  .cta {
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }

  .cta-img {
    height: 2rem;
    width: 2rem;
    margin-left: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
    border-radius: 50%;
  }

  .lodges {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    gap: 0.5rem;
  }
`;
export default Card;

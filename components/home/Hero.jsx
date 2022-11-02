import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const Hero = () => {
  return (
    <StyledHero>
      <Image
        src="/images/edcm.svg"
        alt="Canada Flag with Square and Compass"
        objectFit="cover"
        layout="fill"
      />

      <Title>
        <h1>Essex County District</h1>
        <h3>Canada&apos;s Southernmost jurisdiction</h3>
        <h2>Grand Lodge of Canada in the Province of Ontario</h2>
      </Title>
      <CTA>
        <Link href="/about">
          <button class="cta-main">Learn More</button>
        </Link>
      </CTA>
    </StyledHero>
  );
};

const StyledHero = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Title = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
  color: #fff;

  h1,
  h2,
  h3 {
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
  }
`;

const CTA = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, -10%);

  /* .cta-main {
    cursor: pointer;
    padding: 0.85rem 1.25rem;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 0.5rem;
    background-color: rgba(255, 255, 255, 0.8);
    font-size: 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
    transition: all 300ms ease;

    &:hover {
      transform: scale(0.95);
      background: rgba(255, 255, 255, 0.3);
    }
  } */
`;
export default Hero;

import { useState } from 'react';
import Image from 'next/image';
import { links } from './Links';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';

const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();

  return (
    <Nav>
      <Logo>
        <Link href="/">
          <a>
            <Image src="/images/navlogo.png" alt="Navbar Logo" layout="fill" />
          </a>
        </Link>
      </Logo>
      <Hamburger onClick={toggle} isOpen={isOpen}>
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </Hamburger>
      <MobileList toggle={toggle} isOpen={isOpen}>
        <li>
          {links.map(link => (
            <Link href={link.url} key={link.name}>
              <a
                className={router.pathname === link.url ? 'active' : ''}
                onClick={toggle}
              >
                {link.name}
              </a>
            </Link>
          ))}
        </li>
      </MobileList>
    </Nav>
  );
};

const Nav = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  background-color: rgb(167, 0, 0);
  z-index: 11;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  position: relative;
  z-index: 1111;
  margin-left: 2rem;
`;

const Hamburger = styled.div`
  cursor: pointer;
  z-index: 10;
  padding: 0 2rem;

  .line {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 1.7rem;
    height: 3px;
    background: #fff;
    margin-bottom: 0.3rem;
    transition: all 350ms ease-in-out;
  }

  .line1 {
    transform: ${({ isOpen }) =>
      isOpen ? 'rotate(45deg) translate(0, 11px) ' : '0'};
    background: ${({ isOpen }) => (isOpen ? 'black' : '')};
  }

  .line2 {
    opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
  }

  .line3 {
    transform: ${({ isOpen }) =>
      isOpen ? 'rotate(-45deg) translate(0, -11px)' : '0'};
    background: ${({ isOpen }) => (isOpen ? 'black' : '')};
  }
`;

const MobileList = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  opacity: ${({ isOpen }) => (isOpen ? '.9' : '0')};
  bottom: ${({ isOpen }) => (isOpen ? '0' : '100%')};
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? '100vh' : '0')};
  background: #870101;
  /* margin: 4rem; */
  padding: 4rem 0;
  margin: 0;
  z-index: 1;
  transition: all 300ms ease;

  li {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: relative;
  }

  a {
    color: rgb(251, 233, 47);
  }

  .active {
    position: relative;
    color: #fbe93f;
    font-weight: bold;
    transition: all 350ms ease;
  }
  .active::after {
    content: '';
    height: 3px;
    background: #fbe93f;
    position: absolute;
    bottom: -12%;
    right: 0%;
    width: 100%;
  }
`;
export default Mobile;

import { useRouter } from 'next/router';
import { links } from './Links';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const Full = () => {
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
      <ListItems>
        <li>
          {links.map(link => (
            <Link href={link.url} key={link.name}>
              <a className={router.pathname === link.url ? 'active' : ''}>
                {link.name}
              </a>
            </Link>
          ))}
        </li>
      </ListItems>
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

const ListItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 2rem;
  z-index: 100;

  li {
    position: relative;
    display: flex;
    gap: 2rem;

    a {
      color: rgb(251, 233, 47);
    }
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
    bottom: -20%;
    right: 0%;
    width: 100%;
  }
`;

export default Full;

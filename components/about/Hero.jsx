import Link from 'next/link';
import styled from 'styled-components';

const Hero = () => {
  return (
    <Container>
      <Title>
        <h1>About Freemasonry</h1>
      </Title>
      <Text>
        <h2>
          Our Purpose <hr />
        </h2>
        <p>
          Freemasonry is the oldest and largest fraternal organization in the
          world. Its members share a common goal of helping each other become
          better men. Its body of knowledge and system of ethics is based on the
          belief that each man has a responsibility to improve himself while
          being devoted to his family, faith, country, and fraternity.
        </p>
        <h2>
          Friendship <hr />
        </h2>
        <p>
          Freemasonry has many facets which have attracted men of good will of
          every race, religion, political view, and social position into its
          ranks throughout the world for many years. Every member has his own
          individual reason for joining the Craft, but generally its chief
          appeal is the charitable work it does, the philosophy of life taught
          by the Craft with its visible exhibition by Freemasons in their
          exemplary conduct in the everyday world. All these items are
          important, but to the non-member who has given this matter any thought
          whatsoever it soon becomes apparent that the greatest asset in
          Freemasonry is the spirit of friendship that exists between Freemasons
          in their relationship with one another and their attitude of
          thoughtfulness for the welfare of others. For example, many years ago
          the words “Mason” and “friendship” were often used synonymously.
        </p>
        <p>
          There are many definitions of the word “friend”. It means one who is
          in a warm personal relationship with another person. It means a person
          who is ready to assist you in your plans. Many years ago an English
          periodical had a contest and offered a prize to the person submitting
          the best definition of the word “friend”. Here are a few of the
          definitions which were sent to the publication:
          <ul>
            <li>
              “One who multiplies joys, divides grief, and whose honesty is
              inviolable.”
            </li>
            <li>“One who understands our silence.”</li>
            <li>
              “A watch which beats true and for all time and never runs down.”
            </li>
            And here is the definition that won first prize:
            <li>
              “A friend is the one who comes in when the whole world has gone
              out.”
            </li>
          </ul>
        </p>
      </Text>
      <Text>
        <Title>
          <h2>
            Drop In <hr />
          </h2>
        </Title>
        Meeting Masons informally is a good way to get to know who we are and to
        inquire about becoming a Freemason. Social events take place
        periodically throughout the year which you and your family can attend
        and get to know us. Some lodges meet regularly for coffee, informal
        dining or family get-togethers. Please use our{' '}
        <Link href="/contact">
          <a className="contact">Contact Form</a>
        </Link>{' '}
        to inquire about dropping in.
        <ul>
          <Title>
            <h3>Windsor</h3>
          </Title>
          <li className="list">
            Coffee Club - Monday, Wednesday & Friday mornings - 8:30 to 10:30 AM
            - ballroom lounge
          </li>
          <li className="list">
            Breakfast - last Friday of the month - 9:00 AM - top floor lounge -
            check calendar for changes
          </li>
          <li className="list">Mentoring - every Wednesday - 7:00 PM</li>
        </ul>
        <ul>
          <Title>
            <h3>Amherstburg</h3>
          </Title>
          <li className="list">
            Friday Get-together - bring or order-in food - children welcome -
            5:00ish to ?
          </li>
        </ul>
        <ul>
          <Title>
            <h3>Tilbury</h3>
          </Title>
          <li className="list">Coffee - every Saturday morning at 9:30 AM</li>
        </ul>
        <ul>
          <Title>
            <h3>Kingsville & Leamington</h3>
          </Title>
          <li className="list">
            Periodic informal events - please refer to the event notices and
            calendar for coming events
          </li>
        </ul>
        <p>
          Please Note: While we endeavour to keep this list up-to-date, we
          cannot guarantee the accuracy of the information.
        </p>
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

  p {
    line-height: 1.5rem;
    margin-bottom: 2rem;
  }

  ul {
    list-style: none;
  }

  li {
    margin-bottom: 1.5rem;
    font-weight: bold;

    &:first-of-type {
      margin-top: 1.5rem;
    }
    &:last-of-type {
      margin-top: 1.5rem;
    }
  }

  .list {
    font-weight: normal;
  }

  .contact {
    font-weight: bold;
    color: #e20505;
  }
`;
export default Hero;

import styled from 'styled-components';

const Calendar = () => {
  return (
    <Container>
      <>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&src=YmNiMTA5Yjc0Mzk2YmYwZDgwMWM1YjUyNjU1YTcyMDYzY2NlNjk2NDgyMjk2NDhjOWNiYjg3ZjBjMDE2ZmI2NkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%239E69AF"
          // style="border:solid 1px #777"
          width="1200"
          height="700"
          frameborder="0"
          scrolling="no"
        />
      </>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Calendar;

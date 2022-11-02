import useInput from '../helpers/useInput';
import styled from 'styled-components';
import Link from 'next/link';

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');
const isSubject = value => value.trim() !== '';
const isComment = value => value.trim() !== '';

const Form = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(isEmail);

  const {
    value: enteredSubject,
    isValid: enteredSubjectIsValid,
    hasError: subjectInputHasError,
    valueChangeHandler: subjectChangeHandler,
    inputBlurHandler: subjectBlurHandler,
  } = useInput(isSubject);

  const {
    value: enteredComment,
    isValid: enteredCommentIsValid,
    hasError: commentInputHasError,
    valueChangeHandler: commentChangeHandler,
    inputBlurHandler: commentBlurHandler,
  } = useInput(isComment);

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredEmailIsValid &&
    enteredSubjectIsValid &&
    enteredCommentIsValid
  ) {
    formIsValid = true;
  }

  const formSubmissionHandler = e => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log('Submitted');
    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
    resetCommentInput();
  };

  const nameInputClasses = nameInputHasError ? 'invalid' : '';
  const emailInputClasses = emailInputHasError ? 'invalid' : '';
  const subjectInputClasses = subjectInputHasError ? 'invalid' : '';
  const commentInputClasses = commentInputHasError ? 'invalid' : '';

  return (
    <Section>
      <Container>
        <form action={formSubmissionHandler}>
          <FormControl className={nameInputClasses}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={nameChangeHandler}
              onBlur={nameInputBlurHandler}
            />
            {nameInputHasError && (
              <p className="error-text">Please Enter Your Name.</p>
            )}
          </FormControl>
          <FormControl className={emailInputClasses}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={emailChangeHandler}
              value={enteredEmail}
              onBlur={emailBlurHandler}
            />
            {emailInputHasError && (
              <p className="error-text">Email mush be a valid Email.</p>
            )}
          </FormControl>
          <FormControl>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              onChange={subjectChangeHandler}
              value={enteredSubject}
              onBlur={subjectBlurHandler}
            />
            {subjectInputHasError && (
              <p className="error-text">Please enter a Subject.</p>
            )}
          </FormControl>
          <FormControl>
            <label htmlFor="comment">Comment</label>
            <textarea
              type="text"
              name="comment"
              id="comment"
              onChange={commentChangeHandler}
              value={enteredComment}
              onBlur={commentBlurHandler}
              cols="30"
              rows="10"
            />
            {commentInputHasError && (
              <p className="error-text">Please enter your comment.</p>
            )}
          </FormControl>
          <Buttons>
            <Link href="/" rel="noreferrer">
              <button className="btn">Home</button>
            </Link>
            <button type="submit" className="btn" disabled={!formIsValid}>
              Submit
            </button>
          </Buttons>
        </form>
      </Container>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
  margin: 0 auto;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  gap: 4rem;
  width: 100%;
  form {
    width: 100%;
  }
`;

const FormControl = styled.div`
  margin-bottom: 1rem;

  input,
  textarea {
    display: block;
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 0.8rem;
    border-radius: 0.5rem;
    border: none;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);

    &:focus {
      outline: none;
    }
  }

  label {
    font-size: 0.85rem;
    margin: 0.5rem 0;
    display: block;
  }

  .invalid input {
    border: 1px solid #b40e0e;
    background-color: #fddddd;
  }

  .invalid input:focus {
    border-color: #ff8800;
    background-color: #fbe8d2;
  }

  .error-text {
    color: #b40e0e;
    margin-top: -0.5rem;
    padding-bottom: 0.5rem;
    font-size: 1rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1.25rem 0 3rem;

  .btn {
    cursor: pointer;
    background: #fff;
    padding: 1rem 1.7rem;
    border: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
    border-radius: 0.75rem;
    font-size: 1.1rem;
    transition: all 300ms ease;

    &:hover {
      transform: scale(0.95);
    }

    &:disabled,
    &:disabled:hover,
    &:disabled:active {
      background-color: #ccc;
      color: #292929;
      border-color: #ccc;
      cursor: not-allowed;
    }
  }
`;
export default Form;

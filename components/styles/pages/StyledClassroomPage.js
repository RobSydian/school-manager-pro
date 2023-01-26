import styled from "styled-components";

const StyledClassroomPage = styled.div`
  .container__title {
    display: flex;
    align-items: center;
    gap: 1.5em;
  }

  .container__title__icon {
    width: 40px;
    height: 40px;
    padding: 0.5em;
  }

  .container__title__icon:hover {
    background-color: var(--dark);
    border-radius: 25px;
    color: white;
  }

  .container__content {
    padding: 1em 0;
    min-width: 450px;
    overflow: auto;
  }

  @media (min-width: 821px) {
    .container__content__form {
      width: 50%;
    }
  }
`;

export default StyledClassroomPage;

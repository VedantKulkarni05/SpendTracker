import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
  font-family: "Sora", sans-serif;
`;

const ActivityComp = (props) => {
  return (
    <Container>
      Activity
      <input placeholder="Search" />
    </Container>
  );
};
export default ActivityComp;

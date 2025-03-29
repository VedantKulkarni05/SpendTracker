import styled from "styled-components";
import SummaryComp from "./SummaryComp";
import ActivityComp from "./ActivityComp";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin: 10px;
  width: 100%;
  font-family: "Sora", sans-serif;
`;

const HomeComponent = (props) => {
  return (
    <Container>
      <SummaryComp />
      <ActivityComp />
    </Container>
  );
};
export default HomeComponent;

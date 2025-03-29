import styled from "styled-components";
import HomeComponent from "./modules/home";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  font-family: "Sora", sans-serif;
`;

const Header = styled.span`
  color: black;
  font-size: 40px;
  color: #e0e1dd;
  font-weight: 700;
`;
function App() {
  return (
    <Container>
      <Header>SpendX - An Expenses Tracker</Header>
      <HomeComponent />
    </Container>
  );
}

export default App;

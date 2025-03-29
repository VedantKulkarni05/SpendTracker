import styled, { createGlobalStyle } from "styled-components";
import HomeComponent from "./modules/home";

// Global styles to apply background color
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #0f0d23 !important;
    margin: 0;
    padding: 0;

  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  font-family: "Sora", sans-serif;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;

  @media (max-width: 768px) {
    margin-top: 20px;
    padding: 0 20px;
  }
`;

const Header = styled.span`
  color: #e0e1dd;
  font-size: 40px;
  font-weight: 700;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>SpendX - An Expenses Tracker</Header>
        <HomeComponent />
      </Container>
    </>
  );
}

export default App;

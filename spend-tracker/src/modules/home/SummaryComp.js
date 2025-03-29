import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  font-family: "Sora", sans-serif;
`;

const BalanceA = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
  gap: 80px;
`;

const AddTrans = styled.div`
  background: #778da9;
  color: white;
  font-size: 20px;
  padding: 5px 10px;
  border: none;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
`;

const AddTransContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #ccc;
  gap: 20px;
  // width:100%
  padding: 50px 100px;
  margin: 10px;

  & input {
    width: 100%;
    padding: 10px;
    border: 1px solid #e6e8e9;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    transition: all 0.3s ease-in-out;

    &::placeholder {
      color: rgba(136, 136, 136, 0.8);
      font-style: italic;
      transition: all 0.3s ease-in-out;
    }

    &:focus::placeholder {
      opacity: 0.5;
    }
  }
`;

const RadioBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

const AddTransView = () => {
  return (
    <AddTransContainer>
      <input placeholder="Enter Amount" />
      <input placeholder="Enter Description" />
      <RadioBox>
        <input type="radio" id="expense" name="type" value="EXPENSE" />
        <label htmlFor="expense">Expenses</label>
        <input type="radio" id="income" name="type" value="INCOME" />
        <label htmlFor="income">Income</label>
      </RadioBox>

      <AddTrans>Add Trasaction</AddTrans>
    </AddTransContainer>
  );
};

const SummaryComp = (props) => {
  const [isAddtransVisible, toggleAddTrans] = useState(false); // Initially false

  return (
    <Container>
      <BalanceA>  
        <span>Available Balance: ₹1000</span>
        <AddTrans onClick={() => toggleAddTrans(!isAddtransVisible)}>
          {isAddtransVisible ? "Cancel" : "Add"}
        </AddTrans>
      </BalanceA>

      {isAddtransVisible && <AddTransView />}
    </Container>
  );
};

export default SummaryComp;

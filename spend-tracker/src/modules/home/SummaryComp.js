import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  font-family: "Sora", sans-serif;
  width: 100%;
  max-width: 400px;
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
  font-weight: bold;
`;

const AddTransContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #ccc;
  gap: 20px;
  padding: 50px 100px;
  margin: 10px;
  align-items: center;

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
  margin: 10px 0;
  & input {
    width: unset;
    margin: 0 10px;
  }
`;

const ExpContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: 20px;
`;

const ExpBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #ffffff;
  padding: 15px 20px;
  border-radius: 4px;
  width: 150px;
  font-size: 18px;
  & span{
    font-weight:bold;
    font-size:25px;
    color:red;
  }
`;

const IncomeBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #ffffff;
  padding: 15px 20px;
  border-radius: 4px;
  width: 180px;
  font-size: 18px;
    & span{
    font-weight:bold;
    font-size:25px;
    color:green;
  }
`;

const AddTransView = ({ addTransaction, toggleAddTrans }) => {
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("EXPENSE");

  const handleAddTransaction = () => {
    if (!amount || !desc) {
      alert("Please enter all details");
      return;
    }

    addTransaction({
      id: Date.now(),
      amount: Number(amount),
      desc,
      type,
    });

    setAmount("");
    setDesc("");
    setType("EXPENSE");
    toggleAddTrans(false);
  };

  return (
    <AddTransContainer>
      <input
        placeholder="Enter Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        placeholder="Enter Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <RadioBox>
        <input
          type="radio"
          id="expense"
          name="type"
          value="EXPENSE"
          checked={type === "EXPENSE"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="expense">Expenses</label>
        <input
          type="radio"
          id="income"
          name="type"
          value="INCOME"
          checked={type === "INCOME"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="income">Income</label>
      </RadioBox>

      <AddTrans onClick={handleAddTransaction}>Add Transaction</AddTrans>
    </AddTransContainer>
  );
};

const SummaryComp = ({ addTransaction }) => {
  const [isAddtransVisible, toggleAddTrans] = useState(false);

  return (
    <Container>
      <BalanceA>
        <span>Available Balance: ₹1000</span>
        <AddTrans onClick={() => toggleAddTrans(!isAddtransVisible)}>
          {isAddtransVisible ? "Cancel" : "Add"}
        </AddTrans>
      </BalanceA>

      {isAddtransVisible && (
        <AddTransView
          addTransaction={addTransaction}
          toggleAddTrans={toggleAddTrans}
        />
      )}
      <ExpContainer>
        <ExpBox>
          Expense <span>₹1000</span>
        </ExpBox>
        <IncomeBox>
          Income <span>₹10000</span>
        </IncomeBox>
      </ExpContainer>
    </Container>
  );
};

export default SummaryComp;

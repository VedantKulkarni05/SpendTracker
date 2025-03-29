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
  padding: 10px;

  @media (max-width: 480px) {
    margin-top: 30px;
    padding: 5px;
  }
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
  gap: 30px;

  @media (max-width: 480px) {
    font-size: 20px;
    gap: 15px;
  }
`;

const AddTrans = styled.button`
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
  border-radius: 20px;
  gap: 15px;
  padding: 25px;
  margin: 10px;
  align-items: center;
  width: 100%;
  max-width: 350px;
  // overflow-x: hidden;

  & input {
    width: 100%;
    padding: 10px;
    border: 1px solid #e6e8e9;
    border-radius: 4px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    // max-width: 100%;
  }
`;

const RadioBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin: 10px 0;
  flex-wrap: wrap;

  & input {
    width: unset;
    margin: 0 10px;
  }
`;

const ExpContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 20px;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: row;
    align-items: center;
    gap: 15px;
  }
`;

const ExpBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #ffffff;
  border-radius: 20px;
  padding: 15px 20px;
  border-radius: 4px;
  width: 150px;
  font-size: 18px;
  text-align: center;

  & span {
    font-weight: bold;
    font-size: 25px;
    color: red;
  }
`;

const IncomeBox = styled(ExpBox)`
  display: flex;
  flex-direction: column;
  border: 2px solid #ffffff;
  border-radius: 20px;
  padding: 15px 20px;
  border-radius: 4px;
  width: 150px;
  font-size: 18px;
  text-align: center;

  & span {
    color: green;
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

    if (Number(amount) <= 0) {
      alert("Amount should be greater than zero");
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

const SummaryComp = ({ addTransaction, expense, income }) => {
  const [isAddTransVisible, setAddTransVisible] = useState(false);

  return (
    <Container>
      <BalanceA>
        <span>Available Balance: ₹{income - expense}</span>
        <AddTrans onClick={() => setAddTransVisible((prev) => !prev)}>
          {isAddTransVisible ? "Cancel" : "Add"}
        </AddTrans>
      </BalanceA>

      {isAddTransVisible && (
        <AddTransView
          addTransaction={addTransaction}
          toggleAddTrans={setAddTransVisible}
        />
      )}
      <ExpContainer>
        <ExpBox>
          Expense <span>₹{expense}</span>
        </ExpBox>
        <IncomeBox>
          Income <span>₹{income}</span>
        </IncomeBox>
      </ExpContainer>
    </Container>
  );
};

export default SummaryComp;

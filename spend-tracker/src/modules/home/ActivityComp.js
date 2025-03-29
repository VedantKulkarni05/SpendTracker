import { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 50px;
  font-family: "Sora", sans-serif;
  font-size: 18px;
  width: 100%;
  max-width: 400px;
  gap: 10px;
  font-weight: 600;

  & input {
    padding: 11px;
    border: 1px solid #ccc;
    border-radius: 15px;
    font-size: 18px;
    margin-top: 10px;
    transition: border 0.2s ease-in-out;
    background-color: #e6e8e9;
    outline: none;

    &::placeholder {
      color: rgba(0, 0, 0, 0.5);
      font-style: italic;
      opacity: 0.7;
    }
  }
`;

const Cell = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 15px;
  width: 100%;
  max-width: 400px;
  margin-top: 25px;
  font-size: 18px;
  border: 1px solid white;
  border-radius: 4px;
  align-items: center;
  font-weight: normal;
  justify-content: space-between;
  border-left: 4px solid ${(props) => (props.isExpense ? "red" : "green")};
`;

const TransactionCell = ({ payload }) => {
  return (
    <Cell isExpense={payload.type === "EXPENSE"}>
      <span>₹{payload.amount}</span>
      <span>{payload.desc}</span>
    </Cell>
  );
};

const ActivityComp = ({ transactions }) => {
  const [searchTxt, updateSearchTxn] = useState("");
  const [filteredTransaction, updateTxn] = useState(transactions);

  // Update filtered transactions when the search text changes
  useEffect(() => {
    if (!searchTxt.trim()) {
      updateTxn(transactions);
      return;
    }
    const filtered = transactions.filter((payload) =>
      payload.desc.toLowerCase().includes(searchTxt.toLowerCase().trim())
    );
    updateTxn(filtered);
  }, [searchTxt, transactions]);

  return (
    <Container>
      Activity
      <input
        placeholder="Search"
        value={searchTxt}
        onChange={(e) => updateSearchTxn(e.target.value)}
      />
      {filteredTransaction.length > 0 ? (
        filteredTransaction.map((payload) => (
          <TransactionCell key={payload.id} payload={payload} />
        ))
      ) : (
        <p>No transactions found.</p>
      )}
    </Container>
  );
};

export default ActivityComp;

import styled from "styled-components";

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  background-color: #333;
  padding: 10px 0;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubmitButton = styled.button`
  background-color: #0074d9;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  flex-grow: 1;
`;

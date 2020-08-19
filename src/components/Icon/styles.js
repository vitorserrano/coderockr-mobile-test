import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  background: #fff;
  border: 2px solid ${(props) => props.borderColor};
  border-radius: 50px;
  padding: 4px;
`;

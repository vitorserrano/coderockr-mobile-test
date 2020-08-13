import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #e0e0e0;
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
  height: 100px;
  background: #e0e0e0;
  box-shadow: 3px 5px 4px rgba(0, 0, 0, 0.25);
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-weight: 500;
  font-size: 22px;
  color: #333333;
`;

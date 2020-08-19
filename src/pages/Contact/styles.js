import styled from 'styled-components/native';

export const ModalWrapper = styled.ScrollView`
  flex: 1;
`;

export const ModalContainer = styled.View`
  flex: 1;
  background: #c4c4c4b8;
  padding: 0 20px;
`;

export const ModalHeader = styled.View`
  background: #fff;
  box-shadow: 3px 5px 4px rgba(0, 0, 0, 0.25);
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
`;

export const ModalTitle = styled.Text`
  font-weight: 500;
  font-size: 20px;
  color: #333333;
  font-family: 'Roboto_500Medium';
`;

export const ModalButton = styled.TouchableOpacity``;

export const ModalForm = styled.View`
  margin: 20px 0;
`;

export const ModalLabel = styled.Text`
  color: #333333;
  font-family: 'Roboto_700Bold';
  font-size: 14px;
`;

export const ModalInput = styled.TextInput.attrs(() => ({
  underlineColorAndroid: 'transparent',
  placeholderTextColor: 'grey',
  numberOfLines: 10,
  multiline: true,
}))`
  margin-top: 8px;
  margin-bottom: 22px;
  background: #fff;
  border: 2px solid #f2994a;
  border-radius: 4px;
  height: 60px;
  padding: 0 14px;
`;

export const ModalTextArea = styled.TextInput.attrs(() => ({
  underlineColorAndroid: 'transparent',
  placeholderTextColor: 'grey',
  numberOfLines: 10,
  multiline: true,
}))`
  margin-top: 8px;
  background: #fff;
  border: 2px solid #f2994a;
  border-radius: 4px;
  padding: 0 14px;
  height: 250px;
`;

export const ModalButtonSubmit = styled.TouchableOpacity`
  margin-top: 36px;
  background: #f2994a;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  align-self: center;
  flex-direction: row;
`;

export const ModalButtonSubmitTitle = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 16px;
  color: #fff;
  margin-left: 14px;
`;

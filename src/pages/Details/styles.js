import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #e0e0e0;
  flex: 1;
  margin-top: 24px;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
  background: #e0e0e0;
  box-shadow: 3px 5px 4px rgba(0, 0, 0, 0.25);
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 20px;
`;

export const ArrowBack = styled.TouchableOpacity``;

export const RouteName = styled.Text`
  font-weight: 500;
  margin-left: 14px;
  font-size: 20px;
  color: #333333;
  font-family: 'Roboto_500Medium';
`;

export const ImageCover = styled.ImageBackground`
  height: 250px;
  padding: 20px;
  justify-content: flex-end;
  align-items: center;
`;

export const PointGroup = styled.View`
  flex-direction: row;
`;

export const Point = styled.View`
  padding: 4px;
`;

export const Description = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  color: #f1a10a;
  font-family: 'Roboto_700Bold';
  font-size: 24px;
  margin: 4px 0;
`;

export const Author = styled.Text`
  flex-direction: row;
  margin-top: 20px;
`;

export const Info = styled.Text`
  color: #2d2d2d;
  font-family: 'Roboto_400Regular';
  font-size: 14px;
`;

export const Name = styled.Text`
  margin-left: 4px;
  color: #2d2d2d;
  font-family: 'Roboto_700Bold';
  font-size: 14px;
`;

export const Article = styled.Text`
  margin-top: 20px;
  color: #2d2d2d;
  font-family: 'Roboto_400Regular';
  font-size: 16px;
`;

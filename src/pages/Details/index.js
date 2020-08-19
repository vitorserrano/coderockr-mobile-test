import React from 'react';

import { Text } from 'react-native';

import {
  Wrapper,
  Container,
  Header,
  ArrowBack,
  RouteName,
  ImageCover,
  PointGroup,
  Point,
  Description,
  Title,
  Author,
  Info,
  Name,
  Article,
  Stars,
} from './styles';

import { useNavigation, useRoute } from '@react-navigation/native';

import { MaterialIcons, Octicons } from '@expo/vector-icons';

const Details = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { post, stars } = route.params;

  const points = [
    {
      key: Math.random(String()),
      color: '#f1a10a',
    },
    {
      key: Math.random(String()),
      color: '#fff',
    },
    {
      key: Math.random(String()),
      color: '#f1a10a',
    },
    {
      key: Math.random(String()),
      color: '#f1a10a',
    },
  ];

  handleNavigateToBack = () => {
    navigation.goBack();
  };

  return (
    <Wrapper>
      <Container>
        <Header>
          <ArrowBack onPress={handleNavigateToBack}>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={28}
              color="#333333"
            />
          </ArrowBack>
          <RouteName>Post</RouteName>
        </Header>

        <ImageCover
          source={{
            uri: post.imageUrl,
          }}
        >
          <PointGroup>
            {points.map((point) => (
              <Point key={point.key}>
                <Octicons name="primitive-dot" size={28} color={point.color} />
              </Point>
            ))}
          </PointGroup>
        </ImageCover>

        <Description>
          <Title>{post.title}</Title>
          <Author>
            <Info>Posted by: </Info>
            <Name>{post.author}</Name>
          </Author>

          <Stars>
            {stars.map((star) => (
              <MaterialIcons
                key={star.key}
                name={star.name}
                size={24}
                color="#f1a10a"
              />
            ))}
          </Stars>

          <Article>{post.article}</Article>
        </Description>
      </Container>
    </Wrapper>
  );
};

export default Details;

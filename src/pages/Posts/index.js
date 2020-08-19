import React, { useState, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';

import {
  Wrapper,
  Container,
  Header,
  RouteName,
  List,
  ListPostsWhite,
  ListPostsGrey,
  ImageCover,
  Description,
  Author,
  Title,
  Article,
  Stars,
} from './styles';

import Icon from '../../components/Icon';

import api from '../../services/api';

import { MaterialIcons } from '@expo/vector-icons';

const Posts = () => {
  const navigation = useNavigation();

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  const starsWhite = [
    {
      key: Math.random(String()),
      name: 'star',
    },
    {
      key: Math.random(String()),
      name: 'star',
    },
    {
      key: Math.random(String()),
      name: 'star',
    },
    {
      key: Math.random(String()),
      name: 'star-border',
    },
    {
      key: Math.random(String()),
      name: 'star-border',
    },
  ];

  const starsGrey = [
    {
      key: Math.random(String()),
      name: 'star',
    },
    {
      key: Math.random(String()),
      name: 'star',
    },
    {
      key: Math.random(String()),
      name: 'star',
    },
    {
      key: Math.random(String()),
      name: 'star',
    },
    {
      key: Math.random(String()),
      name: 'star-border',
    },
  ];

  async function loadPosts() {
    const response = await api.get('/articles', {
      params: {
        _page: page,
        _limit: 1,
      },
    });

    setPosts([...posts, ...response.data]);
    setPage(page + 1);
  }

  useEffect(() => {
    loadPosts();
  }, []);

  handleNavigateToDetails = (post, stars) => {
    navigation.navigate('Details', { post, stars });
  };

  return (
    <Wrapper>
      <Container>
        <Header>
          <RouteName>Posts</RouteName>

          <Icon name="add" color="#F2994A" />
        </Header>
        <List
          data={posts}
          keyExtractor={(post) => String(post.id)}
          showsVerticalScrollIndicator={true}
          onEndReached={loadPosts}
          onEndReachedThreshold={0.1}
          renderItem={({ item: post, index }) => (
            <>
              {index % 2 == 0 && (
                <ListPostsWhite
                  onPress={() => handleNavigateToDetails(post, starsWhite)}
                >
                  <ImageCover
                    source={{
                      uri: post.imageUrl,
                    }}
                  />

                  <Description>
                    <Author>{post.author}</Author>
                    <Title>{post.title}</Title>
                    <Article>{post.article.replace('<p>', '')}</Article>

                    <Stars>
                      {starsWhite.map((star) => (
                        <MaterialIcons
                          key={star.key}
                          name={star.name}
                          size={24}
                          color="#f1a10a"
                        />
                      ))}
                    </Stars>
                  </Description>
                </ListPostsWhite>
              )}

              {index % 2 != 0 && (
                <ListPostsGrey
                  onPress={() => handleNavigateToDetails(post, starsGrey)}
                >
                  <Description>
                    <Author>{post.author}</Author>
                    <Title>{post.title}</Title>
                    <Article>{post.article.replace('<p>', '')}</Article>

                    <Stars>
                      {starsGrey.map((star) => (
                        <MaterialIcons
                          key={star.key}
                          name={star.name}
                          size={24}
                          color="#f1a10a"
                        />
                      ))}
                    </Stars>
                  </Description>

                  <ImageCover
                    source={{
                      uri: post.imageUrl,
                    }}
                  />
                </ListPostsGrey>
              )}
            </>
          )}
        />
      </Container>
    </Wrapper>
  );
};

export default Posts;

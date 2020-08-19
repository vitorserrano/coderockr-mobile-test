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
} from './styles';

import Icon from '../../components/Icon';

import api from '../../services/api';

import { MaterialIcons } from '@expo/vector-icons';

const Posts = () => {
  const navigation = useNavigation();

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

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

  handleNavigateToDetails = (post) => {
    navigation.navigate('Details', { post });
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
                <ListPostsWhite onPress={() => handleNavigateToDetails(post)}>
                  <ImageCover
                    source={{
                      uri: post.imageUrl,
                    }}
                  />

                  <Description>
                    <Author>{post.author}</Author>
                    <Title>{post.title}</Title>

                    <Article>{post.article.replace('<p>', '')}</Article>

                    <MaterialIcons name="star" size={24} color="black" />
                  </Description>
                </ListPostsWhite>
              )}

              {index % 2 != 0 && (
                <ListPostsGrey onPress={() => handleNavigateToDetails(post)}>
                  <Description>
                    <Author>{post.author}</Author>
                    <Title>{post.title}</Title>

                    <Article>{post.article.replace('<p>', '')}</Article>
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

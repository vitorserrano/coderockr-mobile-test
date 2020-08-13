import React, { useState, useEffect } from 'react';

import { Text } from 'react-native';

import { Wrapper, Container, Header, Title, ListPosts } from './styles';

import Icon from '../../components/Icon';

import api from '../../services/api';

const Posts = () => {
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

  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>Posts</Title>
          <Icon name="add" color="#F2994A" />
        </Header>

        <ListPosts
          data={posts}
          style={{
            marginTop: 20,
          }}
          keyExtractor={(post) => String(post.id)}
          showsVerticalScrollIndicator={true}
          onEndReached={loadPosts}
          onEndReachedThreshold={0.1}
          renderItem={({ item: post }) => <Text>{post.author}</Text>}
        />
      </Container>
    </Wrapper>
  );
};

export default Posts;

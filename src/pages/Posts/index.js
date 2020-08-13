import React from 'react';

import { Wrapper, Container, Header, Title } from './styles';

import Icon from '../../components/Icon';

const Posts = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>Posts</Title>
          <Icon name="add" color="#F2994A" />
        </Header>
      </Container>
    </Wrapper>
  );
};

export default Posts;

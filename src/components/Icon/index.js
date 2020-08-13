import React from 'react';

import { Container } from './styles';

import { MaterialIcons } from '@expo/vector-icons';

const Icon = (props) => {
  return (
    <Container>
      <MaterialIcons name={props.name} size={28} color="#F2994A" />
    </Container>
  );
};

export default Icon;

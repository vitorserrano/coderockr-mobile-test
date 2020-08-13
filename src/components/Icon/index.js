import React from 'react';

import { Container } from './styles';

import { MaterialIcons } from '@expo/vector-icons';

const Icon = (props) => {
  return (
    <Container borderColor={props.color}>
      <MaterialIcons name={props.name} size={28} color={props.color} />
    </Container>
  );
};

export default Icon;

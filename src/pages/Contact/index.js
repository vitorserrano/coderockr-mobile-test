import React, { useState, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';

import {
  ModalWrapper,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalButton,
  ModalForm,
  ModalLabel,
  ModalInput,
  ModalTextArea,
  ModalButtonSubmit,
  ModalButtonSubmitTitle,
} from './styles';

import { MaterialIcons } from '@expo/vector-icons';

const Contact = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(true);

  const handleNavigateToPosts = () => {
    setModalVisible(false);

    navigation.navigate('Posts');
  };

  useEffect(() => {
    setModalVisible(true);
  }, []);

  return (
    <ModalWrapper>
      <ModalHeader>
        <ModalTitle>Contact</ModalTitle>

        <ModalButton onPress={() => handleNavigateToPosts()}>
          <MaterialIcons name="close" size={28} color="#f1a10a" />
        </ModalButton>
      </ModalHeader>

      <ModalContainer>
        <ModalForm>
          <ModalLabel>Name</ModalLabel>
          <ModalInput placeholder="Fill your name" />

          <ModalLabel>E-mail</ModalLabel>
          <ModalInput placeholder="Fill valid e-mail" />

          <ModalLabel>Phone</ModalLabel>
          <ModalInput placeholder="Fill your phone" />

          <ModalLabel>Message</ModalLabel>
          <ModalTextArea />

          <ModalButtonSubmit>
            <MaterialIcons name="send" size={24} color="#ffff" />
            <ModalButtonSubmitTitle>Submit</ModalButtonSubmitTitle>
          </ModalButtonSubmit>
        </ModalForm>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default Contact;

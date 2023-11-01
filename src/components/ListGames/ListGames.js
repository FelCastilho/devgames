import React, {useState} from 'react';
import { Container, Banner, ContainerText, Name, Rating, Card } from './styles';
import { AntDesign } from '@expo/vector-icons';
import { Modal } from 'react-native';
import ModalComponent from '../ModalComponent/ModalComponent';

import api from '../../services/api';

export default function ListGames({data}) {

  const [ url, setUrl ] = useState(data.background_image);
  const [ modalVisible, setModalVisible ] = useState(false);

 return (

   <Container>

    <Card onPress={() => setModalVisible(true)}>

      <Banner
      source={{uri: url}}
      />
      
      <ContainerText>

        <Name>{data.name}</Name>
        <Rating>
        <AntDesign name="star" size={20} color="#FABB1E"/>
        {data.rating}/10
        </Rating>

      </ContainerText>

    </Card>

    <Modal animationType="slide" visible={modalVisible} transparent={false}>
      <ModalComponent close = {() => setModalVisible(false)} content={data}/>
    </Modal>

   </Container>
  );
}
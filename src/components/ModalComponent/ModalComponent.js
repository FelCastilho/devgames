import React, {useState} from 'react';
import { Container, Card, Banner, BackButton, FavoriteButton, ShareButton, Subtitle, Rating, RatingText, ContainerInfo, Name } from './styles';

import { Modal } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function ModalComponent(props){

    const [ url, setUrl ] = useState(props.content.background_image);

 return (
   <Container>

    <Card>

    <BackButton onPress={props.close}>
        <AntDesign name="arrowleft" size={24} color="white"/>
    </BackButton>

    <FavoriteButton>
        <MaterialIcons name="favorite-outline" size={24} color="white"/>
    </FavoriteButton>
    
    <Banner source={{uri: url}}/>
          
    </Card>

    <ShareButton>
        <Entypo name="link" size={24} color="white"/>
    </ShareButton>

    <ContainerInfo>

        <Rating>
            <AntDesign name="star" size={18} color="#FABB1E" />
            <RatingText>{props.content.rating}/10</RatingText>
        </Rating>

        <Name>{props.content.name}</Name>

        <Subtitle>Genres</Subtitle>
    </ContainerInfo>

   </Container>
  );
}
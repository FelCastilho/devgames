import React, {useState, } from 'react';
import { Container, Card, Banner, BackButton, FavoriteButton, ShareButton, Subtitle, Rating, RatingText, ContainerInfo, Name } from './styles';

import { useFocusEffect } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function GamePage(){

 return (
   <Container>

    <Card>

    <BackButton>
        <AntDesign name="arrowleft" size={24} color="white"/>
    </BackButton>

    <FavoriteButton>
        <MaterialIcons name="favorite-outline" size={24} color="white"/>
    </FavoriteButton>
    
    <Banner/>
          
    </Card>

    <ShareButton>
        <Entypo name="link" size={24} color="white"/>
    </ShareButton>

    <ContainerInfo>

        <Rating>
            <AntDesign name="star" size={18} color="#FABB1E" />
            <RatingText>/10</RatingText>
        </Rating>

        <Name>{name}</Name>

        <Subtitle>Genres</Subtitle>
    </ContainerInfo>

   </Container>
  );
}
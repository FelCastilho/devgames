import React, {useEffect, useState, } from 'react';
import { Container, Card, Banner, BackButton, FavoriteButton, ShareButton, Subtitle, Rating, RatingText, ContainerInfo, Name } from './styles';

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

export default function GamePage(props){

    const navigation = useNavigation()

    const [ content, setContent ] = useState(props.route.params?.content);
    const [ rating , setRating ] = useState(props.route.params?.content.rating.toFixed(1));
    const [url, setUrl] = useState();

    const [data, setData] = useState([]);
    
    //Trocar por useLayoutEffect

    async function fetchGames(){

        const response = await api.get(`api/games/${props.route.params?.content.slug}?key=96ffa22939174620840e464e6200055c`);

        setData(response.data);
    
    }

    fetchGames();
    
 return (
   <Container>

    <Card>

        <BackButton onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="white"/>
        </BackButton>

        <FavoriteButton  onPress={() => console.log(data)}>
            <MaterialIcons name="favorite-outline" size={24} color="white"/>
        </FavoriteButton>
        
        <Banner
        source={{uri: url}}
        />
          
    </Card>

    <ShareButton>
        <Entypo name="link" size={24} color="white"/>
    </ShareButton>

    <ContainerInfo>

        <Rating>
            <AntDesign name="star" size={18} color="#FABB1E" />
            <RatingText>{rating}/10</RatingText>
        </Rating>

        <Name>{data.name}</Name>

        <Subtitle>{data.description}</Subtitle>
    </ContainerInfo>

   </Container>
  );
}
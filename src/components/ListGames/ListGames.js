import React, {useState} from 'react';
import { Container, Banner, ContainerText, Name, Rating, Card } from './styles';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function ListGames({data}) {

  const [ url, setUrl ] = useState(data.background_image);
  const [ rating, setRating ] = useState(data.rating.toFixed(1));

  const navigator = useNavigation()

 return (

   <Container>

    <Card onPress={() => navigator.navigate('GamePage', {content: data})}>

      <Banner
      source={{uri: url}}
      />
      
      <ContainerText>

        <Name>{data.name}</Name>
        <Rating>
        <AntDesign name="star" size={20} color="#FABB1E"/>
        {rating}/5
        </Rating>

      </ContainerText>

    </Card>

   </Container>
  );
}
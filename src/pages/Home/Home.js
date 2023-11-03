import React, { useState, useEffect } from 'react';
import { Container, List, Title, Header, ButtonIcon, ContainerInput, Input, SubTitulo, ContainerList, ButtonSearch } from './styles';

import { Text } from 'react-native';

import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import api from "../../services/api";
import ListGames from '../../components/ListGames/ListGames';

function Home() {

  const [games, setGames] = useState([]);

  useEffect(() => {

    async function loadGames(){

      const response = await api.get('api/games?page_size=10&key=96ffa22939174620840e464e6200055c');

      //const genresResponse = await api.get('api/genres?key=96ffa22939174620840e464e6200055c')

      setGames(response.data.results);
      //setGenres(genresResponse.data.results)

    }

    loadGames()

  }, [])

 return (
   <Container>
      
    <Header>

      <Title>Dev
          <Text style={{color: '#FF455F', fontWeight: 'bold'}}>Games</Text>
      </Title>

      <ButtonIcon>
        <Fontisto name="favorite" size={24} color="#fff"/>
      </ButtonIcon>

    </Header>

    <ContainerInput>
      <Input
      placeholder='Looking for a game?'
      placeholderTextColor='#F5F5F5' 
      />

      <ButtonSearch>
        <AntDesign name="search1" size={35} color="#FF455F" style={{padding: 5}}/>
      </ButtonSearch>
      
    </ContainerInput>

    <SubTitulo>Trending Games</SubTitulo>

    <ContainerList>

      <List
      data={games}
      renderItem={({item}) => (<ListGames data={item}/>)}
      keyExtractor={(item) => String(item.id)}
      showsVerticalScrollIndicator={false}
      />

    </ContainerList>
    
   </Container>
  );
}

export default Home;
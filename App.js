import React, {useState, useEffect} from "react";
import { View, FlatList } from "react-native";

import api from "./src/services/api";

export default function App(){

  const [games, setGames] = useState([]);

  useEffect(() => {

    async function loadGames(){

      const response = await api.get('api/games?page_size=5&key=96ffa22939174620840e464e6200055c');

      setGames(response.data);

    }

    loadGames()

  }, [])

  return(
    <View>
      <FlatList
      data={games}
      renderItem={({item}) => (<ListGames data={item}/>)}
      />
    </View>
  )
}
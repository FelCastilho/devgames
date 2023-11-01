import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #050B18;
`;

export const Header = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    margin-right: 10px;
    margin-left: 10px;
`;

export const ContainerInput = styled.View`
    justify-content: space-around;
    flex-direction: row;
    margin-top: 20px;
`;

export const Input = styled.TextInput`
    width: 85%;
    padding: 10px;
    border-radius: 20px;
    background-color: #1F2430;
    color: #F5F5F5;
`;

export const ButtonIcon = styled.TouchableOpacity`
    background-color: #1F2430;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 33px;
`;

export const Title = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: white;
`;

export const SubTitulo = styled.Text`
    font-weight: bold;
    font-size: 20px;
    color: #ffff;
    margin: 20px 10px 10px 10px;
`;

export const GenreList = styled.FlatList`
    width: 95%;
`;

export const ContainerList = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const List = styled.FlatList`
    width: 95%;
`;
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #050B18;
`;

export const Card = styled.View`
    height: 200px;
    margin-bottom: 15px;
    z-index: 2;
`;

export const BackButton = styled.TouchableOpacity`
    background-color: #050B18;
    padding: 10px;
    border-radius: 30px;
    position: absolute;
    z-index: 9;
    top: 10px;
    left: 20px;
`;

export const FavoriteButton = styled.TouchableOpacity`
    background-color: #050B18;
    padding: 10px;
    border-radius: 100px;
    z-index: 9;
    position: absolute;
    top: 10px;
    right: 20px;
`;

export const ShareButton = styled.TouchableOpacity`
    background-color: #E72F49;
    padding: 10px;
    border-radius: 100px;
    z-index: 9;
    position: absolute;
    top: 180px;
    right: 20px;
`;

export const Banner = styled.Image`
    height: 200px;
`;

export const ContainerInfo = styled.View`
    flex: 1;
    margin: 10px;
`;

export const Name = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #ffff;
    margin-bottom: 40px;
`;

export const Rating = styled.View`
    flex-direction: row;
    gap: 10px;
`;

export const RatingText = styled.Text`
    font-size: 15px;
    color: #ffff;
`;

export const Subtitle = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #ffff;
`;


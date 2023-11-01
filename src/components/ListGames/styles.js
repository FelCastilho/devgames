import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const Card = styled.TouchableOpacity`
    height: 200px;
    margin-bottom: 15px;
    z-index: 2;
`;

export const Banner = styled.Image`
    height: 200px;
    border-radius: 10px;
`;

export const ContainerText = styled.View`
   align-items: flex-start;
   margin-top: -60px;
   margin-left: 10px;
   height: 100%;
   z-index: 9;
`;

export const Name = styled.Text`
    color: #ffff;
    font-weight: bold;
    font-size: 18px;
`;

export const Rating = styled.Text`
    color: #ffff;
    font-size: 18px;
`;
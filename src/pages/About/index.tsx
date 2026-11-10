import React from 'react';
import {View, Text} from 'react-native';
import App from '../../../App';

export default function AboutScreen(){
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', gap: 8}}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}> Sobre o App </Text>
        <Text>Feito por: Tuany - Turma DS</Text>
        </View>
    );
}
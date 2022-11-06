import { StatusBar } from 'expo-status-bar';
import {  Text, View, ScrollView, TextInput, Button, TouchableOpacity } from 'react-native';
import  Styles from './Styles';
import Radiobutton from './components/Radiobutton';
import Dropdown from './components/Dropdown';
import React,{ useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  
  const [checked, setChecked] = useState(-1); 
  const [weight, setWeight] = useState(-1);
  const [lenght, setLenght] = useState(0);
  const [result, setResult] = useState(0);
  const [text,setText] = useState('');;
  
  const calculate = () => {
    const forbidden = /[+\-=\[\]{};'A-Z`!@#:"\\|<>\/?~a-z$%^&*()_]/; 
    if(weight.length == 0 || forbidden.test(weight) || weight.length < 1) { 
      alert('Painoa ei syötetty oikein!')
    } else if (weight == 0) {  
        alert('Syötä paino ja pituus oikein, jotta ohjelma toimii!')
    }
    else if (lenght == 0) {  
      alert('Syötä paino ja pituus oikein, jotta ohjelma toimii!')
  } else {
        let devider = lenght/100;
          let result = weight/(devider*devider); 
        if(result > 0) {
          setResult(result.toFixed(2)); 
        } else { 
          setResult(0.00); 
        }
    }
  };

  const alert = () => {
    
    if(result >= 17.01 && result <= 24.99){
      setText('Tuloksesi tarkoittaa sitä, että olet normaalipainoinen.')
    }
    else if (result >= 25 && result <= 29.99){
      setText('Tuloksesi 25–30 kg/m2 tarkoittaa sitä, että olet lievästi lihava (ylipaino).')
    }
    else if (result >= 30 && result <= 34.99){
      setText('Tuloksesi 30–35 kg/m2 tarkoittaa sitä, että olet merkittävästi lihava.')
    }
    else if (result >= 35 && result <= 40){
      setText('Tuloksesi 30–35 kg/m2 tarkoittaa sitä, että olet vaikeasti lihava.')
    }
    else if (result > 40){
      setText('Tuloksesi yli 40 kg/m2 tarkoittaa sitä, että olet sairaalloisen lihava.')
    }
    else if (result <= 17){
      setText('Tuloksesi 17 kg/m2 tai alle tarkoittaa sitä, että olet vaarallisesti aliravittu')
    }
    
  }

  return (
    <View style={Styles.container}>
      <ScrollView>
        <Text style={Styles.title}>PAINOINDEKSILASKURI</Text>
        <Text style={Styles.ohje}>Syötä painosi ja pituutesi niille tarkoitettuihin kenttiin, jonka jälkeen paina "Laske" -painiketta. Jos haluat tietää, että mitä saamasi tulos tarkoittaa, niin paina "Mitä tämä tarkoittaa" -painiketta</Text> 
        <Text></Text>
        <Text style={Styles.ohje}>Tuloksesi värien tarkoitus: </Text>
        <Text style={Styles.ohje}>Vihreä: <Text style={Styles.ohjegreen}>Erinomainen</Text></Text>
        <Text style={Styles.ohje}>Keltainen: <Text style={Styles.ohjeyellow}>Hyvä</Text></Text>
        <Text style={Styles.ohje}>Oranssi: <Text style={Styles.ohjeorange}>Tyydyttävä</Text></Text>
        <Text style={Styles.ohje}>Punainen: <Text style={Styles.ohjered}>Huono</Text></Text>
        <Text></Text>
        <Text></Text>
          <Text style={Styles.secondTitle2}>Paino :</Text>
           <TextInput style={Styles.textInput} placeholder={" Syötä painosi..."} keyboardType="number-pad" value = {weight} onChangeText={ setWeight }/>
           <Text></Text>
           <Text style={Styles.secondTitle2}>Pituus :</Text>
           <TextInput style={Styles.textInput} placeholder={" Syötä pituutesi..."} keyboardType="number-pad" value = {lenght} onChangeText={ setLenght }/>
                <Text style={Styles.secondTitle2}>________________________________</Text>
                <View style = {Styles.spacing}/>   
                <Button title = {'Laske'}  onPress = {() => calculate()}/>
                <View style = {Styles.spacing}/> 
                  <View style = {Styles.resultContainer}>
                      <Text style={Styles.black}>Tulos :</Text>
                      <Text style = { [result >= 17.01 && result <= 24.99 ? Styles.green : result >= 25 && result <= 29.99 ? Styles.yellow  : result >= 30 && result <= 34.99 ? Styles.orange : Styles.red ]}>{result}</Text>
                      <Text style={Styles.black}>kg/m2</Text>
                  </View> 
                  <Button title = {'Mitä tämä tarkoittaa?'}  onPress = {() => alert()}/>
                  <Text></Text>
                      <Text style={Styles.secondTitle2}>{text}</Text>                        
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}




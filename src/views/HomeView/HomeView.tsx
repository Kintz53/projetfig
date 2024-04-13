import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
    Alert,
    Button,
    FlatList,
    Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Figurine from '../../modeles/Figurines';
import { listFig } from '../../data/ListFigurines';





function HomeView(): React.JSX.Element {
    const NameOfFig = (name:string) => {
        console.log('My name is',name);
    }
  
  const [counterID, setCounterID]= useState(0);
  const NextFig =() => {
    if (counterID === listFig.length - 1){
        setCounterID(0);
    }else{
        setCounterID(counterID+1);
        }
  }
  const PrevFig=() => {
    if (counterID === 0){
        setCounterID(listFig.length - 1);
    }else {
            setCounterID(counterID - 1);
        }  
    }
  return (
    <View> 
        <Text>The value of the counter is {counterID}</Text>
        <Button
            title="next miniature"
            onPress={() => NextFig()}
        />
      <Button
        title="previous miniature"
        onPress={() => PrevFig()}
      />
      <FigurineInfo id={listFig[counterID].id} name={listFig[counterID].name} type={listFig[counterID].type} prix={listFig[counterID].prix} src={listFig[counterID].src} Onclick={NameOfFig}/>
       
        
    </View>
   
  );
 
}

const FigurineInfo = ({id,name,type,prix,src,Onclick}: Figurine) => {
    return( 
        <View>
            <Text>This is a {type} miniature who cost {prix} euros</Text>
            <Text>That the name of the miniature : {name}</Text>
            <TouchableOpacity onPress={()=> Onclick(name)}>
            

            <Image source={src} style={styles.ImageFig}/>      
            </TouchableOpacity>
        </View>
);
}

const styles = StyleSheet.create({
    ImageFig :{
        width: 200,
        height: 300,
    },
    container : {
        justifyContent: 'center',
        alignItems: 'center',
      }
  });
export default HomeView;
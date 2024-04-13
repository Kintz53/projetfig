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
    <View style={styles.main_container}>
        <View style={styles.title_container}>
            <Text style={styles.TextTitle}> Le petit coin de la Figurine</Text> 
        </View>
      <View style={styles.figurine_container}>
            <FigurineInfo id={listFig[counterID].id} name={listFig[counterID].name} type={listFig[counterID].type} prix={listFig[counterID].prix} src={listFig[counterID].src} Onclick={NameOfFig}/>
       </View>  
       <View style={styles.button_container}>
            <Button
                title="next miniature"
                onPress={() => NextFig()}
            />
            <Button
                title="previous miniature"
                onPress={() => PrevFig()}
            />
        </View>
    </View>
   
  );
 
}

const FigurineInfo = ({id,name,type,prix,src,Onclick}: Figurine) => {
    return( 
        <>
            <Text>This is a {type} miniature who cost {prix} euros</Text>
            <Text>That the name of the miniature : {name}</Text>
            <TouchableOpacity onPress={()=> Onclick(name)}>
            

            <Image source={src} style={styles.ImageFig}/>      
            </TouchableOpacity>
        </>
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
      },
    TextTitle : { fontSize:26,
        fontWeight:'bold',
        color:'rgb(200,0,0)',

      },
    title_container : {
        flex:1,
        alignItems:'center'
        },
    figurine_container :{
        flex:4,
        justifyContent :'center',
        alignItems:'center'    },
    button_container :{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    main_container:{
        flex:1,

    },
  });
export default HomeView;
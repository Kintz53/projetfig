import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import * as communStyle from '../../utils/communStyle'
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
import { useNavigation } from '@react-navigation/native';





function HomeView(props : any): React.JSX.Element {
    const ViewFigurineDetails = (Id : number, nameFigurine : any, srcFigurine: any,) => {
        props.navigation.navigate("Home2",
        {
            id : Id,
            name:nameFigurine,
            src : srcFigurine
         }
    )};
    const NameOfFig = (name:string) => {
        console.log('My name is',name);
    }
    const navigation = useNavigation();
    console.log('Props : ', props);

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
            <FigurineInfo id={listFig[counterID].id} name={listFig[counterID].name} type={listFig[counterID].type} prix={listFig[counterID].prix} src={listFig[counterID].src} Onclick={ViewFigurineDetails}/>
       </View>  
       <View style={styles.button_container}>
         <TouchableOpacity style={styles.buttonNextPrevious}onPress={()=> PrevFig()}>
            <Image source={require('../../assets/Images/icons/fleche_gauche.png')} style={styles.iconbutton} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNextPrevious} onPress={()=> NextFig()}>
            <Image source={require('../../assets/Images/icons/fleche_droite.png')}style={styles.iconbutton} />
        </TouchableOpacity>
        
        </View>
    </View>
   
  );
 
}

const FigurineInfo = ({id,name,type,prix,src,Onclick}: Figurine) => {
    return( 
        <>
            <Text>This is a {type} miniature who cost {prix} euros</Text>
            <Text>That the name of the miniature : {name}</Text>
            <TouchableOpacity onPress={()=> Onclick(id)}>
            

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
    iconbutton:{
        width:60,
        height:60,
        alignItems:'center',
    },
    // @ts-ignore
    buttonNextPrevious:{
        ...communStyle.elevationButton,
        ...communStyle.roundedButton
    },
  });
export default HomeView;
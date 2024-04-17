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





function FigurineListView(props : any): React.JSX.Element {
    const ViewFigurineDetails = (Id : number, nameFigurine : any, srcFigurine: any,) => {
        props.navigation.navigate("Home2",
        {
            id : Id,
            name:nameFigurine,
            src : srcFigurine
         }
    )};
    
  return (
    <View>
    <FlatList
        data={listFig}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <FigurineItem Figurine={item} Onclick={ViewFigurineDetails} />}

      />
    </View>
   
  );
 
};

const FigurineItem = ( props : any) => {
    
    const navigation = useNavigation();
    const {Figurine , Onclick}= props;
    return ( 
        <View>
            <TouchableOpacity onPress={()=> Onclick(Figurine.id,Figurine.name,Figurine.src)} >
            <Image source={Figurine.src } style={styles.FigurineImage}/>
            <Text> 
                Name : {Figurine.name}
            </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    FigurineImage :{
        width:50,
        height:100,
    },
    ImageFig :{
        width: 300,
        height: 500,
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
 export default FigurineListView;
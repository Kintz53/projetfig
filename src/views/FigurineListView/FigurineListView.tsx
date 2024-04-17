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
    const ViewFigurineDetails = (Id : number, nameFigurine : any, srcFigurine: any, typeFigurine : any) => {
        props.navigation.navigate("Home2",
        {
            id : Id,
            name:nameFigurine,
            src : srcFigurine,
            Type : typeFigurine
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
            <TouchableOpacity style={styles.main_container} onPress={()=> Onclick(Figurine.id,Figurine.name,Figurine.src)} >
            <Image source={Figurine.src } style={styles.FigurineImage}/>
            <View style={styles.content_container}>
                <View style={styles.header_container}>
                    <Text style={styles.title_text}> 
                        {Figurine.name}
                    </Text>
                </View>
                <View>
                    <Text style={styles.type_text}>
                            Type : {Figurine.type}
                    </Text>
                </View>
            </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    FigurineImage :{
        width:60,
        height:80,
        margin : 5,
        borderRadius : 30,
        backgroundColor : '#00ffff'
    },
    details_container : {
        marginRight : 10,
        marginLeft : 10,
        borderRadius: 10,
        ...communStyle.elevationButton
    },
    main_container :{
        flexDirection :'row'
    },
    divider_figurine : {
        height : 1,
        width : '80%',
        backgroundColor : '#CED0CE',
        marginLeft:'14%'
    },
    content_container :{
        flex : 1,
        margin : 5,
        borderRadius:10,
        backgroundColor : '#00ffff',
    },
    header_container : {
        flex : 3,
        flexDirection :'row'
    },
    title_text : {
        fontWeight :'bold',
        fontSize : 20,
        flex : 1,
    },
    type_text :{
        fontWeight :'bold',
        fontStyle :'italic',
        fontSize:12,
        color : "#666666",
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
    
    // @ts-ignore
    buttonNextPrevious:{
        ...communStyle.elevationButton,
        ...communStyle.roundedButton
    },
  });
 export default FigurineListView;
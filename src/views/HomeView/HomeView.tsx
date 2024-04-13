import React from 'react';
import type {PropsWithChildren} from 'react';
import {
    FlatList,
    Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Figurine from '../../modeles/Figurines';
import { listFig } from '../../data/ListFigurines';
function HomeView(): React.JSX.Element {
  const id=1;
  const name = 'spartan with drake';
  const type = 'Titan';
  const prix : number=90;
  console.log('Name this a test:',name);
  return (
    <View> 
        <FlatList
            data={listFig}
            keyExtractor={item =>  item.id.toString()}
            renderItem={({item}) => <FigurineInfo id={item.id} name={item.name} type={item.type} prix={item.prix} src={item.src}/>}
        />
        
    </View>
   
  );
 
}

const FigurineInfo = ({name,type,prix,src}: Figurine) => {
    return( 
        <View>
            <Text>This is a {type} miniature who cost {prix} euros</Text>
            <Text>That the name of the miniature : {name}</Text>
            <Image source={src} style={styles.ImageFig}/>
        </View>
);
}

const styles = StyleSheet.create({
    ImageFig :{
        width: 300,
        height: 400,
    },
    container : {
        justifyContent: 'center',
        alignItems: 'center',
      }
  });
export default HomeView;
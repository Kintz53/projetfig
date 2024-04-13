import React from 'react';
import type {PropsWithChildren} from 'react';
import {
    Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
type FigurineInfoType ={
    name: string;
    type : string;
    prix : number;
    src : any;

}
function HomeView(): React.JSX.Element {
  
  const name = 'spartan with drake';
  const type = 'Titan';
  const prix : number=90;
  return (
    <View>
        <FigurineInfo name={name} type={type} prix={prix} src={require('../../assets/Images/SpartanDrake.jpg')}/>
        <FigurineInfo name={'Ork'} type={'heavy infantry'} prix={'5'} src={require('../../assets/Images/ork.jpg')}/>
    </View>
   
  );
 
}

const FigurineInfo = ({name,type,prix,src}: FigurineInfoType) => {
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
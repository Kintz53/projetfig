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

function HomeView(): React.JSX.Element {
  
  const name = 'spartan with drake';
  const type = 'Titan';
  const prix : number=90;return (
  <View>
        <FigurineInfo name={name} type={type} prix={prix}/>,
  </View>
   
  );
 
};

const FigurineInfo =(props: any) => {
<View>
    <Text>
        This is a {props.type} miniature who cost {props.prix} euros . 
    </Text>
    <View style={styles.container}>
        <Text>
        
            That the name of the miniature :{props.name}
            <Image source={require('../../assets/Images/SpartanDrake.jpg')} style={styles.ImageFig}/>
        
        </Text>
    </View>
</View>

}
 const styles = StyleSheet.create({
    ImageFig :{
        width: 200,
        height: 500,
    },
    container : {
        justifyContent: 'center',
        alignItems: 'center',
      }
  });
export default HomeView;
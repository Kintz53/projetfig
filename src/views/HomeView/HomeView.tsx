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
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }
  const name = 'spartan with drake';
  const type = 'Titan';
  const prix : number=90;
  return (<View>
    <Text>
        This is a {type} miniature who cost {prix} euros. 
    </Text>
    <Text>
        That the name of the miniature :{name}
        <Image source={require('../../assets/Images/SpartanDrake.jpg')} style={styles.ImageFig}/>
    </Text>
  </View>
   
  );
 
}
 const styles = StyleSheet.create({
    ImageFig :{
        width: 600,
        height: 200,
    }
  });
export default HomeView;
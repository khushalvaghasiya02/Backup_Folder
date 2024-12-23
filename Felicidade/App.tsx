import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import 'react-native-gesture-handler';
import RootStack from './src/components/RootNavigation';
import { enableScreens } from 'react-native-screens';

function App() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        animated={true}
        backgroundColor='#ffffff'
        barStyle='dark-content'
      />
      <RootStack />
    </SafeAreaView>
  );
}

export default App;
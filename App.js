import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screens } from './src/screens/index';

const Stack = createNativeStackNavigator();

export default function App() {
  return (  
      <NavigationContainer>
        <Stack.Navigator>
        
          {screens.map((r) => <Stack.Screen name={r.name} key={r.name} component={r.component}></Stack.Screen>)}
    
        </Stack.Navigator>
      </NavigationContainer>
  );
}

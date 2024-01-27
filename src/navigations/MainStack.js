import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PRIMARY, WHITE } from '../colors';
import MainScreen from '../screens/MainScreen';
import HeaderLeftButton from '../components/HeaderLeftButton';
import HeaderRightButton from '../components/HeaderRightButton';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerTitleAlign: 'center',
        headerTintColor: PRIMARY.DEFAULT,
        headerTitleStyle: { fontWeight: '700' },

        headerBackTitleVisible: false,
        headerLeft: HeaderLeftButton,
      }}
    >
      <Stack.Screen
        name={'List'}
        component={MainScreen}
        options={{ title: '메인 페이지', headerRight: HeaderRightButton }}
      />

      <Stack.Screen
        name={'Settings'}
        component={SettingsScreen}
        options={{ title: '설정' }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;

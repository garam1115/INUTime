import { NavigationContainer } from '@react-navigation/native';
import { useUserContext } from '../contexts/UserContext';
import MainStack from './MainStack';
import AuthStack from './AuthStack';

const Navigation = () => {
  const { user } = useUserContext();
  return (
    <NavigationContainer>
      {user ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;

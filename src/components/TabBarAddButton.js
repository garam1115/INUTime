import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, View } from 'react-native';
import { MainRoutes } from '../navigations/routes';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { PRIMARY } from '../colors';

const TabBarAddButton = () => {
  const navigaiton = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => navigaiton.navigate(MainRoutes.SELECT_PHOTOS)}
      >
        <MaterialCommunityIcons name="plus" size={25} color="white" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: PRIMARY.DEFAULT,
    borderRadius: 999,
    padding: 4,
  },
});

export default TabBarAddButton;

import { Image, StyleSheet, Text, View } from 'react-native';
import Button, { ButtonTypes } from '../components/Button';
import { useUserContext } from '../contexts/UserContext';

const SettingsScreen = () => {
  const { setUser } = useUserContext();
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require('../../assets/inu-icon.png')}
          style={[styles.Image, { marginRight: '100px' }]}
          resizeMode={'cover'}
        />
        <View style={styles.myAct}>
          <Text style={styles.title}>이름</Text>
          <Text style={styles.title}>닉네임</Text>
          <Text style={styles.info}>성별</Text>
          <Text style={styles.info}>학번</Text>
          <Text style={styles.info}>학과</Text>
        </View>
        <Button title={'MODIFY'} onPress={() => {}}></Button>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="SIGNOUT"
          onPress={() => setUser(null)}
          buttonType={ButtonTypes.DANGER}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flex: 2,
    width: '100%',
    paddingHorizontal: 20,
  },
  Image: {
    marginRight: '10px',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
  },
  info: {
    fontSize: 15,
    fontWeight: '200',
  },
});

export default SettingsScreen;

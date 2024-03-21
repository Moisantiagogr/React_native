import { StyleSheet, Text, View } from 'react-native'
import { getAuth, updateProfile } from "firebase/auth";
import React, { useState, useEffect } from 'react'
import { signOut } from 'firebase/auth';
import { Button, Avatar } from '@rneui/base';
import PhotoProfile from '../components/PhotoProfile';
import ActionProfile from '../../../../auth/account/adapters/components/ActionProfile'
export default function Profile(props) {
  const { navigation } = props;
  const auth = getAuth();

  const user = auth.currentUser;
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    if (user !== null) {
      user.providerData.forEach((profile) => {
        setUserProfile(profile);
      });
    }
  }, []);


  const logout = () => {
    signOut(auth).then(() => {
      navigation.navigate('UserLogged');
    }).catch((error) => {
      console.error(error);
    });
  }
  return (
    <View style={styles.container}>
      {
        userProfile && <PhotoProfile infoUser={userProfile} />
      }
      {userProfile && <ActionProfile infoUser={userProfile} />}



      <Button title="Cerrar sesión" onPress={logout}
        buttonStyle={{ backgroundColor: '#ef524a' }}
      />


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'fff',
    padding: 16
  },

  colum: {
    flexDirection: 'column',
    marginLeft: 16
  }
})    
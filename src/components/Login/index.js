import React, {useState,useEffect, useRef} from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import firebase from '../../services/firebaseConnection';

export default function Login({changeStatus}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('Login');
  const inputRef = useRef(null);

  function handleLogin() {
    if (type === 'Login') {
      const user = firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
        changeStatus(user.user.uid)
        })
        .catch((err) => {
          console.log(err);
          alert('Ops, Something whent wrong!')
          return;
      })
    } else {
      const user = firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        changeStatus(user.user.uid)
      })
      .catch((err) => {
        console.log(err);
        alert('Ops, Something whent wrong!')
        return;
    })
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Friendly tasks</Text>
      </View>
      <TextInput
        placeholder="Your email"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="****"
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity
        style={[styles.handleLogin, {backgroundColor: type === 'Login' ? '#3ea6f2' : '#141414'}]}
        onPress={handleLogin}
      >
        <Text style={styles.loginText}>
          {type === 'Login' ? 'Login' : 'Register'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=> setType(type => type === 'Login' ? 'Register' : 'Login')}
      >
        <Text style={{ textAlign: 'center', marginTop: 10 }}>
          {type === 'Login' ? 'Sign Up' : 'Sign In'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 10,
    backgroundColor: '#f2f6fc'
  },
  header: {
    marginHorizontal: 10,
    marginBottom: 15,
    padding: 20
  },
  textHeader: {
    textAlign: 'center',
    fontSize: 30,
    color: '#3ea6f5',
    fontWeight: '700'
  },
  input: {
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 4,
    height: 45,
    padding: 10,
    borderWidth: 1,
    borderColor: '#141414'
  },
  handleLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    marginTop: 10
  },
  loginText: {
    color: '#FFF',
    fontSize: 17,
  }
})

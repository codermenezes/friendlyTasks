import React, {useState, useEffect, useRef} from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard
} from 'react-native';

import Login from './src/components/Login';
import TaskList from './src/components/TaskList';
import firebase from './src/services/firebaseConnection';

export default function App() {
  const [user, setUser] = useState(null);
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null);
  const [key, setKey] = useState('');

  useEffect(() => {
    function getUser() {
      if (!user) {
        return;
      }
      firebase.database().ref('tasks').child(user).once('value', (snapshot) => {
        setTasks([]);
        snapshot?.forEach((chilItem) => {
          let data = {
            key: chilItem.key,
            name: chilItem.val().name
          }
          setTasks(oldTasks => [...oldTasks, data])
        })
      })
    }
    getUser();
  },[user])

  function handleAdd() {
    if (newTask === '') {
      return;
    }

    if (key !== '') {
      firebase.database().ref('tasks').child(user).child(key).update({
        name: newTask
      })
        .then(() => {
          console.log('updated task.')
          const taskIndex = tasks.findIndex((item) => item.key === key)
          const taskClone = tasks;
          taskClone[taskIndex].name = newTask
          setTasks([...taskClone])
        })
      Keyboard.dismiss();
      setNewTask('');
      setKey('');
      return;
    }

    let tasksToDb = firebase.database().ref('tasks').child(user);
    let keyUid = tasksToDb.push().key;

    tasksToDb.child(keyUid).set({
      name: newTask
    })
      .then(() => {
        const data = {
          key: keyUid,
          name: newTask
        };
        setTasks(oldTasks => [...oldTasks, data])
      })
    Keyboard.dismiss();
    setNewTask('');
  }


  function handleDelete(key) {
    firebase.database().ref('tasks').child(user).child(key).remove()
      .then(() => {
        const findTasks = tasks.filter(item => item.key !== key)
        setTasks(findTasks)
    })
  }

  function hendleEdit(data) {
    setKey(data.key)
    setNewTask(data.name)
    inputRef.current.focus();
  }

  if (!user) {
    return <Login changeStatus={ (user)=>setUser(user)}/>
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Friendly tasks</Text>
      </View>
      <View style={styles.task}>
        <TextInput
          style={styles.input}
          placeholder="News friendly task..."
          onChangeText={(text) => setNewTask(text)}
          value={newTask}
          ref={inputRef}
        />
        <TouchableOpacity
          style={styles.buttonAdd}
          onPress={handleAdd}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={item => item.key}
        renderItem={({ item })=>(
          <TaskList
            data={item}
            deleteItem={handleDelete}
            editItem={hendleEdit}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 10
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
  task: {
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#141414',
    height: 45,
  },
  buttonAdd: {
    backgroundColor: '#141414',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    paddingHorizontal: 14,
  borderRadius: 4
  },
  buttonText: {
    color: '#FFF',
    fontSize: 22
  }
})

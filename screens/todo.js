import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';


import Note from './note';


export default class Todo extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        noteArray: [],
        noteText: '',
      };
    }


    
  addNote() {

    if(this.state.noteText) {
      var d = new Date();
      this.state.noteArray.push({
        'date': d.getFullYear() +
        "/" + (d.getMonth() + 1) +
        "/" + d.getDate(),
        'note': this.state.noteText
      });
      this.setState({ noteArray: this.state.noteArray })
      this.setState({ noteText: '' });
    }
  }

  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({noteArray: this.state.noteArray})
  }


  
    render() {
      
      let notes = this.state.noteArray.map((val, key) => {
        return <Note key={key} keyval={key} val={val}
            deleteMethod={ () => this.deleteNote(key)}
          />
      });




      
       
      return (
        <View style={styles.container}>
  
          <ScrollView style={styles.scrollContainer}>
           {notes}
            </ScrollView>
  
          <View style={styles.footer}>
            <TextInput
              style={styles.textInput}
              onChangeText={(noteText) => this.setState({noteText})}
              value={this.state.noteText}
              placeholder='Scrie aici...'  
              placeholderTextColor='#ff8c82'
              underlineColorAndroid='transparent'>
            </TextInput>
          </View>
  
          <TouchableOpacity onPress={ this.addNote.bind(this) } style={styles.addButton}>
              <Text style={styles.addButtonText}>+</Text>          
            </TouchableOpacity>
  
        </View>
      );
    }



}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: '#fcd7d4',
    },
    header: {
      backgroundColor: '#E91E63',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 10,
      borderBottomColor: '#ddd',
      
    },
    headerText: {
      color: 'white',
      fontSize: 18,
      padding: 26,
      paddingTop: 50
    },
    scrollContainer: {
      flex: 1,
      marginBottom: 100,
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10,
    },
    textInput: {
      alignSelf: 'stretch',
      color: '#fff',
      padding: 20,
      backgroundColor: '#e30707',
      borderTopWidth: 2,
      borderTopColor: '#ededed',
    },
    addButton: {
      position: 'absolute',
      zIndex: 11,
      right: 20,
      bottom: 90,
      backgroundColor: '#e30707',
      width: 90,
      height: 90,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 8,
    },
    addButtonText: {
      color: '#fff',
      fontSize: 48,
      fontWeight: 'bold',
    }
  });
  
  
import * as React from 'react';
import {useState} from 'react';
import { TextInput, StyleSheet, Button, View, Text, Alert } from 'react-native';
import stringMath from 'string-math';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#540101',
  },
  stilText: {
    fontSize: 40,
    color: '#fff',
  },
});

export default  function Calculator() {
    const [expr, setExpr] = useState('2+2');
    let rez = 0;
    const oph = event => Alert.alert("Rezultat",JSON.stringify(stringMath(expr)));
    return (
      <View style={styles.container}>
        <View>
          
          <TextInput style={styles.stilText}
            placeholder='Introdu o ecuație'
            keyboardType="numeric"      
            onChangeText ={val => setExpr(val)}
            >
           </TextInput>
           <Button color="#e30707" title="Submit" onPress={oph} />
        </View>
      </View>
    );
}

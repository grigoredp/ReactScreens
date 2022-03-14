import * as React from 'react';
import {useState} from 'react';
import { ScrollView, StyleSheet, Button, View, Text, Alert } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start', justifyContent: 'flex-start',
    backgroundColor: '#540101',
  },
  stilText: {
    fontSize: 30,
    color: '#fff',
  },
});

export default  function Info() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <Text style={styles.stilText}>Swiss Army Knife (Briceag Elvețian) este o aplicație multifuncțională.  {'\n'}{'\n'}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dictum ante. Proin hendrerit eros at mollis pellentesque. {'\n'}Morbi vel arcu nec eros pulvinar tincidunt a at odio. Nullam euismod augue in velit tristique congue. Fusce risus massa, vulputate vitae enim sit amet, porta lobortis metus. Aliquam egestas dolor dolor, nec pulvinar erat congue vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. {'\n'}Morbi auctor est nibh, vitae imperdiet urna auctor sed.

Nullam finibus lacus sit amet vehicula condimentum. Vestibulum faucibus elit nunc, sit amet auctor magna commodo ac. Nulla lacinia porta viverra. Integer sodales, metus vitae maximus volutpat, elit dolor rutrum purus, et semper lorem augue eu ex. Nunc ullamcorper quam et dui semper, eget auctor lectus pulvinar. Cras ut enim at diam consequat ultricies sit amet ut ipsum. Suspendisse vehicula quam at odio fringilla, in fermentum tortor venenatis. </Text>
        </ScrollView>
      </View>
    );
}

import * as React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#540101',
  },
  timeText: {
    fontSize: 80,
    color: '#fff'
  },
  daysText: {
    color: '#fc4b42',
    fontSize: 30,
    paddingBottom: 0,
    fontWeight: "bold"
  }
});

export default  class EcranCeas extends React.Component {

  constructor() {
    super();

    this.state = { currentTime: null, currentDay: null }
    this.daysArray = ['Duminica', 'Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Sambata', 'Duminica'];
  }

  getCurrentTime = () => {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    this.setState({ currentTime: hour + ':' + minutes + ':' + seconds + ' '  });

    this.daysArray.map((item, key) => {
      if (key == new Date().getDay()) {
        this.setState({ currentDay: item.toUpperCase() });
      }
    })
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentDidMount() {
    this.getCurrentTime();
    this.timer = setInterval(() => {
      this.getCurrentTime();
    }, 1000);
  }

  render() {

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.daysText}>{this.state.currentDay}</Text>
          <Text style={styles.timeText}>{this.state.currentTime}</Text>
        </View>
      </View>
    );
  }
}

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
  ruler: {

  }

});

export default  class Cronometru extends React.Component {

  constructor() {
    super();
    this.state = { currentTime: null, start: true,
    min: 0, sec: 0}
    
}

    getCurrentTime = () => {
        let minutes = this.state.min;
        let seconds = this.state.sec;
        if (minutes < 10) {
          minutes = '0' + minutes;
        }
    
        if (seconds < 10) {
          seconds = '0' + seconds;
        }

        this.setState({ currentTime:'  '+ minutes + ':' + seconds + ' '  });
    
      }
      componentWillUnmount() {
        clearInterval(this.timer);
      }
    
      componentDidMount() {
        this.getCurrentTime();

        this.timer = setInterval(() => {
            if (this.state.start != false){
                if (this.state.sec > 58) {
                    this.state.sec = 0;
                    this.state.min++
                }
                this.state.sec++; 
            }
            this.getCurrentTime();
        }, 1000);
      }
    

  render() {

    return (
      <View style={styles.container}>
        <View>
        <Text style={styles.timeText}>min:sec</Text>
          <Text style={styles.timeText}>{this.state.currentTime}</Text>
        </View>
      </View>
    );
  }
}

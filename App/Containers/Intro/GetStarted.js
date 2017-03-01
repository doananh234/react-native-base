import React, { Component, PropTypes } from 'react';
import {
    View,
    TextInput,
    Text,
    ListView,
    ScrollView,
    Dimensions,
    Keyboard,
    Animated,
    TouchableWithoutFeedback
} from 'react-native';
import dismissKeyboard from 'dismissKeyboard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from '../style/AppStyle';
import Actions from '../../Actions/Creators';
import Icon from 'react-native-vector-icons/Ionicons';
import I18n from '../../I18n/I18n';
import Tools from '../../Services/Tools';
import { Actions as NavActions } from 'react-native-router-flux';

class Startup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indicator: false,
      translateY: new Animated.Value(0),
      username: '',
      password: '',
    };
  }

  keyboardWillShow (e) {
    NavActions.refresh({hideNavBar: true});
    Animated.timing(this.state.translateY, {
          toValue: -60,
          duration: 200
        }).start();
    // this.state.bottom != e.endCoordinates.height && this.setState({bottom: e.endCoordinates.height})
  }

  keyboardWillHide (e) {
    NavActions.refresh({hideNavBar: false});
    Animated.timing(this.state.translateY, {
          toValue: 0,
          duration: 200
        }).start();
    // this.state.bottom != 0 && this.setState({bottom: 0})
  
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow.bind(this))
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide.bind(this))
    
    this.props.navigationState.onLeft = () => {
      NavActions.pop();
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({indicator: newProps.logining});
  }    

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  onChange(data) {
    this.setState({...data});
  }

  onLogin() {
    this.setState({indicator: true});
    let data = {
      username: this.state.username,
      password: this.state.password
    };
  }

  onBack() {
  }

  renderHeader() {
    return (
      <View style={[ styles.inputRow, {marginTop: this.state.bottom==0? 50:5} ]}>
        <Text>Welcome</Text>  
      </View>
    );
  }

  renderInputRow() {
    return (
      <View style={[ styles.inputRow, {marginTop: this.state.bottom==0? 50:5} ]}>
        <TextInput
          style={styles.textInput}
          placeholder={'username'}
          value={ this.state.username || '' }
          onChangeText={ (data) =>  this.onChange( { username: data }) }/>
        <TextInput
          secureTextEntry
          style={styles.textInput}
          placeholder={'password'}
          value={ this.state.password || '' }
          onChangeText={ (data) => this.onChange( { password: data }) }/>
      </View>
    );
  }

  render() {
    return (
      <Animated.View style={ [styles.scrollView,{transform: [
              { translateY: this.state.translateY},
            ]} ]}>
        <TouchableWithoutFeedback  onPress={()=> dismissKeyboard()}>
          <View>
            {this.state.indicator && <Indicator />}
          </View>
        </TouchableWithoutFeedback>
        </Animated.View>
    );
  }

}

function mapStateToProps(state) {
  return {
  };
}
export default connect(mapStateToProps)(Startup);


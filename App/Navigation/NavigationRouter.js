import React, { Component } from 'react';
import { StyleSheet, View, Alert, ToastAndroid, BackAndroid  } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
// screens identified by the router

import GetStarted from '../Containers/Intro/GetStarted';

import styles from './style/NavigationStyle';
import {Fonts ,Metrics, Colors } from '../Themes/index'
import Icon from 'react-native-vector-icons/Ionicons';
import I18n from '../I18n/I18n';
import { connect } from 'react-redux';

const RouterWithRedux = connect()(Router);

class NavigationRouter extends Component {

  constructor (props) {
    super(props);
    this.state = {
    }
  }

  onExitApp = () => {
    Alert.alert(
      I18n.t('titleWarning'),
      I18n.t('messageExitApp'),
      [
        { text: I18n.t('cancel'), onPress: () => {} },
        { text: I18n.t('yes'), onPress: () => BackAndroid.exitApp() },
      ]
    );
    return true;
  }
  render () {
    return (
      <RouterWithRedux onExitApp={this.onExitApp} hideNavBar>
        <Scene key="root" navigationBarStyle={styles.navBarTransparent}>
          <Scene key="GetStarted" component={GetStarted} hideNavBar={true}/>
        </Scene>
      </RouterWithRedux>
    )
  }
}


// navBar={ (ref) => { return <NavBar left='home' right='fav-2' parrent={ref}/>}}
export default NavigationRouter

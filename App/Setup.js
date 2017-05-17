import React, { Component } from 'react';
import { Provider } from 'react-redux';
import RootContainer from './Root';
import configureStore from './Store/Store';
import DebugSettings from './Config/DebugSettings';
import { View, ActivityIndicator, Text } from 'react-native';
import CodePush from "react-native-code-push";

if (__DEV__) {
  // If ReactNative's yellow box warnings are too much, it is possible to turn
  // it off, but the healthier approach is to fix the warnings.  =)
  console.disableYellowBox = DebugSettings.yellowBox
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      isLoading: true,
      store: configureStore(() => this.setState({isLoading: false})),
    };
  }

  componentDidMount() {
        CodePush.sync({
            updateDialog: true,
            installMode: CodePush.InstallMode.IMMEDIATE,
        }, (status) => {
            switch (status) {
                case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
                    this.setState({ showDownloadingModal: true });
                    break;
                case CodePush.SyncStatus.INSTALLING_UPDATE:
                    this.setState({ showInstallingModal: true });
                    break;
                case CodePush.SyncStatus.UPDATE_INSTALLED:
                    break;
                default:
                    break;
            }
        }, ({ receivedBytes, totalBytes }) => {
            this.setState({ downloadProgress: Math.round((receivedBytes / totalBytes) * 100) });
        });
    }


  render () {
    if (this.state.isLoading) {
      return <View style={{flex: 1}} />;
    }
    return (
      <Provider store={this.state.store}>
        <RootContainer />
      </Provider>
    )
  }
}

export default App

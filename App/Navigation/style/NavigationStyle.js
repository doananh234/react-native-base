import {StyleSheet, Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');
import {Fonts ,Metrics, Colors, Scale } from '../../Themes/index';
const NavigationStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#413f4d',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#373445',
  },
  navBar: {
    backgroundColor: Colors.navigator,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: Scale>2?74:64,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.divider,
    shadowOpacity: 0.6,
    shadowRadius: 1,
    shadowOffset: {
      height: 1.5,
      width: 0
    },
  },
  center: {
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    height: 44,
    flexDirection: 'row',
  },
  navContent: {
    height: 44,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarTransparent: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    borderBottomWidth: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: 64
  },
  left: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 10,
    width: 50,
  },
  leftButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    paddingRight: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: 100,
  },
  text: {
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.regular,
    color: Colors.orange,
  }
})
export default NavigationStyle

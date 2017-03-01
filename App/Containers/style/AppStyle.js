import {  StyleSheet, Dimensions, PixelRatio } from 'react-native';
import {Fonts ,Metrics, Colors, Scale } from '../../Themes/index';
const { width, height } = Dimensions.get('window');
const _MARGIN = 40;
export default StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  inputRow: {
    marginLeft: 47,
    marginRight: 47,
    marginTop: 47,
    alignSelf:  "stretch",
  },
  textInput: {
    height:40,
    fontSize:Fonts.size.medium,
    textAlignVertical: 'top',
    backgroundColor: 'transparent',
  },
  horizontalScroll: {
    backgroundColor: '#f5f5f5',
    width: width,
    height: 320
  },
  containerHaveNav: {
    marginTop: Scale>2?74:64,
    backgroundColor: Colors.background,
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  containerBlur: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    left: 0, right: 0,
    padding: 10*Scale,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 10*Scale,
    right: 0,
    left: 0
  },
  scrollView: {
    flex: 1,
    position: 'absolute',
    top: Scale>2?74:64,
    right: 0,
    left: 0,
    bottom: 0
  },
  headerImage: {
    width: 100*Scale,
    height: 100*Scale,
    borderRadius: 50*Scale
  },
  shadowViewOfImg: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
    opacity: 0.5,
    position: 'absolute',
    top: 0,
    left: 0
  },
  image: {
    width: 300*Scale,
    height: 300*Scale
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    margin: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode:'repeat'
  },
  viewSignUpandLogin: {
    flexDirection: 'row',
    flex : 1,
  },
  scrollViewHorizontal: {
    flex: 1,
    paddingRight: 30,
    paddingLeft: 30,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 300*Scale
  },
  scrollViewHorizontalAndroid: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height : 300*Scale,
  },
  cardAndroid: {
    flex: 1,
    width: width,
    alignItems: 'center',
    height : 230*Scale,
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    width: width - _MARGIN * 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card2: {
     flex:1, marginTop: 15*Scale, height :360*Scale, width:width-40
  },
  shadow: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 80,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    height: 60,
    paddingLeft: 30*Scale,
    paddingRight: 30*Scale,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hintText: {
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: Fonts.type.bolditalic,
    fontSize: Fonts.size.h4,
    color: Colors.divider,
    textAlign: 'center',
    backgroundColor: 'transparent'
  },
  pageStyle: {
    padding: 20,
    width: 50,
  },
  viewHeaderTitle: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    alignSelf : 'stretch',
    justifyContent: 'center',
    flexDirection:'row',
  },
  line: {
    flex:1,
    alignSelf:'center',
    height: 1,
    backgroundColor: 'white', 
  },
  viewTitle: {
    flex:1.4, 
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingLeft: 10*Scale, 
    paddingRight: 10*Scale
  },
  headerTitle: {
    alignSelf:'center',
    textAlign: 'center',
    color: 'white',
    fontSize: Fonts.size.regular,
  },
  imageAvatar: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: 160*Scale
  },
  separatorRow: {
    height: 1,
    marginRight: 0,
    marginLeft: 0,
    backgroundColor: Colors.divider,
  },
})

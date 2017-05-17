import { Dimensions, PixelRatio } from 'react-native';
const { width, height } = Dimensions.get('window');
const type = {
  base: 'texgyreadventor-regular',
  bold: 'texgyreadventor-bold',
  bolditalic: 'texgyreadventor-bolditalic',
  emphasis: 'texgyreadventor-italic',
  icon: 'icomoon'
}

const scale = width/(380);

const size = {
  h1: 38*scale,
  h2: 34*scale,
  h3: 30*scale,
  h4: 26*scale,
  h5: 20*scale,
  h6: 19*scale,
  input: 18*scale,
  regular: 17*scale,
  medium: 14*scale,
  small: 12*scale,
  tiny: 10*scale,
}

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1
  },
  h2: {
    fontFamily: type.bold,
    fontSize: size.h2
  },
  h3: {
    fontFamily: type.emphasis,
    fontSize: size.h3
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5
  },
  h6: {
    fontFamily: type.emphasis,
    fontSize: size.h6
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium
  }
}

export default {
  type,
  size,
  style
}


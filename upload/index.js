import {CFCMimg} from './src/cfcmimg.babel.min.js'
export default {
 	install: function(Vue) {
	 Object.defineProperty(Vue.prototype, '$CFCMimg', { value: CFCMimg });
  }
}
export default {
  hi: 'hi, there!',
  name: 'i\m an extra-module!',
  requireEnsure: (condition) => {
    if (condition) {
      require.ensure(['./cousin-module.js'], function(require) {
        const b = require('./aunt-module.js');
        // console.log(b, 'console.log from extra-module');
      });
    }
  },
  // import: () => {
  //   return import(/* webpackChunkName: "lodash" */ 'lodash').then(() => {
  //     var element = document.createElement('div');
      
  //     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
      
  //     return element;
      
  //   }).catch(error => 'An error occurred while loading the component');
  // }
}
import someModule from './extra-module.js';

function aboutModule() {
  console.log(someModule);
}

someModule.requireEnsure(1 > 2);

export default {
  
}
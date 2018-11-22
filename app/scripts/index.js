import 'ress/ress.css';
import Vue from 'vue';
import ElementUI from 'element-ui';

import App from './app.vue';
import store from './store';

if (module.hot) {
  const api = require('vue-hot-reload-api');
  api.install(Vue);
  // compatibility can be checked via api.compatible after installation
  if (!api.compatible) {
    throw new Error('vue-hot-reload-api is not compatible with the version of Vue you are using.');
  }
  // indicate this module can be hot-reloaded
  module.hot.accept();
}

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  store,
  el: '#root',
  render: h => h(App)
});

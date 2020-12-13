import IndexCom from './IndexCom';
import RunAF from './AsyncRunner';

export {
  RunAF
};

export default {
  path: 'online', component: IndexCom, childRoutes: [
    { path: 'af', component: RunAF }
  ]
};

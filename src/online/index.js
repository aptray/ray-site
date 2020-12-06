import IndexCom from './IndexCom';
import RunAF from './RunAF';

export {
  RunAF
};

export default {
  path: 'online', component: IndexCom, childRoutes: [
    { path: 'af', component: RunAF }
  ]
};

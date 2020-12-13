
import RProgress from 'ray-progress';
import Home from './../home';
import RootView from './../RootView';
import onlineRoutes from './../online';

const routes = [
  { path: 'main', component: Home }
];


const progressStart = () => {
  RProgress.start();
};

const rootRoutes = {
  path: '/',
  onEnter: progressStart,
  onChange: progressStart,
  component: RootView,
  // indexRoute: { component: Home },
  indexRoute: { onEnter: (nextState, replace) => replace('/main') },
  childRoutes: [
    ...routes,
    onlineRoutes
  ]
};

export default rootRoutes;

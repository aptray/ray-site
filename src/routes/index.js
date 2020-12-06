
import RProgress from 'ray-progress';
import RootView from './../RootView';
import onlineRoutes from './../online';


const progressStart = () => {
  RProgress.start();
};

const rootRoutes = {
  path: '/',
  onEnter: progressStart,
  onChange: progressStart,
  component: RootView,
  childRoutes: [
    onlineRoutes
  ]
};

export default rootRoutes;

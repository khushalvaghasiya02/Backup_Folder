
import ConnectedWith from '../screens/Main/connected with';
import ConnectingScreen from '../screens/Main/connecting screen';
import FeliDiaries from '../screens/Main/feli diaries';
import FeliExpert from '../screens/Main/feli expert';
import FeliFriend from '../screens/Main/feli friend';
import FreakMyTrip from '../screens/Main/freak my trip';
import HomeScreen from '../screens/Main/home';
import LeisureWalk from '../screens/Main/leisure walk';
import UserDrawer, { UserStack } from '../screens/Main/navigation';
import SearchExpert from '../screens/Main/searchExpert';
import Intro from '../screens/Onboarding/intro';
import OnboardingSlider from '../screens/Onboarding/onBoard';
import SignIn from '../screens/Onboarding/signIn';
import { SCREENS } from './routes';

//Auth Stack
export const authStackNav = [
  {
    id: 1,
    name: SCREENS.INTRO,
    component: Intro,
  },
  {
    id: 2,
    name: SCREENS.LOGIN,
    component: SignIn,
  },
  {
    id: 3,
    name: SCREENS.ONBOARD,
    component: OnboardingSlider,
  },
  {
    id: 4,
    name: SCREENS.HOMESTACK,
    component: UserStack,
  },
];

export const UserStackNav = [
  {
    id: 1,
    name: SCREENS.USER_DRAWER,
    component: UserDrawer,
  },
  {
    id: 2,
    name: SCREENS.FELI_FRIEND,
    component: FeliFriend,
  },
  {
    id: 3,
    name: SCREENS.FELI_EXPERT,
    component: FeliExpert,
  },
  {
    id: 4,
    name: SCREENS.FELI_DIARIES,
    component: FeliDiaries,
  },
  {
    id: 5,
    name: SCREENS.FREAK_MY_TRIP,
    component: FreakMyTrip,
  },
  {
    id: 6,
    name: SCREENS.CONNECTING,
    component: ConnectingScreen,
  },
  {
    id: 7,
    name: SCREENS.CONNECTED_WITH,
    component: ConnectedWith,
  },
  {
    id: 8,
    name: SCREENS.SEARCH_EXPERT,
    component: SearchExpert,
  },
  {
    id: 9,
    name: SCREENS.LEISURE_WALK,
    component: LeisureWalk,
  },

];
export const UserDrawerNav = [
  {
    id: 1,
    title: SCREENS.USER_HOME,
    component: HomeScreen,
    isShow:true,
  },
  {
    id: 2,
    title: SCREENS.FELI_FRIEND,
    component: FeliFriend,
    isShow:false,
  },
  {
    id: 3,
    title: SCREENS.FELI_EXPERT,
    component: FeliExpert,
    isShow:false,
  },
  {
    id: 4,
    title: SCREENS.FELI_DIARIES,
    component: FeliDiaries,
    isShow:false,
  },
  {
    id: 5,
    title: SCREENS.FREAK_MY_TRIP,
    component: FreakMyTrip,
    isShow:false,
  },
 
]
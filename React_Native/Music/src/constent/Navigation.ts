/* eslint-disable quotes */
/* eslint-disable prettier/prettier */

import Intro from "../Auth/Intro";
import Search from "../screens/Home/Search";
import Splash from "../Auth/Splash";
import MainTabScreen from "../Navbar";
import Expoler from "../screens/Expoler";
import Home from "../screens/Home";
import Like from "../screens/Like";
import Profile from "../screens/Profile";
import image from "./Images";
import Music from "../screens/Music";


export const mainStack = [
  {id: 1, name: 'Splash', component: Splash, back: false},
  {id: 2, name: 'Intro', component: Intro, back: false},
  {id: 3, name: 'move', component: MainTabScreen, back: false},
   {id: 4, name: 'Search', component: Search, back: true},
   {id: 5, name: 'Music', component: Music, back: false },
];

export const mainTab = [
  {id: 1, title: 'Home', component: Home, src: image.HOME_ICON},
  {
    id: 2,
    title: 'Expoler',
    component: Expoler,
    src: image.DISCOVER_ICON,
  },
  {id: 3, title: 'Like', component: Like, src: image.HEART_ICON},
  {id: 4, title: 'Profile', component: Profile, src: image.PROFILE_ICON},
];


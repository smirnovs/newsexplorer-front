import "../pages/saved/saved.css";
import { Mobilemenu } from './helpers/mobilemenu.js';

const ICON_COLOR = 'header__mobileico_black-closed';
let isOpenMenu = false;

new Mobilemenu(ICON_COLOR, isOpenMenu);

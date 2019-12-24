import "../pages/index/index.css";
import { Popup } from './popup/popup.js';
import { Mobilemenu } from './helpers/mobilemenu.js';

import { Search } from './searcher/searcher.js';

const ICON_COLOR = 'header__mobileico_white-closed';
const HEADER_COLOR = '#1A1B22'
let isOpenMenu = false;
let isHeader = true;

new Search();
new Popup();
new Mobilemenu(ICON_COLOR, isOpenMenu, isHeader, HEADER_COLOR);



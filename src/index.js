import menuCardTpl from './templates/template-menu.handlebars';
import menu from './menu.json';
import { markupMenuCard } from './js/rander-menu.js';
import { changeTheme } from './js/change-theme.js';
import './sass/main.scss';

markupMenuCard(menu, menuCardTpl);
changeTheme();

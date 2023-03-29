import {CityName} from './types/cities';
import { SortItem } from './types/offersSort';

export enum AppRoute {
  Login = '/login',
  Main = '/',
  Room = '/offer/:id',

  City = '/:city',
}

export enum PageStyles {
  Login = 'page page--gray page--login',
  Main = 'page page--gray page--main',
  Default = 'page page--property',
}

export enum MapInfo {
  Attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  UrlTemplate = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'

}

export const ONE_POINT = 20;

export const URL_MARKER_DEFAULT =
  '../img/pin.svg';

export const URL_MARKER_CURRENT =
  '../img/pin-active.svg';

export const CITIES: CityName[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const OffersSortMap: SortItem[] = [
  {
    sortName: 'Popular',
    sortProperty: 'popular'
  },
  {
    sortName: 'Price: low to high',
    sortProperty: 'lowToHigh'
  },
  {
    sortName:   'Price: high to low',
    sortProperty: 'highToLow'
  },
  {
    sortName:   'Top rated first',
    sortProperty: 'rating'
  },
];

import {
  CHANGE_TEXTFIELD,
  CHANGE_CAPACITY,
  CHANGE_NB_NIGHTS,
  CHANGE_MAX_PRICE,
  CHANGE_ACCOMODATION_TYPES,
  SELECT_ALL,
  SAVE_SEARCH_RESULT,
  CHANGE_FILTER_SWITCH,
  CHANGE_MIN_SURFACE,
  SAVE_ACCOMODATION_TYPES,
} from 'src/actions/search';

import { getCheckedAccomodationTypes, selectAccomodationTypesByThematic } from 'src/utils';

const initialState = {
  accomodationTypes: [],
  city: '',
  country: '',
  capacity: 0,
  nbNights: 0,
  maxPrice: 0,
  types: [],
  minSurface: 0,
  pipedWater: false,
  electricity: false,
  animals: false,
  smokers: false,
  apmr: false,
  searchResult: [],
};

const searchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_MIN_SURFACE:
      return {
        ...state,
        minSurface: action.value,
      };
    case CHANGE_FILTER_SWITCH:
      return {
        ...state,
        [action.identifier]: !state[action.identifier],
      };
    case CHANGE_TEXTFIELD:
      return {
        ...state,
        [action.identifier]: action.value,
      };

    case CHANGE_NB_NIGHTS:
      return {
        ...state,
        nbNights: action.value,
      };
    case CHANGE_CAPACITY:
      return {
        ...state,
        capacity: action.value,
      };
    case CHANGE_MAX_PRICE:
      return {
        ...state,
        maxPrice: action.value,
      };
    case CHANGE_ACCOMODATION_TYPES:
      return {
        ...state,
        types: getCheckedAccomodationTypes(state.types, action.value, action.checked),
      };
    case SELECT_ALL:
      return {
        ...state,
        types: selectAccomodationTypesByThematic(state.accomodationTypes, state.types, action.id),
      };
    case SAVE_SEARCH_RESULT:
      return {
        ...state,
        // city: '',
        // country: '',
        searchResult: action.searchResult,
        // capacity: 0,
        // nbNights: 0,
        // maxPrice: 0,
        // types: [],
        // minSurface: 0,
        // pipedWater: true,
        // electricity: true,
        // animals: true,
        // smokers: true,
        // apmr: true,
      };
    case SAVE_ACCOMODATION_TYPES:
      return {
        ...state,
        accomodationTypes: action.accomodationTypes,
      };
    default: return state;
  }
};


export default searchReducer;
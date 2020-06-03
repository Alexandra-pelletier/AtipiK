import axios from 'axios';

import {
  SEARCH,
  saveSearchResult,
} from '../actions/search';

const searchMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEARCH: {
      const {
        minSurface,
        pipedWater,
        electricity,
        animals,
        smokers,
        apmr,
        city,
        types,
        nbNights,
        country,
        maxPrice,
        capacity,
      } = store.getState().search;
      axios({
        method: 'post',
        url: '../search',
        data: {
          capacity,
          types,
          nbNights,
          city,
          country,
          maxPrice,
          minSurface,
          pipedWater,
          electricity,
          animals,
          smokers,
          apmr,
        },
      }).then((response) => {
        store.dispatch(saveSearchResult(response.data));
      }).catch((error) => {
        console.warn(error);
      });
      next(action);
      break;
    }


    default:
      next(action);
  }
};

export default searchMiddleware;

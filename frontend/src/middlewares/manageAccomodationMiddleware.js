import axios from 'axios';
import {
  FETCH_MY_ACCOMODATIONS,
  saveMyAccomodations,
  SUBMIT_ADD_ACCOMODATION_FORM,
  SUBMIT_EDIT_MY_ACCOMODATION_FORM,
  DELETE_MY_ACCOMODATION,
  removeMyAccomodation,
} from 'src/actions/manageAccomodation';

const manageAccomodationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case DELETE_MY_ACCOMODATION:
      axios({
        method: 'delete',
        url: `${process.env.REACT_APP_BACKEND_URL}/delete/accomodation/${action.id}`,
      })
        .then((response) => {
          store.dispatch(removeMyAccomodation(action.id));
        })
        .catch((error) => {
          console.warn(`${error}`);
        });
      next(action);
      break;
    case FETCH_MY_ACCOMODATIONS: {
      axios({
        method: 'get',
        url: `${process.env.REACT_APP_BACKEND_URL}/accomodation/${action.id}`,
      })
        .then((response) => {
          store.dispatch(saveMyAccomodations(response.data));
        })
        .catch((error) => {
          console.warn(`${error}`);
        });
      next(action);
      break;
    }
    case SUBMIT_ADD_ACCOMODATION_FORM: {
      const {
        title,
        capacity,
        description,
        price,
        adress,
        city,
        country,
        surface,
        nbNights,
        electricity,
        pipedWater,
        accessibility,
        smokers,
        animals,
        facebook,
        instagram,
        type,
        services,
        extras,
        pictures,
      } = store.getState().manageAccomodation;
      const formData = new FormData();
      formData.append('pictures', pictures);
      console.log(pictures);
      formData.append('title', title);
      formData.append('capacity', capacity);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('adress', adress);
      formData.append('city', city);
      formData.append('country', country);
      formData.append('surface', surface);
      formData.append('nbNight', nbNights);
      formData.append('electricity', electricity);
      formData.append('pipedWater', pipedWater);
      formData.append('accessibility', accessibility);
      formData.append('smokers', smokers);
      formData.append('animals', animals);
      formData.append('facebookLink', facebook);
      formData.append('instagramLink', instagram);
      formData.append('type', type);
      formData.append('services', services.map((service) => (service.id)));
      formData.append('extras', extras.map((extra) => (extra.id)));
      axios.post(
        `${process.env.REACT_APP_API_URL}/add/accomodation`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': 'multipart/form-data',
          },
        },
      ).then((response) => {
        console.log(response);
      })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    }
    case SUBMIT_EDIT_MY_ACCOMODATION_FORM: {
      const {
        title,
        capacity,
        description,
        price,
        adress,
        city,
        country,
        surface,
        nbNights,
        electricity,
        pipedWater,
        accessibility,
        smokers,
        animals,
        facebook,
        instagram,
        type,
        services,
        extras,
      } = store.getState().manageAccomodation;
      axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/edit/accomodation/${action.id}`,
        data: {
          title,
          capacity,
          description,
          price,
          adress,
          city,
          country,
          surface,
          nbNights,
          electricity,
          pipedWater,
          accessibility,
          smokers,
          animals,
          facebook,
          instagram,
          type,
          services: services.map((service) => (service.id)),
          extras: extras.map((extra) => (extra.id)),
        },
        headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default manageAccomodationMiddleware;

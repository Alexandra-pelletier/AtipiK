import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getTypeById } from 'src/utils';

// ================fake data
const MyAccomodationsCard = ({
  pictures, id, price, title, country, city, capacity, type, deleteMyAccomodation, typeList,
}) => {
  return (
    // <div className="my-accomodations__card">
    //   <div className="my-accomodations__card__content">
    //     <div className="my-accomodations__card__content__image">
    //       <img src={`${process.env.REACT_APP_BACKEND_URL}/assets/accomodation/${pictures[0]}`} alt="mon hébergement" />
    //       <Link to={`/gerer-mes-hebergements/modifier-un-hebergement/${id}`}>
    //         <button type="button">Modifier</button>
    //       </Link>
    //       <button type="button" onClick={() => (deleteMyAccomodation(id))}>Supprimer</button>
    //     </div>
    //     <div className="my-accomodations__card__content__infos">
    //       <div className="my-accomodations__card__content__info">
    //         {/* <img src={`${process.env.REACT_APP_BACKEND_URL}/assets/type/picture/`} alt="titre de l'hébergement" /> */}
    //         <p>Titre: {title}</p>
    //       </div>
    //       <div className="my-accomodations__card__content__info">
    //         {/* <img src={`${process.env.REACT_APP_BACKEND_URL}/assets/type/picture/`} alt="type de l'hébergement" /> */}
    //         <p>Type: {getTypeById(typeList, type).name}</p>
    //       </div>
    //       <div className="my-accomodations__card__content__info">
    //         {/* <img src={`${process.env.REACT_APP_BACKEND_URL}/assets/type/picture/`} alt="capacité de l'hébergement" /> */}
    //         <p>Capacité: {capacity}</p>
    //       </div>
    //       <div className="my-accomodations__card__content__info">
    //         {/* <img src={`${process.env.REACT_APP_BACKEND_URL}/assets/type/picture/`} alt="localisation de l'hébergement" /> */}
    //         <p>{`Localisation: ${city}, ${country}`}</p>
    //       </div>
    //       <div className="my-accomodations__card__content__info">
    //         {/* <img src={`${process.env.REACT_APP_BACKEND_URL}/assets/type/picture/`} alt="prix de l'hébergement" /> */}
    //         <p>Prix: {price}</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>


    <div className="my-accomodations__card">
      <div className="my-accomodations__card__content">
        <div className="my-accomodations__card__content__image">
          <img src={`${process.env.REACT_APP_BACKEND_URL}/assets/accomodation/${pictures[0]}`} alt="mon hébergement" />
          <div className="my-accomodations__card__content__info">
            {/* <img src={`${process.env.REACT_APP_BACKEND_URL}/assets/type/picture/`} alt="titre de l'hébergement" /> */}
            <p className="my-accomodations__card__content__info__title">Titre</p>
            <p className="my-accomodations__card__content__info__content">{title}</p>
          </div>
        </div>
        <div className="my-accomodations__card__content__infos">
          <div className="my-accomodations__card__content__info">
            <p className="my-accomodations__card__content__info__title">Type</p>
            <p className="my-accomodations__card__content__info__content">{getTypeById(typeList, type).name}</p>
          </div>
          <div className="my-accomodations__card__content__info">
            <p className="my-accomodations__card__content__info__title">Capacité</p>
            <p className="my-accomodations__card__content__info__content">{capacity}</p>
          </div>
          <div className="my-accomodations__card__content__info">
            <p className="my-accomodations__card__content__info__title">Localisation</p>
            <p className="my-accomodations__card__content__info__content">{`${city}, ${country}`}</p>
          </div>
          <div className="my-accomodations__card__content__info">
            <p className="my-accomodations__card__content__info__title">Prix</p>
            <p className="my-accomodations__card__content__info__content">{price}</p>
          </div>
        </div>
      </div>
      <div className="my-accomodations__card__btn">
        <Link to={`/gerer-mes-hebergements/modifier-un-hebergement/${id}`} className="my-accomodations__card__btn__edit">
          <button type="button">Modifier</button>
        </Link>
        <button className="my-accomodations__card__btn__suppr" type="button" onClick={() => (deleteMyAccomodation(id))}>Supprimer</button>
      </div>
    </div>
  );
};
MyAccomodationsCard.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  capacity: PropTypes.number.isRequired,
  type: PropTypes.number.isRequired,
  deleteMyAccomodation: PropTypes.func.isRequired,
};

export default MyAccomodationsCard;

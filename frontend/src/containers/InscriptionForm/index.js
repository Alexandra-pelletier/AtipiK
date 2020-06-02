import { connect } from 'react-redux';
import InscriptionForm from 'src/components/InscriptionForm';

import { changeInscriptionField, submitInscription } from 'src/actions/inscription';

const mapStateToProps = (state) => ({
  firstname: state.inscription.firstname,
  lastname: state.inscription.lastName,
  pseudo: state.inscription.pseudo,
  email: state.inscription.email,
  password: state.inscription.password,
  confirmPassword: state.inscription.confirmPassword,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, identifier) => dispatch(changeInscriptionField(newValue, identifier)),
  submitInscription: () => dispatch(submitInscription()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InscriptionForm);

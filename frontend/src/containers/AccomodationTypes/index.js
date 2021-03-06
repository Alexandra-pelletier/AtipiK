import { connect } from 'react-redux';
import AccomodationTypes from 'src/components/AccomodationTypes';

import { changeAccomodationTypes } from 'src/actions/search';

const mapStateToProps = (state) => ({
  types: state.data.accomodationTypes,
});

const mapDispatchToProps = (dispatch) => ({
  changeAccomodationTypes: (id, checked, typeList) => dispatch(changeAccomodationTypes(id, checked, typeList)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccomodationTypes);

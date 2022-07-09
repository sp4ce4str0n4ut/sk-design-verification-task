import Form from './Form';
import { connect } from 'react-redux';
import { fetchCitiesData } from '../../store/cities';
import { fetchSourcesData } from '../../store/sources';

const mapStateToProps = (state) => ({
  cities: state.cities.cities,
  sources: state.sources.sources,
});

const mapDispatchToProps = {
    fetchCitiesData,
    fetchSourcesData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);

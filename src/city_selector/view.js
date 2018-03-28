import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {actions as weatherActions} from '../weather/';

const CITY_CODES = {
  '重庆': 101040100,
  '北京': 101010100,
  '上海': 101020100,
  '广州': 101280101,
  '深圳': 101280601
};

const selectWrap = {
  color: '#fff',
  margin: '100px 0'
}

const selectStyle = {
  width: 150,
  height: 40,
  color: '#fff',
  fontSize: '25px',
  background: '#ffd966'
}


class CitySelector extends React.Component {
  constructor() {
    super(...arguments);

    this.onChange = this.onChange.bind(this);
  }

  onChange(ev) {
    const cityCode = ev.target.value;
    this.props.onSelectCity(cityCode)
  }

  componentDidMount() {
    const defaultCity = Object.keys(CITY_CODES)[0];
    this.props.onSelectCity(CITY_CODES[defaultCity]);
  }

  render() {
    return (
      <div style={selectWrap}>
        请选择城市：
        <select style={selectStyle} onChange={this.onChange}>
          {
            Object.keys(CITY_CODES).map(
              cityName => <option key={cityName} value={CITY_CODES[cityName]}>{cityName}</option>
            )
          }
        </select>
      </div>
    );
  }
}

CitySelector.propTypes = {
  onSelectCity: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectCity: (cityCode) => {
      dispatch(weatherActions.fetchWeather(cityCode));
    }
  }
};

export default connect(null, mapDispatchToProps)(CitySelector);
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Alert, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const Button = () => {
    return (
      <TouchableOpacity onPress={() => {
        Alert.alert(this.props.alerta)
      }}>
        
        
      </TouchableOpacity>
    );
};

Button.PropTypes = {
  alerta: PropTypes.string
}

Button.defaultProps = {
  alerta: 'valor padrão'
}

export default Button;
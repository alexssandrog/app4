import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

import ListaItens from './src/components/ListaItens';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ListaItens />
    );
  }
}

import React from 'react';

import { ServicesConsumer } from '../services-context';

export default (Wrapped) => props => (
  <ServicesConsumer>{
    value => <Wrapped services={value} {...props} />
  }</ServicesConsumer>
)
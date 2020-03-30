import React from 'react';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import { withKnobs, text, number } from '@storybook/addon-knobs/react';

import Card from '../components/card';

export default {
  component: Card,
  title: 'Card',
  decorators: [withKnobs],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const propsData = {
  label: 'Bubble waffles',
  subLabel: '$47,99 per item',
  publicId: 'food/bubble-waffles_nedmdp.webp',
  image: '',
  rate: 5,
};

export const actionsData = {
  onStarClick: action('onStarClick'),
};

const options = {
  range: true,
  min: 0,
  max: 5,
  step: .1,
};

const selectOptions = {
  bubbleWaffles: 'food/bubble-waffles_nedmdp',
  pizza: 'food/pizza_qy5vt8',
  pastel: 'food/pastel_uunhfu',
  brocolis: 'food/brocolis_licju4',
  melancia: 'food/melancia_idb1fd',
  beijinho: 'food/beijinho_g8iozt',
  bolo: 'food/bolo_fcz69t',
  churros: 'food/churros_w9nync',
}

export const Default = () =>
  <Card
    label={text('label', 'Bubble waffles')}
    subLabel={text('subLabel', '$47,99 per item')}
    publicId={select('publicId', selectOptions, 'food/bolo_fcz69t')}
    rate={number('rate', 4, options)}
    {...actionsData}
  />;
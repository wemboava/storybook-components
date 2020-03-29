import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, color, boolean, number } from '@storybook/addon-knobs/react';

import Ratings from '../components/ratings';

export default {
  component: Ratings,
  title: 'Ratings',
  decorators: [withKnobs],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const propsData = {
  reviews: 34,
  rate:3,
  starColor: '#ffc107',
  starColorHover: '#f9de8d',
  starColorDisabled: '#DEDFE0',
  onlyReading: true,
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

export const Default = () =>
  <Ratings
    onlyReading={boolean('onlyReading', false)}
    rate={number('rate', 0, options)}
    starSize={text('starSize', '35px')}
    reviews={number('reviews', 0)}
    starColor={color('starColor', '#ffc107')}
    starColorHover={color('starColorHover', '#f9de8d')}
    starColorDisabled={color('starColorDisabled', '#DEDFE0')}

    {...actionsData}
  />;

export const OnlyReading = () =>
  <Ratings
    onlyReading={boolean('onlyReading', true)}
    rate={number('rate', 3.5, options)}
    starSize={text('starSize', '35px')}
    reviews={number('reviews', 23)}
    starColor={color('starColor', '#ffc107')}
    starColorHover={color('starColorHover', '#f9de8d')}
    starColorDisabled={color('starColorDisabled', '#DEDFE0')}

    {...actionsData}
  />;

import { configure, addParameters } from '@storybook/react';

addParameters({
    options: {
      isFullscreen: false,
      showPanel: true,
    },
  });

configure(require.context('../src', true, /\.stories\.js$/), module);
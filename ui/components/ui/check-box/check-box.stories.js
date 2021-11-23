import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import CheckBox, {
  CHECKED,
  INDETERMINATE,
  UNCHECKED,
} from './check-box.component';

export default {
  title: 'Components/UI/CheckBox',
  id: __filename,
};

const checkboxOptions = {
  [CHECKED]: CHECKED,
  [INDETERMINATE]: INDETERMINATE,
  [UNCHECKED]: UNCHECKED,
  True: true,
  False: false,
};

export const DefaultStory = () => (
  <CheckBox
    checked={select('checked state', checkboxOptions, UNCHECKED)}
    disabled={boolean('Disabled', false)}
    id={text('ID', 'checkboxId')}
    onClick={action('checkbox clicked')}
  />
);

DefaultStory.storyName = 'Default';

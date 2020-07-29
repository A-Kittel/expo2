import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Button, CategoriesUnit } from '../../../src/components';

storiesOf('CategoriesUnit', module).add('default', () => <CategoriesUnit title={'Title'} />);

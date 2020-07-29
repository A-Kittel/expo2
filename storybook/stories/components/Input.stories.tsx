import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Input } from '../../../src/components';

storiesOf('Input', module)
.add('empty input', () => <Input label="Sample" />)
.add('empty input', () => <Input label="Sample" focused={true} />);

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Button } from '../../../src/components';
import { Alert } from 'react-native';

storiesOf('Button', module).add('default', () => <Button title={'Press Me'} onPress={() => Alert.alert('Presed')} />);

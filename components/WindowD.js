import React from 'react';
import { Text, useWindowDimensions, Button } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';

export default function WindowD() {
  const { portrait, landscape } = useDeviceOrientation();
  const window = useWindowDimensions();

  console.log('is orientation portrait: ', portrait);
  console.log('is orientation landscape: ', landscape);

  return (
    <>
      <Text>Window Dimensions</Text>
      <Text>Height: {window.height}</Text>
      <Text>Width: {window.width}</Text>
      <Text>Font scale: {window.fontScale}</Text>
      <Text>Is Portrait: {portrait ? 'Yes' : 'No'}</Text>
      <Text>Is Landscape: {landscape ? 'Yes' : 'No'}</Text>
      <Button
        title="Update Clipboard"
        onPress={() => setString('new clipboard data')}>
        Set Clipboard
      </Button>
    </>
  );
}

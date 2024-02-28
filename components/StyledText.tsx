import { TouchableOpacity } from 'react-native';
import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}

export function Red(props: TextProps) {
  return <Text {...props} style={[props.style, { color: 'red' }]} />;
}

export function Button(props: TextProps) {
  return <TouchableOpacity {...props} style={[props.style, { backgroundColor: 'grey', padding: 12, marginBottom: 12 }]}>
    <Text>Button</Text>
    </TouchableOpacity>;
}

// /**
//  * Learn more about Light and Dark modes:
//  * https://docs.expo.io/guides/color-schemes/
//  */

// import { Text as DefaultText, View as DefaultView } from 'react-native';

// import Themes from '@/constants/Themes';
// import { useColorScheme } from './useColorScheme';

// type ThemeProps = {
//   lightColor?: string;
//   darkColor?: string;
// };

// export type TextProps = ThemeProps & DefaultText['props'];
// export type ViewProps = ThemeProps & DefaultView['props'];

// export function useThemeColor(
//   props: { light?: string; dark?: string },
//   colorName: keyof typeof Themes.light & keyof typeof Themes.dark
// ) {
//   const theme = useColorScheme() ?? 'light';
//   const colorFromProps = props[theme];

//   if (colorFromProps) {
//     return colorFromProps;
//   } else {
//     return Themes[theme][colorName];
//   }
// }

// export function Text(props: TextProps) {
//   const { style, lightColor, darkColor, ...otherProps } = props;
//   const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

//   return <DefaultText style={[{ color }, style]} {...otherProps} />;
// }

// export function View(props: ViewProps) {
//   const { style, lightColor, darkColor, ...otherProps } = props;
//   const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

//   return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
// }

import { Text as DefaultText, useColorScheme,
  View as DefaultView } from 'react-native';
import Themes from '../constants/Themes';


export function useThemeColor(
props: { themeName?: keyof typeof Themes },
colorName: keyof typeof Themes.light.colors & keyof typeof   	Themes.dark.colors& keyof typeof Themes.blue.colors
) {
const themeNameFromProps = props.themeName ?? null;
const theme = themeNameFromProps ?? useColorScheme() ?? 'light';
  return Themes[theme] ['colors'][colorName];
}

type ThemeProps = {
themeName?: keyof typeof Themes
};
export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function Text(props: TextProps) {
  const { style, ...otherProps } = props;
  if (props.themeName){
    const color = useThemeColor({ themeName: props.themeName }, 'text');
    return <DefaultText style={[{ color }, style]} {...otherProps} />;
  } else {
    const color = useThemeColor({ }, 'text');
    return <DefaultText style={[{ color }, style]} {...otherProps} />;
  }
}
export function View(props: ViewProps) {
  const { style, ...otherProps } = props;
  if (props.themeName) {
    const backgroundColor = useThemeColor(
                       { themeName: props.themeName }, 'background');
  return <DefaultView style={[{ backgroundColor }, style]}
              {...otherProps} />;
  } else {
    const backgroundColor = useThemeColor({ }, 'background');
    return <DefaultView style={[{ backgroundColor }, style]} 	{...otherProps} />;
  }
}
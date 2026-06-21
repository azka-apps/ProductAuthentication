import {FontAwesome6} from '@react-native-vector-icons/fontawesome6/static';
import React, {type ComponentProps} from 'react';

type IconProps = ComponentProps<typeof FontAwesome6>;

export function Icon({size = 20, ...props}: IconProps) {
  return <FontAwesome6 {...props} size={size} />;
}

export type IconName = IconProps['name'];

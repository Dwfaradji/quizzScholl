import React from 'react';
import { View as RNView, Text as RNText } from 'react-native';

export const View = ({ children, style }) => <RNView style={style}>{children}</RNView>;
export const Text = ({ children, style }) => <RNText style={style}>{children}</RNText>;

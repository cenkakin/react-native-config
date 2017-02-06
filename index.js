'use strict';

// Bridge to:
// Android: buildConfigField vars set in build.gradle, and exported via ReactConfig
// iOS: config vars set in xcconfig and exposed via ReactNativeConfig.m
import { NativeModules } from 'react-native';

const Config = NativeModules.ReactNativeConfig || {};

const parsePropsToObjects = () => {
  Object.keys(Config).forEach(conf => {
    try {
      Config[conf] = JSON.parse(Config[conf]);
} catch (e) {
  }
});
  return Config;
};

const parsedConfig = parsePropsToObjects();

export function getDefaultConfig(propName) {
  return parsedConfig[propName] instanceof Array ? parsedConfig[propName][0] : parsedConfig[propName];
}

export default parsedConfig;

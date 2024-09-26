const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// config.resolver.nodeModulesPaths = [
//     // Inclure les chemins vers le répertoire pnpm
//     path.resolve(__dirname, 'node_modules'),
//     path.resolve(__dirname, '../../node_modules'),
// ];
//
// config.resolver.disableHierarchicalLookup = true;

module.exports = config;
'use strict';

module.exports = {
    mode: 'production',
    entry: './dist/index.js',
    output: {
        filename: 'SequinUtils.js',
        library: 'SequinUtils',
        libraryTarget: 'umd'
    },
    node: {
        fs: 'empty'
    },
    target: 'web'
};

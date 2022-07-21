import babel from 'rollup-plugin-babel';
import vue from 'rollup-plugin-vue';
import resolve from '@rollup/plugin-node-resolve'
import alias from '@rollup/plugin-alias';
import image from '@rollup/plugin-image';
import commonjs from 'rollup-plugin-commonjs';
import json from '@rollup/plugin-json';
import sass from 'rollup-plugin-sass';
import path from 'path'
export default {
    input: 'packages/index.js',
    output: {
        file: 'lib/rr-vue2-elem.js',
        format: 'es'
    },
    external: ['vue','axios'],
    // external: ['element-ui'],
    plugins: [
        resolve({
            extensions: ['.js', '.ts', '.vue']
        }),
        alias({
            entries: [
                { find: '@', replacement: path.resolve('./') },
            ]
        }),
        babel({
            exclude: 'node_modules/**',
        }),
        vue({
            // Dynamically inject css as a <style> tag
            css: true,
            // Explicitly convert template to render function
            compileTemplate: true
        }),
        image(),
        commonjs({
            requireReturnsDefault: true
        }),
        json(),
        sass()
    ]
};
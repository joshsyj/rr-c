import babel from 'rollup-plugin-babel';
import vue from 'rollup-plugin-vue';
import resolve from '@rollup/plugin-node-resolve'
import alias from '@rollup/plugin-alias';
import image from '@rollup/plugin-image';
import commonjs from 'rollup-plugin-commonjs';
import json from '@rollup/plugin-json';
import sass from 'rollup-plugin-sass';
// import livereload from "rollup-plugin-livereload";
// import serve from "rollup-plugin-serve";
import replace from '@rollup/plugin-replace'
import path from 'path'
import pkg from './package.json'

const isProd = process.env.NODE_ENV === 'prod' ? true : false;

export default {
    input: isProd ? 'packages/index.js' : 'example/main.js',
    output: {
        file: pkg.main,
        format: 'umd',
        name: 'rrUi',
        globals: {
            'vue': 'Vue',
            'element-ui': 'Element',
            'axios': 'axios',
            'sortablejs': 'Sortable',
            'async': 'async',
            'qs': 'Qs',
            'spark-md5': 'SparkMD5',
            'vue-cropper': 'vueCropper',
            'vuex': 'vuex',
            'vue-count-to': 'CountTo',
        },
    },
    sourceMap: isProd ? false : true,
    external: ['vue', 'axios', 'element-ui', 'sortablejs', 'async', 'qs', 'spark-md5', 'vue-cropper', 'vuex', 'vue-count-to'],
    plugins: [
        vue({
            css: true,
            compileTemplate: true
        }),
        replace({
            'preventAssignment': true,
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
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
        image(),
        commonjs({
            requireReturnsDefault: true,
            namedExports: { 'vue-cropper': ['VueCropper'] }
        }),
        json(),
        sass(),
        // livereload(),
        // serve({
        //     open: true,
        //     port: 3004,
        //     openPage: '/example/index.html',
        //     contentBase: ''
        // })
    ]
};
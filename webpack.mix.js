//npm install laravel-mix cross-env node-sass --save-dev
//npm install --save-dev imagemin-webpack-plugin copy-webpack-plugin clean-webpack-plugin imagemin-mozjpeg
const mix = require('laravel-mix');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const Clean = require('clean-webpack-plugin');


mix.webpackConfig({
    plugins: [
        new Clean(['public'], {verbose: false}),
        new CopyWebpackPlugin([{
            from: 'resources/images',
            to: 'public/images', // Laravel mix will place this in 'public/imgages'
        }]),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            plugins: [
                imageminMozjpeg({
                    quality: 80,
                })
            ]
        })
    ],
    devtool: 'source-map'
});

mix.options({
    processCssUrls: false // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
});

mix.copy('resources/fonts', 'public/fonts');

mix.sass('resources/sass/app.scss', 'public/css');

mix.scripts([
    //librerias
    'node_modules/jquery/dist/jquery.min.js',
    //Custom Scripts
    'resources/js/scripts.js',
], 'public/js/app.js');

mix.sourceMaps();
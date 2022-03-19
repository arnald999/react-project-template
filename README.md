# React TypeScript Webpack Project

> Installing dependencies

    -   npm init --y
    -   npm install react react-dom
    -   npm install --dev @types/react \                                                                                                                      ✔ 
        @types/react-dom \
        ts-loader \
        css-loader \
        html-webpack-plugin \
        sass \
        sass-loader \
        style-loader \
        typescript \
        webpack \
        webpack-cli \
        webpack-dev-server

> Adding build, dev and clean in package.json
    
    "scripts": {
        "clean": "rm -rf dist/*",
        "build": "webpack",
        "dev": "webpack serve"
    },

> Configure TypeScript by creating the file tsconfig.json

    {
        "compilerOptions": {
            "incremental": true,
            "target": "es5",
            "module": "commonjs",
            "lib": ["dom", "dom.iterable", "es6"],
            "allowJs": true,
            "jsx": "react",
            "sourceMap": true,
            "outDir": "./dist/",
            "rootDir": ".",
            "removeComments": true,
            "strict": true,
            "moduleResolution": "node",            
            "allowSyntheticDefaultImports": true,
            "esModuleInterop": true,
            "experimentalDecorators": true
        },
        "include": [
            "./client"
        ],
        "exclude": [
            "./node_modules",
            "./build",
            "./dist"
        ]
    }

> To configure Webpack, make a file webpack.config.js

    const path = require("path");

    const app_dir = __dirname + '/client';

    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: app_dir + '/index.html',
    filename: 'index.html',
    inject: 'body'
    });

    const config = {
    mode: 'development',
    entry: app_dir + '/app.tsx',
    output: {
        path: __dirname + '/dist',
        filename: 'app.js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.s?css$/,
            use: [
            'style-loader',
            'css-loader',
            'sass-loader'
            ]
        }, {
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /(node_modules|bower_components)/
        },
        {
            test: /\.(woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            exclude: [/node_modules/],
            loader: "file-loader"
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            exclude: [/node_modules/],
            loader: "file-loader"
        },
        {
            test: /\.(pdf)$/i,
            exclude: [/node_modules/],
            loader: "file-loader",
            options: {
            name: '[name].[ext]',
            },
        },
        ]
    },
    plugins: [HTMLWebpackPluginConfig],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    optimization: {
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
    },
    devServer: {
        port: 8080,
        hot: true,
        historyApiFallback: true,
    },
    };
    module.exports = config;

> Create the main React component (the entry point), in the file app.tsx

    import * as React from 'react';
    import * as ReactDOM from 'react-dom';
    import Numbers from './numbers';

    ReactDOM.render(
        <Numbers initValue={42} />,
        document.getElementById('app') as HTMLElement
    );


> Add the index.html:

    <!DOCTYPE html>
    <html>

    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React TypeScript</title>
    </head>

    <body>
    <div id="app"></div>
    </body>
    </html>

> To run the project:

    npm run dev
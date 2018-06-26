import path from 'path';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';


export const ROOT = {
    BUILD: 'build',
    SRC: 'src'
};

export const devServerConf = {
    rootDir: ROOT.BUILD,
    indexFile: 'devIndex.html',
    port: 8080
};

export const getCompilerConfig = (dev = false) => {

    const excludes = [
        path.resolve(__dirname, 'node_modules')
    ];

    const cfg = {
        context: path.join(__dirname, `${ROOT.SRC}/app`),

        entry: [ 'babel-polyfill', './app.js' ],

        output: {
            path: path.resolve(__dirname, ROOT.BUILD),
            filename: 'app.js'
        },

        resolve: {
            extensions: [ '.js', '.json', '.scss', '.css' ]
        },

        module: {

            rules: [
                {
                    test: /\.js$/,
                    enforce: 'pre',
                    use: [ 'eslint-loader' ],
                    exclude: excludes
                },

                {
                    test: /\.js$/,
                    use: [ 'babel-loader' ],
                    exclude: excludes
                },

                {
                    test: /\.scss$/,
                    use: [
                        { loader: 'style-loader' },
                        { loader: 'css-loader' },
                        {
                            loader: 'sass-loader',
                            options: {
                                includePaths: [ './node_modules' ]
                            }
                        }
                    ]
                },

                {
                    test: /\.css$/,
                    use: [
                        { loader: 'style-loader' },
                        { loader: 'css-loader' }
                    ]
                },

                {
                    test: /\.ttf(\?.+)?$/,
                    use: [ {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            mimetype: 'application/octet-stream',
                            name: '../fonts/[hash].[ext]'
                        }
                    } ]
                },

                {
                    test: /\.woff(2?)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [ {
                        loader: 'url-loader',
                        options: {
                            limit: 20000,
                            mimetype: 'application/font-woff'
                        }
                    } ]
                },

                {
                    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                    use: [ {
                        loader: 'url-loader',
                        options: {
                            limit: 20000,
                            mimetype: 'application/vnd.ms-fontobject'
                        }
                    } ]
                },

                {
                    test: /\.gif|jpg|png$/,
                    use: [ {
                        loader: 'url-loader',
                        options: {
                            limit: 5000,
                            name: '../images/[hash].[ext]'
                        }
                    } ]
                },

                {
                    test: /\.svg$/,
                    use: [ {
                        loader: 'file-loader',
                        options: {
                            name: '../images/[hash].[ext]'
                        }
                    } ]
                },
            ]

        },

        plugins: [
            new CleanWebpackPlugin([ ROOT.BUILD ], {
                root: path.resolve(__dirname),
                verbose: true,
                dry: false
            }),
            // new CopyWebpackPlugin([
            // { from: '../index.html', to: 'index.html' },
            // ])
            // new ExtractTextPlugin('../css/app.css')
        ]
    };

    if (dev) {
        cfg.devtool = 'cheap-module-source-map';
        cfg.watch = true;
        cfg.mode = 'development';
        cfg.plugins.push(
            new HtmlWebpackPlugin({
                app: 'app.js',
                template: '../index.html',
                inject: false,
                filename: devServerConf.indexFile
            }),
            new webpack.LoaderOptionsPlugin({ debug: true }),
            // new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' })
        );
    } else {
        cfg.mode = 'production';
        // cfg.plugins.push(
        //     new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
        // new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' })
        // )
    }

    return cfg;
};

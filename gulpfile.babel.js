import gulp from 'gulp';
import express from 'express';
import webpack from 'webpack';
import { getCompilerConfig, devServerConf } from './webpack.babel.js';


gulp.task('default', done => {
    webpack(getCompilerConfig(), (err, stats) => {
        console.log(stats.toString({ colors: true }));
        done();
    });
});

gulp.task('dev', done => {
    let compiled = false;
    webpack(getCompilerConfig(true), (err, stats) => {
        if (err || stats.hasErrors()) {
            console.error('ERROR!', err || stats.toString());
            return;
        }

        console.log(stats.toString({ colors: true }));

        if (!compiled) {
            compiled = true;
            const server = express();
            server.use(express.static(devServerConf.rootDir));
            server.get('/', (req, res) => res.sendFile(devServerConf.indexFile, {
                root: devServerConf.rootDir
            }));
            server.listen(devServerConf.port, () => {
                console.log(`Example app listening on port ${devServerConf.port}`);
            });
        }
    });
});

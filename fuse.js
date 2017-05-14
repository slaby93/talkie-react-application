// const {FuseBox, WebIndexPlugin, BabelPlugin} = require('fuse-box');
// const fuse = FuseBox.init({
//     homeDir: 'src/',
//     output: 'dist/$name.js',
//     plugins: [
//         WebIndexPlugin({
//             title: 'fuse test title',
//             template: './src/index.html'
//         }),
//         BabelPlugin()
//     ]
// });
//
// fuse
//     .bundle("bundle")
//     .instructions(`> index.jsx`)
//     .watch();
//
// fuse.dev({
//     port: 8090
// });
//
// fuse.run();

const { FuseBox, SVGPlugin, CSSPlugin, BabelPlugin } = require("fuse-box");

// FuseBox 2.0 is coming soon!
// http://fuse-box.org:3333/

let fuse = new FuseBox({
    homeDir: "src/",
    sourcemaps: true,
    output: "dist/$name.js",
    plugins: [
        SVGPlugin(),
        CSSPlugin(),
        BabelPlugin()
    ]
});

fuse.dev({
    port:8090
});
fuse.bundle("app")
    .watch().hmr()
    .instructions("> index.jsx")

fuse.run();
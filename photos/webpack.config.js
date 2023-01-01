const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
//const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "photos",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  // experiments: {
  //   outputModule: true
  // },
  plugins: [
    new ModuleFederationPlugin({
        //library: { type: "module" },

        // For remotes (please adjust)
        name: "photos",
        filename: "photos.js",
        exposes: {
            './PhotosModule': './src/app/photos/photos.module.ts',
        },

        // For remotes (please adjust)
        // name: "photos",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './/src/app/app.component.ts',
        // },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "mfe1": "http://localhost:3000/remoteEntry.js",

        // },

        // shared: share({
        //   "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
        //   "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
        //   "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
        //   "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

        //   ...sharedMappings.getDescriptors()
        // })

        shared: {
          "@angular/core": { 
            singleton: true, 
            strictVersion: true, 
            requiredVersion: '12.2.0' 
          }, 
          "@angular/common": { 
            singleton: true, 
            strictVersion: true, 
            requiredVersion: '12.2.0' 
          }, 
          "@angular/common/http": { 
            singleton: true, 
            strictVersion: true, 
            requiredVersion: '12.2.0' 
          }, 
          "@angular/router": { 
            singleton: true, 
            strictVersion: true, 
            requiredVersion: '12.2.0' 
          },
          "@ngxs/store": {
            singleton: true,
            strictVersion: true,
            requiredVersion: "3.7.1",
          },
          "ngx-logger": {
            singleton: true,
            strictVersion: false,
            requiredVersion: "4.2.1",
          },
          'ngx-toastr': { 
            singleton: true, 
            strictVersion: false, 
            requiredVersion: '13.2.0' 
          },
          ...sharedMappings.getDescriptors()
        },
        
    }),
    sharedMappings.getPlugin()
  ],
};

#!/bin/sh

./node_modules/.bin/webpack -d --config ./config/webpack.config.mobile.js

INDEX="./cordova/www/js/index.js"

rm -rf $INDEX

FILE_PREFIX="
  var app = {\n
    // Application Constructor\n
    initialize: function() {\n
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);\n
  },\n\n
  // deviceready Event Handler\n
  //\n
  // Bind any cordova events here. Common events are:\n
  // 'pause', 'resume', etc.\n
  onDeviceReady: function() {\n
"

FILE_SUFFIX="
  }\n
}\n\n
app.initialize();
"

echo $FILE_PREFIX > $INDEX
cat ./cordova/www/js/bundle.js >> $INDEX
echo $FILE_SUFFIX >> $INDEX

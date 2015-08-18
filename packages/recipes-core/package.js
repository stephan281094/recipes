'use strict';

Package.describe({
  summary: "Core"
});

Package.on_use(function (api) {
  var both = ['client', 'server'];

  api.use('meteorhacks:flow-router', client);
  api.use('meteorhacks:flow-layout', client);

  api.add_files('namespace.js');
  api.add_files('lib/router/config.js'); // May need to be relocated

  api.export('Core');
});

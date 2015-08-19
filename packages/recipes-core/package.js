'use strict';

Package.describe({
  name: 'recipes:core',
  summary: 'Recipes core package',
  version: '0.0.1',
  git: 'https://github.com/stephan281094/recipes.git'
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@1.0");
  api.use('recipes:lib@0.0.1');

  api.addFiles('namespace.js');
  api.addFiles('lib/router/config.js'); // May need to be relocated
});

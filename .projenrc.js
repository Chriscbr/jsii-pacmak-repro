const { cdk } = require('projen');
const project = new cdk.JsiiProject({
  author: 'Christopher Rybicki',
  authorAddress: 'rybickic@amazon.com',
  defaultReleaseBranch: 'main',
  name: 'jsii-pacmak-repro',
  repositoryUrl: 'https://github.com/rybickic/jsii-pacmak-repro.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // release: undefined,      /* Add release management to this project. */
});
project.synth();
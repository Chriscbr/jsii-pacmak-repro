const { cdk } = require('projen');

const project = new cdk.JsiiProject({
  // defaults
  author: 'Christopher Rybicki',
  authorAddress: 'rybickic@amazon.com',
  defaultReleaseBranch: 'main',
  name: 'jsii-pacmak-repro',
  repositoryUrl: 'https://github.com/Chriscbr/jsii-pacmak-repro.git',

  // added
  deps: ['shx'],
  publishToMaven: {
    javaPackage: 'org.acme',
    mavenGroupId: 'org.acme',
    mavenArtifactId: 'example',
    mavenEndpoint: 'https://s01.oss.sonatype.org',
  },
});

project.synth();
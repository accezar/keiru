# keiru CLI

A POC project evaluating gluegun framework for building a CLI for common frontend tasks.

## Basic pre-requisits in this POC:

- User must be able to clone a repositry via `keiru clone {reponame} --branch={branchName}`
- User must be able to clone a template located on a pre-configured repository via `keiru template {templatename}`;
- User must be able to run actions these on private repositories (user must have privilege access);
- User must be able to setup a pre-defined node package folder structure via `keiru new pkg {packageName}`;
- User must be able to create a pre-defined file template on different paths via `keiru new test {testName} --path=src/tests`;

## About Gluegun

Check out the documentation at https://github.com/infinitered/gluegun/tree/master/docs.

## Publishing to NPM

To package your CLI up for NPM, do this:

```shell
$ npm login
$ npm whoami
$ npm lint
$ npm test
(if typescript, run `npm run build` here)
$ npm publish
```

# License

MIT - see LICENSE

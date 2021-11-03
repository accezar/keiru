# keiru CLI

A POC project evaluating gluegun framework for building a CLI for common frontend tasks.

## Basic pre-requisits in this POC:

- User must be able to create a new project from a template repositry via `keiru new:project`

- User must be able to run actions these on private repositories (user must have privilege access);

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

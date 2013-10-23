# Angular Appx Template

AngularJS Appx Template is a template project that is designed to make it easy for you to get started creating small self-contained reusable angular apps/modules that can interact with other apps and can be combined to make up a large application or applications.

## Requirements

* NodeJS (http://nodejs.org)
* Grunt `npm install grunt -g`

## Development environment

* Bower `npm install bower -g`

``` sh
npm install
bower install
grunt
```

## Project Layout

- project
  - appx
    appx.js
    - controllers
    - directives
    - templates
    - filters
  - public
   index.html
  - test
    - controllers
    - directives
    - filters
  README.md
  Gruntfile.js
  package.json
  bower.json
  .bowerrc

## Run in Development

``` sh
grunt server
open http://localhost:3000
```

## 
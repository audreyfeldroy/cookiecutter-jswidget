# cookiecutter-jswidget

Cookiecutter for a generic JS front-end widget. Think jQuery plugin, but not
jQuery-dependent. 

See https://github.com/audreyr/cookiecutter.

* Free software: MIT license

This is largely based on [jQuery Boilerplate](https://github.com/jquery-boilerplate/jquery-boilerplate),
but without the jQuery dependency.

## Features

* Does not require jQuery
* Support for as many JS/front-end package managers as possible
* Grunt setup with TODO
* Travis CI setup

## Status

Pre-alpha - just needed a repo to stick this into.

## Usage

```
$ cookiecutter https://github.com/audreyr/cookiecutter-jswidget.git
$ ... (fill out the values you want)
$ npm install
```

After generating the project:

* Go to https://travis-ci.org/profile, click [Sync now], and turn on the
  Travis CI hook for your repo.
* Register your package with every supported package index.

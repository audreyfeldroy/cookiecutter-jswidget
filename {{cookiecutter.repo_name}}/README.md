# {{ cookiecutter.project_name }} [![Build Status](https://secure.travis-ci.org/{{ cookiecutter.github_username }}/{{ cookiecutter.repo_name }}.png?branch=master)](https://travis-ci.org/{{ cookiecutter.github_username }}/{{ cookiecutter.repo_name }})

{{ cookiecutter.project_short_description }}

* Free software: [MIT License](http://{{ cookiecutter.github_username }}.mit-license.org/)
* History: [HISTORY.md](https://github.com/{{ cookiecutter.github_username }}/{{ cookiecutter.repo_name }}/blob/master/HISTORY.md)
* How to contribute: [CONTRIBUTING.md](https://github.com/{{ cookiecutter.github_username }}/{{ cookiecutter.repo_name }}/blob/master/CONTRIBUTING.md)

## Demo

Live demo: http://{{ cookiecutter.github_username }}.github.io/{{ cookiecutter.repo_name }}/demo/.

To try out the demo locally:

1. Make sure you have NPM and Grunt installed.
2. Set up {{ cookiecutter.project_name }} and run it:

  ```bash
  git clone https://github.com/{{ cookiecutter.github_username }}/{{ cookiecutter.repo_name }}.git
  cd {{ cookiecutter.repo_name }}/
  npm install
  grunt
  ```

## Usage

1. Include dependencies:

	```html
	<script src="TODO"></script>
	```

2. Include plugin's code:

	```html
	<script src="{{ cookiecutter.repo_name }}.min.js"></script>
	```

3. Call the plugin:

	```javascript
	var {{ cookiecutter.className }} = new {{ cookiecutter.className }}("#my-{{ cookiecutter.repo_name }}", {
		propertyName: "a custom value"
	});
	```

## Team

{{ cookiecutter.project_name }} was created by {{ cookiecutter.full_name }}, with help from these [contributors](https://github.com/{{ cookiecutter.github_username }}/{{ cookiecutter.repo_name }}/graphs/contributors).

### Credits

* [Zeno Rocha](http://zenorocha.com) and [Addy Osmani](http://addyosmani.com) for creating [jquery-boilerplate](https://github.com/jquery-boilerplate/jquery-boilerplate).
* [Audrey Roy](http://www.audreymroy.com) for creating [cookiecutter-jquery](https://github.com/audreyr/cookiecutter-jquery).


### Sites Using This Widget

* None listed yet. Why not be the first?

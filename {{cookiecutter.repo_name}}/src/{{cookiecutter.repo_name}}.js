;(function ( window, document, undefined ) {

    function extend(){
        var i, key;
        for(i=1; i<arguments.length; i++) {
            for(key in arguments[i]) {
                if(arguments[i].hasOwnProperty(key)) {
                    arguments[0][key] = arguments[i][key];
                }
            }
        }
        return arguments[0];
    }

		var {{ cookiecutter.pluginName }} = "{{ cookiecutter.pluginName }}",
				defaults = {
    				propertyName: "value"
    		};

		function {{ cookiecutter.className }} ( element_selector, options ) {
        var element = document.querySelector(element_selector);
				this.element = element;
				this.settings = extend( {}, defaults, options );
				this._defaults = defaults;
				this._name = {{ cookiecutter.pluginName }};
				this.init();
		}

		{{ cookiecutter.className }}.prototype = {
				init: function () {
						console.log("Initializing {{ cookiecutter.className }}");
				},
				yourOtherFunction: function () {
						// some logic
				}
		};

    // Wrapper to allow for multiple instantiations in a single page
    // HACK: This is similar to http://git.io/o8TOIA, but non-jQuery
    //  and adds a property to window. I'm not 100% sure is alright to add to
    //  the global window object. I just needed a global object to use.
    //  There may be edge cases where this doesn't work. File an issue if you
    //  find any problems. Better yet, submit a pull request.
    window.{{ cookiecutter.pluginName }} = function (element, options) {

      // Get the actual DOM element obj, so we can modify it
      var {{ cookiecutter.pluginName }}Element = document.querySelector(element);
      if ({{ cookiecutter.pluginName }}Element) {
        if (typeof {{ cookiecutter.pluginName }}_element["plugin_" + {{ cookiecutter.pluginName }}] === "undefined") {
          // Associate the actual DOM element obj with a new {{ cookiecutter.className }} obj
          {{ cookiecutter.pluginName }}Element["plugin_" + {{ cookiecutter.pluginName }}] = new {{ cookiecutter.className }}(element, options);
        }
      }
      return this;
    };

})( window, document );

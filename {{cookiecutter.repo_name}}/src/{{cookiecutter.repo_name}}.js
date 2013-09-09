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

		function {{ cookiecutter.className }} ( element, options ) {
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

    this.{{ cookiecutter.className }} = {{ cookiecutter.className }};

})( window, document );

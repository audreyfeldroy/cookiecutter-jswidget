module.exports = function(grunt) {

  grunt.initConfig({

    // Import package manifest
    pkg: grunt.file.readJSON("package.json"),

    // Banner definitions
    meta: {
      banner: "/*\n" +
        " *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
        " *  <%= pkg.description %>\n" +
        " *  <%= pkg.homepage %>\n" +
        " *\n" +
        " *  Made by <%= pkg.author %>\n" +
        " *  Under <%= pkg.licenses[0].type %> License\n" +
        " */\n"
    },

    // Lint definitions
    jshint: {
      files: ["src/{{ cookiecutter.repo_name }}.js"],
      options: {
        jshintrc: ".jshintrc"
      }
    },

    // Concat definitions
    concat: {
      dist_js: {
        src: "src/{{ cookiecutter.repo_name }}.js",
        dest: "dist/{{ cookiecutter.repo_name }}.js"
      },
      dist_css: {
        src: "src/{{ cookiecutter.repo_name }}.css",
        dest: "dist/{{ cookiecutter.repo_name }}.css"
      },
      options: {
        banner: "<%= meta.banner %>"
      }
    },

    // Minify definitions
    uglify: {
      dist: {
        src: "dist/{{ cookiecutter.repo_name }}.js",
        dest: "dist/{{ cookiecutter.repo_name }}.min.js"
      },
      options: {
        banner: "<%= meta.banner %>"
      }
    },

    // CSS minification
    cssmin: {
      add_banner: {
        options: {
          banner: '/* {{ cookiecutter.repo_name }} by {{ cookiecutter.github_username }} ~ https://github.com/{{ cookiecutter.github_username }}/{{ cookiecutter.repo_name }} */'
        },
        files: {
          'dist/{{ cookiecutter.repo_name }}.min.css': ['src/{{ cookiecutter.repo_name }}.css']
        }
      }
    }

  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");

  grunt.registerTask("default", ["jshint", "concat", "uglify", "cssmin"]);
  grunt.registerTask("travis", ["jshint"]);

};

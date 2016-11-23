# Bootstrap 4 Prototyping Glue

This starter project brings together the Sass from [Bootstrap 4](http://v4-alpha.getbootstrap.com/) and a set of [Panini](https://github.com/zurb/panini) HTML templates. Panini is a simple, intuitive flat file generator for Gulp that was designed specifically for rapid prototyping.

The simplicity and speed of Panini makes it easy to isolate front-end design (CSS, JS, and HTML patterns) from other aspects of your project, and Panini still allows for HTML partials, external Handlebars helpers, and data from JSON or YAML sources when more complexity is needed.

## Requirements

In order to use this project, your computer needs:

- [NodeJS](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

## Setup

Get started by downloading the project with Git:

```bash
git clone https://github.com/gluethegiant/bootstrap4-prototyping-glue projectname
```

Then open the folder in your command line and install the needed dependencies:

```bash
cd projectname
npm install
```

## Start

Start the project with `npm start`. The Sass and HTML will be compiled in the background as you save changes. Compile minified CSS and JS to your dist folder with `npm build`.

```bash
npm start
npm build
```

## Acknowledgments

Forked from bassjobsen's [empty-bootstrap-project-gulp](https://github.com/bassjobsen/empty-bootstrap-project-gulp), showing that Zurb's Panini is not just for Foundation. The great Panini, and the initial Panini starter projects, were made by [Zurb](https://github.com/zurb).

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

Start the project with `npm start`. The Sass and HTML files will be compiled in the background as you save changes to them. Compile minified CSS and JS to your dist folder with `npm build`.

```bash
npm start
npm run build
```

[Holder](https://github.com/imsky/holder/) is included to display placeholder images. If you want to add your own assets, e.g. images and fonts, don't add them directly to the /dist folder. They will be deleted each time the project is refreshed. Instead, place them inside folders inside of an /assets folder at the root of the project. For example, anything placed in /assets/img will be copied to /dist/img.

## Acknowledgments

Forked from bassjobsen's [empty-bootstrap-project-gulp](https://github.com/bassjobsen/empty-bootstrap-project-gulp), showing that Zurb's Panini is not just for Foundation. The great Panini, and the initial Panini starter projects, were made by [Zurb](https://github.com/zurb).

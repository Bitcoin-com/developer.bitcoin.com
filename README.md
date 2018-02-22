
# Bitcoin.com Bootstrap 4 With Panini Templating

A starter project with reusable Bitcoin.com elements, all wrapped up in Bootstrap 4, Gulp and Browsersync, and with Panini templating engine. This allows you to create and manage simple websites. This is a fork of the Bitcoin.com Bootstrap 4 [https://github.com/bitcoin-portal/bitcoin-bootstrap](https://github.com/bitcoin-portal/bitcoin-bootstrap).

## Common Elements

See index for some common elements to use and build. Additional elements will be added in as new features are added to wallet.bitcoin.com and bitcoin.com.

Please ensure you familiarize yourself with Bootstrap 4 and it's components. Particularly the utility classes. `https://getbootstrap.com/docs/4.0/getting-started/introduction/`



# Bootstrap 4 Prototyping Glue

This starter project brings together the Sass from [Bootstrap 4](http://v4-alpha.getbootstrap.com/) and [Panini](https://github.com/zurb/panini) HTML templates. Panini is a simple, intuitive flat file generator for Gulp that was designed specifically for rapid prototyping.

The simplicity and speed of Panini makes it easy to isolate front-end design (CSS, JS, and HTML patterns) from other aspects of your project, and Panini still allows for HTML partials, external Handlebars helpers, and data from JSON or YAML sources when more complexity is needed.

## Requirements

In order to use this project, your computer needs:

- [NodeJS](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

## Setup

Get started by downloading the project with Git:

```bash
git clone git@github.com:bitcoin-portal/bitcoin-bootstrap-panini.git projectname
```

Then open the folder in your command line and install the Node dependencies:

```bash
cd projectname
npm install
```

## Start

Start the project with `npm start`. Then edit the files in your html/, sass/, and js/ folders. The Sass and HTML files will be compiled in the background as you save changes. To create minified CSS and JS for production on a live website, use `npm run build`.

```bash
npm start
npm run build
```


## How to add bounty

Edit data > bounties including title, excerpt, bts address, and href. 

Create a new bounty page in pages > bounties - see other bounties for examples. 

## Configuration

Several configuration options can be found and edited in the config/config.yml file.

[Holder.js](https://github.com/imsky/holder/) is included by default to display placeholder images. If you want to add your own assets, e.g. images and fonts, don't add them directly to the dist/ folder. They will be deleted each time the project is refreshed. Instead, place assets inside an assets/ folder at the root of your project. As an example, anything placed in assets/img/ will be copied to dist/img/.

#### Margin and Padding Classes

Please make sure to use `mt-5` (margin-top) or `mb-5` (margin-bottom) or `pt-5` (padding-top) or `pb-5` (padding-bottom). Note that the value 5 can change from 1-5. See `https://v4-alpha.getbootstrap.com/utilities/spacing/` 


## Re-use these colour variables

Customized variables can be seen in `src/partials/_variables` which include modifications to global styles, including: 

- $black ($bitcoin black)
- $yellow (bitcoin yellow)
- $gray-400 (bitcoin gray)
- $white

Set classes by colour var (ie `<h3 class="yellow">This would be yellow text</h3>`) for consistency and global editing. 


## Acknowledgments

Forked from [https://github.com/bitcoin-portal/bitcoin-bootstrap](https://github.com/bitcoin-portal/bitcoin-bootstrap) and [https://github.com/gluethegiant/bootstrap4-prototyping-glue](https://github.com/gluethegiant/bootstrap4-prototyping-glue) and bassjobsen's [empty-bootstrap-project-gulp](https://github.com/bassjobsen/empty-bootstrap-project-gulp), showing that Zurb's Panini is not just for Foundation. The great Panini, and the initial Panini starter projects, were made by [Zurb](https://github.com/zurb).

## License

Released under the [MIT License](https://opensource.org/licenses/MIT).

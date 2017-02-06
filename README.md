[![Build Status](https://travis-ci.org/telemark/wcag-report-website.svg?branch=master)](https://travis-ci.org/telemark/wcag-report-website)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# wcag-report-website

[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/wcag-report-website.svg)](https://greenkeeper.io/)
Use your sitemap.xml as base for checking wcag for all pages on your website.

## Installation

Clone or download the repo from GitHub

```sh
$ git clone git@github.com:telemark/wcag-report-website.git
```

## Setup

cd into directory and run the setup script to install all dependencies
``
```sh
$ npm run setup
```

## Usage

Setup the [config-file](config/index.js) with your environment.

Run the script

```sh
$ npm start
```

This will generate an .xlsx-file with all the pages that failed.

## License
[MIT](LICENSE)

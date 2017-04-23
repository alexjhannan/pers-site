# README

## Overview
* Personal website, hosted at alexhannan.com
* Start w/ `meteor`
* Push commits to live w/ `git push heroku master`

### Repo Comments

#### On Styling
This repo uses a BEM-like SCSS notation. Classes are written a la `.whateverComponent--element`.

#### On Structure
Components each have their own styleguide, but the styles live in a separate folder. This should be refactored.

#### On Containers
The containers don't really do anything. One injects static data? Lol. Obviously room for expansion here, since nothing is actually hooked up. This repo could be easily retrofit to take advantage of Redux, since it's got almost nothing in the way of data flow.

### Future Goals?

* Implement a blog
* Allow user tracking w/ log in
* Have the UI react to what blog posts the user has viewed

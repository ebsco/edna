#Edna CSS Framework

It's a custom CSS framework, dig it!


---

**Edna contains:**

 - A custom HTML reset based on:  [normalize.css][2]
 - CSS styling for basic HTML elements
 - A page layout system
 - A widget layout system
 - CSS styling based on [SMACSS][3]

---

**View the [Edna docs][1]**

---

##Working With Edna

Before moving on to custom build processes you will need to install some NPM dependencies

```
npm install
```

Then, depending on what you want to do, you will need one or more of the following build processes.

###Build Edna

Your most basic task. It will get you up and running.

```
grunt build
```
The default task that runs [grunt-contrib-less][5] and [grunt-contrib-cssmin][15].

**Build Options**

```
grunt build --grunticon
```
This runs [grunt-grunticon][4] so you can get some fancy SVG icons.

```
grunt build --lint
```
This runs [grunt-contrib-csslint][16] and [https://github.com/gruntjs/grunt-contrib-sass][17]. Both of these will go through the CSS and show you errors.

```
grunt build --colors
```
This runs [grunt-colorguard][6] which will give you a bunch of information on all the colors used in Edna.

###Build the Documentation

The documentation is built using KSS(Knyle Style Sheets) from the source. Run the following command to generate the docs into ```kss-docs/'''

```
grunt kss-build
```
This runs [grunt-kss][13], [grunt-grunticon][4] and [grunt-contrib-less][5].

###Live Documentation Changes During Development

The documentation pages server as a great sandbox for style development. Using the following command with set up a documentation server that reloads the browser when style files have changed.

```
grunt-kss-dev
```

This runs the `grunt kss-build` task above along with [grunt-browser-sync][14] and [grunt-contrib-watch][8].

###Start a Server

So you can view Edna locally you will need to run this command. It will watch for any changes you might make to local files and recompile the LESS as you go.

```
grunt server
```

This runs a whole slew of things: [grunt-express][9], [grunt-grunticon][4], [grunt-contrib-less][5], [grunt-contrib-cssmin][15] and [grunt-contrib-watch][8]


  [1]: docs/docs.md
  [2]: http://necolas.github.io/normalize.css/
  [3]: http://smacss.com/
  [4]: https://github.com/filamentgroup/grunticon
  [5]: https://github.com/gruntjs/grunt-contrib-less
  [6]: https://www.npmjs.org/package/grunt-colorguard
  [7]: https://github.com/phamann/grunt-css-metrics
  [8]: https://github.com/gruntjs/grunt-contrib-watch
  [9]: https://github.com/blai/grunt-express
  [10]: https://github.com/phamann/grunt-css-metrics
  [11]: https://github.com/DeuxHuitHuit/grunt-contrib-analyze-css
  [12]: docs/docs.md
  [13]: https://github.com/t32k/grunt-kss
  [14]: https://github.com/shakyShane/grunt-browser-sync
  [15]: https://github.com/gruntjs/grunt-contrib-cssmin
  [16]: https://github.com/gruntjs/grunt-contrib-csslint
  [17]: https://github.com/gruntjs/grunt-contrib-sass

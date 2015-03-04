# Edna CSS Framework

It's a custom CSS framework, dig it!

---

**Edna contains:**

 - A custom HTML reset based on:  [normalize.css][2]
 - CSS styling for basic HTML elements
 - A page layout system
 - A widget layout system
 - CSS styling based on [SMACSS][3]

---

**View the <a href="docs/docs.md">Edna docs</a>**

---

## Working With Edna

Before moving on to custom build processes you will need to install some NPM dependencies

```
npm install
```

Then, depending on what you want to do, you will need one or more of the following build processes.

### Build Edna

Your most basic task. It will get you up and running.

```
grunt build
```

[grunt-grunticon][4], [grunt-contrib-less][5], [grunt-contrib-cssmin][15], grunt quality-check

### Build the Documentation

The documentation is built using KSS(Knyle Style Sheets) from the source. Run the following command to generate the docs into ```kss-docs/'''

```
grunt kss-build
```

[grunt-kss][13], [grunt-grunticon][4], [grunt-contrib-less][5]

### Live Docmentation Changes During Development

The documentation pages server as a great sandbox for style development. Using the following command with set up a documentation server that reloads the browser when style files have changed.

```
grunt-kss-dev
```

grunt kss-build, [grunt-browser-sync][14], [grunt-contrib-watch][8]

### Start a Server

So you can view Edna locally you will need to run this command. It will watch for any changes you might make to local files and recompile the LESS as you go.

```
grunt server
```

[grunt-express][9], [grunt-grunticon][4], [grunt-contrib-less][5], [grunt-contrib-cssmin][15], [grunt-contrib-watch][8]

### Linting

Do this often to check out how your CSS fares. Also checks filesize and selector count.

```
grunt quality-check
```

[grunt-contrib-analyze-css][11], [grunt-css-metrics][10]

### Check Edna's Colors

This is a specialized task that one won't need to run that often. The [grunt-colorguard][6] is the important task here.

```
grunt colors
```

[grunt-colorguard][6]


  [1]: http://eae-buzzdev801.epnet.com:8030
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

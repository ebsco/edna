# Edna CSS Framework

<table border="0">
	<tr>
		<td width="100">
			<img src="http://f.cl.ly/items/3K052s0y111v1g3w1C2G/sm-edna.jpg" alt="Edna" style="float:left;border:none;"/>
		</td>
		<td>
			Edna is a custom CSS framework. Dig it!<br/><br/>

			View the <a href="docs/docs.md">Edna docs</a><br/><br/>

			Checkout the <a href="http://eae-buzzdev801.epnet.com:8030">CodeGuide</a> for some working examples of CSS and markup
		</td>
	</tr>
</table>

**Edna contains:**

 - An HTML reset: [normalize.css][2]
 - CSS styling for basic HTML elements
 - A page layout system
 - A widget layout system
 - CSS styling based on [SMACSS][3]

 ---

## Working With Edna

Before moving on to custom build processes, install dependencies

```
npm install
```

Then, depending on what you want to do, you will need one or more of the following build processes.

### Build Edna

Your most basic task. It will get you up and running.

```shell
grunt build
```

grunt lint, [grunt-grunticon][4], [grunt-contrib-less][5]

### Start a Server

So you can view Edna locally you will need to run this command. It will watch for any changes you might make to local files and recompile the LESS as you go.

```shell
grunt server
```

[grunt-express][9], [grunt-grunticon][4], [grunt-contrib-less][5], [grunt-contrib-watch][8]

### Linting

Do this often to check out how your CSS fares. Also checks filesize and selector count.

```shell
grunt lint
```

[grunt-css-metrics][10], [grunt-contrib-csslint][11]

### Check Edna's Colors

This is a specialized task that one won't need to run that often. The [grunt-colorguard][6] is the important task here.

```shell
grunt colors
```

[grunt-colorguard][6], [grunt-css-metrics][7]


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
  [11]: https://github.com/gruntjs/grunt-contrib-csslint
  [12]: docs/docs.md

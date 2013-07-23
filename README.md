#DNA
**DNA** is a simple, yet strapping, CSS framework that uses [LESS][4].
It comes in three parts:

 1. **DNA**
	- An HTML reset based on the [Eric Meyer Reset][3].
	- CSS styling for basic HTML elements.
	- A page layout system.
 2. **Plus**
	- CSS styling referencing classes to create modular .
 3. **Turbo**
	- Here be dragons!

---


##Usage

If your project already incorporates [LESS][4] then using any of the three parts of **DNA** is easy, you just need to add some imports to your main `.less` file.

*Note, depending on where these directories live you may need to update the paths.*

**Using DNA**

```LESS
@import "dna/dna.less";
```

**Using DNA Plus**

```LESS
@import "plus/plus.less";
```

**Using DNA Plus Turbo**

```LESS
@import "turbo/turbo.less";
```

[1]: http://nodejs.org/
[2]: http://gruntjs.com/
[3]: http://meyerweb.com/eric/tools/css/reset/
[4]: http://lesscss.org/
[5]: http://github.com/thewendee
[6]: http://twitter.com/thewendee
[7]: http://github.com/wylie
[8]: http://twitter.com/wylie
[9]: https://github.com/less/less.js/wiki/GUI-compilers-that-use-LESS.js
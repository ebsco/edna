#Mobile-First Approach
---

Edna takes a mobile-first approach with how styles are written. Styles are first meant to target the smallest breakpoint, and use media-queries to target larger screen breaks.

Through [LESS](http://lesscss.org/), we use a [mixin](http://lesscss.org/features/#mixins-feature) to handle abstracting away the `@media` feature. Doing so allows us to target unsupported browsers and provided alternative functionality. For IE8 and below, this means settling on a specified breakpoint that will always be displayed by imposing a minimum width constraint on the page.

Example:
*This example starts the `button` out at a `font-size: 1em;`, and increases to `font-size 1.4em;` at a screen width of `600px`.*
```less
button {
	font-size: 1em;
	
	.respond-min(600px, {
		font-size 1.4em;
	});
}
```

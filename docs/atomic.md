# WIP

Here are some revisions to the above plan!

If we were to completely redo Edna CSS then we would most likely have to completely redo Buzz CSS. We don't want to do that, instead we are looking at a stepped approach to updating Edna & Buzz CSS.

## Step 1

This step revolves mostly around Edna, but it keeps an eye on where we want Buzz to end up. In order to complete this step we need to keep the output of Edna the same as it currently is. In order to do this Edna will be a little bigger than it will be after this whole process.

Convert Edna to a more Atomic class system. **Atom CSS** ([acss.io](http://acss.io/)) has a good paragraph on what exactly Atomic CSS is:

> "Atomic CSS" is a CSS architecture. It is not opinionated; it simply defines a set of classes representing single-purpose styling units.

The class system **Atom CSS** uses is not exactly the direction we want to go. We would like to follow the [Emmet abbreviations](http://docs.emmet.io/cheat-sheet/) for class names. We also would like to have the class names be descriptive while not a 1 to 1 match to the style it represents. That means we would not have this:

```css
.bold {
	font-weight: bold;
}
```

Instead we would have more abstracted class names similar to what is described in this [Smashing Magazine](http://www.smashingmagazine.com/2013/10/challenging-css-best-practices-atomic-approach/) article about Atomic CSS and will look similar to this:

```css
.fz-s {
    font-size: 12px;
}
```
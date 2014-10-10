##LESS
Starting with Edna, and Buzz, we are using the LESS preprocessor to write our CSS. Preprocessors add a lot of new things to basic CSS such as nesting selectors, the use of variables and mixins, which are similar to Javascript functions.

We started using LESS and not SASS because of the HLM project. For that we used Bootstrap, which was built with LESS.

##Dangers
LESS can make it very easy to take just a few lines of LESS CSS and, when compiled, end up with thousands of lines of CSS. Yipes! In order to avoid this some guidelines should be followed.

Of course one might not be able to help not following a guideline or two. Just make sure that what is compiled is clean and concise.

##File Structure
All files for Edna live in one directory, less. All the compiled files, and the import files that create them, live in the root of the Edna repo.

edna
├── less
│   ├── _autocomplete.less
│   ├── _button-group.less
│   ├── _button.less
│   └── _carousel.less
│   └── etc.
├── edna.css
├── edna.min.css
├── edna.ie.css
├── edna.less
├── edna.min.less
└── edna.ie.less

##Variables
Use variables for values that can change easily without messing up an element; colors, font-family, font-size, etc.

edna
└── less
└── _variables.less

##Nesting
Our first guideline is to **keep the number of stringed selectors to no more than 3**. Nesting can be dangerous.

One should use better specificity rather than another selector, or !important.

```CSS

/* THIS IS AN EXAMPLE OF GOOD NESTING */
 
// here is an example of a nested LESS ruleset
.example {
	foo: bar;
	.sub-example {
		foo: bar;
	}
}
 
// and here is the output
.example {
	foo: bar;
}
.example .sub-example {
	foo: bar;
}

```

```CSS
/* THIS IS AN EXAMPLE OF BAD NESTING WHERE WE END UP WITH AN UNRULY STRING OF SELECTORS */
 
// here is an example of a nested LESS ruleset
.first-example {
foo: bar;
.second-example {
	foo: bar;
	.third-example {
		foo: bar;
		.fourth-example {
			foo: bar;
			.fifth-example {
				foo: bar;
			}
		}
	}
}
}
 
// and here is the output
.first-example {
foo: bar;
}
.first-example .second-example {
foo: bar;
}
.first-example .second-example .third-example {
foo: bar;
}
.first-example .second-example .third-example .fourth-example {
foo: bar;
}
.first-example .second-example .third-example .fourth-example .fifth-example {
foo: bar;
}
 
/* WHILE THIS ISN'T HORRIBLE IT IS NOT GOOD */
```

```CSS
/* THIS IS AN EXAMPLE OF BAD NESTING WHERE THINGS JUST GO HAYWIRE */
 
.first-example,
.second-example {
foo: bar;
& & {
	foo: bar;
	&.third-example & {
		foo: bar;
	}
}
}
 
// and here is the output
.first-example,
.second-example {
foo: bar;
}
.first-example .first-example,
.first-example .second-example,
.second-example .first-example,
.second-example .second-example {
foo: bar;
}
.first-example .first-example.third-example .first-example .first-example,
.first-example .first-example.third-example .first-example .second-example,
.first-example .first-example.third-example .second-example .first-example,
.first-example .first-example.third-example .second-example .second-example,
.first-example .second-example.third-example .first-example .first-example,
.first-example .second-example.third-example .first-example .second-example,
.first-example .second-example.third-example .second-example .first-example,
.first-example .second-example.third-example .second-example .second-example,
.second-example .first-example.third-example .first-example .first-example,
.second-example .first-example.third-example .first-example .second-example,
.second-example .first-example.third-example .second-example .first-example,
.second-example .first-example.third-example .second-example .second-example,
.second-example .second-example.third-example .first-example .first-example,
.second-example .second-example.third-example .first-example .second-example,
.second-example .second-example.third-example .second-example .first-example,
.second-example .second-example.third-example .second-example .second-example {
foo: bar;
}
 
/* THAT IS JUST CRAZY, DON'T END UP WITH SOMETHING LIKE THIS IN YOUR CSS */
```


##Comments
Again, comments are awesome, use them.

Single line comments are stripped from LESS when compiled. Use these more for comments to other developers, or yourself.
```CSS
// comment
```

##Declaration Order
For readability, and to keep things in order, let's put our declarations in a specific order. The following comments can be used as a snippet (thanks Sublime Text), and the lists below can help show you where declarations should live.
```CSS
// Positioning
 
// Box-model
 
// Typography
 
// Visual
 
// Misc
```

**Position**  | **Box-model**          | **Typography**      | **Visual**                 | **Misc**
------------- | ---------------------- | ------------------- | -------------------------- | ------------
position      | display                | font                | background                 | resize
top           | float                  | font-family         | background-attachment      | appearance
right         | width                  | font-size		     | background-color			  | user-select
bottom        | height                 | font-smoothing      | background-image			  | interpolation-mode
left          | max-width              | osx-font-smoothing  | background-position		  | direction
z-index       | max-height             | font-style			 | background-repeat		  | marks
              | min-width              | font-weight  		 | background-size			  | page
              | min-height             | hyphens		 	 | border			          | set-link-source
              | padding                | src                 | border-collapse			  | unicode-bidi
              | padding-top            | line-height         | border-top			      | speak
              | padding-right          | letter-spacing      | border-right               |
              | padding-bottom         | word-spacing        | border-bottom              |
              | padding-left           | color               | border-left                |
              | margin                 | text-align          | border-color               |
              | margin-top             | text-decoration     | border-image               |
              | margin-right           | text-indent         | border-top-color           |
              | margin-bottom          | text-overflow       | border-right-color         |
              | margin-left			   | text-rendering      | border-bottom-color        |
              | margin-collapse        | text-size-adjust    | border-left-color          |
              | margin-top-collapse    | text-shadow         | border-spacing             |
              | margin-right-collapse  | text-transform      | border-style               |
              | margin-bottom-collapse | word-break          | border-top-style           |
              | margin-left-collapse   | word-wrap           | border-right-style         |
              | overflow               | white-space         | border-bottom-style        |
              | overflow-x             | vertical-align      | border-left-style          |
              | overflow-y             | list-style          | border-width               |
              | clip                   | list-style-type     | border-top-width           |
              | clear				   | list-style-position | border-right-width         |
              |						   | list-style-image    | border-bottom-width        |
              |						   | pointer-events      | border-left-width          |
              |						   | cursor              | border-radius              |
              |						   |                     | border-top-right-radius    |
              |						   |                     | border-bottom-right-radius |
              |						   |                     | border-bottom-left-radius  |
              |						   |                     | border-top-left-radius     |
              |						   |                     | border-radius-topright     |
              |						   |                     | border-radius-bottomright  |
              |						   |                     | border-radius-bottomleft   |
              |						   |                     | border-radius-topleft      |
              |						   |                     | content                    |
              |						   |                     | quotes                     |
              |						   |                     | outline                    |
              |						   |                     | outline-offset             |
              |						   |                     | opacity                    |
              |						   |                     | filter                     |
              |						   |                     | visibility                 |
              |						   |                     | size                       |
              |						   |                     | zoom                       |
              |						   |                     | transform                  |
              |						   |                     | box-align                  |
              |						   |                     | box-flex                   |
              |						   |                     | box-orient                 |
              |						   |                     | box-pack                   |
              |						   |                     | box-shadow                 |
              |						   |                     | box-sizing                 |
              |						   |                     | table-layout               |
              |						   |                     | animation                  |
              |						   |                     | animation-delay            |
              |						   |                     | animation-duration         |
              |						   |                     | animation-iteration-count  |
              |						   |                     | animation-name             |
              |						   |                     | animation-play-state       |
              |						   |                     | animation-timing-function  |
              |						   |                     | animation-fill-mode        |
              |						   |                     | transition                 |
              |						   |                     | transition-delay           |
              |						   |                     | transition-duration        |
              |						   |                     | transition-property        |
              |						   |                     | transition-timing-function |
              |						   |                     | background-clip            |
              |						   |                     | backface-visibility        |
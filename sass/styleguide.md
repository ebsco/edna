#General Guidelines

Code should look like it was written by one developer, not many different developers. Once these guidelines and patterns are established, strictly enforce them.

##General Syntax

- Use tabs for indenting, not spaces.
- Nested elements should be indented once
- Always use double quotes, never single quotes, on attributes


#HTML Guidelines

Don’t omit optional closing tags Self closing elements should contain the optional forward slash at the end `/>` Don't use `<br />` tags for paragraphs, use `<p>`

###Doctype

Simple, we only work with the HTML5 doctype.

    <!DOCTYPE html>

###Character Encoding

Placed below the `<head>` element and before the `<title>` element should be your character encoding. This will ensure proper rendering of content.

    <meta charset="UTF-8" />

###Attribute Order

To help read markup more easily HTML attributes should come in this order.

- class
- id, name
- data-*
- src, for, type, href
- title, alt
- aria-*, role

###JavaScript Generated Markup

Shouldn't be done. No markup should be generated from any javascript.


##CSS Format

One selector per line in multi-selector rulesets

- Include a single space before the opening bracket of a ruleset
- One declaration per line
- One level of indentation per declaration
- One space after the colon of a declaration
- Use hex values rather than rgb(a) for color values
- Use lowercase and shorthand for hex values
- When using quotes, use single quotes
- Quote attribute values in selectors
- Do not specify units when values are zero
- Include a space after commas in comma-separated properties
- End declaration lines with a semicolon
- Closing bracket should be on its own line
- Include one blank line between each ruleset
- Character entities are preferred whenever feasible. W3C reference list is here (mouseover the desired character).

Example:

    /* BAD CSS */
    .example1,.example2,.example3
    {
    position:relative;top:0px;left:10px;
    background-color: #FFFFFF;
    font-family:Helvetica,Arial,sans-serif}
    .example4[type=text]
    {
    border: 1px solid #CCCCCC
    
    }


    /* GOOD CSS */
    .example1,
    .example2,
    .example3 {
        position: relative;
        top: 0;
        left: 10px;
        background-color: #fff;
        font-family: Helvetica, Arial, sans-serif;
    }
     
    .example4[type="text"] {
        border: 1px solid #ccc;
    }

###Inline vs Internal vs External

As a rule we want all of our CSS in external stylesheets. There are some exceptions to this rule though.

I don't currently have a use case for Internal stylesheets, though I suppose if there is no other way to bring styles into an HTML document, then this is fine.

Inline styles should only be used when something needs to be styled dynamically. For example if you open a modal and want it centered on the page, then inline styles are the best.

If you need to toggle some styles then they should be associated with a class, and not inline.

Here is an example of bad stuff:

```html
<!-- BAD HTML WITH INLINE STYLES -->
<div class="error" style="display: none;">ERROR</div>
```

Here is an example of the above done correctly:

```css
/* GOOD EXTERNAL CSS */
.hide {
    display: none;
}
```
```html
<!-- GOOD HTML -->
<div class="error hide">ERROR</div>
```

Now, lets look at positioning a modal:

```css
/* GOOD EXTERNAL CSS */
.modal {
    position: absolute;
}
```

```html
<!-- GOOD HTML WITH PROPER USE OF INLINE STYLES -->
<div class="modal" style="left: 200px; top: 500px;">Greetings!</div>
```

###Prefixed Properties

When using vendor prefixed properties, indent each property such that the declaration's value lines up vertically for easy multi-line editing.

```css
.selector {
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, .15);
     -mos-box-shadow: 0 1px 2px rgba(0, 0, 0, .15);
          box-shadow: 0 1px 2px rgba(0, 0, 0, .15);
}
```


###Comments

Comments are awesome, and you should not forget to use them. Great code comments convey context or purpose. Do not simply reiterate a component or class name.

Place comments on a new line above their subject
Keep line-length to a sensible maximum, e.g., 80 columns

###Multi-Line Comments

LESS will keep these comments through the compilation process, so make liberal use of comments to break CSS code into discrete sections.

```css
/* comment */
```

###Class Names

Keep classes lowercase and use dashes (not underscores or camelCase).

```css
/* BAD CLASS NAMES */
.className {...}
.class_name {...}
```

```css
/* GOOD CLASS NAMES*/
.class-name {...}
```

Note: Classes prefixed with .evt- are reserved for JavaScript events so do not apply any CSS to them.

###Selectors

- Use classes over generic element tag for optimum rendering performance.
- Keep selectors short and strive to limit the number of elements in each selector to three.
- Scope classes to the closest parent

###Pseudo-Classes

Know the difference between these and pseudo-elements

###Pseudo-Elements

Know the difference between these and pseudo-classes

- Use double colons with single colons as a fallback.

    .class:after,
    .class::after {...}

###Organization

- Organize sections of code by component
- When using multiple CSS files, break them down by component instead of page


#LESS

Starting with Edna, and Buzz, we are using the LESS preprocessor to write our CSS. Preprocessors add a lot of new things to basic CSS such as nesting selectors, the use of variables and mixins, which are similar to Javascript functions.

We started using LESS and not SASS because of the HLM project. For that we used Bootstrap, which was built with LESS.

###Dangers

LESS can make it very easy to take just a few lines of LESS CSS and, when compiled, end up with thousands of lines of CSS. Yipes! In order to avoid this some guidelines should be followed.

Of course one might not be able to help not following a guideline or two. Just make sure that what is compiled is clean and concise.

###File Structure

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
				
###Variables

Use variables for values that can change easily without messing up an element; colors, font-family, font-size, etc.

    edna
    └── less
    └── _variables.less
				
###Nesting

Our first guideline is to keep the number of stringed selectors to no more than 3. Nesting can be dangerous.

One should use better specificity rather than another selector, or `!important`.
Toggle this example

```css
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

Toggle this example

```css
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
Toggle this example
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

###Comments

Again, comments are awesome, use them.

Single line comments are stripped from LESS when compiled. Use these more for comments to other developers, or yourself.

```css
// comment
```

###Declaration Order

For readability, and to keep things in order, we have a strict declaration order we follow. We use CSS Comb for this, which you can install as a plugin for Sublime Text 2 and Atom. Check out the Getting Started with Buzz Confluence page for links.


#Widget Components

###Base Widgets

*Base widgets* are simple widgets. These consist of one thing, such as an image, or a heading, or a list. They can live on their own, or be part of a composite widget. These could also be called child widgets.

###Composite Widgets

*Composite widgets* contain base widgets. These will be for things such as a result item, or a searchbar that includes an input, buttons and a dropdown. These could also be called parent widgets.

###Widget Building Rules

Parent widgets, apply layout styles for the child widgets inside it.

Parent widgets classes shouldn't affect child widgets styles.

Styles for child widgets should live on that widgets stylesheet, nbot the stylesheet for the parent widget.

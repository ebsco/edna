**Page Layout**
---

Edna now uses a 12-column grid for page layout! This system should be much easier than our last layout system for folks to understand and use.

To make a grid you should start out with an element with the class name `grid`, this sets up the grid row.
Inside this grid row you add the grid columns. These grid columns are another element with the class name `col#` where the # is a number 1-12. The numbers in the column classes should to total 12.

Here is an example

```
	<div class="grid">
		<div class="col4"></div>
		<div class="col8"></div>
	</div>
```
Below you can see all the columns as well as some examples of two-column, three-column, four-column, and five-column designs.

**Columns**
Markup:

```
	<div class="grid">
		<div class="col12"></div>
	</div>
```
	
**Two Column Layout**

```
	<div class="grid">
		<div class="col2"></div>
		<div class="col10"></div>
	</div>
```

**Three Column Layout**

```
	<div class="grid">
		<div class="col3"></div>
		<div class="col6"></div>
		<div class="col3"></div>
	</div>
```

**Four Column Layout**

```
	<div class="grid">
		<div class="col3"></div>
		<div class="col3"></div>
		<div class="col3"></div>
		<div class="col3"></div>
	</div>
```

**Five Column Layout**
	
```
	<div class="grid">
		<div class="col2"></div>
		<div class="col2"></div>
		<div class="col4"></div>
		<div class="col2"></div>
		<div class="col2"></div>
	</div>
```

**Full Page Grid**
The `.full-page` class is used when you want to ignore the padding on either side of the browser window. This removes margin on the right and left the same width as the `@side-gutter` variable.

```
	<div class="grid full-page">
		<div class="col2"></div>
		<div class="col2"></div>
		<div class="col4"></div>
		<div class="col2"></div>
		<div class="col2"></div>
	</div>
```

**No Container Grid**
The `.no-container` class is used when you have no container for the grid that has any side padding.

```
	<div class="grid no-container">
		<div class="col2"></div>
		<div class="col2"></div>
	   <div class="col4"></div>
		<div class="col2"></div>
		<div class="col2"></div>
	</div>
```

**Max-Width Grid**
The `.max-width` class sets a max-width to the grid and aligns it to the center of the browser.

```
	<div class="grid max-width">
		<div class="col2"></div>
		<div class="col2"></div>
		<div class="col4"></div>
		<div class="col2"></div>
		<div class="col2"></div>
	</div>
```

**Funky Grid Patterns**
Here we use classes on the columns to cause some funky wrapping of columns at small and medium breakpoints.
 
```
	<div class="grid">
		<div class="col4 md-col6"></div>
		<div class="col4 md-col6"></div>
		<div class="col4 md-col12"></div>
	</div>
```
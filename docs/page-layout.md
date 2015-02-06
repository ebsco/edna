**Page Layout**
---

Edna has some predetermined layouts that you can use in your designs. We list the dimensions of the layouts below. A single page can up to five columns in which to store content. To get the hang of this let's build a page with a three-column layout.

**Let's Add Some Structure To A Page**
First we need those parent and child elements on the page.

    <div>
    	<div></div>
    	<div></div>
    	<div></div>
    </div>

Each of the three child `div` will be a column in our three-column layout and they all get the same class `.col`

    <div>
    	<div class="col"></div>
    	<div class="col"></div>
    	<div class="col"></div>
    </div>

Now is when we add a class to the parent element. This class will tell the three columns what their width will be.

    <div class="l3-p5">
    	<div class="col"></div>
    	<div class="col"></div>
    	<div class="col"></div>
    </div>

This will give us a layout with three columns, each with a width of 33%. 

**Let's Break Apart That Parent Class**
This class is made up of two parts.

 - The first part, `l3` tells you that you are creating a three-column layout. `l2` for two columns, `l4` for four, etc.
 - The second part is the pattern of those columns. In the example above, `p5` we end up with columns that are 33% wide. 
	 - One can use any of these percentages, so long as the total of them equals 100% (unless you are using the 33% & 66%).
	 - Following is a list of all the percentages available
		 - 20%
		 - 25%
		 - 33%
		 - 40%
		 - 50%
		 - 60%
		 - 75%
		 - 80%
		 - 100%


Here is a full breakdown of all the column widths currently available in Edna

 - `l1`
	 - 100%
 - `l2`
	 - `p1` - 80% / 20%
	 - `p2` - 75% / 25%
	 - `p3` - 66% / 33%
	 - `p4` - 60% / 40%
	 - `p5` - 50% / 50%
	 - `p6` - 40% / 60%
	 - `p7` - 33% / 66%
	 - `p8` - 25% / 75%
	 - `p9` - 20% / 80%
 - `l3`
	 - `p1` - 60% / 20% / 20%
	 - `p2` - 50% / 25% / 25%
	 - `p3` - 40% / 40% / 20%
	 - `p4` - 40% / 20% / 40%
	 - `p5` - 33% / 33% / 33%
	 - `p6` - 25% / 25% / 50%
	 - `p7` - 25% / 50% / 25%
	 - `p8` - 20% / 20% / 60%
	 - `p9` - 20% / 60% / 20%
 - `l4`
	 - `p1` - 40% / 20% / 20% / 20%
	 - `p2` - 25% / 25% / 25% / 25%
	 - `p3` - 20% / 20% / 20% / 40%
	 - `p4` - 20% / 20% / 40% / 20%
	 - `p5` - 20% / 40% / 20% / 20%
 - `l5`
	 - `p1` - 20% / 20% / 20% / 20% / 20%

**Padding**
We use padding on each layout row and cell within it so things don't butt up against each other. Between layout rows we have **40px** of `padding-bottom`. On the sides of the layout rows we have **25px** of `padding-left` and `padding-right`.

In order to give space between the columns in the layout rows we apply a `padding-left` of **70px**. This `padding-left` is removed from the `:first-child`.


####**Some Notes**
- Even if you are using a one-column layout you should still have a parent and child element.
- These are not to be used as anything other than page layout. We have classes specifically for widget layout.

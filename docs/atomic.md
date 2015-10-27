# In The Beginning
In the beginning Edna was supposed to be a handy tool that set the base CSS for Buzz and new Ebsco interfaces. Since it's inception Edna has grown and grown. Now the line between Edna and Buzz has become grayer and wider. We have styles in Edna that should live in Buzz and vice-versa and the naming conventions in each have begun to get muddled.

Before we get too far down the rabbit hole it's time we made a change!

## What Should Happen?
The proposal is to transform Edna into an [_Atomic CSS_](http://www.smashingmagazine.com/2013/10/challenging-css-best-practices-atomic-approach/) framework, and to use a [_BEM_](http://getbem.com/naming/) naming convention for Buzz.

Doing all of this work will be time consuming and a major overhaul to our CSS, but is a needed change to combat some of the issues we are seeing with our current CSS scheme. 

### Issues We are Seeing
- **specificity** issues in Buzz thanks to class names already being used in Edna.
- we **can't easily reuse** blocks of CSS.
- we have a lot of **bloated stylesheets** in both Edna and Buzz.
- we have **no naming convention** in either Edna or Buzz. Everything has become all willy-nilly.

#### How Do We Solve These Issues?
- The **specificity** issues will be solved in a couple of ways:
  - Classes in Edna will be different than those in Buzz. Using the _Atomic CSS_ will give us abstracted class names that only trickle up to Buzz by way of LESS mixins.
  - _BEM_ in Buzz will help create more specific class names that are used in less often.
- In Edna we will be able to **reuse blocks** of CSS easier because the Atomic class names will do minimal work and have no bloat within each declaration block. 
- **Removing the bloat** and having smaller declaration blocks in Edna will instantly cut down on bloat and give us more reusable declarations. This should also trickle up into Buzz.
- Both Edna and Buzz will use separate **naming conventions**, which will also help cut down on our specificity issues.
  - The Edna class names will follow the [Emmet](http://docs.emmet.io/cheat-sheet/) naming convention.
  - Buzz will use the [_BEM_](http://getbem.com/naming/) naming convention.

## How Do We Make This Happen
Changing over Edna and Buzz is no small task, but with some early planning and lots of collaboration it will go smoothly and quickly. 

Transitioning in **steps** is the way to go!

### Step 1

This step deals almost entirely with Edna going atomic. We will of course keep an eye on Buzz and where we want it to end up. 

To complete this step we will transition Edna over to an _Atomic CSS_ structure. This will take some team planning on how we break things apart and build them back up again. Once this initial planning is complete, converting actual Edna stylesheets should be a breeze. So we keep our changes restricted to only Edna we will be keeping the output of Edna the same as it currently is. That way Buzz can, for the most part, just ingest Edna as it always has and still function. Some stylesheet imports may need to change, but that's a minor change.

This step will result in an Edna that is larger than we should finally end up with after all the transitioning is complete. Edna will get slimmed down in the following steps.

### Step 2

In step 2 we take on Buzz. The _BEM_ naming convention comes into heavy play here and our specificity issues become a thing of the past!

Within our Buzz widgets we bring up some of the molecules and atoms, as LESS mixins, from Edna. This will clean out some of the chaff currently living in Buzz widgets. 

Edna will remain untouched in this stage. Buzz may become a little bloated, but that will be cleaned up in the next step.

### Step 3

The third step cleans everything up. All the bloat in Edna that was added to make the output the same as always should be removed. Any extra bloat in Buzz will also be removed. Things will be pretty light now, and easier to manage as we continue to grow.

Double check things within the interface.

### Step 4

Check all the work done and make sure it's all working correctly. Enjoy!

## Other Benefits To Completing This Work
- Doing this _Atomic CSS_ work in Edna will help us on our path towards a Living CodeGuide, Material Design type of thing.
- Cleaning up our naming conventions and using ones already in use by the industry will help with future hires.
- This will also help Edna become a better open source framework. 
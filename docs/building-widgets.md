#Building Widgets

##Widget Components

**Base Widgets**
Base widgets are simple widgets. These consist of one thing, such as an image, or a heading, or a list. They can live on their own, or be part of a composite widget. These could also be called child widgets.

**Composite Widgets**
Composite widgets contain base widgets. These will be for things such as a result item, or a searchbar that includes an input, buttons and a dropdown. These could also be called parent widgets.

##Widget Building Rules
- Parent widgets, apply layout styles for the child widgets inside it.
- Parent widgets classes shouldn't affect child widgets styles.
- Styles for child widgets should live on that widgets stylesheet, not the stylesheet for the parent widget.
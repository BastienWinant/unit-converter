# Solo Project: Unit Converter
## Module 3: Making websites interactive
### Project Description
#### HTML

All the page's content is contained inside <main> tags, the body's only direct child in the DOM.
This main container is organized with a simple structure

Inside main, the page is structured in a simple format consisting of a <header> and a <div> container, superposed vertically in that order.

Most notably, the static content in the header includes the <input> and <button> elements, via which the user can launch the conversion process.

The <div> container is left blank in the static HTML file, as its content is generated purely dynamically via JavaScript.

#### CSS

Due to the simple top-down structure of the provided design, most of the CSS targeting is done on HTML tags directly rather than custom classes.

Flexbox and Grid are use to ensure proper alignment for both static and dynamic HTML content, as well as providing responsiveness.

#### JS

The logic for generating and displaying the <div> container's HTML is encapsulated in the *updateContent()* function. When called, this function reads in the value in the header's <input> field and calls one of two subsequent functions, depending on whether the user provided a value in the input field.

The *generateMeasurementsCards()* function handles the case when a valid numerical input is provided, and the conversion computations can be launched.
Via a for loop, <section> elements are created that display the converted values in their HTML. These new elements are then added as children of the previously emptied <div> container.

The *generateErrorCard()* function warns the user when the input field has been left blank, providing no value to be converted.
In this case, a single <section> element is created containing a simple error <p> in its HTML.
The element is similarly added as the <div> container's only direct child.

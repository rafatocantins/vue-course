# vue-course

# How to run Vue.js locally

    1- Go to the vue.js website and download the development script or cdn
    2- Add the vue script to your html file 
    3- open your html file on the browser and you are ready to use Vue.Js

# Understanding Directives

    - List of directives 
        - v-on
        - v-bind - to bind the data to the html ex: 'href', 'src'
        - v-once - if we for some case need to show only the initial value
        - v-html - for rendering html content from data

# Exercise One - Understanding the Basics

    - Check exercise on branch vue-exercise
        1) Fill the <p> below with your Name and Age - using Interpolation
        2) Output your age, multiplied by 3
        3) Call a function to output a random float between 0 and 1 (Math.random())
        4) Search any image on Google and output it here by binding the "src" attribute
        5) Pre-Populate this input with your name (set the "value" attribute)
        Bonus) Fill the <h1> below with your Name - using Interpolation - and remain with the first value if a method get's called
        Bonus) Another way to output your age, multiplied by 3
        Bonus) Change your name with an input method

# Listening to Events - Part 1

    - Check branch listening-events
    - Add a button and use the v-on directive to listen to an event
        - You can you click | mouseenter | mouseleave etc...   
    - Getting Event data from the Event Object  
    - Passing my own arguments with events
    - Modifying an event - with event modifiers
    - Listening to Keyboard Events 

# Exercise Two - Listening Events

    - Check branch Listening events exercise
        1) Show an alert when the Button gets clicked
        2) Listen to the "keydown" event and store the value in a data property (hint: event.target.value gives you the value)
        3) Adjust the example from 2) to only fire if the "key down" is the ENTER key

# Listening to Events - Part 2

    - Check branch listening-events
    - Writing Javascript Code in Templates
    - Using two-way-binding - v-model
    - Reacting to changes with computed properties
    - The watch object - An alternative to computed
    - The shorthand code 
        - Vue will recognize the directives in a efficient and shorthanded way
            - v-on | @ | ex: <button @click>
            - v-bind | :  ex: <p :href>

# Reactive Properties Exercise

    - Check branch reactive-properties-exercise
        1) Show a "result" of 'not there yet' as long as "value" is not equal to 37 - you can change "value" with the buttons. Print 'done' once you did it
        2) Watch for changes in the "result" and reset the "value" after 5 seconds (hint: setTimeout(..., 5000)

# Dinamic Styling with CSS Classes - Basics

    - Check branch dinamic-styling-classes
    - bind classes with data properties | ex: :bind="{class: data or event}"
    - using Objects
    - using Names

# Setting Styles Dinamically ( without using css classes )

    - Check branch setting-styles-dinamically
    - use of binding directive :style to change the styles automatically
    - Setting Elements with the Array 

# Stylling Exercises

    - Check branch stylling-exercises
        1) Start the Effect with the Button. The Effect should alternate the "highlight" or "shrink" class on each new setInterval tick (attach respective class to the div with id "effect" below)
        2) Create a couple of CSS classes and attach them via the array syntax
        3) Let the user enter a class (create some example classes) and attach it
        4) Let the user enter a class and enter true/ false for another class (create some example classes) and attach the classes 
        5) Repeat 3) but now with values for styles (instead of class names). Attach the respective styles.
        6) Create a simple progress bar with setInterval and style bindings. Start it by hitting the below button.

# Loops and Conditionals

    -check the branch loop-and-conditional
        Keep in mind that you can extract different levels of details when looping. You can only get the individual elements of a list. Or elements + index. Or (when looping through object keys) also value + keyName + index).
        1) Hook up the button to toggle the display of the two paragraphs. Use both v-if and v-show and inspect the elements to see the difference
        2) Output an <ul> of array elements of your choice. Also print the index of each element.
        3) Print all key-value pairs of the following object: {title: 'Lord of the Rings', author: 'J.R.R. Tolkiens', books: '3'}. Also print the index of each item.
        4) Print the following object (only the values) and also create a nested loop for the array: {name: 'TESTOBJECT', data: [1.67, 1.33, 0.98, 2.21]} (hint: use v-for and v-if to achieve this)
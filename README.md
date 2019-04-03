# vue-course

# How to run Vue.js locally

    1- Go to the vue.js website and download the development script or cdn
    2- Add the vue script to your html file 
    3- open your html file on the browser and you are ready to use Vue.Js

# Understanding Directives

    - List of directives 
        - v-on
        - v-bind - to bind the data to the html ex: 'href'
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

# Listening to Events

    - Add a button and use the v-on directive to listen to an event
        - You can you click | mouseenter | mouseleave etc...   
    - Getting Event data from the Event Object  
    - Passing my own arguments with events
    - Modifying an event - with event modifiers
    - Listening to Keyboard Events 
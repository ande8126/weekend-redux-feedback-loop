# Class feedback sample

An online app that allows users to rate a course they're taking, with numeral scores for feeling, understanding and support, plus a comments section.

## Built as part of Prime assignment

This app was started as a weekend challenge assignment from my courswork at Prime Digital Academy. The "base-mode" assignment version of this app is built with React and Redux, with a Express.js POST route that connects the scores to a SQL database.


# To-do

[x] make the database
[x] npm install
[x] npm run server
[x] npm run client
[x] create multi-part form that allows users to leave feedback for today
    [x] Make Header component
    [x] Make Feeling component
    [x] Make Understanding component
    [x] Make Support component
    [x] Make Comments component
    [x] Make Review component
    [x] Make ConfirmSubmit component
[x] Bring in HashRouter and Route
[x] Make Router component
[x] Write reducer in Index.js in which state is an object/object will take in new properties with spread ( state = [ ...state, feeling: action.payload ])
[x] Build out Feeling component
    [x] Header
    [x] How are you feeling today?
    [x] input for number b/t 1 and 5
    [x] "Next" button that links to Understanding
    [x] dispatch to Redux store
    [x] Add to reducer object
[x] Build out Understanding component
    [x] Header
    [x] How well are you understanding the content
    [x] input for number b/t 1 and 5
    [x] "Next" button that links to Support
    [x] dispatch to Redux store
    [x] Add to reducer object
[x] Build out Support component
    [x] Header
    [x] How well are you being supported?
    [x] input for number b/t 1 and 5
    [x] "Next" button that links to Comments
    [x] dispatch to Redux store
    [x] Add to reducer object
[x] Build out Comments component
    [x] Header
    [x] Comments h2
    [x] input for number b/t 1 and 5
    [x] "Next" button that links to Review
    [x] dispatch to Redux store
    [x] Add to reducer object
[x] Build out Review component
    - NO HEADER
    [x] useSelector to bring in survey object
    [x] Display to DOM
    [x] Submit button
    [x] POST route to send to database when submit is clicked


# Single Page app
Modern web apps are often spas ([single page app](https://en.wikipedia.org/wiki/Single-page_application))

A single page app consists of a front end and a back end. 
The front end tpically is download and executed in the browser. It typically consists of html, css, and javascript. It likely uses a front end javascript framework such as [react](https://reactjs.org/), angular, or vue.  The front end contains the logic for how the gui and screens looks.
The front end  makes [ajax](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started) calls to the backend to fetch data through a [rest](https://developer.mozilla.org/en-US/docs/Glossary/REST) api.  Typically rest apis return the data in a format such as json.  The backend api typically stores data in a database. In this case, the rest api code uses a database client and it communicates with the database server.    


The back end can be written in many different languages. Here are some popular backend rest api frameworks and languages.  
1. nodejs (express, hapi) - javascript 
2. rails - ruby 
3. django - python

Rest apis can also be host with [serverless functions](https://github.com/andrewt3000/web_development#serverless-functions) at cloud providers.  

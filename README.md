# nodejs-intro-project
Intro in Nodejs and Express using Mustache Template Engine - is a Udemy course that helped me to understand better how Nodejs and Express work.
Udemy course link:
https://www.udemy.com/course/intro-to-node-js-express/

Use Terminal:
1. Make sure you have Nodejs (LTS version) installed on your machine. For this check node and npm (package manager for Nodejs) version in your terminal: 
    $ node -v
    $ npm -v

2. Create the package.json file: 
    $ npm init

3. Install express: 
    $ npm install express --save

4. Create a .gitignore file and add node_modules to ignore it.

5. Create index.js file for nodejs server, import express, add http requests and set the port.

6. To run the server run this command in terminal:
    $ node index.js
    
If you have an error: address already in use :::3000, kill the port first and than run the server again. Change 3000 to your port number.
    $ sudo kill -9 $(sudo lsof -t -i:3000)

Or add to your .bashrc this code and use $ findandkill 3000 in terminal:
ex. to kill a process by giving a port (findandkill 3000)
function findandkill() {
  lsof -i TCP:$1 | grep LISTEN | awk '{print $2}' | xargs kill -9
}

7. You can add different response types: string (raw data), json object, HTML content.
Use Templating Engine (Ejs, Handlebars, Jade, Mustache or Pug) to render html pages - you can inject data to HTML templates and render data dinamically.
Create a views folder in project folder and add a home.mustache file. 
In index.js file import path and set the views folder path.

8. Install the mustache template engine and import it in index.js file:
    $ npm install hjs --save
    $ npm install hogan-middleware --save

9. Create a public folder for static assets (css, ja, images) and set the path to it in index.js

10. Create a routes folder and move all http request from index.js  


# How To Start a Project

This is an example of how to set up a type react/node project.

## Create a project directory

``` console
#create folder for project
mkdir my_project
#change directory to project folder
cd my_project
```

## Create front end
Create a react project named "web" using [create react app](https://create-react-app.dev/docs/getting-started).  

```
# create react typescript project named "web"
npx create-react-app web --template typescript
cd web
npm start
```
<!-- Or Create a react/redux project named "web" using [redux tookit](https://redux.js.org/introduction/installation)

```
# Redux + Plain JS template
npx create-react-app web --template redux

# Redux + TypeScript template
npx create-react-app web --template redux-typescript
```
--->
Change the title of the app in 
```
web/public/index.html
```
Delete the icons from the file system and manifest.json.  

## Setup UI 
Install [material ui](https://mui.com/material-ui/getting-started/installation/)
```
npm install @mui/material @emotion/react @emotion/styled
```

## Install react router
```
npm install react-router-dom@6
```
[get started with react router](https://reactrouter.com/docs/en/v6/getting-started/overview)  

Modify the index.js to contain the routes.  
<!--- -authentication? auth0, jwt. (install jwt on server side) --->


## Create a layout
Modify App.js to contain header/menus and Outlet for pages.  
Use css grid? or Layout/Grid/Menu of your ui package?

## Setup Ajax library
<!-- Install fetch api library  
 ``` console
npm install --save isomorphic-fetch  
```--->
[Proxy api requests in developement](https://create-react-app.dev/docs/proxying-api-requests-in-development/)
In package.json 
```
"proxy": "http://localhost:3001",  
```
Or use environment variables to specify the server url which can be different in development and production.  

Create common code to connect to api that handles authentication.   

	
## Setup api
Node / Express api
```
# from the /my_project directory
npm install express-generator -g
# creates a project in directory "api"
express api
# copy react git ignore to api
cp web/.gitignore api/.gitignore
cd api
npm install
npm start
```
change port from 3000, to 3001 to avoid conflicting with react app.   

## setup nodemon: 
```
 npm i nodemon --save-dev
```
change package.json start from node to nodemon.    

<!-- ## Api authentication
```
npm install jsonwebtoken  
```
login function returns web token.  
https://github.com/andrewt3000/metal_view/blob/master/server/routes/core/login.js

in routing verify the token.
https://github.com/andrewt3000/metal_view/blob/master/server/app.js
--->

### Setup database
Choose db? sql, no-sql.  Native driver? ORM?  
db config. connection pooling?

## Put project in source control  
remove .git in web project.  
create .gitignore to ignore node_modules for server.  
```
git init my_project   
cd my_project
git add api web
````

create project on github (check private/public!!)  
```
git remote add origin https://github.com/my_user_name/my_project.git
```
# Getting Started with Create React App

#  React Router
#  React Portal

# Understanding React Router


# npx create-react-app portfolio
# npm install react-router-dom
# npm install react-burger-menu


# Routing is required to navigate between pages for single page app
# eg. facebook.com/,facebook.com/profile etc
# routing is possible in 2 ways :-Server side/Client Side
# React router allow us to handle user navigation at client side from our react app

-----------------------------------------------
# server side routing

1) browser makes a requests to server to access "/about" particular path and server resolve that request and then provide required content to client side
 
 2) server refreshes entire page but client side doesnt

 3) it will request data thats needed for current page not less not more

 4) deployment is easier but it should be optimized 



# Client side routing 

1) if any particular path is not find it will render index.html and so along with 
index.html + client side JS history object provides content required.This is case when url is typed in url bar

2) in case of any button click navigation request for resource is not done at each navigation button rather history will keep track of address in browser and then react Router will decide which path to be render ie "/" or "/about" or "/skills" etc

3) Routing is handled internally by client side JS

4) No page reload between different views

5)  redundant component dont need to be loaded again and again like header/footer/nav

6) required more time at initial setup and load time and can affect search engine result




----------------------------------------------

Types of Routers :

1. Browser Routers which we used using <Route> component 
eg: localhost:3000/about
 <BrowserRouter>
 <Route path="" exact component={componentName}/>
</BrowserRouter>

2. Hash Router <HashRouter><Route/></HashRouter>
eg: localhost:3000/#/about
Everything after "#" is seen as route

3. Memory Router  <MemoryRouter><Route/></MemoryRouter>
eg: localhost:3000
This doesnt use Url to track the routes


----------------------------------------------------
What are React Portals ?

React Portal is created using ReactDom.createPortal(renderable react modal component child, DOM container where we want to load our component at root level of body);

z-index -> Help us to stack one component over another like overlapping of modal component over home component

Modal Component should be at top level of components ie parent component to use it 

A typical use case for portals is when a parent component has an overflow: hidden or z-index style, but you need the child to visually “break out” of its container. For example, dialogs, hovercards, and tooltips.


It is not a good idea to put modal component inside any child component rather we will put it at top level with unique Id which will be direct child of body

a) Right Way                                           b) Wrong Way
              body                                           body
                |                                              |                 
        -------------------                         -------------------------
        |                  |                                   |                       
<div id="root">        <div id="modal">                   <div id="root">    
                                                                |
                                                          --------------
                                                         |              |
                                                        About page      Contact Page
                                                          |
                                                        <Modal>








This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

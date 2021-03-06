# Streams

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Streams is a simple React App for streaming videos.The App supports `Creating`, `Editing`, `Deleting` and `Watching` Streams. 
> The project is only for learning purpose.


The project uses JSONPlaceholder(https://jsonplaceholder.typicode.com/) as Fake `REST API` for `testing` purposes.
User needs to login before creating,reading or editing any data.

### Here are the ways to access different section of App :

- Home Page :
> http://localhost:3000

![](https://github.com/yogesh021/Streams/blob/main/client/public/screenshots/home.PNG)

- Creating stream :
 > http://localhost:3000/streams/create
 
 ![](https://github.com/yogesh021/Streams/blob/main/client/public/screenshots/Create-stream.PNG)
 
- Editing stream :
 > http://localhost:3000/streams/edit/:id
 
 ![](https://github.com/yogesh021/Streams/blob/main/client/public/screenshots/edit-stream.PNG)
 
- Watching stream :
 > http://localhost:3000/streams/:id
 
 ![](https://github.com/yogesh021/Streams/blob/main/client/public/screenshots/streaming.PNG)
 
- Deleting stream :
 > http://localhost:3000/streams/delete/:id
 
 ![](https://github.com/yogesh021/Streams/blob/main/client/public/screenshots/delete-stream.PNG)

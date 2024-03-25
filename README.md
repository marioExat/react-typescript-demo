# How to Use TypeScript with React

Stack - React + TypeScript + Vite

Tutorial Link - [How to Use TypeScript with React](https://www.freecodecamp.org/news/use-typescript-with-react/)

## Getting Started

Create project using `npm create vite` in terminal
Give the project name and select `React` and `Typescript` as options.

Install dependencies using `npm install`

Run the app using `npm run dev`

## React and Typescript Basics

Every React + TypeScript file needs to have a .tsx extension.

If the file does not contain any JSX-specific code, then you can use the .ts extension instead of the .tsx extension.

To create a component in React with TypeScript, you can use the FC type from the react package and use it after the component name.

## Three Ways of Defining Prop Types
- Declaring types using interface
- Declaring Types using type
- Using InlineDeclaration

It's a good practice and recommended to start the interface name with a capital letter like AppProps

### How to Create a Random Users List Application

let's create a simple Random Users List Application that will display a list of 10 random users on the screen.

For that, we will be using the Random User Generator API.

This is the API URL we will be using:

`https://randomuser.me/api/?results=10`
Let's first install the Axios npm library so we can make an API call using it.

Execute the following command to install the Axios library:

`npm install axios`

we have added a useEffect hook where we're making the API call to get the the list of users.

### How to create a separate user component

When we're using an array map method to display something on the screen, it's common to separate out that display part in a different component. This makes it easy to test, and it will also make your component code shorter.

### How to create a separate file for type declarations

It's common to have a separate file just for declaring types.

So create a App.types.ts file inside the src folder and move all the type declarations from the App component to the App.types.ts file:

### How to Display a Loading Indicator

Whenever you're making an API call to display something, it's always good to display some loading indicator while the API call is going on.

And with version 18 of React, when we use React.StrictMode, every useEffect hook executes twice even with no dependency specified.

This only happens in the development environment and not in production when you deploy the application.

### How to Load Users on Button Click

### How to Handle the Change Event

With TypeScript, we always need to specify the type of each and every function parameter.

Here, TypeScript is not able to identify the type of the event parameter.

To find out the type of event parameter, we can change the below code:

`<input type='text' onChange={handleChange} />`

to this code:

`<input type='text' onChange={(event) => {}} />`

Here, we're using an inline function, because when using inline function, the correct type is automatically passed to the function parameter so we don't need to specify it.

If you mouse over the event parameter, you will be able to see the exact type of event that we can use in our handleChange function


## To Read
0. [Adding locally hosted code to GitHub](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)
1. https://www.freecodecamp.org/news/learn-typescript-beginners-guide/
2. https://www.freecodecamp.org/news/typescript-tutorial-for-react-developers/ 
3. https://www.freecodecamp.org/news/using-typescript-in-react-apps/
4. https://www.freecodecamp.org/news/typescript-for-react-developers/
5. https://www.freecodecamp.org/news/learn-typescript-beginners-guide/
6. https://www.freecodecamp.org/news/how-to-use-redux-in-your-react-typescript-app/
7. https://www.freecodecamp.org/news/build-an-api-with-typescript-and-aws/
8. https://www.freecodecamp.org/news/react-typescript-how-to-set-up-types-on-hooks/
9. https://www.freecodecamp.org/news/how-to-add-typescript-to-a-javascript-project/
10. https://www.freecodecamp.org/news/build-strongly-typed-polymorphic-components-with-react-and-typescript/
11. https://www.freecodecamp.org/news/an-introduction-to-typescript/
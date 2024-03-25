import { FC } from 'react';
// To create a component in React with TypeScript, you can use the FC type
// from the react package and use it after the component name.

// we have added an extra interface AppProps to specify which 
// props the component is accepting
interface AppProps {
    title: string;
}

const AppTypesUsingInterface: FC<AppProps> = ({ title }) => {
    return( 
    <>
        <h1>AppTypesUsingInterface</h1>
        <h2>{title}</h2>
    </>);
    
};

export default AppTypesUsingInterface;
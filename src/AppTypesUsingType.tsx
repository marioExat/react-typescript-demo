import { FC } from 'react';
// To create a component in React with TypeScript, you can use the FC type
// from the react package and use it after the component name.

// we have added an extra interface AppProps to specify which 
// props the component is accepting
type AppProps = {
    title: string;
}

const AppTypesUsingType: FC<AppProps> = ({title}) => {
    return <div>AppTypesUsingType {title}</div>;
};

export default AppTypesUsingType;
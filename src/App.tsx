import AppWithInlineDeclaration from './AppInlineTypeDeclaration';
import AppTypesUsingInterface from './AppTypesUsingInterface';
import AppTypesUsingType from './AppTypesUsingType';
import RandomUsersApp from './RandomUsersApp';

const App = () => {
  return (
    <>
    <h1>Three ways of defining Prop Types</h1>
      <AppWithInlineDeclaration title='TypeScript Demo'/>
      <AppTypesUsingInterface title="TypeScript Demo"/>
      <AppTypesUsingType title='TypeScript Demo'/>
      <RandomUsersApp title="Title: RandomUsersApp"/>
    </>
  )
}

export default App;
  



import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { AppProps, Users } from './App.types';
import User from './components/User';

// interface AppProps {
//     title: string;
// }

// interface Users {
//     name: {
//         first: string;
//         last: string;
//     };
//     login: {
//         uuid: string;
//     };
//     email: string;
// }
// The advantage of declaring separate interfaces for each 
// nested property is that, if you want to use the same structure 
// in any other file, you can just export any of the above interfaces 
// and re-use them

// export interface Name {
//     first: string;
//     last: string;
// }

// export interface Login {
//     uuid: string;
// }

// export type Users = {
//     name: Name;
//     login: Login;
//     email: string;
// }

const RandomUsersApp: FC<AppProps> = ({ title }) => {
    // we're specifying that users is an array of objects of 
    // type Users which is the interface we declared.
    const [users, setUsers] = useState<Users[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    // when we assign any initial value (false in our case), 
    // TypeScript automatically infers the type of data we will be 
    // storing – which is boolean in our case.
    const [username, setUsername] = useState('');
  
    const handleClick = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.get(
              'https://randomuser.me/api/?results=10'
            );
            console.log(data);
            setUsers(data.results);
        } catch (error) {
            console.log(error);
        } finally {
              setIsLoading(false);
        }
    };  
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }
    


    // useEffect(() => {
    //   const getUsers = async () => {
    //     try {
    //       setIsLoading(true);
    //       const { data } = await axios.get(
    //         'https://randomuser.me/api/?results=10'
    //       );
    //       console.log(data);
    //       setUsers(data.results);
    //     } catch (error) {
    //       console.log(error);
    //     } finally {
    //         setIsLoading(false);
    //     }
    //   };
    //   getUsers();
    // }, []);
  
    return (
      <div>
        <h1>{title}</h1>
        <button onClick={handleClick}>Show Users</button>
        <input type='text' onChange={handleChange}/>
        <div>{username}</div>
        {isLoading && <p>Loading...</p>}
        <ul>
          {users.map(({ login, name, email }) => {
            return <User key={login.uuid} name={name} email={email}/>;
          })}
        </ul>
      </div>
    );
  };

export default RandomUsersApp;
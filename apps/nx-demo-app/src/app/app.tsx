import React, { useEffect, useState } from 'react';
import {Greetings} from '@nx-demo-app/design-system';
import { useQuery, gql } from '@apollo/client';
import {useGetBooksQuery} from './queries.generated'

export const App = () => {
  const { data } = useGetBooksQuery();

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to hello!</h1>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
          alt="Nx - Smart, Fast and Extensible Build System"
        />
      </div>
      <div>{JSON.stringify(data)}</div>
      <Greetings name="Nathan" />
    </>
  );
};

export default App;

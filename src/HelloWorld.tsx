import React from 'react';
// import GET_HELLO_MESSAGE from './GetHelloMessage.graphql';
import { gql, useQuery } from '@apollo/client';

const GET_HELLO_MESSAGE = gql`
  query GetHelloMessage {
    hello
  }
`;

function HelloWorld() {
  const { loading, error, data } = useQuery(GET_HELLO_MESSAGE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <h1>{data.hello}</h1>;
}

export default HelloWorld;


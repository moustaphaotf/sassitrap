/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCommand = /* GraphQL */ `
  query GetCommand($id: ID!) {
    getCommand(id: $id) {
      id
      code
      data
      createdAt
      __typename
    }
  }
`;
export const listCommands = /* GraphQL */ `
  query ListCommands(
    $filter: TableCommandFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommands(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        code
        data
        createdAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTrapData = /* GraphQL */ `
  query GetTrapData($id: ID!) {
    getTrapData(id: $id) {
      id
      code
      ownerEmail
      deliveredAt
      ownerFullName
      createdAt
      __typename
    }
  }
`;
export const listTrapData = /* GraphQL */ `
  query ListTrapData(
    $filter: TableTrapDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrapData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        code
        ownerEmail
        deliveredAt
        ownerFullName
        createdAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;

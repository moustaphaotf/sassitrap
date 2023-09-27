/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createCommand = /* GraphQL */ `
  mutation CreateCommand($input: CreateCommandInput!) {
    createCommand(input: $input) {
      id
      code
      data
      createdAt
      __typename
    }
  }
`;
export const updateCommand = /* GraphQL */ `
  mutation UpdateCommand($input: UpdateCommandInput!) {
    updateCommand(input: $input) {
      id
      code
      data
      createdAt
      __typename
    }
  }
`;
export const deleteCommand = /* GraphQL */ `
  mutation DeleteCommand($input: DeleteCommandInput!) {
    deleteCommand(input: $input) {
      id
      code
      data
      createdAt
      __typename
    }
  }
`;
export const createTrapData = /* GraphQL */ `
  mutation CreateTrapData($input: CreateTrapDataInput!) {
    createTrapData(input: $input) {
      id
      code
      ownerFullName
      ownerEmail
      deliveredAt
      createdAt
      content
      mode
      uvleds
      state
      alerts
      __typename
    }
  }
`;
export const updateTrapData = /* GraphQL */ `
  mutation UpdateTrapData($input: UpdateTrapDataInput!) {
    updateTrapData(input: $input) {
      id
      code
      ownerFullName
      ownerEmail
      deliveredAt
      createdAt
      content
      mode
      uvleds
      state
      alerts
      __typename
    }
  }
`;
export const deleteTrapData = /* GraphQL */ `
  mutation DeleteTrapData($input: DeleteTrapDataInput!) {
    deleteTrapData(input: $input) {
      id
      code
      ownerFullName
      ownerEmail
      deliveredAt
      createdAt
      content
      mode
      uvleds
      state
      alerts
      __typename
    }
  }
`;

/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateCommand = /* GraphQL */ `
  subscription OnCreateCommand($id: ID, $code: String, $data: String) {
    onCreateCommand(id: $id, code: $code, data: $data) {
      id
      code
      data
      createdAt
      __typename
    }
  }
`;
export const onUpdateCommand = /* GraphQL */ `
  subscription OnUpdateCommand($id: ID, $code: String, $data: String) {
    onUpdateCommand(id: $id, code: $code, data: $data) {
      id
      code
      data
      createdAt
      __typename
    }
  }
`;
export const onDeleteCommand = /* GraphQL */ `
  subscription OnDeleteCommand($id: ID, $code: String, $data: String) {
    onDeleteCommand(id: $id, code: $code, data: $data) {
      id
      code
      data
      createdAt
      __typename
    }
  }
`;
export const onCreateTrapData = /* GraphQL */ `
  subscription OnCreateTrapData(
    $id: ID
    $code: String
    $content: String
    $ownerEmail: String
    $deliveredAt: AWSDateTime
  ) {
    onCreateTrapData(
      id: $id
      code: $code
      content: $content
      ownerEmail: $ownerEmail
      deliveredAt: $deliveredAt
    ) {
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
export const onUpdateTrapData = /* GraphQL */ `
  subscription OnUpdateTrapData(
    $id: ID
    $code: String
    $content: String
    $ownerEmail: String
    $deliveredAt: AWSDateTime
  ) {
    onUpdateTrapData(
      id: $id
      code: $code
      content: $content
      ownerEmail: $ownerEmail
      deliveredAt: $deliveredAt
    ) {
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
export const onDeleteTrapData = /* GraphQL */ `
  subscription OnDeleteTrapData(
    $id: ID
    $code: String
    $content: String
    $ownerEmail: String
    $deliveredAt: AWSDateTime
  ) {
    onDeleteTrapData(
      id: $id
      code: $code
      content: $content
      ownerEmail: $ownerEmail
      deliveredAt: $deliveredAt
    ) {
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

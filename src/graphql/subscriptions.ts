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
  subscription OnCreateCommand(
    $id: ID
    $code: String
    $data: String
    $createdAt: String
  ) {
    onCreateCommand(id: $id, code: $code, data: $data, createdAt: $createdAt) {
      id
      code
      data
      createdAt
      __typename
    }
  }
`;
export const onUpdateCommand = /* GraphQL */ `
  subscription OnUpdateCommand(
    $id: ID
    $code: String
    $data: String
    $createdAt: String
  ) {
    onUpdateCommand(id: $id, code: $code, data: $data, createdAt: $createdAt) {
      id
      code
      data
      createdAt
      __typename
    }
  }
`;
export const onDeleteCommand = /* GraphQL */ `
  subscription OnDeleteCommand(
    $id: ID
    $code: String
    $data: String
    $createdAt: String
  ) {
    onDeleteCommand(id: $id, code: $code, data: $data, createdAt: $createdAt) {
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
    $ownerFullName: String
    $ownerEmail: String
    $deliveredAt: AWSDateTime
  ) {
    onCreateTrapData(
      id: $id
      code: $code
      ownerFullName: $ownerFullName
      ownerEmail: $ownerEmail
      deliveredAt: $deliveredAt
    ) {
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
export const onUpdateTrapData = /* GraphQL */ `
  subscription OnUpdateTrapData(
    $id: ID
    $code: String
    $ownerFullName: String
    $ownerEmail: String
    $deliveredAt: AWSDateTime
  ) {
    onUpdateTrapData(
      id: $id
      code: $code
      ownerFullName: $ownerFullName
      ownerEmail: $ownerEmail
      deliveredAt: $deliveredAt
    ) {
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
export const onDeleteTrapData = /* GraphQL */ `
  subscription OnDeleteTrapData(
    $id: ID
    $code: String
    $ownerFullName: String
    $ownerEmail: String
    $deliveredAt: AWSDateTime
  ) {
    onDeleteTrapData(
      id: $id
      code: $code
      ownerFullName: $ownerFullName
      ownerEmail: $ownerEmail
      deliveredAt: $deliveredAt
    ) {
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

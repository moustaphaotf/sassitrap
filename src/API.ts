/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteTodoInput = {
  id: string,
};

export type CreateCommandInput = {
  code: string,
  data: string,
  createdAt?: string | null,
};

export type Command = {
  __typename: "Command",
  id: string,
  code: string,
  data: string,
  createdAt?: string | null,
};

export type UpdateCommandInput = {
  id: string,
  code?: string | null,
  data?: string | null,
  createdAt?: string | null,
};

export type DeleteCommandInput = {
  id: string,
};

export type CreateTrapDataInput = {
  code: string,
  content: string,
  ownerEmail: string,
  deliveredAt: string,
  createdAt: string,
  ownerFullName: string,
};

export type TrapData = {
  __typename: "TrapData",
  id: string,
  code: string,
  ownerEmail: string,
  deliveredAt?: string | null,
  ownerFullName?: string | null,
  createdAt?: string | null,
  state?: boolean | null,
  uvleds?: boolean | null,
  mode?: string | null,
  alerts?: boolean | null,
};

export type UpdateTrapDataInput = {
  id: string,
  code?: string | null,
  content?: string | null,
  ownerEmail?: string | null,
  deliveredAt?: string | null,
  ownerFullName?: string | null,
  createdAt?: string | null,
  state?: boolean | null,
  uvleds?: boolean | null,
  mode?: string | null,
  alerts?: boolean | null,
};

export type DeleteTrapDataInput = {
  id: string,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type TableCommandFilterInput = {
  id?: TableIDFilterInput | null,
  code?: TableStringFilterInput | null,
  data?: TableStringFilterInput | null,
};

export type TableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CommandConnection = {
  __typename: "CommandConnection",
  items?:  Array<Command | null > | null,
  nextToken?: string | null,
};

export type TableTrapDataFilterInput = {
  id?: TableIDFilterInput | null,
  code?: TableStringFilterInput | null,
  content?: TableStringFilterInput | null,
  ownerEmail?: TableStringFilterInput | null,
  deliveredAt?: TableStringFilterInput | null,
};

export type TrapDataConnection = {
  __typename: "TrapDataConnection",
  items?:  Array<TrapData | null > | null,
  nextToken?: string | null,
};

export type ModelSubscriptionTodoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommandMutationVariables = {
  input: CreateCommandInput,
};

export type CreateCommandMutation = {
  createCommand?:  {
    __typename: "Command",
    id: string,
    code: string,
    data: string,
    createdAt?: string | null,
  } | null,
};

export type UpdateCommandMutationVariables = {
  input: UpdateCommandInput,
};

export type UpdateCommandMutation = {
  updateCommand?:  {
    __typename: "Command",
    id: string,
    code: string,
    data: string,
    createdAt?: string | null,
  } | null,
};

export type DeleteCommandMutationVariables = {
  input: DeleteCommandInput,
};

export type DeleteCommandMutation = {
  deleteCommand?:  {
    __typename: "Command",
    id: string,
    code: string,
    data: string,
    createdAt?: string | null,
  } | null,
};

export type CreateTrapDataMutationVariables = {
  input: CreateTrapDataInput,
};

export type CreateTrapDataMutation = {
  createTrapData?:  {
    __typename: "TrapData",
    id: string,
    code: string,
    ownerEmail: string,
    deliveredAt?: string | null,
    ownerFullName?: string | null,
    createdAt?: string | null,
    state?: boolean | null,
    uvleds?: boolean | null,
    mode?: string | null,
    alerts?: boolean | null,
  } | null,
};

export type UpdateTrapDataMutationVariables = {
  input: UpdateTrapDataInput,
};

export type UpdateTrapDataMutation = {
  updateTrapData?:  {
    __typename: "TrapData",
    id: string,
    code: string,
    ownerEmail: string,
    deliveredAt?: string | null,
    ownerFullName?: string | null,
    createdAt?: string | null,
    state?: boolean | null,
    uvleds?: boolean | null,
    mode?: string | null,
    alerts?: boolean | null,
  } | null,
};

export type DeleteTrapDataMutationVariables = {
  input: DeleteTrapDataInput,
};

export type DeleteTrapDataMutation = {
  deleteTrapData?:  {
    __typename: "TrapData",
    id: string,
    code: string,
    ownerEmail: string,
    deliveredAt?: string | null,
    ownerFullName?: string | null,
    createdAt?: string | null,
    state?: boolean | null,
    uvleds?: boolean | null,
    mode?: string | null,
    alerts?: boolean | null,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommandQueryVariables = {
  id: string,
};

export type GetCommandQuery = {
  getCommand?:  {
    __typename: "Command",
    id: string,
    code: string,
    data: string,
    createdAt?: string | null,
  } | null,
};

export type ListCommandsQueryVariables = {
  filter?: TableCommandFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommandsQuery = {
  listCommands?:  {
    __typename: "CommandConnection",
    items?:  Array< {
      __typename: "Command",
      id: string,
      code: string,
      data: string,
      createdAt?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetTrapDataQueryVariables = {
  id: string,
};

export type GetTrapDataQuery = {
  getTrapData?:  {
    __typename: "TrapData",
    id: string,
    code: string,
    ownerEmail: string,
    deliveredAt?: string | null,
    ownerFullName?: string | null,
    createdAt?: string | null,
    state?: boolean | null,
    uvleds?: boolean | null,
    mode?: string | null,
    alerts?: boolean | null,
  } | null,
};

export type ListTrapDataQueryVariables = {
  filter?: TableTrapDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTrapDataQuery = {
  listTrapData?:  {
    __typename: "TrapDataConnection",
    items?:  Array< {
      __typename: "TrapData",
      id: string,
      code: string,
      ownerEmail: string,
      deliveredAt?: string | null,
      ownerFullName?: string | null,
      createdAt?: string | null,
      state?: boolean | null,
      uvleds?: boolean | null,
      mode?: string | null,
      alerts?: boolean | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommandSubscriptionVariables = {
  id?: string | null,
  code?: string | null,
  data?: string | null,
};

export type OnCreateCommandSubscription = {
  onCreateCommand?:  {
    __typename: "Command",
    id: string,
    code: string,
    data: string,
    createdAt?: string | null,
  } | null,
};

export type OnUpdateCommandSubscriptionVariables = {
  id?: string | null,
  code?: string | null,
  data?: string | null,
};

export type OnUpdateCommandSubscription = {
  onUpdateCommand?:  {
    __typename: "Command",
    id: string,
    code: string,
    data: string,
    createdAt?: string | null,
  } | null,
};

export type OnDeleteCommandSubscriptionVariables = {
  id?: string | null,
  code?: string | null,
  data?: string | null,
};

export type OnDeleteCommandSubscription = {
  onDeleteCommand?:  {
    __typename: "Command",
    id: string,
    code: string,
    data: string,
    createdAt?: string | null,
  } | null,
};

export type OnCreateTrapDataSubscriptionVariables = {
  id?: string | null,
  code?: string | null,
  content?: string | null,
  ownerEmail?: string | null,
  deliveredAt?: string | null,
};

export type OnCreateTrapDataSubscription = {
  onCreateTrapData?:  {
    __typename: "TrapData",
    id: string,
    code: string,
    ownerEmail: string,
    deliveredAt?: string | null,
    ownerFullName?: string | null,
    createdAt?: string | null,
    state?: boolean | null,
    uvleds?: boolean | null,
    mode?: string | null,
    alerts?: boolean | null,
  } | null,
};

export type OnUpdateTrapDataSubscriptionVariables = {
  id?: string | null,
  code?: string | null,
  content?: string | null,
  ownerEmail?: string | null,
  deliveredAt?: string | null,
};

export type OnUpdateTrapDataSubscription = {
  onUpdateTrapData?:  {
    __typename: "TrapData",
    id: string,
    code: string,
    ownerEmail: string,
    deliveredAt?: string | null,
    ownerFullName?: string | null,
    createdAt?: string | null,
    state?: boolean | null,
    uvleds?: boolean | null,
    mode?: string | null,
    alerts?: boolean | null,
  } | null,
};

export type OnDeleteTrapDataSubscriptionVariables = {
  id?: string | null,
  code?: string | null,
  content?: string | null,
  ownerEmail?: string | null,
  deliveredAt?: string | null,
};

export type OnDeleteTrapDataSubscription = {
  onDeleteTrapData?:  {
    __typename: "TrapData",
    id: string,
    code: string,
    ownerEmail: string,
    deliveredAt?: string | null,
    ownerFullName?: string | null,
    createdAt?: string | null,
    state?: boolean | null,
    uvleds?: boolean | null,
    mode?: string | null,
    alerts?: boolean | null,
  } | null,
};

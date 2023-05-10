/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  Cursor: any;
  Date: any;
  Datetime: any;
  JSON: any;
  Time: any;
  UUID: any;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  neq?: InputMaybe<Scalars['BigInt']>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<Scalars['Boolean']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  neq?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<Scalars['Date']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  neq?: InputMaybe<Scalars['Date']>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']>;
  gt?: InputMaybe<Scalars['Datetime']>;
  gte?: InputMaybe<Scalars['Datetime']>;
  in?: InputMaybe<Array<Scalars['Datetime']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']>;
  lte?: InputMaybe<Scalars['Datetime']>;
  neq?: InputMaybe<Scalars['Datetime']>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `Posts` collection */
  deleteFromPostsCollection: PostsDeleteResponse;
  /** Deletes zero or more records from the `Profiles` collection */
  deleteFromProfilesCollection: ProfilesDeleteResponse;
  /** Adds one or more `Posts` records to the collection */
  insertIntoPostsCollection?: Maybe<PostsInsertResponse>;
  /** Adds one or more `Profiles` records to the collection */
  insertIntoProfilesCollection?: Maybe<ProfilesInsertResponse>;
  /** Updates zero or more records in the `Posts` collection */
  updatePostsCollection: PostsUpdateResponse;
  /** Updates zero or more records in the `Profiles` collection */
  updateProfilesCollection: ProfilesUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromPostsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<PostsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromProfilesCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ProfilesFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoPostsCollectionArgs = {
  objects: Array<PostsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoProfilesCollectionArgs = {
  objects: Array<ProfilesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdatePostsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<PostsFilter>;
  set: PostsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateProfilesCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<ProfilesFilter>;
  set: ProfilesUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID'];
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export enum PostStatus {
  Draft = 'draft',
  Published = 'published'
}

/** Boolean expression comparing fields on type "PostStatus" */
export type PostStatusFilter = {
  eq?: InputMaybe<PostStatus>;
  in?: InputMaybe<Array<PostStatus>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<PostStatus>;
};

export type Posts = Node & {
  __typename?: 'Posts';
  body: Scalars['JSON'];
  createdAt: Scalars['Datetime'];
  id: Scalars['UUID'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  profile?: Maybe<Profiles>;
  profileId: Scalars['UUID'];
  status: PostStatus;
  title: Scalars['String'];
  updatedAt: Scalars['Datetime'];
};

export type PostsConnection = {
  __typename?: 'PostsConnection';
  edges: Array<PostsEdge>;
  pageInfo: PageInfo;
};

export type PostsDeleteResponse = {
  __typename?: 'PostsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Posts>;
};

export type PostsEdge = {
  __typename?: 'PostsEdge';
  cursor: Scalars['String'];
  node: Posts;
};

export type PostsFilter = {
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  profileId?: InputMaybe<UuidFilter>;
  status?: InputMaybe<PostStatusFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
};

export type PostsInsertInput = {
  body?: InputMaybe<Scalars['JSON']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  profileId?: InputMaybe<Scalars['UUID']>;
  status?: InputMaybe<PostStatus>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

export type PostsInsertResponse = {
  __typename?: 'PostsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Posts>;
};

export type PostsOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  profileId?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
};

export type PostsUpdateInput = {
  body?: InputMaybe<Scalars['JSON']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  profileId?: InputMaybe<Scalars['UUID']>;
  status?: InputMaybe<PostStatus>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

export type PostsUpdateResponse = {
  __typename?: 'PostsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Posts>;
};

export type Profiles = Node & {
  __typename?: 'Profiles';
  bio: Scalars['String'];
  createdAt: Scalars['Datetime'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  postsCollection?: Maybe<PostsConnection>;
  username?: Maybe<Scalars['String']>;
};


export type ProfilesPostsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<PostsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PostsOrderBy>>;
};

export type ProfilesConnection = {
  __typename?: 'ProfilesConnection';
  edges: Array<ProfilesEdge>;
  pageInfo: PageInfo;
};

export type ProfilesDeleteResponse = {
  __typename?: 'ProfilesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type ProfilesEdge = {
  __typename?: 'ProfilesEdge';
  cursor: Scalars['String'];
  node: Profiles;
};

export type ProfilesFilter = {
  bio?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  username?: InputMaybe<StringFilter>;
};

export type ProfilesInsertInput = {
  bio?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type ProfilesInsertResponse = {
  __typename?: 'ProfilesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type ProfilesOrderBy = {
  bio?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  username?: InputMaybe<OrderByDirection>;
};

export type ProfilesUpdateInput = {
  bio?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type ProfilesUpdateResponse = {
  __typename?: 'ProfilesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `Posts` */
  postsCollection?: Maybe<PostsConnection>;
  /** A pagable collection of type `Profiles` */
  profilesCollection?: Maybe<ProfilesConnection>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root type for querying data */
export type QueryPostsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<PostsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PostsOrderBy>>;
};


/** The root type for querying data */
export type QueryProfilesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ProfilesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProfilesOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']>;
  gt?: InputMaybe<Scalars['Time']>;
  gte?: InputMaybe<Scalars['Time']>;
  in?: InputMaybe<Array<Scalars['Time']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']>;
  lte?: InputMaybe<Scalars['Time']>;
  neq?: InputMaybe<Scalars['Time']>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']>;
  in?: InputMaybe<Array<Scalars['UUID']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']>;
};

export type PostFragment = { __typename?: 'Posts', id: any, title: string, body: any, createdAt: any, status: PostStatus, profile?: { __typename?: 'Profiles', id: any, name: string } | null } & { ' $fragmentName'?: 'PostFragment' };

export type PostTitleFragment = { __typename?: 'Posts', id: any, title: string, createdAt: any, profile?: { __typename?: 'Profiles', id: any, name: string } | null } & { ' $fragmentName'?: 'PostTitleFragment' };

export type GetPostQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type GetPostQuery = { __typename?: 'Query', postsCollection?: { __typename?: 'PostsConnection', edges: Array<{ __typename?: 'PostsEdge', node: (
        { __typename?: 'Posts' }
        & { ' $fragmentRefs'?: { 'PostFragment': PostFragment } }
      ) }> } | null };

export type InsertPostMutationVariables = Exact<{
  title: Scalars['String'];
  body: Scalars['JSON'];
  profileId: Scalars['UUID'];
}>;


export type InsertPostMutation = { __typename?: 'Mutation', insertIntoPostsCollection?: { __typename?: 'PostsInsertResponse', records: Array<(
      { __typename?: 'Posts' }
      & { ' $fragmentRefs'?: { 'PostFragment': PostFragment } }
    )> } | null };

export type ChangePostStatusMutationVariables = Exact<{
  status: PostStatus;
  id: Scalars['UUID'];
}>;


export type ChangePostStatusMutation = { __typename?: 'Mutation', updatePostsCollection: { __typename?: 'PostsUpdateResponse', records: Array<{ __typename?: 'Posts', id: any, status: PostStatus }> } };

export type UpdatePostMutationVariables = Exact<{
  title: Scalars['String'];
  body: Scalars['JSON'];
  postId: Scalars['UUID'];
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePostsCollection: { __typename?: 'PostsUpdateResponse', records: Array<(
      { __typename?: 'Posts' }
      & { ' $fragmentRefs'?: { 'PostFragment': PostFragment } }
    )> } };

export type GetPostsQueryVariables = Exact<{
  filter?: InputMaybe<PostsFilter>;
  after?: InputMaybe<Scalars['Cursor']>;
}>;


export type GetPostsQuery = { __typename?: 'Query', postsCollection?: { __typename?: 'PostsConnection', pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean }, edges: Array<{ __typename?: 'PostsEdge', node: (
        { __typename?: 'Posts' }
        & { ' $fragmentRefs'?: { 'PostFragment': PostFragment } }
      ) }> } | null };

export type GetPostTitlesQueryVariables = Exact<{
  status?: InputMaybe<PostStatus>;
  after?: InputMaybe<Scalars['Cursor']>;
}>;


export type GetPostTitlesQuery = { __typename?: 'Query', postsCollection?: { __typename?: 'PostsConnection', pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean }, edges: Array<{ __typename?: 'PostsEdge', node: (
        { __typename?: 'Posts' }
        & { ' $fragmentRefs'?: { 'PostTitleFragment': PostTitleFragment } }
      ) }> } | null };

export type DeletePostMutationVariables = Exact<{
  postId: Scalars['UUID'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deleteFromPostsCollection: { __typename?: 'PostsDeleteResponse', records: Array<(
      { __typename?: 'Posts' }
      & { ' $fragmentRefs'?: { 'PostFragment': PostFragment } }
    )> } };

export type ProfileFragment = { __typename?: 'Profiles', id: any, name: string, bio: string, username?: string | null } & { ' $fragmentName'?: 'ProfileFragment' };

export type UpdateProfileMutationVariables = Exact<{
  id: Scalars['UUID'];
  name: Scalars['String'];
  bio: Scalars['String'];
  username: Scalars['String'];
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateProfilesCollection: { __typename?: 'ProfilesUpdateResponse', records: Array<(
      { __typename?: 'Profiles' }
      & { ' $fragmentRefs'?: { 'ProfileFragment': ProfileFragment } }
    )> } };

export type GetProfileQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type GetProfileQuery = { __typename?: 'Query', profilesCollection?: { __typename?: 'ProfilesConnection', edges: Array<{ __typename?: 'ProfilesEdge', node: (
        { __typename?: 'Profiles' }
        & { ' $fragmentRefs'?: { 'ProfileFragment': ProfileFragment } }
      ) }> } | null };

export const PostFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Post"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Posts"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<PostFragment, unknown>;
export const PostTitleFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostTitle"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Posts"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<PostTitleFragment, unknown>;
export const ProfileFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Profile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Profiles"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]} as unknown as DocumentNode<ProfileFragment, unknown>;
export const GetPostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Post"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Post"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Posts"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetPostQuery, GetPostQueryVariables>;
export const InsertPostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insertPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertIntoPostsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"profileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Post"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Post"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Posts"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<InsertPostMutation, InsertPostMutationVariables>;
export const ChangePostStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"changePostStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PostStatus"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePostsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]} as unknown as DocumentNode<ChangePostStatusMutation, ChangePostStatusMutationVariables>;
export const UpdatePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePostsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Post"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Post"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Posts"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UpdatePostMutation, UpdatePostMutationVariables>;
export const GetPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPosts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PostsFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Post"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Post"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Posts"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetPostsQuery, GetPostsQueryVariables>;
export const GetPostTitlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPostTitles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PostStatus"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DescNullsLast"}}]}]}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"5"}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostTitle"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostTitle"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Posts"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetPostTitlesQuery, GetPostTitlesQueryVariables>;
export const DeletePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deletePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteFromPostsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Post"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Post"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Posts"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<DeletePostMutation, DeletePostMutationVariables>;
export const UpdateProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bio"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProfilesCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"bio"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bio"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Profile"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Profile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Profiles"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]} as unknown as DocumentNode<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const GetProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profilesCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Profile"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Profile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Profiles"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]} as unknown as DocumentNode<GetProfileQuery, GetProfileQueryVariables>;
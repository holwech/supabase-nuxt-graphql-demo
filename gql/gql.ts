/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    fragment Post on Posts {\n        id\n        title\n        body\n        createdAt\n        status\n        profile {\n            id\n            name\n        }\n    }\n": types.PostFragmentDoc,
    "\n    fragment PostTitle on Posts {\n        id\n        title\n        createdAt\n        profile {\n            id\n            name\n        }\n    }\n": types.PostTitleFragmentDoc,
    "\n    query getPost($id: UUID!) {\n        postsCollection(filter: { id: { eq: $id } }) {\n            edges {\n                node {\n                    ...Post\n                }\n            }\n        }\n    }\n": types.GetPostDocument,
    "\n    mutation insertPost($title: String!, $body: JSON!, $profileId: UUID!) {\n        insertIntoPostsCollection(\n            objects: [{ title: $title, body: $body, profileId: $profileId }]\n        ) {\n            records {\n                ...Post\n            }\n        }\n    }\n": types.InsertPostDocument,
    "\n    mutation changePostStatus($status: PostStatus!, $id: UUID!) {\n        updatePostsCollection(\n            set: { status: $status }\n            filter: { id: { eq: $id } }\n        ) {\n            records {\n                id\n                status\n            }\n        }\n    }\n": types.ChangePostStatusDocument,
    "\n    mutation updatePost($title: String!, $body: JSON!, $postId: UUID!) {\n        updatePostsCollection(\n            set: { title: $title, body: $body }\n            filter: { id: { eq: $postId } }\n        ) {\n            records {\n                ...Post\n            }\n        }\n    }\n": types.UpdatePostDocument,
    "\n    query getPosts($filter: PostsFilter, $after: Cursor) {\n        postsCollection(\n            filter: $filter \n            orderBy: [{ createdAt: DescNullsLast }]\n            first: 10\n            after: $after\n        ) {\n            pageInfo {\n                endCursor\n                hasNextPage\n            }\n            edges {\n                node {\n                    ...Post\n                }\n            }\n        }\n    }\n": types.GetPostsDocument,
    "\n    query getPostTitles($status: PostStatus, $after: Cursor) {\n        postsCollection(\n            orderBy: [{ createdAt: DescNullsLast }]\n            filter: { status: { eq: $status } }\n            first: 5\n            after: $after\n        ) {\n            pageInfo {\n                endCursor\n                hasNextPage\n            }\n            edges {\n                node {\n                    ...PostTitle\n                }\n            }\n        }\n    }\n": types.GetPostTitlesDocument,
    "\n    mutation deletePost($postId: UUID!) {\n        deleteFromPostsCollection(filter: { id: { eq: $postId } }) {\n            records {\n                ...Post\n            }\n        }\n    }\n": types.DeletePostDocument,
    "\n    fragment Profile on Profiles {\n        id\n        name\n        bio\n        username\n    }\n": types.ProfileFragmentDoc,
    "\n    mutation updateProfile($id: UUID!, $name: String!, $bio: String!, $username: String!) {\n        updateProfilesCollection(\n            set: { name: $name, bio: $bio, username: $username }\n            filter: { id: { eq: $id } }\n        ) {\n            records {\n                ...Profile\n            }\n        }\n    }\n": types.UpdateProfileDocument,
    "\n    query getProfile($id: UUID!) {\n        profilesCollection(filter: { id: { eq: $id } }) {\n            edges {\n                node {\n                    ...Profile\n                }\n            }\n        }\n    }\n": types.GetProfileDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment Post on Posts {\n        id\n        title\n        body\n        createdAt\n        status\n        profile {\n            id\n            name\n        }\n    }\n"): (typeof documents)["\n    fragment Post on Posts {\n        id\n        title\n        body\n        createdAt\n        status\n        profile {\n            id\n            name\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment PostTitle on Posts {\n        id\n        title\n        createdAt\n        profile {\n            id\n            name\n        }\n    }\n"): (typeof documents)["\n    fragment PostTitle on Posts {\n        id\n        title\n        createdAt\n        profile {\n            id\n            name\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getPost($id: UUID!) {\n        postsCollection(filter: { id: { eq: $id } }) {\n            edges {\n                node {\n                    ...Post\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query getPost($id: UUID!) {\n        postsCollection(filter: { id: { eq: $id } }) {\n            edges {\n                node {\n                    ...Post\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation insertPost($title: String!, $body: JSON!, $profileId: UUID!) {\n        insertIntoPostsCollection(\n            objects: [{ title: $title, body: $body, profileId: $profileId }]\n        ) {\n            records {\n                ...Post\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation insertPost($title: String!, $body: JSON!, $profileId: UUID!) {\n        insertIntoPostsCollection(\n            objects: [{ title: $title, body: $body, profileId: $profileId }]\n        ) {\n            records {\n                ...Post\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation changePostStatus($status: PostStatus!, $id: UUID!) {\n        updatePostsCollection(\n            set: { status: $status }\n            filter: { id: { eq: $id } }\n        ) {\n            records {\n                id\n                status\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation changePostStatus($status: PostStatus!, $id: UUID!) {\n        updatePostsCollection(\n            set: { status: $status }\n            filter: { id: { eq: $id } }\n        ) {\n            records {\n                id\n                status\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation updatePost($title: String!, $body: JSON!, $postId: UUID!) {\n        updatePostsCollection(\n            set: { title: $title, body: $body }\n            filter: { id: { eq: $postId } }\n        ) {\n            records {\n                ...Post\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation updatePost($title: String!, $body: JSON!, $postId: UUID!) {\n        updatePostsCollection(\n            set: { title: $title, body: $body }\n            filter: { id: { eq: $postId } }\n        ) {\n            records {\n                ...Post\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getPosts($filter: PostsFilter, $after: Cursor) {\n        postsCollection(\n            filter: $filter \n            orderBy: [{ createdAt: DescNullsLast }]\n            first: 10\n            after: $after\n        ) {\n            pageInfo {\n                endCursor\n                hasNextPage\n            }\n            edges {\n                node {\n                    ...Post\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query getPosts($filter: PostsFilter, $after: Cursor) {\n        postsCollection(\n            filter: $filter \n            orderBy: [{ createdAt: DescNullsLast }]\n            first: 10\n            after: $after\n        ) {\n            pageInfo {\n                endCursor\n                hasNextPage\n            }\n            edges {\n                node {\n                    ...Post\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getPostTitles($status: PostStatus, $after: Cursor) {\n        postsCollection(\n            orderBy: [{ createdAt: DescNullsLast }]\n            filter: { status: { eq: $status } }\n            first: 5\n            after: $after\n        ) {\n            pageInfo {\n                endCursor\n                hasNextPage\n            }\n            edges {\n                node {\n                    ...PostTitle\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query getPostTitles($status: PostStatus, $after: Cursor) {\n        postsCollection(\n            orderBy: [{ createdAt: DescNullsLast }]\n            filter: { status: { eq: $status } }\n            first: 5\n            after: $after\n        ) {\n            pageInfo {\n                endCursor\n                hasNextPage\n            }\n            edges {\n                node {\n                    ...PostTitle\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation deletePost($postId: UUID!) {\n        deleteFromPostsCollection(filter: { id: { eq: $postId } }) {\n            records {\n                ...Post\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation deletePost($postId: UUID!) {\n        deleteFromPostsCollection(filter: { id: { eq: $postId } }) {\n            records {\n                ...Post\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment Profile on Profiles {\n        id\n        name\n        bio\n        username\n    }\n"): (typeof documents)["\n    fragment Profile on Profiles {\n        id\n        name\n        bio\n        username\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation updateProfile($id: UUID!, $name: String!, $bio: String!, $username: String!) {\n        updateProfilesCollection(\n            set: { name: $name, bio: $bio, username: $username }\n            filter: { id: { eq: $id } }\n        ) {\n            records {\n                ...Profile\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation updateProfile($id: UUID!, $name: String!, $bio: String!, $username: String!) {\n        updateProfilesCollection(\n            set: { name: $name, bio: $bio, username: $username }\n            filter: { id: { eq: $id } }\n        ) {\n            records {\n                ...Profile\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getProfile($id: UUID!) {\n        profilesCollection(filter: { id: { eq: $id } }) {\n            edges {\n                node {\n                    ...Profile\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query getProfile($id: UUID!) {\n        profilesCollection(filter: { id: { eq: $id } }) {\n            edges {\n                node {\n                    ...Profile\n                }\n            }\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
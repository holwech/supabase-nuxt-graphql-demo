import { graphql } from "~/gql/gql";

export const PostFragment = graphql(`
    fragment Post on Posts {
        id
        title
        body
        createdAt
        status
        profile {
            id
            name
        }
    }
`);

export const PostTitleFragment = graphql(`
    fragment PostTitle on Posts {
        id
        title
        createdAt
        profile {
            id
            name
        }
    }
`);

export const GetPost = graphql(`
    query getPost($id: UUID!) {
        postsCollection(filter: { id: { eq: $id } }) {
            edges {
                node {
                    ...Post
                }
            }
        }
    }
`);

export const InsertPost = graphql(`
    mutation insertPost($title: String!, $body: JSON!, $profileId: UUID!) {
        insertIntoPostsCollection(
            objects: [{ title: $title, body: $body, profileId: $profileId }]
        ) {
            records {
                ...Post
            }
        }
    }
`);

export const ChangePostStatus = graphql(`
    mutation changePostStatus($status: PostStatus!, $id: UUID!) {
        updatePostsCollection(
            set: { status: $status }
            filter: { id: { eq: $id } }
        ) {
            records {
                id
                status
            }
        }
    }
`);

export const UpdatePost = graphql(`
    mutation updatePost($title: String!, $body: JSON!, $postId: UUID!) {
        updatePostsCollection(
            set: { title: $title, body: $body }
            filter: { id: { eq: $postId } }
        ) {
            records {
                ...Post
            }
        }
    }
`);

export const GetPosts = graphql(`
    query getPosts($filter: PostsFilter, $after: Cursor) {
        postsCollection(
            filter: $filter 
            orderBy: [{ createdAt: DescNullsLast }]
            first: 10
            after: $after
        ) {
            pageInfo {
                endCursor
                hasNextPage
            }
            edges {
                node {
                    ...Post
                }
            }
        }
    }
`);

export const GetPostTitles = graphql(`
    query getPostTitles($status: PostStatus, $after: Cursor) {
        postsCollection(
            orderBy: [{ createdAt: DescNullsLast }]
            filter: { status: { eq: $status } }
            first: 5
            after: $after
        ) {
            pageInfo {
                endCursor
                hasNextPage
            }
            edges {
                node {
                    ...PostTitle
                }
            }
        }
    }
`);

export const DeletePost = graphql(`
    mutation deletePost($postId: UUID!) {
        deleteFromPostsCollection(filter: { id: { eq: $postId } }) {
            records {
                ...Post
            }
        }
    }
`);

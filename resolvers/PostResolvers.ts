import { UpdateResolver } from "@urql/exchange-graphcache";
import {
    DeletePostMutation,
    DeletePostMutationVariables,
    GetPostsDocument,
    InsertPostMutation,
    InsertPostMutationVariables,
} from "~/gql/graphql";
import { useFragment } from "~/gql";
import { PostFragment } from "~/queries/PostsQueries";

export const deletePostResolver: UpdateResolver<
    DeletePostMutation,
    DeletePostMutationVariables
> = (result, args, cache) => {
    result.deleteFromPostsCollection?.records.forEach((post) => {
        cache.invalidate({
            __typename: "Posts",
            id: useFragment(PostFragment, post).id,
        });
    });
};

export const insertPostResolver: UpdateResolver = (
    result: InsertPostMutation,
    args: InsertPostMutationVariables,
    cache
) => {
    cache
        .inspectFields("Query")
        .filter((field) => field.fieldName === "postsCollection")
        .forEach((field: any) => {
            cache.updateQuery(
                {
                    query: GetPostsDocument,
                    variables: {
                        ...field.arguments,
                    },
                },
                (data) => {
                    result.insertIntoPostsCollection?.records.forEach(
                        (post) => {
                            data?.postsCollection?.edges.unshift({
                                __typename: "PostsEdge",
                                node: post,
                            });
                        }
                    );
                    return data;
                }
            );
        });
};

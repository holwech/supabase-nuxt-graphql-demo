import { createClient, ssrExchange, fetchExchange } from "@urql/core";
import { authExchange } from "@urql/exchange-auth";
import { ref, defineNuxtPlugin, useRuntimeConfig } from "#imports";
import { cacheExchange } from "@urql/exchange-graphcache";
import introspection from "~/gql/introspection";
import { relayPagination } from "@urql/exchange-graphcache/extras";
import { deletePostResolver, insertPostResolver } from "~/resolvers/PostResolvers";

const ssrKey = "__URQL_DATA__";

export default defineNuxtPlugin(async (nuxt) => {
    const config = useRuntimeConfig();
    const token: Ref<string> = useSupabaseToken();
    const apiKey = config.public.SUPABASE_KEY;

    const ssr = ssrExchange({
        isClient: process.client,
    });

    if (process.client) {
        nuxt.hook("app:created", () => {
            ssr.restoreData(nuxt.payload.data[ssrKey]);
        });
    }

    if (process.server) {
        nuxt.hook("app:rendered", () => {
            nuxt.payload.data[ssrKey] = ssr.extractData();
        });
    }

    const client = createClient({
        url: `${config.public.SUPABASE_URL}/graphql/v1`,
        exchanges: [
            cacheExchange({
                schema: introspection,
                resolvers: {
                    Query: {
                        postsCollection: relayPagination(),
                    },
                },
                updates: {
                    Mutation: {
                        deleteFromPostsCollection: deletePostResolver,
                        insertIntoPostsCollection: insertPostResolver
                    },
                },
            }),
            authExchange(async (utils) => {
                return {
                    addAuthToOperation(operation) {
                        const headers: { [key: string]: string } = {
                            apiKey: apiKey,
                        };
                        if (token.value) {
                            headers["Authorization"] = `Bearer ${token.value}`;
                        }
                        return utils.appendHeaders(operation, headers);
                    },
                    didAuthError(error, _operation) {
                        return error.graphQLErrors.some(
                            (e) => e.extensions?.code === "FORBIDDEN"
                        );
                    },
                    async refreshAuth() {},
                };
            }),
            ssrExchange({
                isClient: process.client,
            }),
            fetchExchange,
        ],
    });

    nuxt.vueApp.provide("$urql", ref(client));

    return {
        provide: {
            urql: client,
        },
    };
});

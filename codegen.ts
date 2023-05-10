import type { CodegenConfig } from "@graphql-codegen/cli";
import * as dotenv from "dotenv";

dotenv.config();

const config: CodegenConfig = {
    schema: [
        {
            "http://localhost:54321/graphql/v1": {
                headers: {
                    "apiKey": process.env.SUPABASE_KEY!,
                },
            },
        },
    ],
    documents: [
        "queries/**/*.ts",
    ],
    config: {
        useTypeImports: true,
        preResolveTypes: false,
    },
    generates: {
        "./gql/introspection.ts": {
            plugins: ["urql-introspection"],
            config: {
                includeScalars: true,
            },
        },
        "./gql/": {
            preset: "client",
            config: {
                useTypeImports: true,
            },
        },
    },
    // hooks: { afterOneFileWrite: ["eslint --fix", "prettier -w"] },
};

export default config;

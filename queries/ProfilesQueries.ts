import { graphql } from "~/gql/gql";

export const ProfileFragment = graphql(`
    fragment Profile on Profiles {
        id
        name
        bio
        username
    }
`);

export const UpdateProfile = graphql(`
    mutation updateProfile($id: UUID!, $name: String!, $bio: String!, $username: String!) {
        updateProfilesCollection(
            set: { name: $name, bio: $bio, username: $username }
            filter: { id: { eq: $id } }
        ) {
            records {
                ...Profile
            }
        }
    }
`);

export const GetProfile = graphql(`
    query getProfile($id: UUID!) {
        profilesCollection(filter: { id: { eq: $id } }) {
            edges {
                node {
                    ...Profile
                }
            }
        }
    }
`);

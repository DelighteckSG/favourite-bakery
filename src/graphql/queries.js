/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSubscribersNew = /* GraphQL */ `
  query GetSubscribersNew($email: String!) {
    getSubscribersNew(email: $email) {
      name
      email
      contactNo
      emailCopy
      createdAt
      updatedAt
    }
  }
`;
export const listSubscribersNews = /* GraphQL */ `
  query ListSubscribersNews(
    $email: String
    $filter: ModelSubscribersNewFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSubscribersNews(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        name
        email
        contactNo
        emailCopy
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const subscribersNewByEmail = /* GraphQL */ `
  query SubscribersNewByEmail(
    $emailCopy: String!
    $sortDirection: ModelSortDirection
    $filter: ModelSubscribersNewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    subscribersNewByEmail(
      emailCopy: $emailCopy
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        name
        email
        contactNo
        emailCopy
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

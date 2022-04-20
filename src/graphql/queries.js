/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVehicleDetails = /* GraphQL */ `
  query GetVehicleDetails($id: ID!) {
    getVehicleDetails(id: $id) {
      id
      name
      description
      filePath
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listVehicleDetails = /* GraphQL */ `
  query ListVehicleDetails(
    $filter: ModelVehicleDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVehicleDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        filePath
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

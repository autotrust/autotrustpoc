/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVehicleDetails = /* GraphQL */ `
  mutation CreateVehicleDetails(
    $input: CreateVehicleDetailsInput!
    $condition: ModelVehicleDetailsConditionInput
  ) {
    createVehicleDetails(input: $input, condition: $condition) {
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
export const updateVehicleDetails = /* GraphQL */ `
  mutation UpdateVehicleDetails(
    $input: UpdateVehicleDetailsInput!
    $condition: ModelVehicleDetailsConditionInput
  ) {
    updateVehicleDetails(input: $input, condition: $condition) {
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
export const deleteVehicleDetails = /* GraphQL */ `
  mutation DeleteVehicleDetails(
    $input: DeleteVehicleDetailsInput!
    $condition: ModelVehicleDetailsConditionInput
  ) {
    deleteVehicleDetails(input: $input, condition: $condition) {
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

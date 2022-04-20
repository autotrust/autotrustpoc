import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-1_Y2G06sWNY',
  ClientId: '5skclfroaibna32ml0pvsjcpib'
};

export default new CognitoUserPool(poolData);
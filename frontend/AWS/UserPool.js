import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "ap-southeast-2_FRcK890ZI",
    ClientId: "1gnfcq2nvdbe91rrhf87b0ejou"
}

export default new CognitoUserPool(poolData);
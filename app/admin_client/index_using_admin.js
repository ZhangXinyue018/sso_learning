'use strict';

var KeycloakAdminClient = require('keycloak-admin')["default"];
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const kcAdminClient = new KeycloakAdminClient({
    baseUrl: 'http://localhost:8080/auth',
    realmName: 'MVP0-Demo',
});

(async () => {
    try {
        await kcAdminClient.auth({
            grantType: 'client_credentials',
            clientId: 'AdminPortalCli',
            clientSecret: '92663fa2-02e0-4615-aff7-8d29624fed91'
        });
        const users = await kcAdminClient.users.find();
        console.log(users);
        const temp = await kcAdminClient
        // const groups = await kcAdminClient.groups.find();
        // console.log(groups);
        // await kcAdminClient.users.update(
        //     { id: '2dff9fac-4aed-4d7e-a8a2-179cf53f44be' },
        //     {
        //         attributes: { tempName: ['hello1234'], terms_and_conditions: 1568881854, tokenUserID: `alice` }
        //     }
        // );
        // await kcAdminClient.users.addToGroup({
        //     id: '2dff9fac-4aed-4d7e-a8a2-179cf53f44be',
        //     groupId: '53843b91-80f7-4dd8-a552-7326388f20f0'
        // });
    } catch (err) {
        console.log(err);
    }
})();
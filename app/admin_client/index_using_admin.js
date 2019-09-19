'use strict';

var KeycloakAdminClient = require('keycloak-admin')["default"];
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const kcAdminClient = new KeycloakAdminClient({
    baseUrl: 'http://localhost:8080/auth',
    realmName: 'demo',
});

(async () => {
    try {
        await kcAdminClient.auth({
            grantType: 'client_credentials',
            clientId: 'emailcli',
            clientSecret: 'f2d2c16a-f74f-4c01-8e87-3a1471ca6005'
        });
        // const realm = await kcAdminClient.realms.findOne('demo');
        // console.log(realm);
        const users = await kcAdminClient.users.find();
        console.log(users);
        // const groups = await kcAdminClient.groups.find();
        // console.log(groups);
    } catch (err) {
        console.log(err);
    }
})();
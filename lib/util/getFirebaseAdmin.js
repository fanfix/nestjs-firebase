"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFirebaseAdmin = void 0;
const admin = require("firebase-admin");
const app_1 = require("firebase-admin/app");
const createInstances = (app) => ({
    auth: app.auth(),
    messaging: app.messaging(),
    firestore: app.firestore(),
    storage: app.storage(),
    FieldValue: admin.firestore.FieldValue,
});
const getFirebaseAdmin = () => {
    return createInstances(admin.initializeApp({
        credential: (0, app_1.applicationDefault)()
    }));
};
exports.getFirebaseAdmin = getFirebaseAdmin;
//# sourceMappingURL=getFirebaseAdmin.js.map
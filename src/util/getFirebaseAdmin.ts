import * as admin from "firebase-admin";
import { applicationDefault } from 'firebase-admin/app'
import { FirebaseAdmin } from "../firebase.interface";

/* 
  It is CRITICAL that FieldValue be pulled from the same lib as FirebaseAdmin,
  it is very finicky and will not work across versions of firebase
*/

const createInstances = (app: admin.app.App): FirebaseAdmin => ({
  auth: app.auth(),
  messaging: app.messaging(),
  firestore: app.firestore(),
  storage: app.storage(),
  FieldValue: admin.firestore.FieldValue,
});

export const getFirebaseAdmin = (): FirebaseAdmin => {
  return createInstances(
    admin.initializeApp({
      credential: applicationDefault()
    }),
  );
};

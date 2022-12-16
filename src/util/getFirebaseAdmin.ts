import * as admin from "firebase-admin";
import { applicationDefault, } from 'firebase-admin/app'
import { FirebaseAdmin } from "../firebase.interface";

const createInstances = (app: admin.app.App): FirebaseAdmin => ({
  auth: app.auth(),
  messaging: app.messaging(),
  firestore: app.firestore(),
  storage: app.storage(),
});

export const getFirebaseAdmin = (): FirebaseAdmin => {
  return createInstances(
    admin.initializeApp({
      credential: applicationDefault()
    }),
  );
};

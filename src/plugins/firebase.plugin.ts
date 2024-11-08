import { Firestore } from "@google-cloud/firestore";

export const db = new Firestore({
    projectId: process.env.BOT_FIREBASE_PROJECT_ID,
    keyFilename: `${process.env.BOT_FIREBASE_SERVICE_ACCOUNT}`
});
import * as admin from 'firebase-admin';
import { UserRecord } from 'firebase-admin/auth';
import * as functions from 'firebase-functions/v1';

admin.initializeApp();

export const onUserCreated = functions.auth.user().onCreate(async (user: UserRecord) => {
    try {
        await admin.auth().setCustomUserClaims(user.uid, { role: "customer" });
        return null;
    }
    catch (err: any) {
        console.log('Error setting custom claims:', err);
        return null;
    }
});



export const onUserDeleted = functions.auth.user().onDelete(async (user: UserRecord) => {
    try {
        await admin.auth().deleteUser(user.uid);
        return null;
    }
    catch (err: any) {
        console.log('Error deleting user:', err);
        return null;
    }
});

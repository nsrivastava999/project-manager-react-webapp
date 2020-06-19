const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello world!");
});

const createNotif = (notif)=>{
    return admin.firestore().collection('notif').add(notif)
    .then((doc)=>{
        console.log('notif added',doc);
    })
}

exports.projectCreated = functions.firestore.document('projects/{projectId}').onCreate(doc=>{
    const project = doc.data();
    const notif = {
        content:'Added a new Project',
        user:`${project.authorFirstName} ${project.authorLastName}`,
        time:admin.firestore.FieldValue.serverTimestamp()
    }
    return createNotif(notif);
})

exports.userJoined = functions.auth.user().onCreate(user => {
    return admin.firestore().collection('users').doc(user.uid).get().then((doc)=>{
        const newUser = doc.data();
        const notif = {
            content:'Joined the Team',
            user:`${newUser.firstName} ${newUser.lastName}`,
            time:admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotif(notif);
    })
})
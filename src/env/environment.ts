export const environment = {
    api: "http://localhost:3001/",
    production: false,
    
    firebase: {
        
    }
}

// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if false;
//     }
//   }
// }
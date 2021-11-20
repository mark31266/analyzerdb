const Firestore = require('@google-cloud/firestore')
const path = require('path'); 

class FirestoreClient {
    constructor() {
        this.firestore = new Firestore({
            projectId: 'analyzerdb',
            keyFilename: path.join(__dirname, './analyzerdb-firebase-adminsdk-8av0j-7749b06ed5.json') 
        })
    }  

    async save(collection, data) {
        const docRef = this.firestore.collection(collection).doc(data.docName); 
        await docRef.set(data); 
    }
    async saveSubCollection(rootCol, rootDocName, SubCol, subColData)
    {
        const docRef = this.firestore.collection(rootCol).doc(rootDocName).collection(subCol).doc(subColData.docName); 
        await docRef.set(subColData); 
    }
    async saveByPath(path, data)
    {
        const docRef = this.firestore.doc(path); 
        await docRef.set(data); 
    }
}
module.exports = new FirestoreClient() ; 
import clientPromise from "@utils/database";
let collection

const client = await clientPromise;
const db = client.db('manuscripts')
collection = db.collection('texts')

export default collection
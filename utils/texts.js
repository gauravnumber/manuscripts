import clientPromise from "@utils/database";

const client = await clientPromise;
const db = client.db('manuscripts')
const collection = db.collection('texts')

export default collection
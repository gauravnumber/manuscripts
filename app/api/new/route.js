import collection from "@utils/texts";

export const POST = async (request) => {
    const text = await request.json()
    console.log(text)

    try {
        const result = await collection.insertOne(text);
        // console.log('Document inserted:', result.insertedId);
        return new Response(`Document inserted`, {
            status: 201, headers: {
                'Cache-Control': 'no-store'
            }
        })

    } catch (error) {
        return new Response("Failed to create a new manuscript", { status: 500 });
    }
}
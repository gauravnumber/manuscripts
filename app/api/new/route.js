import collection from "@utils/texts";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const text = await request.json()
    console.log(text)

    try {
        const result = await collection.insertOne(text);
        return NextResponse.json(result)

    } catch (error) {
        return new Response("Failed to create a new manuscript", { status: 500 });
    }
}
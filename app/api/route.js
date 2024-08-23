import collection from "@utils/texts";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const manuscripts = await collection.find().sort({ createdAt: -1 }).toArray()

        return NextResponse.json(manuscripts)
    } catch (error) {
        return new Response("Failed to fetch manuscripts", { status: 500 })
    }
}
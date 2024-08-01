import collection from "@utils/texts";
import { NextResponse } from "next/server";

export const GET = async (response) => {
    try {
        const manuscripts = await collection.find().sort({ createdAt: -1 }).toArray()
        // console.log(manuscripts)

        return NextResponse.json({ manuscripts })
        // return new Response(JSON.stringify(manuscripts), {
        //     status: 200, headers: {
        //         'Cache-Control': 'no-store'
        //     }
        // })

    } catch (error) {
        return new Response("Failed to fetch manuscripts", { status: 500 })
    }
}
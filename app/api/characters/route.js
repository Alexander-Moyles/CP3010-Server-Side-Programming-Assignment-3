import { connectToDB } from "@/app/api/db";

export async function GET() {
    const {db} = await connectToDB();
    const charaData = await db.collection("characters").find({}).toArray();

    return new Response(JSON.stringify(charaData),
        {
            status: 200,
            headers: { 'Content-Type' : 'application/json'}
        }
    );
}

export async function POST(request) {
    const {db} = await connectToDB();
    const newChara = await request.json();

    const result = await db.collection("characters").insertOne(newChara);
    return new Response(
        "Character added successfully! (id: " + result.insertedId + ")",
        {
            status: 201,
        }
    )
}

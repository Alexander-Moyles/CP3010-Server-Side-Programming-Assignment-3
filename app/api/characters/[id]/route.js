import { connectToDB } from "@/app/api/db";

export async function GET(request,{params}) {
    const {db} = await connectToDB();
    const {id} = await params;

    const currentCharacter = await db.collection("characters").findOne({id: parseInt(id)});
    if (!currentCharacter) {
        return new Response("Character not found", {status: 404});
    }
    return new Response(JSON.stringify(currentCharacter),
        {
            status: 200,
            headers: { 'Content-Type' : 'application/json'}
        }
    );
}

export async function DELETE(request, {params}) {
    const {db} = await connectToDB();
    const {id} = await params;

    const deleteResult = await db.collection("characters").deleteOne({id: parseInt(id)});
    const returnString = deleteResult.deletedCount === 1 ? "Character removed successfully" : "Character not found";
    return new Response(
        returnString,
        {
            status: 200,
        }
    )
}

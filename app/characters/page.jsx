import Link from "next/link";

export default async function CharacterList() {

    const response = await fetch(`${process.env.BACKEND_URL}/api/characters`);
    const data = await response.json();

    console.log(data)

    return (
        <>
            <h2>Characters</h2>
            {data.map((character) => {
                return (
                    <Link key={character.id} href={"/characters/"+character.id}>{character.name}<br/></Link>
                )
            })}
        </>
    )
}

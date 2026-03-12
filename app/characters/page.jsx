import Link from "next/link";

export default async function CharacterList() {

    const response = await fetch(`https://rickandmortyapi.com/api/character`);
    const data = await response.json();

    return (
        <>
            <h2>Characters</h2>
            {data.results.map((character) => {
                return (
                    <Link key={character.id} href={"/characters/"+character.id}>{character.name}<br/></Link>
                )
            })}
        </>
    )
}

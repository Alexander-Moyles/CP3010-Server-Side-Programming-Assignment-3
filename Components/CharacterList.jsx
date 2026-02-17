

export default async function CharacterList() {

    const {apiResponse} = await fetch(`https://rickandmortyapi.com/api/character`);

    return (
        <>
            <div>Placeholder</div>
        </>
    )
}

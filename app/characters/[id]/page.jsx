import Character from "@/Components/Character";

export async function generateStaticParams() {
    const response = await fetch(`https://rickandmortyapi.com/api/character`);
    const data = await response.json();

    return data.results.map((chara) => ({
        id: chara.id.toString()
    }))
}

export default async function CharacterDetail({params}) {
    const {id} = await params;

    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await response.json();
    
    return (
        <Character name={data.name} species={data.species} image={data.image}></Character>
    )
}

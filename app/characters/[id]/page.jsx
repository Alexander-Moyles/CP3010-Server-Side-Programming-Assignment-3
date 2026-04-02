import Character from "@/Components/Character";

export async function generateStaticParams() {
    const response = await fetch(`${process.env.BACKEND_URL}/api/characters`);
    const data = await response.json();

    return data.map((chara) => ({
        id: chara.id.toString()
    }))
}

export default async function CharacterDetail({params}) {
    const {id} = await params;

    const response = await fetch(`${process.env.BACKEND_URL}/api/characters/${id}`);
    const data = await response.json();
    
    return (
        <Character name={data.name} species={data.species} image={data.image}></Character>
    )
}

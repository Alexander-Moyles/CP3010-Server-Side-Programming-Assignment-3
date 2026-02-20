import Character from "@/Components/Character";

export default async function CharacterDetail(props) {
    const {id} = await props.params;

    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const result = await response.json();
    
    return (
        <Character name={result.name} species={result.species} image={result.image}></Character>
    )
}
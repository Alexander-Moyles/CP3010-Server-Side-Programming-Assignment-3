import Image from "next/image";

//TODO: Adjust code for step 5

export default async function CharacterDetail(props) {
    const {id} = await props.params;

    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const result = await response.json();
    
    return (
        <>
            <p>{result.name}</p>
            <p>{result.species}</p>
            <Image
                src={result.image}
                href={result.image}
                alt={result.name}
                height={300}
                width={300}
            />
            {console.log(result.image.width)}
        </>
    )
}
import Image from "next/image";

export default async function Character({name, species, image}) {
    
    return (
        <>
            <p>{name}</p>
            <p>{species}</p>
            <Image
                src={image}
                alt={name}
                height={300}
                width={300}
            />
        </>
    )
}

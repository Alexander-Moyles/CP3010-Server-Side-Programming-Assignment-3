import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>
        Rick & Morty Webpage
      </h1>
      <div>
        Welcome to the webpage, checkout some of the characters!
      </div>
      <Image
        src="/richard_and_mordicai.png"
        alt="Rick & Morty"
        width={327.5}
        height={325}
      />
    </>
  );
}

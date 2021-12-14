import Link from "next/link";
import Image from "next/image";

export default function Artefact({ myHome }: any) {
    const size: number = 120
    return (
        <>
            {myHome.map((home: any, i: number) => (
                <>
                    <Link href={home.lien}>
                        <a target="_blank">
                            <Image
                                className='p-4 m-4'
                                title={home.nom}
                                src={home.image}
                                alt={home.image}
                                height={size}
                                width={size}
                            />
                        </a>
                    </Link>
                </>
            ))}
        </>
    )
}
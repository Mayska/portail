

import Link from 'next/link';
import Image from 'next/image'



export default function Layout({ titre, myHome }: any) {
    const size: number = 150
    return (<>
        <div className="container">
            <h1 >
                {titre}
            </h1>
            <div className="row">
                <div className="col">
                </div>
                <div className="col-8">
                    {myHome.map((home: any, i: number) => (
                        <><Link href={home.lien}>
                            <a target="_blank">
                                <Image
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
                </div>
                <div className="col">
                </div>
            </div>
        </div>
    </>)
}
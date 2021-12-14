import Link from 'next/link';
import Image from 'next/image'
import NavBar from './navbar';

export default function Layout({ titre, myHome }: any) {
    const size: number = 150
    return (<>
        <div className="container">
            <br />
            <br />
            <NavBar />
            <br />
            <div className="row">
                <div className="col">
                </div>
                <div className="col-8">
                    {myHome.map((home: any, i: number) => (
                        <>
                            <Link href={home.lien}>
                                <a target="_blank">
                                    <Image
                                        className='p-3 m-3'
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
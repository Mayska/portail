
import { useState } from 'react';
import Image from 'next/image'
import { Home, PrismaClient, Prisma } from '@prisma/client';
import Link from 'next/link';

const prisma = new PrismaClient();

const size: number = 150

export async function getServerSideProps() {
  const myHome: Home[] = await prisma.home.findMany({
    where: {
      categorie: "home",
      actif: true,
    }
  });
  return {
    props: {
      initialContacts: myHome
    }
  };
}

export default function Index({ initialContacts }: any) {
  const [myHome] = useState<Home[]>(initialContacts);

  return (<>

    <div className="container">
      <h1 >
        My home
      </h1>
      <div className="row">
        <div className="col">
          Column
        </div>
        <div className="col-8">
          {myHome.map((home: Home, i: number) => (
            <><Link href={home.lien}>
              <a target="_blank">
                <Image
                  title={home.nom}
                  src={home.image}
                  alt={home.image}
                  height={size}
                  width={size}
                /></a>
            </Link>
            </>
          ))}
        </div>
        <div className="col">
          Column
        </div>
      </div>
    </div>


  </>
  )
}


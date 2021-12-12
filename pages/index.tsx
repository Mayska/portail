
import { useState } from 'react';
import Image from 'next/image'
import { Home, PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();



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
    <h1 >
      My home
    </h1>
    {myHome.map((home: Home, i: number) => (
      <p key={i}>{home.nom}</p>
    ))}
  </>
  )
}


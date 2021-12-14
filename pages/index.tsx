
import Layout from '../components/layout';
import { Home, PrismaClient, Prisma } from '@prisma/client';
import { useState } from 'react';

const prisma = new PrismaClient();



export async function getServerSideProps() {
  await prisma.home.create({
    data: {
      categorie: 'home',
      image: 'data:image/png;base64,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',
      lien: 'https://www.google.fr',
      nom: 'New Google',
      actif: true
    }
  })

  const myHome: Home[] = await prisma.home.findMany({
    where: {
      categorie: "home",
      actif: true,
    }
  });
  console.log(myHome)
  return {
    props: {
      initialContacts: myHome
    }
  };
}

export default function Index({ initialContacts }: any) {
  const [myHome] = useState<Home[]>(initialContacts);
  return (<>
    <Layout titre="COUCOCUo" myHome={myHome}>
    </Layout>
  </>
  )
}


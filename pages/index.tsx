
import Layout from '../components/layout';
import { Home, PrismaClient, Prisma } from '@prisma/client';
import { useState } from 'react';

const prisma = new PrismaClient();


export async function getServerSideProps() {
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


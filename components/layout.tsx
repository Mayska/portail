import Link from 'next/link';
import Image from 'next/image'
import NavBar from './navbar';
import Footer from './footer';
import Artefact from './artefact';

export default function Layout({ myHome }: any) {
    return (<>
        <div className="container">
            <br />
            <br />
            <NavBar />
            <br />
            <div className="row">
                <div className="col">
                </div>
                <div className="col-10">
                    <Artefact myHome={myHome} />
                </div>
                <div className="col">
                </div>
            </div>
            <Footer />
        </div>
    </>)
}
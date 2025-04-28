import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-screen-lg mx-auto px-4 py-12">
      {/*Intro text / Heading */}
      <section className="text-center mb-16 bg-radial from-blue-100/80 via-sky-100/40 to-[var(--color-background)] to-70% rounded-t-2xl py-16">
        <h1 className="text-3xl md:text-5xl font-bold">
          Styrk arbejdsglæde, trivsel og kommunikation
        </h1>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          Få indblik i de temaer, som Carsten Sommerskov sætter fokus på i sine
          foredrag
        </p>

        <div className="flex flex-col items-center mt-20">
          <iframe
            className="w-full max-w-[720px] aspect-video"
            src="https://www.youtube.com/embed/PHjGHpUfwKo?si=iNqUAG2gtWJeLQiQ"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <p className="mt-2 text-lg">Direktør Kim Axelsen anbefaler</p>
        </div>
      </section>

      {/* Choose a topic --> 4 boxes */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-6">Vælg et emne</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/positivitet"
            className="block border-2 rounded-lg border-[var(--color-secondary)] p-6 hover:shadow-md transition hover:text-[var(--color-hover)]"
          >
            <h3 className="text-xl font-semibold">Positivitet</h3>
          </Link>

          <Link
            href="/kommunikation"
            className="block border-2 rounded-lg border-[var(--color-secondary)] p-6 hover:shadow-md transition hover:text-[var(--color-hover)]"
          >
            <h3 className="text-xl font-semibold">God kommunikation</h3>
          </Link>

          <Link
            href="/udbytte"
            className="block border-2 rounded-lg p-6 border-[var(--color-secondary)] hover:shadow-md transition hover:text-[var(--color-hover)]"
          >
            <h3 className="text-xl font-semibold">
              Hvilket udbytte vil I have?
            </h3>
          </Link>

          <Link
            href="/fa-det-hele"
            className="block border-2 rounded-lg border-[var(--color-secondary)]  p-6 hover:shadow-md transition hover:text-[var(--color-hover)]"
          >
            <h3 className="text-xl font-semibold">Få det hele</h3>
          </Link>
        </div>
      </section>

      {/* About Carsten */}
      <section className="bg-[var(--color-primary)] p-6 md:p-10 flex flex-col md:flex-row gap-6 items-center mb-16 py-8">
        <Image
          src="/Images/carsten.jpg"
          alt="Carsten Sommerskov"
          width={550}
          height={550}
          className="w-50 h-40 rounded-md object-cover"
        />
        <div>
          <Link
            href="/om-carsten"
            className="transition hover:text-[var(--color-hover)]"
          >
            <h2 className="text-2xl font-bold mb-4">Om Carsten Sommerskov</h2>
            <p className="">
              Jeg har mere end 30 års erfaring i undervisning i positiv
              tænkning, arbejdsglæde, trivsel og succes. Jeg har undervist på
              mere end 2500 arbejdspladser og for et samlet antal deltagere på
              over 250.000 mennesker i USA, Danmark, Norge, Sverige, Holland,
              Giraltar og Spanien.
            </p>
          </Link>
        </div>
      </section>

      {/* References */}
      <section className="mb-8 py-8">
        <h2 className="text-2xl font-bold mb-8">Udvalgte referencer</h2>

        {/* Categories grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {/* Offentlige */}
          <div>
            <h3 className="text-md font-semibold">Offentlige</h3>
            <ul className="list-disc pl-6 text-sm space-y-1">
              <li>DSB</li>
              <li>Retten i Kolding</li>
              <li>Hillerød Kommune</li>
            </ul>
          </div>
          {/* Private */}
          <div>
            <h3 className="text-md font-semibold">Private</h3>
            <ul className="list-disc pl-6 text-sm space-y-1">
              <li>ALD Bilsalg</li>
              <li>Creativ Company</li>
              <li>Teleworks</li>
            </ul>
          </div>
          {/* Foreninger */}
          <div>
            <h3 className="text-md font-semibold">Foreninger</h3>
            <ul className="list-disc pl-6 text-sm space-y-1">
              <li>3f Grenå</li>
              <li>Furesø erhvervsforening</li>
              <li>Skole og samfund</li>
            </ul>
          </div>

          {/* Indernationele */}
          <div>
            <h3 className="text-md font-semibold">Internationalt</h3>
            <ul className="list-disc pl-6 text-sm space-y-1">
              <li>ALS - Tórshavn</li>
              <li>Nuuk TV</li>
              <li>Suderø</li>
            </ul>
          </div>
        </div>

        <div className="mb-12 text-right">
          <a
            href="/referencer"
            className="text-sm hover:underline hover:text-[var(--color-hover)] transition font-medium italic"
          >
            Se alle referencer →
          </a>
        </div>

        <h3 className="text-lg font-semibold mb-2 text-center">
          Det siger deltagerne
        </h3>
        <p className="text-center bg-center mb-4 italic">
          Carsten er en god, spændende, dynamisk, humoristisk og fængslende
          underviser med stor erfaring og gennemslagskraft.
        </p>
      </section>
    </main>
  );
}

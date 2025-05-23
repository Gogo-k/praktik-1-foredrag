import Image from "next/image";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import CheckList from "@/components/CheckList";
import { contactList } from "@/data/checkmarkLists";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om Carsten Sommerskov",
};

export default function Om() {
  return (
    <main className="max-w-screen-lg mx-auto px-4 py-12">
      <section className="flex flex-col gap-4 items-center mb-4">
        <Image
          src="/Images/carsten.jpg"
          alt="Carsten Sommerskov"
          width={500}
          height={500}
          className="w-md h-md rounded-lg object-cover mx-auto mb-2"
        ></Image>
        <h2 className="text-3xl md:text-5xl font-bold">Carsten Sommerskov</h2>
        <p className="font-medium text-lg">
          Foredragsholder, Underviser, Forfatter, Mentaltræner, CEO Dygtig,
          Humoristisk og inspirerende foredragsholder
        </p>
        <p>
          Lad mig præsentere mig selv: Jeg har mere end 30 års erfaring i
          undervisning i positiv tænkning, arbejdsglæde, trivsel og succes. Jeg
          har undervist på mere end 2500 arbejdspladser og for et samlet antal
          deltagere på over 250.000 mennesker i USA, Danmark, Norge, Sverige,
          Holland, Gibraltar og Spanien. Her er hvad deltagerne siger: En god,
          spændende, dynamisk, humoristisk og fængslende underviser med stor
          erfaring og gennemslagskraft. Derudover holder jeg også foredrag for
          forældre om børns trivsel og har udgivet mentaltræningsprodukter til
          styrkelse af børns selvværd samt sovehjælp i mange lande.
        </p>
      </section>

      <section className="flex flex-col gap-6 mb-12 items-start">
        <div>
          <h3 className="font-semibold text-lg mb-1">Uddannelse</h3>
          <p>
            Jeg er oprindelig uddannet sygeplejerske og har en pædagogisk
            videreuddannelse fra Århus Universitet. Jeg har taget et væld af
            kurser ffra få dages varighed til etårige forløb mest udenfor
            Danmarks grænser. Jeg har blandt andet taget &quot;Mastery
            University&quot; hos Anthony Robins
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-1">Målgrupper</h3>
          <p>
            Jeg underviser store som små grupper lige fra den lille institution
            til den største industrivirksomhed. Mine foredrag ændrer udtryk så
            de følger med tiden, men indholdet er en stabil kerne, der kan
            målrettes til den enkelte arbejdsplads behov. Ud over foredrag
            underviser jeg også på seminarer og workshops. Jeg har undervist så
            mange steder at jeg efterhånden sjældent redigerer min
            referenceliste - der kan ikke tilføjes meget nyt, jeg ikke har
            prøvet
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-1">Indhold</h3>
          <p>
            Selv om indholdet er seriøst kommer du virkelig til at få rørt
            lattermusklerne. Min erfaring er så lang at jeg kun videregiver
            meget konkrete indsigter og metoder der virker.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-1">Forfatterskab</h3>
          <p>
            Jeg har skrevet mange bøger og CD&apos;er, der er udkommet på otte
            sprog og som sælges i mange lande. Jeg har boet 3 år i Californien,
            men jeg er vendt tilbage til Danmark.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-1">
            Sommerskov International Inc.
          </h3>
          <p>
            Jeg er daglig leder af en lille gruppe medarbejdere, der tager sig
            af salget af mine produkter til styrkelse af børns selvværd i andre
            lande: 2 tysktalende, en svensktalende, en norsktalende, en
            lydansvarlig samt en administrativ.
          </p>
        </div>

        <div className="">
          <h3 className="font-semibold text-lg mb-2">Ring eller skriv</h3>
          <div className="mb-4">
            <CheckList items={contactList} />
          </div>
          <div className="flex items-center gap-2 mb-4">
            <PhoneIcon className="h-5 w-5" />
            <span>Carsten Sommerskov: +45 20 13 10 41</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <EnvelopeIcon className="h-5 w-5" />
            <span>vaekst@vaekst.dk</span>
          </div>
        </div>
      </section>
    </main>
  );
}

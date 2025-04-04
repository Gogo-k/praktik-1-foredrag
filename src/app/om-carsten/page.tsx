import Image from "next/image";

export default function Om() {
  return (
    <main className="max-w-screen-lg mx-auto px-4 py-12">
      <section className="flex flex-col gap-4 items-center mb-4">
        <Image
          src="/Images/carsten.jpg"
          alt="Carstene Sommerskov"
          width={500}
          height={500}
          className="rounded-lg object-cover mx-auto mb-2"
        ></Image>
        <h2 className="text-3xl md:text-5xl font-bold">Carsten Sommerskov</h2>
        <p className="font-medium text-lg">
          Foredragsholder, Underviser, Forfatter, Mentaltræner, CEO Dygtig,
          Humoristisk og inspirerende foredragsholder
        </p>
        <p>
          Lad mig præsentere mig selv: Jeg har mere end 30 års erfaring i
          undervisning i positiv tænkning, arbejdsglæde, trivsel og succes. Jeg
          har undervist på mere end 2500 arbejdspladser og et for samlet antal
          deltagere over 250.000 mennesker i USA, Danmark, Norge, Sverige,
          Holland, Giraltar og Spanien. Her er hvad deltagerne siger: En god,
          spændende, dynamisk, humoristisk og fængslende underviser med stor
          erfaring og gennemslagskraft. Derudover holder jeg også foredrag for
          forældre om børns trivsel og har udgivet mentaltræningsprodukter til
          styrkelse af børns selvværd samt sovehjælp i mange lande.
        </p>
      </section>

      <section className="flex flex-col gap-6 mb-12 items-center">
        <div>
          <h3 className="font-semibold text-lg mb-1">Uddannelse</h3>
          <p>
            Jeg er oprindelig uddannet sygeplejerske og har en pædagogisk
            videreuddannelse fra Århus Universitet. Jeg har taget et væld af
            kurser fra få dages varighed til et årige forløb mest udenfor
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
            prøvet.
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
            Jeg har skrevet mange bøger og CD&apos;er der er udkommet på otte
            sprog og som sælges mange lande. Jeg har boet 3 år i Californien,
            men jeg er vendt tilbage til Danmark.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-1">
            Sommerskov International inc,
          </h3>
          <p>
            Jeg er daglig leder af en lille gruppe medarbejdere der tager sig af
            salget af mine produkter til styrkelse af børns selvværd i andre
            lande: 2 tysktalende, en svensktalende, en norsktalende, en
            lydansvarlig samt en administrativ.
          </p>
        </div>
      </section>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import CheckList from "@/components/CheckList";
import { contactList } from "@/data/checkmarkLists";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kommunikation",
};

export default function Kommunikation() {
  return (
    <main className="max-w-screen-lg mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-5xl font-bold mb-16 text-center">
        God kommunikation
      </h1>

      <section className="mb-16 items-start">
        <h2 className="text-xl font-semibold mb-2">
          Foredrag om god kommunikation
        </h2>
        <p>
          God kommunikation på en arbejdsplads er fundamentet for trivsel og
          arbejdsglæde. Mange trivselsmålinger peger ofte på kommunikation som
          et problem. Oftest ses kommunikation mellem medarbejdere og ledelse
          som det største problem. <br />
          Ca. halvdelen af al kommunikation har mere end én betydning.
          <br /> Forestil dig lederen, der kommer forbi en gruppe medarbejdere,
          der sidder og snakker. Lederen siger: Hvad laver I?
          <br />
          Kan en af dem tænke: Utidig indblanding – kontrol? Og senere på dagen
          referere tilbage til sin afdeling: Vores leder går rundt og
          kontrollerer os? <br />
          Kan en anden af deltagerne få det til at betyde: Interesse og referere
          det tilbage til sin afdeling.
          <br />
          Kan den sidste få det til at betyde, at lederen har nogle opgaver, som
          skal fordeles og referere det tilbage til sin gruppe?
          <br /> Mener de alle tre, at de har forstået det rigtigt?
        </p>
      </section>

      <section className="mb-16 items-start">
        <h2 className="text-xl font-semibold mb-2"> Påstand</h2>
        <p>
          Som regel skyldes dårlig kommunikation ikke et spørgsmål om ond vilje,
          men snarere om forglemmelser, fejlfortolkninger og lignende. Tænk
          engang over at mere end hvert andet ord, der kommer ud munden på os,
          kan tolkes på mindst to måder, og vi tror at den ene måde, som vi selv
          opfatter det på, er den rigtige.
        </p>
      </section>

      <section className="mb-16 grid md:grid-cols-2 gap-4  items-start">
        <div>
          <h2 className="text-xl font-semibold mb-2 ">Sproget er flertydigt</h2>
          <p>
            Tag et eksempel: &quot;Hvorfor gjorde du det på den måde?&quot; kan
            det tolkes som: Interesse? Kritik? Nysgerrighed? Kropssproget er
            flertydigt. Er personen på dette billede Irriteret? Tænksom? Har han
            glemt noget? Hovedpine? eller?
          </p>
        </div>
        <Image
          src={"/Images/kommunikation/kommu1.jpg"}
          alt=""
          width={450}
          height={450}
          className="w-sm h-sm rounded-r-lg object-cover"
        ></Image>
      </section>

      <section className="mb-16 items-start">
        <h2 className="text-xl font-semibold mb-2">Vi tolker på udseendet</h2>
        <p>
          Kan du komme op i en bus og se en person, som du aldrig har set før og
          tænke: &quot;Sød gammel oldemor eller sur gammel gnavpot&quot;, uden
          at personen så meget som har sagt et ord eller flyttet på sig? Er det
          en valid måde at bedømme virkeligheden på? Gør vi det alligevel?
        </p>
      </section>

      <section className="mb-16 items-start">
        <h2 className="text-xl font-semibold mb-2 ">Sproget er flertydigt</h2>
        <p>
          Tag et eksempel: &quot;Hvorfor gjorde du det på den måde?&quot; kan
          det tolkes som: Interesse? Kritik? Nysgerrighed? Kropssproget er
          flertydigt. Er personen på dette billede Irriteret? Tænksom? Har han
          glemt noget? Hovedpine? eller?
        </p>
      </section>

      <section className="mb-16 items-start">
        <h2 className="text-xl font-semibold mb-2">Stemmen</h2>
        <p>
          Du har sikkert prøvet at tale i telefon mange gange med en person og
          så møde vedkommende til sidst. Så vedkommende ud, som du havde
          forestillet dig?
        </p>
      </section>

      <section className="mb-16 grid">
        <h2 className="text-xl font-semibold mb-2 ">Sproget er flertydigt</h2>
        <p>
          Tag et eksempel: &quot;Hvorfor gjorde du det på den måde?&quot; kan
          det tolkes som: Interesse? Kritik? Nysgerrighed? Kropssproget er
          flertydigt. Er personen på dette billede Irriteret? Tænksom? Har han
          glemt noget? Hovedpine? eller?
        </p>
      </section>

      <section className="mb-16 grid md:grid-cols-2 gap-4  items-start">
        <div>
          <h2 className="text-xl font-semibold mb-2">Det manglende sprog</h2>
          <p>
            Det manglende sprog er flertydigt. Chefen går forbi medarbejderen en
            morgen uden at hilse. Kan medarbejderen få det til at betyde:
            Arrogance? Ligegyldighed? Problemer i udsigt? Chefen er stresset?
            Har ikke set mig? Sur? eller?
          </p>
          <p>
            Sæt så det hele sammen. Bliver det entydigt af det? Måske er god
            kommunikation ikke så let endda.
          </p>
        </div>
        <Image
          src={"/Images/kommunikation/kommu2.jpg"}
          alt=""
          width={450}
          height={450}
          className="w-sm h-sm rounded-r-lg object-cover"
        ></Image>
      </section>

      <section className="mb-16 grid">
        <h2 className="text-xl font-semibold mb-2 ">Erfaringerne styrer</h2>
        <p>
          Kunne det tænkes, at vi når vi kender hinanden, så er det i
          virkeligheden de holdninger og de meninger vi har om hinanden, der
          styrer tolkningerne? Kan to kolleger have den stik modsatte holdning
          til en tredie kollega, som de begge kender lige godt. Kan den ene
          mene, at der er dårlig kommunikation og meget negativitet? Kan den
          anden mene, at der er god kommunikation og meget positivitet?
        </p>
      </section>

      <section className="mb-16 grid md:grid-cols-2 gap-4  items-start">
        <div>
          <h2 className="text-xl font-semibold mb-2">Dem og os</h2>
          <p>
            Årtusinders erfaringer med modstandere (oprindelig ville nabostammen
            æde os) har lært os systemet: &quot;Dem mod os&quot;. &quot;Det er
            altså dem ovre i afdeling A der altid er på tværs&quot;.
            &quot;Ledelsen er altid så negativ&quot;. Er det et godt system?
          </p>
        </div>
        <Image
          src={"/Images/kommunikation/kommu3.jpg"}
          alt=""
          width={450}
          height={450}
          className="w-sm h-sm rounded-r-lg object-cover"
        ></Image>
      </section>

      <section className="mb-16 grid md:grid-cols-2 gap-4  items-start">
        <div>
          <h2 className="text-xl font-semibold mb-2">Dem og mig</h2>
          <p>
            &quot;Jeg hader den måde Søren klør sig i nakken på&quot;,
            &quot;Kunne Jette da bare ikke lige tage sig sammen og være lidt
            mere positiv?&quot;, &quot;Behøver han altid, at have hver eneste
            detalje med?&quot;, &quot;Hvis jeg var så langsom, så ville jeg
            grave mig ned!&quot; Måske handler det slet ikke om god
            kommunikation, måske handler det om de holdninger, der ligger bag om
            det hele?
          </p>
        </div>
        <Image
          src={"/Images/kommunikation/kommu4.jpg"}
          alt=""
          width={450}
          height={450}
          className="w-sm h-sm rounded-r-lg object-cover"
        ></Image>
      </section>

      <section className="mb-16 grid">
        <h2 className="text-xl font-semibold mb-2 ">
          Foredrag om god kommunikation på din arbejdsplads
        </h2>
        <p>
          Carsten Sommerskov leverer et spændende og meget humoristisk foredrag,
          der dels får jer til at tænke anderledes, og dels har mulighed for en
          blivende effekt. {""}
          <Link
            href="/udbytte"
            className="text-md hover:text-[var(--color-hover)] transition underline"
          >
            Læs mere
          </Link>
        </p>
      </section>

      <div className="">
        <h2 className="font-semibold text-xl mb-2">
          I kender jeres behov. Vi ved hvordan det gøres.
        </h2>
        <p className="mb-4">
          Få et uforpligtende tilbud. Ring eller skriv en email:
        </p>

        <div className="mb-4">
          <CheckList items={contactList} />
        </div>
        <div className="flex items-center gap-2 mb-4">
          <PhoneIcon className="h-5 w-5" />
          <span>Carsten Sommerskov: +45 20 13 10 41</span>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <EnvelopeIcon className="h-5 w-5" />
          <span>vaekst.vaekst.dk</span>
        </div>
      </div>
    </main>
  );
}

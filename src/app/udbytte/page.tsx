import Image from "next/image";
import Link from "next/link";
import {
  tankList,
  posVirkerList,
  posHolderList,
  contactList,
} from "@/data/checkmarkLists";
import CheckList from "@/components/CheckList";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Udbytte",
};

export default function Udbytte() {
  return (
    <main className="max-w-screen-lg mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-5xl font-bold mb-16 text-center">
        Hvilket udbytte vil i have?
      </h1>

      <section className="mb-16 grid md:grid-cols-2 gap-4 items-start">
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Vi har haft foredrag før - men ...
          </h2>
          <p>
            I havde en sjov og inspirerende dag og vedtog f.eks. 10 regler for
            god kommunikation osv. Det var en inspirerende underviser og I kom
            hjem med gode intensioner, men to uger senere var resultatet tæt på
            nul. Sådan går det med de fleste indlæg af den type. Årsag: Når
            hverdagen tager over nogle få dage efter, så er det glemt. Det er
            ikke tanker, gruppe drøftelser og beslutninger, der styrer
            hverdagen. Det er vanerne og holdningerne, som styrer dagligdagen.
          </p>
        </div>
        <Image
          src={"/Images/udbytte/udbytte1.jpg"}
          alt=""
          width={450}
          height={450}
          className="w-sm h-sm rounded-r-lg object-cover"
        ></Image>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-2">
          Få et større udbytte. Lav om på holdninger og vaner.
        </h2>
        <p className="mb-4">
          Kommunikation, positivitet og arbejdsglæde handler om at skabe fokus.
          Kan du tale med en person eller læse en tekst eller udføre en
          rutineopgave og tænke på noget helt andet? 47% af tiden tænker du på
          noget andet, end det du reelt beskæftiger dig med, og det er rutinen
          der styrer. Og hvad styrer rutinen? Det gør dine holdninger, meninger
          og erfaringer. Kan holdningerne til kollegaen, samarbejdspartneren,
          kunden eller arbejdsopgaven være styrende for kommunikationen? {""}
          <Link
            href="/kommunikation"
            className="text-md hover:text-[var(--color-hover)] transition underline"
          >
            Læs mere
          </Link>
        </p>

        <div className="grid md:grid-cols-2 gap-4 items-center">
          <Image
            src={"/Images/udbytte/udbytte2.jpg"}
            alt=""
            width={450}
            height={450}
            className="w-sm h-sm rounded-l-lg object-cover"
          ></Image>
          <Image
            src={"/Images/udbytte/udbytte3.jpg"}
            alt=""
            width={450}
            height={450}
            className="w-sm h-sm rounded-r-lg object-cover"
          ></Image>
        </div>
      </section>

      <section className="mb-16">
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">
            Tank op - tænk positivt
          </h2>
          <CheckList items={tankList} />
        </div>

        <div className="grid md:grid-cols-2 gap-4 items-start">
          <div>
            <p>
              I får et super inspirerende foredrag hvor I får mange
              &quot;aha&quot; oplevelser. I præsenteres for en række teknikker,
              som den enkelte eller gruppen kan bruge. I får rørt
              lattermusklerne og foredraget efterlader en virkelig positiv
              stemning. Foredraget er velegnet til årsmøder, som indlæg på
              konferencer og som trækplaster til generalforsamlinger. <br />
              <Link
                href={"/positivitet"}
                className="text-md hover:text-[var(--color-hover)] transition underline"
              >
                Et eksempel på en beskrivelse kan ses her
              </Link>
            </p>
          </div>
          <Image
            src={"/Images/udbytte/udbytte4.jpg"}
            alt=""
            width={450}
            height={450}
            className="w-sm h-sm rounded-r-lg object-cover"
          ></Image>
        </div>
      </section>

      <section className="mb-16">
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Positivitet der virker</h2>
          <CheckList items={posVirkerList} />
        </div>

        <div className=" grid md:grid-cols-2 gap-4 items-start">
          <p>
            Først og fremmest skal man forstå, hvordan holdningerne fungerer, og
            hvordan de er opstået. Det giver motivationen for at gøre noget ved
            det. Det er den første del af mit oplæg. Så præsenteres I for en
            række nemme tiltag og metoder der f.eks. fremmer trivslen,
            arbejdsglæden, minimerer negativitet, fremmer samarbejdet eller
            specifikke områder, som I ønsker at fremme. I vælger en af metoderne
            eller lader det være op til de ankelte afdelinger hvad de vil vælge.
          </p>
          <Image
            src={"/Images/udbytte/udbytte5.jpg"}
            alt=""
            width={450}
            height={450}
            className="w-sm h-sm rounded-r-lg object-cover"
          ></Image>
        </div>
      </section>

      <section className="mb-16">
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Positivitet der holder</h2>
          <CheckList items={posHolderList} />
        </div>

        <p className="mb-4">
          Først og fremmest skal man forstå, hvordan holdningerne fungerer, og
          hvordan de er opstået. Det giver motivationen for at gøre noget ved
          det. Det er den første del af mit oplæg. Dernæst skal det trænes, så
          det bliver til automatik. Men hvem får gjort noget ved det i en travl
          hverdag? Derfor skal det være både logisk, nemt, sjovt og udbytterigt
          for den enkelte. Og det skal virke både på den interne kultur og på
          individniveau.{" "}
        </p>
        <h3 className="font-semibold mb-2">Hvordan gøres det i praksis?</h3>
        <ol className="list-decimal list-inside space-y-1 ">
          <li>I vælger inden selve dagen 6-8 stikord, som I sender til mig.</li>
          <li>
            Jeg kommer med et oplæg fyldt med videoklip, stillbilleder og
            eksempler fra andre danske arbejdspladser, der har gjort det.
          </li>
          <li>
            Efter oplægget vælger I 3 af disse stikord. De 3 stikord vælges på
            ca. 10 minutter – det styrer jeg med 30+ års erfaring i, hvordan det
            gøres i en stor gruppe, så alle føler at de har deltaget i
            udvælgelsen.
          </li>
          <li>Derefter deles I op i 3 grupper – en for hvert stikord.</li>
          <li>
            Grupperne arbejder efter mit oplæg med at planlægge deres tiltag, så
            de er klar, når det hele starter.
          </li>
          <li>
            Gruppe nr. 1 tager teten den første uge. Og skal gruppe 1 have hele
            arbejdspladsen til at gøre noget ekstra for det stikord. De skal
            have alle til at gøre mindst to ekstra tiltag for det stikord den
            kommende uge. Eksempel: Positivitet. Måske står de i døren om
            morgenen og hilser med: ”Husk positiviteten i dag”. Kl. 10 sender de
            en e- mail til alle med titlen: Har du husket positiviteten i dag?
            De har måske hængt smileys op i kantinen. Om eftermiddagen har de
            planlagt endnu en ting, og du bliver sagt farvel til med et: ”Tak
            for i dag – du er en god kollega” eller lignende.
          </li>
          <li>
            Gruppe nr. 2 tager over ugen efter med stikord nr. 2 og derefter er
            det gruppe nr. 3.
          </li>
          <li>
            Ugen efter starter det forfra. Der er ideelt set 4 runder = 12 uger.
            Derefter er det blevet en vane. Alle har trænet både på individuelt
            plan og på gruppeplan
          </li>
        </ol>
      </section>

      <section className=" grid md:grid-cols-2 gap-4 md:gap-4 items-start">
        <Image
          src={"/Images/udbytte/udbytte6.jpg"}
          alt=""
          width={450}
          height={450}
          className="w-sm h-sm rounded-lg object-cover"
        ></Image>
        <div className="">
          <h2 className="text-xl font-semibold mb-2">Ring eller skriv</h2>
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
      </section>
    </main>
  );
}

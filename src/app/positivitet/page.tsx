import Image from "next/image";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import CheckList from "@/components/CheckList";
import { contactList } from "@/data/checkmarkLists";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Positivitet",
};

export default function positivitet() {
  return (
    <main className="max-w-screen-lg mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-5xl font-bold mb-12 text-center">
        Positivitet der virker! - skab glæde og overskud
      </h1>

      <section className="mb-16 flex flex-col md:flex-row gap-4 md:gap-16 items-start">
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Hvordan bevarer vi gnisten, optimismen og arbejdsglæden?
          </h2>
          <p>
            Det er svært at bevare gnisten, optimismen og arbejdsglæden i en
            tid, hvor alle har travlt og mange er stressede. De sidste par år
            har budt på virkelige udfordringer. Diverse kriser er blevet dagens
            orden. Ekstreme prisstigninger, manglende eller forsinkede
            leveringer , stigende renter m.m. Men et er sikkert: Dem der er
            positive, konstruktive og optimistiske klarer sig bedst!
          </p>
        </div>
        <Image
          src={"/Images/positivitet/posi1.jpg"}
          alt=""
          width={375}
          height={375}
          className="w-sm h-sm rounded-r-lg object-cover"
        ></Image>
      </section>

      <section className="mb-16 flex flex-col-reverse md:flex-row gap-4 md:gap-16 items-start">
        <Image
          src={"/Images/positivitet/posi2.jpg"}
          alt=""
          width={375}
          height={375}
          className="w-sm h-sm rounded-l-lg object-cover"
        ></Image>
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Hvordan klarer vi forandringer bedst muligt?
          </h2>
          <p>
            Hvis vi bliver sure og stressede, går det aldrig. Så vi har brug for
            at være konstruktive. Mangel på konstruktivitet giver et negativt
            liv. Konstruktivitet giver et positivt liv og et godt arbejdsmiljø.
          </p>
        </div>
      </section>

      <section className="mb-16 flex flex-col md:flex-row gap-4 md:gap-16 items-start">
        <div>
          <h2 className="text-xl font-semibold mb-2">Det virker ikke!?</h2>
          <p>
            Erfaring: &quot;Vi var til et foredrag, der skabte begejstring, men
            efter kort tid var det væk.&quot; Dette foredrag er ikke en af de
            slags. Det er et lynkursus med en spændende og humoristisk
            foredragsholder, det er sjovt. Det giver mange gode indsigter, men
            det er ikke bare et par timers pep. Det er meget konkrete værktøjer,
            som kan bruges i hverdagen, og der er gratis &quot;hotline&quot; i
            tre måneder. Efter &quot;we&quot; – kommer der et automatisk
            &quot;are&quot;. Der er ingen grund til at spekulere over det, det
            er automatik. Vælg tre stikord som humor, energi, positivitet,
            sammenhold, kvalitet … og se dem blive lige så automatiske.
          </p>
        </div>
        <Image
          src={"/Images/positivitet/posi3.jpg"}
          alt=""
          width={375}
          height={375}
          className="w-sm h-sm rounded-r-lg object-cover"
        ></Image>
      </section>

      <section className="mb-16 flex flex-col-reverse md:flex-row gap-4 md:gap-16 items-start">
        <Image
          src={"/Images/positivitet/posi4.jpg"}
          alt=""
          width={375}
          height={375}
          className="w-sm h-sm rounded-l-lg object-cover"
        ></Image>
        <div>
          <h2 className="text-xl font-semibold mb-2">Mere arbejdsglæde</h2>
          <p>
            Hjernen er en biologisk computer, der styrer livet! Den styrer ud
            fra gamle programmer. De programmer, der ikke gavner, kan ændres
            såvel individuelt som for et team! Når vi kalder det et lynkursus og
            et foredrag, så er det fordi indholdet svarer til et helt kursus,
            men det tager kun fra 1½ til 8 timer.
          </p>
        </div>
      </section>

      <section>
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
            <span>vaekst@vaekst.dk</span>
          </div>
        </div>
      </section>
    </main>
  );
}

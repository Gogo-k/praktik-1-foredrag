import Image from "next/image";

export default function FaDetHelePage() {
  return (
    <main className="max-w-screen-lg mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-5xl font-bold mb-12 text-center">
        Få det hele
      </h1>
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-2">Det hele hænger sammen</h2>
        <p>
          Når kommunikationen bliver bedre stiger positiviteten.
          <br /> Når positiviteten stiger bliver samarbejdet bedre.
          <br />
          Når samabejdet bliver bedre øges trivslen. <br />
          Når trivslen stiger øges arbejdsglæden. <br />
          Når arbejdsglæden stiger mindskes sygefraværet. <br />
          osv.
        </p>
      </section>

      <section className="mb-16 grid md:grid-cols-2 gap-4 md:gap-0 items-center">
        <Image
          src={"/Images/det-hele/fa1.jpg"}
          alt=""
          width={450}
          height={450}
          className="rounded-l-lg object-cover"
        ></Image>
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Godt samarbejde er roden til alt godt
          </h2>
          <p>
            Kunne det tænkes, at en arbejdsplads der præges af et godt
            samarbejde: <br />
            Tiltrækker nye dygtige medarbejdere?
            <br />
            Skaber trivsel og arbejdsglæde?
            <br />
            Tiltrækker tilfredse kunder?
            <br />
            Har mindre sygefravær?
            <br />
            Overlever kriser bedre?
            <br />
            Har succes og vækst?
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-2">
          Gør jeres samarbejde endnu bedre
        </h2>
        <p>
          Et godt samarbejde karakteriseres af viden om de andres evner og
          kompetencer. <br /> Viden om og interesse for de andres arbejde.
          <br /> Omsorg for hinandens trivsel og velbefindende.
          <br /> En god stemning, En god kommunikation, positivitet,
          arbejdsglæde .......
        </p>
      </section>

      <section className="mb-16 grid md:grid-cols-2 gap-4 md:gap-0 items-center">
        <Image
          src={"/Images/det-hele/fa2.jpg"}
          alt=""
          width={450}
          height={450}
          className="rounded-l-lg object-cover"
        ></Image>
        <div>
          <h2 className="text-xl font-semibold mb-2">Arbejdsglæde</h2>
          <p>
            Det handler kun om ledelsen eller gør det?
            <br />
            Hvordan er omgangstonen? <br /> Hvor tit roser medarbejderne
            lederne?
            <br /> Hvor ofte påskønner lederne medarbejderne? <br />
            Er samarbejdet i top.
            <br /> Tænker alle på hinanden?
            <br /> Er team spirit i top eller er det &quot;os mod de
            andre&quot;?
            <br /> Hvor stor er interessen for kollegerne og deres trivsel?
            <br />
            Får dem der har brug for en hjælpende hånd tilbudt hjælp?
            <br /> Er der en god kommunikation, der handler om muligheder og
            positivitet?
          </p>{" "}
        </div>
      </section>

      <section className="mb-16">
        <h3 className="text-xl font-semibold mb-2">Mindre sygefravær</h3>
        <p className="mb-4">
          Et enkelt foredrag kan nedbringe sygefraværet. En stor arbejdsplads
          trænede som et af emnerne sammenhold. De fik 38% mindre sygefravær, og
          det holdt stadig 3 år senere. Se deres direktør udtale sig om effekten
          på videoen herunder. De fik mindre sygefravær, fordi de styrkede
          sammenholdet. Resultat: Den enkelte medarbejder tænkte sig om en
          ekstra gang, inden han eller hun sygemeldte sig.
        </p>

        <div className=" rounded-lg overflow-hidden">
          <iframe
            src="https://www.youtube.com/watch?v=Njnpppo1w1o"
            title="Mindre sygefravær efter foredrag"
            allowFullScreen
            className="w-full h-full mb-4"
          />
        </div>

        <div className=" space-y-1">
          <p className="font-semibold">
            Her er resultater fra konkrete danske arbejdspladser:
          </p>
          <ul className="list-disc list-inside columns-2 md:columns-4 gap-4">
            <li>38% mindre sygefravær</li>
            <li>12% større omsætning</li>
            <li>Bedre kommunikation</li>
            <li>Mere arbejdsglæde</li>
            <li>Bedre samarbejde</li>
            <li>Større fleksibilitet</li>
            <li>Øget effektivitet</li>
          </ul>
        </div>
      </section>

      <section className="mb-16">
        <h3 className="text-xl font-semibold mb-2">Team Spirit</h3>
        <p className="mb-4">
          Carsten Sommerskov har udviklet en enkel og effektiv metode til at
          skabe den helt rigtige ånd:
          <br />I vælger tre positivt ladede stikord. Ord som kan fremme jeres
          team spirit: positivitet, glæde, energi, humor, sammenhold, kvalitet,
          succes, vækst ...
        </p>
        <div className="flex justify-center ">
          <Image
            src={"/Images/det-hele/fa3.jpg"}
            alt=""
            width={450}
            height={450}
            className="rounded-l object-cover mb-4"
          />
        </div>

        <p className="mb-4">
          Carsten Sommerskov viser jer i løbet af sit foredrag en række
          eksempler i form af små videoklip og stillbilleder på hvordan, det er
          gjort på andre arbejdspladser. <br /> Mens han er der, vælger I en
          ikke-chef som tovholder og en gruppe for hvert stikord og så starter
          processen et par dage senere. <br /> Tovholderen og dennes gruppe skal
          holde jer alle til ilden ved at minde jer om det mange gange i løbet
          af dagen. De sørger f.eks. for at sende jer alle en mail: &quot;Husk
          lige at gøre 2 ekstra ting for positiviteten i dag&quot;.
        </p>
        <div className="flex justify-center">
          <Image
            src={"/Images/det-hele/fa4.jpg"}
            alt=""
            width={450}
            height={450}
            className="rounded-l object-cover justify-center mb-4"
          />
        </div>

        <p className="mb-4">
          De sørger for små begivenheder. Han står f.eks. indenfor døren om
          morgenen og giver hånd og siger &quot;Velkommen på arbejde - husk lige
          positiviteten i dag&quot;. Processen fortsætter i en uge. Derefter
          skiftes til stikord nr. 2 og den næste tovholder og gruppe tager over.
          Dernæst stikord nr. 3 og derefter startes forfra. I alt forløber
          træningen i 12 uger. Så har I alle trænet, nøjagtigt som du trænede at
          køre på cykel som barn: Nu mange år senere kan du køre på cykel, du
          har blivende effekt af din træning.
        </p>

        <p>
          En kendt golfspiller blev interviewet af en journalist efter at have
          lavet &quot;hole in one&quot; i en turnering. <br /> Journalisten
          sagde: &quot;Hvor var du dog fantastisk heldig, du må være
          forfærdeligt glad&quot; <br /> Han svarede: &quot;Ja, fornyligt har
          jeg lagt mærke til - At jo mere jeg træner, jo heldigere bliver
          jeg&quot;
        </p>
      </section>
    </main>
  );
}

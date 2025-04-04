import ExpandableBox from "@/components/ExpandableBox";
import referencerData from "@/data/referencerData";

export default function Referencer() {
  return (
    <main className="max-w-screen-lg mx-auto px-4 py-12 w-full">
      <h1 className="text-3xl md:text-5xl font-bold mb-2 text-center">
        Referencer
      </h1>
      <p className="text-md mb-6 italic">
        {"(referencelisterne opdateres ikke, fordi der stort set intet nyt er at tilføje," +
          "og jeg føler det anmasende at spørge om tilladelse, når det ikke har noget formål. " +
          "Jeg svarer gerne mundtligt på, hvor jeg har undervist på det seneste.)"}
      </p>

      <ExpandableBox
        title="Offentlige Virksomheder"
        items={referencerData.offentlige}
      />

      <ExpandableBox
        title="Privat Erhvervsliv"
        items={referencerData.private}
      />

      <ExpandableBox title="Foreninger" items={referencerData.foreninger} />

      <ExpandableBox
        title="Internationalt"
        items={referencerData.internationale}
      />
    </main>
  );
}

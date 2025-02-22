import FeatureCard from "../components/Feature_page/FeatureCard";

function FeaturesPage() {
  const cards = [
    {
      id: 1,
      name: "Donec consectetur adipiscing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque at ante dui. Nam at nunc venenatis, molestie lorem at, lacinia magna.",
      image: "case.png",
    },
    {
      id: 2,
      name: "Donec consectetur adipiscing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque at ante dui. Nam at nunc venenatis, molestie lorem at, lacinia magna.",
      image: "computer.png",
    },
    {
      id: 3,
      name: "Donec consectetur adipiscing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque at ante dui. Nam at nunc venenatis, molestie lorem at, lacinia magna.",
      image: "docs.png",
    },
    {
      id: 4,
      name: "Donec consectetur adipiscing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque at ante dui. Nam at nunc venenatis, molestie lorem at, lacinia magna.",
      image: "ai.png",
    },
  ];
  return (
    <>
      <section className="bg-secondary pb-20 pt-16 md:px-10" id="featurePage">
        <div className="text-center">
          <h1 className="text-cyan-700 font-medium text-2xl md:text-4xl">
            Features
          </h1>
          <p className="font-semibold text-gray-900 md:text-lg">
            Why you choose Internnook for Internship?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 mt-3.5">
          {cards.map((data) => {
            return (
              <FeatureCard
                key={data.id}
                image={data.image}
                name={data.name}
                description={data.description}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default FeaturesPage;

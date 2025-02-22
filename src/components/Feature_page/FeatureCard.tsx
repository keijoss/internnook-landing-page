interface CardProps {
  image: string;
  name: string;
  description: string;
}

function FeatureCard({ image, name, description }: CardProps) {
  return (
    <>
      <div
        className="flex items-center gap-4 px-3"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div
          className=" min-w-40 max-h-40 p-2 flex flex-col items-center justify-center text-center
            shadow-gray-300 shadow-2xl"
        >
          <img src={`../images/${image}`} alt="" className="w-20 h-20" />
          <p className="text-sm">{name}</p>
        </div>
        <p className="text-sm font-normal">{description}</p>
      </div>
    </>
  );
}

export default FeatureCard;

import { content } from "../../../../utilities/constants/data";

const Features = () => {
  return (
    <section id="features" class="bg-gray-900 text-white">
      <div class="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 mx-auto">
        <div class="max-w-xl">
          <h2 class="text-3xl font-bold sm:text-4xl">
            What makes <span className="text-indigo-600">Qwizbot</span> special
          </h2>

          <p class="mt-4 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum
            sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima.
          </p>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {content.features.map((feature, index) => (
            <div class="flex items-start" key={index}>
              <span class="flex-shrink-0 rounded-lg bg-gray-800 p-4">

                {feature.icon}
              </span>
              

              <div class="ml-4">
                <h2 class="text-lg font-bold">{feature.title}</h2>

                <p class="mt-1 text-sm text-gray-300">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

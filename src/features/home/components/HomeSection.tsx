import Image from 'next/image';

const HomeSection = () => {
  return (
    <section className="p-11 h-svh overflow-y-hidden">
      <h1 className="text-7xl font-semibold text-center tracking-tighter mt-[clamp(2rem,10svh,5rem)] lg:text-9xl md:text-8xl">
        <span>Van&rsquo;</span>
        <wbr />
        <span className="inline-block">Minh</span>
      </h1>
      <div className="flex justify-center my-8">
        <Image
          src="/dot.webp"
          width={100}
          height={50}
          alt="dot"
          className="w-9"
        />
      </div>

      <div className="lg:hidden">
        <TextMobile />
      </div>
      <div className="hidden lg:block">
        <TextDesktop />
      </div>
    </section>
  );
};

export default HomeSection;

const TextMobile = () => {
  return (
    <>
      <div>
        <div>
          <p className="text-center md:px-40">
            Van’ Minh — Creative Developer specializing in interactive
            storytelling, fluid motion, and scalable web architecture.
          </p>
        </div>
        <div>
          <p className="text-center mt-4 md:px-40">
            Bridging the gap between aesthetic design and functional
            engineering. Crafting digital experiences that move.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-32">
        <Image
          src="/cat.webp"
          width={600}
          height={600}
          alt="cat"
          className="w-52"
          priority
        />
      </div>
    </>
  );
};

const TextDesktop = () => {
  return (
    <>
      {' '}
      <div>
        <p className="text-center mt-4">
          Perfection is achieved, not when there is nothing more to add, but
          when there is nothing left to take away.
        </p>
        <p className="text-center ">—Antoine de Saint-Exupéry—</p>
      </div>
      <div className="flex item">
        <div>
          <p className="text-center">
            Van’ Minh — Creative Developer specializing in interactive
            storytelling, fluid motion, and scalable web architecture.
          </p>
        </div>
        <div className="flex justify-center ">
          <Image
            src="/cat.webp"
            width={600}
            height={600}
            alt="cat"
            className="w-52"
            priority
          />
        </div>
        <div>
          <p className="text-center ">
            Bridging the gap between aesthetic design and functional
            engineering. Crafting digital experiences that move.
          </p>
        </div>
      </div>
    </>
  );
};

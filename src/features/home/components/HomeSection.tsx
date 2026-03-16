import Image from 'next/image';

const HomeSection = () => {
  return (
    <section className="p-11 h-svh overflow-y-hidden">
      <h1 className="text-7xl font-semibold text-center tracking-tighter mt-[clamp(1rem,3svh,5rem)] lg:text-9xl md:text-8xl">
        <span>Van&rsquo;</span>
        <wbr />
        <span className="inline-block">Minh</span>
      </h1>
      <div className="flex justify-center my-8 lg:hidden">
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
      <div className="hidden lg:block ">
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
          <p className="text-center ">
            Van’ Minh — Creative Developer specializing in interactive
            storytelling, fluid motion, and scalable web architecture.
          </p>
        </div>
        <div>
          <p className="text-center mt-4 ">
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
    <div className="fixed left-1/2 -translate-x-1/2 bottom-17 ">
      {/* <div>
        <p className="text-center mt-4">
          Perfection is achieved, not when there is nothing more to add, but
          when there is nothing left to take away.
        </p>
        <p className="text-center ">—Antoine de Saint-Exupéry—</p>
      </div> */}
      <div className="flex items-center gap-10">
        <div>
          <p className="text-center text-[2vh]">
            Van’ Minh — Creative Developer specializing in interactive
            storytelling, fluid motion, and scalable web architecture.
          </p>
        </div>
        <div className="flex justify-center shrink-0">
          <Image
            src="/cat.webp"
            width={600}
            height={600}
            alt="cat"
            className="h-[30vh] w-auto shrink-0"
            priority
          />
        </div>
        <div>
          <p className="text-center text-[2vh]">
            Bridging the gap between aesthetic design and functional
            engineering. Crafting digital experiences that move.
          </p>
        </div>
      </div>
    </div>
  );
};

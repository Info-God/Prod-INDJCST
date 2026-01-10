import Title2h2 from "../other/Title2h2";

export default function AboutSection() {
  return (
    <section className="gap-4 mx-6 lg:mx-auto lg:ml-16 lg:mr-4 xl:mr-16 ">
      <div className=" mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Image Placeholder */}
        <div className="md:w-1/2 flex items-center justify-start">
          <img loading='lazy'
            src="./aboutHome.webp" className="w-full max-w-md 2xl:max-w-xl" alt="about image" />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2">
          {/* <h2 className="text-3xl font-semibold text-primaryText mb-4">Welcome to INDJCST</h2> */}
          <Title2h2>INDJCST Welcomes You!</Title2h2>
          <h3 className="font-medium text-sm xl:text-base 2xl:text-lg leading-relaxed">Empowering researchers. Advancing technology. Publishing excellence.</h3>
          <p className="text-secondaryText mb-4 text-sm xl:text-base 2xl:text-lg leading-relaxed mt-6">
            The Indian Journal of Computer Science and Technology (INDJCST) (e-ISSN: 2583-
            5300) is a reputable, open-access journal dedicated to publishing high-quality research papers
            across all domains of Computer Science and Technology. As one of the top computer
            science journals in India, and listed among the best computer science journals, INDJCST
            provides a reliable platform for academicians, educators, researchers, engineers, and industry
            professionals.
          </p>
          <p className="text-secondaryText text-sm xl:text-base 2xl:text-lg leading-relaxed mt-6">
            Published three times a year, INDJCST follows the best computer science journals list
            standards and adheres strictly to UGC-CARE guidelines. Our rigorous peer-review process
            ensures that every submission meets the highest standards of scholarly excellence, making
            INDJCST a trusted journal of computer science and an excellent choice for authors seeking
            fast publication computer science journals or fast publishing computer science journals.
          </p>
        </div>
      </div>
    </section>
  );
}

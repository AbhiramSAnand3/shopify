import cover from '../assets/img/About.avif';

const About = () => {
  return (
    <>
      <section
        className="bg-white justify-center text-center py-16 px-4 md:px-12 pt-32 lg:px-20"
        id="about"
      >
        <div className="flex flex-col lg:flex-row bg-[#bf9774] justify-center items-center text-white rounded-xl overflow-hidden shadow-md">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src={cover}
              alt="Curated Art"
              className="w-full h-full object-cover justify-center items-center"
            />
          </div>

          {/* Text Content Section */}
          <div className="w-full lg:w-1/2 lg:pl-12 p-8">
            <p className="text-lg mb-6">
            At Shopify we blend timeless style with modern convenience, offering curated fashion collections through an innovative online experience powered by Shopify. Our mission is to inspire confidence and individuality, ensuring every piece feels as exceptional as the person wearing it.
            </p>
            <button className="bg-[#ffffff] text-[#0f293e] py-2 px-6 rounded-full hover:bg-black hover:text-white transition-all">
              Read more
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

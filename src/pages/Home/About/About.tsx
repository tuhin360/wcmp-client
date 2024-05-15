const About = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 my-32 bg-gray-100 rounded-lg p-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-extrabold mb-4">About Us</h2>
          <h3 className="text-2xl font-semibold mb-2">Our Mission & Objectives</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At the Winter Clothing Management Platform, we are driven by a singular mission: to ensure that no one in our community faces the harsh winter months without access to warm clothing. We believe that every individual deserves to stay safe and comfortable during the coldest times of the year, regardless of their circumstances.
          </p>
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-gray-400 transition duration-300">
            Learn More
          </button>
        </div>
        <div className="relative overflow-hidden rounded-lg">
          <img
            className="object-cover w-full h-full absolute top-0 left-0 z-0"
            src="https://plus.unsplash.com/premium_photo-1683141170766-017bf7a2ecb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Winter Clothing"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-white text-center">
            <h3 className="text-3xl font-bold mb-2">Empowering Communities</h3>
            <p className="text-lg">Making a difference one clothing item at a time</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  
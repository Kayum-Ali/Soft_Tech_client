

const Service = () => {
    return (
        <div className="bg-[#E8E8E8]">
            <div className="container mx-auto">
                <div className="py-20 text-center">
                    <h2 className="lg:text-3xl text-2xl font-bold">How can we help grow your business?</h2>
                    <p className="lg:text-xl pt-5">Discover how our reliable, secure, and scalable services, paired with 24/7 support, drive business growth</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10  pb-20 px-4 lg:px-0">

                    <div className="bg-white px-5 pt-5 hover:-translate-y-1 hover:translate-x-1 hover:duration-300 hover:shadow-2xl rounded-lg h-[450px]">
                        <img className="flex justify-center" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723560325/stats-scalable_a9xk14.webp" alt="" />
                        <p className="text-center pt-5">Our services ensure consistent performance, minimizing downtime and maximizing productivity</p>
                    </div>
                    
                    <div className="bg-white px-5 pt-5 hover:-translate-y-1 hover:translate-x-1 hover:duration-300 hover:shadow-2xl rounded-lg h-[450px]">
                        <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1723560407/stats-reliable_tn0frd.webp" alt="" />
                        <p  className="text-center pt-5">Our solutions grow with your business, adapting to increasing demands effortlessly and seamlessly</p>
                    </div>

                    <div className="bg-white px-5 pt-5 hover:-translate-y-1 hover:translate-x-1 hover:duration-300 hover:shadow-2xl rounded-lg h-[450px]">
                        <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1723560520/stats-secure-new_chajvw.webp" alt="" />
                        <p  className="text-center pt-5">We prioritize data protection with advanced security measures, safeguarding your business information</p>
                    </div>

                    <div className="bg-white px-5 pt-5 hover:-translate-y-1 hover:translate-x-1 hover:duration-300 hover:shadow-2xl rounded-lg h-[450px]">
                        <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1723560545/stats-support_h98kjt.webp" alt="" />
                        <p  className="text-center pt-5">Our dedicated team provides round-the-clock assistance, ensuring seamless business operations</p>
                    </div>



                </div>

            </div>
            
        </div>
    );
};

export default Service;
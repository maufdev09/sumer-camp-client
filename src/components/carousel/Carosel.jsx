const Carosel = () => {
  return (
   <div>
    
    <section className="block">
      <div className="px-5 md:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="py-16 md:py-24 lg:py-32">
            <div className="grid items-center max-[991px] justify-items-start grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20">
              <div className="max-[991px] max-w-[720px]">
                <h1 className="font-bold mb-4 text-4xl md:text-6xl">SportsPro Academy Where Champions Are Made</h1>
                <div className="max-w-[528px] mb-6 md:mb-10 lg:mb-12">
                  <p className="text-[#636262] text-sm sm:text-xl">SportPro Academy Where Passion Meets Performance in the World of Sports</p>
                </div>
                <div className="flex items-center mb-6 md:mb-10 lg:mb-12">
                  <a href="/classes" className="inline-block cursor-pointer items-center bg-black px-8 py-4 text-center font-semibold text-white mr-5 md:mr-6 lg:mr-8">See Classes</a>
                  <a href="/instructor" className="flex-row flex max-w-full items-center justify-center border border-solid border-black px-6 py-3 font-bold text-black">
                    <p className="text-black max-[479px] text-sm">See Instructor</p>
                  </a>
                </div>
                <p className="max-[479px] text-sm">Used by</p>
                <div className="mt-2 grid-cols-5 grid items-center gap-8">
                 
                  <a href="#" className="flex max-w-full items-center text-black">
                    <img src="https://png.pngtree.com/png-clipart/20211121/original/pngtree-university-logo-png-image_6950962.png" alt="" className="inline-block max-w-full" />
                  </a>
                  <a href="#" className="flex max-w-full items-center text-black">
                    <img src="https://png.pngtree.com/png-clipart/20230623/original/pngtree-school-logo-design-template-vector-png-image_9204124.png" alt="" className="inline-block max-w-full" />
                  </a>
                  <a href="#" className="flex max-w-full items-center text-black">
                    <img src="https://png.pngtree.com/png-clipart/20230325/original/pngtree-education-logo-and-school-badge-design-template-png-image_9003869.png" />
                  </a>
                  <a href="#" className="flex max-w-full items-center text-black">
                    <img src="https://png.pngtree.com/png-clipart/20200720/original/pngtree-blue-geometric-square-book-educational-university-logo-png-image_4774505.jpg" alt="" className="inline-block max-w-full" />
                  </a>
                </div>
              </div>
              <div className="">
                <img src="https://images.pexels.com/photos/3651674/pexels-photo-3651674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   </div>
  );
};

export default Carosel;

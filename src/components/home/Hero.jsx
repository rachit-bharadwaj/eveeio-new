import { useState } from "react";

const Hero = () => {
  const [video, setVideo] = useState(false);
  const closeVideo = () => {
    setVideo(false);
  };
  const playVideo = () => {
    setVideo(true);
    // scroll to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="">
      {/* video */}
      
      <div
        className={
          video
            ? `absolute w-full left-0 overflow-hidden flex justify-center -top-14 z-[45] lg:top-44`
            : `hidden`
        }
      >
        <video
          src="/images/hero/hero-video.mp4"
          className="h-[40rem] bg-gray-500 w-[18rem] rounded-lg lg:w-[70rem] lg:h-[35rem]"
        />
        <p
          onClick={closeVideo}
          className="text-3xl -ml-7 text-white relative cursor-pointer"
        >
          X
        </p>
      </div>

      <div className="w-11/12  mx-auto  md:flex flex-row justify-between ">
        <div className="hidden lg:block md:block mt-5">
          <div className="rectangle ">
            <img
              src="/images/hero/rectangle.svg"
              alt=""
              srcset=""
              className=" "
            />
          </div>

          <div className=" h-96 md:w-80  lg:w-[50%] m-4 rectangle-4 p-4">
            <h1 className="font-semibold text-3xl lg:p-4">
              A Great App Makes Your Life Better
            </h1>
            <p className="lg:px-4">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>

            <p className="lg:p-4 text-xl">Download App Now</p>

            <div className="p-4 w-full flex">
              <div className="bg-black w-1/2 text-white text-xs border flex rounded-lg p-2 ">
                <img src="/images/hero/google-play 1.svg" alt=""/>
                <p>
                  Get it on <p className="text-sm"> Google play</p>
                </p>
              </div>

              <div className="bg-black w-1/2 text-white text-xs  border flex rounded-lg p-2 ">
                <img
                  src="/images/hero/ic_baseline-apple.svg"
                  alt=""
                  srcset=""
                />
                <p>
                  Download on the <p className="text-sm">App Store </p>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="items-center">
          <div className="w-full mx-auto h-full -mt-12 flex ">
            <img
              src="/images/hero/phone-screen.svg"
              alt="phone-screen"
              srcset=""
              className="mx-auto h-96  md:h-4/5 sm:h-full"
            />

            
            <div
              className="text-xl text-white  cursor-pointer md:flex md:flex-col items-center   hidden h-fit lg:mt-[28rem] "
              onClick={playVideo}
            >
               <img
                src="/images/hero/play-icon.svg"
                alt=""
                srcset=""
                className="h-10 w-10 "
              />
              <p>Watch&nbsp;Video</p>
             
            </div>
            
          </div>
          <div className=" md:hidden lg:hidden">
            <h1 className="text-yellow-400 text-center my-5 text-2xl font-extrabold ">DOWNLOAD NOW</h1>
          <div className="p-4 w-full  justify-between flex">
              <div className="bg-black w-[45%] text-white text-xs border flex rounded-lg p-1 items-center ">
                <img src="/images/hero/google-play 1.svg" alt="" srcset="" className="h-10 w-10"/>
                <p>
                  Get it on <p className="text-sm font-bold"> Google play</p>
                </p>
              </div>

              <div className="bg-black w-[45%] text-white text-xs  border flex rounded-lg p-1 space-x-2 items-center">
                <img
                  src="/images/hero/ic_baseline-apple.svg"
                  alt=""
                  srcset=""
                  className="h-10 w-10"
                />
                <p>
                  Download on  <p className="text-sm">App Store </p>{" "}
                </p>
              </div>
            </div>
            <div className="w-full flex justify-end px-5">
            <div
              className="text-xl text-white  cursor-pointer  items-center w-fit flex flex-col     lg:hidden md:hidden  h-fit lg:mt-[28rem]"
              onClick={playVideo}
            >  
               <img
                src="/images/hero/play-icon.svg"
                alt=""
                srcset=""
                className="h-10 w-10"
              />
              <p>Watch Video</p>
             
            </div>
            </div>
          </div>
        </div>
      </div>
      
    </div> /*hero div close*/
  );
};

export default Hero;

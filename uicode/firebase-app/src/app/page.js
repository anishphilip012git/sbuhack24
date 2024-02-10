import Footer from "@/components/Footer";
import { HistoryNote } from "@/components/HistoryNote";
// import RecordVoice from "@/components/RecordVoice";


export default function Home() {
  return (
    <div>

        <div className=" font-custom pt-24 h-screen bg-white text-center dark:bg-slate-100">
          <h1 className="text-5xl font-extrabold leading-tight tracking-tighter sm:text-5xl md:text-5xl lg:text-6xl dark:text-slate-700 text-center">
            Stay grateful in <br />
            your future endeavors
          </h1>
          <p className="text-slate-700 dark:text-slate-900  text-base sm:text-sm md:text-xl text-center mt-4">
            <span className="text-center hidden sm:inline">
              What are you grateful for at the moment ? Send a message to the <br />
              future, so you can watch ,
            </span>
            when you feel tired and overwhelmed and
            <br/> be grateful to God for how far you've come.
          </p>
          <div className=" text-center ">
            <button className="hover:scale-110 text-white bg-black  dark:bg-white dark:text-black text-base font-medium px-4 py-2 rounded-md mt-12">
              Record a Message
            </button>
            <a href="https://github.com/shekinahmanyi/gratefulme" className="hover:-translate-y-1 hover:scale-110 text-black bg-white dark:bg-slate-600 dark:text-white text-base font-medium px-4 py-2 rounded-md mt-12 ml-6">
              Learn How it's built
            </a>
          </div>
          <div className="mt-24">

          </div>
        </div>
      
        <div class="grid grid-cols-1 sm:grid-cols-3 space-x-12 items-center justify-center">
          <HistoryNote/> 
          <HistoryNote/> 
          <HistoryNote/> 

  
        </div>
        
        <Footer />
      </div>

      );
}

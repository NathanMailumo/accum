import { Navbar } from "./Components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export function App() {
  return (
    <>
      <Navbar />
      <main className="bg-white bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] [background-size:50px_50px]">

        <section>
          <div className="flex min-h-[90vh] flex-col items-center justify-center gap-5">
            <h1 className="text-8xl font-bold redaction-70-bold">
              Make your hours <span className="flex justify-center text-[#ef5455]">count</span>
            </h1>
            <p className="text-xl space-mono-regular py-md">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias nobis maiores <span className="flex justify-center py-2">blanditiis sint. Tenetur, odit.</span></p>
            <button className="bg-black text-white font-bold p-5 rounded-2xl">
              Get Started
              <span className="px-3"><FontAwesomeIcon icon={faArrowRight} className="text-sm text-white gap-x-3 px rounded-xl"/></span>
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

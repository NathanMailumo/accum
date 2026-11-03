import { Navbar } from "./Components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import hourglass from "./assets/hourglass.svg";

export function App() {
  return (
    <>
      <Navbar />
      <main className="h-[calc(100vh-56px)] overflow-hidden bg-[#0b0b0b] bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:100px_100px] text-white">
        <section className="relative isolate h-full overflow-hidden">
          <img
            src={hourglass}
            alt=""
            className="pointer-events-none absolute -right-4 top-1/2 z-[-1] h-[700px] w-[575px] -translate-y-1/2 opacity-80"
          />
          <div className="max-w-3xl px-8 pb-10 pt-20 sm:px-16 lg:px-20">
            <h1 className="text-6xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              Make your hours mean
              <span className="block text-[#ef5455]"> something.</span>
            </h1>
            <p className="max-w-xl py-6 text-lg leading-relaxed text-[#c5c6cb] sm:text-xl">
              Mastery isn't found. It's formed through focused time, honest
              repetition, and the choice to return.
            </p>
            <div>
              <button className="inline-flex items-center gap-8 rounded-2xl bg-white py-3 pl-6 pr-3 text-lg font-bold text-[#0b0b0b]">
                Start your journey
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ef5455]">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-sm text-[#0b0b0b]"
                  />
                </span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

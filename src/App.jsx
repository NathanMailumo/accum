import { Navbar } from "./Components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FloatingCards } from "./Components/FloatingCards";
import logo from "./assets/logo2.png";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import logo2 from "./assets/logo3.png";

const skills = [
  { type: "Design", name: "Product Design", time: "352h", color: "bg-[#ffd9d8]", icon: "◎", note: "Last practiced today" },
  { type: "Technology", name: "Web Development", time: "186h", color: "bg-[#dfe4f2]", icon: "</>", note: "Last practiced yesterday" },
  { type: "Language", name: "Spanish", time: "92h", color: "bg-[#ffedb9]", icon: "□", note: "Last practiced 3 days ago" },
];

export function App() {
  return (
    <>
      <Navbar />
      <main className="bg-white bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] [background-size:50px_50px]">
        <section id="overview" className="relative isolate min-h-[90vh] overflow-hidden">
          <div className="relative z-10 flex min-h-[90vh] flex-col items-center justify-center gap-5 px-4 text-center">
            <img
              src={logo}
              className="w-24 rounded-2xl bg-white p-7 shadow-xl"
            />
            <h1 className="text-8xl font-bold redaction-70-bold">
              Make your hours{" "}
              <span className="flex justify-center text-[#ef5455]">count</span>
            </h1>
            <p className="text-xl space-mono-regular py-md">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias{" "}
              <span className="flex justify-center py-2">
                blanditiis sint. Tenetur, odit.
              </span>
            </p>
            <a href="#skills" className="rounded-2xl bg-[#2f3657] p-5 font-bold text-white space-mono-regular">
              Get Started
              <span className="px-3">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-sm text-white gap-x-3 px rounded-xl"
                />
              </span>
            </a>
          </div>
          <FloatingCards />
        </section>

        <section id="skills" className="relative z-10 px-4 py-24 sm:px-12 lg:px-20">
          <div className="mx-auto max-w-6xl">
            <span className="space-mono-regular text-md text-[#ef5455]">
              My Skills
            </span>
            <div className="flex flex-col items-start justify-between gap-5 py-10 md:flex-row md:items-center">
              <h1 className="text-5xl redaction-70-bold sm:text-6xl">
                What are you <br /> mastering?
              </h1>
              <p className="max-w-md text-sm leading-6 text-slate-500 space-mono-regular">
                Pick up where you left off, or start building a new skill from
                one focused practice session.
              </p>
            </div>
            <div className="w-full rounded-3xl bg-white p-6 shadow-2xl sm:p-10">
              <span className="text-sm text-[#ef5455] space-mono-regular">YOUR PRACTICE</span>
              <div className="flex flex-col justify-between gap-4 py-4 sm:flex-row sm:items-center">
                <h2 className="text-4xl redaction-70-bold">Choose a skill</h2>
                <button className="w-fit rounded-2xl bg-[#2f3657] px-4 py-3 text-sm text-white space-mono-regular">
                  <FontAwesomeIcon icon={faAdd} className="text-white" /> New
                  Skill
                </button>
              </div>
              <input type="text" placeholder="Search your skills..." className="w-full rounded-xl border border-slate-200 bg-[#faf9f6] p-4 text-sm outline-none focus:border-[#2f3657] space-mono-regular" />
              <div className="mt-3 divide-y divide-slate-100">
                {skills.map((skill) => (
                  <article key={skill.name} className="flex items-center gap-4 rounded-xl p-4 transition hover:bg-slate-50">
                    <span className={`flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold ${skill.color}`}>{skill.icon}</span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[9px] uppercase tracking-widest text-slate-400 space-mono-regular">{skill.type}</p>
                      <h3 className="font-bold text-slate-900">{skill.name}</h3>
                      <p className="text-xs text-slate-400">{skill.note}</p>
                    </div>
                    <div className="text-right">
                      <strong className="block text-sm">{skill.time}</strong>
                      <span className="text-[9px] text-slate-400">of 10,000</span>
                    </div>
                    <FontAwesomeIcon icon={faArrowRight} className="text-xs text-slate-400" />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="insights" className="relative z-10 px-4 py-16 sm:px-12 lg:px-20">
          <div className="mx-auto max-w-6xl rounded-3xl bg-[#2f3657] p-6 text-white sm:p-10">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
              <div>
                <span className="text-xs uppercase tracking-widest text-slate-300 space-mono-regular">INSIGHTS</span>
                <h2 className="mt-3 max-w-sm text-4xl leading-none redaction-70-bold">Consistency is your superpower.</h2>
                <p className="mt-5 max-w-md text-sm leading-6 text-slate-300">Your practice is trending up. Keep your current rhythm and you’ll log another 50 hours in less than four weeks.</p>
                <button className="mt-6 rounded-xl bg-white px-4 py-3 text-xs font-bold text-[#2f3657] space-mono-regular">Start a session <FontAwesomeIcon icon={faArrowRight} className="ml-2" /></button>
              </div>
              <div className="grid w-full max-w-lg grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/10 p-5"><span className="text-xs text-slate-300">Current streak</span><strong className="mt-3 block text-4xl redaction-70-bold">08</strong><small className="text-xs text-slate-300">days in a row</small></div>
                <div className="rounded-xl bg-white/10 p-5"><span className="text-xs text-slate-300">Total invested</span><strong className="mt-3 block text-4xl redaction-70-bold">630</strong><small className="text-xs text-slate-300">hours across 3 skills</small></div>
                <div className="col-span-2 rounded-xl bg-[#ef5455] p-5"><span className="text-xs text-white/70">Best practice day</span><strong className="mt-2 block text-3xl redaction-70-bold">Thursday</strong><small className="text-xs text-white/70">5h 42m average</small></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#2f3657] px-6 py-12 text-white sm:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <img src={logo2} alt="Accum" className="w-30" />
              <p className="mt-3 text-sm text-slate-300 space-mono-regular py-3">© 2026 Accum — Make your hours count.</p>
            </div>
            <nav className="flex gap-6 text-sm text-slate-200 space-mono-regular">
              <a href="#overview" className="hover:text-white">Overview</a>
              <a href="#skills" className="hover:text-white">Skills</a>
              <a href="#insights" className="hover:text-white">Insights</a>
            </nav>
          </div>
          <div className="mt-10 border-t border-white/20 pt-8 text-center text-sm text-slate-300 space-mono-regular">
            Built by{" "}
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="font-bold text-white underline underline-offset-4">GitHub</a>
          </div>
        </div>
      </footer>
    </>
  );
}

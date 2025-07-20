import SkillsItem from "../components/skillsItem";

export default function Skills() {
    return (
        <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Skills de desenvolvedor web">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 ">
                    Skills
                </h2>
            </div>

            <div>
                <ol className="group/list">
                    <SkillsItem
                        technologies={["JavaScript", "TypeScript", "React", "Next.js", "HTML & SCSS", "Tailwind", "Figma", "PHP", "Python", "Laravel", "MySQL", "Bootstrap", "Node"]}
                    />
                </ol>
            </div>
        </section>
    );
}

import ProjectItem from "../components/projetoItem";
import Link from 'next/link';

export default function Projetos() {
    return (
        <section id="projetos" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work Project">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Projetos
                </h2>
            </div>

            <div>
                <ol className="group/list">
                    <ProjectItem
                        imageSrc="/img/dashboard.jpg"
                        role="Senior Frontend Engineer, Accessibility"
                        company="Klaviyo"
                        projectUrl="https://www.klaviyo.com"
                        description="Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."
                        technologies={["JavaScript", "TypeScript", "React", "Storybook"]}
                    />

                    <ProjectItem
                        imageSrc="/img/dashboard.jpg"
                        role="Senior Frontend Engineer, Accessibility"
                        company="Klaviyo"
                        projectUrl="https://www.klaviyo.com"
                        description="Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."
                        technologies={["JavaScript", "TypeScript", "React", "Storybook"]}
                    />

                    <ProjectItem
                        imageSrc="/img/dashboard.jpg"
                        role="Senior Frontend Engineer, Accessibility"
                        company="Klaviyo"
                        projectUrl="https://www.klaviyo.com"
                        description="Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."
                        technologies={["JavaScript", "TypeScript", "React", "Storybook"]}
                    />
                </ol>

                <div className="mt-12">
                    <Link
                        href="/projetos"
                        aria-label="Ver arquivo completo do projeto"
                        className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold group"
                    >
                        <span>
                            <span className="border-b border-transparent pb-px transition group-hover:border-sky-300 motion-reduce:transition-none">
                                Ver todos os projetos
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                                aria-hidden="true"
                            >
                                <path
                                fillRule="evenodd"
                                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

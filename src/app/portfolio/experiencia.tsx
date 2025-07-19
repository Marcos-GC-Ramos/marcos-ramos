import ExperienceItem from "../components/experirenciaItem";
import Link from 'next/link';

export default function Experiencia() {
    return (
        <section id="experiencia" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Experiencia de trabalho">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Experiencias
                </h2>
            </div>

            <div>
                <ol className="group/list">
                    <ExperienceItem
                        period="2023 — Emprego Atual"
                        role="Desenvolvedor Front-End"
                        company="Vint_Global Tecnologia LTDA"
                        companyUrl="https://www.vintglobal.com.br/"
                        description="Atuo como desenvolvedor front-end alocado pela Vint_Global, empresa terceirizada pela Secretaria de Educação do Amazonas (Seduc/AM), contribuindo na criação e manutenção de aplicações web voltadas para demandas internas da instituição. Sou responsável por implementar interfaces modernas, responsivas e acessíveis, colaborando com equipes de back-end e design para garantir soluções eficientes e intuitivas. Trabalho com foco em performance, componentização, boas práticas de código e integração com APIs."
                        technologies={["JavaScript", "TypeScript", "React", "Next.js", "HTML & SCSS", "Tailwind", "Figma"]}
                    />

                    <ExperienceItem
                        period="2022 — 2024"
                        role="Estagiário de Desenvolvimento Web"
                        company="Secretaria de Educação (Seduc/AM)"
                        companyUrl="https://www.seduc.am.gov.br/"
                        description="Atuei no desenvolvimento de soluções web utilizando tecnologias como Laravel, PHP, JavaScript, Bootstrap, HTML & SCSS e MySQL. Apoiei diretamente nas atividades de front-end e back-end, contribuindo com a estruturação de sistemas, implementação de funcionalidades e melhorias em aplicações existentes. Participei da análise e correção de bugs, manutenção de código, além de colaborar com a equipe em projetos voltados para a modernização de processos internos da instituição."
                        technologies={["Laravel", "PHP", "JavaScript", "Bootstrap", "HTML & SCSS", "MySQL"]}
                    />

                    <ExperienceItem
                        period="2019 — 2021"
                        role="Jovem Aprendiz"
                        company="Unicoba"
                        companyUrl="https://ucbpower.com.br/"
                        description="Iniciei minha trajetória na área de tecnologia auxiliando nos processos administrativos relacionados aos setores de Infraestrutura e Sistemas de TI. Durante esse período, tive a oportunidade de aprender sobre rotinas de suporte técnico, organização de documentação técnica, controle de ativos de TI e entender melhor o funcionamento de ambientes corporativos de tecnologia."
                        technologies={["JavaScript", "HTML & SCSS", "Python"]}
                    />

                </ol>

                <div className="mt-12">
                    <Link className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 font-semibold text-slate-200 group/link text-base" href="/resume.pdf" target="_blank" rel="noreferrer noopener" aria-label="View Full Résumé (opens in a new tab)">
                        <span>Ver resulmo geral 
                            <span className="inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                </svg>
                            </span>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

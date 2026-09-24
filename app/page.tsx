"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Briefcase,
  Code2,
  Database,
  Globe,
  GraduationCap,
  Menu,
  Mail,
  Network,
  X,
  Wrench,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionTitle } from "../components/SectionTitle";
import { ProjectCard } from "../components/ProjectCard";
import { SkillBadge } from "../components/SkillBadge";
import {
  about,
  contact,
  education,
  experiences,
  hero,
  navigation,
  projects,
  services,
  skills,
} from "../data/portfolioData";

const serviceIcons = [Code2, Database, Network, Wrench, Briefcase, GraduationCap];

const easeOutBezier = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOutBezier, delay },
  }),
};

const contactIcons: Record<string, typeof Globe> = {
  LinkedIn: Globe,
  GitHub: Globe,
  "E-mail": Mail,
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#05070b] text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-[#05070b]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <a
            href="#top"
            onClick={() => setIsMenuOpen(false)}
            className="text-xs font-black uppercase tracking-[0.28em] text-white transition-colors hover:text-sky-300"
          >
            {hero.name}
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative px-3 py-2 text-sm text-slate-400 transition-colors hover:text-white"
              >
                {item.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-sky-300 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="rounded-lg border border-slate-800 p-2 text-slate-300 transition hover:border-sky-400/50 hover:text-white md:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="border-t border-slate-800/70 px-6 py-3 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-1">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-lg px-3 py-3 text-sm transition-colors hover:bg-slate-900 hover:text-white ${
                    item.label === "Contato" ? "text-sky-300" : "text-slate-300"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-8 md:pt-12">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.1}
          className="grid items-center gap-10 pb-16 pt-10 md:grid-cols-[1.3fr_0.7fr] md:pt-16"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-slate-400">{hero.title}</p>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-white md:text-6xl">
              {hero.name}
            </h1>
            <p className="mt-4 text-lg text-slate-300">{hero.subtitle}</p>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">{hero.description}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
              >
                {hero.primaryAction}
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/50 px-5 py-3 text-sm font-medium text-slate-100 transition hover:border-sky-400 hover:text-sky-300"
              >
                {hero.secondaryAction}
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative min-h-[22rem] overflow-hidden rounded-[28px] border border-slate-800 bg-slate-900/70 p-0 shadow-[0_20px_60px_rgba(15,23,42,0.35)]"
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.02),transparent,rgba(255,255,255,0.01))]" />

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.45, ease: easeOutBezier }}
              className="relative h-full w-full overflow-hidden rounded-[28px] bg-slate-950"
            >
              <img
                src="/profile-photo.jpg"
                alt="Rafael Reis"
                className="h-full w-full object-cover object-center transition-transform duration-500 ease-out"
              />
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0.15}
          className="py-20"
        >
          <SectionTitle eyebrow="Sobre" title={about.title} />
          <Card className="border-slate-800 bg-slate-900/60">
            <CardContent className="space-y-5 p-7 md:p-8">
              {about.text.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-slate-300 md:text-lg">
                  {paragraph}
                </p>
              ))}
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0.2}
          className="py-20"
        >
          <SectionTitle eyebrow="Experiência" title="Experiência profissional" />
          <div className="grid gap-5">
            {experiences.map((item) => (
              <motion.article
                key={`${item.company}-${item.period}`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="border-slate-800 bg-slate-900/60">
                  <CardContent className="space-y-4 p-6 md:p-7">
                    <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                      <div>
                        <h3 className="text-xl font-bold text-white">{item.company}</h3>
                        <p className="mt-1 text-sm font-medium text-sky-300">{item.role}</p>
                      </div>
                      <span className="text-sm font-medium text-slate-400">{item.period}</span>
                    </div>
                    <p className="text-base leading-7 text-slate-300">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0.25}
          className="py-20"
        >
          <SectionTitle eyebrow="Serviços" title="O que eu faço" />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = serviceIcons[index % serviceIcons.length];

              return (
                <motion.div key={service} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                  <Card className="h-full border-slate-800 bg-slate-900/60">
                    <CardContent className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
                      <div className="rounded-full bg-sky-500/10 p-3 text-sky-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-base font-semibold text-slate-100">{service}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0.3}
          className="py-20"
        >
          <SectionTitle eyebrow="Projetos" title="Projetos em destaque" />
          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </motion.section>

        <motion.section
          id="education"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0.35}
          className="py-20"
        >
          <SectionTitle eyebrow="Formação" title="Formação acadêmica" />
          <div className="grid gap-4 sm:grid-cols-3">
            {education.map((item) => (
              <Card key={item} className="border-slate-800 bg-slate-900/60">
                <CardContent className="p-5 text-center text-base font-semibold text-slate-100">{item}</CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0.4}
          className="py-20"
        >
          <SectionTitle eyebrow="Stack" title="Tecnologias" />
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <SkillBadge key={skill} label={skill} />
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0.45}
          className="py-20"
        >
          <SectionTitle eyebrow="Contato" title="Vamos conversar" />
          <div className="flex flex-wrap gap-4">
            {contact.map((item) => {
              const Icon = contactIcons[item.label] ?? Mail;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-5 py-3 text-sm font-medium text-slate-100 transition hover:border-sky-400 hover:text-sky-300"
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </a>
              );
            })}
          </div>
        </motion.section>
      </main>
    </div>
  );
}

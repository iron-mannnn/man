import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "User Management System",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    description: [
      "Developed a full-stack user management system with JWT authentication and role-based access control.",
      "Built secure RESTful APIs and implemented CRUD operations for user and admin management.",
      "Designed responsive user and admin interfaces using React.js and Tailwind CSS.",
      "Integrated MongoDB for efficient data storage and user management.",
    ],
    github: "#",
    live: "#",
  },
  {
    number: "02",
    title: "Medium Clone",
    stack: [
      "React.js",
      "Tailwind CSS",
      "Hono",
      "Cloudflare Workers",
      "PostgreSQL",
      "Prisma ORM",
      "Zod",
    ],
    description: [
      "Developed a full-stack blogging platform inspired by Medium using React.js, Hono, PostgreSQL, and Prisma ORM.",
      "Built secure RESTful APIs with Zod validation for user authentication and blog management.",
      "Designed responsive interfaces for creating, editing, and publishing blog posts using React.js and Tailwind CSS.",
      "Deployed the backend on Cloudflare Workers with PostgreSQL and Prisma ORM integration.",
    ],
    github: "#",
    live: "#",
  },

  {
    number: "03",
    title: "User Management System",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    description: [
      "Developed a full-stack user management system with JWT authentication and role-based access control.",
      "Built secure RESTful APIs and implemented CRUD operations for user and admin management.",
      "Designed responsive user and admin interfaces using React.js and Tailwind CSS.",
      "Integrated MongoDB for efficient data storage and user management.",
    ],
    github: "#",
    live: "#",
  },
  {
    number: "04",
    title: "Medium Clone",
    stack: [
      "React.js",
      "Tailwind CSS",
      "Hono",
      "Cloudflare Workers",
      "PostgreSQL",
      "Prisma ORM",
      "Zod",
    ],
    description: [
      "Developed a full-stack blogging platform inspired by Medium using React.js, Hono, PostgreSQL, and Prisma ORM.",
      "Built secure RESTful APIs with Zod validation for user authentication and blog management.",
      "Designed responsive interfaces for creating, editing, and publishing blog posts using React.js and Tailwind CSS.",
      "Deployed the backend on Cloudflare Workers with PostgreSQL and Prisma ORM integration.",
    ],
    github: "#",
    live: "#",
  },
  {
    number: "05",
    title: "User Management System",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    description: [
      "Developed a full-stack user management system with JWT authentication and role-based access control.",
      "Built secure RESTful APIs and implemented CRUD operations for user and admin management.",
      "Designed responsive user and admin interfaces using React.js and Tailwind CSS.",
      "Integrated MongoDB for efficient data storage and user management.",
    ],
    github: "#",
    live: "#",
  },
  {
    number: "06",
    title: "Medium Clone",
    stack: [
      "React.js",
      "Tailwind CSS",
      "Hono",
      "Cloudflare Workers",
      "PostgreSQL",
      "Prisma ORM",
      "Zod",
    ],
    description: [
      "Developed a full-stack blogging platform inspired by Medium using React.js, Hono, PostgreSQL, and Prisma ORM.",
      "Built secure RESTful APIs with Zod validation for user authentication and blog management.",
      "Designed responsive interfaces for creating, editing, and publishing blog posts using React.js and Tailwind CSS.",
      "Deployed the backend on Cloudflare Workers with PostgreSQL and Prisma ORM integration.",
    ],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const slides = [];

  for (let i = 0; i < projects.length; i += 2) {
    slides.push(projects.slice(i, i + 2));
  }

  const nextSlide = () => {
    setDirection(1);
    setPage((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setDirection(-1);
    setPage((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setDirection(index > page ? 1 : -1);
    setPage(index);
  };

  return (
    <section
      id="projects"
      className="w-full overflow-hidden bg-black px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-36"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 font-inter text-[10px] uppercase tracking-[0.3em]"
        >
          <span className="relative flex h-[8px] w-[8px] items-center justify-center">
            <span className="relative z-10 h-[6px] w-[6px] rounded-full bg-orange" />

            <motion.span
              className="absolute inset-0 rounded-full border border-orange"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.35, 0.12, 0.35],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </span>

          Projects
        </motion.div>

        {/* TITLE + INTRO */}
        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[42%_58%] lg:gap-0">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="font-anton text-[clamp(4rem,7vw,7.5rem)] uppercase leading-[0.78] tracking-[-0.055em]">
              Selected
              <br />
              <span className="text-orange">Work</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.12,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-end lg:pl-16"
          >
            <div className="max-w-[620px] border-l border-orange pl-7 sm:pl-9">
              <p className="font-inter text-[clamp(1.4rem,2.4vw,2.35rem)] leading-[1.35] tracking-[-0.03em]">
                A collection of full-stack applications built with modern
                technologies, secure APIs, and responsive interfaces.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <span className="h-px w-10 bg-orange" />

                <span className="font-inter text-[9px] uppercase tracking-[0.28em] text-white/45">
                  Things I&apos;ve built
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CAROUSEL HEADER */}
        <div className="mt-28 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-inter text-[9px] uppercase tracking-[0.25em] text-white/35">
              Projects
            </span>

            <span className="h-px w-8 bg-orange" />

            <span className="font-inter text-[9px] uppercase tracking-[0.2em] text-white/35">
              {String(page + 1).padStart(2, "0")} /{" "}
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          {/* CONTROLS */}
          <div className="flex gap-2">
            <button
              onClick={previousSlide}
              aria-label="Previous projects"
              className="flex h-11 w-11 items-center justify-center border border-white/20 font-inter text-sm text-white/60 transition-all duration-300 hover:border-orange hover:bg-orange hover:text-black"
            >
              ←
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next projects"
              className="flex h-11 w-11 items-center justify-center border border-white/20 font-inter text-sm text-white/60 transition-all duration-300 hover:border-orange hover:bg-orange hover:text-black"
            >
              →
            </button>
          </div>
        </div>

        {/* INSTAGRAM STYLE CAROUSEL */}
        <div className="relative mt-7 overflow-hidden touch-pan-y">

          <AnimatePresence
            initial={false}
            custom={direction}
            mode="popLayout"
          >
            <motion.div
              key={page}
              custom={direction}
              initial={{
                x: direction > 0 ? "100%" : "-100%",
                opacity: 0.7,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              exit={{
                x: direction > 0 ? "-100%" : "100%",
                opacity: 0.7,
              }}
              transition={{
                x: {
                  type: "spring",
                  stiffness: 300,
                  damping: 32,
                  mass: 0.8,
                },
                opacity: {
                  duration: 0.25,
                },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={(_, info) => {
                const swipeDistance = info.offset.x;
                const swipeVelocity = info.velocity.x;

                if (swipeDistance < -80 || swipeVelocity < -500) {
                  nextSlide();
                } else if (
                  swipeDistance > 80 ||
                  swipeVelocity > 500
                ) {
                  previousSlide();
                }
              }}
              className="grid grid-cols-1 gap-6 lg:grid-cols-2"
            >
              {slides[page].map((project, index) => (
                <motion.article
                  key={project.number}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative flex min-h-[590px] flex-col border border-white/20 p-7 transition-all duration-500 hover:border-orange sm:p-9 lg:p-10"
                >
                  {/* CORNER */}
                  <span className="absolute right-0 top-0 h-3 w-3 bg-orange opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* HEADER */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-orange transition-transform duration-300 group-hover:scale-125" />

                      <span className="font-inter text-[10px] font-semibold uppercase tracking-[0.25em] text-orange">
                        Full Stack Project
                      </span>
                    </div>

                    <span className="font-inter text-[9px] uppercase tracking-[0.2em] text-white/40">
                      {project.number}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-12 max-w-[620px] font-anton text-[clamp(2.8rem,4.2vw,4.8rem)] uppercase leading-[0.9] tracking-[-0.025em] transition-colors duration-300 group-hover:text-orange">
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <div className="mt-10 space-y-5">
                    {project.description.map((item) => (
                      <div
                        key={item}
                        className="flex gap-4"
                      >
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />

                        <p className="font-inter text-sm leading-7 text-white/65">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* TECHNOLOGIES */}
                  <div className="mt-auto pt-10">
                    <div className="border-t border-white/15 pt-5">
                      <span className="mb-4 block font-inter text-[9px] uppercase tracking-[0.25em] text-orange">
                        Technologies
                      </span>

                      <div className="flex max-w-[600px] flex-wrap gap-x-4 gap-y-2">
                        {project.stack.map((technology) => (
                          <span
                            key={technology}
                            className="font-inter text-[9px] uppercase tracking-[0.14em] text-white/45 transition-colors duration-300 group-hover:text-white"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* LINKS */}
                  <div className="mt-7 flex gap-3">
                    <a
                      href={project.github}
                      className="border border-white/15 px-5 py-3 font-inter text-[9px] uppercase tracking-[0.2em] text-white/60 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                    >
                      GitHub ↗
                    </a>

                    <a
                      href={project.live}
                      className="bg-orange px-5 py-3 font-inter text-[9px] uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-orange-bright"
                    >
                      Live Demo ↗
                    </a>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* PROGRESS */}
        <div className="mt-8 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to project slide ${index + 1}`}
              className="h-px flex-1 bg-white/15"
            >
              <span
                className={`block h-full transition-all duration-500 ${
                  index === page ? "bg-orange" : "bg-transparent"
                }`}
              />
            </button>
          ))}
        </div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-24 flex items-center gap-5 lg:mt-32"
        >
          <span className="h-px flex-1 bg-white/15" />

          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="font-inter text-lg text-orange"
          >
            ↓
          </motion.span>

          <span className="h-px flex-1 bg-white/15" />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
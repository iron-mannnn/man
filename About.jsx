
import { motion } from "framer-motion";

const technologies = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "TypeScript",
  "MERN Stack",
];

const About = () => {
  return (
    <section
      id="about"
      className="w-full overflow-hidden bg-light text-light-foreground"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-10 md:py-24 lg:px-16 lg:py-28">

        {/* ================================================= */}
        {/* HEADER                                            */}
        {/* ================================================= */}

        <div className="flex items-center gap-3">
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="h-2 w-2 rounded-full bg-orange"
          />

          <span className="font-inter text-[10px] uppercase tracking-[0.3em] text-black/45">
            About Me
          </span>
        </div>

        {/* ================================================= */}
        {/* TITLE                                             */}
        {/* ================================================= */}

        <div className="mt-8 overflow-hidden">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              font-anton
              text-[clamp(4.5rem,12vw,11rem)]
              uppercase
              leading-none
              tracking-[-0.055em]
            "
          >
            My{" "}
            <span className="text-orange">
              Story
            </span>
          </motion.h2>
        </div>

        {/* ================================================= */}
        {/* INTRO                                             */}
        {/* ================================================= */}

        <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-[220px_1fr] lg:gap-20">

          {/* SIDE NOTE */}

          <div className="hidden lg:block">
            <div className="h-px w-12 bg-orange" />

            <p className="mt-5 max-w-[175px] font-inter text-xs leading-6 text-black/45">
              Building, learning and improving one project at a time.
            </p>
          </div>

          {/* MAIN INTRO */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="mb-5 font-inter text-[10px] uppercase tracking-[0.3em] text-orange">
              Who I am
            </p>

            <h3
              className="
                max-w-[1050px]
                font-inter
                text-[clamp(2rem,4.2vw,4.5rem)]
                leading-[1.08]
                tracking-[-0.05em]
              "
            >
              Hello, 👋 I’m{" "}
              <span className="font-semibold">
                Nazish Parvez
              </span>
              , a Full Stack Developer based in{" "}
              <span className="text-orange">
                Hyderabad, India.
              </span>
            </h3>
          </motion.div>
        </div>

        {/* ================================================= */}
        {/* TECH STACK                                        */}
        {/* ================================================= */}

        <div className="mt-14 border-y border-black/10 lg:ml-[240px]">

          <div className="flex flex-wrap items-center gap-x-7 gap-y-3 py-5">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="
                  font-inter
                  text-[10px]
                  uppercase
                  tracking-[0.16em]
                  text-black/45
                  transition-colors
                  duration-300
                  hover:text-orange
                "
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* ================================================= */}
        {/* LOWER CONTENT                                     */}
        {/* ================================================= */}

        <div className="mt-16 grid gap-12 lg:ml-[240px] lg:grid-cols-2 lg:gap-16">

          {/* ALWAYS LEARNING */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-orange" />

              <p className="font-inter text-[10px] uppercase tracking-[0.3em] text-orange">
                Always learning
              </p>
            </div>

            <p className="max-w-xl font-inter text-lg leading-[1.7] tracking-[-0.02em] text-black/60 sm:text-xl">
              Exploring{" "}
              <span className="font-medium text-black">
                system design, backend scalability, DevOps, Docker, cloud, and
                distributed systems
              </span>{" "}
              to build reliable and production-ready software.
            </p>
          </motion.div>

          {/* WHAT'S NEXT */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-orange" />

              <p className="font-inter text-[10px] uppercase tracking-[0.3em] text-orange">
                What’s next
              </p>
            </div>

            <p className="max-w-xl font-inter text-lg leading-[1.7] tracking-[-0.02em] text-black/60 sm:text-xl">
              Looking for opportunities to{" "}
              <span className="font-medium text-orange">
                learn, contribute, and grow
              </span>{" "}
              as a Software Engineer / Full Stack Developer while building
              impactful products.
            </p>
          </motion.div>
        </div>

        {/* ================================================= */}
        {/* CONNECT                                           */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-14 lg:ml-[240px]"
        >
          <motion.a
            href="#contact"
            whileHover={{ x: 6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              group
              inline-flex
              items-center
              gap-4
              border-b
              border-black/20
              pb-2
              font-inter
              text-[10px]
              uppercase
              tracking-[0.28em]
              transition-colors
              duration-300
              hover:border-orange
            "
          >
            <span>
              Let’s connect
            </span>

            <span className="text-orange transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default About;

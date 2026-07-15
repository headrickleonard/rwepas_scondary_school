"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/motion/eyebrow";
import { ScrollRevealText } from "@/components/motion/scroll-reveal-text";
import { RevealGroup, revealItem } from "@/components/motion/reveal";

const roleClasses = {
  accent: "text-accent-foreground",
  primary: "text-primary",
  clay: "text-clay",
  sage: "text-sage",
} as const;

type RoleTint = keyof typeof roleClasses;

type FacultyMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  tint: RoleTint;
};

const faculty: FacultyMember[] = [
  {
    name: "Dr. Frank Kimaro",
    role: "Principal",
    tint: "primary",
    bio: "Over 22 years leading Tanzanian secondary schools. Former Regional Education Officer with a strong focus on discipline, values, and academic excellence.",
    image:
      "https://images.unsplash.com/flagged/photo-1559475555-b26777ed3ab4?w=700&auto=format&fit=crop&q=60",
  },
  {
    name: "Mr. Emmanuel Mwalimu",
    role: "Deputy Principal (Academics)",
    tint: "accent",
    bio: "Seasoned educator with deep experience in curriculum leadership and national examinations. Known for pushing students to achieve their highest potential.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
  },
  {
    name: "Ms. Zainab Hamisi",
    role: "Head of Pastoral Care",
    tint: "sage",
    bio: "Experienced teacher and counsellor from Dar es Salaam. Passionate about student wellbeing, character development, and supporting young people through their teenage years.",
    image:
      "https://images.unsplash.com/photo-1632678548683-b6c77b8e40bc?w=700&auto=format&fit=crop&q=60",
  },
  {
    name: "Mr. Baraka Mwamba",
    role: "Head of Sports & Co-curricular",
    tint: "clay",
    bio: "Former national youth football player and long-serving teacher. Builds discipline, teamwork, and leadership through sports and more than 30 clubs and societies.",
    image:
      "https://images.unsplash.com/photo-1764169689207-e23fb66e1fcf?w=700&auto=format&fit=crop&q=60",
  },
];

export default function FacultySection() {
  return (
    <section className="section bg-secondary/40">
      <div className="container">
        <div className="max-w-3xl mb-14">
          <Eyebrow tone="sage">OUR EDUCATORS</Eyebrow>

          <h2 className="heading">
            Exceptional teachers.
            <br />
            Inspiring mentors.
          </h2>

          <ScrollRevealText
            as="p"
            className="subheading mt-5"
            text="Our faculty are more than instructors. They are mentors, role models, and lifelong advocates who know every student personally and are deeply invested in their success."
          />
        </div>

        <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {faculty.map((member) => (
            <motion.div
              key={member.name}
              variants={revealItem}
              whileHover={{ y: -6 }}
            >
              <Card className="premium-card group h-full overflow-hidden border-none">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 h-full w-full object-cover grayscale-[0.15] transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />

                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/80" />
                </div>

                <CardContent className="p-7">
                  <h3 className="font-display mb-1 text-2xl tracking-tight">
                    {member.name}
                  </h3>

                  <p
                    className={`mb-4 text-sm font-semibold uppercase tracking-[0.18em] ${roleClasses[member.tint]}`}
                  >
                    {member.role}
                  </p>

                  <p className="text-muted-foreground text-sm leading-7">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </RevealGroup>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          Our full faculty of{" "}
          <span className="font-medium text-foreground">
            95 dedicated educators
          </span>{" "}
          includes specialists across sciences, arts, business, languages, and
          technology, many holding postgraduate qualifications from leading
          universities.
        </div>
      </div>
    </section>
  );
}
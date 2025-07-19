"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Download,
  ExternalLink,
  Github,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Calendar,
  Building,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const skills = [
  {
    id: "1",
    name: "JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "Computer Languages",
  },
  {
    id: "2",
    name: "React",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "Frameworks & Libraries",
  },
  {
    id: "3",
    name: "React Native",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "Frameworks & Libraries",
  },
  {
    id: "4",
    name: "Node.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    category: "Frameworks & Libraries",
  },
  {
    id: "5",
    name: "HTML",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    category: "Computer Languages",
  },
  {
    id: "6",
    name: "CSS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    category: "Computer Languages",
  },
  {
    id: "7",
    name: "PHP",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    category: "Computer Languages",
  },
  {
    id: "8",
    name: "Python",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    category: "Computer Languages",
  },
  {
    id: "9",
    name: "Java",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    category: "Computer Languages",
  },
  {
    id: "10",
    name: "MongoDB",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    category: "Databases",
  },
  {
    id: "11",
    name: "MySQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    category: "Databases",
  },
  {
    id: "12",
    name: "Oracle",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
    category: "Databases",
  },
  {
    id: "13",
    name: "Docker",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    category: "Deployment",
  },
  {
    id: "14",
    name: "Bootstrap",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    category: "Frameworks & Libraries",
  },
  {
    id: "15",
    name: "Unreal Engine",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg",
    category: "Game Dev",
  },
  {
    id: "16",
    name: "Django",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg",
    category: "Frameworks & Libraries",
  },
  {
    id: "17",
    name: "Neo4j",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neo4j/neo4j-original.svg",
    category: "Databases",
  },
  {
    id: "18",
    name: "Git",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    category: "Version Control",
  },
  {
    id: "19",
    name: "GitHub",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    category: "Version Control",
  },
  {
    id: "20",
    name: "GitLab",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg",
    category: "Version Control",
  },
  {
    id: "21",
    name: "Figma",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    category: "Design",
  },
];

const projects = [
  {
    id: "1",
    title: "Asset Borrowing App",
    description:
      "A team project developed using React Native in Expo with Node.js backend and MongoDB database. Designed to help organizations or communities manage borrowed items efficiently.",
    image: "/Screenshot 2025-07-14 062538.png",
    tags: ["React Native", "Expo", "Node.js", "MongoDB"],
    github: "#",
    demo: "https://snack.expo.dev/@copyskillman/mobile_app",
    status: "Completed",
  },
  {
    id: "2",
    title: "GoomIsekai Game",
    description:
      "A first-person shooter (FPS) game currently in development by Unreal Engine 5.",
    image: "/gameue.png",
    tags: ["Unreal Engine 5", "Game Development", "FPS"],
    github: "#",
    demo: "https://gamejolt.com/games/GoomIsekai/884455",
    status: "Completed",
  },

  {
    id: "4",
    title: "Predict Letter",
    description:
      "A machine learning project that predicts handwritten Thai letters (ก to ฮ) using k-Nearest Neighbors (k-NN) and Decision Trees algorithms. Compares the effectiveness of both approaches.",
    image: "/kokai.png",
    tags: ["Python", "Machine Learning", "k-NN", "Decision Trees"],
    github:
      "https://colab.research.google.com/drive/16RvUmvB5AyAmRpM0a4G0ZYWTfufKuZIf?usp=sharing",
    demo: "https://colab.research.google.com/drive/16RvUmvB5AyAmRpM0a4G0ZYWTfufKuZIf?usp=sharing",
    status: "Completed",
  },
  {
    id: "5",
    title: "Todo List",
    description:
      "This project is a Vue.js-based web application that replicates the core features of Notion's Todo List template.",
    image: "/todo.png",
    tags: ["Vue.js", "TypeScript"],
    github: "https://github.com/Copyskillman/ToDoList",
    demo: "#",
  },
  {
    id: "6",
    title: "Fitness",
    description:
      "Fitness tracking web application with features including user authentication, personalized workout planning, calendar-based scheduling, and real-time tracking of weight, calories, and progress. Implemented interactive charts, user profiles with BMI calculation, and responsive UI for an enhanced user experience.",
    image: "/fitness.png",
    tags: ["React.js", "Tailwind CSS"],
    github: "#",
    demo: "#",
    status: "In Development",
  },
  {
    id: "7",
    title: "JSON to PDF with Templates (Internship)",
    description:
      "Imported data from a JSON file into a PDF file using libraries for working with PDF templates and generating new PDFs.",
    image: "/jsonimg.png",
    tags: ["React.js", "Node.js"],
    github: "#",
    demo: "#",
    status: "Completed",
  },
  {
    id: "8",
    title: "7-Segment Display Web App (Internship)",
    description:
      "web application for displaying 7-segment numbers, enhancing user interaction and experience.",
    image: "/7seg.png",
    tags: ["React.js", "Node.js", "GEMINI API"],
    github: "#",
    demo: "#",
    status: "Completed",
  },
];

const interests = [
  "Reading",
  "DnD",
  "New Technology",
  "Coop Game",
  "Card Game",
];

const languages = [
  { name: "English", level: "Good" },
  { name: "Japanese", level: "Beginner" },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Get unique categories from skills
  const categories = [
    "All",
    ...Array.from(new Set(skills.map((skill) => skill.category))),
  ];

  // Filter skills based on selected category
  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold">
            <span className="text-xl">Napat Rakchua</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
          <Button asChild size="sm">
            <Link href="#contact">Hire Me</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-muted/50 to-muted/30">
          <div className="container flex flex-col items-center text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-32 h-32 overflow-hidden rounded-full border-4 border-background shadow-xl">
                <img
                  src="/pic (3).jpg"
                  alt="Napat Rakchua Profile"
                  className="object-cover"
                  width={128}
                  height={128}
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              Napat Rakchua
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl leading-relaxed">
              A recent Computer Science graduate with a passion for continuous
              learning, who is always curious about new development tools and
              enjoys experimenting with them. Adept at understanding and
              applying modern development principles to improve efficiency. I am
              seeking a Website Developer position in an innovative organization
              where I can leverage new knowledge to build high-quality,
              up-to-date software solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild size="lg" className="shadow-lg">
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 shadow-lg"
                asChild
              >
                <a href="/FJ_Napat_Rakchua.pdf" download="FJ_Napat_Rakchua.pdf">
                  <Download size={16} />
                  Download Resume
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Songkla, Thailand</span>
              </div>
              <div className="flex items-center gap-2">
                <span>•</span>
                <span>Prince of Songkla University</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center">
              About Me
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Education</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-medium">B.Sc. (Computer Science)</h4>
                      <p className="text-muted-foreground">
                        Prince of Songkla University, Thailand
                      </p>
                      <p className="text-sm text-muted-foreground">
                        2021 - 2025
                      </p>
                    </div>
                    <div className="border-l-4 border-muted pl-4">
                      <h4 className="font-medium">High School</h4>
                      <p className="text-muted-foreground">
                        Mahavajiravudh Songkhla School
                      </p>
                      <p className="text-sm text-muted-foreground">
                        2016 - 2021
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Languages</h3>
                  <div className="space-y-2">
                    {languages.map((lang, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <span className="font-medium">{lang.name}</span>
                        <Badge variant="secondary">{lang.level}</Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest, index) => (
                      <Badge key={index} variant="outline" className="text-sm">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Button asChild variant="outline" className="mr-4">
                    <Link href="#experience">View Experience</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="#skills">View Skills</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Professional Experience
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                My journey in software development through internships and
                practical experience
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Building className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">
                            Software Development Intern
                          </h3>
                          <p className="text-lg text-primary font-medium">
                            Mor Company
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm font-medium">
                            18 April 2024 - 18 June 2024
                          </span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                          Gained hands-on experience in software development,
                          working with data processing and web application
                          development in a professional environment.
                        </p>

                        <div>
                          <h4 className="font-semibold mb-3 text-foreground">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground leading-relaxed">
                                <strong className="text-foreground">
                                  JSON to PDF Automation:
                                </strong>{" "}
                                Imported data from JSON files into PDF files
                                using specialized libraries for working with PDF
                                templates and generating new PDFs
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground leading-relaxed">
                                <strong className="text-foreground">
                                  Web Application Development:
                                </strong>{" "}
                                Created a web application for displaying
                                7-segment numbers, enhancing user interaction
                                and experience
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-4">
                          <Badge variant="secondary">PDF Processing</Badge>
                          <Badge variant="secondary">Web Development</Badge>
                          <Badge variant="secondary">JSON</Badge>
                          <Badge variant="secondary">UI/UX</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 mt-8">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Building className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">
                            Software Development Intern
                          </h3>
                          <p className="text-lg text-primary font-medium">
                            Mor Company
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm font-medium">
                            15 November 2024 - 15 March 2025
                          </span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                          Developed the backend APIs using Django and Django
                          REST Framework for a comprehensive Rehabilitation
                          System, streamlining the management of patient
                          treatment plans, service orders, and appointments.
                        </p>

                        <div>
                          <h4 className="font-semibold mb-3 text-foreground">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground leading-relaxed">
                                <strong className="text-foreground">
                                  Rehabilitation System:
                                </strong>{" "}
                                Developed the backend APIs using Django and
                                Django REST Framework, streamlining the
                                management of patient treatment plans, service
                                orders, and appointments
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-4">
                          <Badge variant="secondary">Django</Badge>
                          <Badge variant="secondary">
                            Django REST Framework
                          </Badge>
                          <Badge variant="secondary">Backend Development</Badge>
                          <Badge variant="secondary">
                            Rehabilitation System
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Future Experience Placeholder */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">Looking for new opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Technical Skills
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Technologies and tools I work with to bring ideas to life
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full transition-all duration-200 hover:scale-105"
                >
                  {category}
                  {category !== "All" && (
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {
                        skills.filter((skill) => skill.category === category)
                          .length
                      }
                    </Badge>
                  )}
                </Button>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="overflow-x-auto">
              <div className="flex flex-nowrap gap-6">
                {filteredSkills.map((skill) => (
                  <Card
                    key={skill.id}
                    className="overflow-hidden group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md flex-shrink-0"
                  >
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <img
                          src={skill.image || "/placeholder.svg"}
                          alt={skill.name}
                          className="w-full h-full object-contain transition-transform group-hover:scale-110"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "/placeholder.svg?height=64&width=64";
                          }}
                        />
                      </div>
                      <h3 className="font-medium text-sm mb-2">{skill.name}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {skill.category}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Show count of filtered skills */}
            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground">
                Showing {filteredSkills.length}{" "}
                {selectedCategory === "All"
                  ? "skills"
                  : `${selectedCategory.toLowerCase()} skills`}
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A collection of projects that showcase my skills and learning
                journey
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 [&>*:last-child:nth-child(odd)]:md:col-start-1 [&>*:last-child:nth-child(odd)]:md:col-end-3 [&>*:last-child:nth-child(odd)]:md:max-w-md [&>*:last-child:nth-child(odd)]:md:mx-auto">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                      width={300}
                      height={200}
                    />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      {project.status && (
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            project.status === "Completed"
                              ? "bg-green-50 text-green-700 border-green-200"
                              : "bg-yellow-50 text-yellow-700 border-yellow-200"
                          }`}
                        >
                          {project.status}
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-4 flex-1 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3 mt-auto">
                      {project.github && project.github !== "#" && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-2 flex-1"
                          asChild
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github size={16} />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.demo && project.demo !== "#" && (
                        <Button size="sm" className="gap-2 flex-1" asChild>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink size={16} />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

          <div className="container relative">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Mail className="h-4 w-4" />
                Available for opportunities
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                Let's Contact
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                I'm actively seeking job opportunities as a Software Developer.
                Let's discuss how I can contribute to your team and grow
                together!
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Contact Cards */}
                <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Email Me</h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Drop me a line anytime
                    </p>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=godyeepun@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                      godyeepun@gmail.com
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Call Me</h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Available for a quick chat
                    </p>
                    <a className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors">
                      0629638678
                    </a>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Visit Me</h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Based in Thailand
                    </p>
                    <p className="text-purple-600 font-medium text-center leading-relaxed">
                      40/1 No.4 Tumnob
                      <br />
                      Singhanakorn Songkla
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Social Links */}
              <div className="mt-16 text-center">
                <h3 className="text-2xl font-bold mb-8">Follow My Journey</h3>
                <div className="flex justify-center gap-6">
                  <Button
                    size="lg"
                    variant="outline"
                    className="group hover:bg-gray-50 hover:border-gray-200 hover:text-gray-700 transition-all duration-300"
                    asChild
                  >
                    <a
                      href="https://github.com/Copyskillman/portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-16 text-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-sm text-muted-foreground">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Open to new opportunities and collaborations
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/20">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Napat Rakchua. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground">
                A recent Computer Science graduate from Prince of Songkla
                University
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="#about">About</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="#experience">Experience</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="#skills">Skills</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="#projects">Projects</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="#contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

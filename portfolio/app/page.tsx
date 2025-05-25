"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, ExternalLink, Github, Mail, MapPin, Phone, Linkedin, Calendar, Building } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const skills = [
  {
    id: "1",
    name: "JavaScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "Frontend",
  },
  {
    id: "2",
    name: "React",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "Frontend",
  },
  {
    id: "3",
    name: "React Native",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "Mobile",
  },
  {
    id: "4",
    name: "Node.js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    category: "Backend",
  },
  {
    id: "5",
    name: "HTML",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    category: "Frontend",
  },
  {
    id: "6",
    name: "CSS",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    category: "Frontend",
  },
  {
    id: "7",
    name: "PHP",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    category: "Backend",
  },
  {
    id: "8",
    name: "Python",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    category: "Backend",
  },
  {
    id: "9",
    name: "Java",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    category: "Backend",
  },
  {
    id: "10",
    name: "MongoDB",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    category: "Database",
  },
  {
    id: "11",
    name: "MySQL",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    category: "Database",
  },
  {
    id: "12",
    name: "Oracle",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
    category: "Database",
  },
  {
    id: "13",
    name: "Docker",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    category: "Tools",
  },
  {
    id: "14",
    name: "Bootstrap",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    category: "Frontend",
  },
  {
    id: "15",
    name: "Unreal Engine",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg",
    category: "Game Dev",
  },
]

const projects = [
  {
    id: "1",
    title: "Asset Borrowing App",
    description:
      "A team project developed using React Native in Expo with Node.js backend and MongoDB database. Designed to help organizations or communities manage borrowed items efficiently.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React Native", "Expo", "Node.js", "MongoDB"],
    github: "https://github.com/napat-rakchua/asset-borrowing-app",
    demo: "#",
  },
  {
    id: "2",
    title: "GoomIsekai Game",
    description:
      "A first-person shooter (FPS) game currently in development using Unreal Engine 5. Focused on creating amazing visuals and immersive gameplay experience.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Unreal Engine 5", "Game Development", "FPS"],
    github: "https://github.com/napat-rakchua/goomisekai-game",
    demo: "#",
  },
  {
    id: "3",
    title: "BookStore Web",
    description:
      "A web application for managing book and customer data. Developed using PHP, HTML, CSS, Bootstrap for design, and Oracle SQL for database management.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["PHP", "HTML", "CSS", "Bootstrap", "Oracle SQL"],
    github: "https://github.com/napat-rakchua/bookstore-web",
    demo: "#",
  },
  {
    id: "4",
    title: "Predict Letter",
    description:
      "A machine learning project that predicts handwritten Thai letters (ก to ฮ) using k-Nearest Neighbors (k-NN) and Decision Trees algorithms. Compares the effectiveness of both approaches.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Python", "Machine Learning", "k-NN", "Decision Trees"],
    github: "https://github.com/napat-rakchua/predict-letter",
    demo: "#",
  },
]

const interests = ["Reading", "DnD", "New Technology", "Coop Game", "Card Game"]

const languages = [
  { name: "English", level: "Good" },
  { name: "Japanese", level: "Beginner" },
]

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  // Get unique categories from skills
  const categories = ["All", ...Array.from(new Set(skills.map((skill) => skill.category)))]

  // Filter skills based on selected category
  const filteredSkills =
    selectedCategory === "All" ? skills : skills.filter((skill) => skill.category === selectedCategory)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold">
            <span className="text-xl">Napat Rakchua</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
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
                  src="/placeholder.svg?height=128&width=128"
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
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-2xl">
              Computer Science Student & Aspiring Software Developer
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl leading-relaxed">
              As a Computer Science student, I want to intern as a Software Developer. I want to learn and use my web
              development skills. I'm excited about working on real projects with an experienced team and understanding
              how software is made.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild size="lg" className="shadow-lg">
                <Link href="#contact">Get In Touch</Link>
              </Button>
              <Button variant="outline" size="lg" className="gap-2 shadow-lg">
                <Download size={16} />
                Download Resume
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="order-2 md:order-1">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Computer Science workspace"
                  className="rounded-lg object-cover w-full h-auto shadow-lg"
                  width={500}
                  height={400}
                />
              </div>
              <div className="space-y-8 order-1 md:order-2">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Education</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-medium">B.Sc. (Computer Science)</h4>
                      <p className="text-muted-foreground">Prince of Songkla University, Thailand</p>
                      <p className="text-sm text-muted-foreground">2021 - Present</p>
                    </div>
                    <div className="border-l-4 border-muted pl-4">
                      <h4 className="font-medium">High School</h4>
                      <p className="text-muted-foreground">Mahavajiravudh Songkhla School</p>
                      <p className="text-sm text-muted-foreground">2016 - 2021</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Languages</h3>
                  <div className="space-y-2">
                    {languages.map((lang, index) => (
                      <div key={index} className="flex justify-between items-center">
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
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Professional Experience</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                My journey in software development through internships and practical experience
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
                          <h3 className="text-xl font-bold text-foreground">Software Development Intern</h3>
                          <p className="text-lg text-primary font-medium">Mor Company</p>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm font-medium">April 2024 - June 2024</span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                          Gained hands-on experience in software development, working with data processing and web
                          application development in a professional environment.
                        </p>

                        <div>
                          <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                          <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground leading-relaxed">
                                <strong className="text-foreground">PDF Data Processing:</strong> Imported data from
                                JSON files into PDF files using specialized libraries for working with PDF templates and
                                generating new PDFs
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground leading-relaxed">
                                <strong className="text-foreground">Web Application Development:</strong> Created a web
                                application for displaying 7-segment numbers, enhancing user interaction and experience
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-4">
                          <Badge variant="secondary">PDF Processing</Badge>
                          <Badge variant="secondary">Web Development</Badge>
                          <Badge variant="secondary">JSON</Badge>
                          <Badge variant="secondary">UI/UX</Badge>
                          <Badge variant="secondary">Data Visualization</Badge>
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
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Technical Skills</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Technologies and tools I work with to bring ideas to life
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full transition-all duration-200 hover:scale-105"
                >
                  {category}
                  {category !== "All" && (
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {skills.filter((skill) => skill.category === category).length}
                    </Badge>
                  )}
                </Button>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {filteredSkills.map((skill) => (
                <Card
                  key={skill.id}
                  className="overflow-hidden group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md"
                >
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-4 flex items-center justify-center">
                      <img
                        src={skill.image || "/placeholder.svg"}
                        alt={skill.name}
                        className="w-full h-full object-contain transition-transform group-hover:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/placeholder.svg?height=64&width=64"
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

            {/* Show count of filtered skills */}
            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground">
                Showing {filteredSkills.length}{" "}
                {selectedCategory === "All" ? "skills" : `${selectedCategory.toLowerCase()} skills`}
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A collection of projects that showcase my skills and learning journey
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
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
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-1 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3 mt-auto">
                      <Button variant="outline" size="sm" className="gap-2 flex-1" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github size={16} />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" className="gap-2 flex-1" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Let's Connect</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I'm actively seeking internship opportunities as a Software Developer. Let's discuss how I can
                contribute to your team!
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">6410210089@psu.ac.th</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">0629638678</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-muted-foreground">40/1 No.4 Tumnob Singhanakorn Songkla</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" asChild>
                      <a
                        href="https://www.linkedin.com/in/napat-rakchua-8a53142a8/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a
                        href="https://github.com/napat-rakchua"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Your email" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Your company" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about the internship opportunity..."
                        className="min-h-[120px]"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
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
              <p className="text-xs text-muted-foreground">Computer Science Student at Prince of Songkla University</p>
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
  )
}

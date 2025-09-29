import { ArrowRight, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Pyx Magic Backend Saas Project with AWS lambda + Python',
    description:
      'Scalable backend system for Pyx Magic built with FastAPI, PostgreSQL, and AWS. Implemented RDS Proxy for optimized database connections, integrated Zoho CRM facade, and improved API/data persistence performance for high-traffic usage.',
    image: '/projects/project1.png',
    tags: ['React js', 'FastAPI', 'PostgreSQL', 'AWS', 'RDS Proxy', 'Zoho CRM'],
    demoUrl: 'https://pyxmagic.com/', // (You can replace with API docs or live demo link if available)
    githubUrl: '#', // (Your GitHub repo link if public)
  },
  {
    id: 2,
    title: 'Policy Insurance System',
    description:
      'A backend system for managing insurance policies, built with Python and Django. Integrated REST APIs, Docker, and PostgreSQL to streamline policy management, improve system performance, and enhance user experience for Country Financial.',
    image: '/projects/project2.png',
    tags: [
      'Python',
      'Django',
      'Flask',
      'PostgreSQL',
      'Docker',
      'AWS S3',
      'Jenkins',
    ],
    demoUrl: '#', // add live demo if available
    githubUrl: '#', // add GitHub repo if public
  },
  {
    id: 3,
    title: 'Online Learning Management System (LMS)',
    description:
      'A full-stack LMS platform enabling educators to create and manage courses, assignments, and quizzes. Built with Django, MySQL, React, and AWS S3, it supports student progress tracking, role-based access, real-time notifications, and certification generation.',
    image: '/projects/project3.png',
    tags: ['Javascript', 'React', 'MongoDB', 'MySQL'],
    demoUrl: '#', // add live demo if available
    githubUrl: '#', // add GitHub repo if public
  },
  {
    id: 4,
    title: 'ToDo Application',
    description:
      'A simple full-stack ToDo application built with FastAPI and PostgreSQL for the backend and React for the frontend. It features user authentication, task creation, updates, and deletions, along with an admin dashboard for managing users and tasks. This project demonstrates end-to-end development, REST API integration, and modern frontend design using TailwindCSS.',
    image: '/projects/project4.png',
    tags: ['FastAPI', 'PostgreSQL', 'React', 'TailwindCSS', 'REST APIs'],
    demoUrl: '#', // add live demo if available
    githubUrl: '#', // add GitHub repo if public
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Over the years, I have contributed to multiple impactful projects
          across diverse domains. I built the <b>Pyx Magic Backend</b>, a
          scalable system using FastAPI, PostgreSQL, and AWS with RDS Proxy,
          integrating Zoho CRM and optimizing API/data persistence for
          high-traffic applications. I also worked on a{' '}
          <b>Policy Insurance System</b>
          for Country Financial, where I developed backend services using
          Django, PostgreSQL, and Docker, ensuring secure policy management with
          AWS cloud integrations. Additionally, I developed a{' '}
          <b> Learning Management System (LMS)</b> leveraging Django, MySQL,
          React, and AWS S3, enabling educators to manage courses, assignments,
          and student progress with real-time notifications and certification
          generation. These projects highlight my ability to design and deliver
          robust, cloud-ready backend systems while collaborating across domains
          like finance, SaaS, and edtech.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/mohammed-7"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

import { useState } from 'react';
import { cn } from '@/lib/utils';

const skills = [
  // Frontend
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'JavaScript', level: 70, category: 'frontend' },
  { name: 'React', level: 70, category: 'frontend' },
  { name: 'TypeScript', level: 65, category: 'frontend' },
  { name: 'Tailwind CSS', level: 70, category: 'frontend' },
  { name: 'Bootstrap', level: 70, category: 'frontend' },

  // Backend
  { name: 'Python', level: 80, category: 'backend' },
  { name: 'Django', level: 85, category: 'backend' },
  { name: 'FastAPI', level: 80, category: 'backend' },
  { name: 'Flask', level: 75, category: 'backend' },
  { name: 'PostgreSQL', level: 80, category: 'backend' },
  { name: 'Redis', level: 70, category: 'backend' },
  { name: 'Celery', level: 65, category: 'backend' },
  { name: 'REST APIs', level: 70, category: 'backend' },

  //Cloud
  { name: 'AWS', level: 80, category: 'cloud' },
  { name: 'EC2', level: 75, category: 'cloud' },
  { name: 'S3', level: 75, category: 'cloud' },
  { name: 'RDS', level: 70, category: 'cloud' },
  { name: 'Lambda', level: 65, category: 'cloud' },
  { name: 'CloudWatch', level: 65, category: 'cloud' },
  { name: 'VPC', level: 60, category: 'cloud' },
  { name: 'IAM', level: 70, category: 'cloud' },
  { name: 'API Gateway', level: 65, category: 'cloud' },

  // Tools
  { name: 'Git', level: 85, category: 'tools' },
  { name: 'GitHub', level: 85, category: 'tools' },
  { name: 'GitLab', level: 75, category: 'tools' },
  { name: 'Docker', level: 75, category: 'tools' },
  { name: 'Kubernetes', level: 65, category: 'tools' },
  { name: 'Linux', level: 80, category: 'tools' },
  { name: 'Nginx', level: 70, category: 'tools' },
  { name: 'Jenkins', level: 65, category: 'tools' },
  { name: 'Postman', level: 85, category: 'tools' },
  { name: 'VS Code', level: 90, category: 'tools' },
];

const categories = ['all', 'frontend', 'backend', 'cloud', 'tools'];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // for filtering categories
  const filteredSkills = skills.filter(
    (skill) => activeCategory === 'all' || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-5 py-2 rounded-full transition-colors duration-300 capitalize',
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary/70 text-forefround hover:bd-secondary'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name} </h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + '%' }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

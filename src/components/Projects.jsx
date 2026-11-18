import React, { useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './common/SectionHeader';
import { portfolioData } from '../data/portfolioData';
import ProjectFilterPills from './projects/ProjectFilterPills';
import ProjectCard from './projects/ProjectCard';
import ProjectModal from './projects/ProjectModal';

export default function Projects() {
  const { projects } = portfolioData;

  const [filter, setFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => (filter === 'Full-Stack' ? p.category === 'Full-Stack' : p.category !== 'Full-Stack'));

  return (
    <Box
      id="projects"
      component="section"
      sx={{
        py: { xs: 6, sm: 7, md: 8, lg: 9 },
        position: 'relative',
        backgroundColor: '#ffffff',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
        {/* Section Header */}
        <ScrollReveal delay={0}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'flex-start', sm: 'flex-end' },
              justifyContent: 'space-between',
              mb: { xs: 3.5, sm: 4, md: 4.5 },
              gap: 2,
            }}
          >
            <SectionHeader
              eyebrow="Featured Works"
              title={<><span className="text-gradient">Engineered Projects</span></>}
              sx={{ mb: 0 }}
            />

            {/* Category Filter Pills */}
            <ProjectFilterPills filter={filter} onFilterChange={setFilter} />
          </Box>
        </ScrollReveal>

        {/* Project Cards Grid */}
        <Grid container spacing={{ xs: 2, sm: 2.5, md: 2.5 }} alignItems="stretch">
          {filteredProjects.map((project, idx) => (
            <Grid item xs={12} md={6} key={project.id}>
              <ScrollReveal delay={(idx % 2) * 0.15} sx={{ height: '100%', display: 'flex' }}>
                <ProjectCard
                  project={project}
                  onOpenArchitecture={setActiveModalProject}
                />
              </ScrollReveal>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Case Study / Project Architecture Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </Box>
  );
}

import { useMemo, useState, useEffect } from 'react';
import { Container, Theme } from './settings/types';
import { TommasoPortfolio } from './components/generated/TommasoPortfolio';
import { FeaturedProjectsGrid } from './components/generated/FeaturedProjectsGrid';
import { AboutSection } from './components/generated/AboutSection';
import { ContactSection } from './components/generated/ContactSection';
import BMWX3ProjectDetail from './components/generated/BMWX3ProjectDetail';
import { useProjectNavigation } from './hooks/useNavigation';
import { StickyNavigation } from './components/ui/StickyNavigation';
import { MobileNavigation } from './components/ui/MobileNavigation';

let theme: Theme = 'dark';
// only use 'centered' container for standalone components, never for full page apps or websites.
let container: Container = 'none';

function App() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const { scrollToProjectSection } = useProjectNavigation();

  // Scroll to top whenever a project is selected or deselected
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [selectedProject]);

  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  const generatedComponent = useMemo(() => {
    // Show project detail page if a project is selected
    if (selectedProject === 'bmw-x3') {
      return (
        <BMWX3ProjectDetail 
          onBack={() => setSelectedProject(null)}
        />
      );
    }

    // THIS IS WHERE THE TOP LEVEL GENRATED COMPONENT WILL BE RETURNED!
    return (
      <div className="w-full">
        <section id="home">
          <TommasoPortfolio />
        </section>
        <AboutSection />
        <FeaturedProjectsGrid onProjectClick={(projectId) => setSelectedProject(projectId)} />
        <ContactSection />
      </div>
    ); // %EXPORT_STATEMENT%
  }, [selectedProject]);

  if (container === 'centered') {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center">
        {generatedComponent}
      </div>
    );
          } else {
            return (
              <>
                <StickyNavigation />
                <MobileNavigation />
                {generatedComponent}
              </>
            );
          }
}

export default App;
import { Routes, Route, Navigate } from 'react-router-dom';
import { CreativeHouseLobby } from './pages/Lobby/CreativeHouseLobby';
import { MovementIndex } from './pages/MovementIndex';
import { MovementPage } from './pages/movements/MovementPage';
import { StoryLibrary } from './pages/StoryLibrary';
import { CreatorNetwork } from './pages/CreatorNetwork';
import { WorkWithUs } from './pages/WorkWithUs';
import { VoicesIntroPage } from './pages/VoicesIntroPage';
import { StudioLandingPage } from './pages/studio/StudioLandingPage';
import { ProductionsPage } from './pages/studio/ProductionsPage';
import { ProjectsPage } from './pages/studio/ProjectsPage';
import { SystemsPage } from './pages/studio/SystemsPage';
import { AboutPage } from './pages/studio/AboutPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CreativeHouseLobby />} />
      <Route path="/movements" element={<MovementIndex />} />
      <Route path="/movements/:slug" element={<MovementPage />} />
      <Route path="/stories" element={<StoryLibrary />} />
      <Route path="/voices" element={<CreatorNetwork />} />
      <Route path="/voices-intro" element={<VoicesIntroPage />} />
      <Route path="/studio" element={<StudioLandingPage />} />
      <Route path="/studio/productions" element={<ProductionsPage />} />
      <Route path="/studio/projects" element={<ProjectsPage />} />
      <Route path="/studio/systems" element={<SystemsPage />} />
      <Route path="/studio/about" element={<AboutPage />} />
      <Route path="/collaborate" element={<WorkWithUs />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;

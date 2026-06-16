import { useState, useEffect } from 'react';
import { Nav } from '../components/Nav.jsx';
import { Footer } from '../components/Footer.jsx';
import { Home } from './Home.jsx';
import { About } from './About.jsx';
import { Process } from './Process.jsx';
import { Break } from './Break.jsx';
import { Changelog } from './Changelog.jsx';
import { ProjectDetail } from './ProjectDetail.jsx';
import { CareCompass } from './CareCompass.jsx';
import { HomeDepot } from './HomeDepot.jsx';
import { NaturalDisaster } from './NaturalDisaster.jsx';
import { Wands } from './Wands.jsx';

export function App() {
  const [route, setRoute] = useState("home");
  const [projectId, setProjectId] = useState(null);

  const navigate = (r, id = null) => {
    setRoute(r);
    setProjectId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handler = (e) => {
      const projTarget = e.target.closest("[data-project]");
      if (projTarget) {
        e.preventDefault();
        navigate("detail", projTarget.dataset.project);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const renderPage = () => {
    if (route === "break") return <Break onNavigate={(r) => navigate(r)} />;
    if (route === "about") return <About />;
    if (route === "process") return <Process />;
    if (route === "changelog") return <Changelog onBack={() => navigate("home")} />;
    if (route === "detail" && projectId === "01") {
      return (
        <CareCompass
          onBack={() => navigate("home")}
          onNext={() => navigate("detail", "02")}
        />
      );
    }
    if (route === "detail" && projectId === "02") {
      return (
        <HomeDepot
          onBack={() => navigate("home")}
          onNext={() => navigate("detail", "04")}
        />
      );
    }
    if (route === "detail" && projectId === "03") {
      return (
        <NaturalDisaster
          onBack={() => navigate("home")}
          onNext={() => navigate("detail", "04")}
        />
      );
    }
    if (route === "detail" && projectId === "04") {
      return (
        <Wands
          onBack={() => navigate("home")}
        />
      );
    }
    if (route === "detail" && projectId) {
      return (
        <ProjectDetail
          id={projectId}
          onBack={() => navigate("home")}
          onNext={(id) => { setProjectId(id); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        />
      );
    }
    return <Home />;
  };

  return (
    <>
      <div className="grain"></div>
      <Nav route={route} onNavigate={(r) => navigate(r)} />
      <div id="root-content">
        {renderPage()}
      </div>
      <Footer onChangelog={() => navigate("changelog")} />
    </>
  );
}

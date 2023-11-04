import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import { AboutPage, HomePage, NotFoundPage, ConstructionPage } from "./pages";
import navigation from './lib/constants/navigation';

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path={navigation.paths.about} element={<AboutPage />} />
      <Route path={navigation.paths.notFound} element={<NotFoundPage />} />
      <Route path={navigation.paths.contact} element={<ConstructionPage />} />
      <Route path={navigation.paths.blog} element={<ConstructionPage />} />
      <Route path={navigation.paths.blogPost} element={<ConstructionPage />} />
      <Route path={navigation.paths.projects} element={<ConstructionPage />} />
      <Route path={navigation.paths.project} element={<ConstructionPage />} />
      <Route path="*" element={<Navigate to={navigation.paths.notFound} replace />} />
    </Routes>
  );
};

export default AppRouter

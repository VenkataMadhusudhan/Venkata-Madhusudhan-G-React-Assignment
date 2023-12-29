// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import MovieListPage from './components/MovieListPage';
import './App.css';
import PageNotFound from './components/PageNotFound';
import { useAppSelector } from './reduxStore/hooks';


const App: React.FC = () => {
  const isLoggedIn = useAppSelector((state) => state.userLoginStatus.isLoggedIn);
  console.log("isLoggedIn",isLoggedIn);

  return (
      <Router>
        <Routes>
          <Route path='/' element={ <Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/home"
            element={
              isLoggedIn ? (
                <MovieListPage />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
  );
};

export default App;

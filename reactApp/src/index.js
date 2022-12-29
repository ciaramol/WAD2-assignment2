import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
//import HomePage from "./pages/homePage";
import { HomePage, MoviesTest } from "./pages";
import MoviePage from "./pages/movieDetailsPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import PopularMoviesPage from "./pages/popularMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import ActorDetailsPage from './pages/actorDetailsPage';
import TVHomePage from "./pages/tvHomePage";
import TVPage from "./pages/tvDetailsPage";
import PopularTVPage from "./pages/popularTVPage";
import { PublicPage } from "./pages";
import LoginPage from "./loginPage";
import SignUpPage from "./signUpPage";
import MovieProvider from "./moviesContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader /> {/*New Header */}
        <MovieProvider>
          <Routes>
            <Route path="/reviews/form" element={<AddMovieReviewPage />} />
            <Route path="/reviews/:id" element={<MovieReviewPage />} />
            <Route exact path="/movies/upcoming" element={<UpcomingMoviesPage />} />
            <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
            <Route exact path="/movies/popular" element={<PopularMoviesPage />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/" element={<MoviesTest />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/actor/:id" element={<ActorDetailsPage />} />
            <Route path="/tv" element={<TVHomePage />} />
            <Route path="/tv/:id" element={<TVPage />} />
            <Route path="/tv/popular" element={<PopularTVPage />} />
            <Route path="/public" component={PublicPage} />
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />
          </Routes>
        </MovieProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"))
rootElement.render(<App />);


// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Routes, Navigate, Link, Redirect } from "react-router-dom";
// import { PublicPage, Movies, Profile, HomePage } from "./pages";
// import LoginPage from "./loginPage";
// import AuthProvider from "./authContext";
// import PrivateRoute from "./privateRoute";
// import AuthHeader from "./authHeader";
// import SignUpPage from "./signUpPage";
// import MovieProvider from "./moviesContext";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <AuthProvider>
//         <AuthHeader />
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/public">Public</Link>
//           </li>
//           <li>
//             <Link to="/movies">Movies</Link>
//           </li>
//           <li>
//             <Link to="/profile">Profile</Link>
//           </li>
//         </ul>
//         <MovieProvider>
//           <Routes>
//             <Route path="/public" element={PublicPage} />
//             <Route exact path="/" element={HomePage} />
//             <Route path="/login" element={LoginPage} />
//             <Route path="/signup" element={SignUpPage} />
//             <Route path="/movies" element={Movies} />
//             <Route path="/profile" element={Profile} />

//           </Routes>
//         </MovieProvider>
//       </AuthProvider>
//     </BrowserRouter>
//   );
// };

// ReactDOM.render(<App />, document.getElementById("root"));
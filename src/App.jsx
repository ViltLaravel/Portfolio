import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";

const App = () => {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Nicole N. Amoguis | Software Engineer Portfolio</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Nicole N. Amoguis, a software engineer specializing in web and mobile development. Explore projects and skills."
        />
        <meta
          name="keywords"
          content="Nicole Amoguis, portfolio, software engineer, web development, mobile development, web developer, front-end developer"
        />
        <meta
          property="og:title"
          content="Nicole N. Amoguis | Software Engineer Portfolio"
        />
        <meta
          property="og:description"
          content="Explore Nicole's software engineering projects and skills."
        />
        <meta
          property="og:image"
          content="https://nicole-amoguis-portfolio.vercel.app/seo/img-hero.png"
        />
        <meta
          property="og:url"
          content="https://nicole-amoguis-portfolio.vercel.app"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Nicole N. Amoguis | Software Engineer"
        />
        <meta
          name="twitter:description"
          content="Discover Nicole's skills in mobile and web development."
        />
        <meta
          name="twitter:image"
          content="https://nicole-amoguis-portfolio.vercel.app/seo/img-hero.png"
        />
      </Helmet>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
};

export default App;

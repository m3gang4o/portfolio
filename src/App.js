import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Feed from './components/Feed';
import AboutPage from './components/AboutPage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const projects = [
    {
      id: 'bucksHackathon',
      title: "Milwaukee Bucks Hackathon — 1st Place Win",
      year: "2025",
      thumbnail: "/media/bucks_thumb.png",
      description: "A data-driven victory in fan engagement strategy, engineered by Modine Manufacturing.",
      skills: ["Business Analytics & Strategy", "RFM Segmentation", "Markov Chain Modeling", "UX Gamification Design", "Data Visualization", "Slide Design & Storytelling", "Team Collaboration & Communication"],
      role: "Analytics Strategist & Presenter (1st Place Team)",
      duration: "February 2025",
      overview: "Our team from UNC Chapel Hill won 1st place in the 2025 Milwaukee Bucks Hackathon, a national business analytics competition engineered by Modine Manufacturing. Over the course of February 2025, we analyzed real-world fan data and delivered an innovative retention and engagement strategy for the Milwaukee Bucks.\n\nUsing RFM segmentation, Markov Chain modeling, and lifecycle mapping, we designed a gamified platform to optimize fan value, reduce churn, and boost season ticket upgrades. Our solution stood out for its clarity, strategic potential, and actionable insights—earning us top honors and a VIP Bucks game experience.",
      challenge: "To analyze real-world fan data and deliver an innovative retention and engagement strategy for the Milwaukee Bucks in a time-constrained national competition.",
      video: "/media/buck.mp4",
      subtitle: "A data-driven victory in fan engagement strategy.",
      videoCaption: "2-Minute Pitch Video for the Milwaukee Bucks Hackathon.",
      journeyText: "The competition kicked off with a business prompt and dataset release on February 10. By February 14, we submitted a 2-minute elevator pitch outlining our strategy. After being selected as finalists, we had three days—from February 25–28—to finalize our presentation for judges from the Bucks and Modine organizations.\n\nWe focused on creating a comprehensive fan lifecycle strategy that spanned the full user journey—from first-time fans to loyal season ticket holders. Key components included:\n- RFM analysis to rank fans by recency, frequency, and monetary value\n- A Markov Chain model to predict how fans transition between levels of engagement\n- A proposed fan experience redesign, integrating:\n  • Gamification with XP and badge tracking\n  • Tiered loyalty rewards\n  • Personalized messaging and churn prevention tools\n\nWe emphasized both immediate feasibility and long-term revenue impact, aligning our solution with the Bucks' business goals while offering an engaging fan experience.",
      servicesList: ["Business Analytics & Strategy", "RFM Segmentation", "Markov Chain Modeling", "UX Gamification Design", "Data Visualization", "Slide Design & Storytelling", "Team Collaboration & Communication"],
      links: [
        { name: "Official Hackathon Page", url: "https://www.nba.com/bucks/hackathon" },
        { name: "UNC Data Science Feature", url: "https://datascience.unc.edu/newspost/bucks-hackathon/" }
      ],
      pdf: "/media/bucks-present.pdf",
      clientInfo: "Milwaukee Bucks (in partnership with Modine Manufacturing)",
      sectorInfo: "Sports Analytics / Business Strategy",
      yearInfo: "2025",
      creditsInfo: {
        "Team": "Megan Gao, Oscar Cheung, Sahithi Rampally, Antony Tran"
      }
    },
    {
      id: 'dulceCafe',
      title: "DULCE CAFE — WEBSITE REDESIGN",
      year: "2024",
      thumbnail: "/media/dulce_thumbnail.png",
      image: "/media/dulce.png",
      description: "A modern refresh for a beloved Durham coffee shop.",
      skills: ["UX/UI DESIGN", "WEB DEVELOPMENT", "CONTENT STRATEGY", "CLIENT COMMUNICATION", "BRANDING & VISUAL IDENTITY", "CMS IMPLEMENTATION", "MOBILE OPTIMIZATION"],
      role: "Lead UX/UI Designer & Developer (via 1893 Brand Studio)",
      duration: "July 2024 - Now",
      overview: "We redesigned the Dulce Cafe website to provide a fresh, functional, and visually appealing online experience for customers. The new site improves usability, integrates food delivery platforms, and reflects the café's charm and personality. It retains the original color scheme while introducing new content photos, updated menus, and a mobile-friendly layout.\n\nBuilt collaboratively through 1893 Brand Studio, the redesign ensures easy updates, better social media integration, and room for future growth. The site helps Dulce connect with new and returning customers while strengthening its online presence.",
      challenge: "The original site lacked interactivity, visual appeal, and functionality. It also contained outdated content and lacked integration with modern delivery platforms, making it difficult for customers to engage with the brand online.",
      journeyText: "We kicked off the project with a client consultation to understand Dulce's goals and gather brand direction. The original site lacked interactivity, visual appeal, and functionality. It also contained outdated content and lacked integration with modern delivery platforms.\n\nInspired by modern food and beverage websites—particularly Spicy 9—we moved forward with a \"free-for-all\" design mindset. We researched competitors, crafted mood boards with style tiles (colors, fonts, and image inspiration), and aligned our design direction with Dulce's aesthetic and mission.\n\nAfter developing wireframes in Adobe XD, we created a beta site featuring:\n- Embedded Uber Eats and GrubHub buttons\n- Updated menu sections with easy editability\n- A simplified CMS for content management\n- Clean, updated graphics and photography\n- A responsive design for desktop and mobile\n\nFollowing beta testing and client training, we launched the full site with plans for further enhancements in SEO and branding.",
      journeyImages: [
        { src: "/media/old-dulce.png", caption: "Original Website" },
        { src: "/media/old-dulce1.png", caption: "Original Website" },
        { src: "/media/dulce-wireframes.png", caption: "Wireframes" },
        { src: "/media/dulce-inspo.png", caption: "Inspiration" },
        { src: "/media/dulce-styleguide.png", caption: "Style Guide" }
      ],
      servicesList: ["UX/UI Design", "Web Development", "Content Strategy", "Client Communication", "Branding & Visual Identity", "CMS Implementation", "Mobile Optimization"],
      videos: [
        { videoSrc: "/media/dulce-home.mov", caption: "The home page showcases Dulce, an about section, featured specialities, and reviews." },
        { videoSrc: "/media/dulce-about.mov", caption: "The about section tells you more about Dulce and the owners, and provides specific locations and a link for a careers page." },
        { videoSrc: "/media/dulce-order.mov", caption: "The menu showcases the menu and also an option for online ordering." },
        { videoSrc: "/media/dulce-contact.mov", caption: "The contact page showcases email, phone number, and message sections to contact the cafe." }
      ],
      clientInfo: "Dulce Cafe (Durham, NC)",
      sectorInfo: "Food & Beverage",
      yearInfo: "2024",
      creditsInfo: {
        "Design & Development": "Megan Gao",
        "Collaborators": "Antony Tran, Catherine Yoder, Max Marlow, Sanjana Gopalswamy, Oscar Cheung"
      }
    },
    {
      id: 'elanProject',
      title: "ELAN — MOBILE SNEAKER MARKETPLACE",
      year: "2025", 
      thumbnail: "/media/elan_thumb.png",
      image: "/media/elan.png",
      description: "A sleek, mobile-first shopping experience for sneaker enthusiasts.", 
      skills: ["UX/UI DESIGN", "FIGMA", "MOBILE INTERACTION"], 
      role: "UX/UI DESIGNER",
      duration: "CLASS PROJECT",
      overview: "ELAN is a sleek, mobile-first shopping experience for sneaker enthusiasts — inspired by platforms like GOAT and StockX but designed with a refined, personal touch. Built entirely in Figma, this prototype showcases a modern interface for discovering, purchasing, and verifying limited-edition footwear. The name ELAN comes from the French word élan, meaning 'momentum' or 'enthusiastic flair.' It reflects the energy and style of the sneakerhead community — always moving, always bold. Whether you're looking for rare drops or classic silhouettes, ELAN offers a minimalist yet expressive interface tailored for browsing, authenticating, and buying sneakers on the go.",
      challenge: "Reinterpreting a wireframe prompt into a high-fidelity prototype with a unique design language, focusing on clarity, usability, and mobile responsiveness.",
      video: "/videos/record.mp4",
      subtitle: "Inspired by GOAT & StockX, designed with a refined touch.",
      videoCaption: "Demo of ELAN's mobile interface in action.",
      journeyText: "This project started as a classroom design prompt, where I was assigned Wireframe #2 to reinterpret into a high-fidelity prototype. I reimagined the structure with my own design language — emphasizing clarity, usability, and mobile responsiveness. Beyond aesthetics, ELAN is built on UX principles that prioritize intuitive flow, accessible navigation, and clean visual hierarchy. I also created reusable components and a modular layout system to ensure scalability. In the next iteration, I plan to animate key interactions and explore turning it into a working prototype using React or Lottie-enhanced transitions.",
      servicesList: [
        "UX/UI Design",
        "Mobile Interaction Design",
        "Brand Direction",
        "Figma Prototyping"
      ],
      screens: [
        { imageSrc: "/media/land.png", caption: "Home Screen. Discover trending releases and curated collections." },
        { imageSrc: "/media/shoe.png", caption: "Product Page. View sneaker details, prices, and purchase options." },
        { imageSrc: "/media/profile.png", caption: "Profile Page. View user detials such as past orders." },
        { imageSrc: "/media/checkout.png", caption: "Checkout Experience. Clean and streamlined for mobile-first use." },
      ],
      clientInfo: "Personal / Academic",
      sectorInfo: "E-Commerce (Sneakers / Fashion)",
      creditsInfo: {
        "Design": "Megan Gao",
        "Prototype": "Megan Gao"
      }
    },
    {
      id: 'uncGwcWebsiteRedesign',
      title: "UNC GWC — WEBSITE REDESIGN",
      year: "2025",
      thumbnail: "/media/gwc_thumb.png",
      image: "/media/gwc.png",
      description: "A modern, mission-driven revamp for Girls Who Code at UNC.",
      skills: ["UX/UI DESIGN", "WEB DEVELOPMENT (HTML & CSS)", "INFORMATION ARCHITECTURE", "BRAND + ACCESSIBILITY COMPLIANCE", "TEAM COLLABORATION & LEADERSHIP"],
      role: "Lead UX/UI Designer & Front-End Developer",
      duration: "Fall 2024 – Spring 2025",
      overview: "We redesigned the UNC Girls Who Code website to create a more vibrant, accessible, and user-friendly experience. The new site makes it easier for prospective students, volunteers, and supporters to learn about our chapter and get involved.It includes a welcoming Home page, an About section with our mission and leadership, dedicated Student and Volunteer pages with sign-up forms, and a Photo Gallery showcasing chapter highlights.Built from the ground up by our team, the site reflects our commitment to empowerment, creativity, and inclusivity.",
      challenge: "To redesign the UNC Girls Who Code website, creating a modern, inviting, and accessible experience aligned with both UNC and GWC brand guidelines. This involved collaborative design, development, and adherence to accessibility standards, ensuring the site effectively balanced fun and professionalism to engage students, volunteers, and supporters.",
      subtitle: "A modern, mission-driven revamp for Girls Who Code at UNC.",
      journeyText: "We began by reviewing the original UNC Girls Who Code website as a team, identifying key areas for improvement. The existing site lacked color, interactivity, and visual engagement—it felt plain and outdated. Built on WordPress, it also limited our ability to implement custom features and styling ideas.\n\nFrom there, we turned to research and gathered inspiration from other Girls Who Code chapters, especially admiring the web designs of UVA and UNC Charlotte. Based on this, I created a custom style guide for the team, establishing a cohesive visual identity with pastels, UNC blue, clean typography, and consistent iconography.\n\nTo ensure creative freedom, we opted to move away from WordPress and instead used GitHub Pages for full control over HTML and CSS. After evaluating platforms like Webflow and Readymag, this decision allowed us to hand-code the site while keeping deployment simple and accessible for everyone on the team.\n\nI collected team members’ preferences through a Google Form and direct communication, then paired them up and assigned pages for collaborative ownership. We held weekly meetings to check in on progress, answer questions, and refine our design direction.\n\nOver the course of 5–6 weeks, we wireframed, built, and polished the redesigned site—making sure it was mobile-friendly, accessible, and engaging. The final site was published on GitHub Pages and is now live for students, volunteers, and supporters.",
      journeyImages: [
        { src: "/media/inspo.png", caption: "Inspiration" },
        { src: "/media/wireframes.png", caption: "Wireframes" },
        { src: "/media/gwc-styleguide.png", caption: "Style Guide" },
      ],
      servicesList: [
        "UX/UI Design",
        "Web Development (HTML & CSS)",
        "Information Architecture",
        "Brand + Accessibility Compliance",
        "Team Collaboration & Leadership"
      ],
      screens: [
        { imageSrc: "/media/front.png", caption: "Home: A welcoming landing page that introduces the user to the UNC Girls Who Code chapter and displays the organization's logo." },
        { imageSrc: "/media/about.png", caption: "About: Details the organization's mission, includes a 'Join the Community' call-to-action, provides statistics like member count and founding year, and showcases the leadership board and FAQs." },
        { imageSrc: "/media/Students.png", caption: "Students: Offers a form for middle school girls to join and describes the fun, engaging, and supportive coding classes available, from game design to AI exploration." },
        { imageSrc: "/media/volunteers.png", caption: "Volunteers: Outlines various opportunities for UNC students to volunteer and contribute to the organization, complete with application forms." },
        { imageSrc: "/media/gallery.png", caption: "Photo Gallery: A visual archive showcasing photos from the club's activities and events during Spring 2025 and Fall 2024." }
      ],
      clientInfo: "UNC Girls Who Code",
      sectorInfo: "Education / Nonprofit",
      yearInfo: "2025",
      creditsInfo: {
        "Design & Code": "Megan Gao",
        "Collaborators": "Rachel Lin, Akshara Kolipaka, Divitha Kalidindi, Jacqueline Nguyen, Maria Thomas, Ishitha Jujjavarapu, Medha Nagaluri"
      },
      links: {
        finalWebsite: "https://m3gang4o.github.io/girlswhocode/",
        githubRepo: "https://github.com/m3gang4o/girlswhocode",
        figmaDesign: "https://www.figma.com/design/YDkv35CESlNwlicvNdaC62/GWC-Site?node-id=0-1&m=dev&t=9sAZt4PUGsFRrQBX-1"
      }
    }
  ];

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-text">Loading...</div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/feed" element={<Feed />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/*" element={
          <div className={`app ${isMenuOpen ? 'menu-open' : ''}`}>
            <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <MainContent projects={projects} />
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;

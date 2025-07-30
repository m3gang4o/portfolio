import React, { useState, useEffect, useRef } from 'react';
import PopupManager from './PopupManager';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { setCookie, getCookie, setInternalNavigation, isInternalNavigation, isFirstVisitInSession } from '../utils/cookies';

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        cursor: 'pointer',
        fontSize: '20px'
      }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-left"></i>
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        cursor: 'pointer',
        fontSize: '20px'
      }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-right"></i>
    </div>
  );
};

const MainContent = ({ showMenu }) => {
 const [loading, setLoading] = useState(true);
 const [commandIndex, setCommandIndex] = useState(0);
 const [charIndex, setCharIndex] = useState(0);
 const [activeQuote, setActiveQuote] = useState(0);
 const [activeTab, setActiveTab] = useState('experience');
 const [showArrow, setShowArrow] = useState(false);
 const [activeProject, setActiveProject] = useState(null);
 const [lightboxImage, setLightboxImage] = useState(null);
 const [numPages, setNumPages] = useState(null);

 const projectRefs = useRef([]);
  // Terminal commands for the loading screen - inspired by public---domain.com
 const commands = [
   'WELCOME TO MEGAN OS...',
   'LOADING...',
   'INIT: DESIGN DEV DATA',
   '...............',
   'cd ~/PORTFOLIO',
   './OPEN'
 ];


 // State for typed text for each command
 const [typedCommands, setTypedCommands] = useState(commands.map(() => ''));

  // Handler to update numPages when document loads
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

 // Quotes in AWGE style
 const quotes = [
   { text: '"ENGINEER"' },
   { text: '"DESIGNER"' },
   { text: '"DATA"' },
   { text: '"PROGRAMMER"' }
 ];


 // Experience data
 const experiences = [
   {
     title: "WEB DESIGN INTERN",
     company: "SAS",
     date: "MAY 2025 - AUGUST 2025",
     description: "Support UX and web design by applying user-centered design, conducting user tests, and building responsive web elements with HTML, CSS, and Figma. Assist corporate marketing through visual design and front-end development for SAS.com."
   },
   {
     title: "WEB DEVELOPER & GRAPHIC DESIGNER",
     company: "1893 BRAND STUDIOS",
     date: "AUGUST 2024 - PRESENT",
     description: "Design and develop websites and digital materials for local businesses using WordPress and Figma. Collaborate with clients on branding, logos, and collateral. Conduct market research to support customer growth and revenue."
   },
   {
     title: "MEDIA CHAIR",
     company: "CAROLINA AR/VR",
     date: "AUGUST 2024 - PRESENT",
     description: "Design and develop XR, VR, AR, and MR hardware projects (e.g., 3D printing, haptics, PCB/driver development). Lead client and in-house projects. Oversee visual/audio branding for a cohesive organizational identity."
   }
 ];


 // Skills data organized by category
 const skillsCategories = [
   {
     title: "LANGUAGES & TOOLS",
     skills: ["HTML", "CSS", "JAVASCRIPT", "PYTHON", "JAVA", "C", "SWIFT", "NODE.JS", "REACT", "SQL", "DOCKER", "GIT"]
   },
   {
     title: "DESIGN & PROTOTYPING",
     skills: ["FIGMA", "FRAMER", "ADOBE CREATIVE SUITE", "SKETCH", "LOTTIE"]
   },
   {
     title: "DATA ANALYSIS",
     skills: ["EXCEL", "DATA VISUALIZATION", "A/B TESTING", "MARKOV CHAIN MODELING", "RFM SEGMENTATION"]
   }
 ];


 // Projects/Works section with more detailed information
 const projects = [
   {
     id: 'bucksHackathon',
     title: "Milwaukee Bucks Hackathon — 1st Place Win",
     year: "2025",
     thumbnail: "/media/bucks_thumb.png",
     pdfSlideshow: "/media/bucks-present.pdf",
     description: "A data-driven victory in fan engagement strategy, engineered by Modine Manufacturing.",
     skills: ["Business Analytics & Strategy", "RFM Segmentation", "Markov Chain Modeling", "UX Gamification Design", "Data Visualization", "Slide Design & Storytelling", "Team Collaboration & Communication"],
     role: "Analytics Strategist & Presenter (1st Place Team)",
     duration: "February 2025",
     overview: "Our team from UNC Chapel Hill won 1st place in the 2025 Milwaukee Bucks Hackathon, a national business analytics competition engineered by Modine Manufacturing. Over the course of February 2025, we analyzed real-world fan data and delivered an innovative retention and engagement strategy for the Milwaukee Bucks.\n\nUsing RFM segmentation, Markov Chain modeling, and lifecycle mapping, we designed a gamified platform to optimize fan value, reduce churn, and boost season ticket upgrades. Our solution stood out for its clarity, strategic potential, and actionable insights—earning us top honors and a VIP Bucks game experience.",
     challenge: "To analyze real-world fan data and deliver an innovative retention and engagement strategy for the Milwaukee Bucks in a time-constrained national competition.",
     video: {
       src: "/media/bucks.mp4",
       controls: true,
       size: "large",
       autoPlay: false
     },
     presentationVideo: "/media/bucks.mp4",
     subtitle: "A data-driven victory in fan engagement strategy.",
     videoCaption: "Slideshow presentation of our winning Milwaukee Bucks Hackathon strategy.",
     journeyText: "The competition kicked off with a business prompt and dataset release on February 10. By February 14, we submitted a 2-minute elevator pitch outlining our strategy. After being selected as finalists, we had three days—from February 25–28—to finalize our presentation for judges from the Bucks and Modine organizations.\n\nWe focused on creating a comprehensive fan lifecycle strategy that spanned the full user journey—from first-time fans to loyal season ticket holders. Key components included:\n- RFM analysis to rank fans by recency, frequency, and monetary value\n- A Markov Chain model to predict how fans transition between levels of engagement\n- A proposed fan experience redesign, integrating:\n  • Gamification with XP and badge tracking\n  • Tiered loyalty rewards\n  • Personalized messaging and churn prevention tools\n\nWe emphasized both immediate feasibility and long-term revenue impact, aligning our solution with the Bucks' business goals while offering an engaging fan experience.",
     articles: [
       {
         title: "Bucks Host Hackathon Presented by Modine",
         source: "NBA.com",
         url: "https://www.nba.com/bucks/hackathon",
         image: "/media/nba-logo.png"
       },
       {
         title: "UNC Students Win First Place in Milwaukee Bucks Hackathon",
         source: "UNC Data Science",
         url: "https://datascience.unc.edu/newspost/bucks-hackathon/",
         image: "/media/unc-logo.png"
       }
     ],
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
     },
     links: {
       figmaDesign: "https://www.figma.com/design/rl1gxTsZhthE2xq7Vl4NFY/Dulce-Cafe?node-id=0-1&t=pfLg88gCVrlzHtBy-1"
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
     },
     links: {
       figmaDesign: "https://www.figma.com/design/QFuJAfjfBIDLM3UQwZGkQc/ELAN---MEGAN?node-id=0-1&t=9sSY2kWZpJioSQgN-1"
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


 // Terminal typing effect - faster loading
 useEffect(() => {
   if (loading) {
     const timer = setTimeout(() => {
       if (commandIndex < commands.length) {
         if (charIndex < commands[commandIndex].length) {
           // Update the current command's typed text
           const newTypedCommands = [...typedCommands];
           newTypedCommands[commandIndex] = commands[commandIndex].substring(0, charIndex + 1);
           setTypedCommands(newTypedCommands);
           setCharIndex(charIndex + 1);
         } else {
           // Move to the next command after a shorter delay
           setTimeout(() => {
             setCommandIndex(commandIndex + 1);
             setCharIndex(0);
           }, 300); // Reduced delay between commands
         }
       } else {
         // All commands have been typed - shorter delay before showing content
         setTimeout(() => {
           setLoading(false);
           setShowArrow(true);
         }, 500); // Reduced final delay
       }
     }, 40); // Faster typing speed
    
     return () => clearTimeout(timer);
   }
 }, [loading, commandIndex, charIndex, commands, typedCommands]);


 // Quote rotation effect
 useEffect(() => {
   const quoteTimer = setInterval(() => {
     setActiveQuote((prevIndex) => (prevIndex + 1) % quotes.length);
   }, 3000); // Change quote every 3 seconds
  
   return () => clearInterval(quoteTimer);
 }, [quotes.length]);


 // Intersection Observer for scroll animations
 useEffect(() => {
   const observerOptions = {
     root: null,
     rootMargin: '0px',
     threshold: 0.1
   };


   const handleIntersect = (entries, observer) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         entry.target.classList.add('in-view');
       }
     });
   };


   const observer = new IntersectionObserver(handleIntersect, observerOptions);
  
   // Observe project elements
   projectRefs.current.forEach(ref => {
     if (ref) observer.observe(ref);
   });


   return () => {
     projectRefs.current.forEach(ref => {
       if (ref) observer.unobserve(ref);
     });
   };
 }, [projects]); // Added projects to dependency array as projectRefs depends on it


 // Check if user should see the loading screen
 useEffect(() => {
   const isInternal = isInternalNavigation();
   
   // Show loading only if this is NOT internal navigation
   // This means: show loading for all external entries (including returning visitors)
   // Skip loading only for internal navigation within the site
   if (isInternal) {
     setLoading(false);
     setCommandIndex(commands.length);
     setTypedCommands(commands.map(cmd => cmd));
   }
 }, []);

 // Set internal navigation flag after loading screen is finished
 useEffect(() => {
   if (!loading) {
     setInternalNavigation(); // Mark that user is now navigating internally
   }
 }, [loading]);

 // Don't render content when menu is open
 if (showMenu) {
   return null;
 }


 // Handle project click to show detailed view
 const handleProjectClick = (project) => {
   setActiveProject(project);
   document.body.style.overflow = 'hidden';
 };


 // Close project detail view
 const closeProjectDetail = () => {
   setActiveProject(null);
   document.body.style.overflow = 'auto';
 };


 // New: Open lightbox with the clicked image
 const openLightbox = (imageSrc) => {
   setLightboxImage(imageSrc);
   document.body.style.overflow = 'hidden'; // Prevent background scrolling
 };


 // New: Close lightbox
 const closeLightbox = () => {
   setLightboxImage(null);
   document.body.style.overflow = 'auto'; // Restore background scrolling
 };


 return (
   <main className="main-content fade-in">
     {loading ? (
       <div className="terminal-section">
         <div className="terminal-overlay">
           <div className="terminal-content">
             {commands.map((command, index) => (
               <div
                 key={index}
                 className={`command-line ${index <= commandIndex ? 'visible' : ''}`}
               >
                 {typedCommands[index]}
                 {index === commandIndex && charIndex < command.length && (
                   <span className="terminal-cursor-blink">_</span>
                 )}
               </div>
             ))}
           </div>
         </div>
       </div>
     ) : (
       <>
         {/* Hero section with centered quotes */}
         <section className="content-section hero-section">
           <div className="quote-container">
             {quotes.map((quote, index) => (
               <h1
                 key={index}
                 className={`quote ${index === activeQuote ? 'active' : ''}`}
               >
                 {quote.text}
               </h1>
             ))}
           </div>
           <div className={`scroll-arrow ${showArrow ? 'visible' : ''}`}>
             <span></span>
             <span></span>
             <span></span>
           </div>
          
           {/* Add PopupManager */}
           <PopupManager />
         </section>
        
         {/* Manifesto section */}
         <section className="content-section manifesto-section">
           <div className="manifesto-container">
             <h2 className="manifesto-title">"MANIFESTO"</h2>
             <p className="manifesto-text">
               hi, my name is megan gao, and welcome to my personal website. i'm an undergraduate at unc-chapel hill studying computer science and data science. i'm passionate about product design, data-driven strategy, and building thoughtful digital experiences through software and design. i'm currently exploring roles in product management, software engineering, data analytics, and ui/ux — and how emerging tech like ai can elevate user-centered products. thanks for stopping by — hope we can connect!
             </p>
           </div>
         </section>
        
         {/* Experience/Skills/Resume Section */}
         <section className="content-section tabs-section">
           <div className="container">
             <div className="tabs-header">
               <button
                 className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
                 onClick={() => setActiveTab('experience')}
               >
                 EXPERIENCE
               </button>
               <button
                 className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`}
                 onClick={() => setActiveTab('skills')}
               >
                 SKILLS
               </button>
               <button
                 className={`tab-button ${activeTab === 'resume' ? 'active' : ''}`}
                 onClick={() => setActiveTab('resume')}
               >
                 RESUME
               </button>
             </div>
            
             <div className={`tab-content ${activeTab === 'experience' ? 'active' : ''}`}>
               {experiences.map((exp, index) => (
                 <div key={index} className="experience-item">
                   <h3 className="experience-title">{exp.title}</h3>
                   <div className="experience-company">{exp.company}</div>
                   <div className="experience-date">{exp.date}</div>
                   <p className="experience-description">{exp.description}</p>
                 </div>
               ))}
             </div>
            
             <div className={`tab-content ${activeTab === 'skills' ? 'active' : ''}`}>
               <div className="skills-section">
                 {skillsCategories.map((category, index) => (
                   <div key={index} className="skills-category">
                     <div className="skills-category-title">{category.title}</div>
                     <div className="skills-list">
                       {category.skills.map((skill, idx) => (
                         <span key={idx} className="skill-item">{skill}</span>
                       ))}
                     </div>
                   </div>
                 ))}
               </div>
             </div>
            
             <div className={`tab-content ${activeTab === 'resume' ? 'active' : ''}`}>
               <p className="experience-description">
                 FOR A DETAILED LOOK AT MY PROFESSIONAL JOURNEY, PLEASE VIEW MY RESUME <a href="/media/MeganGao_CV.pdf" target="_blank" rel="noopener noreferrer" className="resume-link" style={{ fontWeight: 'bold', textDecoration: 'underline' }}>HERE</a>.
               </p>
             </div>
           </div>
         </section>
        
         {/* Projects Section - Redesigned with dynamic scrolling */}
         <section className="content-section projects-section">
           <h2 className="section-title">"WORKS"</h2>
          
           <div className="projects-container">
             {projects.map((project, index) => {
               const projectContent = (
                 <div
                   className="project-item-content-wrapper" // Added a wrapper for consistent styling if needed
                 >
                   <div className="project-image-container">
                     <img
                       src={project.thumbnail}
                       alt={project.title}
                       className="project-image"
                       onClick={(e) => {
                         e.stopPropagation();
                         openLightbox(project.image || project.thumbnail);
                       }}
                     />
                     <div className="project-overlay" onClick={(e) => {
                       e.stopPropagation();
                       if (!project.link) { // Only trigger modal if no link
                          handleProjectClick(project);
                       }
                       // If there's a link, the Link component will handle navigation
                     }}>
                       <span className="view-project">VIEW PROJECT</span>
                     </div>
                   </div>
                   <div className="project-info">
                     <div className="project-year">{project.year}</div>
                     <h3 className="project-title">"{project.title}"</h3>
                     <p className="project-description">{project.description}</p>
                     <div className="project-skills">
                       {project.skills.map((skill, idx) => (
                         <span key={idx} className="project-skill">{skill}</span>
                       ))}
                     </div>
                   </div>
                 </div>
               );


               if (project.link) {
                 return (
                   <Link
                     to={project.link}
                     key={project.id}
                     className="project-item scroll-reveal project-link" // Added project-link class
                     ref={el => projectRefs.current[index] = el}
                   >
                     {projectContent}
                   </Link>
                 );
               } else {
                 return (
                   <div
                     key={project.id}
                     className="project-item scroll-reveal"
                     ref={el => projectRefs.current[index] = el}
                     onClick={() => handleProjectClick(project)}
                   >
                     {projectContent}
                   </div>
                 );
               }
             })}
           </div>
          
           {/* Project Detail Modal */}
           {activeProject && (
             <div className="project-detail-modal elan-style-modal" data-project-id={activeProject.id}>
               <div className="project-detail-overlay" onClick={closeProjectDetail}></div>
               <div className="project-detail-content">
                 <button className="close-modal" onClick={closeProjectDetail}>×</button>
                
                 {/* Mimicking ElanProjectPage structure */}
                 <header className="project-header-modal">
                   <h1>{activeProject.title}</h1>
                   {activeProject.subtitle && <p className="project-subtitle-modal">{activeProject.subtitle}</p>}
                 </header>


                 {/* Display project image if available and not the 'elan' project */}
                 {activeProject.image && activeProject.id !== 'elanProject' && (
                   <div className="project-detail-main-image-container">
                     <img
                       src={activeProject.image}
                       alt={`${activeProject.title} main visual`}
                       className="project-detail-main-image"
                     />
                   </div>
                 )}

                 {activeProject.id === 'bucksHackathon' && (
                   <div className="pdf-carousel-container bucks-hackathon-carousel">
                   <Slider 
                       dots={true} 
                       infinite={false} 
                       speed={500} 
                       slidesToShow={1} 
                       slidesToScroll={1} 
                       arrows={true}
                       prevArrow={<CustomPrevArrow />}
                       nextArrow={<CustomNextArrow />}
                   >
                       {[...Array(16).keys()].map(index => (
                         <div key={index}>
                           <img 
                             src={`/media/slide${index + 1}.jpg`} 
                             alt={`Slide ${index + 1}`}
                             style={{
                               width: '100%',
                               height: 'auto',
                               objectFit: 'contain',
                               maxHeight: '500px'
                             }}
                           />
                         </div>
                       ))}
                   </Slider>
                   </div>
                 )}


{activeProject.video && activeProject.id !== 'bucksHackathon' && (
  <section 
    className="project-main-video-section-modal"
    style={activeProject.id === 'bucksHackathon' ? { 
      margin: '5px 0', 
      padding: '0',
      marginTop: '5px',
      marginBottom: '5px'
    } : {}}
  >
    <video 
      autoPlay 
      loop 
      muted 
      playsInline 
      className="project-video-showcase-modal" 
      src={activeProject.video.src || activeProject.video}
      style={activeProject.id === 'bucksHackathon' ? { 
        marginBottom: '5px' 
      } : {}}
    >
      Your browser does not support the video tag.
    </video>
    {activeProject.videoCaption && (
      <p 
        className="video-caption-modal"
        style={activeProject.id === 'bucksHackathon' ? { 
          marginTop: '5px', 
          marginBottom: '5px',
          paddingTop: '0px',
          paddingBottom: '0px'
        } : {}}
      >
        <em>{activeProject.videoCaption}</em>
      </p>
    )}
  </section>
)}

{activeProject.id === 'bucksHackathon' && activeProject.videoCaption && (
  <p 
    className="slideshow-caption" 
    style={{ 
      textAlign: 'center', 
      fontStyle: 'italic', 
      margin: '15px 0',
      fontSize: '0.9em',
      color: '#666'
    }}
  >
    <em>{activeProject.videoCaption}</em>
  </p>
)}


                 <div 
                   className="project-content-grid-modal"
                   style={activeProject.id === 'bucksHackathon' ? { 
                     marginTop: '0px', 
                     paddingTop: '0px',
                     transform: 'translateY(-20px)'
                   } : {}}
                 >
                   {activeProject.overview && (
                     <section className="project-overview-modal project-section-modal">
                       <h2>Overview</h2>
                       {activeProject.overview.split('\n\n').map((paragraph, i) => <p key={i}>{paragraph}</p>)}
                     </section>
                   )}


                   {activeProject.journeyText && (
                     <section className="project-journey-modal project-section-modal">
                       <h2>The Journey</h2>
                       {activeProject.journeyText.split('\n\n').map((paragraph, i) => <p key={i}>{paragraph}</p>)}
                       {activeProject.id === 'bucksHackathon' && (
                         <>
                          <h3 style={{ color: '#666', fontSize: '1.1em', marginTop: '30px', marginBottom: '15px', fontWeight: 'normal', textAlign: 'center', fontStyle: 'italic' }}>Related Links</h3>
                           <div className="journey-assets">
                             <a href="https://www.nba.com/bucks/hackathon" target="_blank" rel="noopener noreferrer">
                               <img src="/media/bucks_logo.jpg" alt="NBA Bucks Hackathon" className="journey-asset-image" />
                               <p>NBA Bucks Hackathon</p>
                             </a>
                             <a href="https://datascience.unc.edu/newspost/bucks-hackathon/" target="_blank" rel="noopener noreferrer">
                               <img src="/media/win.png" alt="Data Science UNC Bucks Hackathon" className="journey-asset-image" />
                               <p>Data Science UNC Bucks Hackathon</p>
                             </a>
                           </div>
                           <video controls width="95%" style={{ marginTop: '20px', maxWidth: '700px', display: 'block', margin: '20px auto' }}>
                             <source src="/media/bucks.mp4" type="video/mp4" />
                             Your browser does not support the video tag.
                           </video>
                         </>
                       )}
                     </section>
                   )}



                   {activeProject.journeyImages && activeProject.journeyImages.length > 0 && (
                     <div className="journey-images-grid-modal">
                       {activeProject.journeyImages.map((image, idx) => (
                         <div key={idx} className="journey-image-item-modal">
                           <img src={image.src} alt={image.caption || 'Journey image'} className="journey-image-modal" />
                           <p className="caption-modal">{image.caption}</p>
                         </div>
                       ))}
                     </div>
                   )}


                   {(activeProject.servicesList) && (
                     <section className="project-details-stacked-modal project-section-modal">
                       {activeProject.servicesList && activeProject.servicesList.length > 0 && (
                         <div className="column-modal">
                           <h3>SKILLS</h3>
                           <ul>
                             {activeProject.servicesList.map((item, index) => (
                               <li key={index}>{item}</li>
                             ))}
                           </ul>
                         </div>
                       )}
                     </section>
                   )}
                 </div>


                 {/* Renders image-based screens */}
                 {activeProject.screens && activeProject.screens.length > 0 && (
                   <section className="project-screens-modal">
                     <h2>Screens</h2>
                     <p className="screens-intro-modal">[Showcasing key moments]</p>
                     <div className="screens-grid-modal">
                       {activeProject.screens.map((screen, idx) => (
                         <div key={idx} className="screen-item-modal">
                           <div className="screen-media-container-modal">
                             <img src={screen.imageSrc} alt={screen.caption || 'Project screen'} className="screen-image-modal" />
                           </div>
                           <div className="screen-caption-container-modal">
                             <p>{screen.caption}</p>
                           </div>
                         </div>
                       ))}
                     </div>
                   </section>
                 )}


                 {/* Renders video-based screens */}
                 {activeProject.videos && activeProject.videos.length > 0 && (
                   <section className="project-screens-modal video-layout">
                     <h2>Screens</h2>
                     <p className="screens-intro-modal">[Showcasing key moments]</p>
                     <div className="screens-grid-modal">
                       {activeProject.videos.map((video, idx) => (
                         <div key={idx} className="screen-item-modal">
                           <div className="screen-media-container-modal">
                             <video src={video.videoSrc} alt={video.caption || 'Project video'} className="screen-video-modal" autoPlay loop muted playsInline />
                           </div>
                           <div className="screen-caption-container-modal">
                             <p>{video.caption}</p>
                           </div>
                         </div>
                       ))}
                     </div>
                   </section>
                 )}


                 {/* Links Section */}
                 {activeProject.links && Object.keys(activeProject.links).length > 0 && (
                   <section className="project-links-modal project-section-modal">
                     <h2>Links</h2>
                     <ul className="project-links-list">
                       {activeProject.links.finalWebsite && (
                         <li>
                           <a href={activeProject.links.finalWebsite} target="_blank" rel="noopener noreferrer">
                             Final Website
                           </a>
                         </li>
                       )}
                       {activeProject.links.githubRepo && (
                         <li>
                           <a href={activeProject.links.githubRepo} target="_blank" rel="noopener noreferrer">
                             GitHub Repository
                           </a>
                         </li>
                       )}
                       {activeProject.links.figmaDesign && (
                         <li>
                           <a href={activeProject.links.figmaDesign} target="_blank" rel="noopener noreferrer">
                             Figma Design & Research
                           </a>
                         </li>
                       )}
                     </ul>
                   </section>
                 )}


                 <footer className="project-information-modal">
                   {activeProject.clientInfo && (
                     <div className="info-section">
                       <h3 className="info-section-title">Information</h3>
                       <div className="info-details-grid">
                         <div className="info-item">
                           <span className="info-label">Client</span>
                           <span className="info-value">{activeProject.clientInfo}</span>
                         </div>
                         {activeProject.sectorInfo && (
                           <div className="info-item">
                             <span className="info-label">Sector</span>
                             <span className="info-value">{activeProject.sectorInfo}</span>
                           </div>
                         )}
                         {activeProject.year && (
                           <div className="info-item">
                             <span className="info-label">Year</span>
                             <span className="info-value">{activeProject.year}</span>
                           </div>
                         )}
                         {activeProject.services && (
                           <div className="info-item">
                             <span className="info-label">Services</span>
                             <span className="info-value">{Array.isArray(activeProject.services) ? activeProject.services.join(', ') : activeProject.services}</span>
                           </div>
                         )}
                         {/* Optional: Role and Duration, if you want to keep them here */}
                         {activeProject.role && (
                           <div className="info-item">
                             <span className="info-label">Role</span>
                             <span className="info-value">{activeProject.role}</span>
                           </div>
                         )}
                         {activeProject.duration && (
                           <div className="info-item">
                             <span className="info-label">Duration</span>
                             <span className="info-value">{activeProject.duration}</span>
                           </div>
                         )}
                       </div>
                     </div>
                   )}


                   {activeProject.creditsInfo && (
                     <div className="info-section">
                       <h3 className="info-section-title">Credits</h3>
                       <div className="info-details-grid credits-grid">
                         {Object.entries(activeProject.creditsInfo).map(([key, value]) => (
                           <div className="info-item" key={key}>
                             <span className="info-label">{key}</span>
                             <span className="info-value">{value}</span>
                           </div>
                         ))}
                       </div>
                     </div>
                   )}
                 </footer>


               </div>
             </div>
           )}


           {/* New: Simple Image Lightbox Modal */}
           {lightboxImage && (
             <div className="simple-lightbox-overlay" onClick={closeLightbox}>
               <div className="simple-lightbox-content" onClick={(e) => e.stopPropagation()}>
                 <button className="close-lightbox-button" onClick={closeLightbox}>&times;</button>
                 <img src={lightboxImage} alt="Enlarged view" className="simple-lightbox-image" />
               </div>
             </div>
           )}
         </section>


         {/* Contact Section */}
         <section className="content-section contact-section">
           <h2 className="section-title">"CONTACT"</h2>
           <div className="contact-container">
             <div className="contact-info">
               <div className="contact-method">
                 <div className="contact-label">EMAIL</div>
                 <div className="contact-value">m3gang4o@gmail.com</div>
               </div>
               
               <div className="contact-method">
                 <div className="contact-label">INSTAGRAM</div>
                 <div className="contact-value">
                   <a href="https://www.instagram.com/meganngao/" target="_blank" rel="noopener noreferrer" className="social-link">
                     @MEGANNGAO
                   </a>
                 </div>
               </div>
               <div className="contact-method">
                 <div className="contact-label">LINKEDIN</div>
                 <div className="contact-value">
                   <a href="https://www.linkedin.com/in/meganngao/" target="_blank" rel="noopener noreferrer" className="social-link">
                     MEGANNGAO
                   </a>
                 </div>
               </div>
             </div>
           </div>
         </section>
       </>
     )}
   </main>
 );
};


export default MainContent;
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Code,
  Share2,
  Briefcase,
  FolderKanban,
  User,
  ChevronDown,
  ExternalLink,
  X,
  Menu,
} from "lucide-react";

export default function Home() {
  const [openItem, setOpenItem] = useState<number | null>(0);
  const [activeSection, setActiveSection] = useState<string>("about");
  const [selectedQuest, setSelectedQuest] = useState<number | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  const experiences = [
  {
    company: "Yamaha Motor Canada",
    role: "Data Analyst",
    date: "Jan 2026 – Apr 2026",
    website: "https://www.yamaha-motor.ca",
    image:
      "https://files.pgaofcanada.com/f/files/ontario/employment/job-postings/yamaha-motor-canada-head-office/250610_indigoevents_0001.JPG;w=1140;h=760;mode=crop",
    desc: "Worked as a Data Analyst at Yamaha Motor Canada, building Power BI dashboards to track competitor market share, pricing trends, and financial performance across multiple product categories. Automated competitor MSRP data collection with Python web scraping, transformed unstructured datasets into analysis-ready reports, and supported month-end financial reporting using SAP and Excel.",
    skills: ["PowerBI", "Dashboards", "Python", "SAP ERP", "Web Scraping", "Excel", "Pandas", "DAX", "Financial Reporting", "Data Cleaning", "Selenium", "Process Automation"],
  },
  {
    company: "Ontario Ministry of the Attorney General",
    role: "Data Solutions Intern",
    date: "Apr 2025 – Aug 2025",
    website:
      "https://www.ontario.ca/page/ministry-attorney-general",
    image:
      "https://media.licdn.com/dms/image/v2/C4E1BAQGQvksrFfdKdw/company-background_1536_768/company-background_1536_768/0/1584180478524?e=2147483647&v=beta&t=ui0qJhSjwB9HC322wz246pf2C5rsl1_B9t6nz2E4CLM",
    desc: "Worked as a Data Solutions Intern with the Ontario Ministry of the Attorney General, building executive Power BI dashboards to improve asset visibility and reporting. Cleaned 10,000+ records using Jupyter Notebook, configured secure access roles in Power Apps, and automated reporting workflows with Power Query and DAX to significantly improve efficiency.",
    skills: ["PowerBI", "Data Analytics", "Dashboard Design", "Jupyter Notebooks", "Power Apps", "Data Cleaning", "DAX", "Access Control", "Excel"],
  },
  {
    company: "Ontario Ministry of the Attorney General",
    role: "IT Analyst",
    date: "Sept 2024 – Dec 2024",
    website:
      "https://www.ontario.ca/page/ministry-attorney-general",
    image:
      "https://play.vidyard.com/CjQHPCJYQuDYJ7AANzvckz.jpg",
    desc: "Worked as an IT Analyst with the Ontario Ministry of the Attorney General, providing technical support, managing enterprise systems, and maintaining IT asset records. Resolved 100+ support issues, performed secure server backups with full recovery success, updated device inventories using Azure and Intune, and automated admin workflows with PowerShell.",
    skills: ["IT Support", "Azure", "PowerShell", "Data Security", "Active Directory", "Intune", "System Administration", "Troubleshooting", "Data Backup", "BMC Remedy", "SharePoint"],
  },
];

  const projects = [
    {
      title: "Legal Sector Leasing Trends",
      date: "ASA DataFest",
      link: "https://github.com/sakshixgoel/data-fest-2025",
      image:
        "https://www.clvgroup.com/wp-content/uploads/1734370114508_CLV_Group__Real_estate_investing_-scaled.jpg",
      desc: "Conducted a data analytics research project on post-COVID commercial real estate trends in the legal sector, analyzing leasing activity, sublet availability, geographic demand, and economic correlations. Used Python and data visualization to uncover market recovery patterns and deliver actionable insights for investors, brokers, and urban planners.",
      skills: ["Python", "EDA", "Visualization", "Statistics", "Jupyter Notebooks", "Economic Trends", "Market Research", "Pandas", "Matplotlib"],
    },


    {
      title: "Federato RiskOps Optimization",
      date: "CxC Datathon · 3rd Place",
      link: "https://devpost.com/software/cxc-federato",
      image:
        "https://blog.herzing.ca/hubfs/data%20analytics.jpg",
      desc: "Developed a data-driven optimization strategy for Federato’s RiskOps platform focused on improving user engagement and retention. Used predictive modeling, graph analysis, and causal inference to identify friction points, forecast user behavior, and recommend real-time product improvements that enhance adoption and conversion.",
      skills: ["Streamlit", "Data Analytics", "Business Intelligence", "A/B Testing", "User Retention", "Python"],
    },

    {
      title: "Optimizing Toronto's Transportation Network",
      date: "Industry 4.0 Challenge",
      link: "https://devpost.com/software/optimizing-toronto-s-transportation-network",
      image:
        "https://cdn.ttc.ca/-/media/Project/TTC/DevProto/Images/Home/Riding-the-TTC/Explore-Toronto/1703001-TTC-Toronto-Stock-2017-0803.jpg?h=891&iar=0&w=1584&rev=9a439fc6961c486f8975bac3e4c524eb&hash=326CFCCDB03C2453A7E2068FEFA4E84A",
      desc: " A data-driven project that analyzes traffic and transit patterns to improve mobility, reduce congestion, and support more sustainable urban planning. Using real-world datasets and visualization tools, the project identifies bottlenecks and proposes actionable solutions like improved bus routes, traffic signal optimization, and expanded green transport options.",
      skills: ["Data Analytics", "Python", "Pandas", "NumPy", "Data Visualization", "Smart Cities", "Geospatial Insights"],
    },

    
    {
      title: "Commuter Buddy",
      date: "Hack404",
      link: "https://devpost.com/software/commuterbuddy",
      image:
        "https://edvoy-strapi-assets.s3.ap-south-1.amazonaws.com/large_live_article_how_to_make_the_most_of_your_time_at_university_as_a_commuter_student_0acc80a540",
      desc: "CommuterBuddy is a web app that connects university students with similar commute routes to make travel safer, more social, and less isolating. I contributed to Supabase integration, UX/UI design, and product strategy, helping build real-time chat functionality and a seamless route-based matching experience that turns daily commutes into opportunities for connection.",
      skills: ["Supabase", "UX/UI Design", "Web App", "Product Strategy", "Backend Integration"],
    },


    {
      title: "Cineplex Buddy Pass",
      date: "Cineplex Live Case Competition",
      link: "https://drive.google.com/file/d/10UhI_gktP3Ot0hGmA28Ac3DlbdYMoibz/view?usp=sharing",
      image:
        "https://static.where-e.com/Canada/Cineplex-Junxion_9e38042438e43b3fcf264b879b636510.jpg",
      desc: "Designed a digital referral strategy for Cineplex targeting Gen Z to increase theatre attendance by 25K+ monthly. The “Buddy Pass” leverages Scene+ rewards and dining partnerships to turn social movie nights into a bundled entertainment experience, driving engagement, loyalty, and new revenue streams.",
      skills: ["Product Strategy", "Revenue Growth", "Consulting", "UX / Customer Growth", "Marketing Innovation"],
    },


    {
      title: "Training Reimagined",
      date: "TD Product Management Case Competition",
      link: "https://drive.google.com/file/d/1eQpvV4jpZlGlctggsXW1_JFN1T2Ngs16/view?usp=sharing",
      image:
        "https://cdn.gobankingrates.com/wp-content/uploads/2020/04/TD-Bank-shutterstock_1091238983.jpg?w=1280&quality=75&webp=1",
      desc: "Training Reimagined focused on scaling employee training through VR simulations and data-driven coaching tools. Our team proposed branch-specific customer service scenarios paired with a progress-tracking app that delivers personalized feedback and manager insights. The solution aimed to improve employee confidence, emotional intelligence, and service quality while reducing training costs across branches.",
      skills: ["Figma", "Prototyping", "Product Strategy"],
    },



    {
      title: "Health Brief",
      date: "CTRL+HACK+DEL · Best Security Hack",
      link: "https://devpost.com/software/healthbrief",
      image:
        "https://www.recordnations.com/wp-content/uploads/2023/10/bigstock-Close-Up-Blank-Medical-Record-448416778-e1697645040714.webp",
      desc: "HealthBrief is a tool that simplifies complex medical documents into clear, actionable summaries for patients and healthcare professionals. It extracts key insights like diagnoses, medications, and next steps, making medical information easier to understand and act on. The project focuses on improving clarity, reducing miscommunication, and enabling faster, more informed healthcare decisions.",
      skills: ["Healthcare Tech", "AI Summarization", "React", "Data Privacy"],
    },



  {
      title: "Insure Vision",
      date: "QUANTIFY",
      link: "https://drive.google.com/file/d/1PbtuoT6-ckLxX-OW9eqmi3EVxvFIbK17/view?usp=sharing",
      image:
        "https://riskonnect.com/wp-content/uploads/2024/05/Blog-Image-AI-in-Insurance_-5-Areas-Ripe-for-Transformation.webp",
      desc: "My team designed InsureVision, a secure tool that uses predictive modeling, geospatial insights, and blockchain-based data protection to help actuaries assess customer risk more efficiently and accurately. The solution aimed to streamline rate assignment, strengthen data security, and support smarter decision-making in the life insurance industry.",
      skills: ["AI Strategy", "Blockchain", "Actuarial Science", "FinTech", "Data Security", "Business Strategy"],
    },



    {
      title: "Arcade Game",
      date: "Sheridan Game Making Contest",
      link: "https://github.com/sakshixgoel/Nightmares-at-the-Arcade-Game",
      image:
        "https://i.ytimg.com/vi/fk951IjN6to/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGD0gXihyMA8=&rs=AOn4CLC8jp_RlrCRDXFkaKXnQWJ9N7-vRg",
      desc: "Nightmares at the Arcade is a 3-level escape game built in p5.js for the Sheridan Game Making Contest. Players navigate through a surreal, horror-themed arcade, solving puzzles and escaping each level while uncovering an eerie storyline. The game features fully original visuals and was developed as a collaborative team project focused on creativity, interactive storytelling, and game design.",
      skills: ["Game Development", "p5.js", "JavaScript", "UX"],
    }





  ];

  const quests = [
    {
   
      image: "/quests/Mississauga_Hike.jpg",
      location: "Mississauga, Ontario",
      date: "April 2026",
    },
    {
    
      image: "/quests/Niagara.jpg",
      location: "Niagara Falls, ON",
      date: "April 2026",
    },
    {
    
      image: "/quests/Niagara2.jpg",
      location: "Niagara Falls, NY",
      date: "April 2026",
    },
    {
     
      image: "/quests/Lawrence.jpg",
      location: "St. Lawrence Market, Toronto",
      date: "February 2026",
    },
    {
    
      image: "/quests/toronto.jpg",
      location: "Toronto, ON",
      date: "February 2026",
    },
    {
   
      image: "/quests/boat show.jpg",
      location: "Toronto Boat Show - Exhibition Place",
      date: "January 2026",
    },
    {
   
      image: "/quests/roorkee.jpg",
      location: "Roorkee, Uttarakhand",
      date: "January 2026",
    },
    {
   
      image: "/quests/roorkee2.jpg",
      location: "Roorkee, Uttarakhand",
      date: "December 2025",
    },
    {
      
      image: "/quests/monkey.jpg",
      location: "Ayodhya, Uttar Pradesh",
      date: "December 2025",
    },
    {
     
      image: "/quests/ayodhya.jpg",
      location: "Ayodhya, Uttar Pradesh",
      date: "December 2025",
    },

    {
   
      image: "/quests/cow.jpg",
      location: "Ayodhya, Uttar Pradesh",
      date: "December 2025",
    },
    {
      
      image: "/quests/ayodhya2.jpg",
      location: "Ayodhya, Uttar Pradesh",
      date: "December 2025",
    },
    {
     
      image: "/quests/rishikesh5.jpg",
      location: "Rishikesh, Uttarakhand",
      date: "December 2025",
    },
     {
   
      image: "/quests/rishikesh2.jpg",
      location: "Rishikesh, Uttarakhand",
      date: "December 2025",
    },
    {
      
      image: "/quests/cow2.jpg",
      location: "Rishikesh, Uttarakhand",
      date: "December 2025",
    },
    {
     
      image: "/quests/rishikesh3.jpg",
      location: "Rishikesh, Uttarakhand",
      date: "December 2025",
    },
     {
     
      image: "/quests/rishikesh6.jpg",
      location: "Rishikesh, Uttarakhand",
      date: "December 2025",
    },

    {
      
      image: "/quests/oktober fest.jpg",
      location: "Kitchener, Ontario - Oktoberfest",
      date: "October 2025",
    },
    {
     
      image: "/quests/laurier.jpg",
      location: "Wilfrid Laurier University, Waterloo",
      date: "October 2025",
    },
     {
     
      image: "/quests/carnival.jpg",
      location: "University of Waterloo Carnival",
      date: "September 2025",
    },
    {
     
      image: "/quests/cne.jpg",
      location: "Canadian National Exhibition, Toronto",
      date: "August 2025",
    },
    {
     
      image: "/quests/cne2.jpg",
      location: "Canadian National Exhibition, Toronto",
      date: "August 2025",
    },
    {
     
      image: "/quests/camping.jpg",
      location: "Pinery Provincial Park, Ontario",
      date: "August 2025",
    },
     {
     
      image: "/quests/camping2.jpg",
      location: "Pinery Provincial Park, Ontario",
      date: "August 2025",
    },
     {
     
      image: "/quests/elora.jpg",
      location: "Elora, Ontario",
      date: "August 2025",
    },
     {
     
      image: "/quests/erie.jpg",
      location: "Lake Eria Pennsylvania",
      date: "July 2025",
    },
    {
     
      image: "/quests/ago.jpg",
      location: "Art Gallery of Ontario, Toronto",
      date: "May 2025",
    },
    {
     
      image: "/quests/ottawa.jpg",
      location: "Ottawa Tulip Festival",
      date: "May 2025",
    },
    {
     
      image: "/quests/toronto3.jpg",
      location: "Nathan Phillips Square, Toronto",
      date: "December 2024",
    },
     {
     
      image: "/quests/cozumel.jpg",
      location: "Cozumel, Mexico",
      date: "December 2023"
    },
    {
     
      image: "/quests/cozumel2.jpg",
      location: "Cozumel, Mexico",
      date: "December 2023"
    },
     {
     
      image: "/quests/roatan.jpg",
      location: "Roatan, Honduras",
      date: "December 2023"
    },
     {
     
      image: "/quests/roatan2.jpg",
      location: "Roatan, Honduras",
      date: "December 2023"
    },
     {
     
      image: "/quests/roatan3.jpg",
      location: "Roatan, Honduras",
      date: "December 2023"
    },





  ]

  // Smooth scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "sidequests", "contact"];
      const scrollPosition = window.scrollY + 150;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white text-purple-800 flex font-sans">
      {/* Sidebar */}
      <AnimatePresence mode="wait">
        {sidebarOpen && (
          <motion.aside
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-72 border-r border-purple-300/40 p-6 hidden md:flex flex-col sticky top-0 h-screen bg-gradient-to-b from-purple-100 to-purple-50 backdrop-blur-sm overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-8">
              <motion.h1 
                className="text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Sakshi Goel
              </motion.h1>
              <motion.button
                onClick={() => setSidebarOpen(false)}
                className="text-purple-600 hover:text-purple-800 transition-colors p-1"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X size={24} />
              </motion.button>
            </div>

            <nav className="space-y-3 text-purple-600 text-[15px]">
              {[
                { href: "about", label: "About", icon: User, color: "cyan" },
                { href: "experience", label: "Experience", icon: Briefcase, color: "blue" },
                { href: "projects", label: "Projects", icon: FolderKanban, color: "purple" },
                { href: "sidequests", label: "Side Quests", icon: FolderKanban, color: "purple" },
                { href: "contact", label: "Contact", icon: Mail, color: "pink" },
              ].map((item) => {
                const isActive = activeSection === item.href;
                const colorMap: { [key: string]: { text: string; bg: string; border: string } } = {
                  cyan: { text: "cyan-700", bg: "cyan-200/50", border: "cyan-400/50" },
                  blue: { text: "blue-700", bg: "blue-200/50", border: "blue-400/50" },
                  purple: { text: "purple-700", bg: "purple-300/50", border: "purple-500/50" },
                  green: { text: "green-700", bg: "green-200/50", border: "green-400/50" },
                  pink: { text: "pink-700", bg: "pink-200/50", border: "pink-400/50" },
                };
                const colors = colorMap[item.color];
                const Icon = item.icon;

                return (
                  <motion.button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`flex gap-3 transition-all duration-300 px-3 py-2 rounded-lg w-full text-left ${
                      isActive
                        ? `text-${colors.text} bg-${colors.bg} border border-${colors.border} translate-x-2`
                        : `hover:text-${colors.text} hover:translate-x-1`
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    <Icon size={18} className="flex-shrink-0" /> {item.label}
                  </motion.button>
                );
              })}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Mobile Menu Toggle when sidebar is open */}
      {sidebarOpen && (
        <motion.button
          onClick={() => setSidebarOpen(false)}
          className="fixed top-4 left-4 md:hidden z-40 p-2 rounded-lg bg-purple-200 text-purple-700 hover:bg-purple-300 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <X size={20} />
        </motion.button>
      )}

      {/* Menu Button when Sidebar is Closed */}
      {!sidebarOpen && (
        <motion.button
          onClick={() => setSidebarOpen(true)}
          className="fixed bottom-8 right-8 md:hidden z-40 p-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Menu size={24} />
        </motion.button>
      )}

      {/* Main */}
      <section className="flex-1 max-w-4xl mx-auto p-8 md:p-16 space-y-24">
        {/* About Section */}
        <section id="about" className="scroll-mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6 pt-8"
          >
            <motion.img
              src="/profile.jpg"
              alt="Sakshi"
              className="w-36 h-36 rounded-full object-cover shadow-lg border-2 border-purple-300"
              whileHover={{ scale: 1.08, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <h3 className="text-4xl font-bold tracking-tight mb-2 text-purple-900">Sakshi Goel</h3>
            <p className="text-lg text-purple-700 max-w-2xl leading-8 mb-4 text-center">
              <a
                href="https://uwaterloo.ca/math/about"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-purple-600 hover:text-purple-800 transition"
              >
                Mathematics
              </a>{" "}
              & Business + CS Minor @ University of Waterloo
            </p>
            <div className="flex gap-4">
              <motion.a
                href="mailto:sakshi.goel@uwaterloo.ca"
                className="text-purple-600 hover:text-purple-800 transition-colors p-2 rounded-full border border-purple-200 hover:border-purple-400"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={22} />
              </motion.a>
              <motion.a
                href="https://github.com/sakshixgoel"
                target="_blank"
                className="text-purple-600 hover:text-purple-800 transition-colors p-2 rounded-full border border-purple-200 hover:border-purple-400"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <Code size={22} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/sakshigoel1"
                target="_blank"
                className="text-purple-600 hover:text-purple-800 transition-colors p-2 rounded-full border border-purple-200 hover:border-purple-400"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <Share2 size={22} />
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</h2>

          <div className="space-y-2">
            {experiences.map((item, i) => (
              <motion.div
                key={i}
                className="border border-blue-300/60 rounded-xl pb-0 cursor-pointer bg-gradient-to-br from-blue-100/50 to-purple-100/50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 overflow-hidden"
                onClick={() => setOpenItem(openItem === i ? null : i)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between items-center py-4 px-5 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 transition-all">
                  <p className="font-semibold text-purple-800">{item.company} · {item.role}</p>

                  <div className="flex items-center gap-4 text-sm text-purple-600">
                    <span>{item.date}</span>
                    <motion.div
                      animate={{ rotate: openItem === i ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </div>
                </div>

                <AnimatePresence>
                  {openItem === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden pb-5 px-5"
                    >
                      <motion.img
                        src={item.image}
                        className="rounded-lg mb-4 h-52 w-full object-cover border border-blue-300 shadow-lg"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                      />

                      <p className="text-purple-700 mb-4 leading-relaxed">{item.desc}</p>

                      <motion.a
                        href={item.website}
                        target="_blank"
                        className="inline-flex items-center gap-2 text-sm mb-4 text-blue-600 hover:text-blue-700 transition-colors px-3 py-1 rounded-lg hover:bg-blue-200/50"
                        whileHover={{ x: 5 }}
                      >
                        Visit Company <ExternalLink size={15} />
                      </motion.a>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.skills.map((skill, idx) => (
                          <motion.span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-200/60 to-purple-200/60 text-blue-700 border border-blue-400/50"
                            whileHover={{ scale: 1.1, y: -2 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</h2>

          <div className="space-y-2">
            {projects.map((item, i) => (
              <motion.details key={i} className="border border-purple-300/60 rounded-xl pb-0 bg-gradient-to-br from-purple-100/50 to-pink-100/50 hover:from-purple-100 hover:to-pink-100 transition-all duration-300 overflow-hidden" whileHover={{ scale: 1.02 }}>
                <motion.summary className="list-none flex justify-between py-4 px-5 cursor-pointer font-semibold text-purple-800 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 transition-all">
                  <span>{item.title}</span>
                  <span className="text-sm text-purple-600">{item.date}</span>
                </motion.summary>

                <div className="pb-5 px-5">
                  <motion.img
                    src={item.image}
                    className="rounded-lg mb-4 h-52 w-full object-cover border border-purple-300 shadow-lg"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                  />

                  <p className="text-purple-700 mb-4 leading-relaxed">{item.desc}</p>

                  <motion.a
                    href={item.link}
                    className="inline-flex items-center gap-2 text-sm mb-4 text-purple-600 hover:text-purple-700 transition-colors px-3 py-1 rounded-lg hover:bg-purple-200/50"
                    whileHover={{ x: 5 }}
                  >
                    View Project <ExternalLink size={15} />
                  </motion.a>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.skills.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-purple-200/60 to-pink-200/60 text-purple-700 border border-purple-400/50"
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.details>
            ))}
          </div>
        </section>

        {/* Side Quests */}
        <section id="sidequests" className="scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Side Quests</h2>

          <div className="w-full p-2">
            <div className="grid grid-cols-8 sm:grid-cols-10 md:grid-cols-12 gap-2">
              {quests.map((item, i) => (
                <motion.button
                  key={i}
                  onClick={() => setSelectedQuest(i)}
                  className="group relative aspect-square overflow-hidden rounded-lg border border-purple-200 hover:border-purple-400 transition-all"
                  whileHover={{ scale: 1.05 }}
                  style={{ width: 48, height: 48 }}
                >
                  <img
                    src={item.image}
                    alt={item.location}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition" />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Quest Popup */}
          <AnimatePresence>
            {selectedQuest !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedQuest(null)}
                className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4"
              >
                <motion.div
                  initial={{ scale: 0.88, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.88, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onClick={(e) => e.stopPropagation()}
                  className="max-w-xs w-full bg-white rounded-3xl overflow-hidden border border-purple-200 shadow-2xl"
                >
                  <img
                    src={quests[selectedQuest].image}
                    className="w-full max-h-64 object-cover"
                    alt={quests[selectedQuest].location}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-purple-900 mb-2">
                      {quests[selectedQuest].location}
                    </h3>
                    <p className="text-purple-700 mb-1">
                      📍 {quests[selectedQuest].location}
                    </p>
                    <p className="text-purple-600 mb-4">
                      🗓 {quests[selectedQuest].date}
                    </p>
                    <motion.button
                      onClick={() => setSelectedQuest(null)}
                      className="px-5 py-2 rounded-xl bg-purple-500 hover:bg-purple-600 text-white transition font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Close
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Contact</h2>

          <motion.p 
            className="text-purple-700 text-lg"
            whileHover={{ scale: 1.02 }}
          >
            sakshi.goel@uwaterloo.ca
          </motion.p>
        </section>

        {/* Resume Button at the very bottom */}
        <div className="flex justify-center pt-8 pb-4">
          <motion.a
            href="https://drive.google.com/file/d/1RqtgOdCYAJbXfjALHkyTZZTAY2DqdlmO/view?usp=sharing"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition font-bold shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={18} />
            Download Resume
          </motion.a>
        </div>
      </section>
    </main>
  );
}
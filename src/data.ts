import { Database, Layout, Smartphone } from "lucide-react";

export const portfolioData = {
  hero: {
    name: "Alok Nawani",
    role: "",
    roleHighlight: "Full Stack Developer | Problem Solver | AI Enthusiast",
    tagline: "Best Portfolio Ever",
    quote: '"The best way to predict the future is to create it."',
    resumeLink: "/resume_new.pdf"
  },
  
  about: {
    title: "ABOUT ME",
    description: "I’m Alok Nawani, a B.Tech student and passionate full stack developer focused on building intelligent and scalable web applications. I specialize in combining modern web technologies with AI-driven solutions to create impactful digital experiences.\n\nMy approach blends problem-solving, clean design, and performance optimization.\n\nI’m continuously exploring new technologies and striving to build solutions that solve real-world problems while delivering seamless user experiences.",
    stats: [
      { label: "Projects", value: "10+" },
      { label: "Certificates", value: "5+" }
    ]
  },

  services: [
    {
      title: "FRONTEND DEVELOPMENT",
      description: "Building responsive and high-performance user interfaces using modern web technologies. Focused on clean design, usability, and smooth user interactions.",
      icon: Layout,
    },
    {
      title: "BACKEND MASTERY",
      description: "Developing backend logic and APIs to support dynamic applications. Focused on writing efficient, maintainable code and understanding scalable system design.",
      icon: Database,
    },
    {
      title: "UI/UX DESIGN",
      description: "Designing intuitive and visually appealing interfaces with a strong focus on user experience, accessibility, and modern design principles.",
      icon: Smartphone,
    }
  ],

  experience: [
    {
      role: "B.Tech Student",
      company: "Graphic Era Hill University",
      website: "https://gehu.ac.in/",
      description: "Currently pursuing B.Tech in CSE. Developing strong foundation in programming, web development, and digital design."
    },
    {
      role: "Schooling",
      company: "The Himalayan Public School",
      website: "https://thehimalayanpublicschool.com/",
      description: "Cultivated a curiosity for technology and creativity. Led student initiatives, coordinated teams, and developed leadership communication."
    }
  ],

  projects: [
    {
      id: "01",
      title: "Vox AI",
      tech: "PYTHON, AI, SPEECH RECOGNITION",
      description: "Built a Jarvis-like AI assistant capable of real-time voice interaction using speech-to-text and text-to-speech technologies. Integrated LLM APIs for intelligent responses along with hotword detection (“Hey Vox”) for seamless activation.",
      image: "assets/images/vox-ai.png"
    },
    {
      id: "02",
      title: "Wardrobe Circle",
      tech: "WEB, AI, JAVASCRIPT",
      description: "Developed an AI-powered outfit recommendation system that suggests clothing based on user preferences, weather conditions, and occasions. Focused on personalization and decision-making using smart logic. Designed a clean UI for a smooth experience.",
      image: "assets/images/wardrobe-circle.png"
    },
    {
      id: "03",
      title: "Selectra AI",
      tech: "JAVASCRIPT, API, WEB",
      description: "Built an AI-powered quiz and assessment platform designed to help students prepare for technical interviews. Generates adaptive multiple-choice questions using AI APIs with difficulty-based progression and instant feedback.",
      image: "assets/images/selectra-ai.png"
    },
    {
      id: "04",
      title: "Alok Portfolio",
      tech: "HTML, CSS, JAVASCRIPT, UI/UX",
      description: "Designed and developed a modern animated portfolio featuring dark mode, smooth transitions, and interactive components. Integrated particle effects and responsive layouts for a visually engaging experience.",
      image: "assets/images/alok-portfolio.png"
    },
    {
      id: "05",
      title: "SpeechCraft",
      tech: "PYTHON, AI/ML",
      description: "Built a speech processing system enabling accurate text-to-speech and speech-to-text conversion. Optimized algorithms for better recognition and synthesis performance. Supports multiple languages.",
      image: "assets/images/speechcraft.png"
    },
    {
      id: "06",
      title: "SecureLite",
      tech: "PYTHON, SECURITY",
      description: "Developed a collection of security tools including password strength analyzer, encryption utilities, and basic vulnerability testing scripts. Focused on understanding real-world cybersecurity concepts.",
      image: "assets/images/securelite.png"
    },
    {
      id: "07",
      title: "RunX",
      tech: "GAME DEV, JAVASCRIPT / UNITY",
      description: "Built a Temple Run–inspired endless runner game featuring smooth animations, obstacles, and scoring system. Focused on gameplay mechanics and immersive user experience with dynamic environments.",
      image: "assets/images/runx.png"
    },
    {
      id: "08",
      title: "MediSmart",
      tech: "WEB, AI, DASHBOARDS",
      description: "Designed a smart healthcare system with features like hospital bed management, patient booking, and fraud detection. Includes interactive dashboards for admins and analytics insights.",
      image: "assets/images/medismart.png"
    },
    {
      id: "09",
      title: "DineFlow",
      tech: "JAVA, DBMS, WEB",
      description: "Developed a complete restaurant management system to handle orders, billing, and table management efficiently. Designed a structured database for storing customer and transaction data.",
      image: "assets/images/dineflow.png"
    },
    {
      id: "10",
      title: "RouteOptima",
      tech: "ALGORITHMS, GRAPH THEORY, PYTHON",
      description: "Built an intelligent system to find the most efficient delivery routes using graph algorithms like Dijkstra. Optimized travel time and cost for multiple delivery points. Designed for logistics simulation.",
      image: "assets/images/routeoptima.png"
    }
  ],
  
  skills: [
    { title: "Programming", description: "Mastering the syntax and logic of C, C++, Java, and Python to build robust, scalable systems." },
    { title: "Web Development", description: "Crafting immersive, high-performance web experiences with modern frameworks and pixel-perfect design." },
    { title: "DSA & Problem Solving", description: "Architecting efficient algorithms and tackling complex challenges with a mathematical mindset." },
    { title: "Tools", description: "Leveraging industry-standard tools like Git and Postman for streamlined version control and API mastery." },
    { title: "AI & Automation", description: "Pioneering the future by integrating intelligent AI solutions and automated workflows into everyday tech." },
    { title: "UI/UX Design", description: "Designing aesthetically refined, user-centric interfaces that blend form and function seamlessly." }
  ],

  interests: [
    { title: "Soft Skills", description: "Cultivating leadership, emotional intelligence, and clear communication to lead teams to success." },
    { title: "Sports (Cricket & Football)", description: "Fueling team spirit and tactical discipline through the competitive energy of cricket and football." },
    { title: "Music (Piano/Guitar)", description: "Translating creativity into melody, finding harmony in the strings of a guitar and the keys of a piano." },
    { title: "Photography", description: "Capturing visual stories and freezing moments in time through a cinematic lens." },
    { title: "Gaming", description: "Exploring immersive worlds to understand the future of interactive storytelling and game mechanics." }
  ],

  certificates: [
    { title: "AWS Cloud Practitioner Essentials", img: "assets/images/cert2.jpg", desc: "Completed the course with full attention and gained knowledge." },
    { title: "Certificate in Java Programming", img: "assets/images/cert4.jpg", desc: "Comprehensive course on Java programming with hands-on experience." },
    {
      title: "RBI@90 Nationwide Quiz",
      desc: "Certificate of Participation representing Graphic Era Hill University in the RBI@90 Nationwide Online Quiz 2024.",
      img: "rbi_participation.jpg"
    },
    { title: "Certificate in Cyber Security", img: "assets/images/cert5.jpg", desc: "Gained knowledge in protecting systems and networks." },
    { title: "Credly Badge", img: "assets/images/cert1.jpg", desc: "Verified digital credential showcasing my achievements." }
  ],

  activities: [
    {
        id: "profileSheet",
        title: "Profile Sheet",
        desc: "Details about my profile sheet, showcasing my achievements, career objective to seamlessly merge creativity with technology, and personal details. I am absolutely passionate about web development and UI/UX design. I love the process of transforming ideas into interactive digital products.",
        video: ""
    },
    {
        id: "classPresentation",
        title: "Class Presentation",
        desc: "Conceptualized and designed a new wellness brand called Healthify, focused on promoting natural health solutions.",
        details: [
          { label: "Topic", text: "Creation of a Startup Company — Healthify" },
          { label: "Concept", text: "For my presentation, I conceptualized and designed a new wellness brand called Healthify, focused on promoting natural health solutions. Our flagship product, Aloe Glow, is crafted from 100% pure aloe vera to ensure authentic, chemical-free skincare and wellness benefits." },
          { label: "Key Points", text: "Company Vision: Redefine everyday wellness with natural aloe-based products. Product Line: Launching with Aloe Glow gel followed by health supplements. Market Research: Identified high demand for organic personal care. Business Strategy: Eco-friendly packaging and transparent sourcing." },
          { label: "Outcome", text: "Enhanced entrepreneurial thinking, creative branding, and business presentation abilities. Strengthened public speaking and market analysis skills." }
        ],
        video: "/assets/videos/class-presentation.mp4",
        link: "/assets/presentations/class-presentation.pdf"
    },
    {
        id: "movieReview",
        title: "Movie Review",
        desc: "Review of The Shawshank Redemption. Even under the most oppressive circumstances, human spirit and hope can triumph.",
        details: [
          { label: "Movie", text: "The Shawshank Redemption" },
          { label: "Review", text: "The Shawshank Redemption is a masterpiece that goes beyond being just a prison-break movie; it is a profound study of human spirit, endurance, and freedom. The storytelling is subtle yet powerful, and every scene, every character, carries layers of meaning. Andy's quiet determination, Red’s transformation from a man of despair to one of belief, and the exploration of institutionalization in prison life are portrayed brilliantly. Personally, I was most impacted by how the movie treats the passage of time — how patience, silent perseverance, and faith can slowly carve paths through seemingly immovable barriers." },
          { label: "Takeaway", text: "Hope is not naive — it is a discipline, a powerful tool for survival and growth. No matter how difficult the situation, consistent efforts combined with inner belief can eventually lead to success. It teaches that true freedom is often a mental state — that maintaining hope keeps our spirit unbroken. Andy's journey shows that quiet, focused action can change one’s destiny." }
        ],
        videos: [
          "/assets/videos/VIDEO-2025-04-28-21-32-00.mp4",
          "/assets/videos/VIDEO-2025-04-28-21-35-00.mp4"
        ]
    },
    {
        id: "groupDiscussion",
        title: "Group Discussion",
        desc: "Topic: Hard Work vs Smart Work. Advocated strongly in favor of Hard Work, emphasizing consistent effort and perseverance.",
        details: [
          { label: "Topic", text: "Hard Work vs Smart Work" },
          { label: "Concept", text: "In the group discussion, I advocated strongly in favor of Hard Work over Smart Work, emphasizing that consistent effort, perseverance, and dedication are irreplaceable ingredients in achieving long-term success." },
          { label: "Key Points", text: "\"Success comes before work only in the dictionary.\"" },
          { label: "Importance of Foundation", text: "I argued that while smart strategies can optimize processes, they are only effective when backed by hard work, solid skills, and continuous effort." },
          { label: "Sustainability", text: "Hard work builds resilience, discipline, and deeper understanding, making success more sustainable in the long run." },
          { label: "Real-World Examples", text: "I cited real-life personalities such as Dr. A.P.J. Abdul Kalam and Sachin Tendulkar, who achieved greatness primarily through relentless hard work and perseverance." },
          { label: "Balanced View", text: "I acknowledged that smart work complements hard work, but stressed that without sincere effort, even the smartest plans would fail to deliver results." },
          { label: "Handling Counterarguments", text: "During the discussion, I listened carefully to opposing views and responded thoughtfully, maintaining respect while firmly defending my perspective." },
          { label: "Outcome", text: "Participating in this group discussion significantly improved my communication, active listening, and critical thinking skills. It also enhanced my ability to construct logical arguments under pressure and strengthened my confidence in public speaking settings." }
        ],
        video: "/assets/videos/VIDEO-2025-04-28-21-32-00.mp4" // Fallback or first video
    }
  ],

  socialLinks: {
    github: "https://github.com/Alok-Nawani",
    linkedin: "https://www.linkedin.com/in/alok-nawani-3957b6357/",
    email: "mailto:aloknawani23@gmail.com",
    leetcode: "https://leetcode.com/u/ALOK_NAWANI/",
    codechef: "https://www.codechef.com/users/aloknawani",
    instagram: "https://instagram.com/im_alok23"
  },

  profileSheetQA: [
    {
      "id": "q0",
      "question": "1. What's your career objective?",
      "answer": "My career objective is to seamlessly merge creativity with technology by pursuing a career in web development and digital design. I aim to craft innovative, engaging, and user-centric digital experiences that not only solve real-world problems but also inspire and connect users through design and functionality. I aspire to continuously learn, evolve, and contribute meaningfully to the digital space while pushing the boundaries of user experience.",
      "vimeoSrc": "https://player.vimeo.com/video/1081210514?h=3b193e34aa"
    },
    {
      "id": "q1",
      "question": "2. Why do you want to be an animator or designer? Elaborate reason.",
      "answer": "I want to be a designer because it allows me to blend my creativity with technical skills to create experiences that are both functional and visually captivating. Growing up surrounded by the natural beauty of Jammu and Kashmir, I developed an appreciation for aesthetics, balance, and storytelling. Design enables me to express ideas, solve problems creatively, and craft intuitive interfaces that make a real difference in users' lives. It’s not just about making things look good; it's about creating meaningful, immersive journeys.",
      "vimeoSrc": "https://player.vimeo.com/video/1081235373?h=a0be94b5c0"
    },
    {
      "id": "q2",
      "question": "3. Write about projects or internships you have done/are doing along with the learning.",
      "answer": "Text-to-Speech & Speech-to-Text for Indian Languages (Python): Developed a multilingual TTS-STT platform, enhancing my skills in Python programming, machine learning algorithms, and Indian language processing. Learning: Improved my problem-solving abilities, understanding of speech recognition systems, and optimization techniques. E-Portfolio Website (HTML, CSS, JavaScript): Designed and developed a personal portfolio inspired by Spotify's modern aesthetic, focusing on clean design, animations, and responsiveness. Learning: Strengthened my front-end development skills and learned about UI/UX best practices. Agriculture Quiz & Job Learning Platform (Gemini API Integration): Created an educational platform featuring quizzes and career guidance for agriculture, leveraging AI integration. Learning: Gained experience in API integration, real-time data handling, and educational content creation.",
      "vimeoSrc": "https://player.vimeo.com/video/1081235591?h=1039c182c6"
    },
    {
      "id": "q3",
      "question": "4. What would you consider a significant achievement in your life and why?",
      "answer": "A significant achievement for me was leading my school as the School Captain, a role that required leadership, responsibility, and teamwork. It was a proud moment because it validated my ability to inspire peers, coordinate teams, and manage responsibilities effectively — qualities that continue to guide my academic and professional pursuits.",
      "vimeoSrc": "https://player.vimeo.com/video/1081235641?h=51fceaff16"
    },
    {
      "id": "q4",
      "question": "5. Write about a failure of yours which you consider to share. What have you learned from it?",
      "answer": "During an early group project in college, I underestimated the importance of time management and task delegation, leading to last-minute work and a rushed submission. Learning: I realized the critical importance of planning, communication, and early preparation in teamwork, which has significantly improved my project management skills since then.",
      "vimeoSrc": "https://player.vimeo.com/video/1081235476?h=a09340bc0b"
    },
    {
      "id": "q5",
      "question": "6. What are your strengths? Write one or two instances where you have demonstrated your strengths.",
      "answer": "Strengths: Creativity, Attention to Detail, Leadership, Communication Skills. Instances: As a Dance Leader, I designed and coordinated complex choreography for school performances, demonstrating creativity and leadership under pressure. In my E-Portfolio Website project, my perfectionist mindset ensured a polished, user-friendly design that stood out among peers.",
      "vimeoSrc": "https://player.vimeo.com/video/1081235657?h=3652fcb125"
    },
    {
      "id": "q6",
      "question": "7. Write about your weaknesses. What are you doing to overcome your weaknesses?",
      "answer": "Weakness: Sometimes, I tend to be overly self-critical, spending extra time refining details. Overcoming it: I have started setting clear timelines for each task and practicing \"progress over perfection\" — balancing high standards with efficiency to avoid unnecessary delays.",
      "vimeoSrc": "https://player.vimeo.com/video/1081235693?h=f3b5e8fa75"
    },
    {
      "id": "q7",
      "question": "8. What is the most difficult moment that you have faced in your life so far? What qualities helped you to overcome the moment?",
      "answer": "The transition from high school to university life was challenging — adapting to a new academic environment, city, and expectations. Qualities that helped: Resilience, adaptability, and my passion for learning allowed me to stay motivated, make new friends, and quickly adjust to the new phase of life.",
      "vimeoSrc": "https://player.vimeo.com/video/1081235401?h=5f4e022433"
    },
    {
      "id": "q8",
      "question": "9. Apart from academics, what else are you interested in?",
      "answer": "Extracurricular Activities: Photography (capturing nature, events, and candid moments), Playing Piano and Guitar (musical expression). Sports: Cricket, Football. Other Interests: Gaming (immersive storytelling, strategy games), UI/UX Designing and exploring new trends in web development.",
      "vimeoSrc": "https://player.vimeo.com/video/1081235463?h=28dbd3cb40"
    },
    {
      "id": "q9",
      "question": "10. Give an example of an area, concept, or thing that you are absolutely passionate about.",
      "answer": "I am absolutely passionate about web development and UI/UX design. I love the process of transforming ideas into interactive digital products that are visually stunning and user-centric. The intersection of creativity and technology fascinates me, and I find deep satisfaction in crafting experiences that engage and delight users.",
      "vimeoSrc": "https://player.vimeo.com/video/1081235569?h=c82e2967c2"
    },
    {
      "id": "q10",
      "question": "11. Describe yourself as an individual in 5 lines.",
      "answer": "I am a creative and detail-oriented individual who thrives on innovation and challenges. I believe in continuous growth, learning, and striving for excellence in everything I do. With a passion for design and technology, I aim to create meaningful digital experiences. I value collaboration, leadership, and clear communication. Resilience and adaptability define my journey, both personally and professionally.",
      "vimeoSrc": "https://player.vimeo.com/video/1081235627?h=a464541d57"
    },
    {
      "id": "q11",
      "question": "12. What kinds of people do you enjoy working with?",
      "answer": "I enjoy working with individuals who are creative, collaborative, open-minded, and passionate about what they do. People who are willing to share ideas, communicate openly, and work towards common goals inspire me and enhance the overall team synergy.",
      "vimeoSrc": "https://player.vimeo.com/video/1081235446?h=444b3001eb"
    },
    {
      "id": "q12",
      "question": "13. What kind of people you don't want to work with? What would you do if they became your senior in your dream job?",
      "answer": "I find it challenging to work with individuals who are closed-minded, uncooperative, or resistant to new ideas. If such a person became my senior, I would maintain professionalism, focus on mutual goals, adapt respectfully to their leadership style, and find constructive ways to communicate ideas to ensure a positive working relationship.",
      "vimeoSrc": "https://player.vimeo.com/video/1081235430?h=081f7c97fa"
    },
    {
      "id": "q13",
      "question": "14. What do you expect from your first job? Prioritize and write in order.",
      "answer": "1. Learning and skill development opportunities. 2. Exposure to real-world projects and challenges. 3. Supportive and growth-oriented work culture. 4. Mentorship from experienced professionals. 5. Fair compensation. 6. Opportunities for creativity and innovation.",
      "vimeoSrc": "https://player.vimeo.com/video/1081235502?h=0b8dbfe463"
    },
    {
      "id": "q14",
      "question": "15. In the past year, what have you been dissatisfied about in your performance?",
      "answer": "Over the past year, I felt that I could have participated in more coding competitions and hackathons to challenge myself further. Although I focused on building my skills and portfolio, I aim to engage more actively in competitions to enhance my problem-solving agility.",
      "vimeoSrc": "https://player.vimeo.com/video/1081235419?h=3fe94f747a"
    },
    {
      "id": "q15",
      "question": "16. Rate yourself out of 5 in verbal communication. What are you doing to improve your communication skills?",
      "answer": "I would rate myself 4 out of 5 in verbal communication. To continuously improve, I actively participate in group discussions, deliver presentations, and practice public speaking to refine my clarity, confidence, and articulation.",
      "vimeoSrc": "https://player.vimeo.com/video/1081235678?h=9f0e210cb8"
    },
    {
      "id": "q16",
      "question": "17. Who is your role model? What qualities of that person would you like to see in your personality and why?",
      "answer": "Role Model: My father. Qualities I admire: His resilience, adaptability, work ethic, and ability to stay calm and solution-focused in challenging situations. I aspire to embody these qualities in my personal and professional life to navigate challenges effectively and maintain balance.",
      "vimeoSrc": "https://player.vimeo.com/video/1081235605?h=730ef679ee"
    },
    {
      "id": "q17",
      "question": "18. Write a few lines about your friends. Do you think they help/may help you in achieving your goals? If yes, how?",
      "answer": "My friends are supportive, motivated, and creatively driven individuals. Yes, they help me achieve my goals by encouraging me to push my limits, offering constructive feedback, collaborating on projects, and inspiring me through their own achievements. Our shared ambitions create a positive, motivating environment for growth.",
      "vimeoSrc": "https://player.vimeo.com/video/1081235517?h=c3d392f2b4"
    },
    {
      "id": "q18",
      "question": "19. Write 3 leadership qualities. How many do you possess? Write an instance where you have applied those qualities.",
      "answer": "Communication, Decision-Making, Team Motivation. I possess all three. Instance: As School Captain, I communicated effectively with both students and teachers, made important decisions for event planning, and kept the teams motivated, ensuring smooth execution of school events and student initiatives.",
      "vimeoSrc": "https://player.vimeo.com/video/1081235554?h=711e6265d5"
    },
    {
      "id": "q19",
      "question": "20. Tell us something more about yourself or introduce yourself.",
      "answer": "I am Alok Nawani, a passionate web developer and digital designer from Jammu and Kashmir, currently pursuing B.Tech in Computer Science Engineering at Graphic Era Hill University. A perfectionist by nature, I strive to create innovative, engaging digital experiences. Beyond technology, I find creative expression through photography, music, and gaming. With leadership experience, a resilient mindset, and a deep curiosity for learning, I am excited to shape a future that harmonizes creativity, functionality, and impact.",
      "vimeoSrc": "https://player.vimeo.com/video/1081235538?h=a0663c0a3e"
    }
  ]
};

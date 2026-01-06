import { Project, ProjectType, Experience, Award, Talk, SocialLink, Education, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Raha Ahmadi",
  title: "Machine Learning Researcher & Engineer",
  tagline: "Turning deep learning into real-world impact by bridging theoretical research and scalable, production-grade AI systems.",
  about: "I’m a <strong>Machine Learning Researcher and Engineer</strong> and a Master’s student at the University of British Columbia, supervised by Prof. Roger Tam. My research focuses on developing <strong>interpretable multimodal deep learning models</strong> using multi-instance learning for disease diagnosis, with an aim toward deployment in clinical settings.\nPreviously, I worked on evaluating and improving physical reasoning in <strong>video–language models</strong> at INSAIT. I also have hands-on experience with <strong>large language models (LLMs)</strong>, <strong>retrieval-augmented generation (RAG)</strong>, and <strong>agentic systems</strong>.\nI’m a recipient of the <strong>Mitacs Accelerate Fellowship</strong> and the <strong>NSERC CREATE Program Award</strong>.",
  email: "rahaa.ahmadi2001@gmail.com",
  location: "Vancouver, Canada",
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/rahaahmadi", iconName: "Github" },
  { platform: "LinkedIn", url: "https://linkedin.com/in/rahaahmadi", iconName: "Linkedin" },
  { platform: "Email", url: `mailto:${PERSONAL_INFO.email}`, iconName: "Mail" },
];

export const EDUCATION: Education[] = [
  {
    id: "edu1",
    school: "University of British Columbia",
    degree: "M.A.Sc. in Biomedical Engineering | Focus: AI & Machine Learning",
    location: "Vancouver, Canada",
    period: "Sep. 2024 – Expected Dec. 2026",
    details: [
        "GPA: 91.3% (A+)",
        "Fully Funded Admission"
    ]
  },
  {
    id: "edu2",
    school: "Amirkabir University of Technology (Tehran Polytechnic)",
    degree: "B.Sc in Computer Engineering",
    location: "Tehran, Iran",
    period: "Sep. 2019 – Apr. 2024",
    details: [
        "GPA: 3.85/4"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "r2",
    title: "Enhancing COPD Diagnosis with Interpretable Deep Learning",
    subtitle: "Master's Research @ UBC",
    description: "Developing a multimodal deep learning framework to detect COPD from 3D CT and and tabular clinical data using multi-instance learning with gated attention pooling. Achieved +8% AUC improvement and identified key anatomical regions by mapping activation maps to segmented lung areas.",
    type: ProjectType.RESEARCH,
    technologies: ["Multimodal Learning", "Multi-Instance Learning" , "Gated Attention", "Interpretable AI", "Medical Imaging"],
    links: [],
    imageUrl: "pics/copd.png",
    date: "2024"
  },
  // 1. Publications (Highest Priority)
  {
    
    id: "p1",
    title: "Mitigating Bias: Enhancing Image Classification by Improving Model Explanations",
    subtitle: "Asian Conference on Machine Learning (ACML), 2023",
    description: "Proposed a novel framework to enhance interpretability in image classifiers by guiding model attention using improved explanation maps (Region-of-Interest Activation). Demonstrated state-of-the-art performance in reducing reliance on spurious correlations and background cues.",
    type: ProjectType.PUBLICATION,
    technologies: ["Image Classification", "XAI", "Weakly Supervised Localization", "Spurious Correlation", "PyTorch"],
    links: [
      { label: "Paper", url: "https://proceedings.mlr.press/v222/ahmadi24a.html", type: "paper" },
      { label: "Code", url: "https://github.com/rahaahmadi/explanation-guided-classification", type: "code" }
    ],
    imageUrl: "pics/acml.png",
    date: "2023"
  },
  {
    id: "r1",
    title: "Benchmarking Physical Reasoning in Video-Language Models",
    subtitle: "ImplausiBench Dataset",
    description: "Contributed to a top-tier research project by developing and curating synthetic videos using models such as Pika, Runway, and CogVideo. Supported the creation of the ImplausiBench dataset to evaluate physical reasoning in video–language models, including designing paired plausible and implausible videos, synthesizing counterfactual scenarios, and generating high-quality captions using GPT-4o.",
    type: ProjectType.RESEARCH,
    technologies: ["Video-Language Models", "Diffusion-Based Video Models", "Video Captioning", "Physical Reasoning", "Benchmarking"],
    links: [
      {label: "Project Page", url: "https://insait-institute.github.io/travl.github.io/", type: "demo"},
      { label: "Paper", url: "https://arxiv.org/abs/2510.07550", type: "paper" }
    ],
    imageUrl: "pics/implausibench.png",
    date: "2025"
  },
  {
    id: "e4",
    title: "Privacy-First Local RAG System",
    description: "A local, end-to-end Retrieval-Augmented Generation (RAG) system for natural-language questions over documents while keeping data private. Uses embeddings, vector search, and a local LLM, fully containerized with Docker.",
    type: ProjectType.ENGINEERING,
    technologies: ["RAG", "LLMs","pgvector", "SentenceTransformer", "Cross-Encoder", "Docker"],
    links: [ {label: "Code", url: "https://github.com/rahaahmadi/Local-RAG-System", type: "code" }],
    imageUrl: "pics/rag.png",
    date: "2024"
  },
  {
    id: "e2",
    title: "ObserveAI",
    description: "An AI-powered tool for educators to summarize audio sessions. Leverages OpenAI’s Whisper for transcription and GPT-4.1 for structured summaries. Features email sharing of transcripts and takeaways.",
    type: ProjectType.ENGINEERING,
    technologies: ["Speech-to-Text", "Audio Summarization", "Whisper", "GPT-4.1", "FastAPI", "React"],
    links: [
      { label: "Code", url: "https://github.com/rahaahmadi/ObserveAI", type: "code" }
    ],
    imageUrl: "pics/observeAI.png",
    date: "2024"
  },
  {
    id: "e3",
    title: "SimpleTrainer",
    description: "A lightweight open-source toolkit that simplifies PyTorch training pipelines. Provides clean, reusable training loops for classification/regression with built-in metrics tracking and checkpointing.",
    type: ProjectType.ENGINEERING,
    technologies: ["PyTorch", "Open Source", "MLOps", "Weights & Biases"],
    links: [
      { label: "Code", url: "https://github.com/rahaahmadi/simpletrainer", type: "code" }
    ],
    imageUrl: "pics/simpletrainer.png",
    date: "2023"
  },
  {
    id: "p2",
    title: "HiSpecmer: Deep Efficient Super-Resolution Network",
    subtitle: "Multidimensional Systems and Signal Processing, 2025",
    description: "Developed a transformer-based super-resolution network using hierarchical and spectral feature attention, where the hierarchical feature attention leverages multi-level information in the feature maps and the spectral feature attention operates across different spectral sub-bands.",
    type: ProjectType.PUBLICATION,
    technologies: ["Super-Resolution", "Transformers", "Wavelet Transform", "Attention Mechanism"],
    links: [
      { label: "Paper", url: "https://link.springer.com/article/10.1007/s11042-025-20946-4", type: "paper" },
    ],
    imageUrl: "pics/dsp.png",
    date: "2025"
  },
  {
    id: "e1",
    title: "Persian Knowledge Graph QA System",
    description: "Developed a modular QA system over a Persian knowledge graph using Neo4j and transformers. Designed a few-shot Named Entity Recognition system fine-tuned with a custom Persian QA dataset, improving NER performance to 95% F1.",
    type: ProjectType.RESEARCH,
    technologies: ["NLP", "Neo4j", "Transformers", "Knowledge Graphs", "BERT"],
    links: [],
    imageUrl: "pics/ner.png",
    date: "2024"
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "exp1",
    role: "Graduate Research Assistant & Mitacs Accelerate Intern",
    company: "University of British Columbia",
    location: "Vancouver, Canada",
    period: "Sep. 2024 – Present",
    description: [
      "Led end-to-end research on interpretable deep learning models for medical imaging, Under the supervision of <a href='https://scholar.google.com/citations?user=78j7xysAAAAJ&hl=en' target='_blank' rel='noopener noreferrer'>Dr. Roger Tam</a>",
      "Collaborated with clinicians and researchers to align model design with real-world diagnostic workflows."
    ]
  },
  {
    id: "exp2",
    role: "Research Intern",
    company: "Institute of Computer Science and Artificial Intelligence (INSAIT)",
    location: "Remote",
    period: "Mar. 2025 – May 2025",
    description: [
      "Developed a benchmark with synthetic videos to evaluate physical reasoning in Video-Language Models, under the supervision of <a href='https://scholar.google.com/citations?user=lKZ7htMAAAAJ&hl=en' target='_blank' rel='noopener noreferrer'>Dr. Saman Motamed</a>."
    ]
  },
  {
    id: "exp3",
    role: "Research Assistant",
    company: "University of Toronto",
    location: "Remote",
    period: "May 2023 – Jan. 2024",
    description: [
      "Collaborated on research in transformer-based image super-resolution, evaluating architectural choices for efficiency–performance trade-offs, Under the supervision of <a href='https://scholar.google.com/citations?user=WAISKYYAAAAJ&hl=en' target='_blank' rel='noopener noreferrer'>Dr. Alireza Esmaeilzehi</a>."

    ]
  },
  {
    id: "exp4",
    role: "Research Assistant",
    company: "Amirkabir University of Technology, NLP Lab",
    location: "Tehran, Iran",
    period: "Mar. 2023 – Jan. 2024",
    description: [
      "Developed a Knowledge Graph QA system and Named Entity Recognition models for low-resource and few-shot settings, Under the supervision of <a href='https://scholar.google.nl/citations?user=N-WqXykAAAAJ&hl=en' target='_blank' rel='noopener noreferrer'>Dr. Saeedeh Momtazi </a>."
    ]
  },
  {
    id: "exp5",
    role: "Research Intern",
    company: "Institute for Research in Fundamental Sciences (IPM)",
    location: "Tehran, Iran",
    period: "Jun. 2022 – Nov. 2023",
    description: [
      "Led and executed a research project focused on improving interpretability and robustness in image classification models, Under the supervision of <a href='https://scholar.google.com/citations?user=jqHXvT0AAAAJ&hl=en' target='_blank' rel='noopener noreferrer'>Dr. Mohammad Sabokrou</a>."
    ]
  },
  {
    id: "exp6",
    role: "Software Engineering Intern",
    company: "Mohaymen ICT Company",
    location: "Tehran, Iran",
    period: "Jul. 2021 – Sep. 2021",
    description: [
      "Worked in a backend team to build an ETL web application using .NET, SQL Server, and Elasticsearch, applying clean coding, object-oriented design, software testing, and software engineering best practices."
    ]
  }
];

export const AWARDS: Award[] = [
  {
    id: "a1",
    title: "NSERC CREATE Program Award",
    description: "Competitive graduate fellowship awarded by NSERC",
    date: "Sep. 2024",
    amount: "$18,000 CAD"
  },
  {
    id: "a2",
    title: "Mitacs Accelerate Fellowship",
    description: "Industry-partnered graduate research fellowship",
    date: "Sep. 2024",
    amount: "$20,000 CAD/year"
  },
  {
    id: "a3",
    title: "Ranked 430 in the Iran National Universities Entrance Exam",
    description: "Among 164,000 participants",
    date: "Aug. 2019"
  }
];

export const TALKS: Talk[] = [
  {
    id: "t1",
    title: "A Dive into Vision-Language Models",
    event: "Amirkabir Artificial Intelligence Student Summit (AAISS)",
    date: "Jan. 2025",
    link: "https://docs.google.com/presentation/d/1p0yxseWbWdsx1z6rC0epemf62scFJTKylU_viQ15j3s/edit?usp=sharing"
  },
  {
    id: "t2",
    title: "Adversarial Machine Learning",
    event: "Workshop at AAISS",
    date: "Dec. 2023",
    link: "https://docs.google.com/presentation/d/1A7375XNbzLQHR0isA0fBe3Z6krUi-p2T/edit?usp=sharing&ouid=117814235367243035001&rtpof=true&sd=true"
  },
  {
    id: "t3",
    title: "Mitigating Bias: Enhancing Image Classification",
    event: "Oral presentation at ACML 2023, Istanbul, Turkey",
    date: "Nov. 2023",
    link: "https://docs.google.com/presentation/d/1vJG4LwXSb1daUy2N8KugcJVIVdeSzFwC/edit?usp=sharing&ouid=117814235367243035001&rtpof=true&sd=true"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "C/C++", "SQL", "JavaScript/TypeScript", "HTML/CSS", "Bash"]
  },
  {
    category: "Machine Learning",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "OpenCV", "LLMs", "Generative AI", "Computer Vision", "NLP"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Docker", "Linux", "VS Code", "Jupyter", "Neo4j", "Elasticsearch", "LaTeX"]
  },
  {
    category: "Web Development",
    skills: ["React", "Node.js", "Express", "Tailwind CSS", "REST APIs"]
  }
];
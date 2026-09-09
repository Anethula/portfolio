export const myProjects = [
  {
    "id": 1,
    "title": "CVM4X",
    "description": "A real-time home monitoring platform that turns camera footage into searchable activity, summaries, and prioritized alerts.",
    "subDescription": [
      "Built a Python and Flask backend with Socket.IO event streaming and an OpenCV / YOLOv8 vision pipeline.",
      "Connected Gemini summaries, identity validation, and severity-based email alerts to a browser dashboard.",
      "Integrated Supabase authentication and account-based alert subscriptions, with a Raspberry Pi deployment workflow."
    ],
    "href": "",
    "image": "/assets/projects/cvm4x.png",
    "tags": [
      {
        "id": 1,
        "name": "Python"
      },
      {
        "id": 2,
        "name": "Flask"
      },
      {
        "id": 3,
        "name": "OpenCV"
      },
      {
        "id": 4,
        "name": "YOLOv8"
      },
      {
        "id": 5,
        "name": "Gemini API"
      },
      {
        "id": 6,
        "name": "Supabase"
      }
    ]
  },
  {
    "id": 2,
    "title": "RAISE-26",
    "description": "An NLP research project exploring how AI is portrayed in the news and how those narratives relate to work, society, and everyday life.",
    "subDescription": [
      "Compared sentiment and emotion signals with Hugging Face models, including RoBERTa, DeBERTa, and a custom DeBERTa–BiLSTM model.",
      "Explored topics, narrative framing, and stakeholder perspectives through BERTopic, zero-shot classification, and semantic networks.",
      "Used Mistral-powered agents to generate and discuss possible AI headlines from research, business, and ethics perspectives."
    ],
    "href": "",
    "image": "/assets/projects/raise.png",
    "tags": [
      {
        "id": 1,
        "name": "NLP"
      },
      {
        "id": 2,
        "name": "Hugging Face"
      },
      {
        "id": 3,
        "name": "BERTopic"
      },
      {
        "id": 4,
        "name": "DeBERTa"
      },
      {
        "id": 5,
        "name": "Mistral"
      }
    ]
  },
  {
    "id": 3,
    "title": "Table-Gen RAG",
    "description": "A clinical reporting tool that uses retrieval-augmented generation to turn study documents into editable table shells.",
    "subDescription": [
      "Extracted and organized trial variables from statistical analysis plans and case report forms.",
      "Used Llama 3.3 through the Groq API to map variables into table templates, with Pandas and CSV preprocessing for structured tables.",
      "Provided a human review interface for refining variables and validating table mappings before export."
    ],
    "href": "https://github.com/Sravya-Pogiri/table_shells",
    "image": "/assets/projects/tablerag.png",
    "tags": [
      {
        "id": 1,
        "name": "RAG"
      },
      {
        "id": 2,
        "name": "Llama 3.3"
      },
      {
        "id": 3,
        "name": "Groq API"
      },
      {
        "id": 4,
        "name": "Pandas"
      }
    ]
  },
  {
    "id": 4,
    "title": "FinWise",
    "description": "A personal finance web demo combining goal-based budgeting with an AI assistant for conversational guidance.",
    "subDescription": [
      "Created a TypeScript, HTML, and CSS interface to bring budgeting, transaction breakdowns, and financial goals into one workspace.",
      "Integrated Gemini for personalized budgeting conversations and ElevenLabs for spoken responses and quick summaries.",
      "Designed an assistant users can interact with through text or voice to better understand their finances."
    ],
    "href": "",
    "image": "/assets/projects/finwise.png",
    "tags": [
      {
        "id": 1,
        "name": "TypeScript"
      },
      {
        "id": 2,
        "name": "Gemini API"
      },
      {
        "id": 3,
        "name": "ElevenLabs"
      },
      {
        "id": 4,
        "name": "HTML / CSS"
      }
    ]
  },
  {
    "id": 5,
    "title": "Maritime Security & Risk Assessment",
    "description": "A vessel monitoring and risk assessment system that combines movement patterns, vessel identity, and sanctions information in one dashboard.",
    "subDescription": [
      "Built a Python pipeline with Pandas and NumPy to process AIS data and flag unusual vessel movement, GPS spoofing signals, and gaps in tracking.",
      "Combined AIS observations with registry and sanctions data to assess vessel identity risks and produce overall risk scores.",
      "Presented anomaly detections and risk levels through a unified dashboard to support maritime security analysis."
    ],
    "href": "",
    "image": "/assets/projects/MaritimeRiskSecurity.png",
    "tags": [
      {
        "id": 1,
        "name": "Python"
      },
      {
        "id": 2,
        "name": "Pandas"
      },
      {
        "id": 3,
        "name": "NumPy"
      },
      {
        "id": 4,
        "name": "Risk analysis"
      }
    ]
  },
  {
    "id": 6,
    "title": "Delivery Truck Damage Detection",
    "description": "A YOLOv8 computer vision system for identifying visible damage in images of Amazon distribution trucks.",
    "subDescription": [
      "Detects vehicle damage such as dents, scratches, and breakage, with bounding boxes and detailed reports.",
      "Supports batch image processing, configurable confidence thresholds, and both command-line and Python API workflows.",
      "Currently focuses on individual images. Before-and-after route comparison has a basic implementation and remains in development."
    ],
    "href": "",
    "image": "/assets/projects/CVDamageDetection.png",
    "tags": [
      {
        "id": 1,
        "name": "Python"
      },
      {
        "id": 2,
        "name": "YOLOv8"
      },
      {
        "id": 3,
        "name": "Computer Vision"
      }
    ]
  }
];

export const mySocials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/arnav-nethula" },
  { name: "GitHub", href: "https://www.github.com/Anethula" },
  { name: "Devpost", href: "https://devpost.com/arnavnethula" },
  { name: "Email", href: "mailto:arnavnethula@gmail.com" },
];

export const extraExperiences = [
  {
    category: "Agentic AI Developer",
    title: "Rutgers Econ Labs",
    description: "Agentic Intelligence developer for the Rutgers Economics Labs internal AI initiative team"
  },
  {
    category: "Tech Chair",
    title: "USACS",
    description: "Tech Chair for the Undergraduate Student Alliance of Computer Scientists leading tech workshops",
  },
  {
    category: "Community",
    title: "AI Squads",
    description: "Served as a teaching assistant for 200+ students in building projects",
  },
  {
    category: "Tech Chair",
    title: "Rutgers AI Club",
    description: "Technical lead for the AI club in teaching how to build projects",
  },
  {
    category: "Peer Mentor",
    title: "SEED2S",
    description: "Supporting students in their career development for data science",
  },
  {
    category: "Exam Grader / Proctor",
    title: "Rutgers CS",
    description: "Exam grader and proctor for the Rutgers CS111 course "
  }
];

export const experiences = [
  {
    "title": "Software Engineering Intern",
    "job": "AT&T",
    "date": "Jun – Aug 2026",
    "contents": [
      "Built Jira ticketing automation with REST APIs and custom MCP servers to simplify story creation and routing.",
      "Developed agentic AI workflows using LLMs and cloud APIs to assess infrastructure and support migration planning.",
      "Created Snowflake data pipelines and cloud cost models spanning AWS Outposts, Azure, GCP, and other infrastructure sources.",
      "Developed tables and Snowflake ETL in AWS Outposts to expose infrastructure spend in AWS EC2 and EBS instances"
    ]
  },
  {
    "title": "AI Intern",
    "job": "NeuralSeek",
    "date": "Aug – Sep 2025",
    "contents": [
      "Built AI agents and natural language workflows with NeuralSeek’s multi-agent orchestration platform.",
      "Developed serverless integrations using AWS Lambda, API Gateway, and SageMaker to connect AI services with enterprise systems.",
      "Created retrieval and semantic search pipelines that connected LLMs to enterprise knowledge through embeddings and REST APIs.",
      "Supported reliable releases with GitHub Actions, automated tests, and CI/CD workflows."
    ]
  },
  {
    "title": "Software Engineering / AI Developer",
    "job": "IDSWG Oncology Group",
    "date": "May – Sep 2025",
    "contents": [
      "Developed retrieval-augmented document workflows using sentence transformers, Ollama, and Mistral models.",
      "Built a Streamlit dashboard hosted on AWS EC2 for document summaries and data visualization.",
      "Refined PostgreSQL schemas and queries to support document retrieval and growing research datasets.",
      "Contributed to radiology image analysis using PyTorch, convolutional neural networks, and ConvNeXt V2, with Pandas for data preparation."
    ]
  }
];

// ============================================================
//  CURIOSITAS.AI — CONTENT FILE
//  ✏️  THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE THE SITE
//
//  HOW TO UPDATE:
//  1. Open this file in any text editor (Notepad, TextEdit, VS Code)
//  2. Find the section you want to change
//  3. Edit the text between the quotes " "
//  4. Save the file
//  5. Upload to GitHub — your site updates in ~30 seconds
//
//  RULES:
//  - Keep text inside the " " quotes
//  - Don't delete any { } [ ] , characters
//  - Use \n for a new line inside text
//  - Emojis are fine to use anywhere!
// ============================================================

const SITE = {

  // ─────────────────────────────────────────
  //  SITE-WIDE SETTINGS
  // ─────────────────────────────────────────
  meta: {
    siteName:    "Curiositas.ai",
    tagline:     "Learn AI the Simple Way — Free for Everyone",
    description: "Curiositas.ai teaches AI and prompt engineering in plain English — perfect for kids, teenagers, and complete beginners. Free lessons, guides, and 1-on-1 sessions.",
    url:         "https://www.curiositas.ai",
    // ⬇️ PASTE YOUR GOOGLE ANALYTICS ID HERE WHEN READY (looks like: G-XXXXXXXXXX)
    gaId:        "G-XXXXXXXXXX",
    // ⬇️ PASTE YOUR GOOGLE ADSENSE PUBLISHER ID HERE WHEN APPROVED (looks like: ca-pub-XXXXXXXXXXXXXXXX)
    adsenseId:   "",
  },

  // ─────────────────────────────────────────
  //  HEADER
  // ─────────────────────────────────────────
  header: {
    eyebrow:     "Free AI Education for Everyone — All Ages Welcome",
    title:       "Curiositas.ai",
    subtitle:    "curiositas · Latin for \"the burning desire to know\"",
    description: "Ever wondered how ChatGPT answers questions, writes stories, or helps with homework? This site explains exactly how — in plain, simple words anyone can follow. No coding needed. No tech experience required. Just curiosity.",
  },

  // ─────────────────────────────────────────
  //  HERO EXPLAINER BOXES  (the 3 boxes at the top)
  //  ✏️ Edit the title and body to change what they say
  // ─────────────────────────────────────────
  explainers: [
    {
      emoji: "🤖",
      title: "What is AI?",
      body:  "A computer that learned from reading billions of pages of human writing — so now it can write, answer questions, and have conversations almost like a person.",
    },
    {
      emoji: "💬",
      title: "What is Prompt Engineering?",
      body:  "The skill of asking AI questions in exactly the right way so you get genuinely useful answers. Think of it as knowing how to talk to a brilliant but very literal assistant.",
    },
    {
      emoji: "🚀",
      title: "Why does it matter?",
      body:  "People who know how to use AI well are already more productive and creative. This is a real skill for school, work, and everyday life — and you can start learning today, for free.",
    },
  ],

  // ─────────────────────────────────────────
  //  INTRO TEXT
  // ─────────────────────────────────────────
  intro: {
    eyebrow: "Start Here — Zero Experience Needed",
    heading: "So… what actually is AI?",
    paragraphs: [
      "Imagine you had a friend who had read every book, every article, and every website ever written — billions of pages of text. And because they read so much, they learned how to write, explain things, answer questions, and have conversations on almost any topic.",
      "That is basically what an AI like ChatGPT or Claude is. It is a computer program trained by reading enormous amounts of human writing. It found patterns in text and got very good at guessing what word should come next.",
      "The exciting part? You can talk to it. And if you know how to talk to it well — that skill is called prompt engineering — you can get it to help you do almost anything: write emails, summarise long documents, plan your day, solve problems, and brainstorm ideas.",
      "This site teaches you both things: how AI works under the hood, and how to use it like a pro. Even if you are 12 years old and have never typed a line of code in your life.",
    ],
    quote: {
      text:   "The important thing is to not stop questioning. Curiosity has its own reason for existing.",
      author: "Albert Einstein",
    },
  },

  // ─────────────────────────────────────────
  //  TOPICS  (the two big topic cards)
  //  ✏️ To add a topic, copy one block and paste it after the last one
  // ─────────────────────────────────────────
  topics: [
    {
      number:      "01 — Prompt Engineering",
      title:       "How to Talk to AI (and Get Great Results)",
      description: "Most people type a quick question and get a mediocre answer. Prompt engineering is the art of crafting your question — giving the right context, the right format, and the right role — so AI gives you something genuinely brilliant. Anyone can learn it.",
      tags:        ["Zero-shot", "Few-shot", "Chain-of-thought", "Role prompting", "Output formatting", "System prompts"],
    },
    {
      number:      "02 — LLMs & Generative AI",
      title:       "How Does AI Actually Think?",
      description: "Why does AI sometimes make things up? How can it write a poem and solve a maths problem and translate French — all in seconds? Understanding how AI works helps you use it better and spot when it gets things wrong.",
      tags:        ["Transformers", "Attention", "Tokens", "Training", "Hallucination", "Fine-tuning"],
    },
  ],

  // ─────────────────────────────────────────
  //  LESSONS  ⭐ THIS IS WHAT YOU WILL UPDATE MOST OFTEN
  //
  //  level options: "starter" | "explorer" | "builder"
  //  level labels:  Starter = no experience, Explorer = some lessons done, Builder = advanced
  //
  //  ✏️ TO ADD A NEW LESSON: copy the block below and paste it at the end of the list
  //  ✏️ TO EDIT A LESSON:    just change the title, topic, duration, or level
  //  ✏️ TO REMOVE A LESSON:  delete the whole block from { to the closing },
  // ─────────────────────────────────────────
  lessons: [
    {
      title:    "What is AI, Really? (A Plain-English Explanation)",
      topic:    "How AI Works",
      duration: "20 min",
      note:     "No background needed",
      level:    "starter",
      link:     "lessons/lesson-01.html",
    },
    {
      title:    "Tokens: How AI Reads and Writes (Not Like You Think)",
      topic:    "How AI Works",
      duration: "25 min",
      note:     "No background needed",
      level:    "starter",
    },
    {
      title:    "Your First 5 Prompts: How to Ask AI for Help",
      topic:    "Prompt Engineering",
      duration: "20 min",
      note:     "No background needed",
      level:    "starter",
    },
    {
      title:    "Why Does AI Make Things Up? (And How to Catch It)",
      topic:    "How AI Works",
      duration: "35 min",
      note:     "Lessons 1–2 help",
      level:    "explorer",
    },
    {
      title:    "Give AI a Role: The Secret to Better Answers",
      topic:    "Prompt Engineering",
      duration: "30 min",
      note:     "Lessons 1–3 help",
      level:    "explorer",
    },
    {
      title:    "Show, Don't Just Tell: Using Examples in Your Prompts",
      topic:    "Prompt Engineering",
      duration: "25 min",
      note:     "Lessons 1–3 help",
      level:    "explorer",
    },
    {
      title:    "How AI Was Trained to Be Helpful and Safe",
      topic:    "How AI Works",
      duration: "40 min",
      note:     "Comfortable with lessons 1–4",
      level:    "explorer",
    },
    {
      title:    "Make AI Think Step by Step (Chain-of-Thought Prompting)",
      topic:    "Prompt Engineering",
      duration: "35 min",
      note:     "Comfortable with lessons 1–6",
      level:    "builder",
    },
    {
      title:    "Control the Output: Get Exactly the Format You Need",
      topic:    "Prompt Engineering",
      duration: "35 min",
      note:     "Comfortable with lessons 1–6",
      level:    "builder",
    },
    {
      title:    "Your AI Toolkit: 10 Prompts That Make You 10× More Productive",
      topic:    "Prompt Engineering",
      duration: "50 min",
      note:     "Full course recommended first",
      level:    "builder",
    },
  ],

  // ─────────────────────────────────────────
  //  RESOURCES  (the 6 download cards)
  //  ✏️ To add a resource, copy a block and add it to the list
  // ─────────────────────────────────────────
  resources: [
    {
      emoji: "📋",
      title: "Prompt Engineering Cheat Sheet",
      body:  "All the key techniques on one page — keep it open while practising.",
      label: "Reference Guide",
      link:  "prompt-engineering-cheatsheet.html",
    },
    {
      emoji: "📖",
      title: "AI Glossary (Plain English)",
      body:  "All the jargon — tokens, RLHF, attention — explained simply. Searchable.",
      label: "Searchable Glossary",
      link:  "llm-glossary.html",
    },
    {
      emoji: "🗂",
      title: "Copy-Paste Prompt Templates",
      body:  "Six ready-to-use prompts for study, writing, research, and everyday tasks.",
      label: "Templates",
      link:  "prompting-templates.html",
    },
    {
      emoji: "🧠",
      title: "How a Transformer Works",
      body:  "A plain-language visual guide to the architecture inside every major AI.",
      label: "Visual Guide",
      link:  "transformer-diagram.html",
    },
    {
      emoji: "📚",
      title: "Recommended Reading",
      body:  "The best books, articles, and papers for going deeper — sorted by level.",
      label: "Reading List",
      link:  "reading-list.html",
    },
    {
      emoji: "✏️",
      title: "Practice Exercises",
      body:  "Twelve hands-on prompting challenges with hints and model answers.",
      label: "Exercises",
      link:  "exercises.html",
    },
  ],

  // ─────────────────────────────────────────
  //  FAQ  ✏️ Add or edit questions here
  // ─────────────────────────────────────────
  faq: [
    {
      q: "Do I need to know how to code?",
      a: "Not at all. Everything on Curiositas.ai is written for people with zero coding experience. If you can use a phone or a computer, you can follow along perfectly well.",
    },
    {
      q: "Is this suitable for children and teenagers?",
      a: "Yes — this is one of the main goals of the site. Lessons are written so a 12-year-old with no tech background can follow every step. There is no jargon without a plain-English explanation right next to it.",
    },
    {
      q: "What is prompt engineering and why should I learn it?",
      a: "Prompt engineering is the skill of writing good instructions for AI. It is like knowing how to use a search engine well — most people just type a few words, but people who know the tricks get far better results. Learning it means you can use AI tools much more effectively for studying, work, and creative projects.",
    },
    {
      q: "How long does the whole course take?",
      a: "At a relaxed pace — one lesson every few days — you can finish all 10 lessons in about 3 to 4 weeks. Each lesson is around 20–50 minutes. There is no deadline and no pressure.",
    },
    {
      q: "Is everything here really free?",
      a: "Yes. All lessons, resources, and the 30-minute 1-on-1 session are completely free. Curiositas.ai is a personal teaching project, not a business.",
    },
  ],

  // ─────────────────────────────────────────
  //  BOOKING SECTION
  // ─────────────────────────────────────────
  booking: {
    eyebrow:     "1-on-1 Learning Session",
    heading:     "Book a free 30-minute chat",
    description: "Have a question you cannot figure out? Want a personal roadmap for learning AI? Or just want to see a live prompt engineering demo? Let's talk.",
    perks: [
      "Completely free — no catch, no sales pitch",
      "Perfect for complete beginners, students, and curious adults of all ages",
      "We will look at your specific goals and map a clear learning path",
      "Held over video call (Zoom, Google Meet, or Teams — your choice)",
      "You get a calendar invite (.ics) that works with Google Calendar, Outlook, and Apple Calendar",
    ],
    note: "Sessions run Monday–Friday. Most requests confirmed within 24 hours.",
    topics: [
      "I am a complete beginner — where do I start?",
      "I want to get better at prompt engineering",
      "I want to understand how AI actually works",
      "I want to use AI to be more productive",
      "I am a student or teacher and want advice",
      "Something else (I will explain below)",
    ],
    timeSlots: [
      "09:00 – 09:30", "09:30 – 10:00", "10:00 – 10:30",
      "10:30 – 11:00", "11:00 – 11:30", "14:00 – 14:30",
      "14:30 – 15:00", "15:00 – 15:30", "16:00 – 16:30", "17:00 – 17:30",
    ],
  },

  // ─────────────────────────────────────────
  //  ABOUT SECTION
  // ─────────────────────────────────────────
  about: {
    eyebrow: "About This Site",
    heading: "Built for genuine learners",
    paragraphs: [
      "Curiositas.ai was built with one belief: the best way to understand AI is to start with a good analogy and build from there. No jargon without an explanation. No assumed knowledge. Just clear, honest lessons you can actually follow.",
      "The name comes from the Latin word curiositas — the Romans used it to describe people who could not stop asking questions. It was not always a compliment. Today, that kind of curiosity is the most valuable skill you can have.",
      "Whether you are 12 or 52, a student or a professional, new to AI or a daily user — there is something here for you. All materials are free to read, share, and use.",
    ],
    stats: [
      { number: "10", label: "Lessons" },
      { number: "2",  label: "Topics"  },
      { number: "6",  label: "Resources" },
    ],
  },

};

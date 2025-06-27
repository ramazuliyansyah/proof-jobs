// src/app/jobs/[id]/page.tsx
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

// You would typically fetch this data from a database or a more robust data source
// For this example, we keep it in-memory.
const jobDetails = {
  healthcare: {
    title: "Healthcare Professionals",
    fullDescription:
      "The healthcare sector, encompassing doctors, nurses, therapists, and counselors, remains profoundly human-centric and largely immune to full AI displacement. While AI excels at analyzing vast datasets for diagnosis and can assist with administrative tasks or even robotic surgery, it fundamentally lacks the capacity for genuine empathy, nuanced patient communication, and the intricate ethical decision-making inherent in patient care. Healthcare professionals build critical trust, provide emotional support during vulnerable times, and adapt their approach to the unique psychological and physical needs of each individual. The ability to comfort, motivate, and understand the non-verbal cues of a patient facing illness or recovery is a uniquely human skill that forms the bedrock of effective healthcare and cannot be replicated by algorithms. Furthermore, the complexities of human biology and the unpredictable nature of disease progression require intuitive problem-solving and adaptive judgment that goes beyond pattern recognition.",
    skills: [
      "Empathy",
      "Critical Thinking",
      "Communication",
      "Problem-Solving",
      "Adaptability",
      "Emotional Intelligence",
      "Ethical Reasoning",
    ],
    image: "/images/healthcare.jpg",
  },
  teachers: {
    title: "Teachers and Educators",
    fullDescription:
      "The role of a teacher extends far beyond simply delivering curriculum content. Effective educators inspire curiosity, foster critical thinking, and build meaningful relationships with their students. AI can certainly personalize learning paths, automate grading, and provide access to vast amounts of information, but it cannot replicate the dynamic interaction, emotional guidance, and adaptability of a human teacher. Teachers possess the unique ability to identify and address individual learning styles, recognize emotional struggles, and motivate students through challenges. They create a supportive classroom environment, encourage collaboration, and instill values, all of which require profound emotional intelligence and the capacity for spontaneous, human-centered interaction. The mentorship, inspiration, and holistic development provided by a human educator are foundational to learning and growth, making this profession remarkably resilient to automation.",
    skills: [
      "Patience",
      "Inspiration",
      "Adaptability",
      "Communication",
      "Mentorship",
      "Creativity",
      "Emotional Intelligence",
    ],
    image: "/images/teachers.jpg",
  },
  "social-workers": {
    title: "Social Workers",
    fullDescription:
      "Social work is a deeply empathetic, ethically complex, and profoundly human profession, squarely focused on understanding human struggles and navigating intricate social systems. Social workers engage intimately with individuals and families often navigating their most vulnerable and desperate moments, providing crucial crisis intervention, tirelessly advocating for fundamental rights, and connecting marginalized communities with essential resources. Their efficacy relies overwhelmingly on the unparalleled ability to build profound trust, engage in active, compassionate listening, and interpret the subtle, nuanced emotional and social cues that AI simply cannot fully comprehend or respond to authentically. Artificial intelligence, by its very nature, lacks the capacity for genuine compassion, the subtle intuition required to mediate delicate family disputes with sensitivity, or to make judicious ethical judgments in the face of ambiguous and emotionally charged human dilemmas. The intricate tapestry of interpersonal skills, profound cultural sensitivity, and the sophisticated capacity for nuanced advocacy – navigating bureaucratic hurdles and complex human relationships – ensure that social workers will remain not just indispensable, but increasingly vital in a world that craves authentic human connection and support.",
    skills: [
      "Empathy",
      "Active Listening",
      "Crisis Intervention",
      "Resourcefulness",
      "Advocacy",
      "Cultural Competence",
      "Ethical Judgment",
    ],
    image: "/images/social-workers.jpg",
  },
  "creative-pros": {
    title: "Creative Professionals",
    fullDescription:
      "While the advancements in generative AI have indeed produced impressive outputs in art, music, text, and design, the very essence of *true* creativity—the spark of genuine originality and profound emotional depth—remains an exclusively human domain. Artists, writers, musicians, and designers are not merely compilers of data; they are conduits of unique life experiences, personal narratives, and subjective interpretations of the world. AI operates fundamentally by analyzing, identifying patterns within, and then remixing vast quantities of *existing* data, making it exceptionally adept at pastiche, imitation, and stylistic replication. However, it struggles immensely with generating genuinely novel concepts, expressing raw, unfiltered human emotion, or challenging deeply ingrained societal conventions in a way that truly resonates and provokes thought. Creative professionals possess the intuitive leap, the audacious vision, and the profound personal narrative necessary to conceive groundbreaking ideas, to redefine aesthetic boundaries, and to express the multifaceted human condition in ways that are deeply authentic and emotionally resonant. Their ability to infuse meaning, purpose, and a unique 'soul' into their creations ensures their enduring, irreplaceable value in a world increasingly saturated with algorithmically generated content.",
    skills: [
      "Imagination",
      "Originality",
      "Storytelling",
      "Emotional Expression",
      "Critical Analysis",
      "Intuition",
      "Artistic Vision",
    ],
    image: "/images/creative-pros.jpg",
  },
  psychologists: {
    title: "Psychologists and Counselors",
    fullDescription:
      "The mental health professions, encompassing the critical roles of psychologists and counselors, require an intimate and profound understanding of the human psyche, the intricate complexities of emotional dynamics, and, most importantly, the ability to cultivate a deeply trusting and empathetic therapeutic relationship. While AI can undoubtedly process immense volumes of data related to human behavior, identify patterns in psychological assessments, and even deliver structured cognitive-behavioral exercises, it cannot, and likely will not, replicate the genuine human connection, the subtle nuances of empathy, and the intuitive comprehension necessary to navigate the intricate and often volatile landscape of mental well-being. Counselors provide a safe, confidential, and judgment-free space for vulnerability, interpret subtle non-verbal cues that speak volumes, and offer profoundly personalized guidance meticulously tailored to an individual’s unique life experiences, traumas, and struggles. The rigorous ethical considerations, the absolute necessity of confidentiality, and the demanding emotional labor involved in facilitating psychological healing and fostering genuine self-discovery make these roles fundamentally human-dependent and, thus, inherently irreplaceable by even the most sophisticated artificial intelligence.",
    skills: [
      "Empathy",
      "Confidentiality",
      "Active Listening",
      "Analytical Skills",
      "Ethical Judgment",
      "Therapeutic Rapport",
      "Emotional Intelligence",
    ],
    image: "/images/psychologists.jpg",
  },
  "skilled-trades": {
    title: "Skilled Trades (Plumbers, Electricians, Carpenters)",
    fullDescription:
      "Professions within the skilled trades – plumbers, electricians, carpenters, and similar experts – demand an extraordinarily high degree of adaptability, real-time problem-solving, and precise hands-on dexterity within environments that are inherently unpredictable and often chaotic. Unlike the controlled, repetitive settings of a factory assembly line, a residential home or commercial building presents a unique array of challenges with every single job: unexpected structural layouts, the bewildering labyrinth of aging infrastructure, or unforeseen complications that emerge mid-task. Robots, despite their precision in controlled environments, currently struggle immensely with the nuanced fine motor skills, the complex spatial reasoning required to navigate cramped and uneven spaces, and the dynamic adaptability needed to diagnose obscure issues on the fly and perform intricate manipulations. The critical, intuitive thinking required to troubleshoot a faulty electrical system or repair a unique plumbing configuration ensures that human skilled tradespeople will remain absolutely essential, valued, and in high demand for the foreseeable future, as their work is far from automatable.",
    skills: [
      "Problem-Solving",
      "Manual Dexterity",
      "Technical Knowledge",
      "Adaptability",
      "Attention to Detail",
      "Spatial Reasoning",
      "Troubleshooting",
    ],
    image: "/images/trades.jpg",
  },
  lawyers: {
    title: "Lawyers",
    fullDescription:
      "While Artificial Intelligence is indeed proving to be an increasingly invaluable tool for legal research, accelerating document review processes, and even assisting with predictive analytics for case outcomes, the core, irreplaceable functions of a lawyer – particularly in the high-stakes arenas of litigation, strategic negotiation, and personalized advisory roles – remain profoundly human. These professions demand a nuanced understanding of human motivations, the compelling power of persuasive communication, and the unparalleled ability to navigate the labyrinthine complexities of ethical dilemmas with wisdom and foresight. Courtroom advocacy, the subtle art of cross-examination, the intuitive process of jury selection, and the intricate dance of negotiation require a potent blend of emotional intelligence, deep human intuition, and the capacity for compelling storytelling that AI cannot replicate. Lawyers are not just interpreters of law; they are trusted advisors who provide highly personalized, strategic counsel meticulously tailored to a client's unique circumstances, factoring in not merely legal precedent but also the delicate web of human relationships, the emotional toll of disputes, and the far-reaching long-term implications, unequivocally securing their irreplaceable role within the justice system.",
    skills: [
      "Critical Thinking",
      "Negotiation",
      "Advocacy",
      "Ethical Reasoning",
      "Communication",
      "Persuasion",
      "Strategic Planning",
    ],
    image: "/images/lawyers.jpg",
  },
  "hr-specialists": {
    title: "HR Specialists",
    fullDescription:
      "Human Resources roles, especially those focused on the sensitive realms of employee relations, dynamic talent development, and the cultivation of a robust organizational culture, are, at their very core, intensely human-centric. While AI can efficiently automate repetitive tasks like initial recruitment screening, benefits administration, or payroll processing, it fundamentally lacks the indispensable emotional intelligence and nuanced understanding necessary to mediate complex workplace conflicts, provide truly empathetic support during difficult employee situations (such as layoffs or personal crises), or authentically foster a positive, inclusive, and thriving workplace environment. HR specialists are the crucial bridge between management and employees; they build vital trust, intuitively understand individual and group dynamics, provide sensitive and confidential advice, strategically mediate disputes, and meticulously develop strategies that harmoniously align employee well-being with overarching organizational goals. The profound capacity for fair judgment, genuine compassion, nuanced communication, and the ability to navigate the intricate complexities of human capital ensure that these vital roles are deeply resistant to full automation and will remain indispensable pillars within any successful organization.",
    skills: [
      "Empathy",
      "Conflict Resolution",
      "Communication",
      "Fairness",
      "Organizational Understanding",
      "Interpersonal Skills",
      "Confidentiality",
    ],
    image: "/images/hr-specialists.jpg",
  },
  "research-scientists": {
    title: "Research Scientists",
    fullDescription:
      "The arduous and exhilarating pursuit of scientific discovery demands far more than the mere aggregation and analysis of data, tasks at which AI demonstrably excels. Research scientists are pioneers who pose novel, often audacious, questions, rigorously formulate groundbreaking hypotheses that dare to challenge existing paradigms, meticulously design ingenious experiments to test complex theories, and, critically, interpret often ambiguous, contradictory, or unexpected results to derive new, paradigm-shifting knowledge. This profound process involves a unique and irreplaceable blend of insatiable curiosity, razor-sharp analytical skills, innovative problem-solving, and the intuitive ability to connect seemingly disparate pieces of information to forge truly groundbreaking insights. While AI can serve as a powerful assistant for data processing, complex simulations, and identifying subtle patterns, the imaginative leap required to conceptualize entirely new avenues of inquiry, the profound ethical considerations inherent in scientific exploration, and the visionary intellectual leadership necessary to push the very boundaries of human understanding remain firmly and unequivocally within the human domain, securing the future of scientific research for human minds.",
    skills: [
      "Curiosity",
      "Analytical Skills",
      "Problem-Solving",
      "Experimental Design",
      "Pattern Recognition",
      "Hypothesis Generation",
      "Intellectual Leadership",
    ],
    image: "/images/research-scientists.jpg",
  },
  entrepreneurs: {
    title: "Entrepreneurs & Innovators",
    fullDescription:
      "The very essence of entrepreneurship and innovation is rooted in a distinctly human capacity for vision, audacious risk-taking, and the unparalleled ability to identify unmet needs and then create entirely novel solutions where none existed before. This requires a unique and irreplaceable blend of profound foresight, unwavering resilience in the face of inevitable failure, complex and iterative strategic thinking, and the charismatic ability to motivate, inspire, and lead diverse teams through uncharted and often turbulent territory. While AI can assist in analyzing market trends, optimizing business processes, or even generating basic business plans, it cannot generate the initial, visceral spark of an original idea, navigate the emotional rollercoaster and profound uncertainty of building a startup from scratch, or adapt to unforeseen challenges with the same intuitive adaptability, grit, and creative ingenuity that define the successful human entrepreneur. Entrepreneurs are not just business owners; they are the true architects of the future, driven by ambition, a unique capacity for truly novel thought, and an unparalleled drive to transform ideas into tangible realities that reshape economies and societies.",
    skills: [
      "Vision",
      "Risk-Taking",
      "Resilience",
      "Leadership",
      "Strategic Thinking",
      "Adaptability",
      "Problem-Solving",
      "Creativity",
    ],
    image: "/images/entrepreneurs.jpg",
  },
  philosophers: {
    title: "Philosophers & Ethicists",
    fullDescription:
      "These profound professions delve into the most abstract, fundamental, and existentially challenging questions of existence, morality, ethics, and the very fabric of societal values. Their demanding work involves rigorous critical thinking, sophisticated logical reasoning, and the unparalleled human capacity to explore complex ethical frameworks without the comfort of definitive 'right' or 'wrong' answers. Philosophers and ethicists meticulously analyze the nuances of human beliefs, shape and influence societal norms, and provide invaluable guidance in discussions surrounding what it truly means to be human, the nature of consciousness, and how complex societies should justly and equitably function. Artificial intelligence, while capable of processing vast repositories of ethical guidelines and identifying logical fallacies in arguments, fundamentally lacks consciousness, subjective experience, the capacity for genuine moral reasoning, or intuitive ethical insight. The nuanced understanding of intrinsic human values, the ability to grapple with profound, open-ended conceptual questions that defy algorithmic resolution, and the deep contemplation of humanity's place in the universe ensure that these roles are profoundly beyond the current, and foreseeable, capabilities of AI.",
    skills: [
      "Abstract Reasoning",
      "Logical Thinking",
      "Ethical Judgment",
      "Debate",
      "Conceptual Analysis",
      "Critical Inquiry",
      "Moral Intuition",
    ],
    image: "/images/philosophers.jpg",
  },
  "personal-coaches": {
    title: "Personal Trainers & Coaches",
    fullDescription:
      "The effectiveness of personal coaching, whether focused on fitness, career advancement, or holistic life goals, hinges entirely on the establishment of genuine rapport, a deep and intuitive understanding of individual motivations and psychological barriers, and the consistent provision of highly personalized encouragement and accountability. While AI can proficiently track workout progress, suggest generic meal plans, or even offer templated career advice, it lacks the human capacity to accurately read subtle non-verbal cues, genuinely empathize with personal struggles, celebrate the smallest victories with authentic joy, or adapt strategies based on a client's fluctuating emotional state, energy levels, or unspoken anxieties. The human coach provides an irreplaceable combination of psychological insight, motivational support, and meticulously tailored guidance that fosters not just temporary change, but profound, long-term behavioral transformation and sustainable personal growth. This intimate, trusting relationship makes personal coaching a deeply human, indispensable, and inherently AI-proof profession.",
    skills: [
      "Motivation",
      "Empathy",
      "Communication",
      "Goal Setting",
      "Adaptability",
      "Active Listening",
      "Encouragement",
    ],
    image: "/images/personal-coaches.jpg",
  },
};

// Make the component async as recommended by Next.js for server components,
// even if params is synchronous in this specific context.
export default async function JobDetailPage(context: {
  params: { id: string };
}) {
  const { id } = context.params;

  const job = jobDetails[id as keyof typeof jobDetails];

  if (!job) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {job.image && (
        <div className="mb-8 w-full max-w-2xl mx-auto">
          <Image
            src={job.image}
            alt={job.title}
            width={700}
            height={450}
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>
      )}

      <h1 className="text-4xl font-bold text-gray-800 mb-6">{job.title}</h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        {job.fullDescription}
      </p>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Key Skills:
        </h3>
        <ul className="list-disc list-inside text-gray-700">
          {job.skills.map((skill, index) => (
            <li key={index} className="mb-1">
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <Link href="/jobs">
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
          &larr; Back to all Jobs
        </Button>
      </Link>
    </div>
  );
}

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // We'll add Card component later

// Define your job data
const jobs = [
  {
    id: "healthcare",
    title: "Healthcare Professionals",
    description: "Doctors, Nurses, Therapists, and Counselors.",
  },
  {
    id: "teachers",
    title: "Teachers and Educators",
    description: "Inspiring minds and fostering human connection.",
  },
  {
    id: "social-workers",
    title: "Social Workers",
    description: "Providing empathetic support and community aid.",
  },
  {
    id: "creative-pros",
    title: "Creative Professionals",
    description: "Artists, Writers, Musicians, and Designers.",
  },
  {
    id: "psychologists",
    title: "Psychologists and Counselors",
    description: "Guiding mental and emotional well-being.",
  },
  {
    id: "skilled-trades",
    title: "Skilled Trades",
    description: "Plumbers, Electricians, Carpenters – hands-on expertise.",
  },
  {
    id: "lawyers",
    title: "Lawyers",
    description: "Navigating complex legal landscapes and advocacy.",
  },
  {
    id: "hr-specialists",
    title: "HR Specialists",
    description: "Building teams and fostering positive work environments.",
  },
  {
    id: "research-scientists",
    title: "Research Scientists",
    description: "Innovating and discovering new knowledge.",
  },
  {
    id: "entrepreneurs",
    title: "Entrepreneurs & Innovators",
    description: "Visionaries who drive new ideas and businesses.",
  },
  {
    id: "philosophers",
    title: "Philosophers & Ethicists",
    description: "Pondering big questions and guiding societal values.",
  },
  {
    id: "personal-coaches",
    title: "Personal Trainers & Coaches",
    description: "Motivating and guiding individual growth.",
  },
];

export default function JobsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Jobs Resilient to AI in the Next Decade
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map((job) => (
          <Link href={`/jobs/${job.id}`} key={job.id}>
            <Card className="h-full flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                {/* You can add an icon here later */}
                <CardTitle className="text-2xl font-semibold text-indigo-700">
                  {job.title}
                </CardTitle>
                <CardDescription>{job.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Click to learn more &rarr;
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

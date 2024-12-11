import Image from "next/image";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
      
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <Image
            src="/pic1.jpg" // Add your profile image in public folder as 'profile.jpg'
            alt="Muhammad Khubaib"
            width={120}
            height={120}
            className="rounded-full"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-800">Muhammad Khubaib</h1>
        <p className="text-xl text-gray-600">Aspiring Full-Stack-Devoloper</p>
        <p className="mt-2">
          <a href="mailto:m.khubaib2422@gmail.com" className="text-blue-500 hover:underline">
            m.khubaib2422@gmail.com
          </a>{' '}
          |{' '}
          <a href="https://linkedin.com/in/muhammadkhubaib" target="_blank" className="text-blue-500 hover:underline">
            LinkedIn
          </a>{' '}
          |{' '}
          <a href="https://github.com/M-Khubab" target="_blank" className="text-blue-500 hover:underline">
            GitHub
          </a>
        </p>
        <p>Phone Number: 03192422624</p>
      </div>

      {/* About Me Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">About Me</h2>
        <p className="mt-2 text-gray-700">
          I'm an enthusiastic Full-Stack-Devoloper with foundational knowledge in front-end and a bit of back-end
          development. I've learned core skills in HTML, CSS, JavaScript, and React, and have started exploring
          Next.js for full-stack applications. Currently, I'm focused on building my skills in both design and
          development, with hands-on experience using Firebase for backend services and Vercel for deployment.
        </p>
      </section>
      

      {/* Skills Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">Skills</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li><strong>Languages:</strong> HTML, CSS, JavaScript</li>
          <li><strong>Frameworks & Libraries:</strong> React, Next.js</li>
          <li><strong>Styling:</strong> Tailwind CSS, Bootstrap, Acternity UI,ant design,</li>
          <li><strong>Backend & Databases:</strong> Firebase, SQL,node.js,rest api's (basic understanding)</li>
          <li><strong>Tools & Platforms:</strong> GitHub, Vercel</li>
        </ul>
      </section>

      {/* Experience Section */}
      <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">Experience</h2>
          <div className="mt-4 text-gray-700">
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Full-Stack-Devoloper</h3>
              <p className="text-gray-600">Intern | Software house | Aug 2024 Till Now – Present</p>
              <ul className="list-disc list-inside mt-2">
                <li>
                  Developed responsive websites using <strong>HTML, CSS, JavaScript,</strong> and <strong>React</strong>, delivering optimized user experiences and dynamic interactions.
                </li>
                <li>
                  Integrated <strong>Firebase</strong> for database management, user authentication, and real-time data updates.
                </li>
                <li>
                  Used <strong>Next.js</strong> and <strong>Vercel</strong> to create server-rendered web applications, improving SEO and load times.
                </li>
              </ul>
            </div>
          </div>
        </section>

          {/* Projects Section */}
          <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">Here Is Some Projects For More Visit GitHub</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            
            <li>
              <a href="https://github.com/M-Khubab/next-website" target="_blank" className="text-blue-500 hover:underline">
                Project 3: Animation Website
              </a> – Animation website using next.js 
            </li>
            <li>
              <a href="https://github.com/M-Khubab/business-website" target="_blank" className="text-blue-500 hover:underline">
                Project 2: Simple Website
              </a> – simple website using HTML,CSS and js.
            </li>
          </ul>
        </section>

      {/* Education Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">Education</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li><strong>Online Courses:</strong></li>
          <li>Front-End Web Development (HTML, CSS, JavaScript) – YouTube</li>
          <li>React Basics – YouTube</li>
          <li>Introduction to Next.js – YouTube</li>
          <li>O-level's</li>
          <li>Hifz</li>
          <li>Arabic</li>
        </ul>
      </section>
    </div>
  </div>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 p-6">
      <header className="mb-10 text-center">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={120}
          height={30}
          className="mx-auto mb-4 dark:invert"
        />
        <h1 className="text-3xl sm:text-4xl font-bold text-purple-900 mb-2">University of Rajasthan</h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-blue-800">UG Admissions Process</h2>
      </header>
      <main className="flex flex-col items-center gap-8 bg-white/80 rounded-xl shadow-lg p-8 w-full max-w-lg">
        <p className="text-lg text-gray-700 text-center mb-4">
          Download the official University of Rajasthan Undergraduate Admissions Process PDF for the latest information and guidelines.
        </p>
        <a
          href="/UoR_UG_Admissions_Process.pdf"
          download
          className="inline-block px-6 py-3 bg-purple-700 text-white font-semibold rounded-lg shadow hover:bg-purple-800 transition-colors text-lg"
        >
          Download Admissions Process PDF
        </a>
      </main>
      <footer className="mt-12 text-gray-500 text-sm text-center">
        &copy; {new Date().getFullYear()} University of Rajasthan. All rights reserved.
      </footer>
    </div>
  );
}

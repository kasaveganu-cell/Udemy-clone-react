export default function TrustedCompanies() {
  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Netflix",
    "Spotify",
    "Adobe",
    "Meta",
    "IBM",
  ];

  return (
    <section className="px-6 md:px-16 py-20 bg-white">

      <div className="text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Trusted By Top Companies
        </h2>

        <p className="text-gray-500 mt-4 text-lg">
          Learners from the world's leading companies trust LearnHub.
        </p>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">

        {companies.map((company) => (
          <div
            key={company}
            className="bg-gray-50 border border-gray-100 rounded-3xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >

            <h3 className="text-2xl font-bold text-gray-700">
              {company}
            </h3>

          </div>
        ))}

      </div>

    </section>
  );
}
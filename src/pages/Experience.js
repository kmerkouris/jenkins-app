export default function Experience() {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-2">Experience</h2>
      <div className="mb-4">
        <h3 className="font-bold">Netcompany-Intrasoft, Athens, Greece | Hybrid</h3>
        <p className="italic">Full Stack Software Engineer (Jul 2024 - Present)</p>
        <ul className="list-disc list-inside ml-4">
          <li>Web development with Node.js, React.js, and Docker</li>
          <li>Maintained CI/CD pipelines with Jenkins and GitLab</li>
          <li>Configured OPA policies and Spring Cloud Gateway</li>
        </ul>
        <p className="italic mt-2">Junior Full Stack Software Engineer (Intern) (Jan 2024 - Jul 2024)</p>
        <ul className="list-disc list-inside ml-4">
          <li>Supported development tasks and participated in code reviews</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold">Technon</h3>
        <p className="italic">IT Network and Security Engineer (Oct 2023 - Dec 2023)</p>
        <ul className="list-disc list-inside ml-4">
          <li>Conducted IT audits and configured Cisco routers</li>
          <li>Integrated network systems with VirtualBox and ITSM tools</li>
        </ul>
      </div>
    </section>
  );
}

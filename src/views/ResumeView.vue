<template>
  <div class="d-flex vh-100 overflow-hidden">
    <!-- Sidebar -->
    <div
      class="bg-dark text-white col-4 p-3 d-flex flex-column align-items-center"
    >
      <div class="text-center">
        <img
          src="@/assets/headshot2.jpg"
          class="img-fluid rounded-circle mb-4"
          alt="Your Photo"
        />
      </div>
      <nav id="list-example" class="list-group w-100">
        <a class="list-group-item list-group-item-action" href="#list-item-1"
          >Summary</a
        >
        <a class="list-group-item list-group-item-action" href="#list-item-2"
          >Experience</a
        >
        <a class="list-group-item list-group-item-action" href="#list-item-3"
          >Education</a
        >
        <a class="list-group-item list-group-item-action" href="#list-item-4"
          >Projects</a
        >
        <a class="list-group-item list-group-item-action" href="#list-item-5"
          >Skills</a
        >
        <a class="list-group-item list-group-item-action" href="#list-item-6"
          >Volunteer</a
        >
      </nav>
    </div>

    <!-- Main Content -->
    <div
      class="col-8 flex-fill overflow-auto p-4 mb-5 text-start"
      id="resume-content"
    >
      <div
        class="scrollspy-example"
        data-bs-spy="scroll"
        data-bs-target="#list-example"
        data-bs-smooth-scroll="true"
        data-bs-offset="80"
        tabindex="0"
      >
        <section id="list-item-1" class="mb-4">
          <h3>SUMMARY</h3>
          <p>
            Motivated IT professional with a passion for problem-solving and
            customer support. Recent graduate of Forsyth Technical Community
            College with an Associate’s degree in IT - Computer Programming and
            Software Development, with a strong foundation in troubleshooting,
            networking, and modern software development practices. Seeking an
            entry-level role in IT to apply technical skills, support end-users,
            and troubleshoot issues in a professional setting. Known for
            excellent communication, drive, attention to detail, and an
            eagerness to learn.
          </p>
        </section>
        <section id="list-item-2" class="mb-4">
          <h3>EXPERIENCE</h3>
          <h5>CAPSTONE PROJECT</h5>
          <p>
            Forsyth Technical Community College, Winston-Salem, NC
            <br />
            January 2025 - May 2025
            <br />
            Working collaboratively with over 50 peers in the graduating IT
            class to design, develop, and implement a retail website
          </p>
          <ul>
            <li>
              Analyze system specifications to architect a deliverable product
            </li>
            <li>
              Implement development environments using GitHub Codespaces and VS
              Code – Dev Containers.
            </li>
            <li>
              Document build procedures for environments on GitHub (View full
              codebase:
              <a
                href="https://github.com/Cyber-Kaeh/elevate-retail"
                target="_blank"
                >https://github.com/Cyber-Kaeh/elevate-retail</a
              >).
            </li>
            <li>
              Implement a containerized MSSQL instance in Docker for the test
              database while maintaining parity with the production database.
            </li>
            <li>
              Troubleshoot errors or issues related to installation,
              environments, deployments, dependencies, database connections, or
              general IT-related problems for all teams.
            </li>
            <li>
              Implement efficient, security-first coding practices using
              Python’s Flask framework, SQL-Alchemy, Werkzeug, and CSRF
              protection tokens.
            </li>
            <li>
              Create an intuitive and responsive front-end using Bootstrap 5,
              Jinja templating, and AJAX methodology.
            </li>
          </ul>
          <h5>WEB APP DEVELOPER INTERN</h5>
          <p>
            Forsyth Technical Community College, Winston-Salem, NC
            <br />
            February 2024 - July 2024
            <br />
            Working on a small team of student interns under the supervision of
            a senior software developer to create a statistical calculator for
            the school's math department.
          </p>
          <ul>
            <li>
              Draw from prior knowledge of basic HTML/CSS to create a visual
              interface for testing statistical calculations.
            </li>
            <li>
              Learn JavaScript to leverage the math.js library, allowing for
              fast processing of complex mathematical computations.
            </li>
            <li>
              Work independently or with a small team to deliver functional code
              in a small window of time.
            </li>
          </ul>
          <h5>RETAIL SUPERVISOR</h5>
          <p>
            Gabe's, Lexington, NC
            <br />
            September 2024 - March 2025
            <br />
            Working in a high-volume retail outlet store to deliver support,
            value, and assistance to customers as well as team members.
          </p>
          <ul>
            <li>
              Resolve escalated customer issues and provide equitable solutions.
            </li>
            <li>
              Troubleshoot point of sale systems, hand-held devices, office
              computers, and printers. Escalating to the company helpdesk
              ticketing system if necessary.
            </li>
            <li>
              Execute strategic plans to minimize shrinkage and enhance
              operational efficiency.
            </li>
            <li>
              Successfully perform opening and closing functions, including cash
              office execution and alarm resolution during and after hours.
            </li>
          </ul>
        </section>
        <section id="list-item-3" class="mb-4">
          <h3>EDUCATION</h3>
          <h5>
            Associate’s of Applied Science in IT, Computer Programming and
            Software Development
          </h5>
          <p>
            Forsyth Technical Community College, Winston-Salem, NC
            <br />
            Graduated: May 2025
            <br />
          </p>
          <ul>
            <li>GPA 4.0</li>
            <li>Distinguished member of the President's List</li>
            <li>
              Relevant coursework: Python Programming, Networking Foundations,
              Database Management, Security Concepts, Ethics in High Technology,
              Systems Design and Analysis
            </li>
          </ul>
          <h5>MICROSOFT CERTIFIED: AZURE DATAFUNDMENTALS (DP-900)</h5>
          <p>
            Credential ID: 1D65ED49149EED2F | Certification number:
            20AECR-FA8560
            <br />
            February 2025
          </p>
        </section>
        <section id="list-item-4" class="mb-4">
          <h3>PROJECTS</h3>
          <h5>VIRTUALIZATION SERVER</h5>
          <p>
            Implementation of Proxmox PVE 8 on a retired enterprise desktop
            computer. Despite being limited to a 4th-generation i7 processor, it
            easily hosts a combination of around eight separate virtual machines
            and LXC containers. Currently managing self-hosted instances such as
            Nextcloud private cloud, and Kasm Workspaces (ephemeral desktops or
            appliances based on Docker).
          </p>
          <h5>HOME NETWORK</h5>
          <ul>
            <li>
              Router and switch management to provide network segmentation
            </li>
            <li>
              Self-hosted Twingate connector to provide safe remote connections
              without port-forwarding
            </li>
            <li>DNS Sinkhole provided by self-hosted AdguardHome</li>
          </ul>
          <h5>PERSONAL WEBSITE</h5>
          <p>
            Design, implement, and deploy a personal website with a clean UI/UX
            and mobile-first responsiveness. Currently re- designing the
            back-end with Django to support a blog.
          </p>
          <ul class="two-column">
            <li>Vue3 and Bootstrap 5</li>
            <li>Hosting provided by Hostinger.com</li>
            <li>CI/CD with GitHub Actions</li>
            <li>Version control with Git</li>
          </ul>
        </section>
        <section id="list-item-5" class="mb-4">
          <h3>SKILLS</h3>
          <p>
            Foundational knowledge in core computing concepts, networking,
            virtualization, cloud computing, and cybersecurity.<br />
            Proven ability in communication, leadership, collaboration,
            professionalism, and personal development.
          </p>
          <ul class="two-column">
            <li>Windows Home/Pro/Server</li>
            <li>Microsoft 365</li>
            <li>Microsoft Teams</li>
            <li>RDP/VNC Remote connections</li>
            <li>VS Code</li>
            <li>SQL</li>
            <li>SQL Server, SSMS</li>
            <li>Python</li>
            <li>IoT</li>
            <li>Linux (Fedora, Debian)</li>
            <li>Proxmox PVE</li>
            <li>Shell Scripting (Bash)</li>
            <li>VI, VIM, Nano</li>
            <li>Docker</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Java</li>
            <li>JavaScript/HTML/CSS</li>
          </ul>
        </section>
        <section id="list-item-6" class="mb-4">
          <h3>VOLUNTEER ACTIVITIES</h3>
          <h5>Skills USA Competition</h5>
          <p>
            Winston-Salem, NC
            <br />
            Aprtil 2024
            <br />
            Programming and Software Development Competitor
          </p>
          <ul>
            <li>
              Competed in a state-level competition for programming and software
              development.
            </li>
            <li>
              Demonstrated ability to work in a high pressure environment with
              little time to complete tasks.
            </li>
            <li>
              Demonstrated problem-solving skills, and technical knowledge
              through a 50 question quiz.
            </li>
          </ul>
          <h5>ITP (Information Technology Professionals) Club</h5>
          <p>
            Winston-Salem, NC
            <br />
            August 2023 - Aprtil 2024
            <br />
            Club Member
          </p>
          <ul>
            <li>
              Engage in discussions about IT topics like AI, cybersecurity, and
              programming during monthly meetings.
            </li>
            <li>
              Participate in cybersecurity challenges and competitions,
              developing teamwork and problem-solving skills.
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResumeView",
};
</script>

<style scoped>
/* Scrollspy Active Link Styling */
.list-group-item.active {
  background-color: #17a2b8;
  color: white;
  font-weight: bold;
}

/* Main Content Styling */
.scrollspy-example {
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

#resume-content {
  height: 100%;
  margin-bottom: 70px;
}

section {
  scroll-margin-bottom: 72px;
}

.two-column {
  column-count: 2;
  column-gap: 1rem;
  list-style-position: inside;
}

@media (max-width: 768px) {
  .list-group-item {
    font-size: 0.8rem;
  }
  .scrollspy-example {
    padding: 1rem;
    margin: 0 !important;
  }
  p,
  li {
    font-size: 0.8rem;
  }
  .col-4,
  .col-8 {
    padding: 0.25rem !important;
  }
  #resume-content {
    margin-bottom: 60px;
  }
}
</style>

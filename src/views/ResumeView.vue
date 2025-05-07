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
            <ul>
              <li>Analyze system specifications to architect a deliverable product</li>
              <li>Implement development environments using GitHub Codespaces and VS Code – Dev Containers.</li>
              <li>Document build procedures for environments on GitHub (View full codebase: <a href="https://github.com/Cyber-Kaeh/elevate-retail" target="_blank">https://github.com/Cyber-Kaeh/elevate-retail</a>).</li>
              <li>Implement a containerized MSSQL instance in Docker for the test database while maintaining parity with the production database.</li>
              <li>Troubleshoot errors or issues related to installation, environments, deployments, dependencies, database connections, or general IT-related problems for all teams.</li>
              <li>Implement efficient, security-first coding practices using Python’s Flask framework, SQL-Alchemy, Werkzeug, and CSRF protection tokens.</li>
              <li>Create an intuitive and responsive front-end using Bootstrap 5, Jinja templating, and AJAX methodology.</li>
            </ul>
          </p>
          <h5>WEB APP DEVELOPER INTERN</h5>
          <p>
            Forsyth Technical Community College, Winston-Salem, NC
            <br />
            February 2024 - July 2024
            <br />
            Working on a small team of student interns under the supervision of a senior software developer to create a statistical calculator for the school's math department.
            <ul>
              <li>Draw from prior knowledge of basic HTML/CSS to create a visual interface for testing statistical calculations.</li>
              <li>Learn JavaScript to leverage the math.js library, allowing for fast processing of complex mathematical computations.</li>
              <li>Work independently or with a small team to deliver functional code in a small window of time.</li>
            </ul>
          </p>
          <h5>RETAIL SUPERVISOR</h5>
          <p>
            Gabe's, Lexington, NC
            <br />
            September 2024 - March 2025
            <br />
            Working in a high-volume retail outlet store to deliver support, value, and assistance to customers as well as team members.
            <ul>
              <li>Resolve escalated customer issues and provide equitable solutions.</li>
              <li>Troubleshoot point of sale systems, hand-held devices, office computers, and printers. Escalating to the company helpdesk ticketing system if necessary.</li>
              <li>Execute strategic plans to minimize shrinkage and enhance operational efficiency.</li>
              <li>Successfully perform opening and closing functions, including cash office execution and alarm resolution during and after hours.</li>
            </ul>
          </p>
        </section>
        <section id="list-item-3" class="mb-4">
          <h3>EDUCATION</h3>
          <h5>Associate’s of Applied Science in IT, Computer Programming and Software Development</h5>
          <p>
            Forsyth Technical Community College, Winston-Salem, NC
            <br />
            Graduated: May 2025
            <br />
            <ul>
              <li>GPA 4.0</li>
              <li>Distinguished member of the President's List</li>
              <li>Relevant coursework: Python Programming, Networking Foundations, Database Management, Security Concepts, Ethics in High Technology, Systems Design and Analysis</li>
            </ul>
          </p>
        </section>
        <section id="list-item-4" class="mb-4">
          <h4>Projects</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi ea,
            voluptatum impedit quidem, ratione quis suscipit natus quibusdam
            placeat expedita laudantium illo eius totam eum iure. Quam, nam
            itaque sunt molestias aspernatur, provident similique voluptatem
            harum at fugit eos quis, incidunt doloremque esse inventore! Quo
            itaque alias vitae et facere expedita harum deserunt eum non
            laborum, est, optio perferendis nam ullam sunt voluptas. Mollitia
            iste repellendus libero ut. Commodi nulla quia quae fuga nihil
            debitis nemo voluptatem voluptatibus? A assumenda velit impedit, quo
            quod magnam. Labore porro quas iure eaque cum veritatis magni quod
            cupiditate! Ratione blanditiis asperiores sint corporis?
          </p>
        </section>
        <section id="list-item-5" class="mb-4">
          <h4>Skills</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
            cumque voluptate vel sequi dolores eius dolore perferendis
            accusantium. Harum atque iusto, alias id reiciendis tempore,
            reprehenderit asperiores tempora in voluptas ea ducimus porro libero
            deleniti esse quaerat exercitationem provident aliquam! Adipisci
            nemo, praesentium nisi harum cupiditate facere corrupti nostrum
            excepturi quas veniam ullam sit molestiae beatae aspernatur
            provident, a voluptatum doloribus debitis iusto nesciunt vitae illum
            quo cum. Reprehenderit dolorum quasi architecto aspernatur illum
            sunt eveniet adipisci suscipit sit velit, consequuntur vel nostrum
            nesciunt, culpa doloribus praesentium magnam porro harum ad
            temporibus minus vero vitae voluptates cumque! Doloribus, dolorem
            minus?
          </p>
        </section>
        <section id="list-item-6" class="mb-4">
          <h4>Volunteer</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quos
            aspernatur eum recusandae quia, quo, aliquid magni odit voluptatibus
            repellat tenetur obcaecati! Perferendis, possimus repudiandae?
            Corrupti deleniti, ex rerum nesciunt ea, perspiciatis repellendus
            necessitatibus unde eum repellat illo! Similique velit est fugit
            esse? Autem nostrum laborum repudiandae consequatur cumque, nesciunt
            tempora laboriosam explicabo enim voluptas expedita fuga vitae
            beatae? Saepe, perspiciatis, quam dignissimos adipisci optio
            excepturi ipsum eos harum voluptatem quaerat ex eligendi illum,
            nobis soluta. Ipsa vel soluta, vitae iure vero, reiciendis laborum
            inventore maiores omnis, distinctio totam explicabo. Quis quidem,
            impedit quo suscipit nobis expedita soluta facilis velit....
          </p>
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
}

section {
  scroll-margin-bottom: 70px;
}

@media (max-width: 768px) {
  .list-group-item {
    font-size: 0.8rem;
  }
  .scrollspy-example {
    padding: 1rem;
    margin: 0 !important;
  }
  p {
    font-size: 0.8rem;
  }
  .col-4,
  .col-8 {
    padding: 0.25rem !important;
  }
}
</style>

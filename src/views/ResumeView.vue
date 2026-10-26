<template>
  <div class="d-flex vh-100 overflow-hidden resume-layout">
    <!-- Sidebar. Under 768px the layout stacks: this becomes a full-width
         header with the portrait above a horizontally scrolling row of
         section links, so the resume text gets the full viewport width
         instead of the 250px that col-8 left it. -->
    <div
      class="bg-dark text-white col-4 p-3 d-flex flex-column align-items-center resume-sidebar"
    >
      <div class="text-center resume-portrait">
        <img
          src="@/assets/headshot2.jpg"
          class="img-fluid rounded-circle mb-4"
          alt="Anthony Allen"
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
          >Home Lab</a
        >
        <a class="list-group-item list-group-item-action" href="#list-item-4"
          >Education</a
        >
        <a class="list-group-item list-group-item-action" href="#list-item-5"
          >Skills</a
        >
      </nav>
      <a href="/Anthony_IT_Resume.pdf" download class="btn mt-3" target="_blank"
        >Download Resume</a
      >
    </div>

    <!-- Main Content -->
    <div
      class="col-8 flex-fill overflow-auto p-4 mb-5 text-start"
      id="resume-content"
      ref="scrollContainer"
    >
      <!-- Section highlighting is driven from #resume-content, the element
           that actually scrolls; see the script below. The data-bs-spy
           attributes that used to sit on this inner div made Bootstrap's
           data-API spin up an instance rooted on a non-scrolling element,
           which fought the real one over the .active class. -->
      <div class="scrollspy-example" tabindex="0">
        <section id="list-item-1" class="mb-4">
          <h3>SUMMARY</h3>
          <p>
            Automation-focused IT professional who builds Ansible, Python, and
            Bash automation to provision and validate macOS and Ubuntu Server
            systems for production, and uses agentic AI tools (Claude Code) to
            ship working software quickly. Pursuing a B.S. in Software
            Engineering at WGU; seeking a DevOps or Systems Engineer role.
          </p>
        </section>
        <section id="list-item-2" class="mb-4">
          <h3>EXPERIENCE</h3>
          <h5>T1V, Charlotte, NC</h5>
          <p>
            Production Setup and QC
            <br />
            October 2025 &ndash; Present
          </p>
          <ul>
            <li>
              Built a visual regression testing framework for ThinkHub,
              T1V&rsquo;s large-format touch collaboration software, whose
              custom rendering engine is invisible to accessibility-based tools
              like XCUITest and Appium. The suite replays touch and gesture
              inputs through Peekaboo, captures screenshots at checkpoints, and
              scores them against baseline images using structural similarity
              matching, delivering automated testing that the company had
              pursued for about 10 years.
            </li>
            <li>
              Scaled the framework to 35 tests and about 400 checkpoints
              covering embedded browsers, whiteboards, annotation, multitouch,
              and session save/restore; one orchestrator runs the full suite and
              publishes a live dashboard, HTML reports with visual diffs, and
              CI-style exit codes. Designed and built with Claude Code,
              including custom skills and subagents that encode how to run the
              suite, triage failures, and write new tests.
            </li>
            <li>
              Modernized the Ubuntu Server relay image (22.04 to 24.04, Python 2
              to Python 3) and expanded the imaging script to handle most
              configuration itself, retiring 5+ years of technical debt and
              cutting hands-on imaging time from ~30 to ~5 minutes per device.
            </li>
            <li>
              Built a weekly smoke-test pipeline that rebuilds the relay image
              in a disposable libvirt/KVM VM and emails results to support;
              pinned RabbitMQ and Erlang through APT with an offline repository
              after an upstream update broke production images.
            </li>
            <li>
              Deployed Ansible in Docker-based Execution Environments, triggered
              by a Flask phone-home service that registers newly imaged devices
              and runs their playbooks.
            </li>
            <li>
              Maintained the macOS imaging script across releases, including
              macOS 27&rsquo;s relocated TCC database and MAC address
              restrictions; built a scripted UTM VM workflow for near-instant
              clean test resets.
            </li>
            <li>
              Developed two Python terminal tools: IntegralConfigurator
              (Textual), which auto-detects HDFury Integral 2 devices over USB
              serial, and ants-configurator, a PEX-packaged tool for
              post-imaging Mac setup.
            </li>
            <li>
              Image, stage, and QC 20&ndash;40 devices per month (Mac Minis, Mac
              Studios, Ubuntu relay NUCs), verifying hardware and software
              configuration before customer shipment. Coordinate handoffs with
              assembly and attend operations and project meetings.
            </li>
            <li>
              Troubleshoot hardware and software failures on in-house units and
              field returns, using system logs and disk diagnostics to find root
              causes; initiate and track RMAs for faulty components.
            </li>
          </ul>
          <h5>Gabe&rsquo;s, Lexington, NC</h5>
          <p>
            Retail Supervisor
            <br />
            September 2024 &ndash; March 2025
          </p>
          <ul>
            <li>
              Led store associates through daily operations, including opening,
              closing, and cash office duties.
            </li>
            <li>
              Resolved escalated customer issues and carried out plans to reduce
              shrink and improve operational efficiency.
            </li>
          </ul>
        </section>
        <section id="list-item-3" class="mb-4">
          <h3>HOME LAB</h3>
          <h5>Self-Hosted Home Lab</h5>
          <p>
            Personal environment for learning and experimentation
            <br />
            Ongoing
          </p>
          <ul>
            <li>
              Design and maintain a segmented network: OPNsense firewall with
              VLANs for home, development, and isolated/IoT traffic; Unbound
              DNS; Omada wireless; and Twingate for remote access without port
              forwarding.
            </li>
            <li>
              Run Proxmox hosting ~8 VMs and LXC containers, including a Flask
              app behind Gunicorn and Nginx.
            </li>
            <li>
              Built a local AI stack (Ollama, GPU passthrough to Docker) and n8n
              workflows that file notes into Obsidian.
            </li>
          </ul>
        </section>
        <section id="list-item-4" class="mb-4">
          <h3>EDUCATION &amp; CERTIFICATIONS</h3>
          <h5>Western Governors University</h5>
          <p>
            B.S. Software Engineering
            <br />
            Expected June 2027
          </p>
          <h5>Forsyth Technical Community College</h5>
          <p>
            A.A.S. Information Technology (High Honors, 4.0 GPA)
            <br />
            May 2025
          </p>
          <h5>Certifications</h5>
          <ul>
            <li>CompTIA Project+ &mdash; July 2026</li>
            <li>
              Microsoft Certified: Azure Data Fundamentals (DP-900) &mdash;
              February 2025
            </li>
          </ul>
        </section>
        <section id="list-item-5" class="mb-4">
          <h3>TECHNICAL SKILLS</h3>
          <h5>Automation &amp; DevOps</h5>
          <p>
            Ansible, Bash, Python (Flask, Textual), Git, GitHub, GitLab, GitHub
            Actions
          </p>
          <h5>Systems &amp; Virtualization</h5>
          <p>
            Ubuntu Server, macOS, Windows, Docker, libvirt/KVM, Proxmox, LXC,
            UTM, OPNsense, Nginx
          </p>
          <h5>AI &amp; Collaboration</h5>
          <p>
            Claude Code (agentic workflows, skills), Claude API, Ollama, n8n,
            Jira, Google Workspace
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
// Bootstrap's ScrollSpy is deliberately not used here. It drives the
// highlight from IntersectionObserver threshold crossings, and it clears the
// active link whenever any observed section reports isIntersecting: false.
// A section taller than roughly twice the scroll container can never reach
// the 0.5 threshold, so once the section above it scrolls out and clears the
// highlight, nothing re-fires until the next boundary and the nav goes blank
// mid-section. Experience measures 1562px against a 726px container at
// narrow widths. Tuning threshold and rootMargin only moved which viewports
// broke, because the underlying behaviour depends on the order entries
// arrive in a batch. The scroll position tells us the answer directly, so
// this computes it instead.

const MARKER_FRACTION = 0.25; // the line, 25% down the container, that decides

export default {
  name: "ResumeView",
  data() {
    return {
      sections: [],
      links: new Map(),
      activeId: null,
      rafId: null,
    };
  },
  mounted() {
    const container = this.$refs.scrollContainer;
    if (!container) return;

    this.sections = Array.from(container.querySelectorAll("section[id]"));
    for (const a of document.querySelectorAll("#list-example a[href^='#']")) {
      this.links.set(a.getAttribute("href").slice(1), a);
      a.addEventListener("click", this.onNavClick);
    }

    container.addEventListener("scroll", this.onScroll, { passive: true });
    window.addEventListener("resize", this.onScroll, { passive: true });
    this.update();
  },
  beforeUnmount() {
    const container = this.$refs.scrollContainer;
    container?.removeEventListener("scroll", this.onScroll);
    window.removeEventListener("resize", this.onScroll);
    for (const a of this.links.values()) {
      a.removeEventListener("click", this.onNavClick);
    }
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.links.clear();
    this.sections = [];
  },
  methods: {
    // Offset of an element from the top of the scrollable content. Measured
    // rather than read from offsetTop, which is relative to the nearest
    // positioned ancestor and not necessarily the scroll container.
    offsetWithin(el, container) {
      return (
        el.getBoundingClientRect().top -
        container.getBoundingClientRect().top +
        container.scrollTop
      );
    },
    onScroll() {
      // Coalesce bursts of scroll events into one measurement per frame.
      if (this.rafId) return;
      this.rafId = requestAnimationFrame(() => {
        this.rafId = null;
        this.update();
      });
    },
    update() {
      const container = this.$refs.scrollContainer;
      if (!container || !this.sections.length) return;

      const atBottom =
        container.scrollTop + container.clientHeight >=
        container.scrollHeight - 2;

      let current = this.sections[0];
      if (atBottom) {
        // The last section often cannot scroll high enough to cross the
        // marker, so pin it once the container bottoms out.
        current = this.sections[this.sections.length - 1];
      } else {
        const marker =
          container.scrollTop + container.clientHeight * MARKER_FRACTION;
        for (const section of this.sections) {
          if (this.offsetWithin(section, container) <= marker) {
            current = section;
          }
        }
      }

      if (current.id === this.activeId) return;
      this.activeId = current.id;
      for (const [id, link] of this.links) {
        link.classList.toggle("active", id === current.id);
      }
    },
    onNavClick(event) {
      const href = event.currentTarget.getAttribute("href");
      const target = href && document.getElementById(href.slice(1));
      const container = this.$refs.scrollContainer;
      if (!target || !container) return;
      event.preventDefault();
      container.scrollTo({
        top: this.offsetWithin(target, container),
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
/* Scrollspy Active Link Styling */
.list-group-item.active {
  /* White on the #17A2B8 accent measured 3.04:1, under the 4.5:1 AA needs
     for 12.8px bold. The primary teal clears it at 5.33:1. */
  background-color: #00758f;
  border-color: #00758f;
  color: #ffffff;
  font-weight: bold;
}

/* Main Content Styling */
.scrollspy-example {
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.btn {
  /* Only background-color was set here, so the label fell back to Bootstrap's
     default grey -- #4F4F4F on #17A2B8 is 2.69:1. White on the dark sidebar
     with the brand blue-teal label clears it at 12.51:1, and matches the
     hero button. */
  background-color: #ffffff;
  border-color: #ffffff;
  color: #0b3954;
  font-weight: 700;
}
.btn:hover,
.btn:focus {
  background-color: #e3f2fd;
  border-color: #e3f2fd;
  color: #0b3954;
}

#resume-content {
  height: 100%;
  overflow-y: auto;
  padding-top: 1rem;
  margin-bottom: 70px;
}

section {
  scroll-margin-top: 10px;
  margin-top: 0;
}

.two-column {
  column-count: 2;
  column-gap: 1rem;
  list-style-position: inside;
}

@media (max-width: 768px) {
  /* Stack instead of a 33/67 split. col-4/col-8 carry no breakpoint, so on a
     375px phone the text column was 250px wide and wrapped after three or
     four words. Stacked, it gets the full width. */
  .resume-layout {
    flex-direction: column;
  }
  .resume-sidebar {
    width: 100% !important;
    max-width: 100% !important;
    flex: 0 0 auto;
    padding: 0.6rem 0.5rem !important;
  }
  /* Portrait stays, just small enough not to cost a third of the screen
     before any resume text appears. */
  .resume-portrait img {
    width: 84px;
    height: 84px;
    object-fit: cover;
    margin-bottom: 0.6rem !important;
  }
  /* Section links become a swipeable row of chips. */
  #list-example {
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 0.4rem;
    padding-bottom: 0.2rem;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  #list-example::-webkit-scrollbar {
    display: none;
  }
  #list-example .list-group-item {
    font-size: 0.78rem;
    white-space: nowrap;
    border-radius: 999px !important;
    border: 1px solid rgba(255, 255, 255, 0.25);
    padding: 0.3rem 0.8rem;
    width: auto;
    flex: 0 0 auto;
  }
  .resume-sidebar .btn {
    font-size: 0.72rem;
    padding: 0.35rem 0.9rem;
    margin-top: 0.6rem !important;
  }
  /* Take the remaining height and keep scrolling inside this element, which
     is what the section highlighting measures against. */
  #resume-content {
    flex: 1 1 auto;
    min-height: 0;
    width: 100% !important;
    max-width: 100% !important;
    padding: 0.75rem !important;
    margin-bottom: 60px;
  }
  .scrollspy-example {
    padding: 1rem;
    margin: 0 !important;
  }
  p,
  li {
    font-size: 0.85rem;
  }
}

/* Short viewports, chiefly a phone held in landscape. The stacking rules
   above key off width, and a landscape phone is ~812px wide, so it gets the
   side-by-side layout without the height to support it: the sidebar needed
   461px inside a 375px shell, which clipped the last two nav items and the
   download button with no way to scroll to them. The wrapper is vh-100 with
   overflow hidden, so nothing spills into view. Shrink the portrait, tighten
   the controls, and let the sidebar scroll if it still does not fit. */
@media (max-height: 520px) {
  .resume-sidebar {
    overflow-y: auto;
  }
  .resume-portrait img {
    width: 72px;
    height: 72px;
    object-fit: cover;
    margin-bottom: 0.5rem !important;
  }
  .resume-sidebar .list-group-item {
    font-size: 0.75rem;
    padding: 0.25rem 0.6rem;
  }
  .resume-sidebar .btn {
    font-size: 0.7rem;
    padding: 0.3rem 0.8rem;
    margin-top: 0.4rem !important;
  }
}
</style>

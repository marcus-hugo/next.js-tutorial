import Link from "next/link"

export default function Contact() {
  return (
    <main>
      <div>
        <h1>Contact Me</h1>
        <p>I'm currently looking for a role as a junior frontend web developer. Please feel free to reach out to learn more about me or if you just want to connect!</p>
        <ul class="social-links-wrapper f jc-c g1">
          <li>
            <a class="social-icons__link" href="https://www.linkedin.com/in/marcus-hugo-27823b32" target="_blank" rel="noopener noreferrer">
              <i class="bi bi-linkedin"></i>LinkedIn
            </a>
          </li>
          <li>
            <a class="social-icons__link" href="https://github.com/marcus-hugo" target="_blank" rel="noopener noreferrer">
              <i class="bi bi-github"></i>Github
            </a>
          </li>
          <li>
            <a class="social-icons__link" href="mailto:phantomboss300@yahoo.com">
              <i class="bi bi-envelope-fill"></i>Email
            </a>
          </li>
        </ul>
      </div>
    </main>
  )
}

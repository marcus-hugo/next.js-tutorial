export default function About(props) {
  return (
    <main>
      <div>
        <h1>About Me</h1>
        <p>I enjoy learing all things about web development. In every project, I strive for semantic HTML5, effecient CSS, and vanilla JavaScript, all the while keeping accessibilty, and a beautiful UI/UX in mind.</p>
        <p>My background is in art, music, and auto mechanics. I've dabbled in painting, photography, music recording, sythesizers, and auto mechanics. I've always enjoyed technology. I think it's a very challenging field leaning more on the abstract.</p>
        <p>I'm currently learning Eleventy, React, and now Next.js. When I'm not coding I enjoy watching movies and playing music.</p>
        <p>I have {props.repoCount} public repos on GitHub.</p>
        <a href="https://github.com/marcus-hugo" target="_blank" rel="noopener noreferrer">
          Visit my GitHub Profile
        </a>
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://api.github.com/users/marcus-hugo")
  const data = await response.json()

  return {
    props: {
      repoCount: data.public_repos
    },
    revalidate: 10
  }
}

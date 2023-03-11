export default function About(props) {
  return (
    <main>
      <div>
        <h1>About Me</h1>
        <p>Welcome to this amazing about page. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro dolore officiis atque voluptas, quas, repellendus cum, magnam a alias unde reiciendis voluptates aliquam maxime laborum? Quae omnis eius impedit et?</p>
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

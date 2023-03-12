import Head from "next/head"

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Marcus Hugo's Blog</title>
      </Head>
      <main>
        <div>
          <span className="hero_wavy-hand">&#128075;</span>
          <h1>Hi, I'm Marcus Hugo!</h1>
          <h2>Frontend Web Developer.</h2>
          <p>I'm a passionate self-taught frontend web developer, with over 2 years experience creating user friendly, accessible, and responsive web experiences.</p>
        </div>
      </main>
    </>
  )
}

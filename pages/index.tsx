import Head from "next/head"
import styles from "./main.module.sass"

const IndexPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Frontend Mentor | Single Price Grid Component</title>
      <link rel="icon" href="/images/favicon.png" type="image/x-icon" />
      <meta name="description" content="subscription plan" />
    </Head>
    <div className={styles.main}>
      <div className={styles.description}>
        <h1>Join our community</h1>
        <h2>30-day, hassle-free money back guarantee</h2>
        <p>
          Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about
          honing their skills.
        </p>
      </div>
      <div className={styles.price}>
        <h2>Monthly Subscription</h2>
        <div>
          <span>$29</span>
          <span>per month</span>
        </div>
        <p>Full access for less than $1 a day</p>
        <button>Sign Up</button>
      </div>
      <div className={styles.why}>
        <h2>Why Us</h2>
        <ul>
          <li>Tutorials by industry experts</li>
          <li>Peer & expert code review</li>
          <li>Coding exercises</li>
          <li>Access to our GitHub repos</li>
          <li>Community forum</li>
          <li>Flashcard decks</li>
          <li>New videos every week</li>
        </ul>
      </div>
    </div>
  </div>
)

export default IndexPage

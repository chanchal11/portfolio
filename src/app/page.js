import Image from 'next/image'
import './page.module.css';

function Home() {
  return (
    <div className="app">
      <header className="header">
        {/* <img
          src="https://media.licdn.com/dms/image/C4D03AQFnVUsyEmpiNw/profile-displayphoto-shrink_800_800/0/1625329608946?e=1712793600&v=beta&t=q9tQg_cVTmIFTrjshq44H_RGtdL7XXG_auH7-Omj3mA"
          alt="Profile"
          className="profile-pic"
        /> */}
        <Image
              src="https://media.licdn.com/dms/image/C4D03AQFnVUsyEmpiNw/profile-displayphoto-shrink_800_800/0/1625329608946?e=1712793600&v=beta&t=q9tQg_cVTmIFTrjshq44H_RGtdL7XXG_auH7-Omj3mA"
              alt="Profile"
              className="profile-pic"
              priority
              width={120}
              height={120}
            />
        <div>
          <h1>Chanchal Kumar</h1>
          <p>Senior Software Engineer</p>
        </div>
      </header>
      <section className="content">
        <h2>About Me</h2>
        <p>
          Passionate Senior Software Engineer with expertise in React.js,
          Node.js, and AWS. Proven track record in streamlining processes and
          delivering innovative solutions. Graduated with a BTech in Computer
          Science & Engineering.
        </p>

        <h2>Experience</h2>
        <p>
          <strong>Software Development Engineer II</strong> - Exotel, Bangalore
          (02/2022 - Present)
          <br />
          Led the development of the WhatsApp Self Serve Dashboard, reducing
          onboarding time from 2 days to 5 minutes. Utilized React.js, Node.js,
          MySQL, and AWS.
        </p>

        <p>
          <strong>Software Engineer</strong> - Datagrokr Analytics Pvt Ltd,
          Bangalore (11/2019 - 10/2021)
          <br />
          Spearheaded the QPC Migration Project, creating scalable
          infrastructure using React.js, Node.js, Express.js, and AWS.
        </p>

        <h2>Skills</h2>
        <p>React, Redux, Node.js, Express.js, JavaScript, HTML, CSS, AWS</p>

        <h2>Projects</h2>
        <p>
          <strong>Findme (02/2017 - 12/2018)</strong>
          <br />A location-sharing app providing real-time location sharing and
          management. Technologies used: Java, Android Studio, SQLite, Node.js,
          MySQL.
        </p>

        <p>
          <strong>MASG (10/2015 - 03/2016)</strong>
          <br />
          Developed for students to understand internal processor operations for
          multiplication and division. Technologies: Java, Android Studio,
          SQLite, Node.js, MySQL.
        </p>

        <h2>Achievements</h2>
        <p>
          2nd Prize in E-Quiz (09/2016) - Department of Computer Science &
          Engineering, SIT.
        </p>

        <h2>Interests</h2>
        <p>Painting, Singing, PC Gaming</p>
      </section>
      <footer className="footer">
        <p>Contact: rrabshrivastava@gmail.com | +91-79798-58620</p>
        <p>
          LinkedIn: linkedin.com/in/chanchal-kumar-119b02118 | GitHub:
          github.com/chanchal11
        </p>
      </footer>
    </div>
  );
}

export default Home;
            
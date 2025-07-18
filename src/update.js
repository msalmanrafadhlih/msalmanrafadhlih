import path from "path";
import fetch from "node-fetch";
import fs from "fs";

let stars = 0,
  page = 1;

let special;

const fetchStars = async () => {
  try {
    const response = await fetch(
      `https://api.github.com/users/msalmanrafadhlih/starred?per_page=100&page=${page}`
    );
    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`);
    }
    const starsData = await response.json();
    return starsData;
  } catch (error) {
    console.error(`Error fetching stars data: ${error.message}`);
    return [];
  }
};

const countStars = async () => {
  let starsData = await fetchStars();
  stars += starsData.length;
  page++;
  if (starsData.length === 100) {
    await countStars();
  } else {
    await writeReadMe();
  }
};

const fetchUserData = async () => {
  try {
    const response = await fetch("https://api.github.com/users/msalmanrafadhlih");
    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching user data: ${error.message}`);
    return null;
  }
};

const writeReadMe = async () => {
  const readMePath = path.join(process.cwd(), "README.md");
  const date = new Date();
  const [dd, mm] = [date.getDate(), date.getMonth() + 1];

  if (mm === 12) special = ["⛄", "❄", "🎄"];
  else if (mm === 10 && dd === 31) special = ["👻", "🎃", "🍬"];
  else if (mm === 1 && dd === 1) special = ["🎉", "🥳", "🎆"];
  else if (mm === 9 && dd === 29) special = ["🎉", "🎈", "🎊"];
  else special = ["✨", "🚀", "✨"];

  const userData = await fetchUserData();
  if (!userData) return;

  const text = `<!--
**msalmanrafadhlih/msalmanrafadhlih** is a ✨ _special_ ✨ repository because its README.md (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...,
- 🌱 I’m currently learning ...,
- 👯 I’m looking to collaborate on ...,
- 🤔 I’m looking for help with ...,
- 💬 Ask me about ...,
- 📫 How to reach me: ...,
- 😄 Pronouns: ...,
- ⚡ Fun fact: ...,

const Tquilla = {
  FavouriteLanguage: "JavaScript/TypeScript",
  OpenedIssues: 8,
  OpenedPullRequests: 88,
  TotalCommits: 2196,
  Stars: 70,
  Repositories: {
    Created: 12,
    Contributed: 27
  },
}; -->

<!-- <p align="right"> -->
<!--   <code><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" height="50" alt="cplusplus logo"/></code> -->
<!--   <code><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" height="50" alt="java logo"  /></code> -->
<!--   <code><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="20" alt="html5 logo"  /></code> -->
<!--   <code><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="20" alt="css3 logo"  /></code> -->
<!--   <code><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="20" alt="javascript logo"  /></code> -->
<!--   <code><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="20" alt="nodejs logo"  /></code> -->
<!--   <code><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" height="50" alt="kotlin logo"  /></code> -->
<!--   <code><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" height="50" alt="arduino logo"  /></code> -->
<!--   <code><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" height="50" alt="raspberrypi logo"  /></code> -->
<!--   <code><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" height="50" alt="opencv logo"  /></code> -->
<!--   <code><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="50" alt="mysql logo"  /></code> -->
<!--   <code><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" height="50" alt="postgresql logo"  /></code> -->
<!--   </p> -->

<!-- <div id="header" align="center">
  <img src="https://media.giphy.com/media/M9gbBd9nbDrOTu1Mqx/giphy.gif" width="200"/>
</div> -->
## <samp>> Hey There!, I am <b>Rafadhlih<b> </samp> <img align="right" src="/assets/Ap.jpg" width="270" />
<!--https://media.giphy.com/media/M9gbBd9nbDrOTu1Mqx/giphy.gif-->
<h3 style="font-family: comic-sans-ms"><samp>
I'm a Growing Front-End Developer from Indonesia. I love a challenge and I'm skilled at progressing from a simple proposal into a well-defined, coded, and tested solution.</samp> <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="30"></h3>
  <a href="https://msalmanrafadhlih.github.io/My-portofolio/" align="center"> <img src="https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white" alt="Portfolio Badge"/></a>
<ul>
 <li><samp>🌱 Exploring Technical Content Writing.</samp></li>
 <li><samp>⚡ In my free time, I love to read tech articles.</samp></li>
 <li><samp>🧠 I'm currently learning HTML CSS AND Javascript</samp></li>
 <li><samp>👯‍♀️ I'm looking to collaborate on front end developer projects.</samp></li>
 <li><samp>🤔 I'm looking for help with mastering my skills as front end developer(beginner).</samp></li>
</ul>
<br>
<!-- <h3 align="">
        <samp>&gt; Hey There!, I am
                <b>Tquilla</b>
        </samp>
</h3> -->


  <p align ="left"> <!-- 📫 How to reach me: -->
  <code><a href="https://x.com/Rafadhlih" target="_blank"><img width="20" alt="twitter" src="/assets/x.png"></a></code> 
  <code><a href="https://bsky.app/profile/msalmanrafadhlih.bsky.social" target="_blank"><img width="20" alt="bluesky" src="/assets/bluesky2.png"></a></code>
  <code><a href="https://www.threads.net/@msalmanrafadhlih" target="_blank"><img width="20" alt="threads" src="/assets/threads.png"></a></code>
  <code><a href="https://github.com/msalmanrafadhlih" target="_blank"><img width="20" alt="Youtube" src="/assets/youtube.png"></a></code>
  <code><a href="https://www.linkedin.com/in/msalmanrafadhlih" target="_blank"><img width="20" alt="linkedin.com" src="/assets/linkedin1.png"></a></code><br>
  </p>
 
  <!--https://www.youtube.com/@Babebibobu1?sub_confirmation=1-->

<!-- Experiences -->

<!--<code><a href="https://www.linkedin.com/in/moch-salman-al-fadhlih-298aa0208" target="_blank"><img height="20" alt="twitter" src="/assets/linkedin-white.png"></a></code>
<br> -->

  <!--<h1 align="center">About Me:<img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="30px"/></h1>-->
  
## <p><a href=""><img src="https://komarev.com/ghpvc/?username=msalmanrafadhlih&style=flat-square&color=blue&style=for-the-badge&abbreviated=true" alt="Profile views" align="right"/></a></p>
<br>
<p align="center">
    <a href="https://github.com/msalmanrafadhlih/fighting-game"><img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=msalmanrafadhlih&repo=fighting-game&theme=react&bg_color=1F222E&title_color=F85D7F&hide_border=true&icon_color=F8D866&show_icons=false&show_description=false" alt="Fighting Game"></a>
    <a href="https://github.com/msalmanrafadhlih/peminjaman-buku-digital"><img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=msalmanrafadhlih&repo=peminjaman-buku-digital&theme=react&bg_color=1F222E&title_color=F85D7F&hide_border=true&icon_color=F8D866&show_icons=false&show_description=false" alt="Peminjaman Buku Digital"></a>
    <a href="https://github.com/msalmanrafadhlih/ensiklopedia-github.io"><img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=msalmanrafadhlih&repo=ensiklopedia-github.io&theme=react&bg_color=1F222E&title_color=F85D7F&hide_border=true&icon_color=F8D866&show_icons=false&show_description=false" alt="Ensiklopedia"></a>
    <a href="https://github.com/msalmanrafadhlih/javascriptLearning"><img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=msalmanrafadhlih&repo=javascriptLearning&theme=react&bg_color=1F222E&title_color=F85D7F&hide_border=true&icon_color=F8D866&show_icons=false&show_description=false" alt="FreeCodeCamp Course: Learning Javascript"></a>
    <a href="https://github.com/msalmanrafadhlih/WebStore"><img width="278" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=msalmanrafadhlih&repo=WebStore&theme=react&bg_color=1F222E&title_color=F85D7F&hide_border=true&icon_color=F8D866&show_icons=false&show_description=false" alt="Web Store"></a>
  </p>

<details> 
  <summary><h2 align="left">📊 Stats And Activities:</h2></summary>
  
  <p align="center">
  <a href="https://github.com/anuraghazra/github-readme-stats"><img width="395" src="https://github-readme-stats.vercel.app/api?username=msalmanrafadhlih&count_private=true&include_all_commits=true&show_icons=true&theme=dracula&rank_icon=github" /></a>
  <a href="https://github.com/anuraghazra/github-readme-stats"><img height="170" src="https://github-readme-stats.vercel.app/api/top-langs/?username=msalmanrafadhlih&layout=compact&theme=dracula"/></a>
  <a href="https://github.com/denvercoder1/github-readme-streak-stats"><img src="https://streak-stats.demolab.com?user=msalmanrafadhlih&theme=dracula&card_height=170" alt="GitHub Streak" /></a>
  </p>

  
  <a href="https://github.com/ashutosh00710/github-readme-activity-graph"><img alt="DenverCoder1's Activity Graph" src="https://github-readme-activity-graph.vercel.app/graph/?username=msalmanrafadhlih&bg_color=1F222E&color=F8D866&line=F85D7F&point=FFFFFF&hide_border=true" /></a>
</details>

<!-- add -->

<details> 
  <summary><h2 align="left">🌠 GitHub Stars: </h2></summary>
  <p align="center">
  <a href="https://github.com/mihonapp/mihon">
  <img width="278" align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=mihonapp&repo=mihon&show_owner=true&theme=dracula&description_lines_count=3" /></a>
  <a href="https://github.com/mifi/lossless-cut">
  <img width="278" align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=mifi&repo=lossless-cut&show_owner=true&theme=dracula&description_lines_count=3" /></a>
  <a href="https://github.com/ReVanced/revanced-manager">
  <img width="278" align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=ReVanced&repo=revanced-manager&show_owner=true&theme=dracula&description_lines_count=3" /></a>
  <a href="https://github.com/EvanLi/Github-Ranking">
  <img width="278" align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=EvanLi&repo=Github-Ranking&show_owner=true&theme=dracula&description_lines_count=3" /></a>
  <a href="https://github.com/drknzz/GitHub-Achievements">
  <img width="278" align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=drknzz&repo=GitHub-Achievements&show_owner=true&theme=dracula&description_lines_count=3" /></a>
  <a href="https://github.com/EbookFoundation/free-programming-books">
  <img width="278" align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=EbookFoundation&repo=free-programming-books&theme=dracula&description_lines_count=3" />
  </a>
  <a href="https://github.com/freeCodeCamp/freeCodeCamp">
  <img width="278" align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=freeCodeCamp&repo=freeCodeCamp&show_owner=true&theme=dracula&description_lines_count=3" /></a>
  </p>
</details>

<!-- Control "p" -->

<details open> 
  <summary><h2 align="left">🏆 Current Trophy: </h2></summary>
      <img align="left" src="https://user-images.githubusercontent.com/65187002/144930161-2f783401-8d27-4fdf-a2f7-cc0ba32f1f1f.gif" width="30%" style="display:inline;"><img align="right" src="https://user-images.githubusercontent.com/65187002/144930161-2f783401-8d27-4fdf-a2f7-cc0ba32f1f1f.gif" width="30%" style="display:inline;">
<!--   GitHub Trophy https://github.com/ryo-ma/github-profile-trophy?tab=readme-ov-file#apply-theme -->
  <p align="center">
    <a href="https://github.com/ryo-ma/github-profile-trophy"><img width="80" src="https://github-profile-trophy.vercel.app/?username=msalmanrafadhlih&rank=-B,-C,-?&column=1&margin-w=1&no-frame=true&margin-h=15&no-bg=true&theme=dracula&title=Commits"/></a>
    <a href=""><img width="80" src="https://github-profile-trophy.vercel.app/?username=msalmanrafadhlih&rank=-B,-C,-?&column=1&margin-w=1&no-frame=true&margin-h=15&no-bg=true&theme=dracula&title=PullRequest"/></a>
    <a href=""><img width="80" src="https://github-profile-trophy.vercel.app/?username=msalmanrafadhlih&rank=-B,-C,-?&column=1&title=Reviews&margin-w=1&no-frame=true&margin-h=15&no-bg=true&theme=dracula"/></a>
    <a href=""><img width="80" src="https://github-profile-trophy.vercel.app/?username=msalmanrafadhlih&rank=-B,-C,-?&column=1&margin-w=1&no-frame=true&margin-h=15&no-bg=true&theme=dracula&title=Stars"/></a>
    <a href=""><img width="80" src="https://github-profile-trophy.vercel.app/?username=msalmanrafadhlih&rank=-B,-C,-?&column=1&margin-w=1&no-frame=true&margin-h=15&no-bg=true&theme=dracula&title=Repositories"/></a>
    <a href=""><img width="80" src="https://github-profile-trophy.vercel.app/?username=msalmanrafadhlih&rank=-B,-C,-?&column=1&margin-w=1&no-frame=true&margin-h=15&no-bg=true&theme=dracula&title=Followers"/></a>
    <a href=""><img width="80" src="https://github-profile-trophy.vercel.app/?username=msalmanrafadhlih&rank=-B,-C,-?&column=1&margin-w=1&no-frame=true&margin-h=15&no-bg=true&theme=dracula&title=Experiences"/></a>
    <a href=""><img width="80" src="https://github-profile-trophy.vercel.app/?username=msalmanrafadhlih&rank=-B,-C,-?&column=1&margin-w=1&no-frame=true&margin-h=15&no-bg=true&theme=dracula&title=Issues"/></a>
    <a href=""><img width="335" src="https://github-profile-trophy.vercel.app/?username=msalmanrafadhlih&title=-Commits,-Repositories,-Reviews,-Stars,-Folowers,-Experiences,-Issues,-PullRequest&column=4&margin-w=1&no-frame=true&margin-h=15&no-bg=true&theme=dracula&"/></a>
  </p>
</details><br><br>
<!-- Last updated on ${date.toString()} ;-;-->

<p align="center">${special[2]} Last updated on ${dd}${getDateSuffix(dd)} ${date.toLocaleString('default', { month: 'long' })
    } ${date.getFullYear()} ${special[2]}</p><br>${mm === 11 && dd === 28 ? "and... today is my birthday" : ""}`; 

  fs.writeFileSync(readMePath, text);
};

const getDateSuffix = (day) => {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
};


(async () => {
  await countStars();
})();


export {};

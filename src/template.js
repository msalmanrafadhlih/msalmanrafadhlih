export default ({ date, dd, mm, special, getDateSuffix }) => `

  <details><summary>📊 Stats And Activities:</summary><br>
      <p align="center">
      <a href="https://github.com/anuraghazra/github-readme-stats"><img width="395" src="https://github-readme-stats.vercel.app/api?username=msalmanrafadhlih&count_private=true&include_all_commits=true&show_icons=true&theme=dracula&rank_icon=github"/></a>
      <a href="https://github.com/anuraghazra/github-readme-stats"><img height="170" src="https://github-readme-stats.vercel.app/api/top-langs/?username=msalmanrafadhlih&layout=compact&theme=dracula"/></a>
      </p>
  </details>
  
  <p align="center">
    <a href="https://github.com/toniGitH/toniGitH"><img src="https://github-readme-streak-stats-omega-woad.vercel.app/?user=msalmanrafadhlih&theme=dracula&card_height=170" alt="GitHub Streak" /></a>
  </p>

  <!-- Last updated on ${date.toString()} ;-;-->
  <p align="center">${special[2]} Last updated on ${dd}${getDateSuffix(dd)} ${date.toLocaleString("default", { month: "long" })} ${date.getFullYear()} ${special[2]} ${mm === 11 && dd === 28 ? "<br>and... today is my birthday" : ""}</p>

  <p align ="center"> <!-- 📫 How to reach me: -->
    <code><a href="https://x.com/Rafadhlih" target="_blank"><img width="20" alt="twitter" src="/assets/x.png"></a></code> 
    <code><a href="https://bsky.app/profile/msalmanrafadhlih.bsky.social" target="_blank"><img width="20" alt="bluesky" src="/assets/bluesky2.png"></a></code>
    <code><a href="https://www.threads.net/@msalmanrafadhlih" target="_blank"><img width="20" alt="threads" src="/assets/threads.png"></a></code>
    <code><a href="https://www.youtube.com/@Babebibobu1?sub_confirmation=1" target="_blank"><img width="20" alt="Youtube" src="/assets/youtube.png"></a></code>
    <code><a href="https://www.linkedin.com/in/msalmanrafadhlih" target="_blank"><img width="20" alt="linkedin.com" src="/assets/linkedin1.png"></a></code>
    <a href="https://msalmanrafadhlih.github.io/De-porto/"><img src="https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white" alt="Portfolio Badge" align="left" /></a>
    <img src="https://komarev.com/ghpvc/?username=msalmanrafadhlih&style=flat-square&color=blue&style=for-the-badge&abbreviated=true" alt="Profile views" align="right"/>
  </p>
  
`;

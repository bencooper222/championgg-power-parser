import {
  parsePercent,
  calculatePower,
  openWebpage,
  displayResults
} from './utility.js';

const lodashReduce = require('lodash.reduce');

(() => {
  const champData = {};

  const getAndScrapeTable = () => {
    const table = Array.from(
      document.getElementsByClassName('rt-tbody')[0].childNodes
    );
    table.some(row => {
      const rowInfo = row.childNodes[0];
      let name;
      try {
        name = rowInfo.childNodes[2].getElementsByTagName('strong')[0]
          .innerHTML;
      } catch (err) {
        return true;
      }

      const role = rowInfo.childNodes[1].getElementsByTagName('img')[0].src; // this gives SVG name
      const gamesPlayed = Number(
        rowInfo.childNodes[10]
          .getElementsByTagName('span')[0]
          .innerHTML.replace(',', '')
      );
      const winPercent = parsePercent(
        rowInfo.childNodes[4].getElementsByTagName('b')[0].innerHTML
      );
      // console.log('winPercent', winPercent);

      if (champData[name] == null) {
        champData[name] = {
          played: gamesPlayed,
          won: gamesPlayed * winPercent
        };
      } else {
        champData[name].played += gamesPlayed;
        champData[name].won += gamesPlayed * winPercent;
      }
      // console.log('name', name)
      // console.log(rowInfo.childNodes[1].getElementsByTagName('img')[0]);
    });
  };
  const totalPages = Number(
    document.getElementsByClassName('-totalPages')[0].innerHTML
  );
  const nextButton = document.getElementsByClassName('-next')[0].childNodes[0];

  for (let i = 0; i < totalPages; i++) {
    getAndScrapeTable();
    nextButton.click();
  }

  const totalGames = lodashReduce(
    champData,
    (result, value, key) => {
      return value.played + result;
    },
    0
  );

  const championDataArray = [];
  Object.keys(champData).forEach(champName => {
    const champ = champData[champName];
    championDataArray.push({
      winPercent: (100 * champ.won) / champ.played,
      playPercent: (100 * champ.played) / totalGames,
      power: calculatePower(
        (100 * champ.won) / champ.played,
        (100 * champ.played) / totalGames
      ),
      name: champName
    });
  });
  
  championDataArray.sort((a,b)=>b.power-a.power);

  displayResults(championDataArray);
  openWebpage(championDataArray);

  const backButton = document.getElementsByClassName('-previous')[0]
    .childNodes[0];
  for (let i = 0; i < totalPages; i++) backButton.click();

  // getAndScrapeTable();
})();

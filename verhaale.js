const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let vn = 0;

function startStory() {
  if (vn === 0) {
    console.log("Hallo! Ik ben Youssef.");
    rl.question("Wie ben jij? ", (c) => {
      console.log("Wil je mijn verhaal horen?");
      console.log("'ja'");
      console.log("'nee'");
      rl.question("Antwoord: ", (ant) => {
        if (ant === "ja") {
          console.log("Oke dan, luister.");
          console.log("Ik ben Youssef Karim en dit is mijn verhaal.");
          console.log("*flashback*");
          vn = 1;
          continueStory();
        } else if (ant === "nee") {
          console.log("Oke dan niet!");
          rl.close();
        }
      });
    });
  }
}

function continueStory() {
  if (vn === 1) {
    console.log("Je bent thuis en hoort knallen van buiten. In eerste instantie denk je dat het vuurwerk is, maar uiteindelijk besef je dat het bommen zijn die vallen.");
    console.log("Ga je naar buiten of blijf je zitten?");
    console.log("'buiten'");
    console.log("'blijf binnen'");
    rl.question("Antwoord: ", (ant) => {
      if (ant === "buiten") {
        vn = 3;
        continueStory();
      } else if (ant === "blijf binnen") {
        vn = 2;
        console.log("Je blijft zitten voor een tijdje, totdat er uiteindelijk uit het niets een soldaat je huis binnenstormt, alles steelt wat je hebt en vervolgens jou vermoordt omdat je de regering niet ondersteunt.");
        rl.close();
      }
    });
  } else if (vn === 3) {
    console.log("Je gaat naar buiten en ziet je buurman. Vervolgens ga je naar je buurman om te vragen wat er is gebeurd, en hij zegt:");
    console.log("Heb je het nieuws niet gezien? We moeten nu weg, er is oorlog in dit land.");
    console.log("Ga je mee?");
    console.log("'mee gaan'");
    console.log("'ga alleen'");
    rl.question("Antwoord: ", (ant) => {
      if (ant === "mee gaan") {
        vn = 4;
        continueStory();
      } else if (ant === "ga alleen") {
        vn = 5;
        console.log("Je zegt gedag tegen ze en wenst ze succes, en je gaat weg.");
        console.log("Tijdens het lopen kom je een soldaat tegen die je aanvalt en knock-out slaat.");
        console.log("Hij neemt je mee en executeert je op bevel van zijn baas.");
        rl.close();
      }
    });
  } else if (vn === 4) {
    console.log("Oke, pak je spullen die je nog over hebt en kom gaan!");
    console.log("Je pakt je spullen en gaat weg.");
    console.log("We gaan naar mijn broer in de volgende straat, hij kent iemand die ons naar verre landen kan smokkelen.");
    console.log("Je begint je reis met je buurman en zijn familie.");
    console.log("Oke, Youssef, we zijn inmiddels van Damascus helemaal naar Aleppo gegaan, of ja, we zijn bijna in Aleppo.");
    console.log("Ga anders wat water drinken.");
    console.log("Je drinkt water.");
    vn = 4;
    console.log("Oke, we zijn bij Aleppo. Mijn broer zei dat hij aan de linkerkant van de grote moskee wachtte buiten de stad.");
    console.log("Je loopt en komt je buurman zijn broer tegen en loopt een stukje samen wat verder weg van de stad.");
    console.log("Jullie rusten allemaal en gaan wat eten en drinken.");
    console.log("Door de oorlog hadden jullie geen keus en moesten jullie eten en drinken stelen van de markt om te overleven.");
    console.log("Uiteindelijk vertrekken jullie naar Salgin, dat is de plek waar jullie de smokkelaar kunnen vinden.");
    console.log("Jullie vinden de smokkelaar en tellen wie er allemaal is: 1, 2, 3, 4, 5, en gelukkig is iedereen er.");
    console.log("Er waren ook families die helaas slachtoffers hadden.");
    console.log("De smokkelaars maken de auto's klaar.");
    console.log("Ze hebben de auto's op zo'n manier veranderd dat er een luik in zit waar jullie je in kunnen verstoppen.");
    console.log("Ze hebben spullen op het luik gezet zodat het heel moeilijk is om het luik te zien.");
    console.log("Voordat we vertrokken, hebben we even snel gegeten, gedronken, geplast en gepoept.");
    console.log("Toen begon de reis naar Turkije.");
    console.log("We zouden dan naar Istanbul gaan om vervolgens gesmokkeld te worden naar andere landen.");
    console.log("Toen we uiteindelijk arriveerden bij de grens van Turkije, werd er gecontroleerd.");
    console.log("Youssef, hou je adem in en wees stil.");
    console.log("'hou adem in'");
    rl.question("Antwoord: ", (ant) => {
      if (ant === "hou adem in") {
        vn = 4;
        continueStory();
      }
    });
  } else {
    console.log("Dit is het einde van het verhaal. Bedankt voor het luisteren!");
    rl.close();
  }
}

startStory();

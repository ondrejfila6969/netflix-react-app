import React from "react";
import "./Film.css";

// Images
import avatar from "../../assets/avatar.jpg";
import kungFuPanda from "../../assets/kungFuPanda.jpg";
import maverick from "../../assets/maverick.jpg";
import johnnyEnglish from "../../assets/johnnyEnglish.jpg";
import fakjuPaneUciteli from "../../assets/fakjuPaneUciteli3.jpg";
import oppenheimer from "../../assets/oppenheimer.jpg";
import barbie from "../../assets/barbie.jpg";
import vysehrad from "../../assets/vysehrad.jpg";
import johnWick from "../../assets/johnWick.jpg";
import wonka from "../../assets/wonka.jpg";

export class Template {
  constructor(name, director, year, index, about) {
    this.name = name;
    this.director = director;
    this.year = year;
    this.index = index;
    this.about = about;
    this.size = {
      width: 300,
      height: 200,
    };
  }
}

export const film = new Template("Avatar", "James Cameron", 2009, 0, "Posádka vyslaná ze Země na své průzkumné misi objeví na Pandoře velmi cenný minerál, který by měl na Zemi nevyčíslitelnou hodnotu. Pobyt na Pandoře je ovšem pro člověka možný teprve po vytvoření jeho genetického dvojníka, hybrida Avataru, který může být ovládán psychikou oddělenou od lidského těla a fyzicky odpovídá původnímu obyvatelstvu Pandory, které má fluorescentní modrou kůži a dosahuje 3m výšky.");
export const film2 = new Template("Kung Fu Panda 4", "Mike Mitchell", 2024, 1, "Hrdina animované ságy Kung Fu Panda už mnohokrát prokázal, že si titul „Dračí bojovník“ navzdory všemu (zejména své nemotornosti) skutečně zaslouží. Pod odborným dohledem Mistra Šifu, se stará o to, aby jeho rodné Údolí klidu dostálo svému názvu. Jenže jeho mentor si teď usmyslel, že Po by měl povýšit a stát se duchovním vůdcem celého údolí a tím pádem také vybrat svého nástupce do role Dračího bojovníka.");
export const film3 = new Template("Top Gun: Maverick", "Joseph Kosinski", 2022, 2, "Pete „Maverick“ Mitchell k smrti rád pilotuje stíhačky. Dokonce tak, že se už přes třicet let úspěšně brání povýšení ve strukturách amerického letectva, protože to by ho z kokpitu vyhnalo do vyhřáté kanceláře. Maverick byl navíc vždycky magnetem na průšvihy, což se s armádní kariérou taky docela vylučuje. Kromě téhle bude muset Maverick zvládnout i jednu obtížnou soukromou misi.");
export const film4 = new Template("Johnny English", "Peter Howitt", 2003, 3, "Z londýnského Toweru byly ukradeny korunovační klenoty a Anglie musí čelit vážné krizi. Všichni tajní agenti britské tajné služby byli zabiti. Zbyl pouze Johnny English, který vždy snil o práci agenta. Podezřelým č. 1 se stává francouzský obchodní magnát Pascal Sauvage. Pokud se Sauvage stane králem, chce zemi, které bude vládnout, změnit v největší vězení na světě. Podaří se Johnnymu Englishovi zabránit korunovaci ?");
export const film5 = new Template("Fakjů pane učiteli 3", "Bora Dağtekin", 2017, 4, "Zeki Müller byl jako učitel-samouk vždy zastáncem drsných a nezvyklých metod. Ať už po nich střílel, nasazoval jim pouta, nrbo využíval elektrošoky. Goethovu gymnáziu ubývají studenti a od dalšího školního roku mu hrozí zavření. Poradce pro volbu povolání oznámil Zekiho třídě, že po škole nemají nikde žádnou šanci a navíc je teď čekají testy, které mají prověřit jejich schopnost vůbec dojít k maturitě.");

export const film6 = new Template("Oppenheimer", "Christopher Nolan", 2023, 5, "V době, kdy Druhá světová válka ještě vypadala nerozhodně, probíhal na dálku dramatický souboj mezi Spojenými státy a Německem o to, komu se dřív podaří zkonstruovat atomovou bombu a získat nad nepřítelem rozhodující převahu. V Americe se tajný výzkum skrýval pod označením Projekt Manhattan a jedním z jeho klíčových aktérů byl astrofyzik Robert Oppenheimer. Pod obrovským časovým tlakem se s týmem dalších vědců pokoušel sestrojit zbraň hromadného ničení");
export const film7 = new Template("Barbie", "Greta Gerwig", 2023, 6, "Snímek se odehrává v utopické zemi „Barbie Land“, kde žijí dokonalé postavy, Barbie a Kenové. Hlavní hrdinka Barbie (Margot Robbie) prožívá tradiční dokonalý den v dokonalém domě a světě. Její přítel Ken (Ryan Gosling) je závislý na pozornosti Barbie a neřeší nic jiného. Jednoho dne se Barbie probudí do světa, ve kterém neexistují pouze holčičí party a prosluněné nicnedělání.Přepadnou ji myšlenky na smrt, zjistí, že má ploché nohy a celulitidu.");
export const film8 = new Template("Vyšehrad: Fylm", "Jakub Štáfek", 2023, 7, "Od chvíle, kdy jsme Julia Lavického viděli naposledy (ano, bylo to tehdy, když „prodal zápas, ale zapomněl na to, a dal krásný gól), uběhl více než rok. Lavi je, jak by řekl jeho agent Jarda, pořád stejný dement, ale začalo se mu konečně dařit. A to jak ve fotbalovém, tak v osobním životě. S Vyšehradem postoupil do druhé ligy, kde vede tabulku střelců, opět po něm pokukují zámožnější kluby, dokonce požádal o ruku svou přítelkyni Lucii, sestru Jardy.");
export const film9 = new Template("John Wick: Kapitola 4", "Chad Stahelski", 2023, 8, "John Wick v dalším pokračování série utká se svými dosud nejsmrtelnějšími protivníky. Vzhledem k tomu, že cena za jeho hlavu se stále zvyšuje, Wick bojuje proti High Table po celém světě, zatímco hledá ty nejmocnější hráče z podsvětí, od New Yorku přes Paříž, Ósaku až po Berlín. Než se mu však podaří získat svobodu, musí čelit novému nepříteli, který má mocné spojence po celém světě. Bude to o to težší, že nová spojenectví mění staré přátele v nepřátele");
export const film10 = new Template("Wonka", "Paul King", 2023, 9, "ilm Wonka je založen na výjimečné postavě, která je ústřední postavou knihy „Karlík a továrna na čokoládu“, nejkultovnější dětské knihy Roalda Dahla a jedné z nejprodávanějších dětských knih všech dob, a vypráví podivuhodný příběh o talentovaném Willy Wonkovi, který se s očima dokořán ocitne v centru světa čokolády, nemá nic než pár mincí v kapse a plný klobouk snů – jedním z nich je otevřít si vlastní čokoládovnu, která by se vyrovnala největším čokoládovnám světa.");

const paths = [
  avatar,
  kungFuPanda,
  maverick,
  johnnyEnglish,
  fakjuPaneUciteli,
  oppenheimer,
  barbie,
  vysehrad,
  johnWick,
  wonka,
];

const Film = (props) => {
  return (
    <>
      <div id="film-wrapper">
        <img 
          src={paths[props.instance.index]}
          width={props.instance.size.width}
          height={props.instance.size.height}
          alt="backgroundImg"
        />
        <h2>Název filmu: {props.instance.name}</h2>
        <h3>Režie: {props.instance.director}</h3>
        <h3>Rok vydání: {props.instance.year}</h3>
        <p>
          {props.instance.about}
        </p>
      </div>
    </>
  );
};

export default Film;

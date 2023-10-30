import LocautocrossPicture from '../assets/pictures/locautocross.png';
import PronautocrossPicture from '../assets/pictures/pronautocross.png';
import RegaladePicture from '../assets/pictures/regalade.png';
import VersusQuizPicture from '../assets/pictures/versusquiz.png'; 
import { faReact, faSymfony, faHtml5, faCss3Alt, faPhp, faSquareJs } from '@fortawesome/free-brands-svg-icons';

const projects = [
    {
        name : "Loc'Autocross",
        link : "https://www.locautocross.fr",
        summary : "Site de mise en relations de particuliers et professionnels pour des locations de véhicules de sport automobile (Autocross et Sprint Car)",
        base : "Création complète du projet, du cahier des charges à la mise en production en passant par la conception avec React et Symfony",
        details : 
                    <>
                        <p>Sur ce site, les professionnels peuvent créer et gérer leurs propositions de locations.</p>
                        <p> Les pilotes ont accès à l&apos;ensemble des locations et peuvent affiner leur recherche par circuit, par évènement, par date, par championnat ou par catégorie.</p>
                        <p>Avant de réserver, les deux parties peuvent communiquer via une messagerie privée.</p>
                    </>,
        conclusion: "La sortie officielle du site n'a pas encore eu lieu, en attente de la publication des calendriers des épreuves 2024.",
        picture: LocautocrossPicture,
        technos : [faSymfony, faReact],
        type: "Solo",
        date : "Septembre / Octobre 2023"
    },
    {
        name : "Regalade",
        link : "https://regalade.surge.sh",
        summary : "Votre assistant personnel en cuisine : des propositions de recettes à la gestion de la liste de courses",
        base : "Projet de fin de formation O'Clock. Elaboration du cahier des charges et réalisation de toute la partie backend du projet",
        details : 
        <>
            <p>L&apos;utilisateur peut ajouter une recette à sa liste de repas, sa liste de courses se met automatiquement à jour.</p>
            <p> Il peut aussi se laisser guider, l&apos;application peut lui proposer des recettes en fonction de ce qu’il a déjà chez lui. Il ne lui reste qu’à cliquer sur les recettes qui lui plaisent le plus et sa liste de courses se met aussi à jour avec les quelques ingrédients qui peuvent manquer.</p>
            <p>Il peut aussi créer ses propres recettes, qu&apos;il partagera à tout le monde ou non, et pourra les ajouter en un clic dans sa prochaine liste de repas afin de mettre sa liste de courses à jour.</p>
        </>,
        conclusion: "Ce fut un projet interessant, en particulier sur le fait de travailler en équipe de manière Agile avec le cadre Scrum.",
        picture: RegaladePicture,
        technos : [faSymfony],
        type : "Fin de formation",
        date: "Mai / Juin 2023"
    },
    {
        name : "Versus Quiz",
        link : "https://versus-quiz.surge.sh",
        summary : "Mini jeu de culture générale en duel",
        base : "Création pour se familiariser avec React",
        details : 
        <>
            <p>Chaque participant dispose de 60 secondes au total. A chaque question, il peut choisir de répondre cash (et tenter de marquer 5 points) ou alors avoir le choix entre 4 propositions (carré, pour 3 points) ou 2 propositions (duo, pour 2 points).</p>
            <p>Lorsqu&apos;un joueur voit son temps écoulé, le deuxième peut continuer de jouer tant qu&apos;il lui reste du temps pour tenter de dépasser son concurrent ou d&apos;augmenter son avance.</p>
        </>,
        conclusion: "Petit projet réalisé en 2 jours pour découvrir en conditions réelles le fonctionnement de React et la gestion de Redux.",
        picture: VersusQuizPicture,
        technos : [faReact],
        type : "Solo",
        date: "Septembre 2023"
    },
    {
        name : "Pron'Autocross",
        link : "https://www.pronautocross.fr",
        summary : "Pariez sur les résultats des championnats et coupes de France d'Autocross et de Sprint Car",
        base: "Première création complète de projet. En PHP Vanilla avec architecture MVC",
        details : 
                    <>
                        <p>Chaque joueur inscrit peut effectuer des pronostics en répondant à des questions.</p>
                        <p>Chaque pilote a une cote personnelle recalculée automatiquement après chaque course grâce à un algorithme.</p>
                        <p>Le back-Office a une place importante sur ce projet pour générer les questionnaires, les listes des engagés et les vérifications d&apos;après-course.</p>
                    </>,
        conclusion: "A la fin de la saison, en Octobre 2023, le site compte 996 utilisateurs inscrits, plus de 5600 participations ont été enregistré (560 en moyenne par épreuve) et le jeu est un succès dans la communauté de l'Autocross et du Sprint Car.",
        picture : PronautocrossPicture,
        technos : [faHtml5, faCss3Alt, faPhp, faSquareJs],
        type : "Solo",
        date: "Mars / Avril 2023"
    }
];

export default projects;
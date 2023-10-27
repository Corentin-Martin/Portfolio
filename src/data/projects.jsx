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
                        <p style={{fontStyle : 'italic'}}>La sortie officielle du site n&apos;a pas encore eu lieu, en attente de la publication des calendriers des épreuves 2024.</p>
                    </>,
        picture: LocautocrossPicture,
        technos : [faSymfony, faReact],
        type: "Solo",
        date : "Septembre / Octobre 2023"
    },
    {
        name : "Pron'Autocross",
        link : "https://www.pronautocross.fr",
        summary : "Pariez sur les résultats des championnats et coupes de France d'Autocross et de Sprint Car",
        base: "Première création complète de projet. En PHP Vanilla avec architecture MVC",
        details : 
                    <>
                        <p>Chaque joueur inscrit peut effectuer des pronostics en répondant à des questions.</p>
                        <p>Chaque pilote a une cote personnelle calculée automatiquement grâce à un algorithme se basant sur le nombre de votes reçus sur les deux dernières courses ainsi que sur sa position actuelle au championnat.</p>
                        <p>Après une course, les joueurs ont accès au classement de l&apos;épreuve, au classement général, à leur fiche de participation corrigée et peuvent suivre les résultats de leurs amis.</p>
                        <p>Le back-Office a une place importante sur ce projet pour générer les questionnaires, les listes des engagés et les vérifications d&apos;après-course.</p>
                        <p style={{fontStyle : 'italic'}}>A la fin de la saison, en Octobre 2023, le site compte 996 utilisateurs inscrits, plus de 5600 participations ont été enregistré (560 en moyenne par épreuve) et le jeu est un succès dans la communauté de l&apos;Autocross et du Sprint Car.</p>
                    </>,
        picture : PronautocrossPicture,
        technos : [faHtml5, faCss3Alt, faPhp, faSquareJs],
        type : "Solo",
        date: "Mars / Avril 2023"
    },
    {
        name : "Regalade",
        link : "https://regalade.surge.sh",
        summary : "Votre assistant personnel en cuisine : des propositions de recettes à la gestion de la liste de courses",
        base : "Elaboration du cahier des charges et réalisation de toute la partie backend du projet",
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
        picture: VersusQuizPicture,
        technos : [faReact],
        type : "Solo",
        date: "Septembre 2023"
    }
];

export default projects;
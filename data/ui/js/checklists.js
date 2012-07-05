checklists = {
    "10240": {
        "goal": "<ul><li><h5>1.4.3 : Contraste (minimum) : (AA)</h5><br />Rendre perceptibles les contenus visuels ind\u00e9pendamment de la capacit\u00e9 \u00e0 percevoir les contrastes de couleurs. <br><br>La\r\nsaturation et la teinte n'ont que peu d'incidence pour les personnes ayant des d\u00e9ficiences de perception des couleurs&nbsp;\r\n(Knoblauch et al., 1991). Elle peut par contre affecter la\r\nperception de la luminosit\u00e9 des couleurs entre elles et donc le\r\ncontraste per\u00e7u entre une couleur de premier plan et d'arri\u00e8re plan.</li><li><h5>1.4.6 : Contraste (am\u00e9lior\u00e9) : (AAA)</h5><br />Rendre perceptibles les contenus visuels ind\u00e9pendamment de la capacit\u00e9 \u00e0 percevoir les contrastes de couleurs.<br><br>La\r\nsaturation et la teinte n'ont que peu d'incidence pour les personnes ayant des d\u00e9ficiences de perception des couleurs&nbsp;\r\n(Knoblauch et al., 1991). Elle peut par contre affecter la\r\nperception de la luminosit\u00e9 des couleurs entre elles et donc le\r\ncontraste per\u00e7u entre une couleur de premier plan et d'arri\u00e8re plan.</li><li><h5>1.4.8 : Pr\u00e9sentation visuelle : (AAA)</h5><br />Rendre les contenus textuels visuellement perceptibles sans interf\u00e9rence dans leur lisibilit\u00e9 due \u00e0 leur pr\u00e9sentation.<br><br>Les personnes ayant des d\u00e9ficiences cognitives, du langage, d'apprentissage et certaines personnes ayant une d\u00e9ficience visuelle ne peuvent lire et comprendre un texte lorsque celui-ci est pr\u00e9senter d'une fa\u00e7on qui rend sa lecture difficile sans qu'il ne soit possible de modifier cette pr\u00e9sentation.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Une couleur de texte a \u00e9t\u00e9 d\u00e9fini sans qu'une couleur de fond soit \u00e9galement d\u00e9fini pour l'\u00e9l\u00e9ment ou un de ses parents.", 
        "description": "Absence de d\u00e9finition d'une couleur de texte sans d\u00e9finition d'une couleur de fond et inversement", 
        "solution": "Toute propri\u00e9t\u00e9s CSS :<br><br>\r\n<ul><li>background,\r\n    </li><li>background-color,\r\n    </li><li>font,\r\n    </li><li>color,\r\n    </li><li>list,\r\n    </li><li>list-style-image\r\n</li></ul>\r\n<br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment est utilis\u00e9 pour d\u00e9finir une couleur de texte ou une couleur de fond (\u00e9ventuellement via une image de fond), poursuivre le test, sinon le test est non applicable.</li>\r\n", 
        "thema": "Pr\u00e9sentation", 
        "name": "[PR\u00e9]-05"
    }, 
    "10241": {
        "goal": "<ul><li><h5>1.4.9 : Texte sous forme d'image (sans exception) : (AAA)</h5><br />Favoriser le recours \u00e0 des technologies qui permettent aux utilisateurs\r\nd'adapter de mani\u00e8re optimale \u00e0 leurs besoins le rendu du contenu. Des\r\ncontenus n\u00e9cessitant une mise en forme sp\u00e9cifique incitent parfois \u00e0\r\nrecourir \u00e0 des \u00e9l\u00e9ments non textuels pour obtenir la mise en forme\r\nd\u00e9sir\u00e9e : formules math\u00e9matiques, titres et \u00e9l\u00e9ments de menus notamment.<br><br>Dans diff\u00e9rents contextes d'utilisation, les contenus non textuels ne\r\nseront perceptibles que par leur \u00e9quivalent textuel, qui peut en\r\noutre ne pas en reproduire totalement le sens. Par ailleurs, leur\r\npr\u00e9sentation ne sera pas ais\u00e9ment modifiable pour s'adapter aux besoins\r\ndes utilisateurs (agrandissement des textes par exemple).</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Certains textes sont des textes mis en image : ces textes ne sont pas agrandissables via le zoom typographique d'un navigateur, et leur rendu ne peut pas \u00eatre adapt\u00e9 aux besoin d'un utilisateur ayant par exemple des difficult\u00e9s avec les couleurs utilis\u00e9es (sans passer par une aide technique sp\u00e9cifique du type loupe d'\u00e9cran adaptative). Or, l'absence de contraintes typographiques fortes devrait rendre possible leur remplacement par des textes HTML styl\u00e9s via CSS.\r\n", 
        "description": "Possibilit\u00e9 de remplacer les \u00e9l\u00e9ments non textuels par une mise en forme effectu\u00e9e gr\u00e2ce aux styles CSS. (sans exceptions)", 
        "solution": "<p>Tout \u00e9l\u00e9ment : </p><ul><li> <code>img</code>, </li><li> <code>object</code>, </li><li> <code>embed</code>, </li><li> <code>applet</code>. </li></ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est\r\npr\u00e9sent dans la page, poursuivre le test, sinon le test est non\r\napplicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment contient du texte, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment n'est pas un logotype ou purement d\u00e9coratif, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Pr\u00e9sentation", 
        "name": "[PR\u00e9]-07"
    }, 
    "10242": {
        "goal": "<ul><li><h5>2.2.1 : R\u00e9glage du d\u00e9lai : (A)</h5><br />Rendre les contenus accessibles quelles que soient les contraintes de temps de consultation ou d'interaction dues \u00e0 des situations de handicap.<br><br>Certaines personnes souffrant\r\nd'incapacit\u00e9s mentales ou visuelles peuvent avoir besoin de plus de temps pour lire un texte. Les limites de temps peuvent rendre impossible la lecture ou la manipulation de l'interface pour ces personne.</li><li><h5>2.2.2 : Mettre en pause, arr\u00eater, masquer : (A)</h5><br />Rendre les contenus accessibles sans interf\u00e9rences dues \u00e0 une animation susceptible de g\u00eaner l'utilisateur. <br><br>Certaines personnes souffrant d'incapacit\u00e9s mentales ou visuelles ne peuvent pas lire un texte lorsqu'il clignote ou lorsqu'il bouge. Les clignotements/mouvements peuvent causer une distraction telle que le reste de la page devient illisible pour des gens souffrant de handicap cognitif.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Un \u00e9l\u00e9ment d\u00e9clenchant un rafraichissement automatique de la page est pr\u00e9sent.", 
        "description": "Absence d'\u00e9l\u00e9ments provoquant un rafra\u00eechissement automatique de la page ne pouvant pas \u00eatre arr\u00eat\u00e9", 
        "solution": "Tout \u00e9l\u00e9ment :\r\n<br>\r\n<br>\r\n<ul><li>script cot\u00e9 serveur (expiration de session, ent\u00eate http refresh)\r\n  </li><li>applet,\r\n  </li><li>object,\r\n  </li><li>embed.</li></ul>\r\n<br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment provoque un rafra\u00eechissement automatique de la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si le rafra\u00eechissement automatique ne pourrait \u00eatre supprim\u00e9e sans changer fondamentalement l'information ou les fonctionnalit\u00e9s du contenu, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Navigation", 
        "name": "[NAV]-09"
    }, 
    "10243": {
        "goal": "<ul><li><h5>2.2.1 : R\u00e9glage du d\u00e9lai : (A)</h5><br />Rendre les contenus accessibles quelles que soient les contraintes de temps de consultation ou d'interaction dues \u00e0 des situations de handicap.<br><br>Certaines personnes souffrant\r\nd'incapacit\u00e9s mentales ou visuelles peuvent avoir besoin de plus de temps pour lire un texte. Les limites de temps peuvent rendre impossible la lecture ou la manipulation de l'interface pour ces personne.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Un \u00e9l\u00e9ment d\u00e9clenchant une redirection automatique de la page est pr\u00e9sent.", 
        "description": "Absence d'\u00e9l\u00e9ments provoquant une redirection automatique de la page ne pouvant pas \u00eatre arr\u00eat\u00e9e.", 
        "solution": "Tout \u00e9l\u00e9ment :\r\n<br><br><ul><li>script cot\u00e9 serveur (expiration de session, ent\u00eate http refresh)\r\n</li><li>applet,\r\n</li><li>object,\r\n</li><li>embed.</li></ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment provoque une redirection automatique de la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si la redirection automatique ne pourrait \u00eatre supprim\u00e9e sans changer fondamentalement l'information ou les fonctionnalit\u00e9s du contenu, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Navigation", 
        "name": "[NAV]-12"
    }, 
    "10244": {
        "goal": "<ul><li><h5>2.4.9 : Fonction du lien (lien uniquement) : (AAA)</h5><br />Permettre aux utilisateurs d'identifier le r\u00f4le, la destination ou\r\nl'effet des liens et d'en anticiper le r\u00e9sultat. <br><br>Avoir des liens\r\ncompr\u00e9hensibles permet une lecture et une manipulation plus ais\u00e9e par\r\nles utilisateurs de technologies d'assistance, notamment lors de l'utilisation\r\nd'une liste de liens extraite de la page pour naviguer. Cela permet\r\n\u00e9galement une meilleure m\u00e9morisation et une plus grande lisibilit\u00e9 pour\r\ntous.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "La lecture des intitul\u00e9s de liens seul ne permet pas d'identifier quelle est la destination ou l'action des liens.", 
        "description": "Possibilit\u00e9 d'identifier la destination ou l'action des liens et des boutons. (intitul\u00e9 seul)", 
        "solution": "<p> Tout \u00e9l\u00e9ment :<br> </p><ul><li> <code>a</code>, </li><li> <code>area</code>, </li><li> <code>button</code>, </li><li> <code>input type=\"image\"</code>, </li><li> <code>input type=\"submit\"</code>, </li><li> <code>input type=\"button\"</code>, </li><li> <code>input type=\"reset\"</code>. </li></ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est\r\npr\u00e9sent dans la page, poursuivre le test, sinon le test est non\r\napplicable.</li>\r\n<li>Si la lecture de l'intitul\u00e9 du lien seul en dehors de son contexte\r\npermet \u00e0 une personne n'ayant aucun handicap de comprendre l'action ou\r\nd'identifier la destination du lien, poursuivre le test, sinon le test\r\nest non applicable</li>", 
        "thema": "Navigation", 
        "name": "[NAV]-14"
    }, 
    "11948": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque m\u00e9dia temporel pr\u00e9-enregistr\u00e9 seulement audio a-t-il, si n\u00e9cessaire, une interpr\u00e9tation en langue des signes adapt\u00e9e \u00e0 la langue du m\u00e9dia (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.9.1"
    }, 
    "11934": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque m\u00e9dia temporel pr\u00e9-enregistr\u00e9 seulement vid\u00e9o v\u00e9rifie-t-il une de ces conditions (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.1.2"
    }, 
    "11949": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque m\u00e9dia temporel synchronis\u00e9 pr\u00e9-enregistr\u00e9 a-t-il, si n\u00e9cessaire, une interpr\u00e9tation en langue des signes adapt\u00e9e \u00e0 la langue du m\u00e9dia (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.9.2"
    }, 
    "16231": {
        "goal": "Permettre le remplacement de l'ancienne URL par la nouvelle dans les index des moteurs.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Si le site propose des redirections, celles-ci sont permanentes (code 301).", 
        "solution": "\u00c9vitez toutes les formes de redirections ne passant pas le protocole HTTP comme la redirection via un \u00e9l\u00e9ment META dans l'ent\u00eate du code HTML de la page, ou l'utilisation de Javascript. Param\u00e9trez les redirections pour quelles envoient un code 301 (via .htaccess sur Apache ou via headers en PHP, par exemple).", 
        "thema": "Serveur", 
        "name": "75"
    }, 
    "11950": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque m\u00e9dia temporel synchronis\u00e9 pr\u00e9-enregistr\u00e9 ayant une interpr\u00e9tation en langue des signes, celle-ci est-elle pertinente ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.10.1"
    }, 
    "11951": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque m\u00e9dia temporel pr\u00e9-enregistr\u00e9 seulement audio ayant une interpr\u00e9tation en langue des signes, celle-ci est-elle pertinente ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.10.2"
    }, 
    "11935": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque m\u00e9dia temporel synchronis\u00e9 pr\u00e9-enregistr\u00e9 v\u00e9rifie-t-il une de ces conditions (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.1.3"
    }, 
    "11952": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque m\u00e9dia temporel synchronis\u00e9 pr\u00e9-enregistr\u00e9 v\u00e9rifie-t-il, si n\u00e9cessaire, une de ces conditions ? (hors cas particuliers)", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.11.1"
    }, 
    "16421": {
        "goal": "", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Les m\u00eames pages sont servies aux humains et aux robots.", 
        "solution": "", 
        "thema": "Alternatives", 
        "name": ""
    }, 
    "16422": {
        "goal": "<div>Permettre l'indexation de tous les contenus.&nbsp;Eviter les p\u00e9nalit\u00e9s.</div>", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "<div>Javascript ou les styles CSS ne sont pas utilis\u00e9s pour masquer un contenu de fa\u00e7on permanente.</div>", 
        "solution": "Ne pas utiliser de styles CSS ou javascript pour masquer dans les rendus utilisateur un contenu qui serait sp\u00e9cifiquement r\u00e9serv\u00e9 aux robots d'indexation.", 
        "thema": "Contenu", 
        "name": "21"
    }, 
    "11953": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque m\u00e9dia temporel pr\u00e9-enregistr\u00e9 seulement vid\u00e9o v\u00e9rifie-t-il, si n\u00e9cessaire, une de ces conditions ? (hors cas particuliers)", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.11.2"
    }, 
    "12057": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, l'augmentation de la taille des caract\u00e8res jusqu'\u00e0 200%, au moins, ne doit pas provoquer de perte d'information. Cette r\u00e8gle est-elle respect\u00e9e ?", 
        "solution": "", 
        "thema": "Pr\u00e9sentation de l'information", 
        "name": "10.4.3"
    }, 
    "19096": {
        "goal": "Permettre la restitution des \u00e9l\u00e9ments multim\u00e9dia au aides techniques.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser avec pr\u00e9caution l'attribut wmode avec la valeur transparent ou opaque pour l'\u00e9l\u00e9ment embed", 
        "solution": "Lorsque le contenu de l'\u00e9l\u00e9ment embed doit pouvoir \u00eatre lu par une aide technique, utiliser la valeur \u201cwindow\u201c pour l'attribut wmode ou le supprimer. Lorsque le contenu est uniquement d\u00e9coratif vous pouvez laisser l'attribut wmode transparent ou opaque", 
        "thema": "HTML", 
        "name": "8"
    }, 
    "11954": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque m\u00e9dia temporel synchronis\u00e9 pr\u00e9-enregistr\u00e9 ayant une audio-description \u00e9tendue synchronis\u00e9e, celle-ci est-elle pertinente ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.12.1"
    }, 
    "16232": {
        "goal": "Obtenir des liens depuis plusieurs sites \u00e0 forte influence.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Les vid\u00e9os sont soumises \u00e0 au moins deux diffuseurs externes.", 
        "solution": "Publier les contenus vid\u00e9o et audio via au moins deux services de diffusion publique.", 
        "thema": "Navigation", 
        "name": "68"
    }, 
    "11955": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque m\u00e9dia temporel pr\u00e9-enregistr\u00e9 seulement vid\u00e9o ayant une audio-description \u00e9tendue synchronis\u00e9e, celle-ci est-elle pertinente ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.12.2"
    }, 
    "16217": {
        "goal": "Renforcer les mots-clefs de la page.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Les URL contiennent des termes pr\u00e9sents dans les titres de pages.", 
        "solution": "Si vous utilisez un CMS, v\u00e9rifier qu'il est bien param\u00e9tr\u00e9 pour utiliser le titre de la page dans la construction de l'URL.", 
        "thema": "Hyperliens", 
        "name": "37"
    }, 
    "11956": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque m\u00e9dia temporel synchronis\u00e9 a-t-il, si n\u00e9cessaire, une transcription textuelle (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.13.1"
    }, 
    "11936": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque m\u00e9dia temporel pr\u00e9-enregistr\u00e9 seulement audio, ayant une transcription textuelle, celle-ci est-elle pertinente (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.2.1"
    }, 
    "19233": {
        "goal": "Permettre aux utilisateurs de distinguer le sujet d'un tableau de donn\u00e9es de la mani\u00e8re dont il est construit.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser un contenu d'\u00e9l\u00e9ment caption identique au contenu de l'attribut summary", 
        "solution": "Mettre dans l'\u00e9l\u00e9ment caption un contenu servant \u00e0 titrer le tableau et dans l'attribut summary un contenu pour d\u00e9crire l'organisation du tableau", 
        "thema": "HTML", 
        "name": "49"
    }, 
    "11957": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque m\u00e9dia temporel seulement vid\u00e9o a-t-il, si n\u00e9cessaire, une transcription textuelle (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.13.2"
    }, 
    "11958": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque m\u00e9dia temporel seulement vid\u00e9o ayant une transcription textuelle, celle-ci est-elle pertinente ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.14.1"
    }, 
    "11959": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque m\u00e9dia temporel synchronis\u00e9 ayant une transcription textuelle, celle-ci est-elle pertinente ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.14.2"
    }, 
    "16233": {
        "goal": "<div>Simplifier le crawl des moteurs.&nbsp;Am\u00e9liorer le ranking du site.</div>", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le site et le serveur sont configur\u00e9s pour d\u00e9livrer les pages de mani\u00e8re performante.", 
        "solution": "<div>\"Configurer le serveur Web pour qu'il puisse g\u00e9rer la mise en cache des \u00e9l\u00e9ments statiques et g\u00e9rer - au niveau applicatif - la possible mise en cache des \u00e9l\u00e9ments dynamiques.</div><div>En pratique, et en accord avec les sp\u00e9cifications HTTP le serveur devra envoyer les en-t\u00eates ETag, Date et Last-Modified correspondant respectivement \u00e0 l'identifiant de la ressource, \u00e0 la date de traitement de la requ\u00eate et \u00e0 la date de derni\u00e8re modification de la ressource demand\u00e9e. L'ensemble des dates \u00e9tant au format GMT. Ces informations pouvant \u00eatre compl\u00e9t\u00e9es par les champs Content-Length et Expires si la taille en octets et la date d'expiration exacte du contenu sont connues.</div><div>Afin d'informer les proxys et les clients finaux sur le comportement \u00e0 adopter vis \u00e0 vis des contenus mis en cache, les auteurs devront utiliser les en-t\u00eates HTTP Cache-Control et Pragma en accord avec les d\u00e9lais de r\u00e9actualisation n\u00e9cessaires et le caract\u00e8re priv\u00e9 de la diffusion.</div><div>La possible mise en cache pourra \u00eatre ainsi finalis\u00e9e par la soumission d'un message 304 Not Modified (sans la ressource demand\u00e9e dans le corps de la requ\u00eate) lorsque le serveur recevra un ent\u00eate If-Modified-Since contenant une date ant\u00e9rieure \u00e0 la date de modification de la dite ressource.</div><div>Activer le module Gzip ou Deflate du serveur pour les ressources textuelles (javascript, CSS, HTML).</div><div>Supprimer les espaces non n\u00e9cessaires et les commentaires dans les fichiers Javascript, par exemple en recourant \u00e0 des outils tels que crockford.com/javascript/jsmin ou developer.yahoo.com/yui/compressor/&nbsp;</div><div>Supprimer les espaces non n\u00e9cessaires et les commentaires dans les fichiers CSS, par exemple en recourant \u00e0 des outils tels que developer.yahoo.com/yui/compressor/ \"</div>", 
        "thema": "Serveur", 
        "name": "80"
    }, 
    "11960": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque m\u00e9dia temporel seulement son, seulement vid\u00e9o ou synchronis\u00e9, v\u00e9rifie-t-il une de ces conditions (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.15.1"
    }, 
    "11961": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque m\u00e9dia temporel seulement son en direct, seulement vid\u00e9o en direct ou synchronis\u00e9 en direct, v\u00e9rifie-t-il une de ces conditions (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.15.2"
    }, 
    "11937": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque m\u00e9dia temporel pr\u00e9-enregistr\u00e9 seulement vid\u00e9o v\u00e9rifie-t-il une de ces conditions (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.2.2"
    }, 
    "11962": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque m\u00e9dia non temporel v\u00e9rifie-t-il une de ces conditions (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.16.1"
    }, 
    "12382": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque media temporel synchronis\u00e9 ou seulement audio, ins\u00e9r\u00e9 via &lt;object&gt; ou &lt;embed&gt; et qui n\u00e9cessite une transcription textuelle v\u00e9rifie-t-il une de ces conditions (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.5.3"
    }, 
    "12383": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque media temporel synchronis\u00e9 ou seulement vid\u00e9o, ins\u00e9r\u00e9 via &lt;object&gt; ou &lt;embed&gt; et qui n\u00e9cessite une transcription textuelle v\u00e9rifie-t-il une de ces conditions (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.13.3"
    }, 
    "12384": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, pour chaque texte ou ensemble de textes, l'information ne doit pas \u00eatre donn\u00e9e uniquement par la forme ou la position. Cette r\u00e8gle est-elle impl\u00e9ment\u00e9e de fa\u00e7on pertinente ?", 
        "solution": "", 
        "thema": "Pr\u00e9sentation de l'information", 
        "name": "10.15.1"
    }, 
    "12385": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, pour chaque image ou ensemble d'images, l'information ne doit pas \u00eatre donn\u00e9e par la forme ou la position uniquement. Cette r\u00e8gle est-elle impl\u00e9ment\u00e9e de fa\u00e7on pertinente ?", 
        "solution": "", 
        "thema": "Pr\u00e9sentation de l'information", 
        "name": "10.15.2"
    }, 
    "12386": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, pour chaque m\u00e9dia temporel, l'information ne doit pas \u00eatre donn\u00e9e par la forme ou la position uniquement. Cette r\u00e8gle est-elle impl\u00e9ment\u00e9e de fa\u00e7on pertinente ?", 
        "solution": "", 
        "thema": "Pr\u00e9sentation de l'information", 
        "name": "10.15.3"
    }, 
    "11963": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque m\u00e9dia m\u00e9dia non temporel associ\u00e9 \u00e0 une alternative v\u00e9rifie-t-il une de ces conditions (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.16.2"
    }, 
    "11921": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque image v\u00e9hiculant une information, l'information ne doit pas \u00eatre donn\u00e9e uniquement par la couleur. Cette r\u00e8gle est-elle impl\u00e9ment\u00e9e de fa\u00e7on pertinente ?", 
        "solution": "", 
        "thema": "Couleurs", 
        "name": "3.2.3"
    }, 
    "12389": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, pour chaque expression inhabituelle ou limit\u00e9e, idiomatique ou de jargon ayant une d\u00e9finition, cette d\u00e9finition v\u00e9rifie-t-elle l\u2019une de ces conditions ?", 
        "solution": "", 
        "thema": "Consultation", 
        "name": "13.10.1"
    }, 
    "12390": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque contenu cryptique (art ascii, \u00e9moticon, syntaxe cryptique) v\u00e9rifie-t-il une de ces conditions ?", 
        "solution": "", 
        "thema": "Consultation", 
        "name": "13.12.1"
    }, 
    "11964": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque m\u00e9dia non temporel ayant une alternative v\u00e9rifie-t-il une des ces conditions ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.17.1"
    }, 
    "11965": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque s\u00e9quence sonore d\u00e9clench\u00e9e automatiquement via une balise object, applet, embed, un code javascript ou une propri\u00e9t\u00e9 bgsound v\u00e9rifie-t-il une de ces conditions ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.18.1"
    }, 
    "11966": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque m\u00e9dia temporel audio pr\u00e9-enregistr\u00e9 et diffus\u00e9 via une balise Object, Applet, Embed ou propos\u00e9 en t\u00e9l\u00e9chargement v\u00e9rifie-t-il une de ces conditions ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.19.1"
    }, 
    "11938": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque m\u00e9dia temporel synchronis\u00e9 pr\u00e9-enregistr\u00e9 v\u00e9rifie-t-il une de ces conditions (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.2.3"
    }, 
    "11967": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque m\u00e9dia temporel a-t-il, si n\u00e9cessaire, les fonctionnalit\u00e9s de contr\u00f4le de sa consultation ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.20.1"
    }, 
    "11968": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque m\u00e9dia temporel, chaque fonctionnalit\u00e9 est-elle accessible par le clavier et la souris ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.20.2"
    }, 
    "19099": {
        "goal": "Permettre \u00e0 l'utilisateur de pr\u00e9voir le comportement des formulaires qui ouvrent une nouvelle fen\u00eatre.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser avec pr\u00e9caution l'attribut target avec la valeur _blank pour l'\u00e9l\u00e9ment form", 
        "solution": "Ne pas utiliser l'attribut target _blank ou&nbsp;indiquer textuellement l'ouverture dans une nouvelle fen\u00eatre dans le formulaire ou sur le bouton permettant de valider le formulaire. Exemple&nbsp;: &lt;input type='submit' value='ok' title='Valider la recherche \u2013 nouvelle fen\u00eatre' /&gt;", 
        "thema": "HTML", 
        "name": "15"
    }, 
    "11969": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque m\u00e9dia temporel, chaque fonctionnalit\u00e9 est-elle activable par le clavier et la souris ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.20.3"
    }, 
    "16235": {
        "goal": "Simplifier le crawl.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Tous les hyperliens du site sont valides.", 
        "solution": "S'assurer que l'outil utilis\u00e9 pour la r\u00e9daction des contenus poss\u00e8de une gestion satisfaisante et coh\u00e9rente des hyperliens internes. \r\nLancer r\u00e9guli\u00e8rement un contr\u00f4le de la validit\u00e9 de l'ensemble des liens du site incluant les liens externes.", 
        "thema": "Hyperliens", 
        "name": "40"
    }, 
    "11970": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque m\u00e9dia non temporel, chaque fonctionnalit\u00e9 est-elle accessible par le clavier et la souris ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.21.1"
    }, 
    "11971": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque m\u00e9dia non temporel, chaque fonctionnalit\u00e9 est-elle activable par le clavier et la souris ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.21.2"
    }, 
    "11939": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque m\u00e9dia temporel synchronis\u00e9 pr\u00e9-enregistr\u00e9 v\u00e9rifie-t-il l'une de ces conditions (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.3.1"
    }, 
    "19236": {
        "goal": "Permettre \u00e0 l'utilisateur de personnaliser l'affichage de la page par l'utilisation d'une feuille de style personnelle qui se substitue \u00e0 celle pr\u00e9vue par le concepteur.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser l'\u00e9l\u00e9ment center", 
        "solution": "Utiliser les feuilles de styles pour d\u00e9finir la position et les caract\u00e9ristiques visuelles des \u00e9l\u00e9ments. ", 
        "thema": "HTML", 
        "name": "80"
    }, 
    "11972": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque m\u00e9dia temporel et non temporel ins\u00e9r\u00e9 via une balise Object, Applet ou Embed v\u00e9rifie-t-il une de ces conditions ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.22.1"
    }, 
    "11973": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque tableau de donn\u00e9es (balise table) a-t-il un attribut summary ?", 
        "solution": "", 
        "thema": "Tableaux", 
        "name": "5.1.1"
    }, 
    "11974": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque tableau de donn\u00e9es (balise table) ayant un attribut summary, le contenu de cet attribut est-il pertinent ?", 
        "solution": "", 
        "thema": "Tableaux", 
        "name": "5.2.1"
    }, 
    "16236": {
        "goal": "Simplifier l'indexation.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Les adresses URL ne contiennent pas d'indication concernant les param\u00e8tres de session.", 
        "solution": "Configurez les CMS, framework, serveur et langage utilis\u00e9s pour ne pas transmettre les param\u00e8tres de session dans l'URL.", 
        "thema": "Hyperliens", 
        "name": "34"
    }, 
    "11975": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque tableau de mise en forme (balise table) ayant un attribut summary, le contenu de cet attribut est-il vide (summary=\"\") ?", 
        "solution": "", 
        "thema": "Tableaux", 
        "name": "5.2.2"
    }, 
    "19305": {
        "goal": "Permettre l'association des cellules avec leurs ent\u00eates dans les tableaux de donn\u00e9es.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser un contenu d'attribut headers qui ne correspond \u00e0 aucune valeur d'attribut id pr\u00e9sent dans le m\u00eame tableau", 
        "solution": "Renseigner les attributs headers des \u00e9l\u00e9ments td avec les valeurs des attributs id des ent\u00eates associ\u00e9es. ", 
        "thema": "HTML", 
        "name": "65"
    }, 
    "11976": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque tableau de mise en forme, le contenu lin\u00e9aris\u00e9 reste-t-il compr\u00e9hensible ?", 
        "solution": "", 
        "thema": "Tableaux", 
        "name": "5.3.1"
    }, 
    "11940": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque m\u00e9dia temporel synchronis\u00e9 pr\u00e9-enregistr\u00e9 ayant des sous-titres synchronis\u00e9s, ces sous-titres sont-ils pertinents ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.4.1"
    }, 
    "11977": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque tableau de donn\u00e9es (balise table) a-t-il une balise caption ?", 
        "solution": "", 
        "thema": "Tableaux", 
        "name": "5.4.1"
    }, 
    "11978": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque tableau de donn\u00e9es (balise table) ayant une balise caption, le contenu de cette balise donne-t-il le titre du tableau ?", 
        "solution": "", 
        "thema": "Tableaux", 
        "name": "5.5.1"
    }, 
    "12058": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque d\u00e9claration CSS de couleurs de police (color), d'un \u00e9l\u00e9ment susceptible de contenir du texte, est-elle accompagn\u00e9e d'une d\u00e9claration de couleur de fond (background, background-color), au moins, h\u00e9rit\u00e9e d'un parent ?", 
        "solution": "", 
        "thema": "Pr\u00e9sentation de l'information", 
        "name": "10.5.1"
    }, 
    "11979": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque tableau de donn\u00e9es (balise table), chaque en-t\u00eate de colonnes a-t-il une balise th ?", 
        "solution": "", 
        "thema": "Tableaux", 
        "name": "5.6.1"
    }, 
    "19149": {
        "goal": "Permettre \u00e0 l'utilisateur de personnaliser l'affichage de la page par l'utilisation d'une feuille de style personnelle qui se substitue \u00e0 celle pr\u00e9vue par le concepteur.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser l\u2019\u00e9l\u00e9ment s avec pr\u00e9caution", 
        "solution": "Utiliser les feuilles de styles pour d\u00e9finir la position et les caract\u00e9ristiques visuelles des \u00e9l\u00e9ments. ", 
        "thema": "HTML", 
        "name": "25"
    }, 
    "16237": {
        "goal": "Simplifier la compr\u00e9hension de la langue des pages par les moteurs.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Les sous domaines et r\u00e9pertoires linguistiques utilisent le registre de code IANA.", 
        "solution": "Nommer les sous-domaines et les r\u00e9pertoires linguistiques \u00e0 l'aide des codes de langue indiqu\u00e9s par le registre des codes de langue de l'IANA : http://www.iana.org/assignments/language-subtag-registry&nbsp;", 
        "thema": "Domaines", 
        "name": "29"
    }, 
    "11980": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque tableau de donn\u00e9es (balise table), chaque en-t\u00eate de lignes a-t-il une balise th ?", 
        "solution": "", 
        "thema": "Tableaux", 
        "name": "5.6.2"
    }, 
    "18283": {
        "goal": "", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "La couleur de chaque mot clef ou texte  est diff\u00e9rente de la couleur du fond de la page.", 
        "solution": "", 
        "thema": "Pr\u00e9sentation", 
        "name": "0"
    }, 
    "11981": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque en-t\u00eate (balise th) s'appliquant \u00e0 la totalit\u00e9 de la ligne ou de la colonne poss\u00e8de-t-elle un attribut id unique ou un attribut scope ?", 
        "solution": "", 
        "thema": "Tableaux", 
        "name": "5.7.1"
    }, 
    "11941": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque m\u00e9dia temporel seulement audio en direct v\u00e9rifie-t-il une de ces conditions (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.5.1"
    }, 
    "11982": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque en-t\u00eate (balise th) s'appliquant \u00e0 la totalit\u00e9 de la ligne ou de la colonne et poss\u00e9dant un attribut scope v\u00e9rifie-t-elle une de ces conditions ?", 
        "solution": "", 
        "thema": "Tableaux", 
        "name": "5.7.2"
    }, 
    "11983": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque en-t\u00eate (balise th) ne s'appliquant pas \u00e0 la totalit\u00e9 de la ligne ou de la colonne v\u00e9rifie-t-il ces conditions ?", 
        "solution": "", 
        "thema": "Tableaux", 
        "name": "5.7.3"
    }, 
    "11984": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque cellule (balise td ou th) associ\u00e9e \u00e0 un ou plusieurs en-t\u00eates poss\u00e9dant un attribut id v\u00e9rifie-t-elle ces conditions ?", 
        "solution": "", 
        "thema": "Tableaux", 
        "name": "5.7.4"
    }, 
    "11985": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque tableau de mise en forme (balise table) v\u00e9rifie-t-il ces conditions ?", 
        "solution": "", 
        "thema": "Tableaux", 
        "name": "5.8.1"
    }, 
    "11986": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque lien texte, le contexte du lien permet-il d'en comprendre la fonction et la destination si n\u00e9cessaire (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Liens", 
        "name": "6.1.1"
    }, 
    "11942": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque m\u00e9dia temporel synchronis\u00e9 en direct v\u00e9rifie-t-il une de ces conditions (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.5.2"
    }, 
    "19239": {
        "goal": "Permettre la restitution de la nature des contenus (ici une liste de d\u00e9finition) aux  utilisateurs qui ne per\u00e7oivent pas la mise en page originale.\r\nEviter l'utilisation d'\u00e9l\u00e9ment en fonction de la mani\u00e8re dont ils sont restitu\u00e9s visuellement.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Utiliser un \u00e9l\u00e9ment dt comme premier enfant de l'\u00e9l\u00e9ment dl", 
        "solution": "Utiliser les \u00e9l\u00e9ments dl et dt et dd pour baliser les listes de d\u00e9finition.", 
        "thema": "HTML", 
        "name": "25"
    }, 
    "11987": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque lien image (contenu de l'attribut alt ou texte entre <object> et </object>), le contexte du lien permet-il d'en comprendre la fonction et la destination si n\u00e9cessaire (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Liens", 
        "name": "6.1.2"
    }, 
    "19120": {
        "goal": "Permettre d'\u00e9viter la redondance lorsqu'un lien est compos\u00e9 \u00e0 la fois de texte et d'une image.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser avec pr\u00e9caution l'attribut alt vide pour les \u00e9l\u00e9ments img descendant d'\u00e9l\u00e9ments a qui contiennent \u00e9galement du texte", 
        "solution": "Mettre un alt=\"\" sur l'\u00e9l\u00e9ment img lorsque ce dernier est inclus dans un lien textuel dont le libell\u00e9 permet d\u00e9j\u00e0 de conna\u00eetre la destination du lien.", 
        "thema": "HTML", 
        "name": "6"
    }, 
    "19171": {
        "goal": "Permettre un comportement \u00e9quivalent et/ou l'acc\u00e8s \u00e0 une information \u00e9quivalente quel que soit le p\u00e9riph\u00e9rique d'entr\u00e9e des utilisateurs", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser avec pr\u00e9caution le gestionnaire d'\u00e9v\u00e9nement onblur lorsque vous n'utilisez pas le gestionnaire d'\u00e9v\u00e9nement onmouseout", 
        "solution": "Lors de l'utilisation de l'\u00e9v\u00e9nement onblur, inclure un comportement \u00e9quivalent sur l'\u00e9v\u00e9nement onmouseout ou pr\u00e9voir un autre \u00e9l\u00e9ment permettant de r\u00e9aliser la m\u00eame action via la souris", 
        "thema": "JS", 
        "name": "33"
    }, 
    "11988": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque lien de type zone cliquable (contenu de l'attribut alt d'une balise area), le contexte du lien permet-il d'en comprendre la fonction et la destination si n\u00e9cessaire (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Liens", 
        "name": "6.1.3"
    }, 
    "11922": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque propri\u00e9t\u00e9 de fond d'\u00e9l\u00e9ment CSS v\u00e9hiculant une information, l'information ne doit pas \u00eatre donn\u00e9e uniquement par la couleur. Cette r\u00e8gle est-elle impl\u00e9ment\u00e9e de fa\u00e7on pertinente ?", 
        "solution": "", 
        "thema": "Couleurs", 
        "name": "3.2.4"
    }, 
    "11989": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque lien composite, le contexte du lien permet-il d'en comprendre la fonction et la destination si n\u00e9cessaire (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Liens", 
        "name": "6.1.4"
    }, 
    "16239": {
        "goal": "Simplifier la compr\u00e9hension du contenu de la page.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le code source de chaque page contient une metadonn\u00e9e qui d\u00e9finit le jeu de caract\u00e8res.", 
        "solution": "Utiliser dans la section HEAD de la page l'\u00e9l\u00e9ment META http-equiv=\"Content-Type\" et pr\u00e9ciser le jeu de caract\u00e8re utilis\u00e9 dans son attribut content.", 
        "thema": "M\u00e9tadonn\u00e9es", 
        "name": "47"
    }, 
    "16171": {
        "goal": "<div>Simplifier la lecture des alternatives par les moteurs.&nbsp;Inciter \u00e0 \u00e9crire des alternatives br\u00e8ves et percutantes.</div>", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "La longueur des alternatives textuelles est inf\u00e9rieure ou \u00e9gale \u00e0 80 caract\u00e8res.", 
        "solution": "Limiter \u00e0 80 caract\u00e8res au plus, espaces compris, le contenu de l'attribut ALT des \u00e9l\u00e9ments IMG, AREA, INPUT type image, APPLET. Le cas \u00e9ch\u00e9ant, recourir \u00e0 un automatisme du CMS pour tronquer les contenus automatiquement ins\u00e9r\u00e9s comme alternative. Mettre en place dans l'interface de saisie des contenus une validation de la longueur des champs d'alternatives d'images avertissant le r\u00e9dacteur et lui permettant de corriger celles-ci avant la publication.", 
        "thema": "Alternatives", 
        "name": "4"
    }, 
    "11943": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque m\u00e9dia temporel seulement audio en direct v\u00e9rifie-t-il une de ces conditions ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.6.1"
    }, 
    "16654": {
        "goal": "Eviter le contenu dupliqu\u00e9.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Les URL alternatives vers chaque page font l'objet d'une redirection 301 vers l'URL principale.", 
        "solution": "Choisir une URL principale et rediriger tous les domaines alternatifs \u00e9ventuels vers ce domaine (via .htaccess sous Apache, par exemple).", 
        "thema": "Serveur", 
        "name": "79"
    }, 
    "16655": {
        "goal": "Eviter le contenu dupliqu\u00e9.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Les liens internes utilisent une URL unique pour chaque page.", 
        "solution": "N'utilisez pas d'URL alternative \u00e0 l'int\u00e9rieur de votre site. Une m\u00eame ressource doit toujours \u00eatre appel\u00e9 avec la m\u00eame URL sur l'ensemble du site.", 
        "thema": "Hyperliens", 
        "name": "41"
    }, 
    "16656": {
        "goal": "Permettre l'am\u00e9lioration de la popularit\u00e9.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le site n'interdit pas la mise en place de liens entrants.", 
        "solution": "Adopter une politique ou des conditions d'utilisation qui autorise par d\u00e9faut les liens entrants.", 
        "thema": "Navigation", 
        "name": "62"
    }, 
    "16657": {
        "goal": "", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Chaque contenu audio et vid\u00e9o est accompagn\u00e9 de sa transcription textuelle", 
        "solution": "", 
        "thema": "Contenu", 
        "name": ""
    }, 
    "16661": {
        "goal": "", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Certaines pages doivent utiliser des micro-donn\u00e9es", 
        "solution": "", 
        "thema": "Navigation", 
        "name": ""
    }, 
    "16662": {
        "goal": "", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Il doit y avoir les fichiers robots.txt et sitemap.xml", 
        "solution": "", 
        "thema": "Navigation", 
        "name": ""
    }, 
    "16663": {
        "goal": "", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le nom des images doit \u00eatre explicite", 
        "solution": "", 
        "thema": "Alternatives", 
        "name": ""
    }, 
    "16664": {
        "goal": "", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Des liens internes dot\u00e9s d'ancres significatives renvoient vers des pages pertinentes du site.", 
        "solution": "", 
        "thema": "Hyperliens", 
        "name": ""
    }, 
    "16665": {
        "goal": "", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le site ne propose pas de contenu dupliqu\u00e9.", 
        "solution": "", 
        "thema": "Contenu", 
        "name": ""
    }, 
    "16666": {
        "goal": "", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Chaque fragment de texte r\u00e9dig\u00e9 dans une langue diff\u00e9rente de la langue principale indique la langue qu'il utilise", 
        "solution": "", 
        "thema": "Contenu", 
        "name": ""
    }, 
    "16667": {
        "goal": "", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Les redirections \u00e9ventuelles ne sont pas effectu\u00e9es \u00e0 l'aide de code http 302", 
        "solution": "", 
        "thema": "Navigation", 
        "name": ""
    }, 
    "16668": {
        "goal": "", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le code html des pages contient un minimum d'\u00e9l\u00e9ments de structure n'ayant pas de sens s\u00e9mantique.", 
        "solution": "", 
        "thema": "Navigation", 
        "name": ""
    }, 
    "11994": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque lien texte ayant un titre de lien (attribut title), le contenu de cet attribut est-il pertinent ?", 
        "solution": "", 
        "thema": "Liens", 
        "name": "6.2.1"
    }, 
    "16240": {
        "goal": "Permettre aux moteurs d'acc\u00e9der \u00e0 tous les contenus.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Les styles ne sont pas utilis\u00e9s pour g\u00e9n\u00e9rer du contenu.", 
        "solution": "Ne pas utiliser la propri\u00e9t\u00e9 CSS content ainsi que les images d'arri\u00e8re-plan CSS pour afficher dans la page un contenu absent de la source HTML.", 
        "thema": "Pr\u00e9sentation", 
        "name": "71"
    }, 
    "16674": {
        "goal": "", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Chaque contenu multim\u00e9dia (vid\u00e9o, audio, flash, etc.) est accompagn\u00e9 d'une alternative textuelle", 
        "solution": "", 
        "thema": "Contenu", 
        "name": ""
    }, 
    "11995": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque lien image ayant un titre de lien (attribut title), le contenu de cet attribut est-il pertinent ?", 
        "solution": "", 
        "thema": "Liens", 
        "name": "6.2.2"
    }, 
    "16676": {
        "goal": "", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "La version compl\u00e8te de chaque sigle pertinent est donn\u00e9e de fa\u00e7on adjacente \u00e0 celui-ci.", 
        "solution": "", 
        "thema": "Contenu", 
        "name": ""
    }, 
    "19359": {
        "goal": "", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser un contenu d'attribut alt identique au texte pr\u00e9sent dans un lien si l'\u00e9l\u00e9ment img est un descendant d'\u00e9l\u00e9ment a contenant \u00e9galement du texte", 
        "solution": "", 
        "thema": "HTML", 
        "name": "42"
    }, 
    "16172": {
        "goal": "Renforcer les m\u00eames mots-clefs.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Les termes pr\u00e9sents dans l'alternative textuelle des images sont \u00e9galement pr\u00e9sents dans le contenu de la page.", 
        "solution": "Renseigner l'attribut ALT des \u00e9l\u00e9ments IMG, AREA, APPLET en reprenant des mots-cl\u00e9s pr\u00e9sents dans le contenu textuel auquel elles sont associ\u00e9es dans la page.", 
        "thema": "Alternatives", 
        "name": "5"
    }, 
    "11996": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "pour chaque zone cliquable (balise area) ayant un titre de lien (attribut title), le contenu de cet attribut est-il pertinent ?", 
        "solution": "", 
        "thema": "Liens", 
        "name": "6.2.3"
    }, 
    "11944": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque m\u00e9dia temporel synchronis\u00e9 en direct v\u00e9rifie-t-il une de ces conditions ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.6.2"
    }, 
    "16684": {
        "goal": "", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Pour \u00e9viter les anomalies statistiques, on introduit une proportion de liens entrants en nofollow", 
        "solution": "", 
        "thema": "Hyperliens", 
        "name": ""
    }, 
    "16685": {
        "goal": "", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Si, dans une page, plusieurs liens sont fait vers une m\u00eame destination, les liens redondants contiennent une ancre", 
        "solution": "", 
        "thema": "Hyperliens", 
        "name": ""
    }, 
    "16686": {
        "goal": "", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Un lien est fait vers la version canonique d'une page", 
        "solution": "", 
        "thema": "Hyperliens", 
        "name": ""
    }, 
    "11997": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque lien composite ayant un titre de lien (attribut title), le contenu de cet attribut est-il pertinent ?", 
        "solution": "", 
        "thema": "Liens", 
        "name": "6.2.4"
    }, 
    "16690": {
        "goal": "", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Les pages de contenu non significatif et les r\u00e9sultats de formulaires ne seront pas indexables", 
        "solution": "", 
        "thema": "M\u00e9tadonn\u00e9es", 
        "name": ""
    }, 
    "16691": {
        "goal": "", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Les \u00e9l\u00e9ments r\u00e9currents de navigation (menus) sont plac\u00e9s en fin de page", 
        "solution": "", 
        "thema": "Structure", 
        "name": ""
    }, 
    "11998": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque intitul\u00e9 de lien texte est-il explicite hors contexte (hors cas particulier) ?", 
        "solution": "", 
        "thema": "Liens", 
        "name": "6.3.1"
    }, 
    "11999": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque intitul\u00e9 de lien image (contenu de l'attribut alt ou contenu entre &lt;object&gt;&lt;/object&gt;) est-il explicite hors contexte (hors cas particulier) ?", 
        "solution": "", 
        "thema": "Liens", 
        "name": "6.3.2"
    }, 
    "16241": {
        "goal": "Fournir aux moteurs un contenu pertinent et riche en mots-clefs.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "La page d'accueil expose la nature des contenus et services propos\u00e9s.", 
        "solution": "Pr\u00e9voir sur la page d'accueil une information, une phrase, un contenu r\u00e9sumant les contenus et services propos\u00e9s sur le site. ", 
        "thema": "Contenu", 
        "name": "18"
    }, 
    "12000": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque intitul\u00e9 de lien de type zone cliquable (contenu de l'attribut alt d'une balise area) est-il explicite hors contexte (hors cas particulier) ?", 
        "solution": "", 
        "thema": "Liens", 
        "name": "6.3.3"
    }, 
    "12001": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque lien composite (contenu texte et de l'attribut alt) est-il explicite hors contexte (hors cas particuliers)", 
        "solution": "", 
        "thema": "Liens", 
        "name": "6.3.4"
    }, 
    "11945": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque m\u00e9dia temporel synchronis\u00e9 pr\u00e9-enregistr\u00e9 v\u00e9rifie-t-il une de ces conditions ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.7.1"
    }, 
    "12002": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque lien identique de type texte a-t-il les m\u00eames fonction et destination ?", 
        "solution": "", 
        "thema": "Liens", 
        "name": "6.4.1"
    }, 
    "12003": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque lien identique de type image a-t-il les m\u00eames fonction et destination ?", 
        "solution": "", 
        "thema": "Liens", 
        "name": "6.4.2"
    }, 
    "12059": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque d\u00e9claration de couleur de fond (background, background-color), d'un \u00e9l\u00e9ment susceptible de contenir du texte, est-elle accompagn\u00e9e d'une d\u00e9claration de couleur de police (color) au moins, h\u00e9rit\u00e9e d'un parent ?", 
        "solution": "", 
        "thema": "Pr\u00e9sentation de l'information", 
        "name": "10.5.2"
    }, 
    "12004": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque lien identique de type zone cliquable a-t-il les m\u00eames fonction et destination ?", 
        "solution": "", 
        "thema": "Liens", 
        "name": "6.4.3"
    }, 
    "16242": {
        "goal": "Permettre aux moteurs d'indexer le contenu des PDF.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le texte des documents PDF internes est s\u00e9lectionnable.", 
        "solution": "Ne pas diffuser de PDF issu du scan de documents initiaux mais uniquement des documents convertis au format num\u00e9rique (par OCR le cas \u00e9ch\u00e9ant).", 
        "thema": "Contenu", 
        "name": "22"
    }, 
    "12005": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque lien identique de type composite a-t-il les m\u00eames fonction et destination ?", 
        "solution": "", 
        "thema": "Liens", 
        "name": "6.4.4"
    }, 
    "16228": {
        "goal": "<div>Am\u00e9liorer la cr\u00e9dibilit\u00e9 du site.&nbsp;Fournir des contenus indexables aux moteurs.</div>", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le site ne contient pas de liens vers des pages en construction.", 
        "solution": "Lors de la mise en place de nouvelles pages ou rubriques, aucun lien vers celles-ci n'est mis en place dans la partie publique du site avant leur ach\u00e8vement complet.&nbsp;", 
        "thema": "Navigation", 
        "name": "67"
    }, 
    "19311": {
        "goal": "Permettre \u00e0 l'utilisateur de personnaliser l'affichage de la page par l'utilisation d'une feuille de style personnelle qui se substitue \u00e0 celle pr\u00e9vue par le concepteur.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser l'\u00e9l\u00e9ment tt", 
        "solution": "Utiliser les feuilles de styles pour d\u00e9finir la position et les caract\u00e9ristiques visuelles des \u00e9l\u00e9ments. ", 
        "thema": "HTML", 
        "name": "62"
    }, 
    "12006": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque image r\u00e9active cot\u00e9 serveur (balise img avec l'attribut ismap) v\u00e9rifie-t-elle une de ces conditions ?", 
        "solution": "", 
        "thema": "Liens", 
        "name": "6.5.1"
    }, 
    "11946": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque m\u00e9dia temporel pr\u00e9-enregistr\u00e9 seulement vid\u00e9o ayant une audio-description synchronis\u00e9e, celle-ci est-elle pertinente ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.8.1"
    }, 
    "12007": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque image r\u00e9active cot\u00e9 serveur (balise img avec l'attribut ismap) v\u00e9rifie-t-elle une de ces conditions ?", 
        "solution": "", 
        "thema": "Liens", 
        "name": "6.5.2"
    }, 
    "12008": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque image r\u00e9active cot\u00e9 serveur (balise img avec l'attribut ismap) v\u00e9rifie-t-elle une de ces conditions ?", 
        "solution": "", 
        "thema": "Liens", 
        "name": "6.5.3"
    }, 
    "12009": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque lien (balise a), \u00e0 l'exception des ancres nomm\u00e9es, a-t-il un intitul\u00e9 entre &lt;a&gt; et &lt;/a&gt; ?", 
        "solution": "", 
        "thema": "Liens", 
        "name": "6.6.1"
    }, 
    "16243": {
        "goal": "<div>Optimiser la vitesse d'acc\u00e8s.&nbsp;Simplifier la compr\u00e9hension de la cible par les moteurs.</div>", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Si le nom de domaine correspond \u00e0 une zone g\u00e9ographique, le site est h\u00e9berg\u00e9 dans cette zone.", 
        "solution": "Si le domaine de votre site comporte une extension en .fr, par exemple, \u00e9tablir l'h\u00e9bergement en France ou dans un pays limitrophe.", 
        "thema": "Domaines", 
        "name": "31"
    }, 
    "12010": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque script v\u00e9rifie-t-il, si n\u00e9cessaire, une de ces conditions (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Script", 
        "name": "7.1.1"
    }, 
    "12011": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque script d\u00e9clenchant l'ouverture d'une nouvelle fen\u00eatre a-t-il une alternative ?", 
        "solution": "", 
        "thema": "Script", 
        "name": "7.1.2"
    }, 
    "11947": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque m\u00e9dia temporel synchronis\u00e9 ayant une audio-description synchronis\u00e9e, celle-ci est-elle pertinente ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.8.2"
    }, 
    "19155": {
        "goal": "Permettre aux utilisateurs de distinguer les donn\u00e9es fournies et la mani\u00e8re avec laquelle chaque tableau de donn\u00e9es est construit.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser avec pr\u00e9caution des contenus identiques pour plusieurs attribut summary", 
        "solution": "D\u00e9crire les donn\u00e9es et la mani\u00e8re dont est construit chaque tableau de donn\u00e9es et ajouter cette description \u00e0 l'attribut summary des tableaux.", 
        "thema": "HTML", 
        "name": "11"
    }, 
    "12012": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque script d\u00e9butant par la balise script et ayant une alternative v\u00e9rifie-t-il une de ces conditions ?", 
        "solution": "", 
        "thema": "Script", 
        "name": "7.2.1"
    }, 
    "16683": {
        "goal": "", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le volume de liens entrants est \u00e9quitablement r\u00e9parti entre la home page et le reste des pages.", 
        "solution": "", 
        "thema": "Hyperliens", 
        "name": ""
    }, 
    "12013": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque \u00e9l\u00e9ment non textuel mis \u00e0 jour par un script (dans la page, un cadre ou un cadre en ligne) et ayant une alternative v\u00e9rifie-t-il ces conditions ?", 
        "solution": "", 
        "thema": "Script", 
        "name": "7.2.2"
    }, 
    "11923": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque m\u00e9dia temporel v\u00e9hiculant une information, l'information ne doit pas \u00eatre donn\u00e9e uniquement par la couleur. Cette r\u00e8gle est-elle impl\u00e9ment\u00e9e de fa\u00e7on pertinente ?", 
        "solution": "", 
        "thema": "Couleurs", 
        "name": "3.2.5"
    }, 
    "12014": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque \u00e9l\u00e9ment poss\u00e9dant un gestionnaire d'\u00e9v\u00e9nement contr\u00f4l\u00e9 par un script v\u00e9rifie-t-il une de ces conditions (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Script", 
        "name": "7.3.1"
    }, 
    "16244": {
        "goal": "", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Les noms de rubriques ne contiennent pas de caract\u00e8res sp\u00e9ciaux.", 
        "solution": "", 
        "thema": "Navigation", 
        "name": ""
    }, 
    "12015": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque \u00e9l\u00e9ment poss\u00e9dant un gestionnaire d'\u00e9v\u00e9nement contr\u00f4l\u00e9 par un script v\u00e9rifie-t-il une de ces conditions (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Script", 
        "name": "7.3.2"
    }, 
    "12016": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Un script ne doit pas supprimer le focus d'un \u00e9l\u00e9ment qui le re\u00e7oit. Cette r\u00e8gle est-elle respect\u00e9e (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Script", 
        "name": "7.3.3"
    }, 
    "12017": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque script qui g\u00e9n\u00e8re ou contr\u00f4le un composant d'interface v\u00e9rifie-t-il, si n\u00e9cessaire, une de ces conditions ?", 
        "solution": "", 
        "thema": "Script", 
        "name": "7.4.1"
    }, 
    "12018": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque fonctionnalit\u00e9 d'insertion de contenu contr\u00f4l\u00e9 par un script utilise-t-elle, si possible, des propri\u00e9t\u00e9s et m\u00e9thodes conformes \u00e0 la sp\u00e9cification DOM (Document Object Model) ?", 
        "solution": "", 
        "thema": "Script", 
        "name": "7.4.2"
    }, 
    "12019": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque script qui initie un changement de contexte v\u00e9rifie-t-il une de ces conditions ?", 
        "solution": "", 
        "thema": "Script", 
        "name": "7.5.1"
    }, 
    "12020": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque script qui provoque une alerte non sollicit\u00e9e est-il contr\u00f4lable par l'utilisateur (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Script", 
        "name": "7.6.1"
    }, 
    "16177": {
        "goal": "<div>Eviter que les r\u00e9sultats des moteurs soient des pages partielles (cadre int\u00e9rieur uniquement par exemple).&nbsp;Simplifier le crawl des moteurs.</div>", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le site n'emploie pas la technique des jeux de cadres", 
        "solution": "Ne pas utiliser les \u00e9l\u00e9ments FRAMESET, FRAME et NOFRAMES. ", 
        "thema": "Cadres", 
        "name": "9"
    }, 
    "12021": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque page Web, le type de document (balise doctype) est-il pr\u00e9sent ?", 
        "solution": "", 
        "thema": "\u00c9l\u00e9ments Obligatoires", 
        "name": "8.1.1"
    }, 
    "12022": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque page Web, le type de document (balise doctype) est-il valide ?", 
        "solution": "", 
        "thema": "\u00c9l\u00e9ments Obligatoires", 
        "name": "8.1.2"
    }, 
    "12023": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque page Web poss\u00e9dant une d\u00e9claration de type de document, celle-ci est-elle situ\u00e9e avant la balise HTML dans le code source ?", 
        "solution": "", 
        "thema": "\u00c9l\u00e9ments Obligatoires", 
        "name": "8.1.3"
    }, 
    "12024": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque d\u00e9claration de type de document, le code source de la page v\u00e9rifie-t-il ces conditions ?", 
        "solution": "", 
        "thema": "\u00c9l\u00e9ments Obligatoires", 
        "name": "8.2.1"
    }, 
    "16246": {
        "goal": "Eviter le contenu dupliqu\u00e9.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le contenu de chaque nom de domaine lui est propre.", 
        "solution": "Ne pas dupliquer de contenu entre les diff\u00e9rents noms de domaine ou de sous-domaine.", 
        "thema": "Domaines", 
        "name": "27"
    }, 
    "12025": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque d\u00e9claration de type de document, le code source de la page ne doit pas utilis\u00e9 d'\u00e9l\u00e9ments obsol\u00e8tes. Cette r\u00e8gle est-elle respect\u00e9e ?", 
        "solution": "", 
        "thema": "\u00c9l\u00e9ments Obligatoires", 
        "name": "8.2.2"
    }, 
    "12026": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque page Web, l'indication de langue par d\u00e9faut v\u00e9rifie-t-elle une de ces conditions ?", 
        "solution": "", 
        "thema": "\u00c9l\u00e9ments Obligatoires", 
        "name": "8.3.1"
    }, 
    "12027": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque page Web ayant une langue par d\u00e9faut, le code de langue v\u00e9rifie-t-il ces conditions ?", 
        "solution": "", 
        "thema": "\u00c9l\u00e9ments Obligatoires", 
        "name": "8.4.1"
    }, 
    "19179": {
        "goal": "Eviter aux utilisateurs un changement de contexte sans validation explicite de leur part.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser avec pr\u00e9caution le gestionnaire d'\u00e9v\u00e9nement onfocus pour d\u00e9clencher la m\u00e9thode submit", 
        "solution": "Pr\u00e9voir un bouton de validation explicite que l'utilisateur devra d\u00e9clencher \u00e0 cette fin pour soumettre un formulaire.\r\nAlternativement, il est possible d'informer au pr\u00e9alable les utilisateurs de ce comportement.", 
        "thema": "JS", 
        "name": "41"
    }, 
    "12028": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque page Web a-t-elle un titre de page (balise title) ?", 
        "solution": "", 
        "thema": "\u00c9l\u00e9ments Obligatoires", 
        "name": "8.5.1"
    }, 
    "12060": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque utilisation d'une image pour cr\u00e9er une couleur de fond d'un \u00e9l\u00e9ment susceptible de contenir du texte, via CSS (background, background-image), est-elle accompagn\u00e9e d'une d\u00e9claration de couleur de fond (background, background-color), au moins, h\u00e9rit\u00e9e d'un parent ?", 
        "solution": "", 
        "thema": "Pr\u00e9sentation de l'information", 
        "name": "10.5.3"
    }, 
    "16681": {
        "goal": "", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le ratio texte/code de chaque page vis\u00e9e pour le r\u00e9f\u00e9rencement est sup\u00e9rieur \u00e0 15%.", 
        "solution": "", 
        "thema": "Structure", 
        "name": ""
    }, 
    "12029": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque page Web ayant un titre de page (balise title), le contenu de cette balise est-il pertinent ?", 
        "solution": "", 
        "thema": "\u00c9l\u00e9ments Obligatoires", 
        "name": "8.6.1"
    }, 
    "16247": {
        "goal": "<div>Avoir au moins un titre optimis\u00e9 et propre \u00e0 chaque page.<br></div>", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le site comporte autant de titres de section H1 diff\u00e9rents que de pages.", 
        "solution": "R\u00e9diger le contenu des \u00e9l\u00e9ments H1 de mani\u00e8re \u00e0 ce que chacun soit unique sur l'ensemble du site.", 
        "thema": "Structure", 
        "name": "15"
    }, 
    "500": {
        "goal": "<ul>\r\n    <li>Permettre la navigation et la consultation pour les utilisateurs plac\u00e9s dans des contextes o\u00f9 les images ne sont pas perceptibles (navigateurs texte, lecteur d'\u00e9cran, images d\u00e9sactiv\u00e9es)</li>\r\n    <li>Permettre aux robots d'exploiter l'information v\u00e9hicul\u00e9e par les images (r\u00e9f\u00e9rencement, traduction automatique)</li>\r\n    <li>Permettre l'affichage d'un texte pendant la chargement des images</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Chaque image est dot\u00e9e d'une alternative textuelle appropri\u00e9e", 
        "solution": "<p>L'attribut <code>alt</code> est pr\u00e9sent pour chaque \u00e9l\u00e9ment <code>&lt;img&gt;</code>, sous la forme&nbsp;:</p>\r\n<ul>\r\n    <li><code>alt=\"\"</code> pour les images qui ne v\u00e9hiculent pas d'information n\u00e9cessaire \u00e0 la compr\u00e9hension du texte&nbsp;: <code>&lt;img src=\"spacer.gif\" height=\"1\" width=\"1\" alt=\"\"&gt;</code>. Attention&nbsp;: l'omission de l'attribut <code>alt</code> n'est pas l'\u00e9quivalent d'un attribut vide et n'est pas acceptable.</li>\r\n    <li><code>alt=\"_fonction_\"</code> pour les images liens, avec comme contenu (_fonction_) la fonction du lien&nbsp;: <code>&lt;img src=\"\u2026\" alt=\"Accueil\"&gt;</code> pour la traditionnelle ic\u00f4ne \"home\".<li>\r\n    <li><code>alt=\"_description_\"</code> pour les images dont la perception est n\u00e9cessaire \u00e0 la compr\u00e9hension du contenu.</li>\r\n</ul>\r\n<p>La description de l'image ou de sa fonction doit \u00eatre concise. Aucune limite de longueur normative n'existe, mais 120 caract\u00e8res serait un maximum indicatif. Le seuil limite d'une alternative textuelle n'est pas tant sa longueur que la complexit\u00e9 de l'information : si cette derni\u00e8re n\u00e9cessite d'\u00eatre structur\u00e9e (\u00e0 l'aide d'\u00e9l\u00e9ments de tableaux, de listes, de titres, de paragraphes, etc.), il ne s'agit plus de la fournir sous la forme d'une alternative textuelle simple, mais de donner une description \u00e9tendue de l'image. Celle-ci prend la forme d'un contenu textuel structur\u00e9, pr\u00e9sent dans la m\u00eame page que l'image ou dans une page imm\u00e9diatement accessible \u00e0 partir de celle-ci.</p></li></ul>", 
        "thema": "Alternatives                 ", 
        "name": "1"
    }, 
    "501": {
        "goal": "<ul>\r\n    <li>Faciliter la validation du code source et favoriser un rendu pr\u00e9visible quelque-soit le navigateur (en mode de rendu strict pour les moteurs de rendu CSS)</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le code source de chaque page d\u00e9bute par un d\u00e9claration de type de document (doctype) dont la syntaxe est conforme \u00e0 celles recommand\u00e9es par le W3C", 
        "solution": "<ul>\r\n    <li>Placer la DTD en d\u00e9but de code source (elle ne doit \u00eatre pr\u00e9c\u00e9d\u00e9e d'aucun commentaire, balisage ou prologue XML)</li>\r\n    <li>Utiliser uniquement une DTD indiqu\u00e9e dans http://www.w3.org/QA/2002/04/valid-dtd-list.html</li>\r\n</ul>", 
        "thema": "Code", 
        "name": "2"
    }, 
    "502": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs qui le souhaitent de visualiser la structure du contenu de la page</li>\r\n    <li>Permettre aux machines et aux outils d'indexation d'extraire le plan de chaque page</li>\r\n    <li>Am\u00e9liorer le r\u00e9f\u00e9rencement en facilitant l'interpr\u00e9tation du contenu par les robots d'indexation</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le contenu de chaque page est organis\u00e9 selon une structure de titres et sous-titres hi\u00e9rarchis\u00e9e", 
        "solution": "<ul>\r\n    <li>Structurer le document en titres et sous-titres \u00e0 l'aide des \u00e9l\u00e9ments HTML <code>&lt;h1&gt;</code> \u00e0 <code>&lt;h6&gt;</code></li>\r\n    <li>Veiller \u00e0 ce que la structure ne comporte pas de \"trous\"</li>\r\n    <li>Veiller \u00e0 ce que chaque page comporte au moins un titre de niveau 1 avec l'\u00e9l\u00e9ment <code>&lt;h1&gt;</code></li>\r\n</ul>", 
        "thema": "Code", 
        "name": "3"
    }, 
    "503": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs de conserver la maitrise de leur environnement de travail</li>\r\n    <li>\u00c9viter des interruptions ou des pertes d'information en cours de lecture, notamment pour les utilisateurs \u00e9quip\u00e9s de lecteurs d'\u00e9cran</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le site n'impose pas de redirection ou de rafraichissement automatique c\u00f4t\u00e9 client", 
        "solution": "<p>Ne pas utiliser&nbsp;:</p>\r\n<ul>\r\n    <li>l'\u00e9l\u00e9ment <code>&lt;meta http-equiv=\"refresh\"&gt;</code></li>\r\n</ul></li></ul>", 
        "thema": "Code", 
        "name": "4"
    }, 
    "504": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les styles ne sont pas utilis\u00e9s pour g\u00e9n\u00e9rer du contenu", 
        "solution": "", 
        "thema": "Code", 
        "name": "5"
    }, 
    "505": {
        "goal": "<ul>\r\n    <li>\u00c9viter les risques de confusion sur une date de la part des utilisateurs</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les dates sont pr\u00e9sent\u00e9es dans des formats explicites", 
        "solution": "<p>S'assurer que&nbsp;:</p>\r\n<ul>\r\n    <li>le mois est en toutes lettres ou abr\u00e9g\u00e9, mais pas au format num\u00e9rique</li>\r\n    <li>l'ann\u00e9e est sur 4 chiffres.</li>\r\n</ul></li></ul>", 
        "thema": "Code", 
        "name": "6"
    }, 
    "506": {
        "goal": "<ul>\r\n    <li>Faciliter le retour d'information de la part des utilisateurs</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le site propose au moins un moyen de contact", 
        "solution": "<ul>\r\n    <li>Par exemple, indiquer l'adresse e-mail de l'auteur et/ou du webmestre ou mettre en place un formulaire permettant de le(s) contacter.</li>\r\n</ul>", 
        "thema": "Contact                      ", 
        "name": "7"
    }, 
    "507": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les coordonn\u00e9es postales et t\u00e9l\u00e9phoniques de la repr\u00e9sentation locale ou du si\u00e8ge social des soci\u00e9t\u00e9s et organisations sont indiqu\u00e9es", 
        "solution": "", 
        "thema": "Contact                      ", 
        "name": "8"
    }, 
    "508": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs d'identifier la nature des contenus de chaque page dans les onglets, dans les favoris, dans la fen\u00eatre du navigateur ou dans les lecteurs d'\u00e9cran.</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le titre de chaque page permet d'identifier son contenu", 
        "solution": "<ul>\r\n    <li>R\u00e9diger le contenu de l'\u00e9l\u00e9ment <code>&lt;title&gt;</code> de chaque page de mani\u00e8re \u00e0 en d\u00e9crire de mani\u00e8re concise le contenu ou la fonction, y compris \u00e0 la suite d'une requ\u00eate AJAX modifiant de mani\u00e8re essentielle le contenu de la page.</li>\r\n    <li>Pr\u00e9ciser l'\u00e9tape en cours dans l'\u00e9l\u00e9ment <code>&lt;title&gt;</code> des pages correspondant \u00e0 des \u00e9tapes dans un processus (exemple&nbsp;: \u00e9tape 3 de votre inscription, etc).</li>\r\n    <li>Pr\u00e9ciser l'intervalle dans une page d'une s\u00e9rie de pages de r\u00e9sultats de recherche (R\u00e9sultats 10 \u00e0 19 de la recherche sur \"Foo\")</li>\r\n    <li>Pr\u00e9ciser l'\u00e9tat dans le titre d'une page demande de confirmation ou de confirmation lors de la soumission d'un formulaire (exemple: demande de confirmation de suppression - mes documents).</li>\r\n</ul>", 
        "thema": "Contenus", 
        "name": "9"
    }, 
    "509": {
        "goal": "<ul>\r\n    <li>Informer les utilisateurs sur les conditions sous lesquelles sont publi\u00e9s les contenus</li>\r\n    <li>Informer les utilisateurs sur les conditions de copie et de r\u00e9utilisation</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les informations relatives aux droits de copie et de r\u00e9utilisation sont accessibles depuis toutes les pages.", 
        "solution": "<ul>\r\n    <li>Indiquer les droits de copie et de r\u00e9utilisation des divers \u00e9l\u00e9ments du site sur chaque page ou via un hyperlien pointant vers une page sp\u00e9cifique.</li>\r\n</ul>", 
        "thema": "Contenus", 
        "name": "10"
    }, 
    "510": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs de diff\u00e9rencier la publicit\u00e9 du reste du contenu</li>\r\n    <li>Permettre une identification imm\u00e9diate des contenus publicitaires ou sponsoris\u00e9s</li>\r\n    <li>\u00c9viter les confusions entre contenus r\u00e9dactionnels et publicitaires\r\nPr\u00e9venir les risques associ\u00e9s aux conflits d'int\u00e9r\u00eat</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les contenus publicitaires ou sponsoris\u00e9s sont identifi\u00e9s comme tels", 
        "solution": "<ul>\r\n    <li>Identifier les publicit\u00e9s par une mention permettant de les identifier (publicit\u00e9, pub, partenariats\u2026)</li>\r\n    <li>Dans la mesure du possible s\u00e9parer graphiquement la publicit\u00e9 du reste du contenu.</li>\r\n</ul>", 
        "thema": "Contenus", 
        "name": "11"
    }, 
    "511": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs d'identifier le site dans les onglets, dans les favoris, dans la fen\u00eatre du navigateur ou dans les lecteurs d'\u00e9cran.</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le titre de chaque page permet d'identifier le site", 
        "solution": "<ul>\r\n    <li>R\u00e9diger le contenu de l'\u00e9l\u00e9ment <code>&lt;title&gt;</code> de chaque page de mani\u00e8re \u00e0 y indiquer le nom du site.</li>\r\n</ul>", 
        "thema": "Contenus", 
        "name": "12"
    }, 
    "512": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs d'identifier le montant total qu'il aura \u00e0 payer et les diff\u00e9rentes composantes de ce montant.</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les conditions de financement (taux global du cr\u00e9dit, conditions, r\u00e9serves et d\u00e9lais d'acceptation) sont indiqu\u00e9es", 
        "solution": "<ul>\r\n    <li>Indiquer sur le site les conditions de financement des cr\u00e9dits propos\u00e9s aux clients.</li>\r\n</ul>", 
        "thema": "E-Commerce                   ", 
        "name": "13"
    }, 
    "513": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs d'identifier la date r\u00e9elle \u00e0 laquelle le bien command\u00e9 sera effectivement en leur possession</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le d\u00e9lai de livraison estim\u00e9 est indiqu\u00e9 avant la validation d\u00e9finitive de la commande.", 
        "solution": "<ul>\r\n    <li>Indiquer, sur le r\u00e9capitulatif de la commande et avant validation d\u00e9finitive, les informations relatives aux d\u00e9lais de livraison estim\u00e9s.</li>\r\n</ul>", 
        "thema": "E-Commerce                   ", 
        "name": "14"
    }, 
    "514": {
        "goal": "<ul>\r\n    <li>Permettre un acc\u00e8s facile et permanent \u00e0 toutes les conditions de r\u00e9alisation du service.</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les conditions de vente ou d'utilisation sont accessibles depuis toutes les pages", 
        "solution": "<ul>\r\n    <li>Faire figurer sur toutes les pages un lien pointant vers la page sp\u00e9cifique pr\u00e9sentant les conditions de vente et/ou d'utilisation.</li>\r\n</ul>", 
        "thema": "E-Commerce                   ", 
        "name": "15"
    }, 
    "515": {
        "goal": "<ul>\r\n    <li>Fournir aux utilisateurs une indication v\u00e9rifiable de l'existence officielle de la structure qui propose les contenus ou le service</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le num\u00e9ro d'immatriculation d\u00e9livr\u00e9 aux soci\u00e9t\u00e9s ou organisations au terme des proc\u00e9dures l\u00e9gales d'enregistrement en vigueur dans leur pays est indiqu\u00e9", 
        "solution": "<ul>\r\n    <li>Indiquer le num\u00e9ro d'immatriculation d\u00e9livr\u00e9 \u00e0 la soci\u00e9t\u00e9 ou association au terme des proc\u00e9dures l\u00e9gales d'enregistrement en vigueur dans son pays. Cette bonne pratique ne s'applique pas aux personnes physiques, sauf si elles sont constitu\u00e9es en entit\u00e9 juridique (freelance, autoentrepreneur\u2026).</li>\r\n</ul>", 
        "thema": "E-Commerce                   ", 
        "name": "16"
    }, 
    "516": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs d'identifier pr\u00e9cis\u00e9ment la nature et les sp\u00e9cifications des produits propos\u00e9s</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La nature et les caract\u00e9ristiques quantifiables des produits et services (dimensions, dur\u00e9e, contenance, etc.) sont indiqu\u00e9es.", 
        "solution": "<ul>\r\n    <li>Indiquer sur le site les informations relatives \u00e0 la nature ainsi qu'aux caract\u00e9ristiques des produits et services propos\u00e9s.</li>\r\n</ul>", 
        "thema": "E-Commerce                   ", 
        "name": "17"
    }, 
    "517": {
        "goal": "<ul>\r\n    <li>Permettre d'anticiper d'\u00e9ventuelles difficult\u00e9s et une augmentation du d\u00e9lai de livraison</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La disponibilit\u00e9 des produits est indiqu\u00e9e avant la validation d\u00e9finitive de la commande.", 
        "solution": "<ul>\r\n    <li>Indiquer avant la commande et sur le formulaire r\u00e9capitulatif la disponibilit\u00e9 des produits s\u00e9lectionn\u00e9s.</li>\r\n</ul>", 
        "thema": "E-Commerce                   ", 
        "name": "18"
    }, 
    "518": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs d'identifier pr\u00e9cis\u00e9ment et avant l'achat le montant total qu'ils auront \u00e0 payer</li>\r\n    <li>Permettre aux utilisateurs d'identifier pr\u00e9cis\u00e9ment les montants d\u00e9ductibles et les diff\u00e9rentes imputations.</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les prix affich\u00e9s mentionnent le d\u00e9tail des taxes et suppl\u00e9ments \u00e9ventuels ainsi que le montant hors taxes", 
        "solution": "<ul>\r\n    <li>Indiquer sur le formulaire r\u00e9capitulatif de la commande, ainsi que sur la facture envoy\u00e9e au client, le d\u00e9tail de toutes les taxes int\u00e9gr\u00e9es au co\u00fbt des produits et services propos\u00e9s.</li>\r\n</ul>", 
        "thema": "E-Commerce                   ", 
        "name": "19"
    }, 
    "519": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs d'identifier la p\u00e9riode au cours de laquelle ils peuvent b\u00e9n\u00e9ficier des offres propos\u00e9es</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La p\u00e9riode et les conditions de validit\u00e9 des offres sp\u00e9ciales et promotions sont indiqu\u00e9es.", 
        "solution": "<ul>\r\n    <li>Indiquer sur le site les informations relatives \u00e0 la p\u00e9riode et aux conditions de validit\u00e9 des offres sp\u00e9ciales et de promotions propos\u00e9es.</li>\r\n</ul>", 
        "thema": "E-Commerce                   ", 
        "name": "20"
    }, 
    "520": {
        "goal": "<ul>\r\n    <li>Permettre \u00e0 l'utilisateur de modifier facilement sa commande</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La modification de la quantit\u00e9 de chaque article, l'ajout ou la suppression d'un ou plusieurs articles reste possible avant la validation d\u00e9finitive de la commande", 
        "solution": "<ul>\r\n    <li>Proposer \u00e0 l'utilisateur une option sp\u00e9cifique sur le formulaire de commande lui permettant de modifier les quantit\u00e9s command\u00e9es avant leur validation.</li>\r\n</ul>", 
        "thema": "E-Commerce                   ", 
        "name": "21"
    }, 
    "521": {
        "goal": "<ul>\r\n    <li>Permettre \u00e0 l'utilisateur de conna\u00eetre le d\u00e9tail du montant de sa commande\r\nlever un frein \u00e0 la validation d'une commande</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le sous-total d\u00e9taill\u00e9 (quantit\u00e9s, montants, frais, assurances, etc.) est indiqu\u00e9 avant la validation d\u00e9finitive de la commande.", 
        "solution": "<ul>\r\n    <li>Indiquer sur le formulaire r\u00e9capitulatif de la commande et avant validation, le sous total d\u00e9taill\u00e9 du co\u00fbt du produit ou service command\u00e9.</li>\r\n</ul>", 
        "thema": "E-Commerce                   ", 
        "name": "22"
    }, 
    "522": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs d'anticiper sur le mode et les conditions de paiement et de v\u00e9rifier avant la commande qu'ils pourront la mener \u00e0 son terme.</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les moyens de paiement accept\u00e9s et les proc\u00e9dures correspondantes sont indiqu\u00e9s", 
        "solution": "<ul>\r\n    <li>Indiquer sur le site les informations sur les modes de paiement accept\u00e9s ainsi que les proc\u00e9dures correspondantes.</li>\r\n</ul>", 
        "thema": "E-Commerce                   ", 
        "name": "23"
    }, 
    "523": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs d'identifier pr\u00e9cis\u00e9ment la nature des services associ\u00e9s et leur co\u00fbt</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les conditions de garantie (dur\u00e9e, options, extensions, tarifs, restrictions, etc) sont indiqu\u00e9es", 
        "solution": "<ul>\r\n    <li>Indiquer dans les conditions g\u00e9n\u00e9rales disponibles sur le site, les informations relatives aux conditions de garanties appliqu\u00e9es.</li>\r\n</ul>", 
        "thema": "E-Commerce                   ", 
        "name": "24"
    }, 
    "524": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs de conna\u00eetre les conditions d'assistance en cas de difficult\u00e9</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les conditions de fonctionnement du service apr\u00e8s-vente (tarifs, horaires, moyens de contact, etc) sont indiqu\u00e9es", 
        "solution": "<ul>\r\n    <li>Indiquer, dans les conditions g\u00e9n\u00e9rales, les informations relatives aux conditions de fonctionnement du service apr\u00e8s-vente.</li>\r\n</ul>", 
        "thema": "E-Commerce                   ", 
        "name": "25"
    }, 
    "525": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs de faire livrer un achat sur le lieu de son choix</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Une adresse de livraison diff\u00e9rente de l'adresse de facturation peut \u00eatre sp\u00e9cifi\u00e9e.", 
        "solution": "<ul>\r\n    <li>Proposer au client, sur le formulaire r\u00e9capitulatif de la commande, une adresse de livraison diff\u00e9rente de l'adresse de facturation.</li>\r\n</ul>", 
        "thema": "E-Commerce                   ", 
        "name": "26"
    }, 
    "526": {
        "goal": "<ul>\r\n    <li>Permettre d'\u00e9viter une navigation et des commandes inutiles, voire une perte de temps pour l'utilisateur et la structure qui propose les biens ou les services</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les informations relatives \u00e0 la zone de livraison des produits ou de r\u00e9alisation des services sont indiqu\u00e9es", 
        "solution": "<p>Les informations relatives \u00e0 la zone de livraison, doivent \u00eatre les suivantes&nbsp;:</p>\r\n<ul>\r\n    <li>Lieu du \"d\u00e9p\u00f4t final\"</li>\r\n    <li>Heure d'ouverture du \"d\u00e9p\u00f4t final\"</li>\r\n    <li>Moyen de contact (t\u00e9l\u00e9phone, fax, e-mail)</li>\r\n</ul>\r\n<p>Cette information doit \u00eatre pr\u00e9sente \u00e0 3 moments distincts&nbsp;: avant paiement, apr\u00e8s paiement et sur l'e-mail r\u00e9capitulatif de la commande.</p></li></ul>", 
        "thema": "E-Commerce                   ", 
        "name": "27"
    }, 
    "527": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Aucun produit ni service annexe n'est ajout\u00e9 au panier de commande sans que cette action soit d\u00e9clench\u00e9e par l'utilisateur.", 
        "solution": "", 
        "thema": "E-Commerce                   ", 
        "name": "28"
    }, 
    "528": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs de signaler des abus et de faire effectuer des corrections</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le site propose au moins un moyen de contacter le mod\u00e9rateur des espaces publics.", 
        "solution": "<ul>\r\n    <li>Par exemple, indiquer l'adresse e-mail du mod\u00e9rateur ou mettre en place un formulaire permettant de le contacter.</li>\r\n</ul>", 
        "thema": "Espaces publics              ", 
        "name": "29"
    }, 
    "529": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La dur\u00e9e des contenus vid\u00e9o ou audio est indiqu\u00e9e", 
        "solution": "", 
        "thema": "Fichiers et multim\u00e9dia       ", 
        "name": "30"
    }, 
    "530": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les sons et vid\u00e9os sont d\u00e9clench\u00e9s par l'utilisateur.", 
        "solution": "", 
        "thema": "Fichiers et multim\u00e9dia       ", 
        "name": "31"
    }, 
    "531": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La cr\u00e9ation d'un mot de passe par l'utilisateur est valid\u00e9e par une double saisie", 
        "solution": "", 
        "thema": "Formulaires", 
        "name": "32"
    }, 
    "532": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs de savoir si leurs outils leur permettent de consulter les fichiers propos\u00e9s en t\u00e9l\u00e9chargement</li>\r\n    <li>R\u00e9duire la charge serveur en \u00e9vitant les t\u00e9l\u00e9chargements inutiles</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le format des fichiers propos\u00e9s en t\u00e9l\u00e9chargement est indiqu\u00e9.", 
        "solution": "<ul>\r\n    <li>Au minimum, pr\u00e9voir une page d'aide indiquant le format des fichiers propos\u00e9s s'il est unique.</li>\r\n    <li>Au mieux, indiquer le format pour chaque lien permettant de t\u00e9l\u00e9charger un fichier.</li>\r\n</ul>", 
        "thema": "Fichiers et multim\u00e9dia       ", 
        "name": "33"
    }, 
    "533": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les animations, sons et clignotements peuvent \u00eatre mis en pause", 
        "solution": "", 
        "thema": "Fichiers et multim\u00e9dia       ", 
        "name": "34"
    }, 
    "534": {
        "goal": "<ul>\r\n    <li>Faciliter la compr\u00e9hension des donn\u00e9es attendues dans les formulaires</li>\r\n    <li>Faciliter la saisie en permettant de s\u00e9lectionner l'\u00e9tiquette plut\u00f4t que la case \u00e0 cocher ou le bouton radio</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Chaque champ de formulaire est associ\u00e9 dans le code source \u00e0 une \u00e9tiquette qui lui est propre", 
        "solution": "<p>Donner \u00e0 chaque champ de formulaire une \u00e9tiquette qui lui soit explicitement associ\u00e9e&nbsp;:</P>\r\n<ul>\r\n    <li>si l'\u00e9tiquette est visible, sous la forme d'un \u00e9l\u00e9ment <code>&lt;label&gt;</code> dot\u00e9 d'un attribut <code>for</code> reprenant la valeur de l'attribut <code>id</code> affect\u00e9 au champ</li>\r\n    <li>si l'affichage de l'\u00e9tiquette n'est pas souhait\u00e9e, sous la forme d'un attribut <code>title</code> du champ lui-m\u00eame</li>\r\n</ul>\r\n<p>Le recours \u00e0 une \u00e9tiquette <code>&lt;label for=\"\u2026\"&gt;</code> masqu\u00e9e via les styles CSS est d\u00e9conseill\u00e9 au profit de l'attribut <code>title</code> du champ.</p></li></ul>", 
        "thema": "Formulaires", 
        "name": "35"
    }, 
    "535": {
        "goal": "<ul>\r\n    <li>Donner un retour \u00e0 l'utilisateur sur l'action qu'il vient d'effectuer</li>\r\n    <li>Guider l'utilisateur directement vers les \u00e9l\u00e9ments sur lesquels il doit agir</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "En cas de rejet des donn\u00e9es saisies dans un formulaire, les champs contenant les donn\u00e9es rejet\u00e9es sont indiqu\u00e9s \u00e0 l'utilisateur.", 
        "solution": "<ul>\r\n    <li>Faire figurer en d\u00e9but de formulaire un message indiquant que tout ou partie des champs n\u00e9cessitent une correction de la saisie pr\u00e9c\u00e9dente. Indiquer \u00e9galement cette information dans l'\u00e9l\u00e9ment <code>&lt;title&gt;</code> de la page.</li>\r\n    <li>Et indiquer dans l'\u00e9tiquette de chaque champ concern\u00e9 qu'il doit \u00eatre corrig\u00e9 (par exemple, avec la mention \"erreur de saisie\")</li>\r\n</ul>", 
        "thema": "Formulaires", 
        "name": "36"
    }, 
    "536": {
        "goal": "<ul>\r\n    <li>Donner de la visibilit\u00e9 \u00e0 l'utilisateur (temps, informations n\u00e9cessaires, etc)</li>\r\n    <li>\u00c9viter que l'utilisateur ne se sente pi\u00e9g\u00e9 dans un processus qu'il n'avait pas pr\u00e9vu</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les processus complexes sont accompagn\u00e9s de la liste de leurs \u00e9tapes", 
        "solution": "<ul>\r\n    <li>Afficher sur chaque page du processus d'\u00e9tape la liste des \u00e9tapes \u00e0 r\u00e9aliser</li>\r\n</ul>", 
        "thema": "Formulaires", 
        "name": "37"
    }, 
    "537": {
        "goal": "<ul>\r\n    <li>Donner \u00e0 l'utilisateur de la visibilit\u00e9 sur l'avancement de la t\u00e2che qu'il r\u00e9alise</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "L'\u00e9tape en cours d'un processus complexe est indiqu\u00e9e", 
        "solution": "<ul>\r\n    <li>Pr\u00e9ciser sur chaque page du processus l'\u00e9tape correspondant \u00e0 la page en cours</li>\r\n</ul>", 
        "thema": "Formulaires", 
        "name": "38"
    }, 
    "538": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs de savoir \u00e0 l'avance si un champ est obligatoire</li>\r\n    <li>Pr\u00e9venir les erreurs avant qu'elles ne surviennent</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "L'\u00e9tiquette de chaque champ de formulaire indique si la saisie est obligatoire", 
        "solution": "<ul>\r\n    <li>Indiquer le caract\u00e8re obligatoire de la saisie dans l'\u00e9tiquette associ\u00e9e au champ. Si l'indication est faite avec un symbole graphique (ast\u00e9risque par exemple), faire pr\u00e9c\u00e9der le formulaire d'une l\u00e9gende explicitant ce symbole.</li>\r\n</ul>", 
        "thema": "Formulaires", 
        "name": "39"
    }, 
    "539": {
        "goal": "<ul>\r\n    <li>\u00c9viter l'utilisation de la fonction page pr\u00e9c\u00e9dente du navigateur</li>\r\n    <li>Limiter le risque de double envoi de formulaire</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La page affich\u00e9e apr\u00e8s l'envoi d'un formulaire permet de reprendre directement la navigation", 
        "solution": "<ul>\r\n    <li>Apr\u00e8s envoi valide d'un formulaire, afficher une page de confirmation du succ\u00e8s de l'envoi o\u00f9 sont pr\u00e9sents les \u00e9l\u00e9ments de navigation dans le site, ou \u00e0 d\u00e9faut un lien du type \"Poursuivre\".</li>\r\n</ul>", 
        "thema": "Formulaires", 
        "name": "40"
    }, 
    "540": {
        "goal": "<ul>\r\n    <li>\u00c9viter aux utilisateurs d'avoir par exemple l'URL du lien en guise de libell\u00e9 dans une aide technique, celle-ci \u00e9tant contrainte \u00e0 trouver dans le code de la page une information \u00e0 donner en guise de libell\u00e9 vide</li>\r\n    <li>\u00c9viter aux utilisateurs de ne pas acc\u00e9der au lien lorsque CSS est d\u00e9sactiv\u00e9 dans un navigateur graphique.</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Chaque lien est dot\u00e9 d'un intitul\u00e9 dans le code source", 
        "solution": "<ul>\r\n    <li>Donner \u00e0 chaque lien un libell\u00e9 textuel (entre les balises ouvrantes et fermantes de l'\u00e9l\u00e9ment <code>&lt;a&gt;</code>), si n\u00e9cessaire via l'alternative textuelle d'un \u00e9l\u00e9ment <code>&lt;img&gt;</code> ou <code>&lt;object&gt;</code>.</li>\r\n   <li>Ne pas masquer \u00e0 l'affichage le contenu de l'\u00e9l\u00e9ment <code>&lt;a&gt;</code> pour le remplacer par un effet de style CSS (image d'arri\u00e8re-plan)</li>\r\n</ul>", 
        "thema": "Hyperliens                   ", 
        "name": "41"
    }, 
    "541": {
        "goal": "<ul>\r\n    <li>\u00c9viter les clics inutiles sur des contenus soulign\u00e9s per\u00e7us comme des hyperliens</li>\r\n    <li>Faciliter l'identification des liens</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le soulignement est r\u00e9serv\u00e9 aux hyperliens.", 
        "solution": "<ul>\r\n    <li>Ne pas utiliser le soulignement pour des textes simples ou des \u00e9l\u00e9ments ne constituant pas des liens.</li>\r\n</ul>", 
        "thema": "Hyperliens                   ", 
        "name": "42"
    }, 
    "542": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs d'identifier facilement les liens</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les hyperliens sont visuellement diff\u00e9renci\u00e9s du reste du contenu.", 
        "solution": "<p>Les hyperliens peuvent \u00eatre diff\u00e9renci\u00e9s \u00e0 l'aide des propri\u00e9t\u00e9s CSS de couleur de texte, de couleur d'arri\u00e8re-plan, de soulignement, de mise en gras, de bordures, de police de caract\u00e8res, etc.</p>\r\n<p>Afin qu'un lien puisse \u00eatre diff\u00e9renci\u00e9 du contenu par les personnes souffrants d'un d\u00e9ficit de perception des couleurs, ou en l'absence de restitution des couleurs pr\u00e9vues, il est n\u00e9cessaire d'utiliser simultan\u00e9ment un deuxi\u00e8me proc\u00e9d\u00e9 de diff\u00e9renciation ind\u00e9pendant de la couleur.</p>", 
        "thema": "Hyperliens                   ", 
        "name": "43"
    }, 
    "543": {
        "goal": "<ul>\r\n    <li>Permettre \u00e0 l'utilisateur d'identifier directement l'auteur (au sens large)</li>\r\n    <li>Limiter les risques de d\u00e9fiance</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "L'identit\u00e9 de l'auteur, de la soci\u00e9t\u00e9 ou de l'organisation est indiqu\u00e9e", 
        "solution": "<ul>\r\n    <li>Indiquer au moins sur une page, et id\u00e9alement sur chaque page le nom de l'auteur, de l'entit\u00e9 ou de la soci\u00e9t\u00e9 qui propose le service.</li>\r\n</ul>", 
        "thema": "Identification               ", 
        "name": "44"
    }, 
    "544": {
        "goal": "<ul>\r\n    <li>Permettre \u00e0 l'utilisateur d'identifier imm\u00e9diatement et en permanence l'auteur ou l'entit\u00e9 qui administre le site</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le nom du site et/ou le nom de l'auteur sont indiqu\u00e9s sur chaque page.", 
        "solution": "<ul>\r\n    <li>Indiquer le nom du site et/ou le nom de l'auteur en clair dans toutes les pages du site (logo, nom de l'entit\u00e9 responsable, nom du site, etc)</li>\r\n</ul>", 
        "thema": "Identification               ", 
        "name": "45"
    }, 
    "545": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs d'identifier sans ambig\u00fcit\u00e9 un interlocuteur physique capable de r\u00e9pondre aux questions \u00e9ventuelles sur les contenus propos\u00e9s, ou d'assumer les responsabilit\u00e9s li\u00e9es \u00e0 ces contenus.</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "L'identit\u00e9 de la personne ou du service responsable des contenus est indiqu\u00e9e", 
        "solution": "<ul>\r\n    <li>Indiquer le nom d'une personne physique responsable des contenus sur le site.</li>\r\n</ul>", 
        "thema": "Identification               ", 
        "name": "46"
    }, 
    "546": {
        "goal": "<ul>\r\n    <li>Donner aux utilisateurs une vision imm\u00e9diate sur la nature du site et des contenus propos\u00e9s.</li>\r\n    <li>\u00c9viter des recherches inutiles</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La page d'accueil expose la nature des contenus et services propos\u00e9s", 
        "solution": "<ul>\r\n    <li>Pr\u00e9voir sur la page d'accueil une information, une phrase, un contenu r\u00e9sumant les contenus et services propos\u00e9s sur le site.</li>\r\n</ul>", 
        "thema": "Identification               ", 
        "name": "47"
    }, 
    "547": {
        "goal": "<ul>\r\n    <li>\u00c9viter des consultations inutiles\r\nD\u00e9livrer un avertissement aux utilisateurs</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Si le site est r\u00e9serv\u00e9 ou destin\u00e9 \u00e0 un public sp\u00e9cifique, ce public est mentionn\u00e9 au moins sur la page d'accueil.", 
        "solution": "<ul>\r\n    <li>Faire figurer sur la page d'accueil un message d'avertissement clair et pr\u00e9cis sur la nature des contenus et le public auquel ils sont destin\u00e9s ou r\u00e9serv\u00e9s.</li>\r\n</ul>", 
        "thema": "Identification               ", 
        "name": "48"
    }, 
    "548": {
        "goal": "<ul>\r\n    <li>Am\u00e9liorer l'interpr\u00e9tation des pages par les synth\u00e8ses vocales</li>\r\n    <li>Am\u00e9liorer le r\u00e9f\u00e9rencement en permettant aux moteurs de reconna\u00eetre la langue du contenu</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le code source de chaque page indique la langue principale du contenu", 
        "solution": "<p>Les attributs <code>lang</code> (en <abbr>HTML</abbr>) et/ou <code>xml:lang</code> (en <abbr>XHTML</abbr>) de l'\u00e9l\u00e9ment <code>&lt;html&gt;</code> permettent de sp\u00e9cifier la langue par d\u00e9faut du contenu&nbsp;:</p>\r\n<ul>\r\n    <li><code>&lt;html lang=\"fr\"&gt;</code> <a href=\"http://www.w3.org/TR/html401/struct/dirlang.html#adef-lang\" hreflang=\"en\">en <abbr>HTML</abbr>4.01</a> ;</li>\r\n    <li><code>&lt;html lang=\"fr\" xml:lang=\"fr\"...&gt;</code> en <a href=\"http://www.w3.org/TR/xhtml1/#C_7\" hreflang=\"en\"><abbr>XHTML</abbr>1.0 compatible <abbr>HTML</abbr></a> ;</li>\r\n    <li><code>&lt;html xml:lang=\"en\" ...&gt;</code> en <a href=\"http://www.w3.org/TR/xhtml11/changes.html#a_changes\" hreflang=\"en\"><abbr>XHTML</abbr>1.0 trait\u00e9 en tant que <abbr>XML</abbr></a>, en <abbr>XHTML</abbr>1.1 et dans les autres dialectes <abbr>XHTML</abbr> trait\u00e9s en tant que <abbr>XML</abbr>.</li>\r\n</ul>\r\n<p>La syntaxe utilis\u00e9e est d\u00e9finie par la norme <a href=\"http://www.ietf.org/rfc/rfc1766.txt\">RFC3066</a> sous la forme :</p>\r\n<ul>\r\n    <li>d'un <a href=\"http://www.loc.gov/standards/iso639-2/langcodes.html\">code de langue  <abbr>ISO</abbr>639</a> ;</li>\r\n    <li>suivi si n\u00e9cessaire apr\u00e8s un tiret par un <a href=\"http://www.iso.org/iso/fr/prods-services/iso3166ma/02iso-3166-code-lists/list-en1.html\">code de pays <abbr>ISO</abbr>3166</a> : <code>fr-CA</code>.</li>\r\n</ul>\r\n<p>Le <abbr>W3C</abbr> propose deux tutoriels sur cette question&nbsp;:</p>\r\n<ul>\r\n    <li><a href=\"http://www.w3.org/International/questions/qa-lang-why\" hreflang=\"en\">Why use the language attribute?</a></li>\r\n    <li><a href=\"http://www.w3.org/International/tutorials/tutorial-lang/\" hreflang=\"en\">Using language information in XHTML, HTML and CSS</a>.</li>\r\n</ul>", 
        "thema": "Internationalisation         ", 
        "name": "49"
    }, 
    "549": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs d'identifier imm\u00e9diatement le pays associ\u00e9 \u00e0 l'adresse, sans ambigu\u00eft\u00e9 et sans avoir recours \u00e0 d'autres \u00e9l\u00e9ments (ville, r\u00e9gion, code postal, num\u00e9ro de t\u00e9l\u00e9phone)</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le pays est pr\u00e9cis\u00e9 dans toutes les adresses postales", 
        "solution": "<ul>\r\n    <li>Indiquer le pays dans l'adresse postale.</li>\r\n</ul>", 
        "thema": "Internationalisation         ", 
        "name": "50"
    }, 
    "550": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Chaque num\u00e9ro de t\u00e9l\u00e9phone est indiqu\u00e9 au format international", 
        "solution": "<ul>\r\n    <li>V\u00e9rifier que tous les num\u00e9ros de t\u00e9l\u00e9phone sont pr\u00e9c\u00e9d\u00e9s de l'indicatif sous la forme +indicatif international-num\u00e9ro de t\u00e9l\u00e9phone.\r\nExemple France (+33) 1 23 23 45 XX </li>\r\n</ul>", 
        "thema": "Internationalisation         ", 
        "name": "51"
    }, 
    "551": {
        "goal": "<ul>\r\n    <li>Am\u00e9liorer la consultation et la navigation pour les personnes handicap\u00e9es\r\n\u00e9viter les probl\u00e8mes d'impression ou de mise en favoris</li>\r\n    <li>Am\u00e9liorer le r\u00e9f\u00e9rencement en \u00e9vitant l'indexation de pages orphelines</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le site n'emploie pas la technique des jeux de cadres", 
        "solution": "<ul>\r\n    <li>Ne pas utiliser les \u00e9l\u00e9ments <code>&lt;frameset&gt;</code>, <code>&lt;frame&gt;</code> et <code>&lt;noframe&gt;</code>.</li>\r\n</ul>", 
        "thema": "Navigation", 
        "name": "52"
    }, 
    "552": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les iframes sont dot\u00e9es d'un titre explicite", 
        "solution": "<ul>\r\n    <li>Renseigner l'attribut <code>title</code> de l'\u00e9l\u00e9ment <code>&lt;iframe&gt;</code> de mani\u00e8re \u00e0 indiquer explicitement la nature du contenu du cadre ou sa fonction</li>\r\n</ul>", 
        "thema": "Navigation", 
        "name": "53"
    }, 
    "553": {
        "goal": "<ul>\r\n    <li>Fournir aux utilisateurs une solution en cas de d\u00e9sorientation, pour naviguer et se rep\u00e9rer dans le site, pour visualiser l'ensemble des contenus et la taille du site. Incite les administrateurs \u00e0 repr\u00e9senter graphiquement et \u00e0 rationaliser leur contenu.</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Si toutes les pages du site ne sont pas directement accessibles depuis la page d'accueil, un plan du site est accessible depuis chaque page", 
        "solution": "<p>Le plan de site donne acc\u00e8s directement ou indirectement \u00e0  la totalit\u00e9 des pages du site sous forme d'une liste de liens textuels explicites. Celle-ci est structur\u00e9e de mani\u00e8re \u00e0 refl\u00e9ter l'organisation des rubriques du site, \u00e0 l'aide d'\u00e9l\u00e9ments de titre et d'\u00e9l\u00e9ments de liste.</p>", 
        "thema": "Navigation", 
        "name": "54"
    }, 
    "554": {
        "goal": "<ul>\r\n    <li>Permettre \u00e0 l'utilisateur de d\u00e9terminer son emplacement sur le site</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Chaque page affiche une information permettant de conna\u00eetre son emplacement dans l'arborescence du site.", 
        "solution": "<ul>\r\n    <li>Fournir un fil d'Ariane</li>\r\n</ul>", 
        "thema": "Navigation", 
        "name": "55"
    }, 
    "555": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs de revenir en page d'accueil en cas de d\u00e9sorientation</li>\r\n    <li>Identifier le lien principal permettant d'acc\u00e9der au site</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Il est possible de revenir \u00e0 la page d'accueil depuis toutes les pages.", 
        "solution": "<ul>\r\n    <li>Pr\u00e9voir un lien vers la page d'accueil sur chaque page du site.</li>\r\n    <li>Veiller \u00e0 ce que ce lien soit de pr\u00e9f\u00e9rence toujours au m\u00eame endroit (d\u00e9but du fil d'Ariane,  menu de navigation, logo, etc)</li>\r\n    <li>Si vous placez un logo de site, veillez \u00e9galement \u00e0 ce qu'il soit cliquable et revienne vers l'accueil.</li>\r\n</ul>", 
        "thema": "Navigation", 
        "name": "56"
    }, 
    "556": {
        "goal": "<ul>\r\n    <li>Permettre la navigation au clavier</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La navigation reste possible sur l'ensemble du site en utilisant exclusivement le clavier.", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "57"
    }, 
    "557": {
        "goal": "<ul>\n    <li>Permettre la navigation au clavier</li>\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le focus clavier n'est ni supprim\u00e9 ni masqu\u00e9", 
        "solution": "<ul>\r\n    <li>Ne pas annuler la valeur par d\u00e9faut de la propri\u00e9t\u00e9 CSS outline</li>\r\n</ul>", 
        "thema": "Navigation", 
        "name": "58"
    }, 
    "558": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "L'utilisateur est averti des ouvertures de nouvelles fen\u00eatres", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "59"
    }, 
    "559": {
        "goal": "<ul>\r\n    <li>Permettre \u00e0 l'utilisateur de naviguer sur le site sans avoir d'op\u00e9ration sp\u00e9cifique \u00e0 effectuer pendant la navigation</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La navigation sur le site ne provoque pas l'ouverture de fen\u00eatres surgissantes (\"popups\")", 
        "solution": "<ul>\r\n    <li>Ne pas utiliser d'ouverture automatique de fen\u00eatres pop-up (\u00e9v\u00e9nement d'ouverture de fen\u00eatre lors du chargement d'une page) sur les pages internes du site.</li>\r\n</ul>", 
        "thema": "Navigation", 
        "name": "60"
    }, 
    "560": {
        "goal": "<ul>\r\n    <li>\u00c9viter des clics inutiles aux utilisateurs. Limiter la bande passante. proposer du contenu \u00e0 valeur ajout\u00e9e</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le site ne comporte pas de liens internes vers des pages en construction", 
        "solution": "<ul>\r\n    <li>Lors de la mise en place de nouvelles pages ou rubriques, aucun lien vers celles-ci n'est mis en place dans la partie publique du site avant leur ach\u00e8vement complet.</li>\r\n</ul>", 
        "thema": "Navigation", 
        "name": "61"
    }, 
    "561": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Si toutes les pages du site ne sont pas directement accessibles depuis le plan du site, un moteur de recherche interne est accessible depuis chaque page", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "62"
    }, 
    "562": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La consultation du site ne redimensionne pas la fen\u00eatre du navigateur.", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "63"
    }, 
    "563": {
        "goal": "<ul>\r\n    <li>Permettre aux abonn\u00e9s de ne plus recevoir une newsletter </li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Un lien de d\u00e9sinscription est pr\u00e9sent dans chaque newsletter", 
        "solution": "<ul>\r\n    <li>Faire figurer dans chaque newsletter un hyperlien permettant la d\u00e9sinscription.</li>\r\n</ul>", 
        "thema": "Newsletter                   ", 
        "name": "64"
    }, 
    "564": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le champ \"destinataire\" de la newsletter ne comprend que le mail du destinataire (ou \u00e0 d\u00e9faut un mail \"g\u00e9n\u00e9rique\" cr\u00e9\u00e9 par l'exp\u00e9diteur)", 
        "solution": "", 
        "thema": "Newsletter                   ", 
        "name": "65"
    }, 
    "565": {
        "goal": "<ul>\r\n    <li>\u00c9viter l'inscription \u00e0 une newsletter par un tiers usurpant une identit\u00e9</li>\r\n    <li>V\u00e9rifier que l'adresse e-mail a \u00e9t\u00e9 saisie sans erreur</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "L'inscription aux newsletters est soumise \u00e0 un processus de confirmation.", 
        "solution": "<ul>\r\n    <li>Envoyer un e-mail permettant l'inscription d\u00e9finitive via la saisie d'un mot de passe, un clic sur un hyperlien, etc.</li>\r\n</ul>", 
        "thema": "Newsletter                   ", 
        "name": "66"
    }, 
    "566": {
        "goal": "<ul>\r\n    <li>Permettre une homog\u00e9n\u00e9it\u00e9 et une continuit\u00e9 dans la visite et la navigation</li>\r\n    <li>Permettre une identification permanente du service en ligne visit\u00e9.</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La charte graphique est coh\u00e9rente sur l'ensemble du site.", 
        "solution": "<ul>\r\n    <li>Utiliser des feuilles de styles communes \u00e0 tout le site, ce qui par rebond am\u00e9liore la coh\u00e9rence globale de tout le site.</li>\r\n</ul>", 
        "thema": "Pr\u00e9sentation                 ", 
        "name": "67"
    }, 
    "567": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le site propose une proc\u00e9dure de r\u00e9initialisation du mot de passe en cas de perte, de vol ou d'oubli", 
        "solution": "", 
        "thema": "S\u00e9curit\u00e9 et confidentialit\u00e9  ", 
        "name": "68"
    }, 
    "568": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les \u00e9changes de donn\u00e9es sensibles sont s\u00e9curis\u00e9s et signal\u00e9s comme tels", 
        "solution": "", 
        "thema": "S\u00e9curit\u00e9 et confidentialit\u00e9  ", 
        "name": "69"
    }, 
    "569": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les donn\u00e9es sensibles ne sont pas transmises en clair dans les URL", 
        "solution": "", 
        "thema": "S\u00e9curit\u00e9 et confidentialit\u00e9  ", 
        "name": "70"
    }, 
    "570": {
        "goal": "<ul>\r\n    <li>Contribuer \u00e0 l'information des utilisateurs sur la s\u00e9curisation des \u00e9changes de donn\u00e9es sensibles</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les informations sur la s\u00e9curit\u00e9 des transactions sont indiqu\u00e9es", 
        "solution": "<ul>\r\n    <li>Indiquer le niveau et le mode de cryptage des donn\u00e9es sur les pages concern\u00e9es. Il est aussi possible d'indiquer comment retrouver l'information par le biais de son navigateur dans la mesure o\u00f9 la plupart offre cette possibilit\u00e9.</li>\r\n</ul>", 
        "thema": "S\u00e9curit\u00e9 et confidentialit\u00e9  ", 
        "name": "71"
    }, 
    "571": {
        "goal": "<ul>\r\n    <li>Fournir aux utilisateurs des informations sur les partenaires tiers impliqu\u00e9s dans la transaction.</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "L'identit\u00e9 des prestataires impliqu\u00e9s dans les transactions est pr\u00e9cis\u00e9e", 
        "solution": "<ul>\r\n    <li>Indiquer sur le site les informations relatives \u00e0 l'identit\u00e9 des prestataires bancaires et/ou des solutions de paiement utilis\u00e9es pour les transactions \u00e9lectroniques.</li>\r\n</ul>", 
        "thema": "S\u00e9curit\u00e9 et confidentialit\u00e9  ", 
        "name": "72"
    }, 
    "572": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs de conna\u00eetre la validit\u00e9 du certificat et contribue \u00e0 la s\u00e9curisation de la transaction</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les certificats de s\u00e9curit\u00e9 sont sign\u00e9s et en cours de validit\u00e9", 
        "solution": "<ul>\r\n    <li>Faire un suivi rigoureux des certificats de s\u00e9curit\u00e9 utilis\u00e9s sur le site en anticipant les dates de renouvellement.</li>\r\n</ul>", 
        "thema": "S\u00e9curit\u00e9 et confidentialit\u00e9  ", 
        "name": "73"
    }, 
    "573": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs de conna\u00eetre les conditions de conservation de leurs donn\u00e9es personnelles</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La politique de confidentialit\u00e9 et de respect de la vie priv\u00e9e est accessible depuis toutes les pages", 
        "solution": "<ul>\r\n    <li>Indiquer sur chaque page du site la politique de confidentialit\u00e9 du site</li>\r\n</ul>", 
        "thema": "S\u00e9curit\u00e9 et confidentialit\u00e9  ", 
        "name": "74"
    }, 
    "574": {
        "goal": "<ul>\r\n    <li>Permettre au navigateur de choisir le bon encodage des caract\u00e8res pour afficher la page.</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les ent\u00eates envoy\u00e9s par le serveur contiennent les informations relatives au jeu de caract\u00e8res employ\u00e9", 
        "solution": "<ul>\r\n    <li>Le param\u00e8tre <code>charset</code> de l'ent\u00eate HTTP <code>content-type</code> est renseign\u00e9 sous la forme&nbsp;: <code>Content-Type: text/html; charset=iso-8859-1</code>, en fonction du jeu de caract\u00e8re effectivement utilis\u00e9 par le document et de son type MIME.</li>\r\n</ul>", 
        "thema": "Serveur et Performances      ", 
        "name": "75"
    }, 
    "575": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le serveur envoie les informations permettant la mise en cache des contenus.", 
        "solution": "<p>Configurer le serveur Web pour qu'il puisse g\u00e9rer la mise en cache des \u00e9l\u00e9ments statiques et g\u00e9rer - au niveau applicatif - la possible mise en cache des \u00e9l\u00e9ments dynamiques.</p>\r\n<p>En pratique, et en accord avec les sp\u00e9cifications HTTP le serveur devra envoyer les champs <code>ETag</code>, <code>Date</code> et <code>Last-Modified</code> correspondant respectivement \u00e0 l'identifiant de la ressource, \u00e0 la date de traitement de la requ\u00eate et \u00e0 la date de derni\u00e8re modification de la ressource demand\u00e9e. L'ensemble des dates \u00e9tant au format GMT. Ces informations pouvant \u00eatre compl\u00e9t\u00e9es par les champs <code>Content-Length</code> et <code>Expires</code> si la taille en octets et la date d'expiration exacte du contenu sont connues.</p>\r\n<p>Afin d'informer les proxys et les clients finaux sur le comportement \u00e0 adopter vis \u00e0 vis des contenus mis en cache, les auteurs devront utiliser les directives HTTP <code>Cache-Control</code> et <code>Pragma</code> en accord avec les d\u00e9lais de r\u00e9actualisation n\u00e9cessaires et le caract\u00e8re priv\u00e9 de la diffusion.</p>\r\n<p>La possible mise en cache pourra \u00eatre ainsi finalis\u00e9e par la soumission d'un message 304 Not Modified (sans la ressource demand\u00e9e dans le corps de la requ\u00eate) lorsque le serveur recevra un ent\u00eate <code>If-Modified-Since</code> contenant une date ant\u00e9rieure \u00e0 la date de modification de la dite ressource.</p>", 
        "thema": "Serveur et Performances      ", 
        "name": "76"
    }, 
    "576": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs de rejoindre la page d'accueil du site m\u00eame lorsqu'il oublie de taper le pr\u00e9fixe www</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "L'adresse du site et de ses sous-domaines fonctionnent avec ou sans pr\u00e9fixe www.", 
        "solution": "<ul>\r\n    <li>Configurer le serveur de fa\u00e7on \u00e0 ce qu'il g\u00e8re les adresses sans www (acheminement)</li>\r\n</ul>", 
        "thema": "Serveur et Performances      ", 
        "name": "77"
    }, 
    "577": {
        "goal": "<ul>\r\n    <li>Informer l'utilisateur sur l'erreur rencontr\u00e9e, sur la continuit\u00e9 de fonctionnement du serveur, et met hors de cause la connexion de l'utilisateur</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le serveur envoie une page d'erreur 404 personnalis\u00e9e.", 
        "solution": "<ul>\r\n    <li>Modifier la configuration du serveur Web pour renvoyer l'utilisateur vers une page personnalis\u00e9e lorsque la ressource demand\u00e9e n'existe pas.</li>\r\n    <li>Si la configuration principale du serveur n'est pas directement accessible et si l'environnement le permet, utiliser une configuration locale par r\u00e9pertoire. Par exemple, l'environnement Apache autorise la cr\u00e9ation d'un fichier .htaccess contenant des directives relatives aux traitements des erreurs&nbsp;: <code>ErrorDocument 404 /mapage.html</code></li>\r\n</ul>", 
        "thema": "Serveur et Performances      ", 
        "name": "78"
    }, 
    "578": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le serveur envoie un code http 404 pour les ressources non trouv\u00e9es", 
        "solution": "", 
        "thema": "Serveur et Performances      ", 
        "name": "79"
    }, 
    "579": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le serveur transmet des contenus compress\u00e9s aux clients qui les acceptent", 
        "solution": "", 
        "thema": "Serveur et Performances      ", 
        "name": "80"
    }, 
    "580": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs de configurer la fr\u00e9quence \u00e0 laquelle leurs outils consultent le fil de syndication</li>\r\n    <li>R\u00e9duire la charge du serveur</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le code source des fils de syndication indique leur fr\u00e9quence de mise \u00e0 jour", 
        "solution": "<ul>\r\n    <li>Pour RSS 0.91, pr\u00e9ciser les jours et heures durant lesquels il n'y a pas de publication \u00e0 l'aide des \u00e9l\u00e9ments <code>skipDays</code> et <code>skipHours</code></li>\r\n    <li>Pour RSS 2.0, pr\u00e9ciser la dur\u00e9e de vie du canal d'information \u00e0 l'aide de l'\u00e9l\u00e9ment <code>ttl</code></li>\r\n    <li>Pour RSS 1.0, indiquer la date de r\u00e9f\u00e9rence, la fr\u00e9quence et l'intervalle de mise \u00e0 jour \u00e0 l'aide du module Syndication.</li>\r\n</ul>\r\n<p>Les formats des dates et heures sont indiqu\u00e9s par la note Date and Time Formats du W3C.</p>", 
        "thema": "Syndication                  ", 
        "name": "81"
    }, 
    "581": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les hyperliens contenus dans les fils de syndication sont absolus.", 
        "solution": "<ul>\r\n    <li>N'utiliser que des hyperliens absolus dans les contenus faisant l'objet de syndication.</li>\r\n</ul>", 
        "thema": "Syndication                  ", 
        "name": "82"
    }, 
    "582": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les fils de syndication sont d\u00e9tectables par les agents utilisateurs", 
        "solution": "", 
        "thema": "Syndication                  ", 
        "name": "83"
    }, 
    "583": {
        "goal": "<ul>\n    <li>Permettre aux aides techniques de restituer l'information contenue dans les tableaux de donn\u00e9es de mani\u00e8re explicite, en indiquant \u00e0 l'utilisateur les relations logique entre contenu et en-t\u00eates du tableau</li>\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les cellules des tableaux de donn\u00e9es sont reli\u00e9es \u00e0 leurs en-t\u00eates.", 
        "solution": "<ul>\r\n    <li>Utiliser l'\u00e9l\u00e9ment HTML <code>&lt;th&gt;</code> et son attribut <code>scope</code> pour baliser les cellules d'en-t\u00eates et expliciter leur port\u00e9e (<code>scope</code> de valeur COL pour un en-t\u00eate de colonne, de valeur ROW pour un en-t\u00eate de ligne)</li>\r\n    <li>Dans les tableaux o\u00f9 les en-t\u00eates ne se rapportent pas \u00e0 la totalit\u00e9 de la ligne ou de la colonne, utiliser l'\u00e9l\u00e9ment HTML <code>&lt;th&gt;</code> et son attribut <code>id</code>, ainsi que l'attribut <code>headers</code> de l'\u00e9l\u00e9ment <code>&lt;td&gt;</code> pour les cellules de contenu, afin de rendre explicite le lien entre chaque cellule de contenu et ses en-t\u00eates de lignes et de colonnes. L'attribut <code>headers</code> d'une cellule de donn\u00e9e reprend chaque valeur d'<code>id</code> des en-t\u00eates associ\u00e9s \u00e0 la cellule.</li></ul>", 
        "thema": "Tableaux                     ", 
        "name": "84"
    }, 
    "584": {
        "goal": "<ul>\r\n    <li>Permettre l'acc\u00e8s \u00e0 l'information pour les utilisateurs dont le navigateur ou la plate-forme, ou encore l'aide technique, ne permet pas de visualiser les couleurs</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "L'information n'est pas v\u00e9hicul\u00e9e uniquement par la couleur.", 
        "solution": "<p>Fournir un moyen redondant pour compl\u00e9ter la couleur utilis\u00e9e pour v\u00e9hiculer l'information&nbsp;:</p>\r\n<ul>\r\n    <li>balisage s\u00e9mantique</li>\r\n    <li>mention textuelle</li>\r\n    <li>autre mise en forme</li>\r\n    <li>hachures, motifs ou bordures dans les images (cartes, graphiques)</li>\r\n</ul>", 
        "thema": "Alternatives                 ", 
        "name": "85"
    }, 
    "585": {
        "goal": "<ul>\n    <li>Fournir un acc\u00e8s \u00e0 l'information pour les utilisateurs dont le navigateur ou la platre-forme ne supporte pas les technologies utilis\u00e9es dans les objets inclus</li>\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les objets inclus sont dot\u00e9s d'une alternative appropri\u00e9e", 
        "solution": "<p>Indiquer l'alternative des objets inclus via&nbsp;:</p>\r\n<ul>\r\n    <li>le contenu de l'\u00e9l\u00e9ment HTML <code>&lt;object&gt;</code></li>\r\n    <li>le contenu de l'\u00e9l\u00e9ment HTML <code>&lt;embed&gt;</code></li>\r\n    <li>un contenu plac\u00e9 dans le contexte imm\u00e9diat de l'objet </li>\r\n    <li>un lien vers une page fournissant le contenu alternatif, plac\u00e9 dans le contexte imm\u00e9diat de l'objet</li>\r\n</ul>", 
        "thema": "Alternatives                 ", 
        "name": "86"
    }, 
    "586": {
        "goal": "<ul>\n    <li>Faciliter l'acc\u00e8s aux contenus ou services prot\u00e9g\u00e9s par des captchas pour les utilisateurs ne pouvant exploiter les captchas graphiques</li>\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les captchas audio peuvent \u00eatre r\u00e9\u00e9cout\u00e9s \u00e0 volont\u00e9", 
        "solution": "<ul>\r\n    <li>Fournir un lien de t\u00e9l\u00e9chargement du captcha audio ou le diffuser via un player permettant de le rejouer</li>\r\n</ul>", 
        "thema": "Alternatives                 ", 
        "name": "87"
    }, 
    "587": {
        "goal": "<ul>\r\n    <li>Faciliter le traitement des pages par les aides techniques</li>\r\n    <li>Favoriser la s\u00e9paration du contenu structur\u00e9 et de sa mise en forme</li>\r\n    <li>All\u00e9ger le code HTML</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le contenu ne comporte pas de tableaux imbriqu\u00e9s", 
        "solution": "<ul>\r\n    <li>R\u00e9server l'utilisation des tableaux de mise en forme aux cas n\u00e9cessaires (faute de possibilit\u00e9 \u00e9quivalente en CSS) et n'entra\u00eenant pas d'imbrication de tableaux</li>\r\n    <li>Privil\u00e9gier le recours \u00e0 plusieurs tableaux de donn\u00e9es simples successifs plut\u00f4t que des tableaux de donn\u00e9es complexes imbriqu\u00e9s</li>\r\n    <li>Ne pas utiliser de tableaux de mise en forme pour la mise en page de contenu comportant un tableau de donn\u00e9es</li>\r\n</ul>", 
        "thema": "Code", 
        "name": "88"
    }, 
    "588": {
        "goal": "<ul>\r\n<li>simplifier la gestion des caract\u00e8res de tous types en recourant \u00e0 un jeux de caract\u00e8res aussi complet que possible.</li>\r\n<li>faciliter la r\u00e9utilisation du contenu en recourant au jeu consid\u00e9r\u00e9 comme jeu par d\u00e9faut dans diff\u00e9rents contextes (XML).</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le codage de caract\u00e8res utilis\u00e9 est UTF-8", 
        "solution": "", 
        "thema": "Code", 
        "name": "89"
    }, 
    "589": {
        "goal": "<ul>\r\n    <li>Faciliter l'adaptation du rendu aux besoins de l'utilisateur (agrandissement de la taille des caract\u00e8res, modification des couleurs, de la police, de la graisse, de la justification, etc)</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les textes pouvant \u00eatre mis en forme via des styles ne sont pas remplac\u00e9s par des images", 
        "solution": "<ul>\r\n    <li>Utiliser des textes HTML mis en forme \u00e0 l'aide des styles CSS</li>\r\n</ul>", 
        "thema": "Code", 
        "name": "90"
    }, 
    "590": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les mots ne comportent ni espaces ni balisage interne.", 
        "solution": "", 
        "thema": "Code", 
        "name": "91"
    }, 
    "591": {
        "goal": "<ul>\n    <li>Optimiser les possibilit\u00e9s de retour d'information de la part des utilisateurs.</li>\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le site propose au moins deux moyens de contact", 
        "solution": "<ul>\r\n    <li>Par exemple, indiquer l'adresse e-mail et postale de l'auteur et/ou du webmestre et mettre en place un formulaire permettant de le(s) contacter.</li>\r\n</ul>", 
        "thema": "Contact                      ", 
        "name": "92"
    }, 
    "592": {
        "goal": "<ul>\r\n    <li>Informer les utilisateurs sur la prise en compte de leur demande</li>\r\n    <li>Permettre aux utilisateurs d'obtenir une confirmation archivable de la bonne r\u00e9ception de leurs demandes d'information</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Chaque demande d'information fait l'objet d'un accus\u00e9 de r\u00e9ception", 
        "solution": "<ul>\r\n    <li>Mettre en place un script d'envoi automatique d'accus\u00e9 de r\u00e9ception aux e-mails re\u00e7us.</li>\r\n</ul>", 
        "thema": "Contact                      ", 
        "name": "93"
    }, 
    "593": {
        "goal": "<ul>\r\n    <li>Informer les utilisateurs sur les d\u00e9lais chiffr\u00e9s de r\u00e9ponse</li>\r\n    <li>Limiter les risques de relance de la part des utilisateurs</li>\r\n    <li>Rassurer sur la capacit\u00e9 \u00e0 prendre en compte les demandes</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les d\u00e9lais de r\u00e9ponse aux demandes d'information sont indiqu\u00e9s.", 
        "solution": "<ul>\r\n    <li>Indiquer quel est le d\u00e9lai chiffr\u00e9 de r\u00e9ponse pr\u00e9vu pour chaque formulaire de demande d'information.</li>\r\n</ul>", 
        "thema": "Contact                      ", 
        "name": "94"
    }, 
    "594": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs d'identifier imm\u00e9diatement les nouveaux contenus ou services en ligne</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le site fournit aux utilisateurs la possibilit\u00e9 de connaitre les nouveaux contenus ou services", 
        "solution": "", 
        "thema": "Contenus", 
        "name": "95"
    }, 
    "595": {
        "goal": "<ul>\n    <li>Faciliter la compr\u00e9hension du contenu quel que soit le mode de restitution, notamment vocal</li>\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les syntaxes cryptiques (langage SMS, ACSII art, etc) sont explicit\u00e9es ou traduites", 
        "solution": "<ul>\r\n    <li>Faire pr\u00e9c\u00e9der ou suivre chaque syntaxe cryptique d'une alternative ou d'une explication</li>\r\n    <li>Fournir un lien vers un glossaire</li>\r\n</ul>", 
        "thema": "Contenus", 
        "name": "96"
    }, 
    "596": {
        "goal": "<ul>\n    <li>Permettre la restitution en tant que telles des listes par les navigateurs et les aides techniques, afin de faciliter leur compr\u00e9hension par les utilisateurs.</li>\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les \u00e9l\u00e9ments visuellement pr\u00e9sent\u00e9s sous forme de liste sont balis\u00e9s de fa\u00e7on appropri\u00e9e dans le code source", 
        "solution": "<p>Utiliser les \u00e9l\u00e9ments HTML appropri\u00e9s&nbsp;:</p>\r\n<ul>\r\n    <li><code>&lt;ul&gt;</code> et <code>&lt;li&gt;</code> pour les liste non ordonn\u00e9es</li>\r\n    <li><code>&lt;ol&gt;</code> et <code>&lt;li&gt;</code> pour les listes ordonn\u00e9es</li>\r\n    <li><code>&lt;dl&gt;</code>, <code>&lt;dt&gt;</code> et <code>&lt;dd&gt;</code> pour les listes de d\u00e9finition</li>\r\n</ul>", 
        "thema": "Code", 
        "name": "97"
    }, 
    "597": {
        "goal": "<ul>\n    <li>Faciliter la navigation pour les utilisateurs de lecteurs d'\u00e9cran ou pour ceux naviguant au clavier</li>\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "L'emplacement des blocs de navigation est coh\u00e9rent dans le code source de toutes les pages", 
        "solution": "<ul>\r\n    <li>Utiliser un syst\u00e8me de gabarits de page et veiller \u00e0 respecter un ordre constant des principaux blocs de navigation et de contenu</li>\r\n</ul>", 
        "thema": "Code", 
        "name": "98"
    }, 
    "598": {
        "goal": "<ul>\r\n    <li>Permettre une compr\u00e9hension des contenus pour les utilisateurs qui n'utilisent pas feuilles de style</li>\r\n    <li>Am\u00e9liorer la s\u00e9paration des contenus et de la pr\u00e9sentation</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le contenu et le sens de chaque page ne sont pas alt\u00e9r\u00e9s lorsque les styles sont d\u00e9sactiv\u00e9s", 
        "solution": "<p>Dans  l'usage de CSS (y compris via javascript), veiller&nbsp;:</p>\r\n<ul>\r\n    <li>\u00e0 l'absence de pseudo-contenus g\u00e9n\u00e9r\u00e9s \u00e0 l'aide de propri\u00e9t\u00e9s CSS telles que content et background-image, ou des pseudo-\u00e9l\u00e9ments :after et :before</li>\r\n    <li>dans chaque bloc de contenu, \u00e0 la coh\u00e9rence dans l'ordre du contenu HTML brut, ind\u00e9pendamment de l'ordre de lecture d\u00e9duit de la mise en forme CSS \u00e0 l'\u00e9cran</li>\r\n</ul>", 
        "thema": "Code", 
        "name": "99"
    }, 
    "599": {
        "goal": "<ul>\n    <li>Permettre un affichage hors-ligne correct des pages en indiquant au navigateur le jeu de caract\u00e8res utilis\u00e9</li>\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le code source de chaque page contient une metadonn\u00e9e qui d\u00e9finit le jeu de caract\u00e8res", 
        "solution": "<p>L'\u00e9l\u00e9ment meta est renseign\u00e9 en fonction de l'encodage effectif du document et de son type MIME sous la forme&nbsp;:</p>\r\n<ul>\r\n    <li><code>&lt;meta http-equiv=\"Content-Type\" content=\"text/html; charset=ISO-8859-1\"&gt;</code> en HTML</li>\r\n    <li><code>&lt;meta http-equiv=\"Content-Type\" content=\"text/html; charset=ISO-8859-1\" /&gt;</code> ou <code>&lt;meta http-equiv=\"Content-Type\" content=\"application/xhtml+xml; charset=ISO-8859-1\" /&gt;</code> en XHTML.</li>\r\n</ul>", 
        "thema": "Code", 
        "name": "100"
    }, 
    "600": {
        "goal": "<ul>\n    <li>Donner un acc\u00e8s imm\u00e9diat \u00e0 l'utilisateur pour comprendre de quoi il s'agit</li>\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les mentions d'appartenance \u00e0 un ordre ou groupe professionnel, d'un label ou d'une r\u00e9compense sont accompagn\u00e9es d'un lien vers la source", 
        "solution": "<ul>\r\n    <li>Fournir pour chaque mention concern\u00e9e un lien explicite vers la source de r\u00e9f\u00e9rence</li>\r\n</ul>", 
        "thema": "E-Commerce                   ", 
        "name": "101"
    }, 
    "601": {
        "goal": "<ul>\r\n    <li>Rassurer l'internaute avant l'achat</li>\r\n    <li>Donner \u00e0 l'acheteur toutes les informations li\u00e9es \u00e0 son achat, que celui-ci se passe bien ou non</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les recours en cas de litige sont indiqu\u00e9s dans les conditions g\u00e9n\u00e9rales de vente ou d'utilisation", 
        "solution": "<ul>\r\n    <li>Indiquer les recours en cas de litige dans les conditions de vente et/ou d'utilisation.</li>\r\n</ul>", 
        "thema": "E-Commerce                   ", 
        "name": "102"
    }, 
    "602": {
        "goal": "<ul>\r\n    <li>Permettre \u00e0 l'utilisateur d'identifier imm\u00e9diatement et sans confusion possible les produits indisponibles</li>\r\n    <li>\u00c9viter l'effet de d\u00e9ception si un utilisateur fait la d\u00e9marche pour un produit et s'aper\u00e7oit tardivement de son indisponibilit\u00e9</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les produits indisponibles font l'objet d'une diff\u00e9renciation visuelle et textuelle", 
        "solution": "<ul>\r\n    <li>Pr\u00e9ciser dans le contenu pr\u00e9sentant chaque produit une mention textuelle ou graphique du type \"indisponible\" ou \"disponible\"</li>\r\n</ul>", 
        "thema": "E-Commerce                   ", 
        "name": "103"
    }, 
    "603": {
        "goal": "<ul>\r\n    <li>Permet aux utilisateurs de choisir le mode de paiement qui leur convient le mieux dans leur contexte.</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le site accepte au moins deux moyens de paiement", 
        "solution": "<ul>\r\n    <li>Informer le client, le plus t\u00f4t possible avant la fin de la commande, qu'il dispose de deux moyens de paiement.</li>\r\n</ul>", 
        "thema": "E-Commerce                   ", 
        "name": "104"
    }, 
    "604": {
        "goal": "<ul>\r\n    <li>Donner \u00e0 l'utilisateur une confirmation des informations relatives \u00e0 la commande</li>\r\n    <li>Permettre \u00e0 l'utilisateur de conserver un historique de la transaction ailleurs que sur le site</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Un courriel indiquant la r\u00e9f\u00e9rence de la transaction et les donn\u00e9es de la commande est envoy\u00e9 suite \u00e0 la validation.", 
        "solution": "<ul>\r\n    <li>Utiliser ou d\u00e9velopper des outils de gestion du caddie envoyant automatiquement une confirmation.</li>\r\n</ul>", 
        "thema": "E-Commerce                   ", 
        "name": "105"
    }, 
    "605": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs d'afficher et \u00e9ventuellement d'imprimer une trace de sa commande </li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La r\u00e9f\u00e9rence de la transaction est affich\u00e9e au client apr\u00e8s la validation de sa commande.", 
        "solution": "<ul>\r\n    <li>Indiquer la r\u00e9f\u00e9rence de la transaction sur le formulaire de confirmation de commande envoy\u00e9 au client apr\u00e8s validation d'un achat en ligne.</li>\r\n</ul>", 
        "thema": "E-Commerce                   ", 
        "name": "106"
    }, 
    "606": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les conditions de d\u00e9bit ou d'encaissement sont sp\u00e9cifi\u00e9es avant la validation d\u00e9finitive de la commande", 
        "solution": "", 
        "thema": "E-Commerce                   ", 
        "name": "107"
    }, 
    "607": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs de conna\u00eetre les services mis \u00e0 leur disposition et leurs fonctionnements</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les horaires et tarifs de fonctionnement des services mis \u00e0 la disposition des utilisateurs sont indiqu\u00e9s", 
        "solution": "<ul>\r\n    <li>Indiquer les horaires et tarifs de fonctionnement des services mis \u00e0 la disposition des utilisateurs.</li>\r\n</ul>", 
        "thema": "E-Commerce                   ", 
        "name": "108"
    }, 
    "608": {
        "goal": "<ul>\r\n    <li>Permettre \u00e0 l'utilisateur de v\u00e9rifier et de corriger si n\u00e9cessaire sa saisie.</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les contenus ou fichiers destin\u00e9s \u00e0 des espaces publics peuvent \u00eatre v\u00e9rifi\u00e9s avant leur envoi d\u00e9finitif", 
        "solution": "", 
        "thema": "Espaces publics              ", 
        "name": "109"
    }, 
    "609": {
        "goal": "<ul>\r\n    <li>Expliquer aux utilisateurs pourquoi et dans quelles mesures leurs publications peuvent \u00eatre mod\u00e9r\u00e9es</li>\r\n    <li>Limiter les demandes des utilisateurs ne voyant leurs publications appara\u00eetre</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les conditions de mod\u00e9ration des espaces publics sont indiqu\u00e9es", 
        "solution": "<ul>\r\n    <li>Indiquer les conditions de mod\u00e9ration des espaces publics.</li>\r\n</ul>", 
        "thema": "Espaces publics              ", 
        "name": "110"
    }, 
    "610": {
        "goal": "<ul>\r\n    <li>Faciliter le signalement de contenus ill\u00e9gaux ou inappropri\u00e9s</li>\r\n    <li>Acc\u00e9l\u00e9rer la vitesse de d\u00e9tection</li>\r\n    <li>Limiter les risques de consultation de contenus ill\u00e9gaux ou inappropri\u00e9s</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les espaces publics proposent au moins un moyen de signaler les abus", 
        "solution": "<ul>\r\n    <li>Par exemple, indiquer l'adresse e-mail du mod\u00e9rateur ou mettre en place un formulaire permettant de le contacter.</li>\r\n</ul>", 
        "thema": "Espaces publics              ", 
        "name": "111"
    }, 
    "611": {
        "goal": "<ul>\r\n    <li>Permettre un r\u00e9f\u00e9rencement des contenus des documents PDF</li>\r\n    <li>Faciliter la manipulation de contenus des documents PDF</li>\r\n    <li>Garantir la lisibilit\u00e9 des contenus des documents PDF </li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le texte des documents PDF internes est s\u00e9lectionnable.", 
        "solution": "", 
        "thema": "Fichiers et multim\u00e9dia       ", 
        "name": "112"
    }, 
    "612": {
        "goal": "<ul>\r\n    <li>Informer les utilisateurs sur la quantit\u00e9 de donn\u00e9es \u00e0 t\u00e9l\u00e9charger</li>\r\n    <li>Permettre aux utilisateurs de diff\u00e9rer le t\u00e9l\u00e9chargement en connexion bas-d\u00e9bit ou mobile</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La taille des fichiers internes propos\u00e9s en t\u00e9l\u00e9chargement est indiqu\u00e9e.", 
        "solution": "<ul>\r\n    <li>Au minimum, pr\u00e9voir une page d'aide indiquant le poids moyen ou une maximum de poids des fichiers propos\u00e9s.</li>\r\n    <li>Au mieux, indiquer le poids lors de chaque lien permettant de t\u00e9l\u00e9charger un fichier.</li>\r\n</ul>", 
        "thema": "Fichiers et multim\u00e9dia       ", 
        "name": "113"
    }, 
    "613": {
        "goal": "<ul>\r\n    <li>\u00c9viter le t\u00e9l\u00e9chargement de donn\u00e9es inutiles</li>\r\n    <li>Am\u00e9liorer les performances</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les vignettes ne sont pas des images de taille sup\u00e9rieure redimensionn\u00e9es c\u00f4t\u00e9 client.", 
        "solution": "<ul>\r\n    <li>Utiliser pour les vignettes de pr\u00e9visualisation d'images des versions\r\nsp\u00e9cifiques de celle-ci, et non les images originales redimensionn\u00e9es\r\nvia leurs attributs HTML, leurs propri\u00e9t\u00e9s CSS, etc.</li>\r\n</ul>", 
        "thema": "Fichiers et multim\u00e9dia       ", 
        "name": "114"
    }, 
    "614": {
        "goal": "<ul>\r\n    <li>Aider l'internaute \u00e0 comprendre ce qu'on attend et ainsi, faciliter le passage \u00e0 l'\u00e9tape suivante</li>\r\n    <li>\u00c9viter la frustration de l'utilisateur</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "En cas de rejet des donn\u00e9es saisies dans un formulaire, les raisons du rejet sont indiqu\u00e9es \u00e0 l'utilisateur.", 
        "solution": "<ul>\r\n    <li>Indiquer en d\u00e9but de formulaire le nom des champs contenant les donn\u00e9es rejet\u00e9es ou au minium informer l'utilisateur du rejet d'une ou plusieurs saisies\r\nSignaler chacun des champs \u00e0 corriger en les diff\u00e9renciant visuellement ou mieux via une mention explicite dans leur \u00e9tiquette.</li>\r\n</ul>", 
        "thema": "Formulaires", 
        "name": "115"
    }, 
    "615": {
        "goal": "<ul>\n    <li>Donner \u00e0 l'utilisateur une vue globale de ce qu'il a saisie dans les pages pr\u00e9c\u00e9dentes</li>\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Lors de la saisie d'un formulaire r\u00e9parti sur plusieurs pages, un r\u00e9capitulatif global est affich\u00e9 avant l'envoi d\u00e9finitif.", 
        "solution": "<ul>\r\n    <li>Stocker les informations saisies dans des variables de session afin de pouvoir en afficher un r\u00e9capitulatif global.</li>\r\n</ul>", 
        "thema": "Formulaires", 
        "name": "116"
    }, 
    "616": {
        "goal": "<ul>\r\n    <li>Toujours laisser la main \u00e0 l'utilisateur sur la totalit\u00e9 des informations qu'il donne</li>\r\n    <li>Permettre \u00e0 l'utilisateur de modifier des informations sur lesquelles il voudrait revenir</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "En cas de rejet des donn\u00e9es saisies dans un formulaire, toutes les donn\u00e9es saisies peuvent \u00eatre modifi\u00e9es par l'utilisateur.", 
        "solution": "<ul>\r\n    <li>Stocker toutes les donn\u00e9es saisies dans des variables de session afin de pouvoir les r\u00e9afficher.</li>\r\n</ul>", 
        "thema": "Formulaires", 
        "name": "117"
    }, 
    "617": {
        "goal": "<ul>\r\n    <li>Donner  \u00e0 l'utilisateur un retour sur l'action qu'il vient d'effectuer</li>\r\n    <li>\u00c9viter la frustration d'un utilisateur qui pense que le processus est fini alors qu'il y a eu un probl\u00e8me</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La soumission d'un formulaire est suivie d'un message indiquant la r\u00e9ussite ou non de l'action souhait\u00e9e", 
        "solution": "", 
        "thema": "Formulaires", 
        "name": "118"
    }, 
    "618": {
        "goal": "<ul>\r\n    <li>Limiter le risque d'erreurs de saisie</li>\r\n    <li>Limiter les risques associ\u00e9s \u00e0 l'envoi de donn\u00e9es eronn\u00e9es ou inexploitables</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "L'\u00e9tiquette de chaque champ de formulaire indique, le cas \u00e9ch\u00e9ant, quel format de saisie doit \u00eatre respect\u00e9", 
        "solution": "<ul>\r\n    <li>Indiquer le format de la saisie dans l'\u00e9tiquette associ\u00e9e au champ.</li>\r\n</ul>", 
        "thema": "Formulaires", 
        "name": "119"
    }, 
    "619": {
        "goal": "<ul>\n    <li>Acc\u00e9l\u00e9rer l'apprentissage du fonctionnement de l'interface\nAm\u00e9liorer l'identification des liens et de leur fonction</li>\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les hyperliens de m\u00eame nature ont des couleurs, des formes et des comportements identiques sur toutes les pages.", 
        "solution": "<ul>\r\n    <li>Appliquer des propri\u00e9t\u00e9s communes de style, de couleur, de graisse, de casse, de soulignement \u00e0 des ensemble de liens de m\u00eame nature.</li>\r\n</ul>", 
        "thema": "Hyperliens                   ", 
        "name": "120"
    }, 
    "620": {
        "goal": "<ul>\r\n    <li>Limiter les difficult\u00e9s \u00e0 cliquer sur un lien lorsque celui ci occupe plus d'espace en mode survol\u00e9 ou activ\u00e9</li>\r\n    <li>Limiter les effets de clignotements ou de d\u00e9placement de contenus.</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le survol ou l'activation des hyperliens ne modifie pas la mise en page.", 
        "solution": "<ul>\r\n    <li>Afin de ne pas perturber la mise en forme, il est recommand\u00e9 d'utiliser le m\u00eame m\u00e9canisme de mise en valeur, autre que par la couleur, \u00e0 tous les \u00e9tats possible d'un lien : actif, visit\u00e9, non visit\u00e9, survol\u00e9, il convient donc d'\u00e9viter de mettre en gras, lors de son survol, un lien en graisse normale par ailleurs</li>\r\n</ul>", 
        "thema": "Hyperliens                   ", 
        "name": "121"
    }, 
    "621": {
        "goal": "<ul>\r\n    <li> Faciliter le r\u00e9f\u00e9rencement \u00e0 travers l'obtention de backlinks</li>\r\n    <li>Augmenter la visibilit\u00e9 pour les utilisateurs</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le site n'interdit pas la mise en place de liens entrants", 
        "solution": "<ul>\r\n    <li>Ne pas publier de conditions restreignant  ou interdisant la mise en place de liens vers le site sur des sites externes</li>\r\n</ul>", 
        "thema": "Hyperliens                   ", 
        "name": "122"
    }, 
    "622": {
        "goal": "<ul>\r\n    <li>Assurer une pr\u00e9vention contre les erreurs 404 en cours de navigation</li>\r\n    <li>Faciliter un acc\u00e8s rapide \u00e0 tous les contenus</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Tous les hyperliens internes du site sont valides.", 
        "solution": "<ul>\r\n    <li>S'assurer que l'outil utilis\u00e9 pour la r\u00e9daction des contenus poss\u00e8de une gestion satisfaisante et coh\u00e9rente des hyperliens internes.</li>\r\n    <li>Si ce n'est pas le cas, lancer r\u00e9guli\u00e8rement un contr\u00f4le de la validit\u00e9 de l'ensemble des liens du site.</li>\r\n</ul>", 
        "thema": "Hyperliens                   ", 
        "name": "123"
    }, 
    "623": {
        "goal": "<ul>\r\n    <li>Faciliter l'identification des contenus d\u00e9j\u00e0 visit\u00e9s</li>\r\n    <li>Faciliter l'identification des contenus restant \u00e0 d\u00e9couvrir</li>\r\n    <li>Inciter \u00e0 la navigation sur de nouvelles pages</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le site n'applique pas le m\u00eame style aux liens visit\u00e9s et non visit\u00e9s", 
        "solution": "", 
        "thema": "Hyperliens                   ", 
        "name": "124"
    }, 
    "624": {
        "goal": "<ul>\r\n    <li>Permettre un r\u00e9f\u00e9rencement cibl\u00e9</li>\r\n    <li>Am\u00e9liorer le guidage pour les outils de recherche</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La racine du site contient des instructions pour les robots d'indexation", 
        "solution": "<p>Pour d\u00e9finir les r\u00e9pertoires, fichiers ou types de fichiers non indexables, utiliser les instructions <code>User-agent</code> et <code>Disallow</code> dans un fichier texte unique appel\u00e9 robots.txt plac\u00e9 dans le r\u00e9pertoire racine du site.</p>\r\n<p>Alternativement, pour agir au niveau d'une page sp\u00e9cifique, utiliser dans celle-ci la balise <code>&lt;meta name=\"robots\" content=\"attribut1,attribut2\" /&gt;</code> o\u00f9&nbsp;:</p>\r\n<ul>\r\n    <li>attribut1 peut prendre les valeurs index (indexer cette page) ou noindex (ne pas indexer cette page)</li>\r\n    <li>attribut2 peut prendre les valeurs follow (suivre les liens contenus dans cette page) ou nofollow (ne pas suivre les liens)</li>\r\n</ul>", 
        "thema": "Identification               ", 
        "name": "125"
    }, 
    "625": {
        "goal": "<ul>\r\n    <li>Permettre aux outils de recherche et d'indexation d'extraire des informations sur les pages et ainsi d'am\u00e9liorer la restitution aux utilisateurs</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le code source de chaque page contient une metadonn\u00e9e qui en d\u00e9crit le contenu", 
        "solution": "<ul>\r\n    <li>Renseigner l'\u00e9l\u00e9ment <code>&lt;meta name=\"description\" content=\"\" /&gt;</code> avec une description du contenu de la page ou du site.</li>\r\n</ul>", 
        "thema": "Identification               ", 
        "name": "126"
    }, 
    "626": {
        "goal": "<ul>\n    <li>Donner aux utilisateurs qui le souhaitent la possibilit\u00e9 d'acc\u00e9der sans difficult\u00e9 aux moyens de contact t\u00e9l\u00e9phoniques et postaux.</li>\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "L'adresse compl\u00e8te et le num\u00e9ro de t\u00e9l\u00e9phone des soci\u00e9t\u00e9s et organisations sont accessibles depuis toutes les pages du site", 
        "solution": "<p>Indiquer l'adresse postale compl\u00e8te et le num\u00e9ro de t\u00e9l\u00e9phone de la soci\u00e9t\u00e9 ou de l'organisme&nbsp;:</p>\r\n<ul>\r\n    <li>dans chaque page du site</li>\r\n    <li>ou dans une page Contact, A propos, etc accessible directement depuis chaque page du site</li>\r\n</ul>", 
        "thema": "Identification               ", 
        "name": "127"
    }, 
    "627": {
        "goal": "<ul>\r\n    <li>Am\u00e9liorer l'identification visuelle du site et de ses pages</li>\r\n    <li>Faciliter l'identification dans le navigateur et dans les favoris ou signets</li>\r\n    <li>Permettre l'affichage, l'appel, et la m\u00e9morisation \u00e9ventuelle de l'ic\u00f4ne de favori par tous les navigateurs.</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le code source des pages contient un appel valide \u00e0 un ic\u00f4ne de favori.", 
        "solution": "<p>Selon le format choisi pour l'ic\u00f4ne et son emplacement, utilisez un lien du type&nbsp;:</p>\r\n<ul>\r\n    <li><code>&lt;link rel=\"icon\" type=\"image/png\" href=\"/img/favicon.png\" /&gt;</code> (format png, mais aussi jpg, gif, etc)</li>\r\n    <li><code>&lt;link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"/img/favicon.ico\" /&gt;</code> (format ico Microsoft seul reconnu par Internet Explorer)</li>\r\n</ul>", 
        "thema": "Identification               ", 
        "name": "128"
    }, 
    "628": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs et outils de navigation d'anticiper le changement de langue en cours de navigation</li>\r\n    <li>\u00c9viter aux utilisateurs de se rendre sur une page dont ils ne comprennent pas la langue</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La langue principale de la page cible d'un hyperlien est identifiable lorsqu'elle diff\u00e8re de celle de la page d'origine", 
        "solution": "", 
        "thema": "Internationalisation         ", 
        "name": "129"
    }, 
    "629": {
        "goal": "<ul>\n    <li>Donner aux utilisateurs la possibilit\u00e9 d'acc\u00e9der directement \u00e0 la traduction de la page visit\u00e9e</li>\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Chaque page permet d'acc\u00e9der \u00e0 ses traductions disponibles", 
        "solution": "<ul>\r\n    <li>Fournir sur chaque page traduite un lien ou un formulaire de navigation donnant imm\u00e9diatement acc\u00e8s \u00e0 la version traduite du contenu de la page</li>\r\n</ul>", 
        "thema": "Internationalisation         ", 
        "name": "130"
    }, 
    "630": {
        "goal": "<ul>\r\n    <li>Limiter le temps d'apprentissage de l'interface</li>\r\n    <li>Faciliter la compr\u00e9hension des ic\u00f4nes</li>\r\n    <lI>Limiter le risque d'erreurs</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les ic\u00f4nes de navigation sont accompagn\u00e9es d'une l\u00e9gende explicite", 
        "solution": "<ul>\r\n    <li>La nature de la cible de chaque ic\u00f4ne-lien est pr\u00e9cis\u00e9e par l'attribut <code>alt</code> de l'image et par l'attribut <code>title</code> du lien, sous la forme&nbsp;: <code>&lt;a href=\"mailto:John.Doe@example.com\" title=\"John.Doe@example.com\"&gt;&lt;img src=\"letter.png\" alt=\"John.Doe@example.com\"&gt;&lt;/a&gt;</code></li>\r\n</ul>", 
        "thema": "Navigation", 
        "name": "131"
    }, 
    "631": {
        "goal": "<ul>\n    <li>Permettre aux utilisateurs qui consultent les pages de mani\u00e8re lin\u00e9aire (mode vocal) ou semi-lin\u00e9aire (\u00e9cran de faible largeur) de ne pas avoir \u00e0 d\u00e9filer l'ensemble des \u00e9l\u00e9ments sur chaque page pour acc\u00e9der aux contenus.</li>\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Chaque page contient des liens d'acc\u00e8s rapide plac\u00e9s au d\u00e9but du code source", 
        "solution": "<p>Fournir en d\u00e9but de code HTML, avant tout autre lien ou formulaire pr\u00e9sent dans la page, les liens visant des ancres correspondantes&nbsp;:</p>\r\n<ul>\r\n    <li>vers le menu principal si celui-ci n'est pas imm\u00e9diatement plac\u00e9 apr\u00e8s l'en-t\u00eate de page</li>\r\n    <li>vers le contenu principal si celui-ci n'est pas imm\u00e9diatement plac\u00e9 apr\u00e8s l'en-t\u00eate de page</li>\r\n    <li>vers le formulaire du moteur de recherche si celui-ci n'est pas imm\u00e9diatement plac\u00e9 apr\u00e8s l'en-t\u00eate de page</li>\r\n</ul>\r\n<p>Le cas \u00e9ch\u00e9ant, ce menu d'acc\u00e8s rapide peut \u00eatre masqu\u00e9 au chargement de la page et s'afficher lors de la premi\u00e8re tabulation entrant dans celle-ci (via javascript ou CSS).</p>", 
        "thema": "Navigation", 
        "name": "132"
    }, 
    "632": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs d'avoir l'ensemble des informations essentielles relatives \u00e0 la recherche qu'ils ont effectu\u00e9e.</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La page de r\u00e9sultats de recherche indique le nombre de r\u00e9sultats, le nombre de pages de r\u00e9sultats, et le nombre de r\u00e9sultats par page", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "133"
    }, 
    "633": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs naviguant au clavier sur un site d'appr\u00e9hender la structure des pages et d'identifier rapidement l'emplacement des diff\u00e9rents \u00e9l\u00e9ments.</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La navigation au clavier s'effectue dans un ordre pr\u00e9visible.", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "134"
    }, 
    "634": {
        "goal": "<ul>\r\n    <li>Donner aux utilisateurs des indications explicites pour fermer une fen\u00eatre ou une bo\u00eete modale.</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les nouvelles fen\u00eatres dimensionn\u00e9es et les fen\u00eatres modales sont dot\u00e9es d'un bouton de fermeture explicite", 
        "solution": "<ul>\r\n    <li>Placer dans chaque fen\u00eatre dimensionn\u00e9e un bouton ou un lien avec un libell\u00e9 explicite pour la fermeture, et associer ce bouton \u00e0 une action de fermeture.</li>\r\n</ul>", 
        "thema": "Navigation", 
        "name": "135"
    }, 
    "635": {
        "goal": "<ul>\r\n    <li>Faciliter l'apprentissage de la navigation sur l'interface</li>\r\n    <li>Faciliter le rep\u00e9rage de l'information</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les blocs de navigation de m\u00eame nature sont affich\u00e9s au m\u00eame emplacement sur toutes les pages", 
        "solution": "<ul>\r\n    <li>Conserver le m\u00eame positionnement \u00e0 l'\u00e9cran des menus de navigation sur l'ensemble du site.</li>\r\n</ul>", 
        "thema": "Navigation", 
        "name": "136"
    }, 
    "636": {
        "goal": "<ul>\r\n    <li>\u00c9viter l'ouverture inopin\u00e9e sur le poste client d'un autre logiciel que le navigateur Web.</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les liens provoquant l'ouverture d'un logiciel externe ont un libell\u00e9 explicite.", 
        "solution": "<ul>\r\n    <li>R\u00e9diger les libell\u00e9s de liens concern\u00e9s de mani\u00e8re \u00e0 indiquer le comportement ou \u00e0 permettre de l'anticiper. Par exemple, r\u00e9diger les liens maisl sous la forme d'adresse mail ou de \"Envoyer un mail \u00e0\u2026\".</li>\r\n</ul>", 
        "thema": "Navigation", 
        "name": "137"
    }, 
    "637": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs de commencer imm\u00e9diatement leur navigation sur la ressource qu'ils ont demand\u00e9.</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Si le site n'est pas r\u00e9serv\u00e9 \u00e0 un public sp\u00e9cifique, l'acc\u00e8s aux contenus est imm\u00e9diat", 
        "solution": "<ul>\r\n    <li>Ne faire figurer d'avertissement diff\u00e9rant l'acc\u00e8s au contenu qu'en cas de contenu r\u00e9serv\u00e9 \u00e0 un public sp\u00e9cifique</li>\r\n</ul>", 
        "thema": "Navigation", 
        "name": "138"
    }, 
    "638": {
        "goal": "<ul>\r\n    <li>Permettre une restitution correcte des contenus masqu\u00e9s qui doivent \u00eatre lus par les lecteurs d'\u00e9cran</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Un contenu qui doit \u00eatre restitu\u00e9 dans un lecteur d'\u00e9cran ne lui est pas dissimul\u00e9", 
        "solution": "<ul>\r\n    <li>Ne  pas utiliser les propri\u00e9t\u00e9s display et visibility pour masquer le contenu</li>\r\n    <li>Utiliser les propri\u00e9t\u00e9s CSS permettant de positionner le contenu en dehors de la zone d'affichage du navigateur : position, top, left etc.</li>\r\n</ul>", 
        "thema": "Navigation", 
        "name": "139"
    }, 
    "639": {
        "goal": "<ul>\r\n    <li>Permettre l'impression des contenus sous une forme sp\u00e9cifique.</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le site propose au moins une feuille de style d\u00e9di\u00e9e \u00e0 l'impression", 
        "solution": "<ul>\r\n    <li>Fournir une feuille de style sp\u00e9cifique pour le type de media print </li>\r\n</ul>", 
        "thema": "Pr\u00e9sentation                 ", 
        "name": "140"
    }, 
    "640": {
        "goal": "<ul>\n    <li>Permettre aux contenus de s'afficher correctement, m\u00eame lorsque les polices pr\u00e9vues ne sont pas pr\u00e9sentes sur le syst\u00e8me de l'utilisateur.</li>\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Une famille g\u00e9n\u00e9rique de police est indiqu\u00e9e comme dernier \u00e9l\u00e9ment de substitution.", 
        "solution": "<p>Les polices de caract\u00e8res \u00e9tant indiqu\u00e9es dans les styles CSS \u00e0 l'aide des propri\u00e9t\u00e9s <code>font-family</code> ou <code>font</code>&nbsp;:</p>\r\n<ul>\r\n    <li>Pour les polices serifs \u00e0 empattement (du type Times Roman), sp\u00e9cifier la famille de police g\u00e9n\u00e9rique serif&nbsp;: <code>font-family: Georgia, \"Bookman Old Style\", serif;</code></li>\r\n    <li>Pour les polices sans serifs sans empattement (du type Arial), sp\u00e9cifier la famille de police g\u00e9n\u00e9rique sans-serif&nbsp;: <code>font-family: Optima, \"Trebuchet MS\", sans-serif;</code></li>\r\n    <li>Pour les polices monospace (du type Courier), sp\u00e9cifier la famille de police g\u00e9n\u00e9rique monospace&nbsp;: <code>font-family: Courier, monospace;</code></li>\r\n    <li>De m\u00eame, utiliser les familles g\u00e9n\u00e9riques <code>cursive</code> et <code>fantasy</code> pour les polices manuscrites et fantaisies</li>\r\n</ul>", 
        "thema": "Pr\u00e9sentation                 ", 
        "name": "141"
    }, 
    "641": {
        "goal": "<ul>\n    <li>Permettre aux utilisateurs \u00e9quip\u00e9s de navigateurs qui ne g\u00e8rent pas l'agrandissement des polices en taille fixe d'agrandir les polices sans difficult\u00e9.</li>\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La taille des polices destin\u00e9es \u00e0 l'affichage \u00e9cran est exprim\u00e9e en taille variable et non en taille fixe.", 
        "solution": "<ul>\r\n    <li>Ne pas modifier la taille de la police par d\u00e9faut ou l'indiquer en utilisant une unit\u00e9 proportionnelle aux r\u00e9glages de l'utilisateur(em, ex, %) et non avec une unit\u00e9 d\u00e9pendante du p\u00e9riph\u00e9rique de consultation (px, pt, cm etc)</li>\r\n</ul>", 
        "thema": "Pr\u00e9sentation                 ", 
        "name": "142"
    }, 
    "642": {
        "goal": "<ul>\r\n    <li>\u00c9viter l'affichage de listes de fichiers contenus dans un r\u00e9pertoire</li>\r\n    <li>Am\u00e9liorer la s\u00e9curit\u00e9 du serveur</li>\r\n    <li>Limiter les risques d'intrusion</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le serveur n'envoie pas la liste des fichiers des r\u00e9pertoires n'ayant pas de page d'index", 
        "solution": "<ul>\r\n    <li>Configurer le serveur pour qu'il ne renvoie pas la liste des fichiers pr\u00e9sents dans un r\u00e9pertoire. Pour Apache, vous pouvez rajouter ceci dans votre .htaccess&nbsp;: <code>Options -Indexes</code></li>\r\n</ul>", 
        "thema": "S\u00e9curit\u00e9 et confidentialit\u00e9  ", 
        "name": "143"
    }, 
    "643": {
        "goal": "<ul>\r\n    <li>Informer l'utilisateur sur les cookies</li>\r\n    <li>Expliquer leur r\u00f4le et leur utilit\u00e9</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "L'objectif des cookies et les limitations inh\u00e9rentes \u00e0 leur refus sont expliqu\u00e9s", 
        "solution": "<ul>\r\n    <li>Indiquer les fonctionnalit\u00e9s du site utilisant des cookies et la nature des donn\u00e9es conserv\u00e9es dans la politique de confidentialit\u00e9 du site.</li>\r\n</ul>", 
        "thema": "S\u00e9curit\u00e9 et confidentialit\u00e9  ", 
        "name": "144"
    }, 
    "644": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les comptes ou abonnements ouverts en ligne peuvent \u00eatre ferm\u00e9s par le m\u00eame moyen.", 
        "solution": "", 
        "thema": "S\u00e9curit\u00e9 et confidentialit\u00e9  ", 
        "name": "145"
    }, 
    "645": {
        "goal": "<ul>\r\n    <li>Permettre aux agents utilisateurs d'opter pour le traitement linguistique appropri\u00e9, et notamment&nbsp;:\r\n        <ul>\r\n            <li>la prononciation correcte du contenu par les synth\u00e8ses vocales (lecteurs d'\u00e9cran)/li>\r\n            <li>la traduction pertinente du contenu par les outils de traduction automatis\u00e9s.</li>\r\n        </ul>\r\n    </li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le serveur envoie l'indication de la langue principale du contenu.", 
        "solution": "<p>L'en-t\u00eate HTTP <code>Content-Language</code> est renseign\u00e9 selon la langue primaire du document sous la forme <code>Content-Language: fr</code>. La syntaxe utilis\u00e9e est d\u00e9finie par la norme RFC3066 sous la forme&nbsp;:</p>\r\n<ul>\r\n    <li>d'un code de langue ISO639</li>\r\n    <li>suivi si n\u00e9cessaire apr\u00e8s un tiret par un code de pays ISO3166&nbsp;: fr-CA.</li>\r\n</ul>", 
        "thema": "Serveur et Performances      ", 
        "name": "146"
    }, 
    "646": {
        "goal": "<ul>\n    <li>Permettre aux utilisateurs d'aides techniques (lecteurs d'\u00e9cran) d'identifier ais\u00e9ment la nature des informations fournie par un tableau.</li>\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les titres des tableaux de donn\u00e9es sont renseign\u00e9s.", 
        "solution": "<ul>\r\n    <li>Utiliser et renseigner l'\u00e9l\u00e9ment HTML <code>caption</code> pour chaque tableau de donn\u00e9es.</li>\r\n</ul>", 
        "thema": "Tableaux                     ", 
        "name": "147"
    }, 
    "647": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs de choisir un mot de passe personnalis\u00e9</li>\r\n    <li>\u00c9viter aux utilisateurs de rechercher leur mot de passe \u00e0 chaque connexion </li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les mots de passe peuvent \u00eatre choisis ou chang\u00e9s par l'utilisateur", 
        "solution": "", 
        "thema": "S\u00e9curit\u00e9 et confidentialit\u00e9  ", 
        "name": "148"
    }, 
    "648": {
        "goal": "<ul>\r\n    <li>Informer l'utilisateur sur l'utilisation de ses donn\u00e9es personnelles</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La proc\u00e9dure d'acc\u00e8s et de rectification des donn\u00e9es personnelles est d\u00e9crite", 
        "solution": "", 
        "thema": "S\u00e9curit\u00e9 et confidentialit\u00e9  ", 
        "name": "149"
    }, 
    "649": {
        "goal": "<ul>\r\n    <li>Rassurer l'internaute sur le fait qu'il est toujours sur le m\u00eame site</li>\r\n    <li>Permettre \u00e0 l'administrateur du site de mettre des \u00e9l\u00e9ments de guidage pour l'utilisateur</p>\r\n    <li>Informer l'utilisateur sur l'erreur rencontr\u00e9e, sur la continuit\u00e9 de fonctionnement du serveur, et mettre hors de cause la connexion de l'utilisateur</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le serveur envoie une page d'interdiction 403 personnalis\u00e9e.", 
        "solution": "<ul>\r\n    <li>Modifier la configuration du serveur Web pour renvoyer l'utilisateur vers une page personnalis\u00e9e lorsque l'acc\u00e8s \u00e0 la ressource demand\u00e9e n'est pas autoris\u00e9</li>\r\n    <li>Si la configuration principale du serveur n'est pas directement accessible et si l'environnement le permet, utiliser une configuration locale par r\u00e9pertoire. Par exemple, l'environnement Apache autorise la cr\u00e9ation d'un fichier .htaccess contenant des directives relatives aux traitements des erreurs&nbsp;: <code>ErrorDocument 403 /mapage.html</code></li>\r\n</ul>", 
        "thema": "Serveur et Performances      ", 
        "name": "150"
    }, 
    "650": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs de s'abonner facilement aux fils de syndication</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le site propose au moins un lien vers chaque fil de syndication.", 
        "solution": "<ul>\r\n    <li>Les URI des fils de syndication sont indiqu\u00e9s dans une\r\npage sp\u00e9cifique ou dans chaque page du site, sous forme de liens\r\nexplicites&nbsp;: <code>&lt;a href=\"/fil.rss\" title=\"fil RSS\"&gt;RSS&lt;/a&gt;</code>.</li>\r\n</ul>", 
        "thema": "Syndication                  ", 
        "name": "151"
    }, 
    "651": {
        "goal": "<ul>\r\n    <li>Fournir un contenu compr\u00e9hensible aux utilisateurs dont l'agent utilisateur ou l'aide technique (lecteur d'\u00e9cran) ne permet pas de restituer la mise en forme initialement pr\u00e9vue \u00e0 l'aide d'un tableau.</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La lin\u00e9arisation des tableaux utilis\u00e9s pour la mise en page ne nuit pas \u00e0 la compr\u00e9hension des contenus", 
        "solution": "<ul>\r\n    <li>Regrouper dans une m\u00eame cellules les informations qui doivent \u00eatre verticalement associ\u00e9es (ne pas les r\u00e9partir dans des cellules plac\u00e9es dans des lignes successives du tableau)</li>\r\n</ul>", 
        "thema": "Tableaux                     ", 
        "name": "152"
    }, 
    "652": {
        "goal": "<ul>\n    <li>Permettre aux utilisateurs d'acc\u00e9der \u00e0 des tableaux exploitables par leur agent utilisateur et restitu\u00e9s de mani\u00e8re compr\u00e9hensible dans tous les cas.</li>\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les tableaux de donn\u00e9es ne sont pas simul\u00e9s \u00e0 l'aide de texte mis en forme", 
        "solution": "<ul>\r\n    <li>Utiliser syst\u00e9matiquement l'\u00e9l\u00e9ment <code>&lt;table&gt;</code> et les \u00e9l\u00e9ments associ\u00e9s (<code>&lt;tr&gt;</code>, <code>&lt;td&gt;</code>, <code>&lt;th&gt;</code>, <code>&lt;caption&gt;</code>) pour baliser les tableaux de donn\u00e9es</li>\r\n</ul>", 
        "thema": "Tableaux                     ", 
        "name": "153"
    }, 
    "653": {
        "goal": "<ul>\n    <li>Permettre aux utilisateurs qui ont des difficult\u00e9s \u00e0 d\u00e9chiffrer ou qui ne peuvent pas utiliser un captcha sous sa forme par d\u00e9faut d'acc\u00e9der aux contenus ou service par un autre moyen.</li>\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les captchas sont accompagn\u00e9s d'une solution alternative d'acc\u00e8s", 
        "solution": "<p>Accompagner chaque captcha graphique&nbsp;:</p>\r\n<ul>\r\n    <li>soit d'un captcha logique (question du type \"Quelle est la couleur du cheval gris d'Henry IV\",  op\u00e9ration arithm\u00e9tique dont il faut donner la solution, etc)</li>\r\n    <li>soit d'un captcha audio (fichier son \u00e0 t\u00e9l\u00e9charger, \u00e9non\u00e7ant un mot que l'utilisateur doit alors saisir dans le champ correspondant du formulaire)</li>\r\n    <li>soit d'un moyen de contact (t\u00e9l\u00e9phone, mail, etc.) permettant de r\u00e9aliser l'op\u00e9ration souhait\u00e9e par un autre moyen (cr\u00e9ation de compte sur demande, etc)</li>\r\n</ul>", 
        "thema": "Alternatives                 ", 
        "name": "154"
    }, 
    "654": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs qui ne peuvent acc\u00e9der au son ou \u00e0 l'image propos\u00e9es sous forme multim\u00e9dia d'acc\u00e9der \u00e0 une transcription textuelle servant d'alternative</li>\r\n    <li>Permettre l'exploitation de l'information par des robots et notamment&nbsp;: am\u00e9liorer l'indexation et le r\u00e9f\u00e9rencement, permettre son acc\u00e8s via des outils de traduction en ligne</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Chaque contenu audio et vid\u00e9o est accompagn\u00e9 de sa transcription textuelle", 
        "solution": "<p>Accompagner chaque contenu audio ou vid\u00e9o d'une transcription&nbsp;:</p>\r\n<ul>\r\n    <li>soit int\u00e9grale (paroles, description des sons et \u00e9l\u00e9ments visuels n\u00e9cessaire \u00e0 la compr\u00e9hension)</li>\r\n    <li>soit synth\u00e9tique (mais refl\u00e9tant la totalit\u00e9 de l'information)</li>\r\n</ul>\r\n<p>La transcription peut&nbsp;:</p>\r\n<ul>\r\n    <li>figurer dans la page o\u00f9 se trouve le contenu vid\u00e9o ou audio</li>\r\n    <li>\u00eatre imm\u00e9diatement accessible par un lien pr\u00e9sent dans la page o\u00f9 se trouve le contenu vid\u00e9o ou audio</li>\r\n</ul>", 
        "thema": "Alternatives                 ", 
        "name": "155"
    }, 
    "655": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les styles en ligne sont utilis\u00e9s de mani\u00e8re appropri\u00e9e", 
        "solution": "", 
        "thema": "Code", 
        "name": "156"
    }, 
    "656": {
        "goal": "<ul>\r\n    <li>Limiter les risques d'interpr\u00e9tation hasardeux du DOM d'un document par des agents utilisateurs diff\u00e9rents</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le code source de chaque page ne comporte pas d'erreur portant sur l'arbre du document ou la syntaxe des balises et attributs.", 
        "solution": "<p>La solution la plus directe consiste \u00e0 s'assurer de la validit\u00e9 compl\u00e8te du code source des pages, \u00e0 l'aide d'un validateur tel que http://validator.w3.org . Cette solution conduit cependant \u00e0 tenir compte d'erreur de validation du code source qui n'entrent pas dans le champ de cette BP.</p>\r\n<p>Une approche plus fine mais plus complexe n\u00e9cessite de s'assurer au cas par cas que les \u00e9ventuelles erreurs de validit\u00e9 ne concerne pas&nbsp;:</p>\r\n<ul>\r\n    <li>les types de contenus admis pour chaque \u00e9l\u00e9ment pr\u00e9sents dans l'arbre du document (imbrication d'un \u00e9l\u00e9ment de type bloc dans un \u00e9l\u00e9ment de type en-ligne, pr\u00e9sence d'un \u00e9l\u00e9ment sp\u00e9cifiquement non admis comme contenu d'un autre \u00e9l\u00e9ment)</li>\r\n    <li>la syntaxe des attributs de ces \u00e9l\u00e9ments (utilisation des guillemets en HTML, espace s\u00e9parant les attributs).</li>\r\n    <li>la pr\u00e9sence d'attribut identifiants ID dupliqu\u00e9s dans la m\u00eame page.</li>\r\n</ul>\r\n<p>Le cas-type d'erreur formelle de validit\u00e9 qui ne rend pas cette BP non conforme est la pr\u00e9sence d'ampersand non encod\u00e9 dans les URL de liens. Ou encore la pr\u00e9sence d'\u00e9l\u00e9ments ou attributs inconnus de la DTD du document (\u00e9l\u00e9ment <code>&lt;embed&gt;</code> par exemple)</p>", 
        "thema": "Code", 
        "name": "157"
    }, 
    "657": {
        "goal": "<ul>\r\n    <li>Favoriser l'adaptation de la mise en forme des contenus par les agents utilisateurs, selon les besoins de l'utilisateur</li>\r\n    <li>All\u00e9ger le poids du code source des pages, en incitant \u00e0 mutualiser les informations de mise en forme gr\u00e2ce \u00e0 CSS</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le code source de chaque page ne contient pas d'\u00e9l\u00e9ments ou d'attributs de pr\u00e9sentation", 
        "solution": "<ul>\r\n    <li>Ne pas utiliser les \u00e9l\u00e9ments et attributs de pr\u00e9sentation HTML</li>\r\n    <li>Utiliser syst\u00e9matiquement les styles CSS \u00e9quivalents</li>\r\n    <li>Le d\u00e9veloppement du code XHTML ou HTML sous une DTD stricte facilite le contr\u00f4le de l'absence d'\u00e9l\u00e9ments et attributs de pr\u00e9sentation.</li>\r\n</ul>", 
        "thema": "Code", 
        "name": "158"
    }, 
    "658": {
        "goal": "<ul>\n    <li>Augmenter la vitesse d'affichage de la page</li>\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les dimensions r\u00e9elles des images sont indiqu\u00e9es dans le code source.", 
        "solution": "<ul>\r\n    <li>Pr\u00e9ciser dans le code HTML les valeurs r\u00e9elles des attributs <code>width</code> et <code>height</code> des \u00e9l\u00e9ments <code>&lt;img&gt;</code></li></ul>", 
        "thema": "Code", 
        "name": "159"
    }, 
    "659": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs d'acc\u00e9der rapidement \u00e0 la signification d'un sigle</li>\r\n    <li>Permettre l'exploitation du contenu par un robot (\u00e9tablissement d'un index des sigles)</li>\r\n    <li>Favoriser le r\u00e9f\u00e9rencement du contenu</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La premi\u00e8re occurence d'une abr\u00e9viation ou d'un acronyme dans le corps de chaque page donne acc\u00e8s \u00e0 sa signification", 
        "solution": "<p>Lors de la premi\u00e8re occurrence au moins d'un sigle dans la page&nbsp;:</p>\r\n<ul>\r\n    <li>soit expliciter sa signification au fil du text, par exemple : une DTD (D\u00e9claration de Type de Document)</li>\r\n    <li>soit fournir un lien donnant acc\u00e8s \u00e0 la signification du sigle</li>\r\n    <li>baliser le sigle avec l'\u00e9l\u00e9ment HTML appropri\u00e9, <code>&lt;abbr&gt;</code> ou <code>&lt;acronym&gt;</code> et renseigner l'attribut <code>title</code> de celui-ci pour indiquer la signification du sigle.</li>\r\n</ul>", 
        "thema": "Code", 
        "name": "160"
    }, 
    "660": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs qui ne peuvent ou ne veulent pas activer les scripts d'acc\u00e9der tout de m\u00eame aux contenus</li>\r\n    <li>Favoriser l'exploitation des contenus par des robots</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "L'acc\u00e8s aux contenus et services est possible sans le support des scripts", 
        "solution": "<p>Plusieurs d\u00e9marches sont possibles&nbsp;:</p>\r\n<ul>\r\n    <li>Concevoir les scripts de mani\u00e8re non obstructive, sur la base d'un contenu et de services ind\u00e9pendants du support Javascript et d'enrichissement des interfaces par la couche de scripts.</li>\r\n    <li>Fournir syst\u00e9matiquement des alternatives <code>&lt;nocscript&gt;</code></li>\r\n    <li>Fournir des versions alternatives des pages concern\u00e9es</li>\r\n</ul>", 
        "thema": "Code", 
        "name": "161"
    }, 
    "661": {
        "goal": "<ul>\n    <li>Permettre une restitution pr\u00e9visible par les agents utilisateurs conformes.</li>\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le code source des pages est valide au regard de la grammaire choisie", 
        "solution": "<p>Produire un code HTML ou XHTML conforme \u00e0 l'une des grammaires formelle suivantes&nbsp;:</p>\r\n<ul>\r\n    <li>HTML5 (experimental)</li>\r\n    <li>XHTML 1.0 Strict</li>\r\n    <li>XHTML 1.0 Transitional</li>\r\n    <li>XHTML 1.0 Frameset</li>\r\n    <li>HTML 4.01 Strict</li>\r\n    <li>HTML 4.01 Transitional</li>\r\n    <li>HTML 4.01 Frameset</li>\r\n    <li>HTML 3.2</li>\r\n    <li>HTML 2.0</li>\r\n    <li>ISO/IEC 15445:2000 (\"ISO HTML\")</li>\r\n    <li>XHTML 1.1</li>\r\n    <li>XHTML + RDFa</li>\r\n    <li>XHTML Basic 1.0</li>\r\n    <li>XHTML Basic 1.1</li>\r\n    <li>XHTML Mobile Profile 1.2</li>\r\n    <li>XHTML-Print 1.0</li>\r\n    <li>XHTML 1.1 plus MathML 2.0</li>\r\n    <li>XHTML 1.1 plus MathML 2.0 plus SVG 1.1</li>\r\n    <li>MathML 2.0</li>\r\n    <li>SVG 1.0</li>\r\n    <li>SVG 1.1</li>\r\n    <li>SVG 1.1 Tiny</li>\r\n    <li>SVG 1.1 Basic</li>\r\n    <li>SMIL 1.0</li>\r\n    <li>SMIL 2.0</li>\r\n</ul>", 
        "thema": "Code", 
        "name": "162"
    }, 
    "662": {
        "goal": "<ul>\r\n    <li>Permettre aux agents utilisateurs et en particulier aux aides techniques (lecteurs d'\u00e9cran) d'identifier, d'exploiter et de restituer de mani\u00e8re appropri\u00e9e les citations, afin qu'elles soient imm\u00e9diatement identifiables et diff\u00e9rentiables du reste du contenu  par les utilisateurs</li>\r\n    <li>Permettre aux utilisateurs d'identifier imm\u00e9diatement les citations lorsque seuls le rendu par d\u00e9faut de l'agent utilisateur est pris en compte</li>\r\n    <li>Permettre l'exploitation du contenu par des robots et notamment l'extraction des citations dans un corpus d'informations</li>\r\n    <li>Favoriser un traitement s\u00e9mantique lors des traductions automatis\u00e9es du contenu</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les citations sont balis\u00e9es de fa\u00e7on appropri\u00e9e", 
        "solution": "<p>Utiliser&nbsp;:</p>\r\n<ul>\r\n    <li>l'\u00e9l\u00e9ment <code>&lt;q&gt;</code> pour les citations en ligne (au fil du texte)</li>\r\n    <li>l'\u00e9l\u00e9ment <code>&lt;blockquote&gt;</code> pour les blocs de citation</li>\r\n</ul>", 
        "thema": "Code", 
        "name": "163"
    }, 
    "663": {
        "goal": "<ul>\n    <li>Permettre l'exploitation pertinente du code source par les agents utilisateurs.</li>\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le code source de chaque page ne contient pas d'\u00e9l\u00e9ments d\u00e9tourn\u00e9s \u00e0 des fins de pr\u00e9sentation", 
        "solution": "<ul>\r\n    <li>Utiliser les \u00e9l\u00e9ments HTML en respectant leur r\u00f4le s\u00e9mantique</li>\r\n    <li>Utiliser exclusivement les styles CSS pour obtenir des effets de mise en forme</li>\r\n</ul>", 
        "thema": "Code", 
        "name": "164"
    }, 
    "664": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les donn\u00e9es contenus dans le Whois du site permettent de le relier directement \u00e0 son propri\u00e9taire", 
        "solution": "", 
        "thema": "Contact                      ", 
        "name": "165"
    }, 
    "665": {
        "goal": "<ul>\r\n    <li>Permettre la restitution d'un contenu compr\u00e9hensible si des polices de caract\u00e8res sp\u00e9cifiques ne sont pas disponibles pour le navigateur</li>\r\n    <li>Permettre la restitution d'un contenu compr\u00e9hensible par les aides techniques (lecteurs d'\u00e9cran) lorsque le rendu standard d'un symbole graphique Unicode ne correspond pas \u00e0 son sens particulier dans le contexte o\u00f9 il est employ\u00e9.</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les symboles graphiques sont des images HTML et non des caract\u00e8res unicode.", 
        "solution": "<ul>\r\n    <li>Utiliser des images HTML dot\u00e9es d'alternatives textuelles appropri\u00e9es pour tous les symboles graphiques, comme par exemple une fl\u00e8che verticale signifiant un accroissement.</li>\r\n</ul>", 
        "thema": "Contenus", 
        "name": "166"
    }, 
    "666": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs de comprendre les contenus sectoriels ou techniques</li>\r\n    <li>Permettre aux utilisateurs de se former en augmentant leurs connaissances</li>\r\n    <li>Am\u00e9liorer le r\u00e9f\u00e9rencement sur des mots-cl\u00e9s ou expressions techniques</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Un lexique ou un glossaire adapt\u00e9 au public vis\u00e9 explique le vocabulaire sectoriel ou technique", 
        "solution": "<p>Fournir&nbsp;:</p>\r\n<ul>\r\n    <li>soit une page ou une s\u00e9rie de page de glossaire explicitant le vocabulaire technique ou sectoriel utilis\u00e9 dans le contenu du site, accessible directement depuis chaque page du site</li>\r\n    <li>soit un m\u00e9canisme permettant \u00e0 l'utilisateur d'acc\u00e9der \u00e0 la d\u00e9finition des termes du vocabulaire technique ou sectoriel, depuis au moins leur premi\u00e8re occurrence dans chaque page du site.</li>\r\n</ul>", 
        "thema": "Contenus", 
        "name": "167"
    }, 
    "667": {
        "goal": "<ul>\r\n    <li>\u00c9viter les difficult\u00e9s de compr\u00e9hension des contenus</li>\r\n    <li>Am\u00e9liorer la perception des contenus et de l'auteur </li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le contenu de chaque page du site ne comporte pas de faute d'orthographe", 
        "solution": "<ul>\r\n    <li>Cette bonne pratique ne s'applique ni aux espaces publics, ni aux contenus ou services embarqu\u00e9s ou syndiqu\u00e9s</li>\r\n</ul>", 
        "thema": "Contenus", 
        "name": "168"
    }, 
    "668": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Si le site propose un espace personnel ou abonn\u00e9, il est possible de sauvegarder les contenus personnels dans un format standard", 
        "solution": "", 
        "thema": "Contenus", 
        "name": "169"
    }, 
    "669": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Une metadonn\u00e9e indique l'URL de r\u00e9f\u00e9rence des contenus propos\u00e9s sous plusieurs formes.", 
        "solution": "", 
        "thema": "Contenus", 
        "name": "170"
    }, 
    "670": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs de s'adresser ou d'adresser directement leurs r\u00e9clamations au bon interlocuteur </li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le site propose au moins un moyen de contacter le responsable des r\u00e9clamations.", 
        "solution": "<ul>\r\n    <li>Indiquer, dans les conditions g\u00e9n\u00e9rales, un moyen de contact (e-mail, t\u00e9l\u00e9phone, fax\u2026) avec le responsable des r\u00e9clamations.</li>\r\n</ul>", 
        "thema": "E-Commerce                   ", 
        "name": "171"
    }, 
    "671": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs d'identifier pr\u00e9cis\u00e9ment les pi\u00e8ces n\u00e9cessaires en cas de n\u00e9cessit\u00e9 de retour du produit</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les conditions de remboursement (d\u00e9lais, frais et justificatifs exig\u00e9s) sont indiqu\u00e9es", 
        "solution": "<ul>\r\n    <li>Indiquer dans les conditions g\u00e9n\u00e9rales la pr\u00e9sence d'informations relatives aux conditions de remboursement.</li>\r\n</ul>", 
        "thema": "E-Commerce                   ", 
        "name": "172"
    }, 
    "672": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs d'anticiper sur d'\u00e9ventuelles difficult\u00e9s d'utilisation et/ou de fonctionnement du bien ou du service propos\u00e9</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "L'adresse et les conditions de retour des produits (sur site, atelier) sont indiqu\u00e9s", 
        "solution": "<ul>\r\n    <li>Indiquer dans les conditions g\u00e9n\u00e9rales les informations relatives aux conditions de retour des produits vendus.</li>\r\n</ul>", 
        "thema": "E-Commerce                   ", 
        "name": "173"
    }, 
    "673": {
        "goal": "<ul>\r\n    <li>Permettre \u00e0 l'utilisateur d'obtenir une confirmation de sa demande en dehors du contexte de la navigation sur le site</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Chaque r\u00e9clamation fait l'objet d'un accus\u00e9 de r\u00e9ception", 
        "solution": "<ul>\r\n    <li>D\u00e9finir une proc\u00e9dure de gestion de l'envoi d'un mail accusant r\u00e9ception d'une r\u00e9clamation.</li>\r\n</ul>", 
        "thema": "E-Commerce                   ", 
        "name": "174"
    }, 
    "674": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs de comprendre ou d'anticiper d'\u00e9ventuelles difficult\u00e9s sur le site ou lors de la transaction.</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le mode de d\u00e9p\u00f4t et la proc\u00e9dure de traitement des r\u00e9clamations sont indiqu\u00e9s", 
        "solution": "<ul>\r\n    <li>Indiquer, dans les conditions g\u00e9n\u00e9rales de vente, par exemple, la proc\u00e9dure de d\u00e9p\u00f4t et de traitement des r\u00e9clamations.</li>\r\n</ul>", 
        "thema": "E-Commerce                   ", 
        "name": "175"
    }, 
    "675": {
        "goal": "<ul>\r\n    <li>Permettre \u00e0 l'utilisateur de v\u00e9rifier et de corriger si n\u00e9cessaire sa saisie.</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les informations destin\u00e9es \u00e0 des espaces publics peuvent \u00eatre pr\u00e9visualis\u00e9es sous la forme o\u00f9 elles seront affich\u00e9es.", 
        "solution": "<ul>\r\n    <li>Mettre en forme le contenu pr\u00e9visualis\u00e9 en utilisant la m\u00eame feuille de styles que celle des espaces publics.</li>\r\n</ul>", 
        "thema": "Espaces publics              ", 
        "name": "176"
    }, 
    "676": {
        "goal": "<ul>\r\n    <li>Fournir aux utilisateurs un acc\u00e8s direct et imm\u00e9diat aux contenus, m\u00eame lorsque l'administrateur du site d\u00e9cide de proposer une animation ou une publicit\u00e9 pr\u00e9alable.</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le d\u00e9roulement des animations ne bloque pas la navigation ou l'acc\u00e8s aux contenus", 
        "solution": "", 
        "thema": "Fichiers et multim\u00e9dia       ", 
        "name": "177"
    }, 
    "677": {
        "goal": "<ul>\n    <li>Donner aux utilisateurs la possibilit\u00e9 de s'\u00e9quiper du ou des plugins n\u00e9cessaires </li>\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Un lien d'information est propos\u00e9 pour chaque plugin n\u00e9cessaire \u00e0 la consultation du contenu", 
        "solution": "<p>Fournir un lien vers une information permettant d'identifier et par la suite de t\u00e9l\u00e9charger chaque plug-in n\u00e9cessaire \u00e0 la consultation ou l'utilisation des contenus&nbsp;:</p>\r\n<ul>\r\n    <li>directement dans le contexte de ces contenus</li>\r\n    <li>ou bien dans une page d'aide accessible directement depuis chaque page o\u00f9 ces contenus sont pr\u00e9sents</li>\r\n</ul>", 
        "thema": "Fichiers et multim\u00e9dia       ", 
        "name": "178"
    }, 
    "678": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs d'acc\u00e9der directement \u00e0 diff\u00e9rentes sections d'un document PDF</li>\r\n    <li>Fournir une structure de titres aux utilisateurs qui en ont besoin</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les documents PDF internes sont balis\u00e9s.", 
        "solution": "<p>Lorsque le document PDF est issu de suite bureautique type Word ou OpenOffice il faut utiliser les styles de mani\u00e8re \u00e0 permettre la g\u00e9n\u00e9ration d'un PDF structur\u00e9. Utilisez le balisage Titre 1, Titre 2, Titre 3, ainsi que les styles en-t\u00eates de tableaux, et les \u00e9num\u00e9rations structurelles (listes \u00e0 puces, listes num\u00e9rot\u00e9es). Ensuite, vous devez modifier ces styles pour les adapter \u00e0 votre pr\u00e9sentation, et finalement il faut cocher l'option exporter en PDF balis\u00e9 ou taggu\u00e9, au moment de l'export PDF. Voir <a href=\"http://www.adobe.com/fr/accessibility/\">www.adobe.com/fr/accessibility/</a></p>", 
        "thema": "Fichiers et multim\u00e9dia       ", 
        "name": "179"
    }, 
    "679": {
        "goal": "<ul>\n    <li>S'assurer qu'au moins un des deux processus de validation a bien lieu</li>\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les validations de formulaires c\u00f4t\u00e9 client ont une alternative c\u00f4t\u00e9 serveur.", 
        "solution": "<ul>\r\n    <li>Effectuer une validation c\u00f4t\u00e9 serveur en cas de non support de Javascript c\u00f4t\u00e9 client</li>\r\n</ul>", 
        "thema": "Formulaires", 
        "name": "180"
    }, 
    "680": {
        "goal": "<ul>\r\n    <li>\u00c9viter le risque d'erreur et donc \u00e9viter \u00e0 l'utilisateur de devoir remplir plusieurs fois un m\u00eame champ</li>\r\n    <li>\u00c9viter l'incompr\u00e9hension de l'utilisateur qui pense avoir rempli correctement le champ mais le voir revenir en erreur</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "L'utilisateur est averti lorsque une saisie est sensible \u00e0 la casse", 
        "solution": "<ul>\r\n    <li>Pr\u00e9ciser dans l'\u00e9tiquette associ\u00e9e au champ que la saisie attendue est sensible \u00e0 la casse</li>\r\n</ul>", 
        "thema": "Formulaires", 
        "name": "181"
    }, 
    "681": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs d'identifier sans ambigu\u00eft\u00e9 les champs de formulaire et la nature des infos \u00e0 saisir</li>\r\n    <li>Pr\u00e9venir les erreurs de saisie</li>\r\n    <li>Faciliter et acc\u00e9l\u00e9rer l'usage du formulaire</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Chaque \u00e9tiquette de formulaire est visuellement rattach\u00e9e au champ qu'elle d\u00e9crit", 
        "solution": "<ul>\r\n    <li>Veiller \u00e0 ce que l'\u00e9tiquette visible de chaque champ de formulaire soit affich\u00e9e \u00e0 proximit\u00e9 imm\u00e9diate du champ concern\u00e9, afin que le rapport entre ceux-ci puisse \u00eatre per\u00e7u sans ambigu\u00eft\u00e9</li>\r\n    <li>\u00c9viter les mises en forme de formulaire entra\u00eenant la pr\u00e9sence d'un espace vide important entre un champ et son \u00e9tiquette, ou un positionnement inhabituel de l'\u00e9tiquette (telle qu'une \u00e9tiquette plac\u00e9e en dessous du champ, ou une \u00e9tiquette de case \u00e0 cocher plac\u00e9e \u00e0 gauche de celle-ci dans un page en fran\u00e7ais).</li>\r\n</ul>", 
        "thema": "Formulaires", 
        "name": "182"
    }, 
    "682": {
        "goal": "<p>Des champs de formulaire doivent \u00eatre regroup\u00e9s avec le balisage appropri\u00e9 lorsque leurs \u00e9tiquettes ne suffisent pas \u00e0 indiquer clairement le r\u00f4le de chaque champ concern\u00e9. Le regroupement permet alors de compl\u00e9ter ces \u00e9tiquettes par une l\u00e9gende commune. Ceci permet&nbsp;:</p>\r\n<ul>\r\n    <li>de faciliter le remplissage du formulaire&nbsp;:</li>\r\n        <ul>\r\n            <li>en contextualisant les informations demand\u00e9es</li>\r\n            <li>en d\u00e9coupant l'ensemble des informations demand\u00e9es en sous-groupes</li>\r\n        </ul>\r\n    <li>de donner aux aides techniques le moyen d'expliciter les \u00e9tiquettes des champs de formulaire qui le n\u00e9cessitent \u00e0 l'aide d'une l\u00e9gende attribu\u00e9e au groupe de champs</li>\r\n    <li>d'obtenir un rendu appropri\u00e9 des regroupements de champs de formulaire par tous les navigateurs</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les champs de formulaire qui n\u00e9cessitent une information commune sont regroup\u00e9s sous une m\u00eame l\u00e9gende", 
        "solution": "<p>Utiliser&nbsp;:</p>\r\n<ul>\r\n    <li>L'\u00e9l\u00e9ment <code>&lt;fieldset&gt;</code> pour baliser chaque groupe de champs n\u00e9cessitant une information compl\u00e9mentaire commune</li>\r\n    <li>L'\u00e9l\u00e9ment <code>&lt;legend&gt;</code> pour baliser cette information venant compl\u00e9ter les \u00e9tiquettes des champs.</li>\r\n</ul>", 
        "thema": "Formulaires", 
        "name": "183"
    }, 
    "683": {
        "goal": "<ul>\r\n    <li>Permettre aux aides techniques de restituer \u00e0 l'utilisateur une liste&nbsp;:\r\n        <ul>\r\n             <li>dont l'organisation soit clairement perceptible</li>\r\n             <li>dont le contenu est navigable de mani\u00e8re ais\u00e9e</li>\r\n        </ul>\r\n    </li>\r\n    <li>Favoriser un rendu appropri\u00e9 des listes d\u00e9roulantes complexe dans tous les navigateurs.</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les \u00e9l\u00e9ments d'une liste d\u00e9roulante qui peuvent \u00eatre regroup\u00e9s le sont de mani\u00e8re appropri\u00e9e", 
        "solution": "<ul>\r\n    <li>Utiliser l'\u00e9l\u00e9ment <code>&lt;optgroup&gt;</code> pour baliser les regroupements th\u00e9matiques d'\u00e9l\u00e9ments <code>&lt;option&gt;</code> dans les listes <code>&lt;select&gt;</code></li>\r\n    <li>Utiliser l'attribut <code>label</code> de l'\u00e9l\u00e9ment <code>&lt;optgroup&gt;</code> pour afficher l'\u00e9tiquette de chaque regroupement</li>\r\n</ul>", 
        "thema": "Formulaires", 
        "name": "184"
    }, 
    "684": {
        "goal": "<ul>\n    <li>Permettre aux utilisateurs, handicap\u00e9s ou pas d'acc\u00e9der rapidement \u00e0 l'item de liste recherch\u00e9</li>\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les listes d'options de formulaires sont pr\u00e9sent\u00e9es dans un ordre identifiable", 
        "solution": "<ul>\r\n    <li>Jean-Marc Hardy propose plusieurs types de classement possibles&nbsp;: <a href=\"http://www.redaction.be/exemples/canevaslogiques_nov_03.htm\">www.redaction.be/exemples/canevaslogiques_nov_03.htm</a></li>\r\n</ul>", 
        "thema": "Formulaires", 
        "name": "185"
    }, 
    "685": {
        "goal": "<ul>\r\n    <li>\u00c9viter les confusions entre deux liens cons\u00e9cutifs</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les hyperliens cons\u00e9cutifs sont s\u00e9par\u00e9s visuellement", 
        "solution": "<ul>\r\n    <li>Donner une mise en forme sp\u00e9cifique aux liens, via les styles CSS&nbsp;: couleur, graisse, soulignement, pr\u00e9sentation propre \u00e0 un menu de navigation, etc.</li>\r\n</ul>", 
        "thema": "Hyperliens                   ", 
        "name": "186"
    }, 
    "686": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs d'identifier pr\u00e9cis\u00e9ment la nature du lien</li>\r\n    <li>Permettre aux outils d'indexation d'associer un libell\u00e9 \u00e0 une ressource</li>\r\n    <li>Permettre aux lecteur d'\u00e9cran de restituer la cible de fa\u00e7on explicite</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le libell\u00e9 de chaque hyperlien d\u00e9crit sa fonction ou la nature du contenu vers lequel il pointe", 
        "solution": "<ul>\r\n    <li>Le libell\u00e9 des liens (portion de texte situ\u00e9e entre <code>&lt;a href=\"URL\"&gt;</code> et <code>&lt;/a&gt;</code>, ou contenu de l'attribut <code>title</code> de l'\u00e9l\u00e9ment <code>&lt;a&gt;</code>) d\u00e9crit sans ambigu\u00eft\u00e9 le contenu de la page cible du lien, la fonction du lien ou son comportement le cas \u00e9ch\u00e9ant.</li></ul>", 
        "thema": "Hyperliens                   ", 
        "name": "187"
    }, 
    "687": {
        "goal": "<ul>\r\n    <li>Pr\u00e9venir clairement l'internaute des conditions dans lequel il va quitter le service en ligne qu'il visite.</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les hyperliens internes et externes sont diff\u00e9renci\u00e9s.", 
        "solution": "<ul>\r\n    <li>Il est possible d'ajouter l'information dans le libell\u00e9 du lien (mention textuelle, ic\u00f4ne sp\u00e9cifique) ou dans le titre du lien en y reprenant et en y compl\u00e9tant le libell\u00e9, ou via le comportement du lien (ouverture dans une nouvelle fen\u00eatre r\u00e9serv\u00e9e aux liens externes).</li>\r\n</ul>", 
        "thema": "Hyperliens                   ", 
        "name": "188"
    }, 
    "688": {
        "goal": "<ul>\r\n    <li>Contribuer \u00e0 la compr\u00e9hension imm\u00e9diate de l'identit\u00e9, de l'activit\u00e9 ou de la zone g\u00e9ographique du site</li>\r\n    <li>Am\u00e9liorer la capacit\u00e9 des utilisateurs \u00e0 m\u00e9moriser l'adresse du site et \u00e0 la retrouver en cas d'oubli</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "L'extension utilis\u00e9e est coh\u00e9rente avec l'identit\u00e9, l'activit\u00e9, la zone g\u00e9ographique couverte ou avec le nom de domaine", 
        "solution": "<ul>\r\n    <li>Se reporter \u00e0 l'IANA (Internet Assigned Numbers Authority)&nbsp;: <a href=\"http://www.iana.org/domains/root/db/index.html\">www.iana.org/domains/root/db/index.html</a></li>\r\n</ul>", 
        "thema": "Identification               ", 
        "name": "189"
    }, 
    "689": {
        "goal": "<ul>\r\n    <li>Faciliter la compr\u00e9hension par l'utilisateur des r\u00e8gles de qualit\u00e9, d'accessibilit\u00e9 ou autres appliqu\u00e9es sur le site</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Si le site d\u00e9clare respecter un ou plusieurs standards ou r\u00e9f\u00e9rentiels, un lien est propos\u00e9 vers chacun d'entre eux.", 
        "solution": "<ul>\r\n    <li>Fournir un lien vers chaque standard ou r\u00e9f\u00e9rentiel concern\u00e9</li>\r\n</ul>", 
        "thema": "Identification               ", 
        "name": "190"
    }, 
    "690": {
        "goal": "<ul>\r\n    <li>Mettre \u00e0 disposition des informations synth\u00e9tiques et lisibles par les machines sur l'ensemble des contenus propos\u00e9s</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le site propose un fichier sitemap indiquant les contenus \u00e0 explorer", 
        "solution": "", 
        "thema": "Identification               ", 
        "name": "191"
    }, 
    "691": {
        "goal": "<ul>\n    <li>Permettre l'identification imm\u00e9diate du lien pertinent par l'utilisateur</li>\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les liens vers les versions \u00e9quivalentes de la page ou du site sont r\u00e9dig\u00e9s dans leur langue cible.", 
        "solution": "<ul>\r\n    <li>R\u00e9diger les liens et les alternatives textuelles d'images-liens concern\u00e9es dans la chaque de chaque page cible</li>\r\n</ul>", 
        "thema": "Internationalisation         ", 
        "name": "192"
    }, 
    "692": {
        "goal": "<ul>\r\n    <li>Permettre aux aides techniques d'interpr\u00e9ter correctement les contenus exprim\u00e9s dans une autre langue</li>\r\n    <li>Permettre aux outils d'indexation d'extraire des chaines dans une langue donn\u00e9e</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Chaque changement de langue est signal\u00e9", 
        "solution": "<ul>\r\n    <li>Baliser chaque expression dans une langue diff\u00e9rente de la langue par d\u00e9faut de la page et utiliser l'attribut HTML <code>lang</code>.</li>\r\n</ul>", 
        "thema": "Internationalisation         ", 
        "name": "193"
    }, 
    "693": {
        "goal": "<ul>\r\n    <li>Donner un acc\u00e8s direct aux traductions de la page courante</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les liens d'acc\u00e8s aux versions traduites pointent directement vers la traduction de la page courante.", 
        "solution": "", 
        "thema": "Internationalisation         ", 
        "name": "194"
    }, 
    "694": {
        "goal": "<ul>\r\n    <li>\u00c9viter aux utilisateurs des t\u00e9l\u00e9chargements inutiles</li>\r\n    <li>Informer les utilisateurs sur les fichiers t\u00e9l\u00e9charg\u00e9s.</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La langue des fichiers en t\u00e9l\u00e9chargement est pr\u00e9cis\u00e9e, lorsqu'elle diff\u00e8re de celle de la page d'origine.", 
        "solution": "", 
        "thema": "Internationalisation         ", 
        "name": "195"
    }, 
    "695": {
        "goal": "<ul>\r\n    <li>Permettre aux outils de lecture d'\u00e9cran de restituer correctement les contenus.</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le sens de lecture du contenu est indiqu\u00e9 lorsqu'il diff\u00e8re de celui par d\u00e9faut.", 
        "solution": "", 
        "thema": "Internationalisation         ", 
        "name": "196"
    }, 
    "696": {
        "goal": "<ul>\r\n    <li>Fournir aux utilisateurs une continuit\u00e9 dans la navigation</li>\r\n    <li>\u00c9viter les changements de contexte</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La navigation sur le site ne provoque pas d'ouvertures de nouvelles fen\u00eatres", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "197"
    }, 
    "697": {
        "goal": "<ul>\r\n    <li>Permettre \u00e0 l'utilisateur de se d\u00e9sinscrire sans n\u00e9cessairement passer par un mail</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La d\u00e9sinscription aux newsletters est possible depuis le site", 
        "solution": "", 
        "thema": "Newsletter                   ", 
        "name": "198"
    }, 
    "698": {
        "goal": "<ul>\n    <li>Faciliter l'archivage et la consultation des newsletters</li>\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La date de diffusion et/ou le num\u00e9ro des newsletters sont indiqu\u00e9s dans le sujet des messages.", 
        "solution": "<ul>\r\n    <li>Indiquer la date de diffusion et/ou le num\u00e9ro des newsletters dans le sujet des messages.</li>\r\n</ul>", 
        "thema": "Newsletter                   ", 
        "name": "199"
    }, 
    "699": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs de se faire une id\u00e9e de la newsletter envoy\u00e9e aux abonn\u00e9s</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La derni\u00e8re newsletter envoy\u00e9e est disponible en ligne", 
        "solution": "<ul>\r\n    <li>Rendre publique la derni\u00e8re newsletter envoy\u00e9e en rendant son contenu disponible sur le site et en faisant en sorte que l'acc\u00e8s \u00e0 ce contenu reste possible via un cheminement de un ou plusieurs clics depuis la page d'accueil</li>\r\n</ul>", 
        "thema": "Newsletter                   ", 
        "name": "200"
    }, 
    "700": {
        "goal": "<ul>\r\n    <li>Permettre aux utilisateurs de conna\u00eetre avant leur inscription la fr\u00e9quence \u00e0 laquelle ils recevront la newsletter</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La fr\u00e9quence d'envoi des newsletters est consultable avant l'abonnement", 
        "solution": "<ul>\r\n    <li>Indiquer la fr\u00e9quence d'envoi chiffr\u00e9e des newsletters.</li>\r\n</ul>", 
        "thema": "Newsletter                   ", 
        "name": "201"
    }, 
    "701": {
        "goal": "<ul>\r\n    <li>Faciliter la consultation des archives des newsletter</li>\r\n    <li>Permettre aux utilisateurs de se faire une id\u00e9e de la newsletter envoy\u00e9e aux abonn\u00e9s</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les archives de newsletter sont disponibles en ligne", 
        "solution": "<ul>\r\n    <li>Rendre publique la totalit\u00e9 des newsletters envoy\u00e9es en rendant leur contenu disponible sur le site </li>\r\n</ul>", 
        "thema": "Newsletter                   ", 
        "name": "202"
    }, 
    "702": {
        "goal": "<ul>\r\n    <li>Am\u00e9liorer la lisibilit\u00e9 des contenus</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le nombre de polices utilis\u00e9es sur le site est inf\u00e9rieur ou \u00e9gal \u00e0 trois (sauf pr\u00e9sentation de travaux ou produits graphiques).", 
        "solution": "<ul>\r\n    <li>Limiter le nombre de polices de caract\u00e8res utilis\u00e9es \u00e0 trois</li>\r\n</ul>", 
        "thema": "Pr\u00e9sentation                 ", 
        "name": "203"
    }, 
    "703": {
        "goal": "<ul>\r\n    <li>Faciliter une bonne lisibilit\u00e9</li>\r\n    <li>Limiter la charge mentale \u00e0 la consultation</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les contenus sont pr\u00e9sent\u00e9s avec un contraste suffisant par rapport \u00e0 leur arri\u00e8re-plan", 
        "solution": "<ul>\r\n    <li>Veiller \u00e0 conserver un ratio de contraste minimal de 3:1 entre le texte  et son arri\u00e8re-plan, tel qu'il peut \u00eatre mesur\u00e9 via l'algorithme WCAG2.0</li>\r\n</ul>", 
        "thema": "Pr\u00e9sentation                 ", 
        "name": "204"
    }, 
    "704": {
        "goal": "<ul>\r\n    <li>Am\u00e9liorer la lisibilit\u00e9 des contenus imprim\u00e9s</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le contenu de chaque page est disponible \u00e0 l'impression sans blocs de navigation", 
        "solution": "<ul>\r\n    <li>Fournir une version HTML adapt\u00e9e pour l'impression</li>\r\n    <li>Ou bien fournir une feuille de style CSS pour le media print, qui masque les blocs de navigation via la propri\u00e9t\u00e9 display</li>\r\n</ul>", 
        "thema": "Pr\u00e9sentation                 ", 
        "name": "205"
    }, 
    "705": {
        "goal": "<ul>\r\n    <li>Permettre la consultation sur les t\u00e9l\u00e9phones portables et smartphones. Ce qui ne se limite pas \u00e0 l'iPhone.</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le site propose une ou plusieurs feuilles de style d\u00e9di\u00e9es aux terminaux mobiles", 
        "solution": "<ul>\r\n    <li>Fournir une feuille de style sp\u00e9cifique pour le type de media handheld</li>\r\n</ul>", 
        "thema": "Pr\u00e9sentation                 ", 
        "name": "206"
    }, 
    "706": {
        "goal": "<ul>\r\n    <li>Limiter la quantit\u00e9 de donn\u00e9es \u00e0 imprimer \u00e0 ce qui est strictement n\u00e9cessaire</li>\r\n    <li>Permettre un acc\u00e8s imm\u00e9diat \u00e0 l'information dans un lecteur d'\u00e9cran</li>\r\n    <li>Conserver des alternatives textuelles d'images concises</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les phrases ou ensembles de mots mis en images ne sont pas divis\u00e9s", 
        "solution": "<ul>\r\n    <li>Limiter le recours aux textes mis en image aux cas de textes courts justifi\u00e9s par une impossibilit\u00e9 d'obtenir la m\u00eame mise en forme via CSS ou le m\u00eame comportement \u00e0 partir d'un texte simple</li>\r\n    <li>Utiliser une image unique pour chaque texte mis en forme</li>\r\n</ul>", 
        "thema": "Pr\u00e9sentation                 ", 
        "name": "207"
    }, 
    "707": {
        "goal": "<ul>\r\n    <li>\u00c9viter les pertes de contenus lorsque la disposition originale des images est alt\u00e9r\u00e9e</li>\r\n    <li>Faciliter la mise en accessibilit\u00e9 des images (contenus alternatifs)</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Un contenu n'est pas d\u00e9sign\u00e9 uniquement par sa forme, ou par sa position \u00e0 l'\u00e9cran.", 
        "solution": "<ul>\r\n    <li>Utiliser une image unique pour chaque texte mis en image</li>\r\n</ul>", 
        "thema": "Pr\u00e9sentation                 ", 
        "name": "208"
    }, 
    "708": {
        "goal": "<ul>\r\n    <li>\u00c9viter les probl\u00e8mes de navigation ou d'acc\u00e8s aux contenus pour les personnes qui n'ont pas les informations de forme ou de position</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le contenu textuel reste lisible avec une taille de caract\u00e8re augment\u00e9e d'un facteur 2 dans le navigateur.", 
        "solution": "<ul>\r\n    <li>Utiliser les propri\u00e9t\u00e9s de mise en page CSS en privil\u00e9giant celles permettant l'agrandissement des blocs de texte et leur d\u00e9placement sans chevauchement (float), de pr\u00e9f\u00e9rence aux techniques limitant la hauteur des blocs ou reposant sur le positionnement absolu.</li>\r\n</ul>", 
        "thema": "Pr\u00e9sentation                 ", 
        "name": "209"
    }, 
    "709": {
        "goal": "<ul>\r\n    <li>Permettre un copier coller des contenus sans mise en forme en majuscules</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les mises en majuscules \u00e0 des fins d\u00e9coratives sont effectu\u00e9es \u00e0 l'aide des styles", 
        "solution": "<ul>\r\n    <li>Saisir les contenus HTML en respectant l'usage typographiques pour les majuscules</li>\r\n    <li>Utiliser le propri\u00e9t\u00e9 CSS <code>text-transform</code> avec la valeur <code>uppercase</code> pour g\u00e9rer les mises en majuscules d\u00e9coratives</li>\r\n</ul>", 
        "thema": "Pr\u00e9sentation                 ", 
        "name": "210"
    }, 
    "710": {
        "goal": "<ul>\r\n    <li>Informer les utilisateurs sur le niveau de s\u00e9curit\u00e9 du mot de passe choisi et donc sur les risques de d\u00e9tournement</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Un dispositif sensibilise l'utilisateur sur le degr\u00e9 de s\u00e9curisation du mot de passe qu'il choisit", 
        "solution": "", 
        "thema": "S\u00e9curit\u00e9 et confidentialit\u00e9  ", 
        "name": "211"
    }, 
    "711": {
        "goal": "<ul>\n    <li>Servir les pages dans la langue souhait\u00e9e</li>\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le serveur respecte l'ordre pr\u00e9f\u00e9rentiel de langues des outils de consultation.", 
        "solution": "<ul>\r\n    <li>Utiliser la n\u00e9gociation de contenu disponible selon le serveur, en testant les valeurs de l'en-t\u00eate HTTP <code>Accept-Language</code>.</li>\r\n</ul>", 
        "thema": "Serveur et Performances      ", 
        "name": "212"
    }, 
    "712": {
        "goal": "<ul>\r\n    <li>Permettre le chargement prioritaire des contenus</li>\r\n    <li>Limiter le d\u00e9lai d'affichage des contenus </li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les appels aux scripts sont plac\u00e9s apr\u00e8s le contenu", 
        "solution": "", 
        "thema": "Serveur et Performances      ", 
        "name": "213"
    }, 
    "713": {
        "goal": "<ul>\r\n    <li>\u00c9viter aux utisateurs les ruptures de navigation, l'arriv\u00e9e sur des pages cul-de-sac ou l'obligation d'utiliser le bouton pr\u00e9c\u00e9dent du navigateur</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le menu principal de navigation figure sur les pages d'erreur personnalis\u00e9es.", 
        "solution": "<ul>\r\n    <li>La page d'erreur 404 abord\u00e9e au sein de la bonne pratique num\u00e9ro 82 reprend soit de fa\u00e7on dynamique soit de fa\u00e7on statique l'ensemble de la navigation principale du site.</li>\r\n</ul>", 
        "thema": "Serveur et Performances      ", 
        "name": "214"
    }, 
    "714": {
        "goal": "<ul>\r\n    <li>Minimiser la quantit\u00e9 de donn\u00e9es \u00e0 t\u00e9l\u00e9charger par l'utilisateur</li>\r\n    <li>Am\u00e9liorer les performances</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les fonctions de scripts sont plac\u00e9s dans des fichiers externes.", 
        "solution": "<ul>\r\n    <li>N'utiliser le contenu de l'\u00e9l\u00e9ment <code>&lt;script&gt;</code> que pour renseigner des variables ou initialiser un script et d\u00e9porter les fonctions dans les fichiers Javascript externes</li></ul>", 
        "thema": "Serveur et Performances      ", 
        "name": "215"
    }, 
    "715": {
        "goal": "<ul>\r\n    <li>Acc\u00e9l\u00e9rer la vitesse d'affichage des pages</li>\r\n    <li>Am\u00e9liorer les performances</li>\r\n    <li>Diminuer la quantit\u00e9 de donn\u00e9es \u00e0 t\u00e9l\u00e9charger</li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les scripts sont minifi\u00e9s", 
        "solution": "<ul>\r\n    <li>Supprimer les espaces non n\u00e9cessaires et les commentaires dans les fichiers Javascript, par exemple en recourant \u00e0 des outils tels que <a href=\"http://crockford.com/javascript/jsmin\">crockford.com/javascript/jsmin</a> ou <a href=\"http://developer.yahoo.com/yui/compressor/\">developer.yahoo.com/yui/compressor/</a></li>\r\n</ul>", 
        "thema": "Serveur et Performances      ", 
        "name": "216"
    }, 
    "716": {
        "goal": "<ul>\r\n    <li>Minimiser la quantit\u00e9 de donn\u00e9es \u00e0 t\u00e9l\u00e9charger par l'utilisateur</li>\r\n    <li>Am\u00e9liorer les performances </li>\r\n</ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les informations de style sont minifi\u00e9es", 
        "solution": "<ul>\r\n    <li>Supprimer les espaces non n\u00e9cessaires et les commentaires dans les fichiers CSS, par exemple en recourant \u00e0 des outils tels que <a href=\"http://developer.yahoo.com/yui/compressor/\">developer.yahoo.com/yui/compressor/</a></li>\r\n</ul>", 
        "thema": "Serveur et Performances      ", 
        "name": "217"
    }, 
    "12066": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque bloc de texte contenu dans un \u00e9l\u00e9ment HTML, la couleur de fond est-elle contr\u00f4lable par l'utilisateur ?", 
        "solution": "", 
        "thema": "Pr\u00e9sentation de l'information", 
        "name": "10.8.1"
    }, 
    "19150": {
        "goal": "Permettre l'association des champs de formulaire avec les \u00e9tiquettes qui les d\u00e9crivent.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser les \u00e9l\u00e9ments select&nbsp; sans attribut id avec pr\u00e9caution", 
        "solution": "Ajouter un attribut id sur l'\u00e9l\u00e9ment.", 
        "thema": "HTML", 
        "name": "23"
    }, 
    "19153": {
        "goal": "Permettre l'identification des tableaux de donn\u00e9es et la restitution des contenus permettant de les caract\u00e9riser.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser avec pr\u00e9caution les \u00e9l\u00e9ments table sans attribut summary et contenant au moins un \u00e9l\u00e9ment th ou un \u00e9l\u00e9ment caption", 
        "solution": "Ajouter l'attribut summary sur l'\u00e9l\u00e9ment table lorsqu'il s'agit d'un tableau de donn\u00e9es. Exemple&nbsp;: &lt;table summary='...&nbsp;'&gt;", 
        "thema": "HTML", 
        "name": "10"
    }, 
    "12067": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque bloc de texte contenu dans un \u00e9l\u00e9ment HTML, la couleur de police est-elle contr\u00f4lable par l'utilisateur ?", 
        "solution": "", 
        "thema": "Pr\u00e9sentation de l'information", 
        "name": "10.8.2"
    }, 
    "19160": {
        "goal": "Permettre l'association des cellules avec leurs ent\u00eates dans les tableaux de donn\u00e9es.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser l'attribut headers vide sur les \u00e9l\u00e9ments td avec pr\u00e9caution", 
        "solution": "Renseigner les attributs headers des \u00e9l\u00e9ments td avec les valeurs des attributs id des ent\u00eates associ\u00e9es. ", 
        "thema": "HTML", 
        "name": "14"
    }, 
    "12068": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque bloc de texte contenu dans un \u00e9l\u00e9ment object, applet ou embed, la couleur de fond est-elle contr\u00f4lable par l'utilisateur ?", 
        "solution": "", 
        "thema": "Pr\u00e9sentation de l'information", 
        "name": "10.8.3"
    }, 
    "19163": {
        "goal": "Permettre l'association des champs de formulaire avec les \u00e9tiquettes qui les d\u00e9crivent.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser les \u00e9l\u00e9ments textarea&nbsp; sans attribut id avec pr\u00e9caution", 
        "solution": "Ajouter un attribut id sur l'\u00e9l\u00e9ment.", 
        "thema": "HTML", 
        "name": "22"
    }, 
    "19180": {
        "goal": "Permettre un comportement \u00e9quivalent et/ou l'acc\u00e8s \u00e0 une information \u00e9quivalente quel que soit le p\u00e9riph\u00e9rique d'entr\u00e9e des utilisateurs", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser avec pr\u00e9caution le gestionnaire d'\u00e9v\u00e9nement onmouseout lorsque vous n'utilisez pas le gestionnaire d'\u00e9v\u00e9nement onblur", 
        "solution": "Lors de l'utilisation de l'\u00e9v\u00e9nement onmouseout, inclure un comportement \u00e9quivalent sur l'\u00e9v\u00e9nement onblur  ou pr\u00e9voir un autre \u00e9l\u00e9ment permettant de r\u00e9aliser la m\u00eame action via le clavier", 
        "thema": "JS", 
        "name": "42"
    }, 
    "12069": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque bloc de texte contenu dans un \u00e9l\u00e9ment object, applet ou embed, la couleur de police est-elle contr\u00f4lable par l'utilisateur ?", 
        "solution": "", 
        "thema": "Pr\u00e9sentation de l'information", 
        "name": "10.8.4"
    }, 
    "19168": {
        "goal": "Permettre \u00e0 l'utilisateur de personnaliser l'affichage de la page par l'utilisation d'une feuille de style personnelle qui se substitue \u00e0 celle pr\u00e9vue par le concepteur.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser l'\u00e9l\u00e9ment u avec pr\u00e9caution", 
        "solution": "Utiliser les feuilles de styles pour d\u00e9finir la position et les caract\u00e9ristiques visuelles des \u00e9l\u00e9ments. ", 
        "thema": "HTML", 
        "name": "26"
    }, 
    "16255": {
        "goal": "Permettre l'indexation des contenus textuels publi\u00e9s sous forme graphique et optimiser l'exploitation des liens et boutons de navigation dont le libell\u00e9 est un texte mis en image.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Les textes mis en images sont reproduits dans l'alternative textuelle.", 
        "solution": "Reproduire le texte mis en image dans l'attribut ALT de l'\u00e9l\u00e9ment IMG, AREA, INPUT type image, APPLET.", 
        "thema": "Alternatives", 
        "name": "3"
    }, 
    "19172": {
        "goal": "Eviter aux utilisateurs un changement de contexte sans validation explicite de leur part.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser avec pr\u00e9caution le gestionnaire d'\u00e9v\u00e9nement onblur pour d\u00e9clencher la m\u00e9thode submit", 
        "solution": "Pr\u00e9voir un bouton de validation explicite que l'utilisateur devra d\u00e9clencher \u00e0 cette fin pour soumettre un formulaire.\r\nAlternativement, il est possible d'informer au pr\u00e9alable les utilisateurs de ce comportement.", 
        "thema": "JS", 
        "name": "34"
    }, 
    "12070": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque page Web v\u00e9rifie-t-elle une de ces conditions ?", 
        "solution": "", 
        "thema": "Pr\u00e9sentation de l'information", 
        "name": "10.9.1"
    }, 
    "19174": {
        "goal": "Eviter aux utilisateurs un changement de contexte sans validation explicite de leur part.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser avec pr\u00e9caution le gestionnaire d'\u00e9v\u00e9nement onchange avec l'objet location", 
        "solution": "Pr\u00e9voir un bouton de validation explicite que l'utilisateur devra d\u00e9clencher \u00e0 cette fin pour valider le changement de contexte.\r\nAlternativement, il est possible d'informer au pr\u00e9alable les utilisateurs de ce comportement", 
        "thema": "JS", 
        "name": "36"
    }, 
    "19175": {
        "goal": "Permettre aux utilisateurs de percevoir la nature interactive des \u00e9l\u00e9ments et de d\u00e9clencher les interactions quel que soit leur p\u00e9riph\u00e9rique d'entr\u00e9e.  ", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser avec pr\u00e9caution l'\u00e9v\u00e9nement onclick sur les \u00e9l\u00e9ments autre que a, area, button, select, textarea ou input", 
        "solution": "Ne pas utiliser d'\u00e9v\u00e9nement onclick ou alors seulement sur les \u00e9l\u00e9ments a, button, select, textarea ou input.", 
        "thema": "JS", 
        "name": "37"
    }, 
    "19176": {
        "goal": "Eviter aux utilisateurs l'obligation de poss\u00e9der un p\u00e9riph\u00e9rique de pointage tel que la souris et d'avoir la capacit\u00e9 \u00e0 double cliquer pour interagir avec le site. ", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser le gestionnaire d'\u00e9v\u00e9nement ondblclick avec pr\u00e9caution", 
        "solution": "Ne pas utiliser l'\u00e9v\u00e8nement ondbclick ou fournir un moyen d'effectuer la m\u00eame action d'une mani\u00e8re ind\u00e9pendante du p\u00e9riph\u00e9rique d'entr\u00e9e.", 
        "thema": "JS", 
        "name": "38"
    }, 
    "19177": {
        "goal": "Permettre un comportement \u00e9quivalent et/ou l'acc\u00e8s \u00e0 une information \u00e9quivalente quel que soit le p\u00e9riph\u00e9rique d'entr\u00e9e des utilisateurs", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser avec pr\u00e9caution le gestionnaire d'\u00e9v\u00e9nement onfocus lorsque vous n'utilisez pas le gestionnaire d'\u00e9v\u00e9nement onmouseover", 
        "solution": "Lors de l'utilisation de l'\u00e9v\u00e9nement onfocus, inclure un comportement \u00e9quivalent sur l'\u00e9v\u00e9nement onmouseover ou pr\u00e9voir un autre \u00e9l\u00e9ment permettant de r\u00e9aliser la m\u00eame action via la souris", 
        "thema": "JS", 
        "name": "39"
    }, 
    "19178": {
        "goal": "Conserver le focus sur les \u00e9l\u00e9ments le recevant.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser&nbsp; avec pr\u00e9caution le gestionnaire d'\u00e9v\u00e9nement onfocus pour d\u00e9clencher la m\u00e9thode blur", 
        "solution": "Supprimer l'appel \u00e0 la m\u00e9thode blur().", 
        "thema": "JS", 
        "name": "40"
    }, 
    "12071": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, l'augmentation de la taille des caract\u00e8res \u00e0 200% v\u00e9rifie-t-elle une de ces conditions ?", 
        "solution": "", 
        "thema": "Pr\u00e9sentation de l'information", 
        "name": "10.10.1"
    }, 
    "11932": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, \u00e0 partir de 120% de la taille de police par d\u00e9faut (ou 1.2em), le texte  et le texte en image en gras v\u00e9rifie-t-il une de ces conditions (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Couleurs", 
        "name": "3.4.4"
    }, 
    "19181": {
        "goal": "Eviter aux utilisateurs un changement de contexte sans validation explicite de leur part.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser avec pr\u00e9caution le gestionnaire d'\u00e9v\u00e9nement onmouseout pour d\u00e9clencher la m\u00e9thode submit", 
        "solution": "Pr\u00e9voir un bouton de validation explicite que l'utilisateur devra d\u00e9clencher \u00e0 cette fin pour soumettre un formulaire.\r\nAlternativement, il est possible d'informer au pr\u00e9alable les utilisateurs de ce comportement.", 
        "thema": "JS", 
        "name": "43"
    }, 
    "19182": {
        "goal": "Eviter aux utilisateurs un changement de contexte sans validation explicite de leur part.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser avec pr\u00e9caution le gestionnaire d'\u00e9v\u00e9nement onmouseover pour d\u00e9clencher la m\u00e9thode submit", 
        "solution": "Pr\u00e9voir un bouton de validation explicite que l'utilisateur devra d\u00e9clencher \u00e0 cette fin pour soumettre un formulaire.\r\nAlternativement, il est possible d'informer au pr\u00e9alable les utilisateurs de ce comportement.", 
        "thema": "JS", 
        "name": "44"
    }, 
    "19183": {
        "goal": "Permettre un comportement \u00e9quivalent et/ou l'acc\u00e8s \u00e0 une information \u00e9quivalente quel que soit le p\u00e9riph\u00e9rique d'entr\u00e9e des utilisateurs", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser avec pr\u00e9caution le gestionnaire d'\u00e9v\u00e9nement onmouseover lorsque vous n'utilisez pas le gestionnaire d'\u00e9v\u00e9nement onfocus", 
        "solution": "Lors de l'utilisation de l'\u00e9v\u00e9nement onmouseover, inclure un comportement \u00e9quivalent sur l'\u00e9v\u00e9nement onfocus ou pr\u00e9voir un autre \u00e9l\u00e9ment permettant de r\u00e9aliser la m\u00eame action via le clavier", 
        "thema": "JS", 
        "name": "45"
    }, 
    "19184": {
        "goal": "Eviter aux utilisateurs l'obligation de poss\u00e9der un p\u00e9riph\u00e9rique de pointage tel que la souris et d'avoir la capacit\u00e9 de scroller pour interagir avec le site ou avoir acc\u00e8s \u00e0 une information.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser le gestionnaire d'\u00e9v\u00e9nement onscroll avec pr\u00e9caution", 
        "solution": "Ne pas utiliser l'\u00e9v\u00e8nement onscroll ou fournir un moyen d'effectuer la m\u00eame action d'une mani\u00e8re ind\u00e9pendante du p\u00e9riph\u00e9rique d'entr\u00e9e.", 
        "thema": "JS", 
        "name": "46"
    }, 
    "12072": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque page Web, chaque bloc de texte v\u00e9rifie-t-il une de ces conditions (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Pr\u00e9sentation de l'information", 
        "name": "10.11.1"
    }, 
    "19186": {
        "goal": "Eviter aux utilisateurs tout \u00e9v\u00e9nement r\u00e9p\u00e9t\u00e9 automatiquement.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser la m\u00e9thode setInterval avec pr\u00e9caution", 
        "solution": "Ne pas utiliser cette m\u00e9thode ou  lui laisser la possibilit\u00e9 de mettre en pause ou de d\u00e9terminer le temps au bout duquel l'\u00e9v\u00e9nement sera r\u00e9p\u00e9t\u00e9.", 
        "thema": "JS", 
        "name": "48"
    }, 
    "19187": {
        "goal": "Permettre \u00e0 l'utilisateur de pr\u00e9voir le comportement des actions qui ouvrent une nouvelle fen\u00eatre.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser la m\u00e9thode window.open avec pr\u00e9caution", 
        "solution": "Ne pas utiliser cette m\u00e9thode ou alors pr\u00e9venir au pr\u00e9alable l'utilisateur de ce comportement.", 
        "thema": "JS", 
        "name": "49"
    }, 
    "19190": {
        "goal": "Permettre aux utilisateurs d'agrandir le texte avec les zooms textuels des agents utilisateurs.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser la propri\u00e9t\u00e9 font-size avec une valeur d\u00e9finie en pixel avec pr\u00e9caution", 
        "solution": "Utiliser les unit\u00e9s em, %, ou les mots-cl\u00e9s (large, medium, small, etc.) pour d\u00e9finir les valeurs de la propri\u00e9t\u00e9 font-size pour tous les \u00e9l\u00e9ments ou, au minimum, sur les \u00e9l\u00e9ments de formulaire.", 
        "thema": "CSS", 
        "name": "29"
    }, 
    "12073": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque page Web, chaque bloc de texte v\u00e9rifie-t-il une de ces conditions ?", 
        "solution": "", 
        "thema": "Pr\u00e9sentation de l'information", 
        "name": "10.12.1"
    }, 
    "19192": {
        "goal": "Favoriser le parcours oculaire des utilisateurs lorsque les yeux reviennent \u00e0 la ligne en conservant les diff\u00e9rences de longueur de ligne qui, de fait, serviront de rep\u00e8re visuel.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser la valeur justify pour la propri\u00e9t\u00e9 text-align avec pr\u00e9caution", 
        "solution": "Remplacer la valeur justify par left, right ou center", 
        "thema": "CSS", 
        "name": "31"
    }, 
    "19193": {
        "goal": "Eviter la perte d'information lorsque les images sont d\u00e9sactiv\u00e9s", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser avec pr\u00e9caution la propri\u00e9t\u00e9 text-indent avec une valeur n\u00e9gative pour un selecteur ayant \u00e9galement la propri\u00e9t\u00e9 background-image", 
        "solution": "Ne pas associer ces deux propri\u00e9t\u00e9s sur le m\u00eame s\u00e9lecteur.", 
        "thema": "CSS", 
        "name": "32"
    }, 
    "16249": {
        "goal": "Simplifier le crawl.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "L'acc\u00e8s aux contenus significatifs n'est pas  conditionn\u00e9 par le support des cookies.", 
        "solution": "Ne pas conditionner l'acc\u00e8s au site au support des cookies en dehors de l'utilisation de session avec login et mot de passe.", 
        "thema": "Navigation", 
        "name": "57"
    }, 
    "16170": {
        "goal": "<div>Permettre aux moteurs de comprendre le contenu des images.&nbsp;Placer des mots-clefs dans la page en dehors du texte directement visible par les visiteurs.</div>", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Chaque image ou \u00e9l\u00e9ment non textuel est dot\u00e9e d'une alternative textuelle", 
        "solution": "Renseigner l'attribut ALT de chaque \u00e9l\u00e9ment IMG, AREA, INPUT type image, APPLET. Fournir un contenu alternatif dans chaque \u00e9l\u00e9ment OBJECT. Renseigner le contenu de l'\u00e9l\u00e9ment NOEMBED.", 
        "thema": "Alternatives", 
        "name": "1"
    }, 
    "19200": {
        "goal": "", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser avec pr\u00e9caution un attribut title dont la valeur est plus courte que le contenu de l'\u00e9l\u00e9ment a", 
        "solution": "", 
        "thema": "HTML", 
        "name": "5"
    }, 
    "16256": {
        "goal": "", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Les redirections \u00e9ventuelles ne sont pas effectu\u00e9es \u00e0 l'aide de code http 302", 
        "solution": "", 
        "thema": "Hyperliens", 
        "name": ""
    }, 
    "12075": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque texte cach\u00e9 (propri\u00e9t\u00e9 display:none ou visibility:hidden) v\u00e9rifie-t-il une de ces conditions ?", 
        "solution": "", 
        "thema": "Pr\u00e9sentation de l'information", 
        "name": "10.13.1"
    }, 
    "19205": {
        "goal": "", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser avec pr\u00e9caution un contenu d'\u00e9l\u00e9ment label identique pour plusieurs \u00e9l\u00e9ments label dans le m\u00eame fieldset", 
        "solution": "", 
        "thema": "HTML", 
        "name": "24"
    }, 
    "12076": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, pour chaque texte ou ensemble de texte, l'information ne doit pas \u00eatre donn\u00e9e uniquement par la forme ou la position. Cette r\u00e8gle est-elle respect\u00e9e ?", 
        "solution": "", 
        "thema": "Pr\u00e9sentation de l'information", 
        "name": "10.14.1"
    }, 
    "19212": {
        "goal": "", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser avec pr\u00e9caution les \u00e9l\u00e9ments td quand l'ensemble des cellules d'une colonne contient du texte en gras", 
        "solution": "", 
        "thema": "HTML", 
        "name": "13"
    }, 
    "19257": {
        "goal": "Permettre la restitution d'un titre de page destin\u00e9 \u00e0 identifier le contenu du document.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Utiliser un \u00e9l\u00e9ment title enfant de l'\u00e9l\u00e9ment head", 
        "solution": "Ajouter un \u00e9l\u00e9ment title dans l'\u00e9l\u00e9ment head.", 
        "thema": "HTML", 
        "name": "3"
    }, 
    "19214": {
        "goal": "", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser la propri\u00e9t\u00e9 direction avec pr\u00e9caution", 
        "solution": "", 
        "thema": "CSS", 
        "name": "27"
    }, 
    "19245": {
        "goal": "Permettre la restitution d'un contenu d\u00e9crivant la fonction et/ou le contenu de l'\u00e9l\u00e9ment.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser un attribut title vide pour l'\u00e9l\u00e9ment frame", 
        "solution": "Ajouter un contenu \u00e0 l'attribut title des \u00e9l\u00e9ments frame permettant de conna\u00eetre la fonction ou le contenu de la frame. Exemple&nbsp;: &lt;frame title='navigation src='...' principale'&gt;&lt;/frame&gt;", 
        "thema": "HTML", 
        "name": "10"
    }, 
    "19216": {
        "goal": "\u00c9viter \u00e0 l'utilisateur d'avoir des \u00e9l\u00e9ments interactifs dont il ne peut connaitre la destination ou l'action", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser d'\u00e9l\u00e9ment a vide \u00e0 l'exception des ancres", 
        "solution": "Mettre un libell\u00e9 dans l'\u00e9l\u00e9ment &lt;a&gt;. Par exemple : &lt;a href=\"http://www.google.fr\"&gt;Site de google&lt;/a&gt;", 
        "thema": "HTML", 
        "name": "30"
    }, 
    "19218": {
        "goal": "Permettre \u00e0 l'utilisateur de personnaliser l'affichage de la page par l'utilisation d'une feuille de style personnelle qui se substitue \u00e0 celle pr\u00e9vue par le concepteur.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser l'attribut align", 
        "solution": "Utiliser les feuilles de styles pour d\u00e9finir la position et les caract\u00e9ristiques visuelles des \u00e9l\u00e9ments. ", 
        "thema": "HTML", 
        "name": "27"
    }, 
    "19219": {
        "goal": "Permettre \u00e0 l'utilisateur de personnaliser l'affichage de la page par l'utilisation d'une feuille de style personnelle qui se substitue \u00e0 celle pr\u00e9vue par le concepteur.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser l'attribut alink", 
        "solution": "Utiliser les feuilles de styles pour d\u00e9finir la position et les caract\u00e9ristiques visuelles des \u00e9l\u00e9ments. ", 
        "thema": "HTML", 
        "name": "52"
    }, 
    "19220": {
        "goal": "Permettre la restitution d'un contenu alternatif aux utilisateurs qui ne peuvent pas percevoir le contenu de l'\u00e9l\u00e9ment.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Utiliser un attribut alt pour l'\u00e9l\u00e9ment applet", 
        "solution": "ajouter l'attribut alt sur l'\u00e9l\u00e9ment. Exemple&nbsp;: &lt;applet alt='...'&gt;&lt;/applet&gt;", 
        "thema": "HTML", 
        "name": "37"
    }, 
    "16174": {
        "goal": "", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Chaque zone cliquable d'une image r\u00e9active c\u00f4t\u00e9 client (image map) contient une alternative textuelle.", 
        "solution": "", 
        "thema": "Alternatives", 
        "name": ""
    }, 
    "12062": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque \u00e9l\u00e9ment recevant le focus, l'indication visuelle du navigateur ne doit pas \u00eatre supprim\u00e9e (propri\u00e9t\u00e9 CSS outline, outline-color, outline-width, outline-style). Cette r\u00e8gle est-elle respect\u00e9e ?", 
        "solution": "", 
        "thema": "Pr\u00e9sentation de l'information", 
        "name": "10.7.1"
    }, 
    "19224": {
        "goal": "Permettre \u00e0 l'utilisateur de personnaliser l'affichage de la page par l'utilisation d'une feuille de style personnelle qui se substitue \u00e0 celle pr\u00e9vue par le concepteur.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser l'attribut background", 
        "solution": "Utiliser les feuilles de styles pour d\u00e9finir la position et les caract\u00e9ristiques visuelles des \u00e9l\u00e9ments. ", 
        "thema": "HTML", 
        "name": "46"
    }, 
    "19225": {
        "goal": "Permettre \u00e0 l'utilisateur de personnaliser l'affichage de la page par l'utilisation d'une feuille de style personnelle qui se substitue \u00e0 celle pr\u00e9vue par le concepteur.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser l'\u00e9l\u00e9ment basefont", 
        "solution": "Utiliser les feuilles de styles pour d\u00e9finir la position et les caract\u00e9ristiques visuelles des \u00e9l\u00e9ments. ", 
        "thema": "HTML", 
        "name": "78"
    }, 
    "19226": {
        "goal": "Permettre \u00e0 l'utilisateur de personnaliser l'affichage de la page par l'utilisation d'une feuille de style personnelle qui se substitue \u00e0 celle pr\u00e9vue par le concepteur.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser l'attribut bgcolor", 
        "solution": "Utiliser les feuilles de styles pour d\u00e9finir la position et les caract\u00e9ristiques visuelles des \u00e9l\u00e9ments. ", 
        "thema": "HTML", 
        "name": "61"
    }, 
    "16175": {
        "goal": "Ne pas gaspiller une opportunit\u00e9 de fournir du texte aux moteurs.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Les textes pouvant \u00eatre mis en forme via des styles ne sont pas remplac\u00e9s par des images", 
        "solution": "Utiliser les propri\u00e9t\u00e9s CSS (couleurs, polices de caract\u00e8res, graisse, etc.) pour mettre en forme le contenu textuel de la source HTML.", 
        "thema": "Pr\u00e9sentation", 
        "name": "73"
    }, 
    "19228": {
        "goal": "Permettre d'\u00e9viter la pr\u00e9sence de clignotement qu'il n'est pas possible d'arr\u00eater.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser l'\u00e9l\u00e9ment blink", 
        "solution": "Eviter les contenus clignotant ou utiliser un syst\u00e8me de clignotement des contenus que les utilisateurs peuvent contr\u00f4ler avec la souris et avec le clavier.", 
        "thema": "HTML", 
        "name": "79"
    }, 
    "19229": {
        "goal": "Permettre l'identification et la restitution du titre principal de la page.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Utiliser au moins un \u00e9l\u00e9ment h1 descendant de l'\u00e9l\u00e9ment body", 
        "solution": "Baliser le titre principal de la page avec l'\u00e9l\u00e9ment h1.", 
        "thema": "HTML", 
        "name": "13"
    }, 
    "19230": {
        "goal": "Permettre \u00e0 l'utilisateur de personnaliser l'affichage de la page par l'utilisation d'une feuille de style personnelle qui se substitue \u00e0 celle pr\u00e9vue par le concepteur.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser l'attribut border", 
        "solution": "Utiliser les feuilles de styles pour d\u00e9finir la position et les caract\u00e9ristiques visuelles des \u00e9l\u00e9ments. ", 
        "thema": "HTML", 
        "name": "43"
    }, 
    "19231": {
        "goal": "Eviter \u00e0 l'utilisateur d'avoir des \u00e9l\u00e9ments interactifs dont il ne peut connaitre la destination ou l'action", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser d'\u00e9l\u00e9ment button vide", 
        "solution": "Mettre du texte dans l'\u00e9l\u00e9ment button. Exemple&nbsp;: &lt;button&gt;Passer ma commande&lt;/button&gt;", 
        "thema": "HTML", 
        "name": "31"
    }, 
    "16257": {
        "goal": "Simplifier la compr\u00e9hension du contenu par les moteurs.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Les mises en majuscules \u00e0 des fins d\u00e9coratives sont effectu\u00e9es \u00e0 l'aide des styles CSS.", 
        "solution": "Utiliser la propri\u00e9t\u00e9 CSS text-decoration pour r\u00e9aliser les mises en majuscules d\u00e9coratives (mises en majuscules autres que celles des sigles ou contenus commun\u00e9ment mis en majuscule).", 
        "thema": "Pr\u00e9sentation", 
        "name": "72"
    }, 
    "16176": {
        "goal": "", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le contenu alternatif des images-liens est repr\u00e9sentatif du contenu de la page cible", 
        "solution": "", 
        "thema": "Alternatives", 
        "name": ""
    }, 
    "19234": {
        "goal": "Permettre la restitution du sujet du tableau de donn\u00e9es.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser d'\u00e9l\u00e9ment caption vide", 
        "solution": "Mettre dans l'\u00e9l\u00e9ment caption le titre du tableau.", 
        "thema": "HTML", 
        "name": "50"
    }, 
    "19235": {
        "goal": "Permettre la distinction entre les tableaux de donn\u00e9es et les tableaux de mise en page.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser d'\u00e9l\u00e9ment caption dans un \u00e9l\u00e9ment table contenant uniquement des cellules td", 
        "solution": "Ne pas utiliser d'\u00e9l\u00e9ment caption dans les tableau de mise en page. En revanche, dans le cas d'un tableau de donn\u00e9es o\u00f9 l'\u00e9l\u00e9ment caption serait justifi\u00e9, utiliser des \u00e9l\u00e9ments th pour signaler les ent\u00eates du tableau.", 
        "thema": "HTML", 
        "name": "51"
    }, 
    "11920": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque information v\u00e9hicul\u00e9e par la couleur et indiqu\u00e9e par un mot ou un ensemble de mots, l'information ne doit pas \u00eatre donn\u00e9e uniquement par la couleur. Cette r\u00e8gle est-elle impl\u00e9ment\u00e9e de fa\u00e7on pertinente ?", 
        "solution": "", 
        "thema": "Couleurs", 
        "name": "3.2.2"
    }, 
    "16189": {
        "goal": "Permettre aux moteurs d'associer le site \u00e0 la zone g\u00e9ographique vis\u00e9e.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Hors extensions g\u00e9n\u00e9riques, l'extension du nom de domaine correspond \u00e0 la zone g\u00e9ographique vis\u00e9e.", 
        "solution": "Utiliser une extension de nom de domaine de type .fr, .en etc. coh\u00e9rente avec la zone g\u00e9ographique pour laquelle les services sont propos\u00e9s ou qui est la cible des contenus publi\u00e9s.", 
        "thema": "Domaines", 
        "name": "30"
    }, 
    "12081": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque champ de formulaire (balise input de type text, password, checkbox, radio, file ou balises textarea et select), associ\u00e9 \u00e0 une \u00e9tiquette (balise label), v\u00e9rifie-t-il ces conditions ?", 
        "solution": "", 
        "thema": "Formulaire", 
        "name": "11.1.2"
    }, 
    "19241": {
        "goal": "Permettre la restitution d'un titre au groupe form\u00e9 par fieldset.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Utiliser un \u00e9l\u00e9ment legend enfant de l'\u00e9l\u00e9ment fieldset", 
        "solution": "Utiliser l'\u00e9l\u00e9ment legend juste apr\u00e8s l'\u00e9l\u00e9ment fieldset ou remplacer l'\u00e9l\u00e9ment fieldset par un div", 
        "thema": "HTML", 
        "name": "69"
    }, 
    "19242": {
        "goal": "Permettre \u00e0 l'utilisateur de personnaliser l'affichage de la page par l'utilisation d'une feuille de style personnelle qui se substitue \u00e0 celle pr\u00e9vue par le concepteur.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser l'\u00e9l\u00e9ment font", 
        "solution": "Utiliser les feuilles de styles pour d\u00e9finir la position et les caract\u00e9ristiques visuelles des \u00e9l\u00e9ments. ", 
        "thema": "HTML", 
        "name": "81"
    }, 
    "19244": {
        "goal": "Permettre la restitution d'un contenu d\u00e9crivant la fonction et/ou le contenu de l'\u00e9l\u00e9ment.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Utiliser un attribut title pour chaque \u00e9l\u00e9ment frame", 
        "solution": "Ajouter un attribut title sur chaque \u00e9l\u00e9ment frame. Exemple&nbsp;: &lt;frame title='...' src='...'&gt;&lt;/frame&gt;", 
        "thema": "HTML", 
        "name": "9"
    }, 
    "16178": {
        "goal": "Fournir du contenu accessible aux moteurs.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Si le site utilise la technique des jeux de cadres, l'\u00e9l\u00e9ment NOFRAME est utilis\u00e9.", 
        "solution": "Utiliser un \u00e9l\u00e9ment NOFRAMES dans chaque \u00e9l\u00e9ment FRAMESET.", 
        "thema": "Cadres", 
        "name": "6"
    }, 
    "19246": {
        "goal": "Eviter \u00e0 l'utilisateur d'avoir une hi\u00e9rarchie de titre incompl\u00e8te ou incoh\u00e9rente", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser d'\u00e9l\u00e9ment h1 vide", 
        "solution": "Ajouter un contenu \u00e0 l'\u00e9l\u00e9ment.", 
        "thema": "HTML", 
        "name": "14"
    }, 
    "19247": {
        "goal": "Eviter \u00e0 l'utilisateur d'avoir une hi\u00e9rarchie de titre incompl\u00e8te ou incoh\u00e9rente", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser d'\u00e9l\u00e9ment h2 vide", 
        "solution": "Ajouter un contenu \u00e0 l'\u00e9l\u00e9ment.", 
        "thema": "HTML", 
        "name": "15"
    }, 
    "19248": {
        "goal": "Eviter les trous dans la hi\u00e9rarchie des titres.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Utiliser un \u00e9l\u00e9ment h1, h2, h3, h4, h5 ou h6 comme premier \u00e9l\u00e9ment de titrage pr\u00e9c\u00e9dant l'\u00e9l\u00e9ment h2 dans l'ordre du code source", 
        "solution": "Pr\u00e9c\u00e9der chaque \u00e9l\u00e9ment h2 d'un \u00e9l\u00e9ment h1, h2, h3, h4, h5 ou h6.", 
        "thema": "HTML", 
        "name": "20"
    }, 
    "19249": {
        "goal": "Eviter \u00e0 l'utilisateur d'avoir une hi\u00e9rarchie de titre incompl\u00e8te ou incoh\u00e9rente", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser d'\u00e9l\u00e9ment h3 vide", 
        "solution": "Ajouter un contenu \u00e0 l'\u00e9l\u00e9ment.", 
        "thema": "HTML", 
        "name": "16"
    }, 
    "19250": {
        "goal": "Eviter les trous dans la hi\u00e9rarchie des titres.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Utiliser un \u00e9l\u00e9ment h2, h3, h4, h5 ou h6 comme premier \u00e9l\u00e9ment de titrage pr\u00e9c\u00e9dant l'\u00e9l\u00e9ment h3 dans l'ordre du code source", 
        "solution": "Pr\u00e9c\u00e9der chaque \u00e9l\u00e9ment h3 d'un \u00e9l\u00e9ment h2, h3, h4, h5 ou h6.", 
        "thema": "HTML", 
        "name": "21"
    }, 
    "16179": {
        "goal": "Fournir du contenu cibl\u00e9 et pertinent aux moteurs.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le contenu de chaque \u00e9l\u00e9ment noframe d\u00e9crit le contenu du cadre", 
        "solution": "Donner \u00e0 chaque \u00e9l\u00e9ment NOFRAMES un contenu descriptif des cadres du FRAMESET correspondant.", 
        "thema": "Cadres", 
        "name": "7"
    }, 
    "19252": {
        "goal": "Eviter les trous dans la hi\u00e9rarchie des titres.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Utiliser un \u00e9l\u00e9ment h3, h4, h5 ou h6 comme premier \u00e9l\u00e9ment de titrage pr\u00e9c\u00e9dant l'\u00e9l\u00e9ment h4 dans l'ordre du code source", 
        "solution": "Pr\u00e9c\u00e9der chaque \u00e9l\u00e9ment h4 d'un \u00e9l\u00e9ment h3, h4, h5 ou h6.", 
        "thema": "HTML", 
        "name": "22"
    }, 
    "19253": {
        "goal": "Eviter \u00e0 l'utilisateur d'avoir une hi\u00e9rarchie de titre incompl\u00e8te ou incoh\u00e9rente", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser d'\u00e9l\u00e9ment h5 vide", 
        "solution": "Ajouter un contenu \u00e0 l'\u00e9l\u00e9ment.", 
        "thema": "HTML", 
        "name": "18"
    }, 
    "19254": {
        "goal": "Eviter les trous dans la hi\u00e9rarchie des titres.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Utiliser un \u00e9l\u00e9ment h4, h5 ou h6 comme premier \u00e9l\u00e9ment de titrage pr\u00e9c\u00e9dant l'\u00e9l\u00e9ment h5 dans l'ordre du code source", 
        "solution": "Pr\u00e9c\u00e9der chaque \u00e9l\u00e9ment h5 d'un \u00e9l\u00e9ment h4, h5 ou h6.", 
        "thema": "HTML", 
        "name": "23"
    }, 
    "19255": {
        "goal": "Eviter \u00e0 l'utilisateur d'avoir une hi\u00e9rarchie de titre incompl\u00e8te ou incoh\u00e9rente", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser d'\u00e9l\u00e9ment h6 vide", 
        "solution": "Ajouter un contenu \u00e0 l'\u00e9l\u00e9ment.", 
        "thema": "HTML", 
        "name": "19"
    }, 
    "19256": {
        "goal": "Eviter les trous dans la hi\u00e9rarchie des titres.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Utiliser un \u00e9l\u00e9ment h5 ou h6 comme premier \u00e9l\u00e9ment de titrage pr\u00e9c\u00e9dant l'\u00e9l\u00e9ment h6 dans l'ordre du code source", 
        "solution": "Pr\u00e9c\u00e9der chaque \u00e9l\u00e9ment h6 d'un \u00e9l\u00e9ment h5 ou h6.", 
        "thema": "HTML", 
        "name": "24"
    }, 
    "16180": {
        "goal": "Eviter les p\u00e9nalit\u00e9s des moteurs pour keyword-stuffing (bourrage de mots-cl\u00e9s).", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le contenu de chaque \u00e9l\u00e9ment noframe n'est pas limit\u00e9 \u00e0 une liste de mots-cl\u00e9s.", 
        "solution": "Utiliser les mots cl\u00e9s dans chaque \u00e9l\u00e9ment NOFRAMES sous la forme d'un texte r\u00e9dig\u00e9 d\u00e9crivant le contenu des cadres du FRAMESET correspondant.", 
        "thema": "Cadres", 
        "name": "8"
    }, 
    "19258": {
        "goal": "Permettre la d\u00e9claration de la langue du document et l'adaptation des aides techniques \u00e0 celle-ci.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Utiliser un attribut lang pour l'\u00e9l\u00e9ment html", 
        "solution": "Ajouter l'attribut lang sur l'\u00e9l\u00e9ment html.", 
        "thema": "HTML", 
        "name": "6"
    }, 
    "19259": {
        "goal": "Permettre aux agents utilisateurs d'interpr\u00e9ter correctement le document.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Utiliser une dtd conforme aux recommandations du W3C avant l'\u00e9l\u00e9ment html", 
        "solution": "Positionner comme premier \u00e9l\u00e9ment une dtd conforme. Choisir dans la liste suivante&nbsp;: http://www.w3.org/QA/2002/04/valid-dtd-list.html", 
        "thema": "HTML", 
        "name": "1"
    }, 
    "19260": {
        "goal": "Eviter les erreurs d'interpr\u00e9tation et de restitution par les agents utilisateurs et les aides techniques", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser de syntaxes d'attribut erron\u00e9es ni d'imbrications d'\u00e9l\u00e9ments non conformes dans l'\u00e9l\u00e9ment html", 
        "solution": "Fermer toutes les balises ouvertes. Ne pas imbriquer de balise de type block dans les balises de type inline. Utiliser des syntaxes et des valeurs d'attribut conformes en fonction de la dtd d\u00e9clar\u00e9e.", 
        "thema": "HTML", 
        "name": "2"
    }, 
    "19261": {
        "goal": "Permettre la restitution d'un contenu d\u00e9crivant la fonction et/ou le contenu de l'\u00e9l\u00e9ment.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Utiliser un attribut title pour l'\u00e9l\u00e9ment iframe", 
        "solution": "Ajouter un attribut title sur chaque \u00e9l\u00e9ment iframe.", 
        "thema": "HTML", 
        "name": "11"
    }, 
    "16258": {
        "goal": "", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le site propose un fichier sitemap indiquant les contenus \u00e0 explorer", 
        "solution": "", 
        "thema": "Navigation", 
        "name": ""
    }, 
    "16181": {
        "goal": "Permettre aux moteurs de comprendre le contenu des vid\u00e9os et pistes audio.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Chaque contenu audio et vid\u00e9o est accompagn\u00e9 de sa transcription textuelle", 
        "solution": "V\u00e9rifier la pr\u00e9sence d'une transcription textuelle de chaque contenu audio ou vid\u00e9o, dans la page o\u00f9 se trouve celui-ci. La transcription balis\u00e9e en HTML reproduit l'ensemble de l'information pertinente du contenu audio ou vid\u00e9o, et en particulier des paroles et images contenant du texte, sous une forme int\u00e9grale ou synth\u00e9tique.", 
        "thema": "Alternatives", 
        "name": "2"
    }, 
    "12030": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque texte \u00e9crit dans une langue diff\u00e9rente de la langue par d\u00e9faut v\u00e9rifie-t-il une de ces conditions (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "\u00c9l\u00e9ments Obligatoires", 
        "name": "8.7.1"
    }, 
    "19266": {
        "goal": "Permettre d'associer le contenu d'une description longue \u00e0 l'image \u00e0 laquelle il se rapporte.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Utiliser une URI comme valeur de l'attribut longdesc", 
        "solution": "Ajouter une url dans l'attribut longdesc. Exemple&nbsp;: &lt;img longdesc=\"url-de-la-description.html\" \u2026 &gt;", 
        "thema": "HTML", 
        "name": "45"
    }, 
    "16182": {
        "goal": "Simplifier l'acc\u00e8s aux contenus sp\u00e9cifiques pour les moteurs.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le contenu textuel propre \u00e0 chaque page pr\u00e9c\u00e8de les \u00e9l\u00e9ments de navigation.", 
        "solution": "Dans l'ordre du code source HTML, placer les \u00e9l\u00e9ments de navigation apr\u00e8s le contenu propre de la page dans l'\u00e9l\u00e9ment BODY.", 
        "thema": "Structure", 
        "name": "14"
    }, 
    "19270": {
        "goal": "Eviter \u00e0 l'utilisateur d'avoir des \u00e9l\u00e9ments interactifs dont il ne peut connaitre la destination ou l'action", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser d'attribut alt vide pour un \u00e9l\u00e9ment input de type image", 
        "solution": "Renseigner le contenu de l'attribut alt avec la destination ou la fonction du bouton d'action.", 
        "thema": "HTML", 
        "name": "40"
    }, 
    "19292": {
        "goal": "Eviter l'utilisation d'\u00e9l\u00e9ments obsol\u00e8tes que les agents utilisateurs de sauraient pas interpr\u00e9ter.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser l'\u00e9l\u00e9ment plaintext", 
        "solution": "Utiliser l'\u00e9l\u00e9ment pre au lieu de plaintext.", 
        "thema": "HTML", 
        "name": "64"
    }, 
    "19273": {
        "goal": "Eviter \u00e0 l'utilisateur d'avoir des \u00e9l\u00e9ments interactifs dont il ne peut connaitre la destination ou l'action", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser d'attribut value vide pour un \u00e9l\u00e9ment input de type submit", 
        "solution": "Mettre le texte correspondant \u00e0 l'action associ\u00e9e dans l'attribut value. Exemple : &lt;input type=''submit'' value=''envoyer le message''&gt;", 
        "thema": "HTML", 
        "name": "67"
    }, 
    "12087": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque formulaire, chaque \u00e9tiquette de champ et son champ associ\u00e9 sont-ils accol\u00e9s ?", 
        "solution": "", 
        "thema": "Formulaire", 
        "name": "11.4.1"
    }, 
    "19276": {
        "goal": "Eviter \u00e0 l'utilisateur la restitution d'\u00e9tiquette associ\u00e9e \u00e0 aucun champ de formulaire.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser d'attribut for vide pour l'\u00e9l\u00e9ment label", 
        "solution": "Mettre dans l'attribut for la valeur de l'identifiant du champ associ\u00e9 au label", 
        "thema": "HTML", 
        "name": "73"
    }, 
    "19277": {
        "goal": "Eviter \u00e0 l'utilisateur la restitution d'\u00e9tiquette associ\u00e9e \u00e0 aucun champ de formulaire.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser un contenu d'attribut for qui ne correspond \u00e0 aucune valeur d'attribut id existant&nbsp; dans le m\u00eame \u00e9l\u00e9ment form", 
        "solution": "Corriger la valeur de l'attribut for afin de la faire correspondre au champ associ\u00e9 au label", 
        "thema": "HTML", 
        "name": "74"
    }, 
    "19278": {
        "goal": "Permettre la d\u00e9claration de la langue du document et l'adaptation des aides techniques \u00e0 celle-ci.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Utiliser un code de langue conforme dans l'attribut lang", 
        "solution": "Donner une valeur conforme au code de langue dans l'attribut lang. Exemple&nbsp;: \u201cfr\u201c pour le fran\u00e7ais, \u201cen\u201c pour l'anglais. Voir http://www.loc.gov/standards/iso639-2/php/code_list.php pour la liste compl\u00e8te des codes de langue.", 
        "thema": "HTML", 
        "name": "7"
    }, 
    "19191": {
        "goal": "Ne pas supprimer le rep\u00e8re visuel que constitue l'encadr\u00e9 pris par les \u00e9l\u00e9ments interactifs lorsqu'ils re\u00e7oivent le focus.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser la valeur 0 ou none pour la propri\u00e9t\u00e9 outline avec pr\u00e9caution", 
        "solution": "Ne pas utiliser la propri\u00e9t\u00e9 outline ou alors, seulement pour accentuer la mani\u00e8re dont sont restitu\u00e9s les \u00e9l\u00e9ments interactifs lorsqu'ils re\u00e7oivent le focus.\r\nExemple&nbsp;:\r\na:focus, input:focus, select:focus, textarea:focus {\r\noutline: 3px solid red !important;\r\n}", 
        "thema": "CSS", 
        "name": "30"
    }, 
    "19280": {
        "goal": "Eviter \u00e0 l'utilisateur la pr\u00e9sence de groupement d'\u00e9l\u00e9ments de formulaire qu'il ne pourra pas identifier.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser d'\u00e9l\u00e9ment legend vide", 
        "solution": "Renseigner l'\u00e9l\u00e9ment legend avec le titre du groupe form\u00e9 d'\u00e9l\u00e9ments de formulaire.", 
        "thema": "HTML", 
        "name": "71"
    }, 
    "16184": {
        "goal": "Limiter les risques que le site soit consid\u00e9r\u00e9 comme \"ferme de liens\" et p\u00e9nalis\u00e9 par les moteurs.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le nombre de liens externes dans une page n'exc\u00e8de pas le nombre de liens internes.", 
        "solution": "Limiter le nombre de liens externes dans chaque page \u00e0 un nombre inf\u00e9rieur au total des liens internes pr\u00e9sent dans celle-ci. Mettre en place dans l'interface d'\u00e9dition des contenus une validation du nombre de liens externes, permettant au r\u00e9dacteur d'\u00eatre averti lors de l'ajout d'un lien externe et de corriger en cons\u00e9quences.", 
        "thema": "Hyperliens", 
        "name": "38"
    }, 
    "11926": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, jusqu'\u00e0 120% de la taille de police par d\u00e9faut (ou 1.2em), le texte  et le texte en image en gras v\u00e9rifie-t-il une de ces conditions (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Couleurs", 
        "name": "3.3.2"
    }, 
    "19283": {
        "goal": "Eviter l'utilisation d'\u00e9l\u00e9ments obsol\u00e8tes que les agents utilisateurs de sauraient pas interpr\u00e9ter.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser l'\u00e9l\u00e9ment listing", 
        "solution": "Utiliser l'\u00e9l\u00e9ment pre au lieu de listing.", 
        "thema": "HTML", 
        "name": "57"
    }, 
    "19284": {
        "goal": "Permettre d'\u00e9viter la pr\u00e9sence de contenu d\u00e9filant qu'il n'est pas possible d'arr\u00eater.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser l'\u00e9l\u00e9ment marquee", 
        "solution": "Eviter les contenus d\u00e9filant ou utiliser un syst\u00e8me de d\u00e9filement des contenus que les utilisateurs peuvent contr\u00f4ler avec la souris et avec le clavier.", 
        "thema": "HTML", 
        "name": "68"
    }, 
    "19123": {
        "goal": "Permettre l'association des champs de formulaire avec les \u00e9tiquettes qui les d\u00e9crivent.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser les \u00e9l\u00e9ments input de type checkbox sans attribut id avec pr\u00e9caution", 
        "solution": "Ajouter un attribut id sur l'\u00e9l\u00e9ment.", 
        "thema": "HTML", 
        "name": "17"
    }, 
    "16185": {
        "goal": "Renforcer les mots-clefs associ\u00e9s \u00e0 un lien et \u00e0 une page.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Des libell\u00e9s de liens identiques pointent vers la m\u00eame page.", 
        "solution": "R\u00e9diger les libell\u00e9s de lien plac\u00e9s entre les balises de l'\u00e9l\u00e9ment A de mani\u00e8re \u00e0 ce que chaque URL vis\u00e9e soit associ\u00e9e \u00e0 un libell\u00e9 unique dans la page. Mettre en place dans l'interface d'\u00e9dition un processus de validation avant publication de la page qui avertit le contributeur et lui permet de corriger les libell\u00e9s concern\u00e9s.", 
        "thema": "Hyperliens", 
        "name": "39"
    }, 
    "19288": {
        "goal": "Permettre la distinction des diff\u00e9rents groupes form\u00e9s.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser un contenu d'attribut label identique pour plusieurs \u00e9l\u00e9ment optgroup d'un m\u00eame \u00e9l\u00e9ment select", 
        "solution": "D\u00e9terminer un titre diff\u00e9rent pour chaque groupe form\u00e9 par les \u00e9l\u00e9ments optgroup.", 
        "thema": "HTML", 
        "name": "76"
    }, 
    "19289": {
        "goal": "Permettre la distinction des diff\u00e9rents groupes form\u00e9s.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser d'attribut label vide sur l'\u00e9l\u00e9ment optgroup", 
        "solution": "D\u00e9terminer le nom du groupe form\u00e9 par optgroup et renseigner l'attribut label avec ce nom.", 
        "thema": "HTML", 
        "name": "77"
    }, 
    "19290": {
        "goal": "Eviter l'utilisation d'\u00e9l\u00e9ments \u00e0 des fins de pr\u00e9sentation.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser d'\u00e9l\u00e9ment p vide", 
        "solution": "Supprimer les \u00e9l\u00e9ments &lt;p&gt; qui ne poss\u00e8dent pas de contenu. Utiliser les propri\u00e9t\u00e9s des feuilles de styles margin et padding pour d\u00e9terminer les \u00e9carts entres les diff\u00e9rents \u00e9l\u00e9ments.", 
        "thema": "HTML", 
        "name": "29"
    }, 
    "16259": {
        "goal": "Simplifier le crawl.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le fichier robots.txt propose une r\u00e9f\u00e9rence valide \u00e0 un fichier sitemap.", 
        "solution": "Faire figurer dans le fichier robots.txt une indication du type : Sitemap: http://www.example.com/sitemap.xml", 
        "thema": "Navigation", 
        "name": "69"
    }, 
    "16186": {
        "goal": "Simplifier le crawl des moteurs.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "La navigation est possible via des liens HTML.", 
        "solution": "Faire figurer dans les pages un menu de navigation compos\u00e9 de liens A donnant acc\u00e8s \u00e0 l'ensemble des contenus, ou s'assurer que chaque page du site est atteignable via des liens A plac\u00e9s au fil du contenu ou via des listes de liens contextuelles, ou via un plan de site compos\u00e9 de liens HTML.", 
        "thema": "Navigation", 
        "name": "53"
    }, 
    "12031": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque changement de langue (attribut lang et/ou xml:lang) est-t-il valide ?", 
        "solution": "", 
        "thema": "\u00c9l\u00e9ments Obligatoires", 
        "name": "8.8.1"
    }, 
    "19296": {
        "goal": "Permettre l'identification des tableaux de donn\u00e9es et la restitution des contenus permettant de les caract\u00e9riser.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Utiliser un \u00e9l\u00e9ment caption comme premier enfant de l'\u00e9l\u00e9ment table si le tableau contient au moins un \u00e9l\u00e9ment th", 
        "solution": "Positionner un \u00e9l\u00e9ment caption tout de suite apr\u00e8s l'\u00e9l\u00e9ment table lorsqu'il s'agit d'un tableau de donn\u00e9es.", 
        "thema": "HTML", 
        "name": "48"
    }, 
    "16191": {
        "goal": "<div>Encourager les utilisateurs des moteurs \u00e0 visiter le site.&nbsp;Eviter les p\u00e9nalit\u00e9s des moteurs pour keyword-stuffing (bourrage de mots-cl\u00e9s).&nbsp;Eviter que les moteurs choisissent d'eux-m\u00eame une description pour la page</div>", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le contenu de l'\u00e9l\u00e9ment meta description est une phrase significative et non une liste de mots clefs.", 
        "solution": "R\u00e9diger le contenu de l'attribut content de l'\u00e9l\u00e9ment META name=\"description\".", 
        "thema": "M\u00e9tadonn\u00e9es", 
        "name": "48"
    }, 
    "19298": {
        "goal": "Permettre l'identification des tableaux de donn\u00e9es et la restitution des contenus permettant de les caract\u00e9riser.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Utiliser au moins un \u00e9l\u00e9ment th dans l'\u00e9l\u00e9ment table contenant un \u00e9l\u00e9ment caption ou ayant un attribut summary non vide", 
        "solution": "Modifier le code de mani\u00e8re \u00e0 utiliser l'\u00e9l\u00e9ment th \u00e0 la place de l'\u00e9l\u00e9ment td afin de d\u00e9clarer les ent\u00eates des tableaux de donn\u00e9es. Si c'est un tableau de mise en forme supprimer le caption ou le summary non vide", 
        "thema": "HTML", 
        "name": "58"
    }, 
    "16187": {
        "goal": "Simplifier le crawl des moteurs.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Les menus sont utilisables sans extension (flash...) ou activation de langages (CSS ou JavaScript..).", 
        "solution": "Rendre l'utilisation des menus ind\u00e9pendante du support des CSS et de javascript en veillant \u00e0 une utilisation non-obstructive de ces technologies. Ne pas utiliser de technologies tierces telles que Flash pour les menus de navigation du site.", 
        "thema": "Navigation", 
        "name": "65"
    }, 
    "19300": {
        "goal": "Permettre aux utilisateurs de distinguer le sujet d'un tableau de donn\u00e9es de la mani\u00e8re dont il est construit.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser un contenu d'attribut summary identique au contenu de l'\u00e9l\u00e9ment caption", 
        "solution": "Mettre dans l'\u00e9l\u00e9ment caption un contenu servant \u00e0 titrer le tableau et dans l'attribut summary un contenu pour d\u00e9crire l'organisation du tableau", 
        "thema": "HTML", 
        "name": "53"
    }, 
    "19301": {
        "goal": "Permettre l'identification des tableaux de donn\u00e9es et la restitution des contenus permettant de les caract\u00e9riser.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser d'attribut summary vide sur l'\u00e9l\u00e9ment table si le tableau contient un \u00e9l\u00e9ment th ou caption", 
        "solution": "Inclure un contenu \u00e0 l'attribut summary de l'\u00e9l\u00e9ment table lorsqu'il s'agit d'un tableau de donn\u00e9es.", 
        "thema": "HTML", 
        "name": "54"
    }, 
    "19302": {
        "goal": "Permettre aux utilisateurs de diff\u00e9rencier les tableaux de donn\u00e9es des tableaux de mise en page en n'utilisant pas les caract\u00e9ristiques sp\u00e9cifiques aux premiers dans les seconds.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser d'attribut summary sur un \u00e9l\u00e9ment table contenant uniquement des cellules td", 
        "solution": "Ne pas utiliser d'attribut summary dans les tableaux de mis en page.", 
        "thema": "HTML", 
        "name": "55"
    }, 
    "19303": {
        "goal": "Permettre l'association des cellules avec leurs ent\u00eates dans les tableaux de donn\u00e9es.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Mettre un attribut headers sur l'\u00e9l\u00e9ment td s'il se rapporte \u00e0 un \u00e9l\u00e9ment th ayant un attribut id", 
        "solution": "Utiliser un attribut headers sur les cellules td des tableaux de donn\u00e9es dont les ent\u00eates (th) contiennent un attribut id.", 
        "thema": "HTML", 
        "name": "63"
    }, 
    "16188": {
        "goal": "Simplifier la r\u00e9cup\u00e9ration des contenus par les moteurs.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Les contenus du site sont consultables sans extension (flash...) ou activation de langages (CSS ou JavaScript..).", 
        "solution": "Utiliser javascript et CSS de mani\u00e8re non-obtructive, en permettant la consultation du contenu \u00e0 partir de la seule source HTML statique. Ne pas recourir aux technologies de type Flash pour le contenu ou fournir une alternative compl\u00e8te aux contenus publi\u00e9s en flash.&nbsp;", 
        "thema": "Navigation", 
        "name": "70"
    }, 
    "19306": {
        "goal": "Permettre \u00e0 l'utilisateur de personnaliser l'affichage de la page par l'utilisation d'une feuille de style personnelle qui se substitue \u00e0 celle pr\u00e9vue par le concepteur.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser l'attribut text", 
        "solution": "Utiliser les feuilles de styles pour d\u00e9finir la position et les caract\u00e9ristiques visuelles des \u00e9l\u00e9ments. ", 
        "thema": "HTML", 
        "name": "33"
    }, 
    "19308": {
        "goal": "Permettre l'association des cellules avec leurs ent\u00eates dans les tableaux de donn\u00e9es.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Utiliser un attribut scope ou id pour chaque \u00e9l\u00e9ment th&nbsp; non vide", 
        "solution": "Utiliser un attribut scope ou id sur les ent\u00eates (th) des tableaux de donn\u00e9es.", 
        "thema": "HTML", 
        "name": "59"
    }, 
    "19309": {
        "goal": "Permettre l'association des cellules avec leurs ent\u00eates dans les tableaux de donn\u00e9es.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser une valeur d'attribut scope autre que row ou col", 
        "solution": "Utiliser la valeur row sur l'attribut scope des ent\u00eates de ligne et la valeur col sur les ent\u00eates de colonnes.", 
        "thema": "HTML", 
        "name": "60"
    }, 
    "19310": {
        "goal": "Permettre la restitution du titre de la page.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser d'\u00e9l\u00e9ment title vide", 
        "solution": "D\u00e9terminer le titre de la page et renseigner l'\u00e9l\u00e9ment title avec ce titre.", 
        "thema": "HTML", 
        "name": "4"
    }, 
    "12093": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque regroupement d'items de liste (balise optgroup) ayant un attribut label, le contenu de l'attribut label est-il pertinent ?", 
        "solution": "", 
        "thema": "Formulaire", 
        "name": "11.8.3"
    }, 
    "19313": {
        "goal": "Permettre \u00e0 l'utilisateur de personnaliser l'affichage de la page par l'utilisation d'une feuille de style personnelle qui se substitue \u00e0 celle pr\u00e9vue par le concepteur.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser l'attribut vlink", 
        "solution": "Utiliser les feuilles de styles pour d\u00e9finir la position et les caract\u00e9ristiques visuelles des \u00e9l\u00e9ments. ", 
        "thema": "HTML", 
        "name": "32"
    }, 
    "19314": {
        "goal": "Eviter l'utilisation d'\u00e9l\u00e9ments obsol\u00e8tes que les agents utilisateurs de sauraient pas interpr\u00e9ter.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser l'\u00e9l\u00e9ment xmp", 
        "solution": "Utiliser l'\u00e9l\u00e9ment pre au lieu de xmp.", 
        "thema": "HTML", 
        "name": "28"
    }, 
    "19124": {
        "goal": "Permettre l'association des champs de formulaire avec les \u00e9tiquettes qui les d\u00e9crivent.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser les \u00e9l\u00e9ments input de type file sans attribut id avec pr\u00e9caution", 
        "solution": "Ajouter un attribut id sur l'\u00e9l\u00e9ment.", 
        "thema": "HTML", 
        "name": "18"
    }, 
    "16669": {
        "goal": "", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Les textes d'un document sont dans une seul langue", 
        "solution": "", 
        "thema": "Contenu", 
        "name": ""
    }, 
    "16190": {
        "goal": "Permettre aux moteurs d'identifier rapidement la langue du contenu.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le code source de chaque page indique la langue principale du contenu.", 
        "solution": "Renseigner l'attribut lang de l'\u00e9l\u00e9ment racine HTML \u00e0 l'aide d'un code de langue conforme au registre des codes de langue de l'IANA.", 
        "thema": "M\u00e9tadonn\u00e9es", 
        "name": "51"
    }, 
    "12095": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque formulaire, les champs obligatoires sont-ils signal\u00e9s de mani\u00e8re pertinente ?", 
        "solution": "", 
        "thema": "Formulaire", 
        "name": "11.10.1"
    }, 
    "12032": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque changement de langue (attribut lang et/ou xml:lang) est-t-il pertinent ?", 
        "solution": "", 
        "thema": "\u00c9l\u00e9ments Obligatoires", 
        "name": "8.8.2"
    }, 
    "16222": {
        "goal": "", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Les liens externes ont un libell\u00e9 significatif.", 
        "solution": "", 
        "thema": "Hyperliens", 
        "name": ""
    }, 
    "16192": {
        "goal": "<div>Encourager les utilisateurs des moteurs \u00e0 visiter le site.&nbsp;Placer des mots-clefs dans la description et en renforcer l'importance.&nbsp;Eviter que les moteurs choisissent d'eux-m\u00eame une description pour la page.</div>", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le code source de chaque page contient une metadonn\u00e9e qui en d\u00e9crit le contenu.", 
        "solution": "Utiliser dans la section HEAD de la page l'\u00e9l\u00e9ment META name=\"description\" et renseigner son attribut content avec la description du contenu propre de la page.", 
        "thema": "M\u00e9tadonn\u00e9es", 
        "name": "42"
    }, 
    "16193": {
        "goal": "<div>Placer des mots-clefs dans la description et en renforcer l'importance.&nbsp;Fournir une description propre \u00e0 chaque page.&nbsp;Eviter que les moteurs choisissent d'eux-m\u00eame une description pour la page</div>", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le site compte autant de meta description diff\u00e9rentes que de pages.", 
        "solution": "Donner un contenu unique sur l'ensemble du site \u00e0 l'attribut content de l'\u00e9l\u00e9ment META name=\"description\" de chaque page.", 
        "thema": "M\u00e9tadonn\u00e9es", 
        "name": "52"
    }, 
    "19338": {
        "goal": "", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser d'attribut alt vide sur un \u00e9l\u00e9ment area dot\u00e9 d'un attribut href", 
        "solution": "", 
        "thema": "HTML", 
        "name": "41"
    }, 
    "16194": {
        "goal": "<div>Eviter le keyword-stuffing (bourrage de mots-cl\u00e9s).&nbsp;Garder le ciblage de la page.&nbsp;</div>", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le nombre de caract\u00e8res contenus dans la balise META Description est inf\u00e9rieur ou \u00e9gal \u00e0 250.", 
        "solution": "Limiter \u00e0 250 caract\u00e8res au plus, espaces compris, le contenu de l'attribut content de l'\u00e9l\u00e9ment META name=\"description\". Mettre en place un automatisme dans le CMS tronquant le contenu des attributs content automatiquement g\u00e9n\u00e9r\u00e9s. Mettre en place dans l'interface d'\u00e9dition une validation de la longueur des descriptions saisies par les r\u00e9dacteurs, avertissant ceux-ci en cas d'erreur et leur permettant de corriger la saisie concern\u00e9e avant publication de la page.", 
        "thema": "M\u00e9tadonn\u00e9es", 
        "name": "49"
    }, 
    "16250": {
        "goal": "Simplifier l'indexation et la compr\u00e9hension des images.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le nom de fichier des images significatives est coh\u00e9rent avec leur contenu.", 
        "solution": "Pour les images de contenu ou illustrant celui-ci ainsi que pour les images du type logo du site, nommer les fichiers images avec des termes repr\u00e9sentatif de leur contenu.", 
        "thema": "Contenu", 
        "name": "25"
    }, 
    "12099": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque formulaire, pour chaque erreur de saisie, des exemples de valeurs attendues sont-ils sugg\u00e9r\u00e9s, lorsque c'est possible ?", 
        "solution": "", 
        "thema": "Formulaire", 
        "name": "11.11.2"
    }, 
    "19348": {
        "goal": "", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Utiliser un \u00e9l\u00e9ment button ou un \u00e9l\u00e9ment input de type submit, image ou button dans chaque \u00e9l\u00e9ment form", 
        "solution": "", 
        "thema": "HTML", 
        "name": "66"
    }, 
    "16196": {
        "goal": "<div>Renforcer les mots-clefs associ\u00e9s \u00e0 une page.&nbsp;Encourager les utilisateurs des moteurs \u00e0 visiter la page.</div>", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le titre de chaque page (\u00e9l\u00e9ment TITLE) permet d'identifier son contenu.", 
        "solution": "<div>R\u00e9diger le contenu de l'\u00e9l\u00e9ment TITLE de chaque page de mani\u00e8re \u00e0 en d\u00e9crire de mani\u00e8re concise le contenu ou la fonction. Pr\u00e9ciser l'\u00e9tape en cours dans l'\u00e9l\u00e9ment&nbsp;TITLE&nbsp;des pages correspondant \u00e0 des \u00e9tapes dans un processus (exemple : \u00e9tape 3 de votre inscription, etc).&nbsp;</div><div>Pr\u00e9ciser l'intervalle dans une page d'une s\u00e9rie de pages de r\u00e9sultats de recherche (R\u00e9sultats 10 \u00e0 19 de la recherche sur \"Foo\")&nbsp;</div><div>Pr\u00e9ciser l'\u00e9tat dans le titre d'une page demande de confirmation ou de confirmation lors de la soumission d'un formulaire (exemple: demande de confirmation de suppression - mes documents).</div>", 
        "thema": "M\u00e9tadonn\u00e9es", 
        "name": "45"
    }, 
    "19355": {
        "goal": "", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser l\u2019\u00e9l\u00e9ment fieldset en dehors d'un \u00e9l\u00e9ment form", 
        "solution": "", 
        "thema": "HTML", 
        "name": "70"
    }, 
    "12033": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web les balises (\u00e0 l'exception de div, span et table) ne doivent pas \u00eatre utilis\u00e9es uniquement \u00e0 des fins de pr\u00e9sentation. Cette r\u00e8gle est-elle respect\u00e9e ?", 
        "solution": "", 
        "thema": "\u00c9l\u00e9ments Obligatoires", 
        "name": "8.9.1"
    }, 
    "16197": {
        "goal": "<div>Mettre en avant la structure de la page.&nbsp;Placer des mots-clefs aux endroits importants.</div>", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Chaque page du site contient un \u00e9l\u00e9ment de titre de section H1.", 
        "solution": "Faire figurer au moins un \u00e9l\u00e9ment H1 comme titre de section principal du contenu propre de la page. Automatiser le cas \u00e9ch\u00e9ant la pr\u00e9sence et le contenu de l'\u00e9l\u00e9ment H1 via les gabarits du CMS. Mettre en place un processus de validation de la pr\u00e9sence de l'\u00e9l\u00e9ment H1 quand celui-ci est manuellement ins\u00e9r\u00e9 par le r\u00e9dacteur, avertissant en cas d'erreur et permettant la correction avant publication du contenu.", 
        "thema": "Structure", 
        "name": "10"
    }, 
    "19262": {
        "goal": "Permettre la restitution d'un contenu d\u00e9crivant la fonction et/ou le contenu de l'\u00e9l\u00e9ment.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser un attribut title vide sur l'\u00e9l\u00e9ment iframe", 
        "solution": "Ajouter un contenu \u00e0 l'attribut title des \u00e9l\u00e9ments iframe.", 
        "thema": "HTML", 
        "name": "12"
    }, 
    "16198": {
        "goal": "", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Chaque page du site est structur\u00e9e \u00e0 l'aide d'au moins deux niveaux de titrage de section distincts.", 
        "solution": "", 
        "thema": "Structure", 
        "name": ""
    }, 
    "16199": {
        "goal": "<div>Fournir aux moteurs des mots-clefs situ\u00e9s aux endroits importants de l'URL.</div><div><br></div>", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le site propose plusieurs r\u00e9pertoires et/ou sous-domaines.", 
        "solution": "R\u00e9partir les contenus par sous-domaines ou par r\u00e9pertoires th\u00e9matiques", 
        "thema": "Domaines", 
        "name": "26"
    }, 
    "12063": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque \u00e9l\u00e9ment recevant le focus, l'indication visuelle du navigateur ne doit pas \u00eatre d\u00e9grad\u00e9e (propri\u00e9t\u00e9 CSS outline-color). Cette r\u00e8gle est-elle respect\u00e9e ?", 
        "solution": "", 
        "thema": "Pr\u00e9sentation de l'information", 
        "name": "10.7.2"
    }, 
    "16200": {
        "goal": "Simplifier le crawl des moteurs.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le site propose un plan du site contenant des liens HTML.", 
        "solution": "Mettre en place une page \"Plan de site\" form\u00e9e de liens A donnant acc\u00e8s directement ou indirectement \u00e0 l'ensemble des contenus significatifs du site.", 
        "thema": "Navigation", 
        "name": "54"
    }, 
    "12105": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque formulaire, chaque aide \u00e0 la saisie est-elle pertinente ?", 
        "solution": "", 
        "thema": "Formulaire", 
        "name": "11.15.1"
    }, 
    "12034": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque texte dont le sens de lecture est diff\u00e9rent du sens de lecture par d\u00e9faut v\u00e9rifie-t-il ces conditions ?", 
        "solution": "", 
        "thema": "\u00c9l\u00e9ments Obligatoires", 
        "name": "8.10.1"
    }, 
    "12106": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque ensemble de pages v\u00e9rifie-t-il une de ces conditions (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "12.1.1"
    }, 
    "19263": {
        "goal": "Permettre la restitution d'un contenu alternatif aux utilisateurs qui ne peuvent pas percevoir le contenu de l'\u00e9l\u00e9ment.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Utiliser un attribut alt pour l'\u00e9l\u00e9ment img", 
        "solution": "ajouter l'attribut alt sur l'\u00e9l\u00e9ment. Exemple&nbsp;: &lt;img src='...' alt='...' /&gt;", 
        "thema": "HTML", 
        "name": "35"
    }, 
    "12107": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque ensemble de pages, chaque page ayant un menu de navigation v\u00e9rifie-t-elle ces conditions (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "12.2.1"
    }, 
    "19195": {
        "goal": "", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser avec pr\u00e9caution les \u00e9l\u00e9ments td quand l'ensemble des cellules d'une ligne contient du texte en gras", 
        "solution": "", 
        "thema": "HTML", 
        "name": "12"
    }, 
    "12108": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque barre de navigation r\u00e9p\u00e9t\u00e9e dans un ensemble de page v\u00e9rifie-t-elle ces conditions (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "12.2.2"
    }, 
    "19127": {
        "goal": "Permettre l'association des champs de formulaire avec les \u00e9tiquettes qui les d\u00e9crivent.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser les \u00e9l\u00e9ments input de type password&nbsp; sans attribut id avec pr\u00e9caution", 
        "solution": "Ajouter un attribut id sur l'\u00e9l\u00e9ment.", 
        "thema": "HTML", 
        "name": "19"
    }, 
    "12109": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque ensemble de pages, le menu de navigation principal a-t-il une pr\u00e9sentation coh\u00e9rente (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "12.3.1"
    }, 
    "19251": {
        "goal": "Eviter \u00e0 l'utilisateur d'avoir une hi\u00e9rarchie de titre incompl\u00e8te ou incoh\u00e9rente", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser d'\u00e9l\u00e9ment h4 vide", 
        "solution": "Ajouter un contenu \u00e0 l'\u00e9l\u00e9ment.", 
        "thema": "HTML", 
        "name": "17"
    }, 
    "12110": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque ensemble de pages, les barres de navigation r\u00e9p\u00e9t\u00e9es ont-elles une pr\u00e9sentation coh\u00e9rente (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "12.3.2"
    }, 
    "12035": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, y a-t-il un titre de niveau 1 (balise h1) ?", 
        "solution": "", 
        "thema": "Structuration de l'information", 
        "name": "9.1.1"
    }, 
    "12111": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "La page \"plan du site\" est-elle repr\u00e9sentative de l'architecture g\u00e9n\u00e9rale du site ?", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "12.4.1"
    }, 
    "12112": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Les liens du plan du site sont-ils fonctionnels ?", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "12.4.2"
    }, 
    "16687": {
        "goal": "", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le titre de chaque page (\u00e9l\u00e9ment TITLE) permet d'identifier le site", 
        "solution": "", 
        "thema": "M\u00e9tadonn\u00e9es", 
        "name": ""
    }, 
    "12113": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Les liens du plan du site renvoient-ils bien vers les pages indiqu\u00e9es par l'intitul\u00e9 ?", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "12.4.3"
    }, 
    "19128": {
        "goal": "Permettre l'association des champs de formulaire avec les \u00e9tiquettes qui les d\u00e9crivent.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser les \u00e9l\u00e9ments input de type radio&nbsp; sans attribut id avec pr\u00e9caution", 
        "solution": "Ajouter un attribut id sur l'\u00e9l\u00e9ment.", 
        "thema": "HTML", 
        "name": "20"
    }, 
    "12114": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque ensemble de pages, la page \"plan du site\" est-elle accessible \u00e0 partir d'une fonctionnalit\u00e9 identique ?", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "12.5.1"
    }, 
    "12115": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque ensemble de pages, la fonctionnalit\u00e9 vers la page \"plan du site\" est-elle situ\u00e9e \u00e0 la m\u00eame place dans la pr\u00e9sentation ?", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "12.5.2"
    }, 
    "12036": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, la hi\u00e9rarchie entre les titres (balises h) est-elle pertinente ?", 
        "solution": "", 
        "thema": "Structuration de l'information", 
        "name": "9.1.2"
    }, 
    "12116": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque ensemble de pages, la fonctionnalit\u00e9 vers la page \"plan du site\" se pr\u00e9sente-t-elle toujours dans le m\u00eame ordre relatif dans le code source ?", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "12.5.3"
    }, 
    "16248": {
        "goal": "Simplifier le crawl.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "L'acc\u00e8s aux contenus significatifs n'est pas conditionn\u00e9 par des actions de formulaires.", 
        "solution": "Mettre en place des liens HTML donnant acc\u00e8s \u00e0 l'ensemble des contenus significatifs.", 
        "thema": "Navigation", 
        "name": "55"
    }, 
    "19265": {
        "goal": "Eviter \u00e0 l'utilisateur d'avoir des \u00e9l\u00e9ments interactifs dont il ne peut connaitre la destination ou l'action", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser d'attribut alt vide si l'\u00e9l\u00e9ment est le seul enfant d'un \u00e9l\u00e9ment a ou button", 
        "solution": "Renseigner le contenu de l'attribut alt avec la destination du lien ou la fonction du bouton d'action.", 
        "thema": "HTML", 
        "name": "39"
    }, 
    "12117": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque ensemble de pages, le moteur de recherche est-il accessible \u00e0 partir d'une fonctionnalit\u00e9 identique ?", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "12.6.1"
    }, 
    "11900": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque image texte applet (balise applet), en l'absence d'un m\u00e9canisme de remplacement, doit si possible \u00eatre remplac\u00e9e par du texte styl\u00e9. Cette r\u00e8gle est-elle respect\u00e9e (hors cas particuliers)?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.8.4"
    }, 
    "19197": {
        "goal": "", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser les valeurs none et hidden des propri\u00e9t\u00e9s display et visibility avec pr\u00e9caution", 
        "solution": "", 
        "thema": "CSS", 
        "name": "28"
    }, 
    "12118": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque ensemble de pages, la fonctionnalit\u00e9 vers le moteur de recherche est-elle situ\u00e9e \u00e0 la m\u00eame place dans la pr\u00e9sentation ?", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "12.6.2"
    }, 
    "12119": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque ensemble de pages, la fonctionnalit\u00e9 vers le moteur de recherche se pr\u00e9sente-t-elle toujours dans le m\u00eame ordre relatif dans le code source ?", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "12.6.3"
    }, 
    "12120": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque page d'une collection de pages v\u00e9rifie-t-elle ces conditions :", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "12.7.1"
    }, 
    "12037": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque titre (balise h) n\u00e9cessaire \u00e0 la structure de l'information est-il pr\u00e9sent ?", 
        "solution": "", 
        "thema": "Structuration de l'information", 
        "name": "9.1.3"
    }, 
    "12121": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page web, un fil d'Ariane est-il pr\u00e9sent?", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "12.8.1"
    }, 
    "12122": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, le fil d'Ariane est-il repr\u00e9sentatif de la position de la page dans l'arborescence du site ?", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "12.9.1"
    }, 
    "11901": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque image texte objet (balise object avec l'attribut type=\"image/...\"), en l'absence d'un m\u00e9canisme de remplacement, doit si possible \u00eatre remplac\u00e9e par du texte styl\u00e9. Cette r\u00e8gle est-elle respect\u00e9e (hors cas particuliers)?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.8.5"
    }, 
    "12123": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque groupe de liens importants est-il impl\u00e9ment\u00e9 dans un \u00e9l\u00e9ment commun ?", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "12.10.1"
    }, 
    "16251": {
        "goal": "Simplifier le crawl.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Les formats d'images utilis\u00e9s sont indexables par les principaux moteurs de recherche d'image.", 
        "solution": "Limiter le format des images aux seuls JPEG, PNG, GIF ou SVG.", 
        "thema": "Contenu", 
        "name": "20"
    }, 
    "12124": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque groupe de liens importants v\u00e9rifie-t-il une de ces conditions ?", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "12.10.2"
    }, 
    "12125": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, la zone de contenu v\u00e9rifie-t-elle une de ces conditions ?", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "12.10.3"
    }, 
    "12038": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque titre (balise h) est-il pertinent ?", 
        "solution": "", 
        "thema": "Structuration de l'information", 
        "name": "9.1.4"
    }, 
    "12126": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, un lien permet-il d'\u00e9viter chaque groupe de liens importants identifi\u00e9 ou d'y acc\u00e9der ?", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "12.11.1"
    }, 
    "16230": {
        "goal": "Simplifier l'indexation et la compr\u00e9hension des images.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Les images sont coh\u00e9rentes avec les contenus de la page.", 
        "solution": "Choisir les images de mani\u00e8re \u00e0 ce qu'elles illustrent ou compl\u00e8tent explicitement le contenu de la page.", 
        "thema": "Contenu", 
        "name": "24"
    }, 
    "12127": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, un lien permet-il d'\u00e9viter la zone de contenu identifi\u00e9e ou d'y acc\u00e9der ?", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "12.11.2"
    }, 
    "11902": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque image texte embarqu\u00e9e (balise embed avec l'attribut type=\"image/...\"), en l'absence d'un m\u00e9canisme de remplacement, doit si possible \u00eatre remplac\u00e9e par du texte styl\u00e9. Cette r\u00e8gle est-elle respect\u00e9e (hors cas particuliers)?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.8.6"
    }, 
    "12128": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque lien d'\u00e9vitement ou d'acc\u00e8s rapide est-il fonctionnel ?", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "12.11.3"
    }, 
    "16183": {
        "goal": "Associer les liens avec les termes correspondants.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le libell\u00e9 de chaque hyperlien d\u00e9crit sa fonction ou la nature du contenu vers lequel il pointe.", 
        "solution": "D\u00e9crire la fonction du lien ou le contenu vis\u00e9 dans le libell\u00e9 plac\u00e9 entre les balises de l'\u00e9l\u00e9ment A, dans l'attribut ALT des \u00e9l\u00e9ments AREA, INPUT type image, APPLET ainsi que dans l'attribut ALT des \u00e9l\u00e9ments IMG qui sont le seul contenu d'un lien A.", 
        "thema": "Hyperliens", 
        "name": "32"
    }, 
    "12129": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, les liens d'\u00e9vitements ou d'acc\u00e8s rapide v\u00e9rifient-t-ils ces conditions ?", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "12.11.4"
    }, 
    "12130": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, la page en cours de consultation est-elle indiqu\u00e9e dans le menu de navigation ?", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "12.12.1"
    }, 
    "12039": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, les informations regroup\u00e9es sous forme de listes non ordonn\u00e9es utilisent-elles les balises ul et li ?", 
        "solution": "", 
        "thema": "Structuration de l'information", 
        "name": "9.2.1"
    }, 
    "12131": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, l'ordre de tabulation dans le contenu est-il coh\u00e9rent ?", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "12.13.1"
    }, 
    "16224": {
        "goal": "Conserver le ciblage de la page.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Les liens qui ne sont pas en rapport avec les contenus ou services propos\u00e9s sont d\u00e9clar\u00e9s en nofollow.", 
        "solution": "Renseigner l'attribut rel des \u00e9l\u00e9ments A et AREA concern\u00e9s avec la valeur \"nofollow\".", 
        "thema": "Hyperliens", 
        "name": "33"
    }, 
    "12132": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque script qui met \u00e0 jour ou ins\u00e8re un contenu, l'ordre de tabulation reste-t-il coh\u00e9rent ?", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "12.13.2"
    }, 
    "11903": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque image texte (balise img) doit si possible \u00eatre remplac\u00e9e par du texte styl\u00e9. Cette r\u00e8gle est-elle respect\u00e9e ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.9.1"
    }, 
    "12133": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque \u00e9l\u00e9ment recevant le focus v\u00e9rifie-t-il une de ces conditions ?", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "12.14.1"
    }, 
    "12134": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque page Web, chaque proc\u00e9d\u00e9 de rafra\u00eechissement ou de redirection automatique (code, script, balise object, balise applet, balise meta) v\u00e9rifie-t-il une de ces conditions (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Consultation", 
        "name": "13.1.1"
    }, 
    "12135": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque page Web, chaque proc\u00e9d\u00e9 de redirection effectu\u00e9 via une balise m\u00e9ta est-il imm\u00e9diat (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Consultation", 
        "name": "13.1.2"
    }, 
    "12040": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, les informations regroup\u00e9es sous forme de listes ordonn\u00e9es utilisent-elles les balises ol et li ?", 
        "solution": "", 
        "thema": "Structuration de l'information", 
        "name": "9.2.2"
    }, 
    "12136": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque page Web, chaque proc\u00e9d\u00e9 de redirection effectu\u00e9 via un script v\u00e9rifie-t-il une de ces conditions (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Consultation", 
        "name": "13.1.3"
    }, 
    "19269": {
        "goal": "Permettre la restitution d'un contenu alternatif aux utilisateurs qui ne peuvent pas percevoir le contenu de l'\u00e9l\u00e9ment.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Utiliser un attribut alt pour chaque \u00e9l\u00e9ment input de type image", 
        "solution": "ajouter l'attribut alt sur l'\u00e9l\u00e9ment. Exemple&nbsp;: &lt;input type='image' alt='...'/&gt;", 
        "thema": "HTML", 
        "name": "38"
    }, 
    "12137": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque page Web, chaque proc\u00e9d\u00e9 de redirection effectu\u00e9 cot\u00e9 serveur v\u00e9rifie-t-il une de ces conditions (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Consultation", 
        "name": "13.1.4"
    }, 
    "11904": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque image r\u00e9active (balise img ou object avec l'attribut usemap), chaque zone texte (balise area) doit si possible \u00eatre remplac\u00e9e par du texte styl\u00e9. Cette r\u00e8gle est-elle respect\u00e9e ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.9.2"
    }, 
    "12138": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque page Web, chaque proc\u00e9d\u00e9 limitant le temps d'une session v\u00e9rifie-t-il une de ces conditions (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Consultation", 
        "name": "13.1.5"
    }, 
    "11928": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, \u00e0 partir de 120% de la taille de police par d\u00e9faut (ou 1.2em), le texte  et le texte en image en gras v\u00e9rifie-t-il une de ces conditions (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Couleurs", 
        "name": "3.3.4"
    }, 
    "12061": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque lien texte signal\u00e9 uniquement par la couleur et dont la nature n'est pas \u00e9vidente a-t-il un rapport de contraste sup\u00e9rieur ou \u00e9gal \u00e0 3:1 par rapport au texte environnant ?", 
        "solution": "", 
        "thema": "Pr\u00e9sentation de l'information", 
        "name": "10.6.1"
    }, 
    "12139": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, pour chaque ouverture d'une nouvelle fen\u00eatre effectu\u00e9e via un lien (attribut target=\"_blank\") ou une commande javascript, l'utilisateur est-il averti ?", 
        "solution": "", 
        "thema": "Consultation", 
        "name": "13.2.1"
    }, 
    "12140": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, pour chaque ouverture d'une nouvelle fen\u00eatre effectu\u00e9e via une balise object, applet ou embed, l'utilisateur est-il averti ?", 
        "solution": "", 
        "thema": "Consultation", 
        "name": "13.2.2"
    }, 
    "12041": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, les informations regroup\u00e9es sous forme de listes de d\u00e9finitions utilisent-elles les balises dl et dt/dd ?", 
        "solution": "", 
        "thema": "Structuration de l'information", 
        "name": "9.2.3"
    }, 
    "16201": {
        "goal": "Simplifier le crawl des moteurs.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le plan du site est accessible depuis la page d'accueil.", 
        "solution": "Faire figurer un lien A vers la page de plan de site sur la page d'accueil.", 
        "thema": "Navigation", 
        "name": "63"
    }, 
    "12141": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, pour chaque ouverture d'une nouvelle fen\u00eatre effectu\u00e9e via un contr\u00f4le de formulaire, l'utilisateur est-il averti ?", 
        "solution": "", 
        "thema": "Consultation", 
        "name": "13.2.3"
    }, 
    "12142": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, l'ouverture d'une nouvelle fen\u00eatre ne doit pas \u00eatre d\u00e9clench\u00e9e sans action de l'utilisateur. Cette r\u00e8gle est-elle respect\u00e9e ?", 
        "solution": "", 
        "thema": "Consultation", 
        "name": "13.3.1"
    }, 
    "11905": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque balise form, chacun de ses boutons \"image texte\" (balise input avec l'attribut type=\"image\") doit si possible \u00eatre remplac\u00e9 par du texte styl\u00e9. Cette r\u00e8gle est-elle respect\u00e9e ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.9.3"
    }, 
    "12143": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque t\u00e2che limit\u00e9e dans le temps v\u00e9rifie-t-elle une de ces conditions ?", 
        "solution": "", 
        "thema": "Consultation", 
        "name": "13.4.1"
    }, 
    "12144": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, lors d'une interruption de session authentifi\u00e9e, les donn\u00e9es saisies par l'utilisateur sont-elles r\u00e9cup\u00e9r\u00e9es apr\u00e8s r\u00e9-authentification ?", 
        "solution": "", 
        "thema": "Consultation", 
        "name": "13.5.1"
    }, 
    "19287": {
        "goal": "Permettre la restitution d'un titre au groupe form\u00e9 par optgroup.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Utiliser un attribut label pour chaque \u00e9l\u00e9ment optgroup", 
        "solution": "Ajouter un attribut label aux \u00e9l\u00e9ments optgroup. Exemple&nbsp;: &lt;optgroup label='france'&gt;...&lt;/optgroup&gt;", 
        "thema": "HTML", 
        "name": "75"
    }, 
    "12145": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque fichier en t\u00e9l\u00e9chargement via un lien ou un formulaire a-t-il des informations relatives \u00e0 son format ?", 
        "solution": "", 
        "thema": "Consultation", 
        "name": "13.6.1"
    }, 
    "12042": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, la premi\u00e8re occurrence de chaque acronyme v\u00e9rifie-t-elle une de ces conditions ?", 
        "solution": "", 
        "thema": "Structuration de l'information", 
        "name": "9.3.1"
    }, 
    "16202": {
        "goal": "Simplifier le crawl des moteurs.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le site propose un fil d'Ariane.", 
        "solution": "Fournir un fil d'Ariane en d\u00e9but de la zone de contenu principal de la page. Il commence par un lien vers la page d'accueil, suivi des liens correspondants aux rubriques et sous-rubriques \u00e9ventuelles o\u00f9 se trouve la page.", 
        "thema": "Navigation", 
        "name": "66"
    }, 
    "12146": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque fichier en t\u00e9l\u00e9chargement via un lien ou un formulaire a-t-il des informations relatives \u00e0 son poids ?", 
        "solution": "", 
        "thema": "Consultation", 
        "name": "13.6.2"
    }, 
    "12147": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque fichier en t\u00e9l\u00e9chargement via un lien ou un formulaire a-t-il, si n\u00e9cessaire, des informations relatives \u00e0 sa langue ?", 
        "solution": "", 
        "thema": "Consultation", 
        "name": "13.6.3"
    }, 
    "11906": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque image texte applet (balise applet) doit si possible \u00eatre remplac\u00e9e par du texte styl\u00e9. Cette r\u00e8gle est-elle respect\u00e9e ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.9.4"
    }, 
    "12148": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque fonctionnalit\u00e9 de t\u00e9l\u00e9chargement d'un document bureautique v\u00e9rifie-t-elle une de ces conditions (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Consultation", 
        "name": "13.7.1"
    }, 
    "16252": {
        "goal": "Simplifier le crawl.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "L'acc\u00e8s aux contenus significatifs n'est pas  conditionn\u00e9e par le support de javascript.", 
        "solution": "Utiliser les scripts de mani\u00e8re non-obstructive, c'est \u00e0 dire comme am\u00e9lioration de l'interaction sur la base d'une source HTML statique enti\u00e8rement navigable.", 
        "thema": "Navigation", 
        "name": "56"
    }, 
    "12149": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque document bureautique ayant une version accessible v\u00e9rifie-t-il une de ces conditions ?", 
        "solution": "", 
        "thema": "Consultation", 
        "name": "13.8.1"
    }, 
    "12150": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque expression inhabituelle ou limit\u00e9e, chaque expression idiomatique ou le jargon v\u00e9rifie-t-il une des conditions suivantes ?", 
        "solution": "", 
        "thema": "Consultation", 
        "name": "13.9.1"
    }, 
    "16221": {
        "goal": "Am\u00e9liorer la popularit\u00e9 du site.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le site fait l'objet de liens entrants.", 
        "solution": "", 
        "thema": "Navigation", 
        "name": "61"
    }, 
    "12043": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, la premi\u00e8re occurrence de chaque abr\u00e9viation v\u00e9rifie-t-elle une de ces conditions ?", 
        "solution": "", 
        "thema": "Structuration de l'information", 
        "name": "9.3.2"
    }, 
    "16203": {
        "goal": "Contr\u00f4ler l'indexation des moteurs.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "La racine du site contient des instructions pour les robots d'indexation.", 
        "solution": "Mettre en place un fichier robots.txt \u00e0 la racine du site et renseigner son contenu \u00e0 l'aide des directives indiqu\u00e9es par http://www.robotstxt.org/", 
        "thema": "Navigation", 
        "name": "58"
    }, 
    "12151": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque contenu cryptique (art ascii, \u00e9moticon, syntaxe cryptique) v\u00e9rifie-t-il une de ces conditions ?", 
        "solution": "", 
        "thema": "Consultation", 
        "name": "13.11.1"
    }, 
    "12152": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque mot dont le sens ne peut \u00eatre compris sans en conna\u00eetre la prononciation, v\u00e9rifie-t-il une de ces conditions ?", 
        "solution": "", 
        "thema": "Consultation", 
        "name": "13.13.1"
    }, 
    "11907": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque image texte objet (balise object avec l'attribut type=\"image/...\") doit si possible \u00eatre remplac\u00e9e par du texte styl\u00e9. Cette r\u00e8gle est-elle respect\u00e9e ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.9.5"
    }, 
    "19130": {
        "goal": "Permettre l'association des champs de formulaire avec les \u00e9tiquettes qui les d\u00e9crivent.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser les \u00e9l\u00e9ments input de type text&nbsp; sans attribut id avec pr\u00e9caution", 
        "solution": "Ajouter un attribut id sur l'\u00e9l\u00e9ment.", 
        "thema": "HTML", 
        "name": "21"
    }, 
    "12153": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque texte qui n\u00e9cessite un niveau de lecture plus avanc\u00e9 que le premier cycle de l'enseignement secondaire (hors nom propre et titre) v\u00e9rifie-t-il une de ces conditions ?", 
        "solution": "", 
        "thema": "Consultation", 
        "name": "13.14.1"
    }, 
    "12154": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque image anim\u00e9e (balise img ou balise object) qui provoque un changement brusque de luminosit\u00e9 ou un effet de flash v\u00e9rifie-t-elle une de ces conditions ?", 
        "solution": "", 
        "thema": "Consultation", 
        "name": "13.15.1"
    }, 
    "16675": {
        "goal": "", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Les contenus qui le peuvent sont enrichis avec des meta-donn\u00e9es.", 
        "solution": "", 
        "thema": "Contenu", 
        "name": ""
    }, 
    "12155": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque script  qui provoque un changement brusque de luminosit\u00e9 ou un effet de flash v\u00e9rifie-t-il une de ces conditions ?", 
        "solution": "", 
        "thema": "Consultation", 
        "name": "13.15.2"
    }, 
    "12044": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, la signification de chaque acronyme est-elle pertinente ?", 
        "solution": "", 
        "thema": "Structuration de l'information", 
        "name": "9.4.1"
    }, 
    "16204": {
        "goal": "Simplifier le crawl des moteurs.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le site propose un fichier sitemap indiquant les contenus \u00e0 explorer.", 
        "solution": "Cr\u00e9er un fichier sitemap.xml contenant la liste des pages du site \u00e0 la racine du site.", 
        "thema": "Navigation", 
        "name": "59"
    }, 
    "12156": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque mise en forme CSS qui provoque un changement brusque de luminosit\u00e9 ou un effet de flash v\u00e9rifie-t-elle une de ces conditions ?", 
        "solution": "", 
        "thema": "Consultation", 
        "name": "13.15.3"
    }, 
    "12157": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque applet java qui provoque un changement brusque de luminosit\u00e9 ou un effet de flash v\u00e9rifie-t-elle les une de ces conditions ?", 
        "solution": "", 
        "thema": "Consultation", 
        "name": "13.15.4"
    }, 
    "11908": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque image texte embarqu\u00e9e (balise embed avec l'attribut type=\"image/...\") doit si possible \u00eatre remplac\u00e9e par du texte styl\u00e9. Cette r\u00e8gle est-elle respect\u00e9e ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.9.6"
    }, 
    "12158": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque changement brusque de luminosit\u00e9 ou un effet de flash provoqu\u00e9 par une image anim\u00e9e (balise img ou balise object) a-t-il une fr\u00e9quence inf\u00e9rieure ou \u00e9gale \u00e0 3 par seconde ?", 
        "solution": "", 
        "thema": "Consultation", 
        "name": "13.16.1"
    }, 
    "19221": {
        "goal": "Permettre aux utilisateurs de distinguer les liens qui m\u00e8nent \u00e0 des adresses diff\u00e9rentes.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Utiliser un attribut alt pour l'\u00e9l\u00e9ment area", 
        "solution": "ajouter l'attribut alt sur l'\u00e9l\u00e9ment. Exemple&nbsp;: &lt;area alt='...'&gt;&lt;/area&gt;", 
        "thema": "HTML", 
        "name": "36"
    }, 
    "12159": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web chaque changement brusque de luminosit\u00e9 ou un effet de flash provoqu\u00e9 par un script a-t-il une fr\u00e9quence inf\u00e9rieure ou \u00e9gale \u00e0 3 par seconde ?", 
        "solution": "", 
        "thema": "Consultation", 
        "name": "13.16.2"
    }, 
    "12160": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque changement brusque de luminosit\u00e9 ou un effet de flash provoqu\u00e9 par une mise en forme CSS a-t-il une fr\u00e9quence inf\u00e9rieure ou \u00e9gale \u00e0 3 par seconde ?", 
        "solution": "", 
        "thema": "Consultation", 
        "name": "13.16.3"
    }, 
    "12045": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, la signification de chaque abr\u00e9viation est-elle pertinente ?", 
        "solution": "", 
        "thema": "Structuration de l'information", 
        "name": "9.4.2"
    }, 
    "16205": {
        "goal": "S\u00e9parer la forme et le contenu.\r\nSimplifier l'acc\u00e8s aux contenus.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Les contenus HTML sont mis en forme \u00e0 l'aide de styles CSS externalis\u00e9s.", 
        "solution": "Placer les styles CSS dans des fichiers externes appel\u00e9s avec les \u00e9l\u00e9ments LINK ou la r\u00e8gle @import dans un \u00e9l\u00e9ment STYLE. Ne pas placer les styles CSS directement entre les balises de l'\u00e9l\u00e9ment STYLE ou dans l'attribut style des \u00e9l\u00e9ments HTML. Le cas \u00e9ch\u00e9ant, mettre en place une validation dans l'interface d'\u00e9dition alertant l'utilisateur en cas de saisie d'un attribut style en mode source.", 
        "thema": "Pr\u00e9sentation", 
        "name": "74"
    }, 
    "12161": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque changement brusque de luminosit\u00e9 ou un effet de flash provoqu\u00e9 par une applet java a-t-il une fr\u00e9quence inf\u00e9rieure ou \u00e9gale \u00e0 3 par seconde ?", 
        "solution": "", 
        "thema": "Consultation", 
        "name": "13.16.4"
    }, 
    "19088": {
        "goal": "Permettre aux utilisateurs de distinguer les diff\u00e9rents tableaux de donn\u00e9es pr\u00e9sents dans une page.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser avec pr\u00e9caution des contenus identiques pour plusieurs \u00e9l\u00e9ments caption", 
        "solution": "Mettre un contenu diff\u00e9rent pour chaque \u00e9l\u00e9ment caption d'un tableau de donn\u00e9es.", 
        "thema": "HTML", 
        "name": "9"
    }, 
    "12162": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque contenu en mouvement, d\u00e9clench\u00e9 automatiquement, v\u00e9rifie-t-il une de ces conditions ?", 
        "solution": "", 
        "thema": "Consultation", 
        "name": "13.17.1"
    }, 
    "11909": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque cadre (balise frame) a-t-il un attribut title ?", 
        "solution": "", 
        "thema": "Cadres", 
        "name": "2.1.1"
    }, 
    "12163": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque contenu clignotant, d\u00e9clench\u00e9 automatiquement, v\u00e9rifie-t-il une de ces conditions ?", 
        "solution": "", 
        "thema": "Consultation", 
        "name": "13.17.2"
    }, 
    "11929": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, jusqu'\u00e0 150% de la taille de police par d\u00e9faut (ou 1.5em), le texte  et le texte en image sans effet de graisse v\u00e9rifie-t-il une de ces conditions (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Couleurs", 
        "name": "3.4.1"
    }, 
    "16260": {
        "goal": "Encourager les moteurs \u00e0 crawler le site quand n\u00e9cessaire.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le temps de rafraichissement indiqu\u00e9 dans le fichier sitemap est coh\u00e9rent avec la fr\u00e9quence de mise \u00e0 jour du site.", 
        "solution": "<div>Renseigner l'\u00e9l\u00e9ment changefreq du fichier sitemap.xml de mani\u00e8re coh\u00e9rente avec la fr\u00e9quence moyenne de mise \u00e0 jour du site (always, hourly, daily, weekly, monthly, yearly, never)</div>", 
        "thema": "Navigation", 
        "name": "60"
    }, 
    "19185": {
        "goal": "Eviter aux utilisateurs tout \u00e9v\u00e9nement d\u00e9clench\u00e9 automatiquement au bout d'un certain temps.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser la m\u00e9thode setTimeout avec pr\u00e9caution", 
        "solution": "Ne pas utiliser cette m\u00e9thode ou lui laisser la possibilit\u00e9 de mettre en pause ou de d\u00e9terminer le temps au bout duquel l'\u00e9v\u00e9nement sera d\u00e9clench\u00e9.", 
        "thema": "JS", 
        "name": "47"
    }, 
    "11933": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque m\u00e9dia temporel pr\u00e9-enregistr\u00e9 seulement audio a-t-il, si n\u00e9cessaire, une transcription textuelle (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.1.1"
    }, 
    "16261": {
        "goal": "Permettre aux moteurs d'indexer le num\u00e9ro de t\u00e9l\u00e9phone et l'adresse.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "L'adresse et le num\u00e9ro de t\u00e9l\u00e9phone de l'entreprise sont disponibles sous forme textuelle.", 
        "solution": "Indiquer sous forme de contenu textuel HTML l'adresse postale et le num\u00e9ro de t\u00e9l\u00e9phone de la soci\u00e9t\u00e9 ou de l'organisme, dans chaque page du site ou dans une page de type Contact.", 
        "thema": "Contenu", 
        "name": "19"
    }, 
    "12046": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque citation courte utilise-t-elle une balise q ?", 
        "solution": "", 
        "thema": "Structuration de l'information", 
        "name": "9.5.1"
    }, 
    "12387": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, pour chaque m\u00e9dia non temporel, l'information ne doit pas \u00eatre donn\u00e9e par la forme ou la position uniquement. Cette r\u00e8gle est-elle impl\u00e9ment\u00e9e de fa\u00e7on pertinente ?", 
        "solution": "", 
        "thema": "Pr\u00e9sentation de l'information", 
        "name": "10.15.4"
    }, 
    "16206": {
        "goal": "<div>Simplifier la lecture des titres par les moteurs.&nbsp;Forcer \u00e0 \u00e9crire des titres brefs et percutants.</div>", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le contenu de chaque \u00e9l\u00e9ment TITLE est inf\u00e9rieur ou \u00e9gal \u00e0 80 caract\u00e8res", 
        "solution": "Limiter \u00e0 80 caract\u00e8res au plus, espaces compris, le contenu de l'\u00e9l\u00e9ment TITLE. Mettre en place un automatisme dans le CMS tronquant les contenus des titres de page automatiquement g\u00e9n\u00e9r\u00e9s. Mettre en place un processus de validation de la longueur des titres de page saisis par les r\u00e9dacteurs, permettant de les alerter en cas d'erreurs et de corriger la saisie avant publication.", 
        "thema": "M\u00e9tadonn\u00e9es", 
        "name": "46"
    }, 
    "19275": {
        "goal": "Permettre l'association des \u00e9tiquettes avec les champs auxquelles elles se rapportent.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Utiliser l'attribut for pour l'\u00e9l\u00e9ment label", 
        "solution": "Ajouter un attribut for sur l'\u00e9l\u00e9ment label. Exemple&nbsp;: &lt;label for='champ-xxx'&gt;xxx&lt;/label&gt;", 
        "thema": "HTML", 
        "name": "72"
    }, 
    "16263": {
        "goal": "Simplifier l'indexation et le crawl.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Les URL des liens internes contiennent exclusivement des caract\u00e8res alphanum\u00e9riques ou consid\u00e9r\u00e9s comme s\u00fbrs.", 
        "solution": "<div>N'utiliser dans les URL de liens internes que les caract\u00e8res suivants :&nbsp;</div><div>chiffres de 0 \u00e0 9&nbsp;</div><div>Lettres de a \u00e0 z et de&nbsp;A \u00e0 Z&nbsp;</div><div>Caract\u00e8res $ - _ . + ! * ' ( ) ,&nbsp;&amp; / : ; = ? @&nbsp;#&nbsp;%&nbsp;[ ]&nbsp;</div><div>Par exemple, une rubrique libell\u00e9e \"\u00e9t\u00e9\" correspondra dans les url \u00e0 un r\u00e9pertoire \"ete\".</div>", 
        "thema": "Hyperliens", 
        "name": "35"
    }, 
    "11910": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque cadre en ligne (balise iframe) a-t-il un attribut title ?", 
        "solution": "", 
        "thema": "Cadres", 
        "name": "2.1.2"
    }, 
    "16223": {
        "goal": "Conserver le ciblage de la page.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Les liens externes sont en rapport avec les contenus ou services propos\u00e9s.", 
        "solution": "Ne faire figurer dans chaque page que des liens externes en rapport avec le contenu ou le service propos\u00e9 dans celle-ci.", 
        "thema": "Hyperliens", 
        "name": "36"
    }, 
    "12047": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, chaque bloc de citation utilise-t-il une balise blockquote ?", 
        "solution": "", 
        "thema": "Structuration de l'information", 
        "name": "9.5.2"
    }, 
    "12388": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque champ de type texte v\u00e9rifie-t-il, si n\u00e9cessaire, l\u2019une de ces conditions ?", 
        "solution": "", 
        "thema": "Formulaire", 
        "name": "11.14.2"
    }, 
    "16207": {
        "goal": "Mettre en avant les mots-clefs sp\u00e9cifiques de la page.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le contenu de l'\u00e9l\u00e9ment TITLE de chaque page ne commence pas par le nom du site.", 
        "solution": "Indiquer le nom de site apr\u00e8s la formulation identifiant le contenu propre de la page dans le contenu de l'\u00e9l\u00e9ment TITLE.", 
        "thema": "M\u00e9tadonn\u00e9es", 
        "name": "50"
    }, 
    "16267": {
        "goal": "Simplifier l'indexation.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le serveur envoie un code HTTP 404 pour les ressources non trouv\u00e9es.", 
        "solution": "Configurer vos CMS, framework, serveur pour qu'il renvoie un code HTTP 404 pour les ressources non trouv\u00e9es.", 
        "thema": "Serveur", 
        "name": "76"
    }, 
    "19173": {
        "goal": "Eviter aux utilisateurs un changement de contexte sans validation explicite de leur part.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser avec pr\u00e9caution le gestionnaire d'\u00e9v\u00e9nement onchange pour d\u00e9clencher la m\u00e9thode submit", 
        "solution": "Pr\u00e9voir un bouton de validation explicite que l'utilisateur devra d\u00e9clencher \u00e0 cette fin pour soumettre un formulaire.\r\nAlternativement, il est possible d'informer au pr\u00e9alable les utilisateurs de ce comportement.", 
        "thema": "JS", 
        "name": "35"
    }, 
    "16253": {
        "goal": "Eviter le contenu dupliqu\u00e9.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Les noms de domaine secondaires redirigent en 301 vers le nom de domaine principal.", 
        "solution": "Choisir un nom de domaine principal et rediriger tous les domaines alternatifs \u00e9ventuels vers ce domaine (via .htaccess sous Apache, par exemple).", 
        "thema": "Serveur", 
        "name": "78"
    }, 
    "16270": {
        "goal": "Renforcer les mots-cl\u00e9s.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Les libell\u00e9s du menu principal de navigation sont coh\u00e9rents avec le contenu des rubriques.", 
        "solution": "R\u00e9diger les libell\u00e9s des liens du menu de navigation vers les rubriques du site de mani\u00e8re \u00e0 refl\u00e9ter explicitement la nature et le contenu de chaque rubrique correspondante.", 
        "thema": "Navigation", 
        "name": "64"
    }, 
    "16271": {
        "goal": "", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Les pages non significatives sont interdites \u00e0 l'indexation", 
        "solution": "", 
        "thema": "Navigation", 
        "name": ""
    }, 
    "12048": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, les balises servant \u00e0 la pr\u00e9sentation de l'information ne doivent pas \u00eatre pr\u00e9sentes dans le code source des pages. Cette r\u00e8gle est-elle respect\u00e9e ?", 
        "solution": "", 
        "thema": "Pr\u00e9sentation de l'information", 
        "name": "10.1.1"
    }, 
    "16208": {
        "goal": "Mettre en avant les mots-clefs.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le contenu vis\u00e9 pour le r\u00e9f\u00e9rencement est mis en exergue (strong ou em).", 
        "solution": "Utiliser les \u00e9l\u00e9ments EM ou STRONG pour baliser les mots-cl\u00e9s correspondant au contenu propre de la page, quand ils ne sont pas pr\u00e9sents dans un \u00e9l\u00e9ment de titre de section.", 
        "thema": "Structure", 
        "name": "11"
    }, 
    "16272": {
        "goal": "", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "l'adresse du site est renseign\u00e9e dans les profils et comptes associ\u00e9s sur les m\u00e9dias sociaux", 
        "solution": "", 
        "thema": "Hyperliens", 
        "name": ""
    }, 
    "19094": {
        "goal": "Permettre la restitution de la nature des contenus (ici une liste) et de leurs caract\u00e9ristiques (ici le nombre d'item de cette liste) aux  utilisateurs qui ne per\u00e7oivent pas la mise en page originale.\r\nAinsi, la transmission uniquement visuelle d'une information s\u00e9mantique est \u00e9vit\u00e9e.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser avec pr\u00e9caution des \u00e9l\u00e9ments div successifs commen\u00e7ant chacun leur contenu par -, \u2013, \u2014, * ou \u2022", 
        "solution": "Utiliser les \u00e9l\u00e9ments ul et li pour baliser les listes.", 
        "thema": "HTML", 
        "name": "1"
    }, 
    "19073": {
        "goal": "Permettre \u00e0 l'utilisateur de pr\u00e9voir le comportement des liens qui ouvrent une nouvelle fen\u00eatre.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser avec pr\u00e9caution l'attribut target avec la valeur _blank pour l'\u00e9l\u00e9ment a", 
        "solution": "Ne pas utiliser l'attribut target ou&nbsp;: \r\nIndiquer le comportement du lien dans le libell\u00e9 du lien (contenu de l'\u00e9l\u00e9ment &lt;a&gt;) ou dans l'attribut title.\r\nExemple : &lt;a href=\"http://www.google.fr\" target=\"_blank\"&gt;Site de google (nouvelle fen\u00eatre)&lt;/a&gt;\r\nExemple : &lt;a href=\" http://www.google.fr\" target=\"_blank\" title=\"Site de google (nouvelle fen\u00eatre)\"&gt;Site de google&lt;/a&gt;\r\nAvertissement&nbsp;: le contenu de l'attribut title doit reprendre \u00e9galement le libell\u00e9 du lien. (exemple incorrect&nbsp;: &lt;a href=\" http://www.google.fr\" target=\"_blank\" title=\"nouvelle fen\u00eatre\"&gt;Site de google&lt;/a&gt;)", 
        "thema": "HTML", 
        "name": "3"
    }, 
    "12049": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, les attributs servant \u00e0 la pr\u00e9sentation de l'information ne doivent pas \u00eatre pr\u00e9sents dans le code source des pages. Cette r\u00e8gle est-elle respect\u00e9e ?", 
        "solution": "", 
        "thema": "Pr\u00e9sentation de l'information", 
        "name": "10.1.2"
    }, 
    "16209": {
        "goal": "<div>Structurer la page.&nbsp;Placer des mots-clefs aux endroits importants.</div>", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le contenu de chaque page est organis\u00e9 selon une structure de titres de section HTML.", 
        "solution": "Utiliser les \u00e9l\u00e9ments de titre de section H1, H2, H3, H4, H5, H6 pour donner \u00e0 chaque section et sous-section du contenu propre de la page un titre refl\u00e9tant son contenu.", 
        "thema": "Structure", 
        "name": "12"
    }, 
    "16226": {
        "goal": "Simplifier l'acc\u00e8s aux contenus.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "La page d'accueil du site n'est pas une page tunnel ou une introduction en flash.", 
        "solution": "Ne pas faire pr\u00e9c\u00e9der la page d'accueil d'une splash screen (fen\u00eatre d'attente).", 
        "thema": "Contenu", 
        "name": "17"
    }, 
    "19142": {
        "goal": "Permettre la restitution des \u00e9l\u00e9ments multim\u00e9dia au aides techniques.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser avec pr\u00e9caution la valeur transparent ou opaque pour l'attribut param de l'\u00e9l\u00e9ment object", 
        "solution": "Lorsque le contenu de l'\u00e9l\u00e9ment object doit pouvoir \u00eatre lu par une aide technique, utiliser la valeur \u201cwindow\u201c pour le param\u00e8tre wmode ou le supprimer. Lorsque le contenu est uniquement d\u00e9coratif vous pouvez laisser l'attribut wmode transparent ou opaque", 
        "thema": "HTML", 
        "name": "7"
    }, 
    "16229": {
        "goal": "Fournir des contenus indexables aux moteurs.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Si le site propose un fil de syndication, celui propose des contenus et pas seulement des liens.", 
        "solution": "Reproduire dans le fil RSS, associ\u00e9 \u00e0 chaque lien, le r\u00e9sum\u00e9 ou l'introduction des contenus correspondants.", 
        "thema": "Contenu", 
        "name": "23"
    }, 
    "19353": {
        "goal": "", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser une valeur d'attribut dir autre que ltr, rtl ou vide", 
        "solution": "", 
        "thema": "HTML", 
        "name": "8"
    }, 
    "12050": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, l'utilisation des espaces v\u00e9rifie-t-elle ces conditions ?", 
        "solution": "", 
        "thema": "Pr\u00e9sentation de l'information", 
        "name": "10.1.3"
    }, 
    "16210": {
        "goal": "<div>Renforcer les mots-clefs associ\u00e9s \u00e0 une page.</div><div><br></div>", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Les titres de section HTML comportent des mots clefs contenus dans la balise meta keywords.", 
        "solution": "R\u00e9diger chaque \u00e9l\u00e9ment H1, H2, H3, H4, H5, H6 de mani\u00e8re \u00e0 ce qu'il contienne au moins un mot-cl\u00e9 pr\u00e9sent dans le contenu de l'attribut content de l'\u00e9l\u00e9ment META name=\"keywords\".", 
        "thema": "Structure", 
        "name": "13"
    }, 
    "19295": {
        "goal": "Permettre \u00e0 l'utilisateur de personnaliser l'affichage de la page par l'utilisation d'une feuille de style personnelle qui se substitue \u00e0 celle pr\u00e9vue par le concepteur.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser l'\u00e9l\u00e9ment strike", 
        "solution": "Utiliser les feuilles de styles pour d\u00e9finir la position et les caract\u00e9ristiques visuelles des \u00e9l\u00e9ments. ", 
        "thema": "HTML", 
        "name": "56"
    }, 
    "11930": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, jusqu'\u00e0 120% de la taille de police par d\u00e9faut (ou 1.2em), le texte  et le texte en image en gras v\u00e9rifie-t-il une de ces conditions (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Couleurs", 
        "name": "3.4.2"
    }, 
    "11925": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, jusqu'\u00e0 150% de la taille de police par d\u00e9faut (ou 1.5em), le texte et le texte en image sans effet de graisse v\u00e9rifie-t-il une de ces conditions (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Couleurs", 
        "name": "3.3.1"
    }, 
    "12051": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, l'information reste-t-elle pr\u00e9sente lorsque les feuilles de styles sont d\u00e9sactiv\u00e9es ?", 
        "solution": "", 
        "thema": "Pr\u00e9sentation de l'information", 
        "name": "10.2.1"
    }, 
    "16211": {
        "goal": "<div>S\u00e9parer clairement les langues.&nbsp;Simplifier l'identification &nbsp;de la langue des contenus par les moteurs.</div>", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Chaque langue propos\u00e9e fait l'objet d'un domaine ou d'un sous-domaine diff\u00e9rent.", 
        "solution": "Si le site comporte plusieurs versions linguistiques, chacune est accessible via un nom de domaine ou de sous-domaine qui lui est propre.", 
        "thema": "Domaines", 
        "name": "28"
    }, 
    "19227": {
        "goal": "Permettre d'\u00e9viter la lecture automatique de son qu'il n'est pas possible d'arr\u00eater.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser l'\u00e9l\u00e9ment bgsound", 
        "solution": "Utiliser un syst\u00e8me de lecture des sons que les utilisateurs peuvent contr\u00f4ler avec la souris et avec le clavier.", 
        "thema": "HTML", 
        "name": "47"
    }, 
    "11924": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque m\u00e9dia non temporel v\u00e9hiculant une information, l'information ne doit pas \u00eatre donn\u00e9e uniquement par la couleur. Cette r\u00e8gle est-elle impl\u00e9ment\u00e9e de fa\u00e7on pertinente ?", 
        "solution": "", 
        "thema": "Couleurs", 
        "name": "3.2.6"
    }, 
    "12052": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, l'information reste-t-elle visible lorsque les images sont d\u00e9sactiv\u00e9es ?", 
        "solution": "", 
        "thema": "Pr\u00e9sentation de l'information", 
        "name": "10.2.2"
    }, 
    "16212": {
        "goal": "<div>Eviter le keyword-stuffing (bourrage de mots-cl\u00e9s).&nbsp;Renforcer les mots-clefs majeurs.</div>", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le contenu de chaque \u00e9l\u00e9ment meta keywords est inf\u00e9rieur ou \u00e9gal \u00e0 10 termes.", 
        "solution": "Limiter \u00e0 10 termes ou expressions au plus le contenu de l'attribut content de l'\u00e9l\u00e9ment META name=\"keywords\". Mettre en place dans le CMS un automatisme limitant le nombre de mots-cl\u00e9s ins\u00e9r\u00e9s dans l'attribut. Mettre en place dans l'interface d'\u00e9dition un processus de validation alertant le r\u00e9dacteur en cas de saisie de plus de 10 mots-cl\u00e9s et lui permettant de corriger avant publication.", 
        "thema": "M\u00e9tadonn\u00e9es", 
        "name": "43"
    }, 
    "19281": {
        "goal": "Permettre la restitution sans erreur du nombre d'\u00e9l\u00e9ments composant une liste.\r\nEviter l'utilisation d'\u00e9l\u00e9ments \u00e0 des fins de pr\u00e9sentation.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser d'\u00e9l\u00e9ment li vide", 
        "solution": "Supprimer les \u00e9l\u00e9ments &lt;li&gt; qui ne poss\u00e8dent pas de contenu. Utiliser les propri\u00e9t\u00e9s des feuilles de styles margin et padding pour d\u00e9terminer les \u00e9carts entres les diff\u00e9rents \u00e9l\u00e9ments.", 
        "thema": "HTML", 
        "name": "26"
    }, 
    "16254": {
        "goal": "Eviter le contenu dupliqu\u00e9.", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Les URL alternatives vers la page d'accueil font l'objet d'une redirection 301 vers l'URL principale.", 
        "solution": "Choisir une URL principale pour l'accueil et rediriger tous les domaines alternatifs \u00e9ventuels vers ce domaine (via .htaccess sous Apache, par exemple).", 
        "thema": "Serveur", 
        "name": "77"
    }, 
    "12053": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, l'information reste-t-elle visible lorsque les couleurs sont d\u00e9sactiv\u00e9es ?", 
        "solution": "", 
        "thema": "Pr\u00e9sentation de l'information", 
        "name": "10.2.3"
    }, 
    "16213": {
        "goal": "<div>Ne pas diluer les mots-clefs.&nbsp;Mettre en avant les mots-clefs propres \u00e0 la page.</div>", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "La m\u00e9ta keywords contient exclusivement des termes en rapport direct avec le contenu.", 
        "solution": "Renseigner le contenu de l'attribut content de l'\u00e9l\u00e9ment META name=\"keywords\" avec des mots-cl\u00e9s en rapport direct avec le contenu de la page.", 
        "thema": "M\u00e9tadonn\u00e9es", 
        "name": "44"
    }, 
    "19282": {
        "goal": "Permettre \u00e0 l'utilisateur de personnaliser l'affichage de la page par l'utilisation d'une feuille de style personnelle qui se substitue \u00e0 celle pr\u00e9vue par le concepteur.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser l'attribut link", 
        "solution": "Utiliser les feuilles de styles pour d\u00e9finir la position et les caract\u00e9ristiques visuelles des \u00e9l\u00e9ments. ", 
        "thema": "HTML", 
        "name": "34"
    }, 
    "11917": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque m\u00e9dia temporel v\u00e9hiculant une information, l'information ne doit pas \u00eatre donn\u00e9e uniquement par la couleur. Cette r\u00e8gle est-elle respect\u00e9e ?", 
        "solution": "", 
        "thema": "Couleurs", 
        "name": "3.1.5"
    }, 
    "19222": {
        "goal": "Permettre aux utilisateurs de distinguer les liens qui m\u00e8nent \u00e0 des adresses diff\u00e9rentes.", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser un contenu d'attribut alt identique pour plusieurs \u00e9l\u00e9ments area ayant un attribut href diff\u00e9rent", 
        "solution": "Indiquer dans chaque attribut alt un contenu permettant de comprendre la destination du lien.", 
        "thema": "HTML", 
        "name": "44"
    }, 
    "12054": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, l'information reste-t-elle compr\u00e9hensible lorsque les feuilles de styles sont d\u00e9sactiv\u00e9es ?", 
        "solution": "", 
        "thema": "Pr\u00e9sentation de l'information", 
        "name": "10.3.1"
    }, 
    "16214": {
        "goal": "<div>Motiver les moteurs \u00e0 visiter le site r\u00e9guli\u00e8rement.&nbsp;Am\u00e9liorer la fra\u00eecheur du contenu.</div>", 
        "checklist": {
            "id": 478, 
            "name": "SEO"
        }, 
        "explanation": "", 
        "description": "Le contenu du site est mis \u00e0 jour au moins une fois par mois.", 
        "solution": "Proc\u00e9der \u00e0 des mises \u00e0 jour r\u00e9guli\u00e8res du site.", 
        "thema": "Contenu", 
        "name": "16"
    }, 
    "11918": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque m\u00e9dia non temporel v\u00e9hiculant une information, l'information ne doit pas \u00eatre donn\u00e9e uniquement par la couleur. Cette r\u00e8gle est-elle respect\u00e9e ?", 
        "solution": "", 
        "thema": "Couleurs", 
        "name": "3.1.6"
    }, 
    "19135": {
        "goal": "Permettre l'identification et la distinction des diff\u00e9rents groupes form\u00e9s dans les \u00e9l\u00e9ments de formulaire.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser avec pr\u00e9caution un contenu identique pour plusieurs \u00e9l\u00e9ments legend", 
        "solution": "D\u00e9terminer un titre diff\u00e9rent pour chaque groupe form\u00e9 dans les \u00e9l\u00e9ments de formulaire.", 
        "thema": "HTML", 
        "name": "16"
    }, 
    "19147": {
        "goal": "Permettre la restitution de la nature des contenus (ici une liste de d\u00e9finition) aux  utilisateurs qui ne per\u00e7oivent pas la mise en page originale.\r\nEviter l'utilisation d'\u00e9l\u00e9ment en fonction de la mani\u00e8re dont ils sont restitu\u00e9s visuellement.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser avec pr\u00e9caution des \u00e9l\u00e9ments p successifs commen\u00e7ant chacun leur contenu par -, \u2013, \u2014, * ou \u2022", 
        "solution": "Utiliser les \u00e9l\u00e9ments ul et li pour baliser les listes.", 
        "thema": "HTML", 
        "name": "2"
    }, 
    "19079": {
        "goal": "Permettre \u00e0 l'utilisateur de pr\u00e9voir le comportement des liens qui ouvrent une nouvelle fen\u00eatre.", 
        "checklist": {
            "id": 567, 
            "name": "Accessibility Second step : risk management"
        }, 
        "explanation": "", 
        "description": "Utiliser avec pr\u00e9caution l'attribut target avec la valeur _blank pour l'\u00e9l\u00e9ment area", 
        "solution": "Ne pas utiliser l'attribut target _blank ou&nbsp;indiquer l'ouverture dans une nouvelle fen\u00eatre dans le contenu de l'attribut alt associ\u00e9 \u00e0 l'\u00e9l\u00e9ment area. Exemple : &lt;area alt='France \u2013 nouvelle fen\u00eatre'&gt;&lt;/area&gt;", 
        "thema": "HTML", 
        "name": "4"
    }, 
    "12055": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans les feuilles de styles du site Web, les unit\u00e9s non relatives (pt, pc, mm, cm, in) ne doivent pas \u00eatre utilis\u00e9es pour les types de m\u00e9dia screen, tv, handheld, projection. Cette r\u00e8gle est-elle respect\u00e9e ?", 
        "solution": "", 
        "thema": "Pr\u00e9sentation de l'information", 
        "name": "10.4.1"
    }, 
    "12381": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque media temporel pr\u00e9-enregistr\u00e9, ins\u00e9r\u00e9 via &lt;object&gt; ou &lt;embed&gt; et qui n\u00e9cessite une transcription textuelle v\u00e9rifie-t-il une de ces conditions (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Multim\u00e9dia", 
        "name": "4.1.4"
    }, 
    "11919": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque information v\u00e9hicul\u00e9e par la couleur d'un mot ou ensemble de mots, l'information ne doit pas \u00eatre donn\u00e9e uniquement par la couleur. Cette r\u00e8gle est-elle impl\u00e9ment\u00e9e de fa\u00e7on pertinente ?", 
        "solution": "", 
        "thema": "Couleurs", 
        "name": "3.2.1"
    }, 
    "11931": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, \u00e0 partir de 150% de la taille de police par d\u00e9faut (ou 1.5em), le texte  et le texte en image sans effet de graisse v\u00e9rifie-t-il une de ces conditions (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Couleurs", 
        "name": "3.4.3"
    }, 
    "12056": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans les feuilles de styles du site Web, les tailles de polices utilisent-elles uniquement des unit\u00e9s relatives ?", 
        "solution": "", 
        "thema": "Pr\u00e9sentation de l'information", 
        "name": "10.4.2"
    }, 
    "19285": {
        "goal": "Eviter aux utilisateurs un rechargement de la page qu'il ne pourrait pas ma\u00eetriser. ", 
        "checklist": {
            "id": 568, 
            "name": "Accessibility first step: error detection"
        }, 
        "explanation": "", 
        "description": "Ne pas utiliser l'\u00e9l\u00e9ment meta avec un attribut http-equiv ayant la valeur refresh", 
        "solution": "Eviter les rechargements automatiques des pages ou utiliser un syst\u00e8me de rechargement o\u00f9 les utilisateurs sont inform\u00e9s du fonctionnement et o\u00f9 ils peuvent d\u00e9sactiver ce rechargement avec la souris et avec le clavier.", 
        "thema": "HTML", 
        "name": "5"
    }, 
    "11864": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque image (balise img) a-t-elle un attribut alt ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.1.1"
    }, 
    "11865": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque zone (balise area) d'une image r\u00e9active a-t-elle un attribut alt ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.1.2"
    }, 
    "11866": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque bouton de formulaire (balise input avec l'attribut type=\"image\") a-t-il un attribut alt ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.1.3"
    }, 
    "11867": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque image applet (balise applet) a-t-elle un attribut alt ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.1.4"
    }, 
    "11868": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque image de d\u00e9coration (balise img) ayant un attribut alt, le contenu de cet attribut est-il vide (alt=\"\") ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.2.1"
    }, 
    "11869": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque zone non cliquable (balise area avec l'attribut nohref), non porteuse d'information et ayant un attribut alt, le contenu de cet attribut est-il vide (alt=\"\") ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.2.2"
    }, 
    "11870": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque image applet (balise applet) non porteuse d'information et ayant un attribut alt, le contenu de cet attribut est-il vide (alt=\"\") ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.2.3"
    }, 
    "11871": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque image objet (balise object avec l'attribut type=\"image/...\") non porteuse d'information, l'alternative textuelle entre &lt;object&gt; et &lt;/object&gt; est-elle vide ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.2.4"
    }, 
    "11872": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque image embarqu\u00e9e (balise embed avec l'attribut type=\"image/...\") non porteuse d'information v\u00e9rifie-t-elle une de ces conditions ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.2.5"
    }, 
    "11873": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque image porteuse d'information (balise img) ayant un attribut alt, le contenu de cet attribut est-il pertinent (hors cas particuliers) ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.3.1"
    }, 
    "11874": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque zone (balise area) d'une image r\u00e9active, porteuse d'information et ayant un attribut alt, le contenu de cet attribut est-il pertinent (hors cas particuliers) ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.3.2"
    }, 
    "11875": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque bouton associ\u00e9 \u00e0 une image (balise input avec l'attribut type=\"image\") ayant un attribut alt, le contenu de cet attribut est-il pertinent (hors cas particuliers) ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.3.3"
    }, 
    "11876": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque image applet (balise applet) porteuse d'information et ayant un attribut alt, le contenu de cet attribut est-il pertinent (hors cas particuliers) ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.3.4"
    }, 
    "11877": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque image objet (balise object avec l'attribut type=\"image/...\") porteuse d'information et ayant une alternative textuelle, l'alternative textuelle entre &lt;object&gt; et &lt;/object&gt; est-elle pertinente (hors cas particuliers) ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.3.5"
    }, 
    "11878": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque image embarqu\u00e9e (balise embed avec l'attribut type=\"image/...\") porteuse d'information et ayant une alternative textuelle, l'alternative textuelle entre &lt;noembed&gt; et &lt;/noembed&gt; est-elle pertinente (hors cas particuliers) ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.3.6"
    }, 
    "11879": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque image porteuse d'information et ayant une alternative textuelle, l'alternative textuelle est-elle courte et concise (hors cas particuliers) ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.3.7"
    }, 
    "11880": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque image (balise img) utilis\u00e9e comme CAPTCHA ou comme image-test, ayant un attribut alt, le contenu de cet attribut permet-il d'identifier la nature et la fonction de l'image ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.4.1"
    }, 
    "11881": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque zone (balise area) d'une image r\u00e9active, utilis\u00e9e comme CAPTCHA ou comme image-test, et ayant un attribut alt, le contenu de cet attribut permet-il d'identifier la nature et la fonction de l'image ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.4.2"
    }, 
    "11882": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque image (balise applet) utilis\u00e9e comme CAPTCHA ou comme image-test, ayant un attribut alt, le contenu de cet attribut permet-il d'identifier la nature et la fonction de l'image ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.4.3"
    }, 
    "11883": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque bouton associ\u00e9 \u00e0 une image (balise input avec l'attribut type=\"image\") utilis\u00e9e comme CAPTCHA ou comme image-test, ayant un attribut alt, le contenu de cet attribut permet-il d'identifier la nature et la fonction de l'image ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.4.4"
    }, 
    "11884": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque image objet (balise object avec l'attribut type=\"image/...\") utilis\u00e9e comme CAPTCHA ou comme image-test, et ayant une alternative textuelle, l'alternative textuelle entre &lt;object&gt; et &lt;/object&gt; permet-elle d'identifier la nature et la fonction de l'image ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.4.5"
    }, 
    "11885": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque image embarqu\u00e9e (balise embed avec l'attribut type=\"image/...\") utilis\u00e9e comme CAPTCHA ou comme image-test et ayant une alternative textuelle, l'alternative textuelle entre &lt;noembed&gt; et &lt;/noembed&gt; permet-elle d'identifier la nature et la fonction de l'image ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.4.6"
    }, 
    "11886": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque image (balises img, area, applet, object, embed) utilis\u00e9e comme CAPTCHA v\u00e9rifie-t-elle une des ces conditions ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.5.1"
    }, 
    "11887": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque bouton associ\u00e9 \u00e0 une image (balise input avec l'attribut type=\"image\") utilis\u00e9e comme CAPTCHA v\u00e9rifie-t-il une des ces conditions ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.5.2"
    }, 
    "11888": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque image porteuse d'information (balise img) qui n\u00e9cessite une description d\u00e9taill\u00e9e, v\u00e9rifie-t-elle une de ces conditions ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.6.1"
    }, 
    "11889": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque image object porteuse d'information (balise object avec l'attribut type=\"image/...\"), qui n\u00e9cessite une description d\u00e9taill\u00e9e, v\u00e9rifie-t-elle une de ces conditions ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.6.2"
    }, 
    "11890": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque image applet porteuse d'information (balise applet), qui n\u00e9cessite une description d\u00e9taill\u00e9e, v\u00e9rifie-t-elle une de ces conditions ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.6.3"
    }, 
    "11891": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque image embarqu\u00e9e porteuse d'information (balise embed), qui n\u00e9cessite une description d\u00e9taill\u00e9e, v\u00e9rifie-t-elle une de ces conditions ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.6.4"
    }, 
    "11892": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque bouton de formulaire de type image (balise input avec l'attribut type=\"image\", qui n\u00e9cessite une description d\u00e9taill\u00e9e, v\u00e9rifie-t-elle une de ces conditions ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.6.5"
    }, 
    "11893": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque image porteuse d'information (balise img ou input de type image) ayant une description d\u00e9taill\u00e9e v\u00e9rifie-t-elle une de ces conditions ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.7.1"
    }, 
    "11894": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque image objet (balise object avec l'attribut type=\"image/...\") ayant une description d\u00e9taill\u00e9e v\u00e9rifie-t-elle une des ces conditions ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.7.2"
    }, 
    "11895": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque image embarqu\u00e9e (balise embed avec l'attribut type=\"image/...\") ayant une description d\u00e9taill\u00e9e v\u00e9rifie-t-elle une de ces conditions ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.7.3"
    }, 
    "11896": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque image applet (balise applet) ayant une description d\u00e9taill\u00e9e v\u00e9rifie-t-elle une de ces conditions ?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.7.4"
    }, 
    "11897": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque image texte (balise img), en l'absence d'un m\u00e9canisme de remplacement, doit si possible \u00eatre remplac\u00e9e par du texte styl\u00e9. Cette r\u00e8gle est-elle respect\u00e9e (hors cas particuliers)?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.8.1"
    }, 
    "11898": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque image r\u00e9active (balise img ou object avec l'attribut usemap), chaque zone texte (balise area), en l'absence d'un m\u00e9canisme de remplacement, doit si possible \u00eatre remplac\u00e9e par du texte styl\u00e9. Cette r\u00e8gle est-elle respect\u00e9e (hors cas particuliers)?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.8.2"
    }, 
    "11899": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque balise form, chacun de ses boutons \"image texte\" (balise input avec l'attribut type=\"image\"), en l'absence d'un m\u00e9canisme de remplacement, doit si possible \u00eatre remplac\u00e9e par du texte styl\u00e9. Cette r\u00e8gle est-elle respect\u00e9e (hors cas particuliers)?", 
        "solution": "", 
        "thema": " Images", 
        "name": "1.8.3"
    }, 
    "15996": {
        "goal": "Faciliter la m\u00e9morisation et la saisie de l'URL du site.", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La longueur du nom de domaine fonctionnel est inf\u00e9rieure ou \u00e9gale \u00e0 30 caract\u00e8res.", 
        "solution": "", 
        "thema": "Identification               ", 
        "name": ""
    }, 
    "15997": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La syntaxe des URL est homog\u00e8ne sur l'ensemble du site", 
        "solution": "", 
        "thema": "Identification               ", 
        "name": ""
    }, 
    "15998": {
        "goal": "permet une interpr\u00e9tation correcte par les utilisateurs des donn\u00e9es et chiffres propos\u00e9s relatives \u00e0 l'audience et \u00e0 la fr\u00e9quentation", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les informations relatives \u00e0 l'audience et \u00e0 la fr\u00e9quentation du site sont accompagn\u00e9es de la p\u00e9riode couverte et du mode de mesure.", 
        "solution": "", 
        "thema": "Identification               ", 
        "name": ""
    }, 
    "15999": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La page d'accueil contient des \u00e9l\u00e9ments textuels facilitant le r\u00e9f\u00e9rencement par des moteurs.", 
        "solution": "", 
        "thema": "Identification               ", 
        "name": ""
    }, 
    "16000": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le site ne propose pas de contenus dupliqu\u00e9s", 
        "solution": "", 
        "thema": "Identification               ", 
        "name": ""
    }, 
    "16001": {
        "goal": "Favoriser l'identification imm\u00e9diate du contenu de la page quelque-soit le mode de restitution, notamment dans un lecteur d'\u00e9cran ou dans une liste de r\u00e9sultats de recherche", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les 65 premiers caract\u00e8res du titre de chaque page permettent d'en identifier le contenu.", 
        "solution": "", 
        "thema": "Identification               ", 
        "name": ""
    }, 
    "16002": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le code source des pages contient des liens relatifs vers l'auteur, les droits de reproduction, l'accueil et le plan du site", 
        "solution": "", 
        "thema": "Identification               ", 
        "name": ""
    }, 
    "16003": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les libell\u00e9s des \u00e9l\u00e9ments de formulaire sont coh\u00e9rents sur toutes les pages", 
        "solution": "", 
        "thema": "Alternatives                 ", 
        "name": ""
    }, 
    "16004": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Une alternative est propos\u00e9e aux iframes.", 
        "solution": "", 
        "thema": "Alternatives                 ", 
        "name": ""
    }, 
    "16005": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Une description \u00e9tendue correctement associ\u00e9e compl\u00e8te l'alternative textuelle des images complexes", 
        "solution": "", 
        "thema": "Alternatives                 ", 
        "name": ""
    }, 
    "16006": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Si un contenu est propos\u00e9 sous forme inaccessible, une version alternative accessible est mise \u00e0 disposition", 
        "solution": "", 
        "thema": "Alternatives                 ", 
        "name": ""
    }, 
    "16007": {
        "goal": "<ul><li>Permettre aux utilisateurs qui ne peuvent pas acc\u00e9der \u00e0 un contenu propos\u00e9 sous une forme accessible d'acc\u00e9der \u00e0 l'int\u00e9gralit\u00e9 de ce contenu sous une autre forme.</li><li>Permettre aux robots d'acc\u00e9der \u00e0 une 'information d\u00e9livr\u00e9e sous une forme qu'ils ne peuvent pas exploiter.&nbsp;</li></ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La version alternative d'un contenu en donne une information \u00e9quivalente", 
        "solution": "", 
        "thema": "Alternatives                 ", 
        "name": ""
    }, 
    "16008": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le site ne propose pas d'images cliquables c\u00f4t\u00e9 serveur", 
        "solution": "", 
        "thema": "Alternatives                 ", 
        "name": ""
    }, 
    "16009": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les contenus vid\u00e9o sont dot\u00e9s d'une description audio synchronis\u00e9e", 
        "solution": "", 
        "thema": "Alternatives                 ", 
        "name": ""
    }, 
    "16010": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Une limite sup\u00e9rieure est d\u00e9finie, affich\u00e9e et respect\u00e9e pour la longueur des alternatives textuelles des images", 
        "solution": "", 
        "thema": "Alternatives                 ", 
        "name": ""
    }, 
    "16011": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les liens et les contr\u00f4les de formulaires ne sont pas simul\u00e9s par des \u00e9v\u00e9nements javascript sur d'autres \u00e9l\u00e9ments", 
        "solution": "", 
        "thema": "Code", 
        "name": ""
    }, 
    "16012": {
        "goal": "Permettre de conserver des textes lisibles m\u00eame lorsque les styles CSS sont d\u00e9sactiv\u00e9s.", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Une couleur d'arri\u00e8re-plan est d\u00e9finie pour chaque zone de texte", 
        "solution": "", 
        "thema": "Code", 
        "name": ""
    }, 
    "16013": {
        "goal": "permettre aux utilisateurs de visualiser le code source et de signaler les erreurs perturbant sa consultation.", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le site n'emploie aucune technique destin\u00e9e \u00e0 bloquer ou g\u00eaner l'affichage et/ou la lecture du code source.", 
        "solution": "", 
        "thema": "Code", 
        "name": ""
    }, 
    "16014": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Si les messages envoy\u00e9s \u00e0 postmaster@domaine.extension et webmaster@domaine.extension ne sont pas trait\u00e9s, le serveur de mails le signale \u00e0 l'exp\u00e9diteur [VERIFIABLE][FORMULATION][VALEUR AJOUTEE]", 
        "solution": "", 
        "thema": "Contact                      ", 
        "name": ""
    }, 
    "16015": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Une r\u00e9ponse \u00e0 une demande d'information est envoy\u00e9e sous 5 jours ouvr\u00e9s.", 
        "solution": "", 
        "thema": "Contact                      ", 
        "name": ""
    }, 
    "16016": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Chaque page comporte une date de mise \u00e0 jour.", 
        "solution": "", 
        "thema": "Contenus", 
        "name": ""
    }, 
    "16017": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "L'organisation de chaque tableau complexe est explicit\u00e9e", 
        "solution": "", 
        "thema": "Tableaux                     ", 
        "name": ""
    }, 
    "16018": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le site ne comporte pas de syntaxe cryptique (Langage SMS...)", 
        "solution": "", 
        "thema": "Contenus", 
        "name": ""
    }, 
    "16019": {
        "goal": "<ul><li>Copier coller de contenus</li><li>Vitesse de lecture</li><li>Rendu audio</li><li>r\u00e9f\u00e9rencement<br></li></ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "L'interlettrage n'est r\u00e9alis\u00e9 que via les styles CSS", 
        "solution": "", 
        "thema": "Contenus", 
        "name": ""
    }, 
    "16020": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les fichiers en t\u00e9l\u00e9chargement sont propos\u00e9s dans au moins un format dont les sp\u00e9cifications sont publiques.", 
        "solution": "", 
        "thema": "Fichiers et multim\u00e9dia       ", 
        "name": ""
    }, 
    "16021": {
        "goal": "\u00e9viter les appels de pages contenant des caract\u00e8res de remplacement et les erreurs de fonctionnement li\u00e9es<br>Eviter les URL comprenant des caract\u00e8res du type %20", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les noms des fichiers propos\u00e9s sur le site ne comportent pas d'espaces ou de caract\u00e8res sp\u00e9ciaux", 
        "solution": "", 
        "thema": "Fichiers et multim\u00e9dia       ", 
        "name": ""
    }, 
    "16022": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Une limite sup\u00e9rieure est d\u00e9finie, affich\u00e9e et respect\u00e9e pour le poids des pages et les exceptions sont signal\u00e9es", 
        "solution": "", 
        "thema": "Fichiers et multim\u00e9dia       ", 
        "name": ""
    }, 
    "16023": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les contenus multim\u00e9dias non diffus\u00e9s en direct comportent des sous-titres synchronis\u00e9s", 
        "solution": "", 
        "thema": "Fichiers et multim\u00e9dia       ", 
        "name": ""
    }, 
    "16024": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les contenus multim\u00e9dias diffus\u00e9s en direct comportent des sous-titres synchronis\u00e9s", 
        "solution": "", 
        "thema": "Fichiers et multim\u00e9dia       ", 
        "name": ""
    }, 
    "16025": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les pages proposent un acc\u00e8s \u00e0 une information synth\u00e9tique pour les contenus sonores, visuels, anim\u00e9s et m\u00e9dias synchronis\u00e9s", 
        "solution": "", 
        "thema": "Fichiers et multim\u00e9dia       ", 
        "name": ""
    }, 
    "16026": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les donn\u00e9es de formulaires sont modifiables avant leur soumission finale", 
        "solution": "", 
        "thema": "Formulaires", 
        "name": ""
    }, 
    "16027": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Tous les hyperliens externes du site sont valides.", 
        "solution": "", 
        "thema": "Hyperliens                   ", 
        "name": ""
    }, 
    "16028": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "L'information principale est donn\u00e9e au d\u00e9but de chaque segment de texte.", 
        "solution": "", 
        "thema": "Hyperliens                   ", 
        "name": ""
    }, 
    "16029": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les hyperliens contenus dans les tableaux poss\u00e8dent un libell\u00e9 explicite.", 
        "solution": "", 
        "thema": "Hyperliens                   ", 
        "name": ""
    }, 
    "16030": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La version originale des contenus traduits est indiqu\u00e9e", 
        "solution": "", 
        "thema": "Internationalisation         ", 
        "name": ""
    }, 
    "16031": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "L'ordre de pr\u00e9sentation des \u00e9l\u00e9ments dans les blocs de navigation est identique sur toutes les pages", 
        "solution": "", 
        "thema": "Navigation", 
        "name": ""
    }, 
    "16032": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Chaque rubrique ou groupe de pages poss\u00e8de sa navigation propre", 
        "solution": "", 
        "thema": "Navigation", 
        "name": ""
    }, 
    "16033": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Sauf op\u00e9ration irr\u00e9versible sp\u00e9cifi\u00e9e, les boutons de navigation (pr\u00e9c\u00e9dent, suivant) permettent le d\u00e9placement dans l'historique des pages.", 
        "solution": "", 
        "thema": "Navigation", 
        "name": ""
    }, 
    "16034": {
        "goal": "<ul><li>Fournir aux utilisateurs des informations sur la navigation, la compatibilit\u00e9, les possibilit\u00e9s de navigation selon les outils et contextes de navigation.</li><li>Fournir des liens permettant de t\u00e9l\u00e9charger d'\u00e9ventuelles extensions n\u00e9cessaires \u00e0 la consultation des contenus</li><li>Expliquer la politique qualit\u00e9 et accessibilit\u00e9 adopt\u00e9e par les administrateurs du site</li></ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le site propose une page d'aide.", 
        "solution": "", 
        "thema": "Navigation", 
        "name": ""
    }, 
    "16035": {
        "goal": "Permettre aux utilisateurs de d\u00e9finir des conditions de consultation adapt\u00e9e \u00e0 leurs besoins", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le nombre de r\u00e9sultats par page du moteur de recherche interne est configurable par l'utilisateur", 
        "solution": "", 
        "thema": "Navigation", 
        "name": ""
    }, 
    "16036": {
        "goal": "R\u00e9duire le poids des pages", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le code HTML ne contient pas de commentaires (hors commentaires conditionnels)", 
        "solution": "", 
        "thema": "Serveur et Performances      ", 
        "name": ""
    }, 
    "16037": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Il est possible de naviguer au clavier dans un ordre logique dans les contenus mis \u00e0 jour via javascript", 
        "solution": "", 
        "thema": "Navigation", 
        "name": ""
    }, 
    "16038": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les contenus masqu\u00e9s qui doivent \u00eatre lus dans un lecteur d'\u00e9cran ne leur sont pas dissimul\u00e9s [DOUBLON-174]", 
        "solution": "", 
        "thema": "Navigation", 
        "name": ""
    }, 
    "16039": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le fichier .htaccess n'est pas utilis\u00e9.", 
        "solution": "", 
        "thema": "Serveur et Performances      ", 
        "name": ""
    }, 
    "16040": {
        "goal": "Ne pas perturber la foculalisation (\u00e0 l'\u00e9chelle du navigateur), ni la navigation au sein du site.", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La navigation sur le site ne provoque pas l'affichage d'alertes Javascript", 
        "solution": "", 
        "thema": "Navigation", 
        "name": ""
    }, 
    "16041": {
        "goal": "Limiter les appels \u00e0 la librairie GD", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Si des images sont g\u00e9n\u00e9r\u00e9es dynamiquement et r\u00e9utilis\u00e9e ult\u00e9rieurement, pr\u00e9f\u00e9rer cr\u00e9er et utiliser le fichier pour les fois suivantes", 
        "solution": "", 
        "thema": "", 
        "name": ""
    }, 
    "16042": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les coordonn\u00e9es du whois sont correctes.", 
        "solution": "", 
        "thema": "Contact                      ", 
        "name": ""
    }, 
    "16043": {
        "goal": "diff\u00e9rencier les pages (et leur contenu), sans devoir les afficher.", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Chaque page poss\u00e8de un titre diff\u00e9rent", 
        "solution": "", 
        "thema": "", 
        "name": ""
    }, 
    "16044": {
        "goal": "R\u00e9duire les transferts, optimiser la bande passante, acc\u00e9l\u00e9rer l'affichage.", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "G\u00e9rer convenablement la mise en cache de tout les composants de la page.", 
        "solution": "", 
        "thema": "Serveur et Performances      ", 
        "name": ""
    }, 
    "16045": {
        "goal": "Faciliter la lecture ; emp\u00eacher les retours \u00e0 la ligne disgracieux ; etc.", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Respecter les conventions typographiques de ponctuation dans la langue utilis\u00e9e.", 
        "solution": "", 
        "thema": "Contenus", 
        "name": ""
    }, 
    "16046": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les pages ne contiennent pas de pi\u00e8ges pour la navigation au clavier", 
        "solution": "", 
        "thema": "Navigation", 
        "name": ""
    }, 
    "16047": {
        "goal": "Garantir une lisibilit\u00e9 en cas de non affichage (d\u00e9sactivation, bas-d\u00e9bit...). Exemple : texte clair sur fond sombre, devient illisible si l'image ne se charge pas. Le terme \"garantie pour le Web\" est une traduction libre de \"web safe\" (palette de 6 couleurs).", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les images de fond sont doubl\u00e9es par une couleur garantie pour le Web.", 
        "solution": "", 
        "thema": "Pr\u00e9sentation                 ", 
        "name": ""
    }, 
    "16048": {
        "goal": "Faciliter le clic. Rend service \u00e0 tous les utilisateurs, mais surtout ceux soufrant de difficult\u00e9 visuelles ou de \"vis\u00e9e\" sur le lien. Exemple : les liens vers les pages d'articles vers le pied de page d'un blog (souvent \"1\", \"2\"...)", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La zone cliquable de l'hyperlien mesure au moins 2 caract\u00e8res (espaces compris, genre &nbsp;) ou 30px x 10px.", 
        "solution": "", 
        "thema": "Hyperliens                   ", 
        "name": ""
    }, 
    "16049": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Aucun changement de contexte n'est effectu\u00e9 sans en avertir l'utilisateur", 
        "solution": "", 
        "thema": "Navigation", 
        "name": ""
    }, 
    "16050": {
        "goal": "\u00c9viter le tracking automatique non sollicit\u00e9 en permettant aux internautes de choisir leur mode de navigation.", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Proposer aux internautes de participer \u00e0 l'am\u00e9lioration du site en \u00e9tant pris en compte dans les statistiques d'audience", 
        "solution": "", 
        "thema": "Identification               ", 
        "name": ""
    }, 
    "16051": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les mots de passe sont saisis sur des formulaires s\u00e9curis\u00e9s.", 
        "solution": "", 
        "thema": "S\u00e9curit\u00e9 et confidentialit\u00e9  ", 
        "name": ""
    }, 
    "16052": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les majuscules sont correctement employ\u00e9es", 
        "solution": "", 
        "thema": "Pr\u00e9sentation                 ", 
        "name": ""
    }, 
    "16053": {
        "goal": "Limiter la fatigue visuelle<br>Limiter la charge mentale<br>Limiter les risques de crise d'\u00e9pilepsie pour les personnes qui sont concern\u00e9es.", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le site n'impose pas de changement brusque de luminosit\u00e9.", 
        "solution": "", 
        "thema": "Pr\u00e9sentation                 ", 
        "name": ""
    }, 
    "16054": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les informations de pr\u00e9sentation sont regroup\u00e9es dans une ou plusieurs feuilles de style externes", 
        "solution": "", 
        "thema": "Pr\u00e9sentation                 ", 
        "name": ""
    }, 
    "16055": {
        "goal": "Fournir aux utilisateurs une trace \u00e9crite de la cr\u00e9ation ou de la modification de leur mot de passe", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le mot de passe est envoy\u00e9 par mail apr\u00e8s sa cr\u00e9ation ou sa modification", 
        "solution": "", 
        "thema": "S\u00e9curit\u00e9 et confidentialit\u00e9  ", 
        "name": ""
    }, 
    "16056": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le serveur est configur\u00e9 pour ne pas renvoyer d'informations sur les versions des logiciels et langages utilis\u00e9s.", 
        "solution": "", 
        "thema": "S\u00e9curit\u00e9 et confidentialit\u00e9  ", 
        "name": ""
    }, 
    "16057": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le serveur est configur\u00e9 pour ne pas renvoyer d'erreurs syst\u00e8me", 
        "solution": "", 
        "thema": "S\u00e9curit\u00e9 et confidentialit\u00e9  ", 
        "name": ""
    }, 
    "16058": {
        "goal": "Expliquer dans quelle mesure les donn\u00e9es transmises vont \u00eatre conserv\u00e9es<br>Renforcer la confiance<br>Donner des garanties \u00e0 l'utilisateur sur la non-r\u00e9utilisation des donn\u00e9es qu'il transmet", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La dur\u00e9e et le mode d'archivage des transactions sont sp\u00e9cifi\u00e9s", 
        "solution": "", 
        "thema": "S\u00e9curit\u00e9 et confidentialit\u00e9  ", 
        "name": ""
    }, 
    "16059": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le serveur envoie les informations relatives \u00e0 la politique de confidentialit\u00e9 et de respect de la vie priv\u00e9e.", 
        "solution": "", 
        "thema": "S\u00e9curit\u00e9 et confidentialit\u00e9  ", 
        "name": ""
    }, 
    "16060": {
        "goal": "Informer l'utilisateur sur la dur\u00e9e de vie des informations stock\u00e9es sur son ordinateur.", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La dur\u00e9e de vie des cookies est indiqu\u00e9e", 
        "solution": "", 
        "thema": "S\u00e9curit\u00e9 et confidentialit\u00e9  ", 
        "name": ""
    }, 
    "16061": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "L'objectif des cookies utilis\u00e9s est signal\u00e9", 
        "solution": "", 
        "thema": "S\u00e9curit\u00e9 et confidentialit\u00e9  ", 
        "name": ""
    }, 
    "16062": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le serveur ou le code des pages pr\u00e9cise la nature des contenus (pr\u00e9sence ou non de contenus \u00e0 caract\u00e8re sexuel, violent, etc).", 
        "solution": "", 
        "thema": "Serveur et Performances      ", 
        "name": ""
    }, 
    "16063": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le serveur envoie une page d'erreur interne 500 personnalis\u00e9e.", 
        "solution": "", 
        "thema": "Serveur et Performances      ", 
        "name": ""
    }, 
    "16064": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les appels aux feuilles de style sont plac\u00e9s avant les contenus", 
        "solution": "", 
        "thema": "Serveur et Performances      ", 
        "name": ""
    }, 
    "16065": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les informations de style sont plac\u00e9es dans des fichers externes aux pages", 
        "solution": "", 
        "thema": "Serveur et Performances      ", 
        "name": ""
    }, 
    "16066": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les appels de scripts ne sont pas dupliqu\u00e9s", 
        "solution": "", 
        "thema": "Serveur et Performances      ", 
        "name": ""
    }, 
    "16067": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les styles sont appel\u00e9s avec des liens et non via des imports", 
        "solution": "", 
        "thema": "Serveur et Performances      ", 
        "name": ""
    }, 
    "16068": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La date limite de consommation des denr\u00e9es p\u00e9rissables est indiqu\u00e9e. [NON REALISTE]", 
        "solution": "", 
        "thema": "E-Commerce                   ", 
        "name": ""
    }, 
    "16069": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La charge des frais de retour est indiqu\u00e9e.", 
        "solution": "", 
        "thema": "E-Commerce                   ", 
        "name": ""
    }, 
    "16070": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les archives de newsletter sont propos\u00e9es au format Web", 
        "solution": "", 
        "thema": "Newsletter                   ", 
        "name": ""
    }, 
    "16071": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le libell\u00e9 des liens pointant vers les fils de syndication en pr\u00e9cise le format", 
        "solution": "", 
        "thema": "Syndication                  ", 
        "name": ""
    }, 
    "16072": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le format des fils de syndication est sp\u00e9cifi\u00e9", 
        "solution": "", 
        "thema": "Syndication                  ", 
        "name": ""
    }, 
    "16073": {
        "goal": "<ul><li>Fournir aux utilisateurs un contenu ais\u00e9 \u00e0 comprendre.</li><li>Plus particuli\u00e8rement, \u00e9viter le recours \u00e0 des techniques avanc\u00e9es d'accessibilit\u00e9 des tableaux de donn\u00e9es dont le d\u00e9ploiement est difficile et dont le r\u00e9sultat reste difficilement exploitable par les utilisateurs de lecteurs d'\u00e9cran.</li></ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le site ne comporte pas de tableau de donn\u00e9es complexe", 
        "solution": "", 
        "thema": "Tableaux                     ", 
        "name": ""
    }, 
    "16074": {
        "goal": "\u00c9viter de servir de tremplin pour du r\u00e9f\u00e9rencement sauvage ou d'\u00eatre victime d'une attaque de blacklistage.", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les contenus post\u00e9s via des formulaires sont filtr\u00e9s pour \u00e9viter les injections.", 
        "solution": "", 
        "thema": "S\u00e9curit\u00e9 et confidentialit\u00e9  ", 
        "name": ""
    }, 
    "16075": {
        "goal": "R\u00e9duire le temps de rendu, le temps d'ex\u00e9cution des manipulation du DOM.", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le nombre d'\u00e9l\u00e9ments pr\u00e9sents dans le DOM est inf\u00e9rieur \u00e0 1500.", 
        "solution": "", 
        "thema": "", 
        "name": ""
    }, 
    "16076": {
        "goal": "Am\u00e9liorer les performances dans IE6.", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La propri\u00e9t\u00e9 CSS filter est peu ou pas utilis\u00e9e.", 
        "solution": "", 
        "thema": "", 
        "name": ""
    }, 
    "16077": {
        "goal": "Optimiser le temps de chargement.", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Minimiser le nombre de requ\u00eates HTTP", 
        "solution": "", 
        "thema": "Serveur et Performances      ", 
        "name": ""
    }, 
    "16078": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "\u00c9viter l'utilisation de la propri\u00e9t\u00e9 CSS \"expression\".", 
        "solution": "", 
        "thema": "", 
        "name": ""
    }, 
    "16079": {
        "goal": "\u00c9viter de faire des sprites trop gros qui seront moins bien compress\u00e9s. \u00c9viter un bug sur les grandes images dans Op\u00e9ra.", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La taille des sprites CSS ne doit pas d\u00e9passer 2000 x 2000 pixels.", 
        "solution": "", 
        "thema": "", 
        "name": ""
    }, 
    "16080": {
        "goal": "R\u00e9duire le poids donc acc\u00e9l\u00e9rer le t\u00e9l\u00e9chargement.", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les m\u00e9ta-informations des images sont supprim\u00e9es.", 
        "solution": "", 
        "thema": "", 
        "name": ""
    }, 
    "16081": {
        "goal": "Fournir un m\u00e9canisme unique de gestion de l'expiration (et non ETag + Expires). \u00c9viter un probl\u00e8me de cache lors de l'utilisation de plusieurs filer", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les ETag sont d\u00e9sactiv\u00e9s pour tous les composants.", 
        "solution": "", 
        "thema": "Serveur et Performances      ", 
        "name": ""
    }, 
    "16082": {
        "goal": "Facilit\u00e9 le boulot des moteurs de recherche et \u00e9viter que les personnes ayant bookmark\u00e9 une page se retrouve face \u00e0 une page 404", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Si le contenu change d'adresse, utilisation de redirection au niveau du server : 301 Permanent Redirect", 
        "solution": "", 
        "thema": "Navigation", 
        "name": ""
    }, 
    "16083": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les images sont identifiables par les daltoniens", 
        "solution": "", 
        "thema": "Alternatives                 ", 
        "name": ""
    }, 
    "16084": {
        "goal": "Faciliter leur saisie sur n'importe quel clavier. Et facilite la recherche des caract\u00e8res par les utilisateurs novices en informatiques. Eviter les caract\u00e8re sp\u00e9ciaux (avec accent, tr\u00e9ma, c\u00e9dille), arobase (@), di\u00e8se (#), esperluette (&amp;), slash et anti-slash, underscore.", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les mots de passe g\u00e9n\u00e9r\u00e9s ne comportent que des caract\u00e8res alphanum\u00e9riques sans caract\u00e8res sp\u00e9ciaux.", 
        "solution": "", 
        "thema": "S\u00e9curit\u00e9 et confidentialit\u00e9  ", 
        "name": ""
    }, 
    "16085": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Un mot de passe envoy\u00e9 par email doit \u00eatre chang\u00e9 \u00e0 la premi\u00e8re connexion au service", 
        "solution": "", 
        "thema": "S\u00e9curit\u00e9 et confidentialit\u00e9  ", 
        "name": ""
    }, 
    "16086": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le nom du ou des traducteurs est indiqu\u00e9", 
        "solution": "", 
        "thema": "Internationalisation         ", 
        "name": ""
    }, 
    "16087": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Si des mots-cl\u00e9s ou une description sont pr\u00e9sents dans l'ent\u00eate du code de la page, ils sont coh\u00e9rents avec le contenu du site.", 
        "solution": "", 
        "thema": "Identification               ", 
        "name": ""
    }, 
    "16088": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Minimiser le nombre de requ\u00eate DNS", 
        "solution": "", 
        "thema": "", 
        "name": ""
    }, 
    "16089": {
        "goal": "R\u00e9duire le nombre de requ\u00eate HTTP, am\u00e9liorer la compressibilit\u00e9 des fichiers.", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le site ne fait appel qu'\u00e0 une seule feuille de style provenant du domaine", 
        "solution": "", 
        "thema": "Serveur et Performances      ", 
        "name": ""
    }, 
    "16090": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les r\u00e9ponses AJAX peuvent \u00eatre mises en cache", 
        "solution": "", 
        "thema": "Serveur et Performances      ", 
        "name": ""
    }, 
    "16091": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Minimiser les acc\u00e8s au DOM par les scripts", 
        "solution": "", 
        "thema": "Serveur et Performances      ", 
        "name": ""
    }, 
    "16092": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Optimiser les s\u00e9lecteurs CSS", 
        "solution": "", 
        "thema": "Serveur et Performances      ", 
        "name": ""
    }, 
    "16093": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La date du serveur est correcte", 
        "solution": "", 
        "thema": "Serveur et Performances      ", 
        "name": ""
    }, 
    "16094": {
        "goal": "Aider l'internaute \u00e0 s\u00e9lectionner plusieurs options, via CTRL/CMD.", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les \u00e9l\u00e9ments select permettant la saisie simultan\u00e9e de plusieurs options pr\u00e9cisent \u00e0 l'utilisateur comment r\u00e9aliser cette action", 
        "solution": "", 
        "thema": "Formulaires", 
        "name": ""
    }, 
    "16095": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Aucune limite de temps exc\u00e9dant 20 heures n'est impos\u00e9e \u00e0 l'utilisateur", 
        "solution": "", 
        "thema": "Navigation", 
        "name": ""
    }, 
    "16096": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "L'attribut style n'est pas utilis\u00e9 par les scripts si des classes ou identifiants permettent d'appliquer un style externe.", 
        "solution": "", 
        "thema": "Pr\u00e9sentation                 ", 
        "name": ""
    }, 
    "16097": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "L'interlignage et l'espacement vertical des paragraphes est au moins de de 1.5 fois la taille de caract\u00e8res.", 
        "solution": "", 
        "thema": "Pr\u00e9sentation                 ", 
        "name": ""
    }, 
    "16098": {
        "goal": "Garder un look agr\u00e9able en cas de zoom sur la page, lorsque les caract\u00e8res sont agrandis (200 % au moins). Vaut aussi pour les images utilis\u00e9es avec la technique des portes coulissantes.", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les images de fond sont surdimensionn\u00e9es par rapport \u00e0 la zone qu'elle d\u00e9core", 
        "solution": "", 
        "thema": "Pr\u00e9sentation                 ", 
        "name": ""
    }, 
    "16099": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Un bouton permet d'afficher le mot de passe en clair lors d'une saisie [REALISTE]", 
        "solution": "", 
        "thema": "Formulaires", 
        "name": ""
    }, 
    "16100": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Ne pas r\u00e9duire les BP au E-commerce lorsqu'elles sont valables dans un contexte de service public et/ou non marchand en ligne.", 
        "solution": "", 
        "thema": "E-Commerce                   ", 
        "name": ""
    }, 
    "16101": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Hors d\u00e9monstration technique, le site ne limite pas son acc\u00e8s ou ses services \u00e0 un logiciel ou un mat\u00e9riel", 
        "solution": "", 
        "thema": "Contenus", 
        "name": ""
    }, 
    "16102": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le contenu des pages ne contient pas des suites de mots cl\u00e9s dissimul\u00e9s.", 
        "solution": "", 
        "thema": "Contenus", 
        "name": ""
    }, 
    "16103": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le titre du site pr\u00e9sent en en-t\u00eate (logo ou titre simple) poss\u00e8de un lien renvoyant \u00e0 la page d'accueil.", 
        "solution": "", 
        "thema": "Navigation", 
        "name": ""
    }, 
    "16104": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les donn\u00e9es personnelles issues des APIs tierces (Facebook, Twitter...) ne sont pas enregistr\u00e9es en base.", 
        "solution": "", 
        "thema": "S\u00e9curit\u00e9 et confidentialit\u00e9  ", 
        "name": ""
    }, 
    "16105": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les alternatives audio aux captchas sont audibles et compr\u00e9hensibles", 
        "solution": "", 
        "thema": "Alternatives                 ", 
        "name": ""
    }, 
    "16106": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le libell\u00e9 d'un hyperlien n'est pas l'hyperlien lui-m\u00eame mais \"du vrai texte\"", 
        "solution": "", 
        "thema": "Hyperliens                   ", 
        "name": ""
    }, 
    "16107": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "L'utilisateur est inform\u00e9 lors d'une saisie si CAPS LOCK est activ\u00e9", 
        "solution": "", 
        "thema": "Formulaires", 
        "name": ""
    }, 
    "16108": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Un lien vers le r\u00e9f\u00e9rentiel MonOpquast permet de v\u00e9rifier les bonnes pratiques mises en oeuvre", 
        "solution": "", 
        "thema": "", 
        "name": ""
    }, 
    "16109": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les courriels envoy\u00e9s par le site sont r\u00e9dig\u00e9s dans la langue de la page ayant d\u00e9clench\u00e9 l'envoi.", 
        "solution": "", 
        "thema": "E-Commerce                   ", 
        "name": ""
    }, 
    "16110": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Une URL pointant vers un sous domaine ne doit pas commencer par \"www\"", 
        "solution": "", 
        "thema": "Hyperliens                   ", 
        "name": ""
    }, 
    "16111": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "L'envoi du mot de passe vers le serveur doit se faire de mani\u00e8re s\u00e9curis\u00e9e \u00e0 l'aide d'un grain de sel unique", 
        "solution": "", 
        "thema": "S\u00e9curit\u00e9 et confidentialit\u00e9  ", 
        "name": ""
    }, 
    "16112": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Un contenu upload\u00e9 n'est pas publi\u00e9 sans confirmation", 
        "solution": "", 
        "thema": "Espaces publics              ", 
        "name": ""
    }, 
    "16113": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Une demande valable de retrait ou \u00e9dition de contenu est ex\u00e9cut\u00e9e sous 5 jours ouvr\u00e9s", 
        "solution": "", 
        "thema": "Contenus", 
        "name": ""
    }, 
    "16114": {
        "goal": "\u00e9viter les appels de pages contenant des caract\u00e8res de remplacement et les erreurs de fonctionnement li\u00e9es", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les URL internes du site ne contiennent pas d'espaces.", 
        "solution": "", 
        "thema": "Hyperliens                   ", 
        "name": ""
    }, 
    "16115": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les styles d\u00e9di\u00e9s ne masquent pas \u00e0 l'impression le nom de l'auteur, l'URL,&nbsp; la date ou les droits de copie et de r\u00e9utilisation.", 
        "solution": "", 
        "thema": "Pr\u00e9sentation                 ", 
        "name": ""
    }, 
    "16116": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les pages ne contiennent pas d'\u00e9l\u00e9ments select permettant la saisie simultan\u00e9e de plusieurs options", 
        "solution": "", 
        "thema": "Formulaires", 
        "name": ""
    }, 
    "16117": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Ne pas les imposer dans les scripts les noms des identifiants et classes mais permettre de renommer facilement. [VALEUR AJOUTEE]", 
        "solution": "", 
        "thema": "Code", 
        "name": ""
    }, 
    "16118": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les \u00e9l\u00e9ments contenu dans le fils de syndications ne sont pas une version tronqu\u00e9e des \u00e9l\u00e9ments associ\u00e9s en ligne.", 
        "solution": "", 
        "thema": "Syndication                  ", 
        "name": ""
    }, 
    "16119": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le site est compatible avec tous les navigateurs d\u00e9tenant au moins 5 % de part de march\u00e9", 
        "solution": "", 
        "thema": "Pr\u00e9sentation                 ", 
        "name": ""
    }, 
    "16120": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les plans d'acc\u00e8s sont compl\u00e9t\u00e9s par une description de la route \u00e0 suivre", 
        "solution": "", 
        "thema": "Contenus", 
        "name": ""
    }, 
    "16121": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Lorsque le site invite \u00e0 utiliser un agent utilisateur sp\u00e9cifique, il identifie cette invitation comme une publicit\u00e9", 
        "solution": "", 
        "thema": "", 
        "name": ""
    }, 
    "16122": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les symboles de ponctuations ne sont pas doubl\u00e9s ni tripl\u00e9s.", 
        "solution": "", 
        "thema": "Contenus", 
        "name": ""
    }, 
    "16123": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les points de suspension ne sont pas remplac\u00e9s par une succession de points.", 
        "solution": "", 
        "thema": "Contenus", 
        "name": ""
    }, 
    "16124": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les espaces ins\u00e9cables sont employ\u00e9s quand cela est n\u00e9cessaire.", 
        "solution": "", 
        "thema": "Contenus", 
        "name": ""
    }, 
    "16125": {
        "goal": "<ul><li>Permettre aux utilisateurs de d\u00e9tecter les contenus traduits automatiquement</li><li>Signaler l'existence d'une version originale</li><li>\u00c9mettre les r\u00e9serves n\u00e9cessaires au regard de la qualit\u00e9 de la traduction</li></ul>", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les pages dont le contenu est issu d'une traduction automatique sont signal\u00e9es comme telles", 
        "solution": "", 
        "thema": "Internationalisation         ", 
        "name": ""
    }, 
    "16126": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "les messages d'erreur de saisie de formulaires sont munis d'\u00e9tiquettes correspondants aux champs en erreur.", 
        "solution": "", 
        "thema": "Formulaires", 
        "name": ""
    }, 
    "16127": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le type de m\u00e9dia des feuilles de style est correctement renseign\u00e9 dans le code source", 
        "solution": "", 
        "thema": "Code", 
        "name": ""
    }, 
    "16128": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le contenu de la page restituable \u00e0 l'utilisateur ne contient que des donn\u00e9es qui lui sont destin\u00e9es", 
        "solution": "", 
        "thema": "Code", 
        "name": ""
    }, 
    "16129": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les pages contiennent des liens transversaux (alternatives \u00e0 la navigation par les menus).", 
        "solution": "", 
        "thema": "Contenus", 
        "name": ""
    }, 
    "16130": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Il y a des facilit\u00e9s d'\u00e9change et d'appropriation des pages (impression du document dans un template, fonctions d'interactivit\u00e9, contact pour laisser des commentaires...)", 
        "solution": "", 
        "thema": "Contenus", 
        "name": ""
    }, 
    "16131": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les mises \u00e0 jour sont signal\u00e9es (d'une mani\u00e8re pertinente par rapport au contexte)", 
        "solution": "", 
        "thema": "Contenus", 
        "name": ""
    }, 
    "16132": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "L'auteur de chaque article est identifiable", 
        "solution": "", 
        "thema": "Contact                      ", 
        "name": ""
    }, 
    "16133": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le site ne change pas la page d'accueil par d\u00e9faut de l'utilisateur sans son consentement.", 
        "solution": "", 
        "thema": "S\u00e9curit\u00e9 et confidentialit\u00e9  ", 
        "name": ""
    }, 
    "16134": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le site ne s'ajoute pas aux favoris de l'utilisateur sans son consentement.", 
        "solution": "", 
        "thema": "S\u00e9curit\u00e9 et confidentialit\u00e9  ", 
        "name": ""
    }, 
    "16135": {
        "goal": "Permettre aux utilisateurs de poster les formulaires en utilisant le clavier.", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La possibilit\u00e9 d'envoyer un formulaire \u00e0 l'aide de la touche entr\u00e9e n'est pas alt\u00e9r\u00e9e.", 
        "solution": "", 
        "thema": "Formulaires", 
        "name": ""
    }, 
    "16136": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le site se limite \u00e0 un seul fichier de script provenant du domaine", 
        "solution": "", 
        "thema": "Serveur et Performances      ", 
        "name": ""
    }, 
    "16137": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "le titre cliquable d'une page est associ\u00e9 \u00e0 un extrait dans le r\u00e9sultat d'une recherche, dans un flux RSS restreint, dans une liste de pages", 
        "solution": "", 
        "thema": "Contenus", 
        "name": ""
    }, 
    "16138": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les styles et contenus d\u00e9di\u00e9s aux terminaux mobiles permettent un rendu sans double scroll", 
        "solution": "", 
        "thema": "Pr\u00e9sentation                 ", 
        "name": ""
    }, 
    "16139": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le poids des pages est compris entre 50 ko et 100 ko pour les terminaux mobiles", 
        "solution": "", 
        "thema": "", 
        "name": ""
    }, 
    "16140": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Toutes les pages indiquent le lien entre le site et une organisation \u00ab&nbsp;m\u00e8re&nbsp;\u00bb  au sein de laquelle travaillent des experts du domaine.", 
        "solution": "", 
        "thema": "", 
        "name": ""
    }, 
    "16141": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Des r\u00e9f\u00e9rences externes de confiance (par exemple une citation ou un lien vers une r\u00e9f\u00e9rence) l\u00e9gitiment les informations pr\u00e9sent\u00e9es et/ou leurs auteurs.", 
        "solution": "", 
        "thema": "", 
        "name": ""
    }, 
    "16142": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les objectifs du site et le(s) public(s) cible(s) auquel il est destin\u00e9 sont clairement exprim\u00e9s.", 
        "solution": "", 
        "thema": "", 
        "name": ""
    }, 
    "16143": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le design g\u00e9n\u00e9ral du site est en coh\u00e9rence avec son objectif.", 
        "solution": "", 
        "thema": "", 
        "name": ""
    }, 
    "16144": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les maintenances et mises \u00e0 jour du site et/ou de son contenu sont syst\u00e9matiquement communiqu\u00e9es.", 
        "solution": "", 
        "thema": "", 
        "name": ""
    }, 
    "16145": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le site n'affiche pas ou peu d'encarts publicitaires (seulement si elles font sens par rapport au sujet trait\u00e9).", 
        "solution": "", 
        "thema": "", 
        "name": ""
    }, 
    "16146": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le site ne contient pas ou tr\u00e8s peu d'erreurs de tous types (script, lien bris\u00e9s, grammaire et orthographe...). [GENERIQUE]", 
        "solution": "", 
        "thema": "", 
        "name": ""
    }, 
    "16147": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les termes et les conditions d'utilisation du site et de ses contenus sont clairement d\u00e9finis. [DOUBLON - 235]", 
        "solution": "", 
        "thema": "", 
        "name": ""
    }, 
    "16148": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les droits de propri\u00e9t\u00e9 intellectuelle associ\u00e9s aux diff\u00e9rentes parties ou contenus du site sont syst\u00e9matiquement pr\u00e9cis\u00e9s (surtout s'il s'agit de contenus ouverts).[DOUBLON-58]", 
        "solution": "", 
        "thema": "", 
        "name": ""
    }, 
    "16149": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La politique de confidentialit\u00e9 des donn\u00e9es est clairement expliqu\u00e9e. [DOUBLON-210]", 
        "solution": "", 
        "thema": "", 
        "name": ""
    }, 
    "16150": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Si le site a une vocation internationale, il prend en consid\u00e9ration les param\u00e8tres r\u00e9gionaux des pays concern\u00e9s (format des dates et des nombres, formats d'impression, variantes orthographiques li\u00e9s \u00e0 l'association d'une langue et d'un pays, format des bibliographies, l'utilisation des lettres capitales, les r\u00e8gles de tri, les abr\u00e9viations et les conventions d'\u00e9criture, les acronymes...).", 
        "solution": "", 
        "thema": "", 
        "name": ""
    }, 
    "16151": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Si le site a une vocation internationale, il prend en consid\u00e9ration les param\u00e8tres culturels des pays concern\u00e9s tels que les images et les couleurs utilis\u00e9es ou la densit\u00e9 des textes affich\u00e9s.", 
        "solution": "", 
        "thema": "", 
        "name": ""
    }, 
    "16152": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Si le site propose une interface et/ou des contenus en plusieurs langues, l'utilisateur peut d\u00e9finir ses pr\u00e9f\u00e9rences linguistiques pour adapter le site \u00e0 ses comp\u00e9tences.", 
        "solution": "", 
        "thema": "Internationalisation         ", 
        "name": ""
    }, 
    "16153": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La langue affich\u00e9e correspond \u00e0 celle mentionn\u00e9e par l'agent utilisateur [DOUBLON-218]", 
        "solution": "", 
        "thema": "Internationalisation         ", 
        "name": ""
    }, 
    "16154": {
        "goal": "Permettre aux utilisateurs \u00e9quip\u00e9s de lecteurs d'\u00e9cran ou aux outils d'indexation d'acc\u00e9der aux contenus de la page dans la langue de celle-ci et non dans une autre langue.", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les titres, libell\u00e9s et contenus alternatifs sont traduits dans la langue de la page.", 
        "solution": "", 
        "thema": "Internationalisation         ", 
        "name": ""
    }, 
    "16155": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La langue et le pays de l'utilisateur sont dissoci\u00e9s (ex: Suisse). Les langues ne sont pas affich\u00e9es par l'interm\u00e9diaire d'un drapeau.", 
        "solution": "", 
        "thema": "Internationalisation         ", 
        "name": ""
    }, 
    "16156": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le site communique clairement sur les standards d'accessibilit\u00e9 qu'il a choisit d'impl\u00e9menter.[DOUBLON -432]", 
        "solution": "", 
        "thema": "", 
        "name": ""
    }, 
    "16157": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Lorsque plusieurs moyens de contact du m\u00eame type sont propos\u00e9s, une distinction est pr\u00e9cis\u00e9e", 
        "solution": "", 
        "thema": "Contact                      ", 
        "name": ""
    }, 
    "16158": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le site propos\u00e9 une favicon adapt\u00e9e au p\u00e9riph\u00e9rique employ\u00e9.", 
        "solution": "", 
        "thema": "Identification               ", 
        "name": ""
    }, 
    "16159": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les objectifs du site sont pr\u00e9sents et pertinents.", 
        "solution": "", 
        "thema": "", 
        "name": ""
    }, 
    "16160": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les appels \u00e0 l'action vers les objectifs du site sont pr\u00e9sents et pertinents. [PRECISER]", 
        "solution": "", 
        "thema": "", 
        "name": ""
    }, 
    "16161": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Un suivi des statistiques permet au propri\u00e9taire du site de consulter le taux de conversion des objectifs.", 
        "solution": "", 
        "thema": "", 
        "name": ""
    }, 
    "16162": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les informations relatives \u00e0 la zone de livraison des produits ou de r\u00e9alisation des services sont envoy\u00e9s par e-mail dans les 60 minutes suivant la validation [DOUBLON-260]", 
        "solution": "", 
        "thema": "E-Commerce                   ", 
        "name": ""
    }, 
    "16163": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "La conversion d'une image au format \"jpeg\" vers le format \"png\" ne produit pas un fichier de poids inf\u00e9rieur.", 
        "solution": "", 
        "thema": "Serveur et Performances      ", 
        "name": ""
    }, 
    "16164": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Le serveur envoie une page d'autorisation 401 personnalis\u00e9e.", 
        "solution": "", 
        "thema": "Serveur et Performances      ", 
        "name": ""
    }, 
    "16165": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les sprites css ne contiennent pas d'images non utilis\u00e9es", 
        "solution": "", 
        "thema": "Serveur et Performances      ", 
        "name": ""
    }, 
    "16166": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Si le site propose un moteur de recherche th\u00e9matique, un plugin de recherche est disponible", 
        "solution": "", 
        "thema": "Contenus", 
        "name": ""
    }, 
    "16167": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les syst\u00e8mes de votes, notes et sondages pr\u00e9cisent le nombre de votants, la p\u00e9riode et le mode de mesure", 
        "solution": "", 
        "thema": "Contenus", 
        "name": ""
    }, 
    "16168": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les liens affich\u00e9s sous forme d'url sont explicites", 
        "solution": "", 
        "thema": "Hyperliens                   ", 
        "name": ""
    }, 
    "16169": {
        "goal": "", 
        "checklist": {
            "id": 11, 
            "name": "Qualit\u00e9 Web - Opquast V2"
        }, 
        "explanation": "", 
        "description": "Les images CSS sont regroup\u00e9es dans un seul sprite", 
        "solution": "", 
        "thema": "", 
        "name": ""
    }, 
    "12074": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque page Web, chaque bloc de texte v\u00e9rifie-t-il une de ces conditions ?", 
        "solution": "", 
        "thema": "Pr\u00e9sentation de l'information", 
        "name": "10.12.2"
    }, 
    "11911": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque cadre (balise frame) ayant un attribut title, le contenu de cet attribut est-il pertinent ?", 
        "solution": "", 
        "thema": "Cadres", 
        "name": "2.2.1"
    }, 
    "11927": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, \u00e0 partir de 150% de la taille de police par d\u00e9faut (ou 1.5em), le texte  et le texte en image sans effet de graisse v\u00e9rifie-t-il une de ces conditions (hors cas particuliers) ?", 
        "solution": "", 
        "thema": "Couleurs", 
        "name": "3.3.3"
    }, 
    "12077": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, pour chaque image ou ensemble d'image, l'information ne doit pas \u00eatre donn\u00e9e uniquement par la forme ou la position. Cette r\u00e8gle est-elle respect\u00e9e ?", 
        "solution": "", 
        "thema": "Pr\u00e9sentation de l'information", 
        "name": "10.14.2"
    }, 
    "12078": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, pour chaque m\u00e9dia temporel, l'information ne doit pas \u00eatre donn\u00e9e uniquement par la forme ou la position. Cette r\u00e8gle est-elle respect\u00e9e ?", 
        "solution": "", 
        "thema": "Pr\u00e9sentation de l'information", 
        "name": "10.14.3"
    }, 
    "12079": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque page Web, pour chaque m\u00e9dia non temporel, l'information ne doit pas \u00eatre donn\u00e9e uniquement par la forme ou la position. Cette r\u00e8gle est-elle respect\u00e9e ?", 
        "solution": "", 
        "thema": "Pr\u00e9sentation de l'information", 
        "name": "10.14.4"
    }, 
    "12080": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque champ de formulaire (balise input de type text, password, checkbox, radio, file ou balises textarea et select), v\u00e9rifie-t-il une de ces conditions ?", 
        "solution": "", 
        "thema": "Formulaire", 
        "name": "11.1.1"
    }, 
    "11912": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque cadre en ligne (balise iframe) ayant un attribut title, le contenu de cet attribut est-il pertinent ?", 
        "solution": "", 
        "thema": "Cadres", 
        "name": "2.2.2"
    }, 
    "12082": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque \u00e9tiquette (balise label) associ\u00e9e \u00e0 un champ de formulaire (balise input de type text, password, checkbox, radio, file ou balises textarea et select) v\u00e9rifie-t-elle ces conditions ?", 
        "solution": "", 
        "thema": "Formulaire", 
        "name": "11.1.3"
    }, 
    "12083": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque \u00e9tiquette (balise label) permet-elle de conna\u00eetre la fonction exacte du champ de formulaire (balise input de type text, password, checkbox, radio, file ou balises textarea et select) auquel elle est associ\u00e9e ?", 
        "solution": "", 
        "thema": "Formulaire", 
        "name": "11.2.1"
    }, 
    "12084": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque attribut title permet-il de conna\u00eetre la fonction exacte du champ de formulaire (balise input de type text, password, checkbox, radio, file ou balises textarea et select) auquel il est associ\u00e9 ?", 
        "solution": "", 
        "thema": "Formulaire", 
        "name": "11.2.2"
    }, 
    "12085": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque \u00e9tiquette associ\u00e9e \u00e0 un champ de formulaire ayant la m\u00eame fonction et r\u00e9p\u00e9t\u00e9s plusieurs fois dans une m\u00eame page est-elle coh\u00e9rente ?", 
        "solution": "", 
        "thema": "Formulaire", 
        "name": "11.3.1"
    }, 
    "12086": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque \u00e9tiquette associ\u00e9e \u00e0 un champ de formulaire ayant la m\u00eame fonction et r\u00e9p\u00e9t\u00e9s dans un ensemble de page est-elle coh\u00e9rente ?", 
        "solution": "", 
        "thema": "Formulaire", 
        "name": "11.3.2"
    }, 
    "11913": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque mot ou ensemble de mots dont la mise en couleur est porteuse d'information, l'information ne doit pas \u00eatre donn\u00e9e uniquement par la couleur. Cette r\u00e8gle est-elle respect\u00e9e ?", 
        "solution": "", 
        "thema": "Couleurs", 
        "name": "3.1.1"
    }, 
    "12088": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque formulaire, les informations de m\u00eame nature sont-elles regroup\u00e9es via une balise fieldset, si n\u00e9cessaire ?", 
        "solution": "", 
        "thema": "Formulaire", 
        "name": "11.5.1"
    }, 
    "12089": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque regroupement de champs de formulaire (balise fieldset) est-elle suivie dans le code source par une l\u00e9gende (balise legend) ?", 
        "solution": "", 
        "thema": "Formulaire", 
        "name": "11.6.1"
    }, 
    "12090": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque formulaire, chaque l\u00e9gende (balise legend) associ\u00e9e \u00e0 un groupement de champs de formulaire (balise fieldset) est-elle pertinente ?", 
        "solution": "", 
        "thema": "Formulaire", 
        "name": "11.7.1"
    }, 
    "12091": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque formulaire, pour chaque liste de choix (balise select), les items sont-ils regroup\u00e9s avec une balise optgroup, si n\u00e9cessaire ?", 
        "solution": "", 
        "thema": "Formulaire", 
        "name": "11.8.1"
    }, 
    "12092": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque liste de choix (balise select), chaque regroupement d'items de liste (balise optgroup) poss\u00e8de-t-il un attribut label ?", 
        "solution": "", 
        "thema": "Formulaire", 
        "name": "11.8.2"
    }, 
    "11914": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque indication de couleur donn\u00e9e par un texte, l'information ne doit pas \u00eatre donn\u00e9e uniquement par la couleur. Cette r\u00e8gle est-elle respect\u00e9e ?", 
        "solution": "", 
        "thema": "Couleurs", 
        "name": "3.1.2"
    }, 
    "12094": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Dans chaque formulaire, l'intitul\u00e9 de chaque bouton v\u00e9rifie-t-il une de ces conditions ?", 
        "solution": "", 
        "thema": "Formulaire", 
        "name": "11.9.1"
    }, 
    "12064": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque lien dans un texte signal\u00e9 par la couleur uniquement v\u00e9rifie-t-il ces conditions ?", 
        "solution": "", 
        "thema": "Pr\u00e9sentation de l'information", 
        "name": "10.7.3"
    }, 
    "12096": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque formulaire, les erreurs de saisie sont-elles indiqu\u00e9es de mani\u00e8re pertinente ?", 
        "solution": "", 
        "thema": "Formulaire", 
        "name": "11.10.2"
    }, 
    "12097": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque formulaire, pour chaque champ obligatoire, le type de donn\u00e9e et/ou de format est-il indiqu\u00e9, si n\u00e9cessaire ?", 
        "solution": "", 
        "thema": "Formulaire", 
        "name": "11.10.3"
    }, 
    "12098": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque formulaire, pour chaque erreur de saisie, les types et les formats de donn\u00e9es sont-ils sugg\u00e9r\u00e9s, si n\u00e9cessaire ?", 
        "solution": "", 
        "thema": "Formulaire", 
        "name": "11.11.1"
    }, 
    "11915": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque image pr\u00e9sente dans le code source v\u00e9hiculant une information, l'information ne doit pas \u00eatre donn\u00e9e uniquement par la couleur. Cette r\u00e8gle est-elle respect\u00e9e ?", 
        "solution": "", 
        "thema": "Couleurs", 
        "name": "3.1.3"
    }, 
    "12100": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque formulaire, la saisie des donn\u00e9es \u00e0 caract\u00e8re financier, juridique ou personnelle v\u00e9rifie-t-elle une de ces conditions ?", 
        "solution": "", 
        "thema": "Formulaire", 
        "name": "11.12.1"
    }, 
    "12101": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque formulaire, la suppression des donn\u00e9es \u00e0 caract\u00e8re financier, juridique ou personnelle v\u00e9rifie-t-elle une de ces conditions ?", 
        "solution": "", 
        "thema": "Formulaire", 
        "name": "11.12.2"
    }, 
    "12102": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque formulaire, la saisie des donn\u00e9es v\u00e9rifie-t-elle une de ces conditions ?", 
        "solution": "", 
        "thema": "Formulaire", 
        "name": "11.13.1"
    }, 
    "12103": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque formulaire, la suppression des donn\u00e9es v\u00e9rifie-t-elle une de ces conditions ?", 
        "solution": "", 
        "thema": "Formulaire", 
        "name": "11.13.2"
    }, 
    "12104": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Chaque formulaire v\u00e9rifie-t-il, si n\u00e9cessaire, l'une de ces conditions ?", 
        "solution": "", 
        "thema": "Formulaire", 
        "name": "11.14.1"
    }, 
    "11916": {
        "goal": "", 
        "checklist": {
            "id": 425, 
            "name": "Accessiweb 2.1 D\u00e9ploy\u00e9e"
        }, 
        "explanation": "", 
        "description": "Pour chaque propri\u00e9t\u00e9 CSS d\u00e9terminant une couleur et v\u00e9hiculant une information, l'information ne doit pas \u00eatre donn\u00e9e par la couleur uniquement. Cette r\u00e8gle est-elle respect\u00e9e ?", 
        "solution": "", 
        "thema": "Couleurs", 
        "name": "3.1.4"
    }, 
    "10058": {
        "goal": "<ul><li><h5>1.1.1 : Contenu non textuel : (A)</h5><br />Rendre le contenu non textuel accessible sous forme d'une alternative textuelle exploitable quel que soit le mode de perception de l'utilisateur (visuel, auditif, tactile).<br><br>Le contenu des \u00e9l\u00e9ments non textuels ne sera pas perceptible pour diff\u00e9rentes cat\u00e9gories d'utilisateurs tels que :<br><br><ul><li>Les personnes handicap\u00e9es visuelles acc\u00e9dant au site via la synth\u00e8se vocale d'un lecteur d'\u00e9cran,</li><li>Les utilisateurs ayant d\u00e9sactiv\u00e9 l'affichage des \u00e9l\u00e9ments graphiques ou multim\u00e9dias, pour r\u00e9duire notamment les temps de t\u00e9l\u00e9chargement des pages en bas d\u00e9bit.<br></li></ul><br>La pr\u00e9sence d'alternatives textuelles aux contenus non textuels permet \u00e9galement \u00e0 des robots d'indexation d'en exploiter l'information, ou \u00e0 des traducteurs automatiques d'en traduire le sens.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Certaines images ne sont pas dot\u00e9es d'un attribut alt.", 
        "description": "Pr\u00e9sence de l'attribut alt.", 
        "solution": "<p> Tout \u00e9l\u00e9ment : </p><ul> <li> <code>img</code>, </li> <li> <code>area</code>, </li> <li> <code>input type='image'</code>, </li> <li> <code>applet</code>, </li> <li>tout code javascript g\u00e9n\u00e9rant un des \u00e9l\u00e9ments pr\u00e9c\u00e9dant. </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si l'\u00e9l\u00e9ment n'est pas un captcha ou ne fait pas parti d'un test qui deviendrait inutile si l'alternative textuelle \u00e9tait pr\u00e9sente, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Images", 
        "name": "[IMA]-01"
    }, 
    "10059": {
        "goal": "<ul><li><h5>1.1.1 : Contenu non textuel : (A)</h5><br />Rendre le contenu non textuel accessible sous forme d'une alternative textuelle exploitable quel que soit le mode de perception de l'utilisateur (visuel, auditif, tactile).<br><br>Le contenu des \u00e9l\u00e9ments non textuels ne sera pas perceptible pour diff\u00e9rentes cat\u00e9gories d'utilisateurs tels que :<br><br><ul><li>Les personnes handicap\u00e9es visuelles acc\u00e9dant au site via la synth\u00e8se vocale d'un lecteur d'\u00e9cran,</li><li>Les utilisateurs ayant d\u00e9sactiv\u00e9 l'affichage des \u00e9l\u00e9ments graphiques ou multim\u00e9dias, pour r\u00e9duire notamment les temps de t\u00e9l\u00e9chargement des pages en bas d\u00e9bit.<br></li></ul><br>La pr\u00e9sence d'alternatives textuelles aux contenus non textuels permet \u00e9galement \u00e0 des robots d'indexation d'en exploiter l'information, ou \u00e0 des traducteurs automatiques d'en traduire le sens.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Certaines alternatives textuelles d'images-liens  IMG ne sont pas pertinentes, et ne reproduisent pas toute l'information v\u00e9hicul\u00e9e par l'image.", 
        "description": "Pertinence de l'alternative textuelle aux images liens.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <code>img</code> ou tout code javascript g\u00e9n\u00e9rant un \u00e9l\u00e9ment <code>img</code>. </p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si l'\u00e9l\u00e9ment est contenu dans un \u00e9l\u00e9ment <code>a</code> ou <code>button</code>, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si l'\u00e9l\u00e9ment n'est pas utilis\u00e9 comme captcha ou ne fait pas partie d'un test qui deviendrait inutile si l'alternative textuelle \u00e9tait pr\u00e9sente, poursuivre le test, sinon le test est non applicable, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si l'\u00e9l\u00e9ment poss\u00e8de un attribut <code>alt</code>, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Images", 
        "name": "[IMA]-02"
    }, 
    "10060": {
        "goal": "<ul><li><h5>1.1.1 : Contenu non textuel : (A)</h5><br />Rendre le contenu non textuel accessible sous forme d'une alternative textuelle exploitable quel que soit le mode de perception de l'utilisateur (visuel, auditif, tactile).<br><br>Le contenu des \u00e9l\u00e9ments non textuels ne sera pas perceptible pour diff\u00e9rentes cat\u00e9gories d'utilisateurs tels que :<br><br><ul><li>Les personnes handicap\u00e9es visuelles acc\u00e9dant au site via la synth\u00e8se vocale d'un lecteur d'\u00e9cran,</li><li>Les utilisateurs ayant d\u00e9sactiv\u00e9 l'affichage des \u00e9l\u00e9ments graphiques ou multim\u00e9dias, pour r\u00e9duire notamment les temps de t\u00e9l\u00e9chargement des pages en bas d\u00e9bit.<br></li></ul><br>La pr\u00e9sence d'alternatives textuelles aux contenus non textuels permet \u00e9galement \u00e0 des robots d'indexation d'en exploiter l'information, ou \u00e0 des traducteurs automatiques d'en traduire le sens.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Certaines alternatives de boutons graphiques ou de zones cliquables d'image MAP ont une alternative ALT qui ne permet pas de comprendre pr\u00e9cis\u00e9ment l'action ou d'identifier la destination du lien. ", 
        "description": "Pertinence de l'alternative textuelle aux zones cliquables ou aux boutons graphiques.", 
        "solution": "<p> Tout \u00e9l\u00e9ment : </p><ul> <li> <code>area</code>, </li> <li> <code>input type='image'</code>, </li> <li>tout code javascript g\u00e9n\u00e9rant un des \u00e9l\u00e9ments pr\u00e9c\u00e9dant. </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si l'\u00e9l\u00e9ment n'est pas utilis\u00e9 comme captcha ou ne fait pas partie d'un test qui deviendrait inutile si l'alternative textuelle \u00e9tait pr\u00e9sente, poursuivre le test, sinon le test est non applicable, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si l'\u00e9l\u00e9ment poss\u00e8de un attribut <code>alt</code>, poursuivre le test, sinon le test non applicable. </li>", 
        "thema": "Images", 
        "name": "[IMA]-03"
    }, 
    "10061": {
        "goal": "<ul><li><h5>1.1.1 : Contenu non textuel : (A)</h5><br />Rendre le contenu non textuel accessible sous forme d'une alternative textuelle exploitable quel que soit le mode de perception de l'utilisateur (visuel, auditif, tactile).<br><br>Le contenu des \u00e9l\u00e9ments non textuels ne sera pas perceptible pour diff\u00e9rentes cat\u00e9gories d'utilisateurs tels que :<br><br><ul><li>Les personnes handicap\u00e9es visuelles acc\u00e9dant au site via la synth\u00e8se vocale d'un lecteur d'\u00e9cran,</li><li>Les utilisateurs ayant d\u00e9sactiv\u00e9 l'affichage des \u00e9l\u00e9ments graphiques ou multim\u00e9dias, pour r\u00e9duire notamment les temps de t\u00e9l\u00e9chargement des pages en bas d\u00e9bit.<br></li></ul><br>La pr\u00e9sence d'alternatives textuelles aux contenus non textuels permet \u00e9galement \u00e0 des robots d'indexation d'en exploiter l'information, ou \u00e0 des traducteurs automatiques d'en traduire le sens.</li><li><h5>1.4.1 : Utilisation de la couleur : (A)</h5><br />Rendre l'information v\u00e9hicul\u00e9e par la couleur perceptible pour tous les utilisateurs en situation de handicap visuel. Notamment, permettre l'acc\u00e8s \u00e0 l'information aux personnes aveugles,\r\nmal voyantes (d\u00e9ficiences de perception des couleurs, d\u00e9g\u00e9n\u00e9rescence maculaire li\u00e9e \u00e0 l'age,...) , utilisant des feuilles de styles personnalis\u00e9es ou ayant un \u00e9cran monochrome/avec un nombre de couleurs limit\u00e9.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Certaines images v\u00e9hiculant une information (hors images liens, boutons, etc.) n'ont pas une alternative pertinente par rapport \u00e0 leur r\u00f4le et \u00e0 leur contexte d'utilisation dans la page.", 
        "description": "Pertinence de l'alternative textuelle aux \u00e9l\u00e9ments non textuels.", 
        "solution": "<p> Tout \u00e9l\u00e9ment : </p><ul> <li> <code>img</code>, </li> <li> <code>applet</code>,</li> <li><code>object</code></li><li><code>embed</code></li><li>tout code javascript g\u00e9n\u00e9rant un des \u00e9l\u00e9ments pr\u00e9c\u00e9dant. </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment n'est pas contenu dans un \u00e9l\u00e9ment a ou button, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment apporte visuellement une information, poursuivre le test, sinon le test est non applicable.&nbsp;</li>\r\n<li>Si l'\u00e9l\u00e9ment n'est pas un contenu sonore, visuel anim\u00e9, multim\u00e9dias, un captcha ou ne fait pas parti d'un test qui deviendrait inutile si l'alternative\r\ntextuelle \u00e9tait pr\u00e9sente, poursuivre le test, sinon le test est non\r\napplicable.</li>", 
        "thema": "Images", 
        "name": "[IMA]-04"
    }, 
    "10062": {
        "goal": "<ul><li><h5>1.1.1 : Contenu non textuel : (A)</h5><br />Rendre le contenu non textuel accessible sous forme d'une alternative textuelle exploitable quel que soit le mode de perception de l'utilisateur (visuel, auditif, tactile).<br><br>Le contenu des \u00e9l\u00e9ments non textuels ne sera pas perceptible pour diff\u00e9rentes cat\u00e9gories d'utilisateurs tels que :<br><br><ul><li>Les personnes handicap\u00e9es visuelles acc\u00e9dant au site via la synth\u00e8se vocale d'un lecteur d'\u00e9cran,</li><li>Les utilisateurs ayant d\u00e9sactiv\u00e9 l'affichage des \u00e9l\u00e9ments graphiques ou multim\u00e9dias, pour r\u00e9duire notamment les temps de t\u00e9l\u00e9chargement des pages en bas d\u00e9bit.<br></li></ul><br>La pr\u00e9sence d'alternatives textuelles aux contenus non textuels permet \u00e9galement \u00e0 des robots d'indexation d'en exploiter l'information, ou \u00e0 des traducteurs automatiques d'en traduire le sens.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Certaines images d\u00e9coratives ne sont pas dot\u00e9es d'une alternative textuelle nulle.", 
        "description": "Pertinence de l'alternative textuelle vide aux \u00e9l\u00e9ments d\u00e9coratifs.", 
        "solution": "<p> Tout \u00e9l\u00e9ment : </p><ul> <li> <code>img</code>, </li>  <li> <code>applet</code>, </li> <li>tout code javascript g\u00e9n\u00e9rant un des \u00e9l\u00e9ments pr\u00e9c\u00e9dant. </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si l'\u00e9l\u00e9ment est uniquement d\u00e9coratif, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si l'\u00e9l\u00e9ment n'est pas contenu dans un \u00e9l\u00e9ment a ou button, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Images", 
        "name": "[IMA]-05"
    }, 
    "10063": {
        "goal": "<ul><li><h5>1.1.1 : Contenu non textuel : (A)</h5><br />Rendre le contenu non textuel accessible sous forme d'une alternative textuelle exploitable quel que soit le mode de perception de l'utilisateur (visuel, auditif, tactile).<br><br>Le contenu des \u00e9l\u00e9ments non textuels ne sera pas perceptible pour diff\u00e9rentes cat\u00e9gories d'utilisateurs tels que :<br><br><ul><li>Les personnes handicap\u00e9es visuelles acc\u00e9dant au site via la synth\u00e8se vocale d'un lecteur d'\u00e9cran,</li><li>Les utilisateurs ayant d\u00e9sactiv\u00e9 l'affichage des \u00e9l\u00e9ments graphiques ou multim\u00e9dias, pour r\u00e9duire notamment les temps de t\u00e9l\u00e9chargement des pages en bas d\u00e9bit.<br></li></ul><br>La pr\u00e9sence d'alternatives textuelles aux contenus non textuels permet \u00e9galement \u00e0 des robots d'indexation d'en exploiter l'information, ou \u00e0 des traducteurs automatiques d'en traduire le sens.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "La longueur du contenu de certaines alternatives textuelles est excessive.", 
        "description": "Longueur du contenu des alternatives textuelles.", 
        "solution": "<p> Tout \u00e9l\u00e9ment ayant un attribut <code>alt</code>. </p><br /><br /> <li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si le contenu de l'attribut <code>alt</code> est non vide, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Images", 
        "name": "[IMA]-06"
    }, 
    "10064": {
        "goal": "<ul><li><h5>1.1.1 : Contenu non textuel : (A)</h5><br />Rendre le contenu non textuel accessible sous forme d'une alternative textuelle exploitable quel que soit le mode de perception de l'utilisateur (visuel, auditif, tactile).<br><br>Le contenu des \u00e9l\u00e9ments non textuels ne sera pas perceptible pour diff\u00e9rentes cat\u00e9gories d'utilisateurs tels que :<br><br><ul><li>Les personnes handicap\u00e9es visuelles acc\u00e9dant au site via la synth\u00e8se vocale d'un lecteur d'\u00e9cran,</li><li>Les utilisateurs ayant d\u00e9sactiv\u00e9 l'affichage des \u00e9l\u00e9ments graphiques ou multim\u00e9dias, pour r\u00e9duire notamment les temps de t\u00e9l\u00e9chargement des pages en bas d\u00e9bit.<br></li></ul><br>La pr\u00e9sence d'alternatives textuelles aux contenus non textuels permet \u00e9galement \u00e0 des robots d'indexation d'en exploiter l'information, ou \u00e0 des traducteurs automatiques d'en traduire le sens.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Aucun texte pouvant faire office de description longue aux images le n\u00e9cessitant n'est pr\u00e9sent dans ou en dehors de la page.", 
        "description": "Existence d'une description longue pour les images le n\u00e9cessitant.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <code>img</code> ou tout code javascript g\u00e9n\u00e9rant un \u00e9l\u00e9ment <code>img</code>. </p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li> <li>Si l'\u00e9l\u00e9ment n\u00e9cessite d'avoir une description longue, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Images", 
        "name": "[IMA]-07"
    }, 
    "10065": {
        "goal": "<ul><li><h5>1.1.1 : Contenu non textuel : (A)</h5><br />Rendre le contenu non textuel accessible sous forme d'une alternative textuelle exploitable quel que soit le mode de perception de l'utilisateur (visuel, auditif, tactile).<br><br>Le contenu des \u00e9l\u00e9ments non textuels ne sera pas perceptible pour diff\u00e9rentes cat\u00e9gories d'utilisateurs tels que :<br><br><ul><li>Les personnes handicap\u00e9es visuelles acc\u00e9dant au site via la synth\u00e8se vocale d'un lecteur d'\u00e9cran,</li><li>Les utilisateurs ayant d\u00e9sactiv\u00e9 l'affichage des \u00e9l\u00e9ments graphiques ou multim\u00e9dias, pour r\u00e9duire notamment les temps de t\u00e9l\u00e9chargement des pages en bas d\u00e9bit.<br></li></ul><br>La pr\u00e9sence d'alternatives textuelles aux contenus non textuels permet \u00e9galement \u00e0 des robots d'indexation d'en exploiter l'information, ou \u00e0 des traducteurs automatiques d'en traduire le sens.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "La description longue des images ne restitue pas l'ensemble des informations v\u00e9hicul\u00e9es par l'image", 
        "description": "Pertinence de la description longue pour les images le n\u00e9cessitant.", 
        "solution": "Tout \u00e9l\u00e9ment <code>img</code> ou tout code javascript g\u00e9n\u00e9rant un \u00e9l\u00e9ment <code>img</code>. <br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans\r\nla page, poursuivre le test, sinon le test est non applicable. </li> <li>Si l'\u00e9l\u00e9ment n\u00e9cessite d'avoir une description longue, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Images", 
        "name": "[IMA]-08"
    }, 
    "10066": {
        "goal": "<ul><li><h5>1.1.1 : Contenu non textuel : (A)</h5><br />Rendre le contenu non textuel accessible sous forme d'une alternative textuelle exploitable quel que soit le mode de perception de l'utilisateur (visuel, auditif, tactile).<br><br>Le contenu des \u00e9l\u00e9ments non textuels ne sera pas perceptible pour diff\u00e9rentes cat\u00e9gories d'utilisateurs tels que :<br><br><ul><li>Les personnes handicap\u00e9es visuelles acc\u00e9dant au site via la synth\u00e8se vocale d'un lecteur d'\u00e9cran,</li><li>Les utilisateurs ayant d\u00e9sactiv\u00e9 l'affichage des \u00e9l\u00e9ments graphiques ou multim\u00e9dias, pour r\u00e9duire notamment les temps de t\u00e9l\u00e9chargement des pages en bas d\u00e9bit.<br></li></ul><br>La pr\u00e9sence d'alternatives textuelles aux contenus non textuels permet \u00e9galement \u00e0 des robots d'indexation d'en exploiter l'information, ou \u00e0 des traducteurs automatiques d'en traduire le sens.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Certaines images n\u00e9cessitant une description longue n'ont pas d'attribut LONGDESC donnant l'URL de celle-ci.\r\n", 
        "description": "Pr\u00e9sence de l'attribut longdesc pour \u00e9tablir une relation entre une image et sa description longue.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <code>img</code> ou tout code javascript g\u00e9n\u00e9rant un \u00e9l\u00e9ment <code>img</code>. </p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li><li>Si l'\u00e9l\u00e9ment n\u00e9cessite l'utilisation d'une description longue pour \u00eatre compris, poursuivre le test, sinon le test est non applicable.</li><li>Si le contenu imm\u00e9diatement adjacent \u00e0 l'\u00e9l\u00e9ment ne contient pas un lien\r\npermettant d'avoir acc\u00e8s \u00e0 la description longue de l'\u00e9l\u00e9ment, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>\r\nSi l'\u00e9l\u00e9ment poss\u00e8de au moins un des m\u00e9canismes suivant : \r\n<ul><li>attribut longdesc </li>\r\n<li>attribut alt,</li></ul> \r\npoursuivre le test, sinon le test est non applicable.\r\n</li>\r\n", 
        "thema": "Images", 
        "name": "[IMA]-09"
    }, 
    "10067": {
        "goal": "<ul><li><h5>1.2.1 : Contenu seulement audio ou vid\u00e9o (pr\u00e9-enregistr\u00e9) : (A)</h5><br />Fournir textuellement  \u00e0 tous les utilisateurs l'information v\u00e9hicul\u00e9e par les contenus seulement vid\u00e9o ou audio  (pr\u00e9-enregistr\u00e9). Les informations fournis textuellement seront accessible car elles peuvent \u00eatre restitu\u00e9es sous diff\u00e9rentes formes (visuelle, auditive, tactile)<br><br>Dans le cas contraire, le contenu des \u00e9l\u00e9ments seulement audio ou vid\u00e9o  ne serait pas perceptible pour diff\u00e9rentes cat\u00e9gories d'utilisateurs tels que : <br><br><ul><li>Les personnes ayant une d\u00e9ficience auditive pour le contenu uniquement sonore,</li><li>Les personnes ayant une d\u00e9ficience visuelle pour le contenu uniquement vid\u00e9o,</li></ul><br>Cela permet \u00e9galement \u00e0 des robots d'indexation d'exploiter l'information, ou \u00e0 des traducteurs automatiques d'en traduire le sens.</li><li><h5>1.2.3 : Audio-description ou version de remplacement pour un m\u00e9dia temporel (pr\u00e9-enregistr\u00e9) : (A)</h5><br />Permettre aux utilisateurs en situation de handicap visuel de percevoir l'information visuelle v\u00e9hicul\u00e9e par les contenus multim\u00e9dia.<br><br>Toutes les aides techniques ne sont pas en mesure de lire automatiquement la description textuelle des contenus multim\u00e9dias. Il est donc n\u00e9cessaire de la compl\u00e9ter d'une description audio. Ainsi, une personne pr\u00e9sentant une d\u00e9ficience visuelle ou ayant des probl\u00e8mes de compr\u00e9hension de l'\u00e9crit pourra profiter de cette description audio.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Aucune transcription textuellement n'est pr\u00e9sente.", 
        "description": "Pr\u00e9sence de la transcription textuelle des contenus visuels anim\u00e9s, sonores ou des m\u00e9dias synchronis\u00e9s.", 
        "solution": "<p> Tout \u00e9l\u00e9ment : </p><ul> <li> <code>a</code>, </li> <li> <code>area</code>, </li> <li> <code>applet</code>,</li><li> <code>object</code>,</li><li> <code>embed</code>,</li><li>tout code javascript g\u00e9n\u00e9rant un des \u00e9l\u00e9ments pr\u00e9c\u00e9dents ou d\u00e9clenchant un t\u00e9l\u00e9chargement. </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment permet de t\u00e9l\u00e9charger ou de consulter un contenu visuel anim\u00e9, sonore ou un m\u00e9dia synchronis\u00e9 porteur d'informations, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si le contenu visuel anim\u00e9, sonore ou le m\u00e9dia synchronis\u00e9 n'est pas une alternative anim\u00e9e, sonore ou synchronis\u00e9e \u00e0  un contenu textuel pr\u00e9sent dans la page,  qui est identifi\u00e9e en tant que tel et qui n'apporte pas plus d'information que le contenu textuel, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Multim\u00e9dia", 
        "name": "[MUL]-02"
    }, 
    "10068": {
        "goal": "<ul><li><h5>1.2.1 : Contenu seulement audio ou vid\u00e9o (pr\u00e9-enregistr\u00e9) : (A)</h5><br />Fournir textuellement  \u00e0 tous les utilisateurs l'information v\u00e9hicul\u00e9e par les contenus seulement vid\u00e9o ou audio  (pr\u00e9-enregistr\u00e9). Les informations fournis textuellement seront accessible car elles peuvent \u00eatre restitu\u00e9es sous diff\u00e9rentes formes (visuelle, auditive, tactile)<br><br>Dans le cas contraire, le contenu des \u00e9l\u00e9ments seulement audio ou vid\u00e9o  ne serait pas perceptible pour diff\u00e9rentes cat\u00e9gories d'utilisateurs tels que : <br><br><ul><li>Les personnes ayant une d\u00e9ficience auditive pour le contenu uniquement sonore,</li><li>Les personnes ayant une d\u00e9ficience visuelle pour le contenu uniquement vid\u00e9o,</li></ul><br>Cela permet \u00e9galement \u00e0 des robots d'indexation d'exploiter l'information, ou \u00e0 des traducteurs automatiques d'en traduire le sens.</li><li><h5>1.2.3 : Audio-description ou version de remplacement pour un m\u00e9dia temporel (pr\u00e9-enregistr\u00e9) : (A)</h5><br />Permettre aux utilisateurs en situation de handicap visuel de percevoir l'information visuelle v\u00e9hicul\u00e9e par les contenus multim\u00e9dia.<br><br>Toutes les aides techniques ne sont pas en mesure de lire automatiquement la description textuelle des contenus multim\u00e9dias. Il est donc n\u00e9cessaire de la compl\u00e9ter d'une description audio. Ainsi, une personne pr\u00e9sentant une d\u00e9ficience visuelle ou ayant des probl\u00e8mes de compr\u00e9hension de l'\u00e9crit pourra profiter de cette description audio.</li><li><h5>1.2.8 : Version de remplacement pour un m\u00e9dia temporel (pr\u00e9-enregistr\u00e9e) : (AAA)</h5><br />Fournir textuellement \u00e0 tous les utilisateurs l'information v\u00e9hicul\u00e9e\r\npar les m\u00e9dias temporels synchronis\u00e9s (pr\u00e9-enregistr\u00e9s) ou vid\u00e9o seulement. Les\r\ninformations fournis textuellement seront accessibles car elles peuvent\r\n\u00eatre restitu\u00e9es sous diff\u00e9rentes formes (visuelle, auditive, tactile)<br><br>Dans\r\nle cas contraire, le contenu des m\u00e9dias synchronis\u00e9s  ou vid\u00e9o seulement ne\r\nserait pas perceptible pour diff\u00e9rentes cat\u00e9gories d'utilisateurs tels\r\nque : <br><br><ul><li>Les personnes ayant une d\u00e9ficience auditive pour le contenu&nbsp; sonore,</li><li>Les personnes ayant une d\u00e9ficience visuelle pour le contenu visuel,</li></ul><br>Cela\r\npermet \u00e9galement \u00e0 des robots d'indexation d'exploiter l'information,\r\nou \u00e0 des traducteurs automatiques d'en traduire le sens.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "La transcription textuelle ne restitue pas l'ensemble des informations visuels et sonores pr\u00e9sentes dans les contenus visuels anim\u00e9s, sonores ou les m\u00e9dias synchronis\u00e9s.", 
        "description": "Pertinence de la transcription textuelle des contenus visuels anim\u00e9s, sonores ou des m\u00e9dias synchronis\u00e9s.", 
        "solution": "<p> Tout segment de texte constituant une transcription textuel d'un contenu visuel anim\u00e9, sonore ou d'un m\u00e9dia synchronis\u00e9. </p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page ou dans un fichier en t\u00e9l\u00e9chargement , poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Multim\u00e9dia", 
        "name": "[MUL]-03"
    }, 
    "10069": {
        "goal": "<ul><li><h5>1.2.5 : Audio-description (pr\u00e9-enregistr\u00e9e) : (AA)</h5><br />Permettre aux utilisateurs en situation de handicap visuel de percevoir l'information visuelle v\u00e9hicul\u00e9e par les contenus multim\u00e9dia.<br><br>Toutes les aides techniques ne sont pas en mesure de lire\r\nautomatiquement la description textuelle des contenus multim\u00e9dias. Il\r\nest donc n\u00e9cessaire de la compl\u00e9ter d'une description audio. Ainsi, une\r\npersonne pr\u00e9sentant une d\u00e9ficience visuelle ou ayant des probl\u00e8mes de\r\ncompr\u00e9hension de l'\u00e9crit pourra profiter de cette description audio.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Aucune description audio synchronis\u00e9e n'est pr\u00e9sente.", 
        "description": "Pr\u00e9sence d'une description audio synchronis\u00e9e pour les contenus visuels anim\u00e9s ou les m\u00e9dias synchronis\u00e9s.", 
        "solution": "<p> Tout \u00e9l\u00e9ment : </p>\r\n<ul><li> <code>a</code>, </li><li><code>area</code>,</li><li> <code>applet</code>, </li><li> <code>object</code>, </li><li> <code>embed</code>, </li><li>tout code javascipt g\u00e9n\u00e9rant un des \u00e9l\u00e9ments pr\u00e9c\u00e9dents ou d\u00e9clenchant un t\u00e9l\u00e9chargement</li></ul><br>\r\n\r\n<br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est\r\npr\u00e9sent ou utilis\u00e9 dans la page, poursuivre le test, sinon le test est\r\nnon applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment permet de t\u00e9l\u00e9charger ou de restituer un contenu\r\nvisuel anim\u00e9 ou m\u00e9dia synchronis\u00e9 qui apporte de l'information, poursuivre le\r\ntest, sinon le test est non applicable.</li>\r\n<li>Si le\r\ncontenu visuel anim\u00e9 ou le m\u00e9dia synchronis\u00e9 n'est pas une\r\nalternative anim\u00e9e ou synchronis\u00e9e \u00e0  un contenu textuel\r\npr\u00e9sent dans la page,  qui est identifi\u00e9e en tant\r\nque tel et qui n'apporte pas plus d'information que le contenu\r\ntextuel, poursuivre le test, sinon le test est non applicable.</li><li>Si le contenu de l'\u00e9l\u00e9ment n\u00e9cessite l'utilisation d'une\r\ndescription audio synchronis\u00e9e pour le rendre compr\u00e9hensible, poursuivre le test,\r\nsinon le test est non applicable.</li>", 
        "thema": "Multim\u00e9dia", 
        "name": "[MUL]-08"
    }, 
    "10070": {
        "goal": "<ul><li><h5>1.1.1 : Contenu non textuel : (A)</h5><br />Rendre le contenu non textuel accessible sous forme d'une alternative textuelle exploitable quel que soit le mode de perception de l'utilisateur (visuel, auditif, tactile).<br><br>Le contenu des \u00e9l\u00e9ments non textuels ne sera pas perceptible pour diff\u00e9rentes cat\u00e9gories d'utilisateurs tels que :<br><br><ul><li>Les personnes handicap\u00e9es visuelles acc\u00e9dant au site via la synth\u00e8se vocale d'un lecteur d'\u00e9cran,</li><li>Les utilisateurs ayant d\u00e9sactiv\u00e9 l'affichage des \u00e9l\u00e9ments graphiques ou multim\u00e9dias, pour r\u00e9duire notamment les temps de t\u00e9l\u00e9chargement des pages en bas d\u00e9bit.<br></li></ul><br>La pr\u00e9sence d'alternatives textuelles aux contenus non textuels permet \u00e9galement \u00e0 des robots d'indexation d'en exploiter l'information, ou \u00e0 des traducteurs automatiques d'en traduire le sens.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Aucune information sur l'existance du captcha n'est pr\u00e9sente et aucune solution d'acc\u00e8s alternative n'est propos\u00e9e", 
        "description": "Pr\u00e9sence d'une information de contexte et d'une solution d'acc\u00e8s pour les captcha lorsque l'alternative ne peut pas \u00eatre communiqu\u00e9e", 
        "solution": "Tout \u00e9l\u00e9ment : <ul> <li> <code>img</code>, </li> <li> <code>applet</code>, </li> <li> <code>embed</code>, </li> <li> <code>object</code>,</li><li><code>input type='image'</code>, </li><li>tout code javascript g\u00e9n\u00e9rant un des \u00e9l\u00e9ments pr\u00e9c\u00e9dant. </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n\r\n<li>Si l'\u00e9l\u00e9ment est utilis\u00e9 comme captcha ou fait partie d'un test qui deviendrait inutile si l'alternative textuelle \u00e9tait pr\u00e9sente, poursuivre le test, sinon le test est non applicable.</li>\r\n", 
        "thema": "Images", 
        "name": "[IMA]-10"
    }, 
    "10071": {
        "goal": "<ul><li><h5>2.1.1 : Clavier : (A)</h5><br />Rendre les contenus accessibles via un p\u00e9riph\u00e9rique de type clavier. <br><br>Certains utilisateurs ayant un handicap moteur ou visuel n'utiliseront par exemple que le clavier ou un p\u00e9riph\u00e9rique adapt\u00e9 pour naviguer. De plus, il est \u00e0 noter que de nombreux terminaux mobiles ne proposent pas d'interface souris mais uniquement une interface clavier.</li><li><h5>2.1.3 : Clavier (pas d'exception) : (AAA)</h5><br />Rendre les contenus accessibles via un p\u00e9riph\u00e9rique de type clavier.<br><br>Certains utilisateurs ayant un handicap moteur ou visuel n'utiliseront\r\npar exemple que le clavier ou un p\u00e9riph\u00e9rique adapt\u00e9 pour naviguer. De\r\nplus, il est \u00e0 noter que de nombreux terminaux mobiles ne proposent pas\r\nd'interface souris mais uniquement une interface clavier.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Aucun lien textuel n'est pr\u00e9sent pour doubler les zones cliquables c\u00f4t\u00e9 serveur.", 
        "description": "Acc\u00e8s aux liens textuels doublant les zones cliquables c\u00f4t\u00e9 serveur.", 
        "solution": "<p> Tout \u00e9l\u00e9ment : </p><ul> <li> <code>img</code>, </li> <li> <code>input type=\"image\"</code>. </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si l'\u00e9l\u00e9ment poss\u00e8de un attribut <code>ismap</code> ou est utilis\u00e9 comme image avec zones cliquables c\u00f4t\u00e9 serveur, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si chaque zone cliquable de l'\u00e9l\u00e9ment est doubl\u00e9e d'un lien textuel permettant d'acc\u00e9der \u00e0 la m\u00eame destination, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Navigation", 
        "name": "[NAV]-01"
    }, 
    "10072": {
        "goal": "<ul><li><h5>1.2.3 : Audio-description ou version de remplacement pour un m\u00e9dia temporel (pr\u00e9-enregistr\u00e9) : (A)</h5><br />Permettre aux utilisateurs en situation de handicap visuel de percevoir l'information visuelle v\u00e9hicul\u00e9e par les contenus multim\u00e9dia.<br><br>Toutes les aides techniques ne sont pas en mesure de lire automatiquement la description textuelle des contenus multim\u00e9dias. Il est donc n\u00e9cessaire de la compl\u00e9ter d'une description audio. Ainsi, une personne pr\u00e9sentant une d\u00e9ficience visuelle ou ayant des probl\u00e8mes de compr\u00e9hension de l'\u00e9crit pourra profiter de cette description audio.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Aucune description audio synchronis\u00e9e ou transcription textuelle n'est pr\u00e9sente.", 
        "description": "Pr\u00e9sence d'un description audio synchronis\u00e9e ou d'une transcription textuelle pour les contenus visuels anim\u00e9s et les m\u00e9dias synchronis\u00e9s.", 
        "solution": "<p> Tout \u00e9l\u00e9ment : </p><ul> <li> <code>a</code>, </li> <li> <code>area</code>, </li> <li> <code>applet</code>,</li><li> <code>object</code>,</li><li> <code>embed</code>,</li><li>tout code javascript g\u00e9n\u00e9rant un des \u00e9l\u00e9ments pr\u00e9c\u00e9dents ou d\u00e9clenchant un t\u00e9l\u00e9chargement. </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent ou utilis\u00e9 dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment permet de t\u00e9l\u00e9charger ou de restituer un contenu visuel anim\u00e9 ou multim\u00e9dia qui apporte de l'information, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si le\r\ncontenu visuel anim\u00e9 ou le m\u00e9dia synchronis\u00e9 n'est pas une\r\nalternative anim\u00e9e ou synchronis\u00e9e \u00e0  un contenu textuel\r\npr\u00e9sent dans la page,  qui est identifi\u00e9e en tant\r\nque tel et qui n'apporte pas plus d'information que le contenu\r\ntextuel, poursuivre le test, sinon le test est non applicable.</li><li>Si le contenu visuel anim\u00e9 ou le m\u00e9dia synchronis\u00e9 n'a pas d\u00e9j\u00e0 une transcription textuelle restituant l'ensemble des informations, poursuivre le test, sinon le test est non applicable<br></li>\r\n<li>Si le contenu de l'\u00e9l\u00e9ment n\u00e9cessite l'utilisation d'une description audio synchronis\u00e9e pour le rendre compr\u00e9hensible, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Multim\u00e9dia", 
        "name": "[MUL]-04"
    }, 
    "10073": {
        "goal": "<ul><li><h5>1.2.1 : Contenu seulement audio ou vid\u00e9o (pr\u00e9-enregistr\u00e9) : (A)</h5><br />Fournir textuellement  \u00e0 tous les utilisateurs l'information v\u00e9hicul\u00e9e par les contenus seulement vid\u00e9o ou audio  (pr\u00e9-enregistr\u00e9). Les informations fournis textuellement seront accessible car elles peuvent \u00eatre restitu\u00e9es sous diff\u00e9rentes formes (visuelle, auditive, tactile)<br><br>Dans le cas contraire, le contenu des \u00e9l\u00e9ments seulement audio ou vid\u00e9o  ne serait pas perceptible pour diff\u00e9rentes cat\u00e9gories d'utilisateurs tels que : <br><br><ul><li>Les personnes ayant une d\u00e9ficience auditive pour le contenu uniquement sonore,</li><li>Les personnes ayant une d\u00e9ficience visuelle pour le contenu uniquement vid\u00e9o,</li></ul><br>Cela permet \u00e9galement \u00e0 des robots d'indexation d'exploiter l'information, ou \u00e0 des traducteurs automatiques d'en traduire le sens.</li><li><h5>1.2.3 : Audio-description ou version de remplacement pour un m\u00e9dia temporel (pr\u00e9-enregistr\u00e9) : (A)</h5><br />Permettre aux utilisateurs en situation de handicap visuel de percevoir l'information visuelle v\u00e9hicul\u00e9e par les contenus multim\u00e9dia.<br><br>Toutes les aides techniques ne sont pas en mesure de lire automatiquement la description textuelle des contenus multim\u00e9dias. Il est donc n\u00e9cessaire de la compl\u00e9ter d'une description audio. Ainsi, une personne pr\u00e9sentant une d\u00e9ficience visuelle ou ayant des probl\u00e8mes de compr\u00e9hension de l'\u00e9crit pourra profiter de cette description audio.</li><li><h5>1.2.5 : Audio-description (pr\u00e9-enregistr\u00e9e) : (AA)</h5><br />Permettre aux utilisateurs en situation de handicap visuel de percevoir l'information visuelle v\u00e9hicul\u00e9e par les contenus multim\u00e9dia.<br><br>Toutes les aides techniques ne sont pas en mesure de lire\r\nautomatiquement la description textuelle des contenus multim\u00e9dias. Il\r\nest donc n\u00e9cessaire de la compl\u00e9ter d'une description audio. Ainsi, une\r\npersonne pr\u00e9sentant une d\u00e9ficience visuelle ou ayant des probl\u00e8mes de\r\ncompr\u00e9hension de l'\u00e9crit pourra profiter de cette description audio.</li><li><h5>1.2.7 : Audio-description \u00e9tendue (pr\u00e9-enregistr\u00e9e) : (AAA)</h5><br />Permettre aux utilisateurs en situation de handicap visuel de percevoir l'information visuelle v\u00e9hicul\u00e9e par les contenus multim\u00e9dia.<br><br>Toutes les aides techniques ne sont pas en mesure de lire\r\nautomatiquement la description textuelle des contenus multim\u00e9dias. Il\r\nest donc n\u00e9cessaire de la compl\u00e9ter d'une description audio. Ainsi, une\r\npersonne pr\u00e9sentant une d\u00e9ficience visuelle ou ayant des probl\u00e8mes de\r\ncompr\u00e9hension de l'\u00e9crit pourra profiter de cette description audio.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "La description audio synchronis\u00e9e ne restitue pas l'ensemble des informations visuels pr\u00e9sente dans les visuels anim\u00e9s ou les m\u00e9dias synchronis\u00e9s.", 
        "description": "Pertinence de la description audio synchronis\u00e9e des contenus visuels anim\u00e9s ou des m\u00e9dias synchronis\u00e9s.", 
        "solution": "Tout contenu sonore constituant une description audio d'un contenu visuel anim\u00e9 ou d'un m\u00e9dia synchronis\u00e9. <br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Multim\u00e9dia", 
        "name": "[MUL]-05"
    }, 
    "10074": {
        "goal": "<ul><li><h5>1.2.3 : Audio-description ou version de remplacement pour un m\u00e9dia temporel (pr\u00e9-enregistr\u00e9) : (A)</h5><br />Permettre aux utilisateurs en situation de handicap visuel de percevoir l'information visuelle v\u00e9hicul\u00e9e par les contenus multim\u00e9dia.<br><br>Toutes les aides techniques ne sont pas en mesure de lire automatiquement la description textuelle des contenus multim\u00e9dias. Il est donc n\u00e9cessaire de la compl\u00e9ter d'une description audio. Ainsi, une personne pr\u00e9sentant une d\u00e9ficience visuelle ou ayant des probl\u00e8mes de compr\u00e9hension de l'\u00e9crit pourra profiter de cette description audio.</li><li><h5>1.2.5 : Audio-description (pr\u00e9-enregistr\u00e9e) : (AA)</h5><br />Permettre aux utilisateurs en situation de handicap visuel de percevoir l'information visuelle v\u00e9hicul\u00e9e par les contenus multim\u00e9dia.<br><br>Toutes les aides techniques ne sont pas en mesure de lire\r\nautomatiquement la description textuelle des contenus multim\u00e9dias. Il\r\nest donc n\u00e9cessaire de la compl\u00e9ter d'une description audio. Ainsi, une\r\npersonne pr\u00e9sentant une d\u00e9ficience visuelle ou ayant des probl\u00e8mes de\r\ncompr\u00e9hension de l'\u00e9crit pourra profiter de cette description audio.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "L'utilisateur n'a aucun moyen de contr\u00f4ler l'activation et la d\u00e9sactivation de la piste sonore d'audio description synchronis\u00e9e.", 
        "description": "Possibilit\u00e9 de contr\u00f4ler l'activation de la description audio synchronis\u00e9e.", 
        "solution": "<p> Tout \u00e9l\u00e9ment : </p><ul> <li> <code>a</code>, </li> <li> <code>area</code>, </li> <li> <code>applet</code>,</li><li> <code>object</code>,</li><li> <code>embed</code>,</li><li>tout code javascript g\u00e9n\u00e9rant un des \u00e9l\u00e9ments pr\u00e9c\u00e9dents ou d\u00e9clenchant un t\u00e9l\u00e9chargement. </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent ou utilis\u00e9 dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si l'\u00e9l\u00e9ment permet d'afficher ou de t\u00e9l\u00e9charger un contenu multim\u00e9dia, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si au moins une version de l'\u00e9l\u00e9ment mise \u00e0 disposition utilise une description audio synchronis\u00e9e, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Multim\u00e9dia", 
        "name": "[MUL]-06"
    }, 
    "10075": {
        "goal": "<ul><li><h5>1.2.2 : Sous-titres (pr\u00e9-enregistr\u00e9s) : (A)</h5><br />Permettre un acc\u00e8s \u00e0 l'information et de mani\u00e8re \u00e9quivalente pour tous. Une personne ayant une d\u00e9ficience auditive, n'ayant pas d'\u00e9quipement de restitution sonore, ou ayant des probl\u00e8mes de compr\u00e9hension d'\u00e9l\u00e9ments oraux, pourra alors profiter des sous-titres.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Aucun sous titrage synchronis\u00e9 n'est pr\u00e9sent.", 
        "description": "Pr\u00e9sence du sous-titrage synchronis\u00e9 des m\u00e9dias synchronis\u00e9s qui ne sont pas diffus\u00e9s en direct.", 
        "solution": "<p> Tout \u00e9l\u00e9ment : </p><ul> <li> <code>a</code>, </li> <li> <code>applet</code>, </li> <li> <code>object</code>, </li> <li> <code>embed</code>, </li>  </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment permet de t\u00e9l\u00e9charger ou de restituer un m\u00e9dia synchronis\u00e9 qui apporte de l'information, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si ce m\u00e9dia synchronis\u00e9 ne diffuse pas un contenu en direct, poursuivre le test, sinon le test est non applicable. <br></li><li>Si le\r\nm\u00e9dia synchronis\u00e9 n'est pas une\r\nalternative anim\u00e9e, sonore ou synchronis\u00e9e \u00e0  un contenu textuel\r\npr\u00e9sent dans la page,  qui est identifi\u00e9e en tant\r\nque tel et qui n'apporte pas plus d'information que le contenu\r\ntextuel, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si le m\u00e9dia synchronis\u00e9 n\u00e9cessite l'utilisation de sous-titres synchronis\u00e9s pour le rendre compr\u00e9hensible, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Multim\u00e9dia", 
        "name": "[MUL]-09"
    }, 
    "10076": {
        "goal": "<ul><li><h5>1.2.4 : Sous-titres (en direct) : (AA)</h5><br />Permettre un acc\u00e8s \u00e0 l'information en temps r\u00e9el et de mani\u00e8re\r\n\u00e9quivalente pour tous. Une personne ayant une d\u00e9ficience auditive,\r\nn'ayant pas d'\u00e9quipement de restitution sonore, ou ayant des probl\u00e8mes\r\nde compr\u00e9hension d'\u00e9l\u00e9ments oraux, pourra alors profiter des\r\nsous-titres.</li><li><h5>1.2.9 : Seulement audio (en direct) : (AAA)</h5><br />Fournir textuellement \u00e0 tous les utilisateurs l'information v\u00e9hicul\u00e9e\r\npar les contenus seulement audio en direct. Les\r\ninformations fournies textuellement seront accessibles car elles peuvent\r\n\u00eatre restitu\u00e9es sous diff\u00e9rentes formes (visuelle, tactile)<br><br>Dans\r\nle cas contraire, le contenu des \u00e9l\u00e9ments seulement audio ne\r\nserait pas perceptible pour les personnes ayant une d\u00e9ficience auditive.<br><br>Cela\r\npermet \u00e9galement \u00e0 des robots d'indexation d'exploiter l'information,\r\nou \u00e0 des traducteurs automatiques d'en traduire le sens.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Aucun sous titrage synchronis\u00e9 n'est pr\u00e9sent pour les m\u00e9dias synchronis\u00e9s diffus\u00e9s en direct.", 
        "description": "Pr\u00e9sence du sous-titrage synchronis\u00e9 des m\u00e9dias synchronis\u00e9s ou sonores diffus\u00e9s en direct.", 
        "solution": "<p> Tout \u00e9l\u00e9ment : </p><ul> <li> <code>a</code>, </li> <li> <code>applet</code>, </li> <li> <code>object</code>, </li> <li> <code>embed</code>, </li>  </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment permet de t\u00e9l\u00e9charger ou de restituer un m\u00e9dia synchronis\u00e9 ou sonore qui apporte de l'information, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si ce m\u00e9dia synchronis\u00e9 ou sonore diffuse un contenu en direct, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si le m\u00e9dia synchronis\u00e9 ou sonore n\u00e9cessite l'utilisation de sous-titres synchronis\u00e9s pour le rendre compr\u00e9hensible, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Multim\u00e9dia", 
        "name": "[MUL]-18"
    }, 
    "10077": {
        "goal": "<ul><li><h5>1.2.2 : Sous-titres (pr\u00e9-enregistr\u00e9s) : (A)</h5><br />Permettre un acc\u00e8s \u00e0 l'information et de mani\u00e8re \u00e9quivalente pour tous. Une personne ayant une d\u00e9ficience auditive, n'ayant pas d'\u00e9quipement de restitution sonore, ou ayant des probl\u00e8mes de compr\u00e9hension d'\u00e9l\u00e9ments oraux, pourra alors profiter des sous-titres.</li><li><h5>1.2.4 : Sous-titres (en direct) : (AA)</h5><br />Permettre un acc\u00e8s \u00e0 l'information en temps r\u00e9el et de mani\u00e8re\r\n\u00e9quivalente pour tous. Une personne ayant une d\u00e9ficience auditive,\r\nn'ayant pas d'\u00e9quipement de restitution sonore, ou ayant des probl\u00e8mes\r\nde compr\u00e9hension d'\u00e9l\u00e9ments oraux, pourra alors profiter des\r\nsous-titres.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Le sous titrage synchronis\u00e9s ne restitue pas l'ensemble des informations sonores apportant de l'information pr\u00e9sente dans le m\u00e9dia synchronis\u00e9.", 
        "description": "Pertinence du sous-titrage synchronis\u00e9 des m\u00e9dias synchronis\u00e9s.", 
        "solution": "<p> Tout contenu textuel constituant les sous-titres synchronis\u00e9s d'un m\u00e9dia synchronis\u00e9. </p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Multim\u00e9dia", 
        "name": "[MUL]-10"
    }, 
    "10078": {
        "goal": "<ul><li><h5>1.4.1 : Utilisation de la couleur : (A)</h5><br />Rendre l'information v\u00e9hicul\u00e9e par la couleur perceptible pour tous les utilisateurs en situation de handicap visuel. Notamment, permettre l'acc\u00e8s \u00e0 l'information aux personnes aveugles,\r\nmal voyantes (d\u00e9ficiences de perception des couleurs, d\u00e9g\u00e9n\u00e9rescence maculaire li\u00e9e \u00e0 l'age,...) , utilisant des feuilles de styles personnalis\u00e9es ou ayant un \u00e9cran monochrome/avec un nombre de couleurs limit\u00e9.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Un texte fait r\u00e9f\u00e9rence a un \u00e9l\u00e9ment uniquement en l'identifiant gr\u00e2ce \u00e0 sa couleur ce qui le rend impossible \u00e0 identifier pour les personnes ne percevant pas les couleurs.", 
        "description": "Pr\u00e9sence d'un autre moyen que la couleur pour identifier un contenu auquel il est fait r\u00e9f\u00e9rence textuellement.", 
        "solution": "<p> Tout segment de texte mentionnant une couleur (mot, groupe de mots, phrase, bloc de texte), contenu ou non dans un \u00e9l\u00e9ment <abbr title=\"Hypertext Markup Language\" lang=\"en\" xml:lang=\"en\">HTML</abbr>, ou g\u00e9n\u00e9r\u00e9 via du code javascript ou des feuilles de styles. </p><br /><br /><li>Si le segment de texte mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si le segment de texte fait r\u00e9f\u00e9rence \u00e0 un contenu de la page ou du site, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Couleurs", 
        "name": "[COU]-01"
    }, 
    "10079": {
        "goal": "<ul><li><h5>1.4.1 : Utilisation de la couleur : (A)</h5><br />Rendre l'information v\u00e9hicul\u00e9e par la couleur perceptible pour tous les utilisateurs en situation de handicap visuel. Notamment, permettre l'acc\u00e8s \u00e0 l'information aux personnes aveugles,\r\nmal voyantes (d\u00e9ficiences de perception des couleurs, d\u00e9g\u00e9n\u00e9rescence maculaire li\u00e9e \u00e0 l'age,...) , utilisant des feuilles de styles personnalis\u00e9es ou ayant un \u00e9cran monochrome/avec un nombre de couleurs limit\u00e9.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Un \u00e9l\u00e9ment non textuel fait r\u00e9f\u00e9rence a un \u00e9l\u00e9ment uniquement en l'identifiant gr\u00e2ce \u00e0 sa couleur ce qui le rend impossible \u00e0 identifier pour les personnes ne percevant pas les couleurs.", 
        "description": "Pr\u00e9sence d'un autre moyen que la couleur pour identifier un contenu auquel il est fait r\u00e9f\u00e9rence dans un \u00e9l\u00e9ment non textuel.", 
        "solution": "<p> Tout \u00e9l\u00e9ment : </p><ul> <li> <code>img</code>, </li> <li> <code>input</code> de type image, </li> <li> <code>applet</code>, </li> <li> <code>object</code>, </li> <li> <code>embed</code>, </li> </ul><p> ou code javascript g\u00e9n\u00e9rant un des \u00e9l\u00e9ments pr\u00e9c\u00e9dents. </p><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent ou utilis\u00e9 dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si l'\u00e9l\u00e9ment permet d'afficher un texte de fa\u00e7on graphique ou poss\u00e8de un attribut <code>alt</code> non vide, poursuivre le test, sinon le test est non applicable. </li> \r\n<li>Si le texte graphique ou son alternative mentionne une couleur et fait r\u00e9f\u00e9rence \u00e0 un contenu de la page ou du site, poursuivre le test, sinon le test est non applicable. </li> ", 
        "thema": "Couleurs", 
        "name": "[COU]-02"
    }, 
    "10080": {
        "goal": "<ul><li><h5>1.3.1 : Information et relations : (A)</h5><br />Rendre l'information ind\u00e9pendante de sa mise en forme visuelle ou sonore.<br><br>Ce crit\u00e8re de succ\u00e8s est b\u00e9n\u00e9fique \u00e0 des personnes ayant diff\u00e9rents types de handicaps. Les personnes aveugles ou sourdes et aveugles utilisant un lecteur d'\u00e9cran ou un terminal braille auront acc\u00e8s \u00e0 l'information disponible par la couleur lorsque celle-ci est \u00e9galement mise \u00e0 disposition de fa\u00e7on textuelle.<br>Il vise notamment \u00e0 permettre \u00e0 ce que les agents utilisateurs restituent une information en fonction des besoins de l'utilisateur et cela ind\u00e9pendamment de sa mise en forme visuelle ou sonore. </li><li><h5>1.4.1 : Utilisation de la couleur : (A)</h5><br />Rendre l'information v\u00e9hicul\u00e9e par la couleur perceptible pour tous les utilisateurs en situation de handicap visuel. Notamment, permettre l'acc\u00e8s \u00e0 l'information aux personnes aveugles,\r\nmal voyantes (d\u00e9ficiences de perception des couleurs, d\u00e9g\u00e9n\u00e9rescence maculaire li\u00e9e \u00e0 l'age,...) , utilisant des feuilles de styles personnalis\u00e9es ou ayant un \u00e9cran monochrome/avec un nombre de couleurs limit\u00e9.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "La mise en couleur (fond, couleur de texte, etc) d'un \u00e9l\u00e9ment par le biais de CSS apporte de l'information ce qui, en l'absence d'un autre moyen tel que le balisage pour transmettre l'information, le rend impossible \u00e0 identifier pour les personnes ne percevant pas les couleurs.", 
        "description": "Pr\u00e9sence d'un moyen de transmission de l'information autre qu'une mise en couleur r\u00e9alis\u00e9e par des styles CSS.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <abbr title=\"Hypertext Markup Language\" lang=\"en\" xml:lang=\"en\">HTML</abbr> ayant des styles utilisant au moins l'une des propri\u00e9t\u00e9s <abbr title=\"Cascading Style Sheets\" lang=\"en\" xml:lang=\"en\">CSS</abbr> suivantes : </p><ul> <li> <code>color</code>, </li> <li> <code>background-color</code>, </li> <li> <code>background</code>, </li> <li> <code>border-color</code>, </li> <li> <code>border</code>, </li> <li> <code>outline-color</code>, </li> <li> <code>outline</code>. </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si l'\u00e9l\u00e9ment apporte de l'information par la couleur, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Couleurs", 
        "name": "[COU]-03"
    }, 
    "10081": {
        "goal": "<ul><li><h5>1.4.1 : Utilisation de la couleur : (A)</h5><br />Rendre l'information v\u00e9hicul\u00e9e par la couleur perceptible pour tous les utilisateurs en situation de handicap visuel. Notamment, permettre l'acc\u00e8s \u00e0 l'information aux personnes aveugles,\r\nmal voyantes (d\u00e9ficiences de perception des couleurs, d\u00e9g\u00e9n\u00e9rescence maculaire li\u00e9e \u00e0 l'age,...) , utilisant des feuilles de styles personnalis\u00e9es ou ayant un \u00e9cran monochrome/avec un nombre de couleurs limit\u00e9.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "La couleur est utilise\u00e9 dans les \u00e9l\u00e9ments non textuels pour apporter de l'information. En l'absence d'un autre moyen tel que les motifs graphiques, les hachures ou les pointill\u00e9s, cette information sera impossible \u00e0 percevoir pour les personnes ne percevant pas les couleurs.", 
        "description": "Pr\u00e9sence d'un moyen de transmission de l'information autre qu'une utilisation de la couleur dans les \u00e9l\u00e9ments non textuels.", 
        "solution": "<p> Tout \u00e9l\u00e9ment :<br></br> </p><ul> <li> <code>img</code>, </li> <li> <code>input</code> de type image, </li> <li> <code>applet</code>, </li> <li> <code>object</code>, </li> <li> <code>embed</code>, </li> </ul><p> ou code javascript g\u00e9n\u00e9rant un des \u00e9l\u00e9ments pr\u00e9c\u00e9dents. </p><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent ou utilis\u00e9 dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si l'\u00e9l\u00e9ment affiche des zones de couleurs donnant de l'information, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Couleurs", 
        "name": "[COU]-04"
    }, 
    "10082": {
        "goal": "<ul><li><h5>1.4.3 : Contraste (minimum) : (AA)</h5><br />Rendre perceptibles les contenus visuels ind\u00e9pendamment de la capacit\u00e9 \u00e0 percevoir les contrastes de couleurs. <br><br>La\r\nsaturation et la teinte n'ont que peu d'incidence pour les personnes ayant des d\u00e9ficiences de perception des couleurs&nbsp;\r\n(Knoblauch et al., 1991). Elle peut par contre affecter la\r\nperception de la luminosit\u00e9 des couleurs entre elles et donc le\r\ncontraste per\u00e7u entre une couleur de premier plan et d'arri\u00e8re plan.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Le rapport de contraste est insuffisant pour certains textes contenu dans des \u00e9l\u00e9ments non textuels.", 
        "description": "Valeur du rapport de contraste du texte contenu dans des \u00e9l\u00e9ments non textuels. (minimum)", 
        "solution": "<p> Tout \u00e9l\u00e9ment : </p><ul> <li> <code>img</code>, </li> <li> <code>input</code> de type image, </li> <li> <code>applet</code>, </li> <li> <code>object</code>, </li> <li> <code>embed</code>, </li> </ul><p> ou propri\u00e9t\u00e9 <abbr title=\"Cascading Style Sheets\" xml:lang=\"en\" lang=\"en\">CSS</abbr> g\u00e9n\u00e9rant un des \u00e9l\u00e9ments pr\u00e9c\u00e9dents,<br> ou code javascript g\u00e9n\u00e9rant un des \u00e9l\u00e9ments pr\u00e9c\u00e9dents. </p><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent ou utilis\u00e9 dans la page, poursuivre le test, sinon le test est non applicable. </li><li>Si l'\u00e9l\u00e9ment permet d'afficher du texte qui apporte de\r\nl'information, n'est pas un logo ou un texte faisant parti d'un logo et\r\nqu'aucun m\u00e9canisme permettant d'afficher l'\u00e9l\u00e9ment avec un rapport de\r\ncontraste suffisant n'est pr\u00e9sent,\r\npoursuivre le test, sinon le test est non applicable. </li><li>Si la taille finale du texte affich\u00e9e est inf\u00e9rieure \u00e0 150% ou 120% gras de la taille du texte par d\u00e9faut sp\u00e9cifi\u00e9e par les\r\nstyles de la page, ou, en son absence, de la taille fix\u00e9e couramment\r\npar un navigateur, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si la couleur du texte et celle de son arri\u00e8re plan ont \u00e9t\u00e9 d\u00e9finies par la charte graphique du service de communication publique en ligne, et que cette d\u00e9finition est ult\u00e9rieure \u00e0 publication du <abbr title=\"R\u00e9f\u00e9rentiel G\u00e9n\u00e9ral d'Accessibilit\u00e9 pour les Administrations\"> RGAA</abbr>, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Couleurs", 
        "name": "[COU]-05"
    }, 
    "10083": {
        "goal": "<ul><li><h5>1.4.3 : Contraste (minimum) : (AA)</h5><br />Rendre perceptibles les contenus visuels ind\u00e9pendamment de la capacit\u00e9 \u00e0 percevoir les contrastes de couleurs. <br><br>La\r\nsaturation et la teinte n'ont que peu d'incidence pour les personnes ayant des d\u00e9ficiences de perception des couleurs&nbsp;\r\n(Knoblauch et al., 1991). Elle peut par contre affecter la\r\nperception de la luminosit\u00e9 des couleurs entre elles et donc le\r\ncontraste per\u00e7u entre une couleur de premier plan et d'arri\u00e8re plan.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Le rapport de contraste est insuffisant pour certains textes contenu dans des \u00e9l\u00e9ments non textuels utilis\u00e9s comme fond d'\u00e9l\u00e9ments HTML.", 
        "description": "Valeur du rapport de contraste du texte contenu dans des \u00e9l\u00e9ments non textuels utilis\u00e9s comme fond d'\u00e9l\u00e9ments HTML. (minimum)", 
        "solution": "<p> Tout \u00e9l\u00e9ment <abbr title=\"Hypertext Markup Language\" xml:lang=\"en\" lang=\"en\">HTML</abbr> ayant des styles associ\u00e9s, utilisant au moins l'une des propri\u00e9t\u00e9s <abbr title=\"Cascading Style Sheets\" xml:lang=\"en\" lang=\"en\">CSS</abbr> suivantes : </p><ul> <li> <code>background</code>, </li> <li> <code>background-image</code>, </li> <li> <code>list</code>, </li> <li> <code>list-style-image.</code> </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li><li>Si l'\u00e9l\u00e9ment permet d'afficher du texte qui apporte de\r\nl'information, n'est pas un logo ou un texte faisant parti d'un logo  et qu'aucun m\u00e9canisme permettant d'afficher l'\u00e9l\u00e9ment avec un rapport de contraste suffisant n'est pr\u00e9sent,\r\npoursuivre le test, sinon le test est non applicable.</li><li>Si la taille finale du texte affich\u00e9e est inf\u00e9rieure \u00e0 150% ou 120% gras de la taille du texte par d\u00e9faut sp\u00e9cifi\u00e9e par les\r\nstyles de la page, ou, en son absence, de la taille fix\u00e9e couramment\r\npar un navigateur, poursuivre le test, sinon le test est non applicable. </li><li>Si la couleur du texte et celle de son arri\u00e8re plan ont \u00e9t\u00e9 d\u00e9finies par la charte graphique du service de communication publique en ligne, et que cette d\u00e9finition est ult\u00e9rieure \u00e0 publication du <abbr title=\"R\u00e9f\u00e9rentiel G\u00e9n\u00e9ral d'Accessibilit\u00e9 pour les Administrations\"> RGAA</abbr>, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Couleurs", 
        "name": "[COU]-06"
    }, 
    "10084": {
        "goal": "<ul><li><h5>1.4.3 : Contraste (minimum) : (AA)</h5><br />Rendre perceptibles les contenus visuels ind\u00e9pendamment de la capacit\u00e9 \u00e0 percevoir les contrastes de couleurs. <br><br>La\r\nsaturation et la teinte n'ont que peu d'incidence pour les personnes ayant des d\u00e9ficiences de perception des couleurs&nbsp;\r\n(Knoblauch et al., 1991). Elle peut par contre affecter la\r\nperception de la luminosit\u00e9 des couleurs entre elles et donc le\r\ncontraste per\u00e7u entre une couleur de premier plan et d'arri\u00e8re plan.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Le rapport de contraste est insuffisant pour certains textes.", 
        "description": "Valeur du rapport de contraste du texte contenu dans un segment de texte. (minimum)", 
        "solution": "<p> Tout segment de texte (mot, groupe de mots, phrase, bloc de texte), contenu ou non dans un \u00e9l\u00e9ment <abbr title=\"Hypertext Markup Language\" xml:lang=\"en\" lang=\"en\">HTML</abbr>, ou g\u00e9n\u00e9r\u00e9 via du code javascript ou des feuilles de styles, et mis en couleur par des styles utilisant au moins l'une des propri\u00e9t\u00e9s <abbr title=\"Cascading Style Sheets\" xml:lang=\"en\" lang=\"en\">CSS</abbr> suivantes : </p><ul> <li> <code>color</code>, </li> <li> <code>background</code>, </li> <li> <code>background-color</code>, </li> <li> <code>background-image</code>, </li> <li> <code>content</code>, </li> <li> <code>list</code>, </li> <li> <code>list-style-image</code>. </li> </ul><br /><br /><li>Si le segment de texte mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li><li>Si le segment de texte apporte de\r\nl'information, n'est pas un logo ou un texte faisant parti d'un logo et\r\nqu'aucun m\u00e9canisme permettant d'afficher l'\u00e9l\u00e9ment avec un rapport de\r\ncontraste suffisant n'est pr\u00e9sent,\r\npoursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si la taille finale du texte affich\u00e9e est inf\u00e9rieure \u00e0 150% ou 120% gras de la taille du texte par d\u00e9faut sp\u00e9cifi\u00e9e par les\r\nstyles de la page, ou, en son absence, de la taille fix\u00e9e couramment\r\npar un navigateur, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Couleurs", 
        "name": "[COU]-07"
    }, 
    "10085": {
        "goal": "<ul><li><h5>1.4.3 : Contraste (minimum) : (AA)</h5><br />Rendre perceptibles les contenus visuels ind\u00e9pendamment de la capacit\u00e9 \u00e0 percevoir les contrastes de couleurs. <br><br>La\r\nsaturation et la teinte n'ont que peu d'incidence pour les personnes ayant des d\u00e9ficiences de perception des couleurs&nbsp;\r\n(Knoblauch et al., 1991). Elle peut par contre affecter la\r\nperception de la luminosit\u00e9 des couleurs entre elles et donc le\r\ncontraste per\u00e7u entre une couleur de premier plan et d'arri\u00e8re plan.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Le rapport de contraste est insuffisant pour certains textes agrandi contenu dans des \u00e9l\u00e9ments non textuels.", 
        "description": "Valeur du rapport de contraste du texte agrandi contenu dans des \u00e9l\u00e9ments non textuels. (minimum)", 
        "solution": "<p> Tout \u00e9l\u00e9ment :<br> </p><ul> <li> <code>img</code>, </li> <li> <code>input</code> de type image, </li> <li> <code>applet</code>, </li> <li> <code>object</code>, </li> <li> <code>embed</code>, </li> </ul><p> ou propri\u00e9t\u00e9 <abbr title=\"Cascading Style Sheets\" xml:lang=\"en\" lang=\"en\">CSS</abbr> g\u00e9n\u00e9rant un des \u00e9l\u00e9ments pr\u00e9c\u00e9dents,<br> ou code javascript g\u00e9n\u00e9rant un des \u00e9l\u00e9ments pr\u00e9c\u00e9dents. </p><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent ou utilis\u00e9 dans la page, poursuivre le test, sinon le test est non applicable. </li><li>Si l'\u00e9l\u00e9ment permet d'afficher du texte qui apporte de\r\nl'information, n'est pas un logo ou un texte faisant parti d'un logo et\r\nqu'aucun m\u00e9canisme permettant d'afficher l'\u00e9l\u00e9ment avec un rapport de\r\ncontraste suffisant n'est pr\u00e9sent,\r\npoursuivre le test, sinon le test est non applicable.</li><li>Si la taille finale du texte affich\u00e9e est sup\u00e9rieure ou \u00e9gale \u00e0 150% ou 120% gras de la taille du texte par d\u00e9faut sp\u00e9cifi\u00e9e par les\r\nstyles de la page, ou, en son absence, de la taille fix\u00e9e couramment\r\npar un navigateur, poursuivre le test, sinon le test est non applicable. </li><li>Si la couleur du texte et celle de son arri\u00e8re plan ont \u00e9t\u00e9 d\u00e9finies par la charte graphique du service de communication publique en ligne, et que cette d\u00e9finition est ult\u00e9rieure \u00e0 la publication du <abbr title=\"R\u00e9f\u00e9rentiel G\u00e9n\u00e9ral d'Accessibilit\u00e9 pour les Administrations\"> RGAA</abbr>, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Couleurs", 
        "name": "[COU]-08"
    }, 
    "10086": {
        "goal": "<ul><li><h5>1.4.3 : Contraste (minimum) : (AA)</h5><br />Rendre perceptibles les contenus visuels ind\u00e9pendamment de la capacit\u00e9 \u00e0 percevoir les contrastes de couleurs. <br><br>La\r\nsaturation et la teinte n'ont que peu d'incidence pour les personnes ayant des d\u00e9ficiences de perception des couleurs&nbsp;\r\n(Knoblauch et al., 1991). Elle peut par contre affecter la\r\nperception de la luminosit\u00e9 des couleurs entre elles et donc le\r\ncontraste per\u00e7u entre une couleur de premier plan et d'arri\u00e8re plan.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Le rapport de contraste est insuffisant pour certains textes agrandi contenu dans des \u00e9l\u00e9ments non textuels utilis\u00e9s comme fond d'\u00e9l\u00e9ments HTML.", 
        "description": "Valeur du rapport de contraste du texte agrandi contenu dans des \u00e9l\u00e9ments non textuels utilis\u00e9s comme fond d'\u00e9l\u00e9ments HTML. (minimum)", 
        "solution": "<p> Tout \u00e9l\u00e9ment <abbr title=\"Hypertext Markup Language\" xml:lang=\"en\" lang=\"en\">HTML</abbr> ayant des styles associ\u00e9s, utilisant au moins l'une des propri\u00e9t\u00e9s <abbr title=\"Cascading Style Sheets\" xml:lang=\"en\" lang=\"en\">CSS</abbr> suivantes : </p><ul> <li> <code>background</code>, </li> <li> <code>background-image</code>, </li> <li> <code>list</code>, </li> <li> <code>list-style-image.</code> </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li><li>Si l'\u00e9l\u00e9ment permet d'afficher du texte qui apporte de\r\nl'information, n'est pas un logo ou un texte faisant parti d'un logo et\r\nqu'aucun m\u00e9canisme permettant d'afficher l'\u00e9l\u00e9ment avec un rapport de\r\ncontraste suffisant n'est pr\u00e9sent,\r\npoursuivre le test, sinon le test est non applicable.</li><li>Si la taille finale du texte affich\u00e9e est sup\u00e9rieure ou \u00e9gale \u00e0 150% ou\r\n120% gras de la taille du texte par d\u00e9faut sp\u00e9cifi\u00e9e par les\r\nstyles de la page, ou, en son absence, de la taille fix\u00e9e couramment\r\npar un navigateur, poursuivre le test, sinon le test est non\r\napplicable.</li><li>Si la couleur du texte et celle de son arri\u00e8re plan ont \u00e9t\u00e9 d\u00e9finies par la charte graphique du service de communication publique en ligne, et que cette d\u00e9finition est ult\u00e9rieure \u00e0 publication du <abbr title=\"R\u00e9f\u00e9rentiel G\u00e9n\u00e9ral d'Accessibilit\u00e9 pour les Administrations\"> RGAA</abbr>, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Couleurs", 
        "name": "[COU]-09"
    }, 
    "10087": {
        "goal": "<ul><li><h5>1.4.3 : Contraste (minimum) : (AA)</h5><br />Rendre perceptibles les contenus visuels ind\u00e9pendamment de la capacit\u00e9 \u00e0 percevoir les contrastes de couleurs. <br><br>La\r\nsaturation et la teinte n'ont que peu d'incidence pour les personnes ayant des d\u00e9ficiences de perception des couleurs&nbsp;\r\n(Knoblauch et al., 1991). Elle peut par contre affecter la\r\nperception de la luminosit\u00e9 des couleurs entre elles et donc le\r\ncontraste per\u00e7u entre une couleur de premier plan et d'arri\u00e8re plan.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Le rapport de contraste est insuffisant pour certains textes agrandi.", 
        "description": "Valeur du rapport de contraste du texte agrandi contenu dans un segment de texte. (minimum)", 
        "solution": "<p> Tout segment de texte (mot, groupe de mots, phrase, bloc de texte), contenu ou non dans un \u00e9l\u00e9ment <abbr title=\"Hypertext Markup Language\" xml:lang=\"en\" lang=\"en\">HTML</abbr>, ou g\u00e9n\u00e9r\u00e9 via du code javascript ou des feuilles de styles, et mis en couleur par des styles utilisant au moins l'une des propri\u00e9t\u00e9s <abbr title=\"Cascading Style Sheets\" xml:lang=\"en\" lang=\"en\">CSS</abbr> suivantes : </p><ul> <li> <code>color</code>, </li> <li> <code>background</code>, </li> <li> <code>background-color</code>, </li> <li> <code>background-image</code>, </li> <li> <code>content</code>, </li> <li> <code>list</code>, </li> <li> <code>list-style-image</code>. </li> </ul><br /><br /><li>Si le segment de texte mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li><li>Si le segment de texte apporte de\r\nl'information, n'est pas un logo ou un texte faisant parti d'un logo et\r\nqu'aucun m\u00e9canisme permettant d'afficher l'\u00e9l\u00e9ment avec un rapport de\r\ncontraste suffisant n'est pr\u00e9sent,\r\npoursuivre le test, sinon le test est non applicable.</li><li>Si la taille finale du texte affich\u00e9e est sup\u00e9rieure ou \u00e9gale \u00e0 150% ou\r\n120% gras de la taille du texte par d\u00e9faut sp\u00e9cifi\u00e9e par les\r\nstyles de la page, ou, en son absence, de la taille fix\u00e9e couramment\r\npar un navigateur, poursuivre le test, sinon le test est non\r\napplicable.</li>", 
        "thema": "Couleurs", 
        "name": "[COU]-10"
    }, 
    "10088": {
        "goal": "<ul><li><h5>1.3.1 : Information et relations : (A)</h5><br />Rendre l'information ind\u00e9pendante de sa mise en forme visuelle ou sonore.<br><br>Ce crit\u00e8re de succ\u00e8s est b\u00e9n\u00e9fique \u00e0 des personnes ayant diff\u00e9rents types de handicaps. Les personnes aveugles ou sourdes et aveugles utilisant un lecteur d'\u00e9cran ou un terminal braille auront acc\u00e8s \u00e0 l'information disponible par la couleur lorsque celle-ci est \u00e9galement mise \u00e0 disposition de fa\u00e7on textuelle.<br>Il vise notamment \u00e0 permettre \u00e0 ce que les agents utilisateurs restituent une information en fonction des besoins de l'utilisateur et cela ind\u00e9pendamment de sa mise en forme visuelle ou sonore. </li><li><h5>1.4.5 : Texte sous forme d'image : (AA)</h5><br />Favoriser le recours \u00e0 des technologies qui permettent aux utilisateurs d'adapter de mani\u00e8re optimale \u00e0 leurs besoins le rendu du contenu. Des contenus n\u00e9cessitant une mise en forme sp\u00e9cifique incitent parfois \u00e0 recourir \u00e0 des \u00e9l\u00e9ments non textuels pour obtenir la mise en forme d\u00e9sir\u00e9e : formules math\u00e9matiques, titres et \u00e9l\u00e9ments de menus notamment.<br><br>Dans diff\u00e9rents contextes d'utilisation, les contenus non textuels ne seront perceptibles que par leur \u00e9quivalent textuel, qui peut en outre ne pas en reproduire totalement le sens. Par ailleurs, leur pr\u00e9sentation ne sera pas ais\u00e9ment modifiable pour s'adapter aux besoins des utilisateurs (agrandissement des textes par exemple).</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Certains textes sont des textes mis en image : ces textes ne sont pas agrandissables via le zoom typographique d'un navigateur, et leur rendu ne peut pas \u00eatre adapt\u00e9 aux besoin d'un utilisateur ayant par exemple des difficult\u00e9s avec les couleurs utilis\u00e9es (sans passer par une aide technique sp\u00e9cifique du type loupe d'\u00e9cran adaptative). Or, l'absence de contraintes typographiques fortes devrait rendre possible leur remplacement par des textes HTML styl\u00e9s via CSS.\r\n", 
        "description": "Possibilit\u00e9 de remplacer les \u00e9l\u00e9ments non textuels par une mise en forme effectu\u00e9e gr\u00e2ce aux styles CSS.", 
        "solution": "<p>Tout \u00e9l\u00e9ment : </p><ul> <li> <code>img</code>, </li> <li> <code>object</code>, </li> <li> <code>embed</code>, </li> <li> <code>applet</code>. </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment contient du texte, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment a \u00e9t\u00e9 d\u00e9fini par la charte graphique du service de communication publique en ligne, et que cette d\u00e9finition est ult\u00e9rieure \u00e0 publication du RGAA, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment n'est pas un logotype ou purement d\u00e9coratif, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si la page ne comporte aucun m\u00e9canisme de remplacer les \u00e9l\u00e9ments non textuels par une mise en forme effectu\u00e9e gr\u00e2ce aux styles CSS, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Pr\u00e9sentation", 
        "name": "[PR\u00e9]-06"
    }, 
    "10089": {
        "goal": "<ul><li><h5>4.1.1 : Analyse syntaxique : (A)</h5><br />Permettre aux agents utilisateurs et aux technologies d'assistance d'interpr\u00e9ter correctement les contenus balis\u00e9s. <br><br>En effet, la pr\u00e9sence d'erreurs dans l'utilisation d'une grammaire formelle d\u00e9finie par le W3C peut perturber le bon fonctionnement des technologies d'assistance.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Aucune DTD n'est pr\u00e9sente.", 
        "description": "Pr\u00e9sence de la d\u00e9claration d'utilisation d'une DTD.", 
        "solution": "<p> Toute instruction <code>!DOCTYPE</code>. </p><br /><br />", 
        "thema": "Standards", 
        "name": "[STA]-01"
    }, 
    "10090": {
        "goal": "<ul><li><h5>4.1.1 : Analyse syntaxique : (A)</h5><br />Permettre aux agents utilisateurs et aux technologies d'assistance d'interpr\u00e9ter correctement les contenus balis\u00e9s. <br><br>En effet, la pr\u00e9sence d'erreurs dans l'utilisation d'une grammaire formelle d\u00e9finie par le W3C peut perturber le bon fonctionnement des technologies d'assistance.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "La DTD doit \u00eatre d\u00e9clarer en d\u00e9but de code source.", 
        "description": "Conformit\u00e9 de la position de la d\u00e9claration d'utilisation d'une DTD.", 
        "solution": "<p> Toute instruction <code>!DOCTYPE</code>. </p><br /><br /><li>Si l'instruction mentionn\u00e9e dans le champ d'application est pr\u00e9sente dans la page, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Standards", 
        "name": "[STA]-02"
    }, 
    "10091": {
        "goal": "<ul><li><h5>4.1.1 : Analyse syntaxique : (A)</h5><br />Permettre aux agents utilisateurs et aux technologies d'assistance d'interpr\u00e9ter correctement les contenus balis\u00e9s. <br><br>En effet, la pr\u00e9sence d'erreurs dans l'utilisation d'une grammaire formelle d\u00e9finie par le W3C peut perturber le bon fonctionnement des technologies d'assistance.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "La syntaxe de la d\u00e9claration d'utilisation d'une DTD n'est pas conforme \u00e0 la liste mise \u00e0 disposition par le W3C.", 
        "description": "Conformit\u00e9 syntaxique de la d\u00e9claration d'utilisation d'une DTD.", 
        "solution": "<p> Toute instruction <code>!DOCTYPE</code>. </p><br /><br /><li>Si l'instruction mentionn\u00e9e dans le champ d'application est pr\u00e9sente dans la page, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Standards", 
        "name": "[STA]-03"
    }, 
    "10092": {
        "goal": "<ul><li><h5>4.1.1 : Analyse syntaxique : (A)</h5><br />Permettre aux agents utilisateurs et aux technologies d'assistance d'interpr\u00e9ter correctement les contenus balis\u00e9s. <br><br>En effet, la pr\u00e9sence d'erreurs dans l'utilisation d'une grammaire formelle d\u00e9finie par le W3C peut perturber le bon fonctionnement des technologies d'assistance.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Des erreurs de validation HTML/XHTML sont pr\u00e9sentes dans le code.", 
        "description": "Validit\u00e9 du code HTML / XHTML au regard de la DTD d\u00e9clar\u00e9e.", 
        "solution": "<p> Toute page <abbr title=\"Hypertext Markup Language\" xml:lang=\"en\" lang=\"en\">HTML</abbr> ou <abbr title=\"Extensible Hypertext Markup Language\" xml:lang=\"en\" lang=\"en\">XHTML</abbr>. </p><br /><br /><li>Si une d\u00e9claration d'utilisation d'une <abbr title=\"Document Type Definition\" xml:lang=\"en\" lang=\"en\">DTD</abbr> est pr\u00e9sente dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si la page est envoy\u00e9e sous forme de text/html et qu'elle est invalide selon la <abbr title=\"Document Type Definition\" xml:lang=\"en\" lang=\"en\">DTD</abbr> d\u00e9clar\u00e9e, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Standards", 
        "name": "[STA]-04"
    }, 
    "10093": {
        "goal": "<ul><li><h5>1.3.1 : Information et relations : (A)</h5><br />Rendre l'information ind\u00e9pendante de sa mise en forme visuelle ou sonore.<br><br>Ce crit\u00e8re de succ\u00e8s est b\u00e9n\u00e9fique \u00e0 des personnes ayant diff\u00e9rents types de handicaps. Les personnes aveugles ou sourdes et aveugles utilisant un lecteur d'\u00e9cran ou un terminal braille auront acc\u00e8s \u00e0 l'information disponible par la couleur lorsque celle-ci est \u00e9galement mise \u00e0 disposition de fa\u00e7on textuelle.<br>Il vise notamment \u00e0 permettre \u00e0 ce que les agents utilisateurs restituent une information en fonction des besoins de l'utilisateur et cela ind\u00e9pendamment de sa mise en forme visuelle ou sonore. </li><li><h5>1.4.5 : Texte sous forme d'image : (AA)</h5><br />Favoriser le recours \u00e0 des technologies qui permettent aux utilisateurs d'adapter de mani\u00e8re optimale \u00e0 leurs besoins le rendu du contenu. Des contenus n\u00e9cessitant une mise en forme sp\u00e9cifique incitent parfois \u00e0 recourir \u00e0 des \u00e9l\u00e9ments non textuels pour obtenir la mise en forme d\u00e9sir\u00e9e : formules math\u00e9matiques, titres et \u00e9l\u00e9ments de menus notamment.<br><br>Dans diff\u00e9rents contextes d'utilisation, les contenus non textuels ne seront perceptibles que par leur \u00e9quivalent textuel, qui peut en outre ne pas en reproduire totalement le sens. Par ailleurs, leur pr\u00e9sentation ne sera pas ais\u00e9ment modifiable pour s'adapter aux besoins des utilisateurs (agrandissement des textes par exemple).</li><li><h5>1.4.9 : Texte sous forme d'image (sans exception) : (AAA)</h5><br />Favoriser le recours \u00e0 des technologies qui permettent aux utilisateurs\r\nd'adapter de mani\u00e8re optimale \u00e0 leurs besoins le rendu du contenu. Des\r\ncontenus n\u00e9cessitant une mise en forme sp\u00e9cifique incitent parfois \u00e0\r\nrecourir \u00e0 des \u00e9l\u00e9ments non textuels pour obtenir la mise en forme\r\nd\u00e9sir\u00e9e : formules math\u00e9matiques, titres et \u00e9l\u00e9ments de menus notamment.<br><br>Dans diff\u00e9rents contextes d'utilisation, les contenus non textuels ne\r\nseront perceptibles que par leur \u00e9quivalent textuel, qui peut en\r\noutre ne pas en reproduire totalement le sens. Par ailleurs, leur\r\npr\u00e9sentation ne sera pas ais\u00e9ment modifiable pour s'adapter aux besoins\r\ndes utilisateurs (agrandissement des textes par exemple).</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Certains attributs ou \u00e9l\u00e9ment HTML de pr\u00e9sentation sont pr\u00e9sents dans le code.", 
        "description": "Absence d'attributs ou d'\u00e9l\u00e9ments HTML de pr\u00e9sentation.", 
        "solution": "<p> Tout \u00e9l\u00e9ment : </p><br><ul>  <li> <code>basefont</code>, </li>  <li> <code>blink</code>, </li> <li> <code>center</code>, </li> <li> <code>font</code>, </li>  <li> <code>marquee</code>, </li> <li> <code>s</code>, </li>  <li> <code>strike</code>, </li> <li> <code>tt</code>, </li> <li> <code>u</code>, </li> </ul><p> ou attribut : </p><ul> <li> <code>align</code>, </li> <li> <code>alink</code>, </li> <li> <code>background</code>, </li> <li> <code>basefont</code>, </li> <li> <code>bgcolor</code>, </li> <li> <code>border</code>, </li> <li> <code>color</code>, </li> <li> <code>link</code>, </li> <li> <code>text</code>, </li> <li> <code>vlink</code>, </li> </ul><br /><br />", 
        "thema": "Pr\u00e9sentation", 
        "name": "[PR\u00e9]-08"
    }, 
    "10094": {
        "goal": "<ul><li><h5>1.3.1 : Information et relations : (A)</h5><br />Rendre l'information ind\u00e9pendante de sa mise en forme visuelle ou sonore.<br><br>Ce crit\u00e8re de succ\u00e8s est b\u00e9n\u00e9fique \u00e0 des personnes ayant diff\u00e9rents types de handicaps. Les personnes aveugles ou sourdes et aveugles utilisant un lecteur d'\u00e9cran ou un terminal braille auront acc\u00e8s \u00e0 l'information disponible par la couleur lorsque celle-ci est \u00e9galement mise \u00e0 disposition de fa\u00e7on textuelle.<br>Il vise notamment \u00e0 permettre \u00e0 ce que les agents utilisateurs restituent une information en fonction des besoins de l'utilisateur et cela ind\u00e9pendamment de sa mise en forme visuelle ou sonore. </li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Les \u00e9l\u00e9ments HTML ne sont pas utilis\u00e9s en respectant leur r\u00f4le s\u00e9mantique mais d\u00e9tourn\u00e9 \u00e0 des fins de mise en page.", 
        "description": "Absence d'\u00e9l\u00e9ments HTML utilis\u00e9s \u00e0 des fins de pr\u00e9sentation.", 
        "solution": "<p> Tout \u00e9l\u00e9ment :<br> </p><ul> <li> <code>a</code> </li> <li> <code>abbr</code> </li> <li> <code>acronym</code> </li> <li> <code>address</code> </li> <li> <code>area</code> </li> <li> <code>bdo</code> </li> <li> <code>blockquote</code> </li> <li> <code>button</code> </li> <li> <code>caption</code> </li> <li> <code>cite</code> </li> <li> <code>code</code> </li> <li> <code>dd</code> </li> <li> <code>dfn</code> </li> <li> <code>dir</code>, </li> <li> <code>dl</code> </li> <li> <code>dt</code> </li> <li> <code>em</code> </li> <li> <code>fieldset</code> </li> <li> <code>form</code> </li> <li> <code>h1</code> \u00e0 <code>h6</code> </li> <li> <code>input</code> </li> <li> <code>ins</code> </li> <li> <code>kbd</code> </li> <li> <code>label</code> </li> <li> <code>legend</code> </li> <li> <code>li</code> </li> <li> <code>menu</code>, </li> <li> <code>ol</code> </li> <li> <code>pre</code> ou suite d'espace ins\u00e9cables </li> <li> <code>q</code> </li> <li> <code>samp</code> </li> <li> <code>select</code> </li> <li> <code>strong</code> </li> <li> <code>sub</code> </li> <li> <code>sup</code> </li> <li> <code>th</code> </li> <li> <code>var</code> </li> <li> <code>ul</code> </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable </li>", 
        "thema": "Pr\u00e9sentation", 
        "name": "[PR\u00e9]-09"
    }, 
    "10095": {
        "goal": "<ul><li><h5>2.4.1 : Contourner des blocs : (A)</h5><br />Rendre les contenus navigables pour les utilisateurs qui y ont un acc\u00e8s s\u00e9quentiel lin\u00e9aire.<br><br>Les personnes utilisant un lecteur d'\u00e9cran, un agrandisseur, les\r\npersonnes qui ont une limitation cognitive ou celles qui ne se servent que du\r\nclavier pour cause de limitation motrice lisent la page de mani\u00e8re lin\u00e9aire. De ce fait, des liens internes \u00e0 la page ou les titres de hi\u00e9rarchie leur permettent soit d'acc\u00e9der directement \u00e0 l'information qui les int\u00e9resse, soit de sauter d'autres informations qui ne les int\u00e9ressent pas et de gagner ainsi un temps pr\u00e9cieux.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Toutes les page ne comportent au moins un titre de hi\u00e9rarchie H1.", 
        "description": "Pr\u00e9sence d'au moins un titre de hi\u00e9rarchie de premier niveau ( h1).", 
        "solution": "<p> Tout \u00e9l\u00e9ment <code>h1</code>. </p><br /><br />", 
        "thema": "Structure", 
        "name": "[STR]-01"
    }, 
    "10096": {
        "goal": "<ul><li><h5>1.3.1 : Information et relations : (A)</h5><br />Rendre l'information ind\u00e9pendante de sa mise en forme visuelle ou sonore.<br><br>Ce crit\u00e8re de succ\u00e8s est b\u00e9n\u00e9fique \u00e0 des personnes ayant diff\u00e9rents types de handicaps. Les personnes aveugles ou sourdes et aveugles utilisant un lecteur d'\u00e9cran ou un terminal braille auront acc\u00e8s \u00e0 l'information disponible par la couleur lorsque celle-ci est \u00e9galement mise \u00e0 disposition de fa\u00e7on textuelle.<br>Il vise notamment \u00e0 permettre \u00e0 ce que les agents utilisateurs restituent une information en fonction des besoins de l'utilisateur et cela ind\u00e9pendamment de sa mise en forme visuelle ou sonore. </li><li><h5>2.4.6 : En-t\u00eates et \u00e9tiquettes : (AA)</h5><br />Permettre aux utilisateurs d'identifier l'information donn\u00e9e dans une page Web et de comprendre son organisation.<br><br>    L'utilisation d'en-t\u00eates et d'\u00e9tiquettes facilitera la lecture et la compr\u00e9hension d'une page pour les personnes ayant une m\u00e9moire \u00e0 court terme ou des difficult\u00e9s de lecture. Cela permettra \u00e9galement aux utilisateurs de lecteur d'\u00e9cran de pouvoir aller ou sauter directement \u00e0 un contenu</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Le contenu des titres de hi\u00e9rarchie ne refl\u00e8te pas le contenu qu'il pr\u00e9c\u00e8de.", 
        "description": "Pertinence du contenu des titres de hi\u00e9rarchie.", 
        "solution": "<p> Tout \u00e9l\u00e9ment : </p><ul> <li> <code>h1,</code> </li> <li> <code>h2,</code> </li> <li> <code>h3</code>, </li> <li> <code>h4</code>, </li> <li> <code>h5</code>, </li> <li> <code>h6</code>, </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Structure", 
        "name": "[STR]-02"
    }, 
    "10097": {
        "goal": "<ul><li><h5>1.3.1 : Information et relations : (A)</h5><br />Rendre l'information ind\u00e9pendante de sa mise en forme visuelle ou sonore.<br><br>Ce crit\u00e8re de succ\u00e8s est b\u00e9n\u00e9fique \u00e0 des personnes ayant diff\u00e9rents types de handicaps. Les personnes aveugles ou sourdes et aveugles utilisant un lecteur d'\u00e9cran ou un terminal braille auront acc\u00e8s \u00e0 l'information disponible par la couleur lorsque celle-ci est \u00e9galement mise \u00e0 disposition de fa\u00e7on textuelle.<br>Il vise notamment \u00e0 permettre \u00e0 ce que les agents utilisateurs restituent une information en fonction des besoins de l'utilisateur et cela ind\u00e9pendamment de sa mise en forme visuelle ou sonore. </li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "La continuit\u00e9 hi\u00e9rarchique des \u00e9l\u00e9ments de titrage H1...H6 n'est pas respect\u00e9e dans toutes les pages.", 
        "description": "Absence d'interruption dans la hi\u00e9rarchie de titres.", 
        "solution": "<p> Tout \u00e9l\u00e9ment : </p><ul> <li> <code>h2,</code> </li> <li> <code>h3</code>, </li> <li> <code>h4</code>, </li> <li> <code>h5</code>, </li> <li> <code>h6</code>, </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Structure", 
        "name": "[STR]-03"
    }, 
    "10098": {
        "goal": "<ul><li><h5>1.3.1 : Information et relations : (A)</h5><br />Rendre l'information ind\u00e9pendante de sa mise en forme visuelle ou sonore.<br><br>Ce crit\u00e8re de succ\u00e8s est b\u00e9n\u00e9fique \u00e0 des personnes ayant diff\u00e9rents types de handicaps. Les personnes aveugles ou sourdes et aveugles utilisant un lecteur d'\u00e9cran ou un terminal braille auront acc\u00e8s \u00e0 l'information disponible par la couleur lorsque celle-ci est \u00e9galement mise \u00e0 disposition de fa\u00e7on textuelle.<br>Il vise notamment \u00e0 permettre \u00e0 ce que les agents utilisateurs restituent une information en fonction des besoins de l'utilisateur et cela ind\u00e9pendamment de sa mise en forme visuelle ou sonore. </li><li><h5>2.4.1 : Contourner des blocs : (A)</h5><br />Rendre les contenus navigables pour les utilisateurs qui y ont un acc\u00e8s s\u00e9quentiel lin\u00e9aire.<br><br>Les personnes utilisant un lecteur d'\u00e9cran, un agrandisseur, les\r\npersonnes qui ont une limitation cognitive ou celles qui ne se servent que du\r\nclavier pour cause de limitation motrice lisent la page de mani\u00e8re lin\u00e9aire. De ce fait, des liens internes \u00e0 la page ou les titres de hi\u00e9rarchie leur permettent soit d'acc\u00e9der directement \u00e0 l'information qui les int\u00e9resse, soit de sauter d'autres informations qui ne les int\u00e9ressent pas et de gagner ainsi un temps pr\u00e9cieux.</li><li><h5>2.4.10 :  En-t\u00eates de section : (AAA)</h5><br />Permettre aux utilisateurs d'identifier l'information donn\u00e9e dans une page Web et de comprendre son organisation dans celle-ci. <br><br>Les en-t\u00eates de section ou titres hi\u00e9rarchis\u00e9s permettent aux utilisateurs, quel que soit leur mode d'acc\u00e8s, d'identifier l'organisation de la page et les diff\u00e9rents blocs d'information qui la composent. Ils permettent \u00e9galement, dans certains contextes de navigation (lecteur d'\u00e9cran), d'extraire une table des mati\u00e8res de la page afin de la parcourir et d'acc\u00e9der rapidement \u00e0 ses diff\u00e9rentes sections.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "La structure de titrage de certaines pages n'est pas compl\u00e8te, et ne refl\u00e8te pas l'organisation des contenus.", 
        "description": "Pr\u00e9sence d'une hi\u00e9rarchie de titres compl\u00e8te.", 
        "solution": "<p> Tout contenu informatif d'une page. </p><br /><br /><li>Si le contenu mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable </li>\r\n<li>Si le contenu n\u00e9cessite une structuration hi\u00e9rarchique au-del\u00e0 du seul h1, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Structure", 
        "name": "[STR]-04"
    }, 
    "10099": {
        "goal": "<ul><li><h5>1.3.1 : Information et relations : (A)</h5><br />Rendre l'information ind\u00e9pendante de sa mise en forme visuelle ou sonore.<br><br>Ce crit\u00e8re de succ\u00e8s est b\u00e9n\u00e9fique \u00e0 des personnes ayant diff\u00e9rents types de handicaps. Les personnes aveugles ou sourdes et aveugles utilisant un lecteur d'\u00e9cran ou un terminal braille auront acc\u00e8s \u00e0 l'information disponible par la couleur lorsque celle-ci est \u00e9galement mise \u00e0 disposition de fa\u00e7on textuelle.<br>Il vise notamment \u00e0 permettre \u00e0 ce que les agents utilisateurs restituent une information en fonction des besoins de l'utilisateur et cela ind\u00e9pendamment de sa mise en forme visuelle ou sonore. </li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Certains contenus de type liste ordonn\u00e9e ne sont pas structur\u00e9s avec des \u00e9l\u00e9ments de liste appropri\u00e9s, et sont simul\u00e9s avec des signes typographiques (tirets).", 
        "description": "Absence de simulation visuelle de liste non ordonn\u00e9e.", 
        "solution": "<p> Tout segment de texte. </p><br /><br /><li>Si deux segments de texte diff\u00e9rents ou identiques sont pr\u00e9sents dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si les segments de texte sont mis en forme visuellement par un marqueur de liste (-, &gt;, #, *, image ou image de fond repr\u00e9sentant un marqueur de liste, etc), poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Structure", 
        "name": "[STR]-05"
    }, 
    "10100": {
        "goal": "<ul><li><h5>1.3.1 : Information et relations : (A)</h5><br />Rendre l'information ind\u00e9pendante de sa mise en forme visuelle ou sonore.<br><br>Ce crit\u00e8re de succ\u00e8s est b\u00e9n\u00e9fique \u00e0 des personnes ayant diff\u00e9rents types de handicaps. Les personnes aveugles ou sourdes et aveugles utilisant un lecteur d'\u00e9cran ou un terminal braille auront acc\u00e8s \u00e0 l'information disponible par la couleur lorsque celle-ci est \u00e9galement mise \u00e0 disposition de fa\u00e7on textuelle.<br>Il vise notamment \u00e0 permettre \u00e0 ce que les agents utilisateurs restituent une information en fonction des besoins de l'utilisateur et cela ind\u00e9pendamment de sa mise en forme visuelle ou sonore. </li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Certaines listes ordonn\u00e9es apparentes sont en fait des listes non ordonn\u00e9es, o\u00f9 la num\u00e9rotation est inscrite directement dans le texte HTML.", 
        "description": "Utilisation syst\u00e9matique de listes ordonn\u00e9es pour les \u00e9num\u00e9rations.", 
        "solution": "<p> Tout segment de texte. </p><br /><br /><li>Si deux segments de texte diff\u00e9rents ou identiques sont pr\u00e9sents dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si les segments de texte n\u00e9cessitent un classement ordonn\u00e9, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Structure", 
        "name": "[STR]-06"
    }, 
    "10101": {
        "goal": "<ul><li><h5>1.3.1 : Information et relations : (A)</h5><br />Rendre l'information ind\u00e9pendante de sa mise en forme visuelle ou sonore.<br><br>Ce crit\u00e8re de succ\u00e8s est b\u00e9n\u00e9fique \u00e0 des personnes ayant diff\u00e9rents types de handicaps. Les personnes aveugles ou sourdes et aveugles utilisant un lecteur d'\u00e9cran ou un terminal braille auront acc\u00e8s \u00e0 l'information disponible par la couleur lorsque celle-ci est \u00e9galement mise \u00e0 disposition de fa\u00e7on textuelle.<br>Il vise notamment \u00e0 permettre \u00e0 ce que les agents utilisateurs restituent une information en fonction des besoins de l'utilisateur et cela ind\u00e9pendamment de sa mise en forme visuelle ou sonore. </li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Les listes de d\u00e9finitions ne sont pas balis\u00e9es correctement, chacune des dd n'a pas syst\u00e9matiquement un dt associ\u00e9.", 
        "description": "Balisage correct des listes de d\u00e9finitions.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <code>dl</code>. </p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Structure", 
        "name": "[STR]-07"
    }, 
    "10102": {
        "goal": "<ul><li><h5>1.3.1 : Information et relations : (A)</h5><br />Rendre l'information ind\u00e9pendante de sa mise en forme visuelle ou sonore.<br><br>Ce crit\u00e8re de succ\u00e8s est b\u00e9n\u00e9fique \u00e0 des personnes ayant diff\u00e9rents types de handicaps. Les personnes aveugles ou sourdes et aveugles utilisant un lecteur d'\u00e9cran ou un terminal braille auront acc\u00e8s \u00e0 l'information disponible par la couleur lorsque celle-ci est \u00e9galement mise \u00e0 disposition de fa\u00e7on textuelle.<br>Il vise notamment \u00e0 permettre \u00e0 ce que les agents utilisateurs restituent une information en fonction des besoins de l'utilisateur et cela ind\u00e9pendamment de sa mise en forme visuelle ou sonore. </li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Les citations ne sont pas syst\u00e9matiquement balis\u00e9es \u00e0 l'aide d'\u00e9l\u00e9ments de citation blockquote ou q.", 
        "description": "Balisage correct des citations.", 
        "solution": "<p> Toute segment de texte. </p><br /><br /><li>Si un segment de texte est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si le segment de texte est une citation, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Structure", 
        "name": "[STR]-08"
    }, 
    "10103": {
        "goal": "<ul><li><h5>3.1.2 : Langue d'un passage : (AA)</h5><br />Permettre aux navigateurs, aux aides techniques et aux autres agents utilisateurs de disposer des informations n\u00e9cessaires \u00e0 la restitution correcte du contenu quelle que soit sa langue.<br><br>Si la langue n'est pas d\u00e9finie sur les passages d'une page dans une langue \u00e9trang\u00e8re, les synth\u00e8ses vocales\r\nutiliseront une langue par d\u00e9faut : une page en anglais se retrouvera\r\npar exemple lue avec une voix et un accent fran\u00e7ais ce qui peut rendre\r\nparticuli\u00e8rement difficile la compr\u00e9hension du contenu du passage de texte.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Les changements de langue dans le corps du texte ne sont pas signal\u00e9s, \u00e0 destination en particulier des lecteurs d'\u00e9cran.", 
        "description": "Pr\u00e9sence de l'indication des changements de langue dans le texte.", 
        "solution": "<p> Tout segment de texte (mot, groupe de mots, phrase, bloc de texte), contenu ou non dans un \u00e9l\u00e9ment <abbr title=\"Hypertext Markup Language\" xml:lang=\"en\" lang=\"en\">HTML</abbr>, ou g\u00e9n\u00e9r\u00e9 via du code javascript ou des feuilles de styles. </p><br /><br /><li>Si un segment de texte mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si le segment de texte constitue un changement de langue par rapport \u00e0 la langue principale de la page ou \u00e0 celle du contenu de son \u00e9l\u00e9ment <abbr title=\"Hypertext Markup Language\" xml:lang=\"en\" lang=\"en\">HTML</abbr> parent, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si le segment de texte n'est pas un nom propre, un mot/groupe de mots dans une langue ind\u00e9termin\u00e9e, un mot/groupe de mots pouvant \u00eatre identifi\u00e9s s'il est prononc\u00e9 dans la langue du contexte ou un mot/groupe de mots pass\u00e9 dans le langage courant de la langue du contexte, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Textes", 
        "name": "[TEX]-01"
    }, 
    "10104": {
        "goal": "<ul><li><h5>3.1.2 : Langue d'un passage : (AA)</h5><br />Permettre aux navigateurs, aux aides techniques et aux autres agents utilisateurs de disposer des informations n\u00e9cessaires \u00e0 la restitution correcte du contenu quelle que soit sa langue.<br><br>Si la langue n'est pas d\u00e9finie sur les passages d'une page dans une langue \u00e9trang\u00e8re, les synth\u00e8ses vocales\r\nutiliseront une langue par d\u00e9faut : une page en anglais se retrouvera\r\npar exemple lue avec une voix et un accent fran\u00e7ais ce qui peut rendre\r\nparticuli\u00e8rement difficile la compr\u00e9hension du contenu du passage de texte.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Certains \u00e9l\u00e9ments comporte un attribut dont le contenu est dans une langue diff\u00e9rente de la langue du contexte et n\u00e9cessiterait l'indication d'un changement de langue.", 
        "description": "Pr\u00e9sence de l'indication des changements de langue dans les valeurs d'attributs HTML.", 
        "solution": "<p> Toute valeur d'attribut : </p><ul> <li> <code>alt</code>, </li> <li> <code>summary</code>, </li> <li> <code>content</code> pour les \u00e9l\u00e9ments <code>m\u00e9ta</code>, </li> <li> <code>label</code> pour les \u00e9l\u00e9ments <code>option</code>, </li> <li> <code>value</code>, </li> <li> <code>name</code> pour les \u00e9l\u00e9ments <code>frame</code> et <code>iframe</code>, </li> <li> <code>title</code>, </li> <li> <code>standby</code> pour les \u00e9l\u00e9ments <code>object</code>. </li> </ul><br /><br /><li>Si l'un des attributs mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si la contenu de cet attribut constitue un changement de langue par rapport \u00e0 la langue principale de la page ou \u00e0 celle de l'\u00e9l\u00e9ment <abbr title=\"Hypertext Markup Language\" xml:lang=\"en\" lang=\"en\">HTML</abbr> parent de l'\u00e9l\u00e9ment <abbr title=\"Hypertext Markup Language\" xml:lang=\"en\" lang=\"en\">HTML</abbr> porteur de l'attribut, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si le contenu de cette attribut n'est pas un nom propre, un mot/groupe de mots dans une langue ind\u00e9termin\u00e9e, un mot/groupe de mots pouvant \u00eatre identifi\u00e9s s'il est prononc\u00e9 dans la langue du contexte ou un mot/groupe de mots pass\u00e9 dans le langage courant de la langue du contexte, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Textes", 
        "name": "[TEX]-02"
    }, 
    "10105": {
        "goal": "<ul><li><h5>3.1.4 : Abr\u00e9viations : (AAA)</h5><br />Permettre aux utilisateurs de comprendre l'information v\u00e9hicul\u00e9e par les sigles. Permettre aux synth\u00e8ses vocales d'\u00e9noncer correctement les abr\u00e9viations ou acronymes, en \u00e9pelant les abr\u00e9viations et en \u00e9non\u00e7ant comme un mot les acronymes, lorsque n\u00e9cessaire.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Les abr\u00e9viations ne sont pas balis\u00e9es \u00e0 l'aide de l'\u00e9l\u00e9ment ABBR TITLE permettant d'expliciter leur signification lors de leur premi\u00e8re occurrence.", 
        "description": "Balisage correct des abr\u00e9viations pr\u00e9sentes dans la page.", 
        "solution": "<p> Tout segment de texte constituant une abr\u00e9viation (r\u00e9duction d'un mot, d'une suite de mots \u00e0 certains de ses composants ou r\u00e9duction d'une suite de mots \u00e0 chaque initiale des mots qui la composent), contenu ou non dans un \u00e9l\u00e9ment <abbr title=\"Hypertext Markup Language\" xml:lang=\"en\" lang=\"en\">HTML</abbr>, ou g\u00e9n\u00e9r\u00e9 via du code javascript ou des feuilles de styles. </p><br /><br /><li>Si un segment de texte mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li><li>Si au minimum lors la premi\u00e8re occurrence de chaque segment de texte, rencontr\u00e9e dans l'ordre du code source de la page, l'utilisateur n'a pas acc\u00e8s \u00e0 la version non abr\u00e9g\u00e9e du segment de texte par au moins un des m\u00e9canismes suivant : \r\n<ul>\r\n<li>la version non abr\u00e9g\u00e9e du segment de texte est donn\u00e9e de fa\u00e7on adjacente \u00e0 celui ci,</li>\r\n<li>le segment de texte est un lien vers sa version non abr\u00e9g\u00e9e,</li><li>le segment de texte est un lien avec un attribut title donnant sa version non abr\u00e9g\u00e9e,</li>\r\n<li>un glossaire donnant la version non abr\u00e9g\u00e9e du segment de texte est pr\u00e9sent sur le site,</li>\r\n</ul>\r\npoursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Structure", 
        "name": "[STR]-09"
    }, 
    "10106": {
        "goal": "<ul><li><h5>3.1.4 : Abr\u00e9viations : (AAA)</h5><br />Permettre aux utilisateurs de comprendre l'information v\u00e9hicul\u00e9e par les sigles. Permettre aux synth\u00e8ses vocales d'\u00e9noncer correctement les abr\u00e9viations ou acronymes, en \u00e9pelant les abr\u00e9viations et en \u00e9non\u00e7ant comme un mot les acronymes, lorsque n\u00e9cessaire.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Les acronymes ne sont pas balis\u00e9s syst\u00e9matiquement \u00e0 l'aide de ACRONYM TITLE.", 
        "description": "Balisage correct des acronymes pr\u00e9sents dans la page.", 
        "solution": "<p> Tout segment de texte constituant un acronyme (r\u00e9duction d'une suite de mots \u00e0 chaque initiale des mots qui la composent pouvant \u00eatre prononc\u00e9e comme un mot), contenu ou non dans un \u00e9l\u00e9ment <abbr title=\"Hypertext Markup Language\" xml:lang=\"en\" lang=\"en\">HTML</abbr>, ou g\u00e9n\u00e9r\u00e9 via du code javascript ou des feuilles de styles. </p><br /><br /><li>Si un segment de texte mentionn\u00e9 dans le champ d'application est\r\npr\u00e9sent dans la page, poursuivre le test, sinon le test est non\r\napplicable.</li><li>Si au minimum lors la premi\u00e8re occurrence de chaque\r\nsegment de texte, rencontr\u00e9e dans l'ordre du code source de la page,\r\nl'utilisateur n'a pas acc\u00e8s \u00e0 la version&nbsp; compl\u00e8te du segment de\r\ntexte par au moins un des m\u00e9canismes suivant : <ul><li>la version compl\u00e8te du segment de texte est donn\u00e9e de fa\u00e7on adjacente \u00e0 celui ci,</li><li>le segment de texte est un lien vers sa version compl\u00e8te,</li><li>le segment de texte est un lien avec un attribut title donnant sa version compl\u00e8te,</li><li>un glossaire donnant la version compl\u00e8te du segment de texte est pr\u00e9sent sur le site,</li></ul>\r\npoursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Structure", 
        "name": "[STR]-10"
    }, 
    "10107": {
        "goal": "<ul><li><h5>3.1.4 : Abr\u00e9viations : (AAA)</h5><br />Permettre aux utilisateurs de comprendre l'information v\u00e9hicul\u00e9e par les sigles. Permettre aux synth\u00e8ses vocales d'\u00e9noncer correctement les abr\u00e9viations ou acronymes, en \u00e9pelant les abr\u00e9viations et en \u00e9non\u00e7ant comme un mot les acronymes, lorsque n\u00e9cessaire.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Le contenu de la version non abr\u00e9g\u00e9 de l'abr\u00e9viation ne correspond pas \u00e0 la r\u00e9el signification de l'abr\u00e9viation.", 
        "description": "Pertinence de la version non abr\u00e9g\u00e9e de l'abr\u00e9viation.", 
        "solution": "Tout \u00e9l\u00e9ment abbr ayant un attribut title non vide<br /><br /><li>Si l'\u00e9l\u00e9ment est mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Structure", 
        "name": "[STR]-11"
    }, 
    "10108": {
        "goal": "<ul><li><h5>3.1.4 : Abr\u00e9viations : (AAA)</h5><br />Permettre aux utilisateurs de comprendre l'information v\u00e9hicul\u00e9e par les sigles. Permettre aux synth\u00e8ses vocales d'\u00e9noncer correctement les abr\u00e9viations ou acronymes, en \u00e9pelant les abr\u00e9viations et en \u00e9non\u00e7ant comme un mot les acronymes, lorsque n\u00e9cessaire.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Le contenu compl\u00e8te de l'acronyme ne correspond pas \u00e0 la r\u00e9el signification de l'acronyme.", 
        "description": "Pertinence de la version compl\u00e8te de l'acronyme.", 
        "solution": "Tout \u00e9l\u00e9ment acronym ayant un attribut title non vide<br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Structure", 
        "name": "[STR]-12"
    }, 
    "10109": {
        "goal": "<ul><li><h5>3.1.1 : Langue de la page : (A)</h5><br />Permettre aux navigateurs, aux aides techniques et aux autres agents utilisateurs de disposer des informations n\u00e9cessaires \u00e0 la restitution correcte du contenu quelle que soit sa langue. <br><br>Si la langue n'est pas d\u00e9finie dans la page, les synth\u00e8ses vocales utiliseront une langue par d\u00e9faut : une page en anglais se retrouvera par exemple lue avec une voix et un accent fran\u00e7ais ce qui peut rendre particuli\u00e8rement difficile la compr\u00e9hension du contenu de la page.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Aucun attribut lang n'est pr\u00e9sent sur l'\u00e9l\u00e9ment HTML.", 
        "description": "Pr\u00e9sence d'une langue de traitement.", 
        "solution": "<p> Tout segment de texte (mot, groupe de mots, phrase, bloc de texte), contenu ou non dans un \u00e9l\u00e9ment <abbr title=\"Hypertext Markup Language\" xml:lang=\"en\" lang=\"en\">HTML</abbr>, ou g\u00e9n\u00e9r\u00e9 via du code javascript ou des feuilles de styles. </p><br /><br /><li>Si un segment de texte est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Standards", 
        "name": "[STA]-08"
    }, 
    "10110": {
        "goal": "<ul><li><h5>1.3.1 : Information et relations : (A)</h5><br />Rendre l'information ind\u00e9pendante de sa mise en forme visuelle ou sonore.<br><br>Ce crit\u00e8re de succ\u00e8s est b\u00e9n\u00e9fique \u00e0 des personnes ayant diff\u00e9rents types de handicaps. Les personnes aveugles ou sourdes et aveugles utilisant un lecteur d'\u00e9cran ou un terminal braille auront acc\u00e8s \u00e0 l'information disponible par la couleur lorsque celle-ci est \u00e9galement mise \u00e0 disposition de fa\u00e7on textuelle.<br>Il vise notamment \u00e0 permettre \u00e0 ce que les agents utilisateurs restituent une information en fonction des besoins de l'utilisateur et cela ind\u00e9pendamment de sa mise en forme visuelle ou sonore. </li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Les en-t\u00eates de ligne ou de colonne ne sont pas indiqu\u00e9s comme tels dans les tableaux de donn\u00e9es. Un lecteur d'\u00e9cran peut ne pas \u00eatre en mesure de restituer correctement l'organisation logique du tableau.", 
        "description": "Pr\u00e9sence des balises th pour indiquer les en-t\u00eates de lignes et de colonnes dans les tableaux de donn\u00e9es.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <code>table</code> identifi\u00e9 comme tableau de donn\u00e9es. </p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la<br> page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si l'\u00e9l\u00e9ment a un ou plusieurs segments de texte pouvant \u00eatre identifi\u00e9 comme en-t\u00eate de colonne ou de ligne, poursuivre le test, sinon le test est non applicable . </li>", 
        "thema": "Tableaux", 
        "name": "[TAB]-01"
    }, 
    "10111": {
        "goal": "<ul><li><h5>1.3.1 : Information et relations : (A)</h5><br />Rendre l'information ind\u00e9pendante de sa mise en forme visuelle ou sonore.<br><br>Ce crit\u00e8re de succ\u00e8s est b\u00e9n\u00e9fique \u00e0 des personnes ayant diff\u00e9rents types de handicaps. Les personnes aveugles ou sourdes et aveugles utilisant un lecteur d'\u00e9cran ou un terminal braille auront acc\u00e8s \u00e0 l'information disponible par la couleur lorsque celle-ci est \u00e9galement mise \u00e0 disposition de fa\u00e7on textuelle.<br>Il vise notamment \u00e0 permettre \u00e0 ce que les agents utilisateurs restituent une information en fonction des besoins de l'utilisateur et cela ind\u00e9pendamment de sa mise en forme visuelle ou sonore. </li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Les cellules de donn\u00e9es ne sont pas explicitement associ\u00e9es aux cellules d'en-t\u00eate \u00e0 l'aide des attributs SCOPE ou HEADERS : les lecteurs d'\u00e9cran ne seront pas n\u00e9cessairement en mesure d'effectuer cette association de mani\u00e8re pertinente. ", 
        "description": "Pr\u00e9sence d'une relation entre les en-t\u00eates (th) et les cellules (td) qui s'y rattachent dans un tableau de donn\u00e9es simple gr\u00e2ce aux attributs id et headers ou scope.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <code>table</code> identifi\u00e9 comme tableau de donn\u00e9es et ayant une seule ligne ou colonne d'en-t\u00eate (<code>th</code>) ou une ligne et une colonne d'en-t\u00eate. </p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Tableaux", 
        "name": "[TAB]-02"
    }, 
    "10112": {
        "goal": "<ul><li><h5>1.3.1 : Information et relations : (A)</h5><br />Rendre l'information ind\u00e9pendante de sa mise en forme visuelle ou sonore.<br><br>Ce crit\u00e8re de succ\u00e8s est b\u00e9n\u00e9fique \u00e0 des personnes ayant diff\u00e9rents types de handicaps. Les personnes aveugles ou sourdes et aveugles utilisant un lecteur d'\u00e9cran ou un terminal braille auront acc\u00e8s \u00e0 l'information disponible par la couleur lorsque celle-ci est \u00e9galement mise \u00e0 disposition de fa\u00e7on textuelle.<br>Il vise notamment \u00e0 permettre \u00e0 ce que les agents utilisateurs restituent une information en fonction des besoins de l'utilisateur et cela ind\u00e9pendamment de sa mise en forme visuelle ou sonore. </li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Les cellules de donn\u00e9es ne sont pas explicitement associ\u00e9es aux cellules d'en-t\u00eate \u00e0 l'aide des attributs HEADERS : les lecteurs d'\u00e9cran ne seront pas n\u00e9cessairement en mesure d'effectuer cette association de mani\u00e8re pertinente. ", 
        "description": "Pr\u00e9sence d'une relation entre les en-t\u00eates (th) et les cellules (td) qui s'y rattachent dans un tableau de donn\u00e9es complexe gr\u00e2ce aux attributs id et headers.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <code>table</code> identifi\u00e9 comme tableau de donn\u00e9es, ayant au moins deux lignes d'en-t\u00eate (<code>th</code>) ou deux colonnes d'en-t\u00eate (<code>th</code>) s\u00e9par\u00e9es par des lignes ou des colonnes de contenu. </p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Tableaux", 
        "name": "[TAB]-03"
    }, 
    "10113": {
        "goal": "<ul><li><h5>1.3.2 : Ordre s\u00e9quentiel logique : (A)</h5><br />Rendre l'ordre de restitution de l'information ind\u00e9pendant de sa mise en forme visuelle ou sonore lorsqu'il est lui-m\u00eame porteur de sens. <br><br>Les logiciels de lecture d'\u00e9cran, les logiciels automatiques de lecture et certains navigateurs textes lisent ou affichent les informations de mani\u00e8re lin\u00e9aire (dans le cas des tableaux cellule apr\u00e8s cellule, ligne apr\u00e8s ligne). C'est pourquoi l'information doit toujours \u00eatre logiquement ordonn\u00e9e, m\u00eame en mode de lecture lin\u00e9aire, afin que le contenu reste compr\u00e9hensible</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "La lecture lin\u00e9aire des tableaux de cellule en cellule et de ligne en ligne ne permet pas de comprendre le contenu du tableau.", 
        "description": "Lin\u00e9arisation correcte des tableaux de mise en page.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <code>table</code> identifi\u00e9 comme tableau de mise en page. </p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Tableaux", 
        "name": "[TAB]-06"
    }, 
    "10114": {
        "goal": "<ul><li><h5>1.3.1 : Information et relations : (A)</h5><br />Rendre l'information ind\u00e9pendante de sa mise en forme visuelle ou sonore.<br><br>Ce crit\u00e8re de succ\u00e8s est b\u00e9n\u00e9fique \u00e0 des personnes ayant diff\u00e9rents types de handicaps. Les personnes aveugles ou sourdes et aveugles utilisant un lecteur d'\u00e9cran ou un terminal braille auront acc\u00e8s \u00e0 l'information disponible par la couleur lorsque celle-ci est \u00e9galement mise \u00e0 disposition de fa\u00e7on textuelle.<br>Il vise notamment \u00e0 permettre \u00e0 ce que les agents utilisateurs restituent une information en fonction des besoins de l'utilisateur et cela ind\u00e9pendamment de sa mise en forme visuelle ou sonore. </li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "La pr\u00e9sence d'\u00e9l\u00e9ments propre aux tableaux de donn\u00e9es dans les tableaux de mise en forme peut contribuer \u00e0 diminuer la lisibilit\u00e9 de la page par les lecteurs d'\u00e9cran qui traiteront ces tableaux comme des tableaux de donn\u00e9es (lecture ligne \u00e0 ligne et case \u00e0 case).", 
        "description": "Absence des \u00e9l\u00e9ments propres aux tableaux de donn\u00e9es dans les tableaux de mise en page.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <code>table</code> identifi\u00e9 comme tableau de mise en page. </p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Tableaux", 
        "name": "[TAB]-04"
    }, 
    "10115": {
        "goal": "<ul><li><h5>1.3.1 : Information et relations : (A)</h5><br />Rendre l'information ind\u00e9pendante de sa mise en forme visuelle ou sonore.<br><br>Ce crit\u00e8re de succ\u00e8s est b\u00e9n\u00e9fique \u00e0 des personnes ayant diff\u00e9rents types de handicaps. Les personnes aveugles ou sourdes et aveugles utilisant un lecteur d'\u00e9cran ou un terminal braille auront acc\u00e8s \u00e0 l'information disponible par la couleur lorsque celle-ci est \u00e9galement mise \u00e0 disposition de fa\u00e7on textuelle.<br>Il vise notamment \u00e0 permettre \u00e0 ce que les agents utilisateurs restituent une information en fonction des besoins de l'utilisateur et cela ind\u00e9pendamment de sa mise en forme visuelle ou sonore. </li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Aucun titre n'est pr\u00e9sent.", 
        "description": "Pr\u00e9sence d'un titre pour les tableaux de donn\u00e9es.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <code>table</code> identifi\u00e9 comme tableau de donn\u00e9es. </p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Tableaux", 
        "name": "[TAB]-07"
    }, 
    "10116": {
        "goal": "<ul><li><h5>1.3.1 : Information et relations : (A)</h5><br />Rendre l'information ind\u00e9pendante de sa mise en forme visuelle ou sonore.<br><br>Ce crit\u00e8re de succ\u00e8s est b\u00e9n\u00e9fique \u00e0 des personnes ayant diff\u00e9rents types de handicaps. Les personnes aveugles ou sourdes et aveugles utilisant un lecteur d'\u00e9cran ou un terminal braille auront acc\u00e8s \u00e0 l'information disponible par la couleur lorsque celle-ci est \u00e9galement mise \u00e0 disposition de fa\u00e7on textuelle.<br>Il vise notamment \u00e0 permettre \u00e0 ce que les agents utilisateurs restituent une information en fonction des besoins de l'utilisateur et cela ind\u00e9pendamment de sa mise en forme visuelle ou sonore. </li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Tous les tableaux de donn\u00e9es ne sont pas dot\u00e9s d'un attribut SUMMARY.", 
        "description": "Pr\u00e9sence d'un r\u00e9sum\u00e9 pour les tableaux de donn\u00e9es.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <code>table</code> identifi\u00e9 comme tableau de donn\u00e9es. </p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Tableaux", 
        "name": "[TAB]-08"
    }, 
    "10117": {
        "goal": "<ul><li><h5>1.3.1 : Information et relations : (A)</h5><br />Rendre l'information ind\u00e9pendante de sa mise en forme visuelle ou sonore.<br><br>Ce crit\u00e8re de succ\u00e8s est b\u00e9n\u00e9fique \u00e0 des personnes ayant diff\u00e9rents types de handicaps. Les personnes aveugles ou sourdes et aveugles utilisant un lecteur d'\u00e9cran ou un terminal braille auront acc\u00e8s \u00e0 l'information disponible par la couleur lorsque celle-ci est \u00e9galement mise \u00e0 disposition de fa\u00e7on textuelle.<br>Il vise notamment \u00e0 permettre \u00e0 ce que les agents utilisateurs restituent une information en fonction des besoins de l'utilisateur et cela ind\u00e9pendamment de sa mise en forme visuelle ou sonore. </li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Certains tableaux de donn\u00e9es sont dot\u00e9s d'un caption non pertinent.", 
        "description": "Pertinence du titre du tableau de donn\u00e9es.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <code>table</code> identifi\u00e9 comme tableau de donn\u00e9es. </p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si est pr\u00e9sent un \u00e9l\u00e9ment <code>caption</code> non vide ou un contenu faisant office de titre situ\u00e9 imm\u00e9diatement avant le tableau de donn\u00e9e dans l'ordre du code source, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Tableaux", 
        "name": "[TAB]-09"
    }, 
    "10118": {
        "goal": "<ul><li><h5>1.3.1 : Information et relations : (A)</h5><br />Rendre l'information ind\u00e9pendante de sa mise en forme visuelle ou sonore.<br><br>Ce crit\u00e8re de succ\u00e8s est b\u00e9n\u00e9fique \u00e0 des personnes ayant diff\u00e9rents types de handicaps. Les personnes aveugles ou sourdes et aveugles utilisant un lecteur d'\u00e9cran ou un terminal braille auront acc\u00e8s \u00e0 l'information disponible par la couleur lorsque celle-ci est \u00e9galement mise \u00e0 disposition de fa\u00e7on textuelle.<br>Il vise notamment \u00e0 permettre \u00e0 ce que les agents utilisateurs restituent une information en fonction des besoins de l'utilisateur et cela ind\u00e9pendamment de sa mise en forme visuelle ou sonore. </li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Certains tableaux de donn\u00e9es sont dot\u00e9s d'un attribut SUMMARY non pertinent.", 
        "description": "Pertinence du r\u00e9sum\u00e9 du tableau de donn\u00e9es.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <code>table</code> identifi\u00e9 comme tableau de donn\u00e9es.</p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si l'\u00e9l\u00e9ment poss\u00e8de un attribut <code>summary</code> non vide, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Tableaux", 
        "name": "[TAB]-10"
    }, 
    "10119": {
        "goal": "<ul><li><h5>1.1.1 : Contenu non textuel : (A)</h5><br />Rendre le contenu non textuel accessible sous forme d'une alternative textuelle exploitable quel que soit le mode de perception de l'utilisateur (visuel, auditif, tactile).<br><br>Le contenu des \u00e9l\u00e9ments non textuels ne sera pas perceptible pour diff\u00e9rentes cat\u00e9gories d'utilisateurs tels que :<br><br><ul><li>Les personnes handicap\u00e9es visuelles acc\u00e9dant au site via la synth\u00e8se vocale d'un lecteur d'\u00e9cran,</li><li>Les utilisateurs ayant d\u00e9sactiv\u00e9 l'affichage des \u00e9l\u00e9ments graphiques ou multim\u00e9dias, pour r\u00e9duire notamment les temps de t\u00e9l\u00e9chargement des pages en bas d\u00e9bit.<br></li></ul><br>La pr\u00e9sence d'alternatives textuelles aux contenus non textuels permet \u00e9galement \u00e0 des robots d'indexation d'en exploiter l'information, ou \u00e0 des traducteurs automatiques d'en traduire le sens.</li><li><h5>1.3.1 : Information et relations : (A)</h5><br />Rendre l'information ind\u00e9pendante de sa mise en forme visuelle ou sonore.<br><br>Ce crit\u00e8re de succ\u00e8s est b\u00e9n\u00e9fique \u00e0 des personnes ayant diff\u00e9rents types de handicaps. Les personnes aveugles ou sourdes et aveugles utilisant un lecteur d'\u00e9cran ou un terminal braille auront acc\u00e8s \u00e0 l'information disponible par la couleur lorsque celle-ci est \u00e9galement mise \u00e0 disposition de fa\u00e7on textuelle.<br>Il vise notamment \u00e0 permettre \u00e0 ce que les agents utilisateurs restituent une information en fonction des besoins de l'utilisateur et cela ind\u00e9pendamment de sa mise en forme visuelle ou sonore. </li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Du contenu porteur d'information est g\u00e9n\u00e9r\u00e9 gr\u00e2ce aux feuilles de styles.", 
        "description": "Absence de g\u00e9n\u00e9ration de contenus porteur d'information via les styles CSS.", 
        "solution": "<p> Tout \u00e9l\u00e9ment sur lequel est appliqu\u00e9 des styles <abbr title=\"Cascading Style Sheets\" lang=\"en\" xml:lang=\"en\">CSS</abbr> appliqu\u00e9 dans la page via l'attribut <code>style</code>, une feuille de styles interne, une feuille de styles externe ou du code javascript. </p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si le style <abbr title=\"Cascading Style Sheets\" lang=\"en\" xml:lang=\"en\">CSS</abbr> appliqu\u00e9 sur l'\u00e9l\u00e9ment utilise la propri\u00e9t\u00e9 <code>content</code>, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Pr\u00e9sentation", 
        "name": "[PR\u00e9]-01"
    }, 
    "10120": {
        "goal": "<ul><li><h5>1.3.2 : Ordre s\u00e9quentiel logique : (A)</h5><br />Rendre l'ordre de restitution de l'information ind\u00e9pendant de sa mise en forme visuelle ou sonore lorsqu'il est lui-m\u00eame porteur de sens. <br><br>Les logiciels de lecture d'\u00e9cran, les logiciels automatiques de lecture et certains navigateurs textes lisent ou affichent les informations de mani\u00e8re lin\u00e9aire (dans le cas des tableaux cellule apr\u00e8s cellule, ligne apr\u00e8s ligne). C'est pourquoi l'information doit toujours \u00eatre logiquement ordonn\u00e9e, m\u00eame en mode de lecture lin\u00e9aire, afin que le contenu reste compr\u00e9hensible</li><li><h5>2.4.3 : Parcours du focus : (A)</h5><br />Rendre les contenus accessibles au clavier dans un ordre coh\u00e9rent avec l'information d\u00e9livr\u00e9e.<br><br>Pour les utilisateurs de synth\u00e8ses vocales ou qui naviguent de lien en lien au clavier, la navigation dans la page se fait par d\u00e9faut de mani\u00e8re lin\u00e9aire, en fonction de l'ordre du code source de la page et ind\u00e9pendamment de son affichage. Aussi, proposer un ordre logique de parcours au clavier permet une utilisation et une compr\u00e9hension plus ais\u00e9es des pages. C'est \u00e9galement le cas pour les utilisateurs ayant une limitation motrice qui utilisent le clavier pour se d\u00e9placer au sein d'une page, les personnes ayant des difficult\u00e9s de lecture et qui se d\u00e9placent au clavier et les personnes ayant besoin d'agrandir le texte \u00e0 l'\u00e9cran.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Lors de la d\u00e9sactivation des feuilles de styles le contenu devient incompr\u00e9hensible.", 
        "description": "Absence d'alt\u00e9ration de la compr\u00e9hension lors de la lecture d'un bloc d'informations lorsque les styles sont d\u00e9sactiv\u00e9s.", 
        "solution": "<p> Tout bloc d'informations (mot, groupe de mots, phrase, bloc de texte), contenu ou non dans un \u00e9l\u00e9ment <abbr title=\"Hypertext Markup Language\" xml:lang=\"en\" lang=\"en\">HTML</abbr>, ou g\u00e9n\u00e9r\u00e9 via du code javascript ou des feuilles de styles. </p><br /><br /><li>Si un segment de texte est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Pr\u00e9sentation", 
        "name": "[PR\u00e9]-02"
    }, 
    "10121": {
        "goal": "<ul><li><h5>1.1.1 : Contenu non textuel : (A)</h5><br />Rendre le contenu non textuel accessible sous forme d'une alternative textuelle exploitable quel que soit le mode de perception de l'utilisateur (visuel, auditif, tactile).<br><br>Le contenu des \u00e9l\u00e9ments non textuels ne sera pas perceptible pour diff\u00e9rentes cat\u00e9gories d'utilisateurs tels que :<br><br><ul><li>Les personnes handicap\u00e9es visuelles acc\u00e9dant au site via la synth\u00e8se vocale d'un lecteur d'\u00e9cran,</li><li>Les utilisateurs ayant d\u00e9sactiv\u00e9 l'affichage des \u00e9l\u00e9ments graphiques ou multim\u00e9dias, pour r\u00e9duire notamment les temps de t\u00e9l\u00e9chargement des pages en bas d\u00e9bit.<br></li></ul><br>La pr\u00e9sence d'alternatives textuelles aux contenus non textuels permet \u00e9galement \u00e0 des robots d'indexation d'en exploiter l'information, ou \u00e0 des traducteurs automatiques d'en traduire le sens.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Des informations pr\u00e9sentent dans des images de fond deviennent illisibles ou invisibles lorsque les styles et/ou les images sont d\u00e9sactiv\u00e9s.", 
        "description": "Lisibilit\u00e9 des informations affich\u00e9es comme fond d'\u00e9l\u00e9ments via les styles CSS lorsque les styles et/ou les images sont d\u00e9sactiv\u00e9s.", 
        "solution": "<p> Tout \u00e9l\u00e9ment ayant une image fond associ\u00e9e par le biais de styles <abbr title=\"Cascading Style Sheets\" xml:lang=\"en\" lang=\"en\">CSS</abbr> utilisant une des propri\u00e9t\u00e9s suivantes : </p><ul> <li> <code>background</code>, </li> <li> <code>background-image</code>, </li> <li> <code>list</code>, </li> <li> <code>list-style-image</code>. </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si l'image de fond de l'\u00e9l\u00e9ment apporte de l'information, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Pr\u00e9sentation", 
        "name": "[PR\u00e9]-03"
    }, 
    "10122": {
        "goal": "<ul><li><h5>1.4.8 : Pr\u00e9sentation visuelle : (AAA)</h5><br />Rendre les contenus textuels visuellement perceptibles sans interf\u00e9rence dans leur lisibilit\u00e9 due \u00e0 leur pr\u00e9sentation.<br><br>Les personnes ayant des d\u00e9ficiences cognitives, du langage, d'apprentissage et certaines personnes ayant une d\u00e9ficience visuelle ne peuvent lire et comprendre un texte lorsque celui-ci est pr\u00e9senter d'une fa\u00e7on qui rend sa lecture difficile sans qu'il ne soit possible de modifier cette pr\u00e9sentation.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "L'espacement entre les lignes et entre les paragraphes est insuffisant.", 
        "description": "Valeur de l'espace entre les lignes et entre les paragraphes", 
        "solution": "Toutes propri\u00e9t\u00e9s CSS :\r\n<br><br><ul><li>line-height,\r\n</li><li>padding,\r\n</li><li>margin,</li></ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li><li>Si l'\u00e9l\u00e9ment est utilis\u00e9 pour d\u00e9finir l'espacement entre les lignes ou entre les paragraphes, poursuivre le test, sinon le test est non applicable.</li><li><br></li>", 
        "thema": "Pr\u00e9sentation", 
        "name": "[PR\u00e9]-17"
    }, 
    "10123": {
        "goal": "<ul><li><h5>2.4.4 : Fonction du lien (selon le contexte) : (A)</h5><br />Permettre aux utilisateurs d'identifier le r\u00f4le, la destination ou l'effet des liens et d'en anticiper le r\u00e9sultat.<br><br>Avoir des liens compr\u00e9hensibles permet une lecture et une manipulation plus ais\u00e9e par les utilisateurs de technologies d'assistance, notamment lors de l'utilisation d'une liste de liens extraite de la page pour naviguer. Cela permet \u00e9galement une meilleure m\u00e9morisation et une plus grande lisibilit\u00e9 pour tous.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Un contenu est masqu\u00e9 alors qu'il devrait \u00eatre restitu\u00e9 aux lecteurs d'\u00e9crans.", 
        "description": "Restitution correcte dans les lecteurs d'\u00e9cran des \u00e9l\u00e9ments masqu\u00e9s .", 
        "solution": "<p> Tout \u00e9l\u00e9ment sur lequel sont appliqu\u00e9s dans la page des styles <abbr title=\"Cascading Style Sheets\" xml:lang=\"en\" lang=\"en\">CSS</abbr> via l'attribut <code>style</code>, une feuille de styles interne, une feuille de styles externe ou du code javascript. </p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si le style <abbr title=\"Cascading Style Sheets\" xml:lang=\"en\" lang=\"en\">CSS</abbr> appliqu\u00e9 sur l'\u00e9l\u00e9ment utilise la propri\u00e9t\u00e9 <code>display:none</code> ou <code>visibility:hidden</code>, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Pr\u00e9sentation", 
        "name": "[PR\u00e9]-18"
    }, 
    "10124": {
        "goal": "<ul><li><h5>1.1.1 : Contenu non textuel : (A)</h5><br />Rendre le contenu non textuel accessible sous forme d'une alternative textuelle exploitable quel que soit le mode de perception de l'utilisateur (visuel, auditif, tactile).<br><br>Le contenu des \u00e9l\u00e9ments non textuels ne sera pas perceptible pour diff\u00e9rentes cat\u00e9gories d'utilisateurs tels que :<br><br><ul><li>Les personnes handicap\u00e9es visuelles acc\u00e9dant au site via la synth\u00e8se vocale d'un lecteur d'\u00e9cran,</li><li>Les utilisateurs ayant d\u00e9sactiv\u00e9 l'affichage des \u00e9l\u00e9ments graphiques ou multim\u00e9dias, pour r\u00e9duire notamment les temps de t\u00e9l\u00e9chargement des pages en bas d\u00e9bit.<br></li></ul><br>La pr\u00e9sence d'alternatives textuelles aux contenus non textuels permet \u00e9galement \u00e0 des robots d'indexation d'en exploiter l'information, ou \u00e0 des traducteurs automatiques d'en traduire le sens.</li><li><h5>4.1.2 : Nom, r\u00f4le et valeur : (A)</h5><br />Permettre aux agents utilisateurs et aux technologies d'assistance de disposer de l'information n\u00e9cessaire sur les changements d'\u00e9tats, de valeurs et de nom intervenant dans l'interface utilisateur. <br><br>Certains contenus ajout\u00e9s dans les pages peuvent en effet int\u00e9grer leur propre interface de navigation. Dans ce cas, certains utilisateurs peuvent se trouver dans l'impossibilit\u00e9 de les utiliser dans leur contexte de navigation si leur interface n'a pas \u00e9t\u00e9 con\u00e7ue dans une technologie susceptible d'\u00eatre accessible</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Un script met \u00e0 jour des \u00e9l\u00e9ments non textuels dans la page sans mettre \u00e0 jour son alternative.", 
        "description": "Mise \u00e0 jour des alternatives aux \u00e9l\u00e9ments non textuels dans la page.", 
        "solution": "<p> Tout code javascript utilis\u00e9 dans la page. </p><br /><br /><li>Si du code javascript est utilis\u00e9 dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si le code javascript d\u00e9clenche la mise \u00e0 jour d'un \u00e9l\u00e9ment non textuel dans au moins une des situations suivantes :<ul><li>dans le contenu de la page, <br></li><li>dans un iframe,</li><li>dans un frame, <br></li></ul>poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Scripts", 
        "name": "[SCR]-01"
    }, 
    "10125": {
        "goal": "<ul><li><h5>1.2.1 : Contenu seulement audio ou vid\u00e9o (pr\u00e9-enregistr\u00e9) : (A)</h5><br />Fournir textuellement  \u00e0 tous les utilisateurs l'information v\u00e9hicul\u00e9e par les contenus seulement vid\u00e9o ou audio  (pr\u00e9-enregistr\u00e9). Les informations fournis textuellement seront accessible car elles peuvent \u00eatre restitu\u00e9es sous diff\u00e9rentes formes (visuelle, auditive, tactile)<br><br>Dans le cas contraire, le contenu des \u00e9l\u00e9ments seulement audio ou vid\u00e9o  ne serait pas perceptible pour diff\u00e9rentes cat\u00e9gories d'utilisateurs tels que : <br><br><ul><li>Les personnes ayant une d\u00e9ficience auditive pour le contenu uniquement sonore,</li><li>Les personnes ayant une d\u00e9ficience visuelle pour le contenu uniquement vid\u00e9o,</li></ul><br>Cela permet \u00e9galement \u00e0 des robots d'indexation d'exploiter l'information, ou \u00e0 des traducteurs automatiques d'en traduire le sens.</li><li><h5>1.1.1 : Contenu non textuel : (A)</h5><br />Rendre le contenu non textuel accessible sous forme d'une alternative textuelle exploitable quel que soit le mode de perception de l'utilisateur (visuel, auditif, tactile).<br><br>Le contenu des \u00e9l\u00e9ments non textuels ne sera pas perceptible pour diff\u00e9rentes cat\u00e9gories d'utilisateurs tels que :<br><br><ul><li>Les personnes handicap\u00e9es visuelles acc\u00e9dant au site via la synth\u00e8se vocale d'un lecteur d'\u00e9cran,</li><li>Les utilisateurs ayant d\u00e9sactiv\u00e9 l'affichage des \u00e9l\u00e9ments graphiques ou multim\u00e9dias, pour r\u00e9duire notamment les temps de t\u00e9l\u00e9chargement des pages en bas d\u00e9bit.<br></li></ul><br>La pr\u00e9sence d'alternatives textuelles aux contenus non textuels permet \u00e9galement \u00e0 des robots d'indexation d'en exploiter l'information, ou \u00e0 des traducteurs automatiques d'en traduire le sens.</li><li><h5>1.2.3 : Audio-description ou version de remplacement pour un m\u00e9dia temporel (pr\u00e9-enregistr\u00e9) : (A)</h5><br />Permettre aux utilisateurs en situation de handicap visuel de percevoir l'information visuelle v\u00e9hicul\u00e9e par les contenus multim\u00e9dia.<br><br>Toutes les aides techniques ne sont pas en mesure de lire automatiquement la description textuelle des contenus multim\u00e9dias. Il est donc n\u00e9cessaire de la compl\u00e9ter d'une description audio. Ainsi, une personne pr\u00e9sentant une d\u00e9ficience visuelle ou ayant des probl\u00e8mes de compr\u00e9hension de l'\u00e9crit pourra profiter de cette description audio.</li><li><h5>1.2.8 : Version de remplacement pour un m\u00e9dia temporel (pr\u00e9-enregistr\u00e9e) : (AAA)</h5><br />Fournir textuellement \u00e0 tous les utilisateurs l'information v\u00e9hicul\u00e9e\r\npar les m\u00e9dias temporels synchronis\u00e9s (pr\u00e9-enregistr\u00e9s) ou vid\u00e9o seulement. Les\r\ninformations fournis textuellement seront accessibles car elles peuvent\r\n\u00eatre restitu\u00e9es sous diff\u00e9rentes formes (visuelle, auditive, tactile)<br><br>Dans\r\nle cas contraire, le contenu des m\u00e9dias synchronis\u00e9s  ou vid\u00e9o seulement ne\r\nserait pas perceptible pour diff\u00e9rentes cat\u00e9gories d'utilisateurs tels\r\nque : <br><br><ul><li>Les personnes ayant une d\u00e9ficience auditive pour le contenu&nbsp; sonore,</li><li>Les personnes ayant une d\u00e9ficience visuelle pour le contenu visuel,</li></ul><br>Cela\r\npermet \u00e9galement \u00e0 des robots d'indexation d'exploiter l'information,\r\nou \u00e0 des traducteurs automatiques d'en traduire le sens.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Les objets OBJECT et APPLET ne sont pas syst\u00e9matiquement dot\u00e9s d'une alternative qui puisse v\u00e9hiculer l'information de mani\u00e8re \u00e9quivalente si ces \u00e9l\u00e9ments ou les plugins associ\u00e9s ne sont pas support\u00e9s par le navigateur de l'utilisateur.", 
        "description": "Pr\u00e9sence d'une alternative aux \u00e9l\u00e9ments applet et object.", 
        "solution": "<p> Tout \u00e9l\u00e9ment<br> </p><ul> <li> <code>applet</code>, </li> <li> <code>object</code>, </li> <li>tout code javascript g\u00e9n\u00e9rant un des \u00e9l\u00e9ments pr\u00e9c\u00e9dant. </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment apporte de l'information, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si le\r\ncontenu visuel anim\u00e9, sonore ou le m\u00e9dia synchronis\u00e9 n'est pas une\r\nalternative anim\u00e9e, sonore ou synchronis\u00e9e \u00e0  un contenu textuel\r\npr\u00e9sent dans la page,  qui est identifi\u00e9e en tant\r\nque tel et qui n'apporte pas plus d'information que le contenu\r\ntextuel, poursuivre le test, sinon le test est non applicable.</li><li>Si le contenu n'est pas consult\u00e9 dans un environnement informatique\r\nmaitris\u00e9 permettant&nbsp; la restitution des contenus affich\u00e9s au travers des \u00e9l\u00e9ments object ou applet, poursuivre\r\nle test, sinon le test est non applicable.</li>", 
        "thema": "Multim\u00e9dia", 
        "name": "[MUL]-11"
    }, 
    "10126": {
        "goal": "<ul><li><h5>1.2.1 : Contenu seulement audio ou vid\u00e9o (pr\u00e9-enregistr\u00e9) : (A)</h5><br />Fournir textuellement  \u00e0 tous les utilisateurs l'information v\u00e9hicul\u00e9e par les contenus seulement vid\u00e9o ou audio  (pr\u00e9-enregistr\u00e9). Les informations fournis textuellement seront accessible car elles peuvent \u00eatre restitu\u00e9es sous diff\u00e9rentes formes (visuelle, auditive, tactile)<br><br>Dans le cas contraire, le contenu des \u00e9l\u00e9ments seulement audio ou vid\u00e9o  ne serait pas perceptible pour diff\u00e9rentes cat\u00e9gories d'utilisateurs tels que : <br><br><ul><li>Les personnes ayant une d\u00e9ficience auditive pour le contenu uniquement sonore,</li><li>Les personnes ayant une d\u00e9ficience visuelle pour le contenu uniquement vid\u00e9o,</li></ul><br>Cela permet \u00e9galement \u00e0 des robots d'indexation d'exploiter l'information, ou \u00e0 des traducteurs automatiques d'en traduire le sens.</li><li><h5>1.1.1 : Contenu non textuel : (A)</h5><br />Rendre le contenu non textuel accessible sous forme d'une alternative textuelle exploitable quel que soit le mode de perception de l'utilisateur (visuel, auditif, tactile).<br><br>Le contenu des \u00e9l\u00e9ments non textuels ne sera pas perceptible pour diff\u00e9rentes cat\u00e9gories d'utilisateurs tels que :<br><br><ul><li>Les personnes handicap\u00e9es visuelles acc\u00e9dant au site via la synth\u00e8se vocale d'un lecteur d'\u00e9cran,</li><li>Les utilisateurs ayant d\u00e9sactiv\u00e9 l'affichage des \u00e9l\u00e9ments graphiques ou multim\u00e9dias, pour r\u00e9duire notamment les temps de t\u00e9l\u00e9chargement des pages en bas d\u00e9bit.<br></li></ul><br>La pr\u00e9sence d'alternatives textuelles aux contenus non textuels permet \u00e9galement \u00e0 des robots d'indexation d'en exploiter l'information, ou \u00e0 des traducteurs automatiques d'en traduire le sens.</li><li><h5>1.2.3 : Audio-description ou version de remplacement pour un m\u00e9dia temporel (pr\u00e9-enregistr\u00e9) : (A)</h5><br />Permettre aux utilisateurs en situation de handicap visuel de percevoir l'information visuelle v\u00e9hicul\u00e9e par les contenus multim\u00e9dia.<br><br>Toutes les aides techniques ne sont pas en mesure de lire automatiquement la description textuelle des contenus multim\u00e9dias. Il est donc n\u00e9cessaire de la compl\u00e9ter d'une description audio. Ainsi, une personne pr\u00e9sentant une d\u00e9ficience visuelle ou ayant des probl\u00e8mes de compr\u00e9hension de l'\u00e9crit pourra profiter de cette description audio.</li><li><h5>1.2.8 : Version de remplacement pour un m\u00e9dia temporel (pr\u00e9-enregistr\u00e9e) : (AAA)</h5><br />Fournir textuellement \u00e0 tous les utilisateurs l'information v\u00e9hicul\u00e9e\r\npar les m\u00e9dias temporels synchronis\u00e9s (pr\u00e9-enregistr\u00e9s) ou vid\u00e9o seulement. Les\r\ninformations fournis textuellement seront accessibles car elles peuvent\r\n\u00eatre restitu\u00e9es sous diff\u00e9rentes formes (visuelle, auditive, tactile)<br><br>Dans\r\nle cas contraire, le contenu des m\u00e9dias synchronis\u00e9s  ou vid\u00e9o seulement ne\r\nserait pas perceptible pour diff\u00e9rentes cat\u00e9gories d'utilisateurs tels\r\nque : <br><br><ul><li>Les personnes ayant une d\u00e9ficience auditive pour le contenu&nbsp; sonore,</li><li>Les personnes ayant une d\u00e9ficience visuelle pour le contenu visuel,</li></ul><br>Cela\r\npermet \u00e9galement \u00e0 des robots d'indexation d'exploiter l'information,\r\nou \u00e0 des traducteurs automatiques d'en traduire le sens.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Les objets EMBED ne sont pas syst\u00e9matiquement dot\u00e9s d'une alternative qui puisse v\u00e9hiculer l'information de mani\u00e8re \u00e9quivalente si ces \u00e9l\u00e9ments ou les plugins associ\u00e9s ne sont pas support\u00e9s par le navigateur de l'utilisateur.", 
        "description": "Pr\u00e9sence d'une alternative aux \u00e9l\u00e9ments embed.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <code>embed</code> ou tout code javascript g\u00e9n\u00e9rant un \u00e9l\u00e9ment <code>embed</code>. </p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment apporte de l'information, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si le\r\ncontenu visuel anim\u00e9, sonore ou le m\u00e9dia synchronis\u00e9 n'est pas une\r\nalternative anim\u00e9e, sonore ou synchronis\u00e9e \u00e0  un contenu textuel\r\npr\u00e9sent dans la page,  qui est identifi\u00e9e en tant\r\nque tel et qui n'apporte pas plus d'information que le contenu\r\ntextuel, poursuivre le test, sinon le test est non applicable.</li><li>Si le contenu n'est pas consult\u00e9 dans un environnement informatique\r\nmaitris\u00e9 permettant&nbsp; la restitution des contenus affich\u00e9s au travers de l'\u00e9l\u00e9ment embed, poursuivre\r\nle test, sinon le test est non applicable.</li>", 
        "thema": "Multim\u00e9dia", 
        "name": "[MUL]-12"
    }, 
    "10127": {
        "goal": "<ul><li><h5>4.1.2 : Nom, r\u00f4le et valeur : (A)</h5><br />Permettre aux agents utilisateurs et aux technologies d'assistance de disposer de l'information n\u00e9cessaire sur les changements d'\u00e9tats, de valeurs et de nom intervenant dans l'interface utilisateur. <br><br>Certains contenus ajout\u00e9s dans les pages peuvent en effet int\u00e9grer leur propre interface de navigation. Dans ce cas, certains utilisateurs peuvent se trouver dans l'impossibilit\u00e9 de les utiliser dans leur contexte de navigation si leur interface n'a pas \u00e9t\u00e9 con\u00e7ue dans une technologie susceptible d'\u00eatre accessible</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Certains scripts n'ont pas d'alternatives en cas de non support de javascript.", 
        "description": "Pr\u00e9sence d'une alternative au code javascript.", 
        "solution": "<p> Tout code javascript utilis\u00e9 dans la page. </p><br /><br /><li>Si du code javascript est utilis\u00e9 dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si le code javascript est n\u00e9cessaire pour acc\u00e9der \u00e0 des informations, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si le contenu mis \u00e0 disposition gr\u00e2ce au javascript ne permet pas d'avoir acc\u00e8s au m\u00eame niveau d'information qu'un contenu textuel pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li><li>Si le contenu n'est pas consult\u00e9 dans un environnement informatique maitris\u00e9 dans lequel javascript est obligatoirement activ\u00e9, poursuivre le test, sinon le test est non applicable<br></li> ", 
        "thema": "Scripts", 
        "name": "[SCR]-12"
    }, 
    "10128": {
        "goal": "<ul><li><h5>1.2.1 : Contenu seulement audio ou vid\u00e9o (pr\u00e9-enregistr\u00e9) : (A)</h5><br />Fournir textuellement  \u00e0 tous les utilisateurs l'information v\u00e9hicul\u00e9e par les contenus seulement vid\u00e9o ou audio  (pr\u00e9-enregistr\u00e9). Les informations fournis textuellement seront accessible car elles peuvent \u00eatre restitu\u00e9es sous diff\u00e9rentes formes (visuelle, auditive, tactile)<br><br>Dans le cas contraire, le contenu des \u00e9l\u00e9ments seulement audio ou vid\u00e9o  ne serait pas perceptible pour diff\u00e9rentes cat\u00e9gories d'utilisateurs tels que : <br><br><ul><li>Les personnes ayant une d\u00e9ficience auditive pour le contenu uniquement sonore,</li><li>Les personnes ayant une d\u00e9ficience visuelle pour le contenu uniquement vid\u00e9o,</li></ul><br>Cela permet \u00e9galement \u00e0 des robots d'indexation d'exploiter l'information, ou \u00e0 des traducteurs automatiques d'en traduire le sens.</li><li><h5>1.2.3 : Audio-description ou version de remplacement pour un m\u00e9dia temporel (pr\u00e9-enregistr\u00e9) : (A)</h5><br />Permettre aux utilisateurs en situation de handicap visuel de percevoir l'information visuelle v\u00e9hicul\u00e9e par les contenus multim\u00e9dia.<br><br>Toutes les aides techniques ne sont pas en mesure de lire automatiquement la description textuelle des contenus multim\u00e9dias. Il est donc n\u00e9cessaire de la compl\u00e9ter d'une description audio. Ainsi, une personne pr\u00e9sentant une d\u00e9ficience visuelle ou ayant des probl\u00e8mes de compr\u00e9hension de l'\u00e9crit pourra profiter de cette description audio.</li><li><h5>1.2.8 : Version de remplacement pour un m\u00e9dia temporel (pr\u00e9-enregistr\u00e9e) : (AAA)</h5><br />Fournir textuellement \u00e0 tous les utilisateurs l'information v\u00e9hicul\u00e9e\r\npar les m\u00e9dias temporels synchronis\u00e9s (pr\u00e9-enregistr\u00e9s) ou vid\u00e9o seulement. Les\r\ninformations fournis textuellement seront accessibles car elles peuvent\r\n\u00eatre restitu\u00e9es sous diff\u00e9rentes formes (visuelle, auditive, tactile)<br><br>Dans\r\nle cas contraire, le contenu des m\u00e9dias synchronis\u00e9s  ou vid\u00e9o seulement ne\r\nserait pas perceptible pour diff\u00e9rentes cat\u00e9gories d'utilisateurs tels\r\nque : <br><br><ul><li>Les personnes ayant une d\u00e9ficience auditive pour le contenu&nbsp; sonore,</li><li>Les personnes ayant une d\u00e9ficience visuelle pour le contenu visuel,</li></ul><br>Cela\r\npermet \u00e9galement \u00e0 des robots d'indexation d'exploiter l'information,\r\nou \u00e0 des traducteurs automatiques d'en traduire le sens.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "L'information pr\u00e9sente dans la version alternative ne restitue pas l'ensemble des informations.", 
        "description": "Equivalence de l'information mise \u00e0 disposition dans la version alternative.", 
        "solution": "<p> Tout \u00e9l\u00e9ment :<br> </p><ul> <li> <code>applet</code>, </li> <li> <code>embed</code>, </li> <li> <code>object</code>, </li> <li>Tout code javascript utilis\u00e9 dans la page ou g\u00e9n\u00e9rant un des \u00e9l\u00e9ments pr\u00e9c\u00e9dant. </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si l'\u00e9l\u00e9ment dispose d'une version alternative, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Textes", 
        "name": "[TEX]-03"
    }, 
    "10129": {
        "goal": "<ul><li><h5>2.1.1 : Clavier : (A)</h5><br />Rendre les contenus accessibles via un p\u00e9riph\u00e9rique de type clavier. <br><br>Certains utilisateurs ayant un handicap moteur ou visuel n'utiliseront par exemple que le clavier ou un p\u00e9riph\u00e9rique adapt\u00e9 pour naviguer. De plus, il est \u00e0 noter que de nombreux terminaux mobiles ne proposent pas d'interface souris mais uniquement une interface clavier.</li><li><h5>2.1.3 : Clavier (pas d'exception) : (AAA)</h5><br />Rendre les contenus accessibles via un p\u00e9riph\u00e9rique de type clavier.<br><br>Certains utilisateurs ayant un handicap moteur ou visuel n'utiliseront\r\npar exemple que le clavier ou un p\u00e9riph\u00e9rique adapt\u00e9 pour naviguer. De\r\nplus, il est \u00e0 noter que de nombreux terminaux mobiles ne proposent pas\r\nd'interface souris mais uniquement une interface clavier.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "L'\u00e9v\u00e9nement onclick n'est pas utiliser sur une \u00e9l\u00e9ment nativement utilisable au clavier et n'a pas de gestionnaire d'\u00e9v\u00e9nement permettant son utilisation clavier.", 
        "description": "Universalit\u00e9 du gestionnaire d'\u00e9v\u00e8nement onclick.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <abbr title=\"Hypertext Markup Language\" xml:lang=\"en\" lang=\"en\">HTML</abbr> pouvant recevoir le focus ayant l'attribut de gestion d'\u00e9v\u00e8nement <code>onclick</code> ou son \u00e9quivalent javascript. </p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si le gestionnaire d'\u00e9v\u00e8nement n'est pas utilis\u00e9 sur un \u00e9l\u00e9ment a, area, button ou input type button, submit, reset, file, image, password, radio, checkbox, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'activation du gestionnaire d'\u00e9v\u00e8nement permet d'acc\u00e9der \u00e0 de l'information, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Scripts", 
        "name": "[SCR]-02"
    }, 
    "10130": {
        "goal": "<ul><li><h5>2.1.1 : Clavier : (A)</h5><br />Rendre les contenus accessibles via un p\u00e9riph\u00e9rique de type clavier. <br><br>Certains utilisateurs ayant un handicap moteur ou visuel n'utiliseront par exemple que le clavier ou un p\u00e9riph\u00e9rique adapt\u00e9 pour naviguer. De plus, il est \u00e0 noter que de nombreux terminaux mobiles ne proposent pas d'interface souris mais uniquement une interface clavier.</li><li><h5>2.1.3 : Clavier (pas d'exception) : (AAA)</h5><br />Rendre les contenus accessibles via un p\u00e9riph\u00e9rique de type clavier.<br><br>Certains utilisateurs ayant un handicap moteur ou visuel n'utiliseront\r\npar exemple que le clavier ou un p\u00e9riph\u00e9rique adapt\u00e9 pour naviguer. De\r\nplus, il est \u00e0 noter que de nombreux terminaux mobiles ne proposent pas\r\nd'interface souris mais uniquement une interface clavier.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Des gestionnaires d'\u00e9v\u00e9nements souris sont d\u00e9finis sans leur \u00e9quivalent clavier.", 
        "description": "Universalit\u00e9 des gestionnaires d'\u00e9v\u00e8nements.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <abbr title=\"Hypertext Markup Language\" xml:lang=\"en\" lang=\"en\">HTML</abbr> ayant au moins l'un des attributs de gestion d'\u00e9v\u00e8nements suivants : </p><ul> <li> <code>onmousedown</code>, </li> <li> <code>onmouseup</code>, </li> <li> <code>onmouseover</code>, </li> <li> <code>onmouseout</code>, </li> <li> <code>onfocus</code>, </li> <li> <code>onblur</code>, </li> <li> <code>onkeydown</code>, </li> <li> <code>onkeyup</code>, </li> </ul><p> ou leur \u00e9quivalent javascript. </p><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'activation du gestionnaire d'\u00e9v\u00e8nement permet d'acc\u00e9der \u00e0 de l'information, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Scripts", 
        "name": "[SCR]-03"
    }, 
    "10131": {
        "goal": "<ul><li><h5>4.1.2 : Nom, r\u00f4le et valeur : (A)</h5><br />Permettre aux agents utilisateurs et aux technologies d'assistance de disposer de l'information n\u00e9cessaire sur les changements d'\u00e9tats, de valeurs et de nom intervenant dans l'interface utilisateur. <br><br>Certains contenus ajout\u00e9s dans les pages peuvent en effet int\u00e9grer leur propre interface de navigation. Dans ce cas, certains utilisateurs peuvent se trouver dans l'impossibilit\u00e9 de les utiliser dans leur contexte de navigation si leur interface n'a pas \u00e9t\u00e9 con\u00e7ue dans une technologie susceptible d'\u00eatre accessible</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Les contenus mis \u00e0 jour dynamiquement via javascript ne sont pas accessibles en eux-m\u00eames. Le balisage g\u00e9n\u00e9r\u00e9 ne respecte pas les crit\u00e8res d'accessibilit\u00e9.", 
        "description": "Accessibilit\u00e9 des contenus dynamiques en javascript.", 
        "solution": "<p> Tout code javascript utilis\u00e9 dans la page. </p><br /><br /><li>Si du code javascript est utilis\u00e9 dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si le code javascript g\u00e9n\u00e8re ou met \u00e0 jour un contenu dans la page avec ou sans action de l'utilisateur, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Scripts", 
        "name": "[SCR]-13"
    }, 
    "10132": {
        "goal": "<ul><li><h5>2.2.4 : Interruptions : (AAA)</h5><br />Permettre aux utilisateurs de d\u00e9sactiver les mises \u00e0 jour automatiques ou les alertes \u00e0 l'exception des alertes d'urgence concernant des situations soudaines qui exige une action\r\n            imm\u00e9diate afin de pr\u00e9server la sant\u00e9, la s\u00e9curit\u00e9 ou la propri\u00e9t\u00e9 de l'utilisateur.<br><br>Cela permet aux personnes ayant des limitations cognitives ou des troubles de l'attention d'\u00eatre capable de se concentrer sur le contenu et permet \u00e9galement aux personnes aveugles ou mal voyantes de garder le focus sur la zone qu'elles sont en train de lire.</li><li><h5>3.2.5 : Changement \u00e0 la demande : (AAA)</h5><br />Permettre aux utilisateurs d'anticiper le r\u00e9sultat de leurs actions lorsqu'ils interagissent avec le contenu.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Il est impossible de d\u00e9sactiver la mise \u00e0 jour automatique du contenu.", 
        "description": "Possibilit\u00e9 de d\u00e9sactiver toute alerte non sollicit\u00e9e ou toute mise \u00e0 jour automatique d'un contenu de la page.", 
        "solution": "<p> Tout code javascript utilis\u00e9 dans la page. </p><br /><br /><li>Si du code javascript est utilis\u00e9 dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si le code javascript provoque une alerte non sollicit\u00e9e ou met \u00e0 jour le contenu de la page sans action de l'utilisateur, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'alerte ou la mise \u00e0 jour n'est pas d\u00fbe \u00e0 un \u00e9v\u00e9nement ou une situation soudaine et impr\u00e9vue qui exige une action imm\u00e9diate afin de pr\u00e9server la sant\u00e9, la s\u00e9curit\u00e9 ou la propri\u00e9t\u00e9, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Scripts", 
        "name": "[SCR]-04"
    }, 
    "10133": {
        "goal": "<ul><li><h5>3.2.1 : Au focus : (A)</h5><br />Permettre aux utilisateurs d'anticiper le r\u00e9sultat de leurs actions lorsqu'ils interagissent avec le contenu notamment lorsqu'ils naviguent au clavier au travers de l'interface</li><li><h5>3.2.2 : \u00c0 la saisie : (A)</h5><br />Permettre aux utilisateurs d'anticiper le r\u00e9sultat de leurs actions lorsqu'ils interagissent avec le contenu  notamment lorsqu'ils saisissent du contenu ou activent des \u00e9l\u00e9ments dans l'interface.</li><li><h5>3.2.5 : Changement \u00e0 la demande : (AAA)</h5><br />Permettre aux utilisateurs d'anticiper le r\u00e9sultat de leurs actions lorsqu'ils interagissent avec le contenu.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Un changement de contexte a lieu sans que l'utilisateur en soit pr\u00e9alablement averti ou qu'il est valid\u00e9 explicitement ce changement.", 
        "description": "Absence de changements de contexte suite \u00e0 une action de l'utilisateur sans validation explicite ou information pr\u00e9alable.", 
        "solution": "<p> Tout code javascript utilis\u00e9 dans la page. </p><br /><br /><li>Si du code javascript est utilis\u00e9 dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si le code javascript entraine un changement de contexte (changement d'agent utilisateur, d\u00e9placement du focus, mise \u00e0 jour ou g\u00e9n\u00e9ration de contenu qui change le sens d'une page, validation de formulaire) dans la page apr\u00e8s une action de l'utilisateur, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Scripts", 
        "name": "[SCR]-05"
    }, 
    "10134": {
        "goal": "<ul><li><h5>2.4.3 : Parcours du focus : (A)</h5><br />Rendre les contenus accessibles au clavier dans un ordre coh\u00e9rent avec l'information d\u00e9livr\u00e9e.<br><br>Pour les utilisateurs de synth\u00e8ses vocales ou qui naviguent de lien en lien au clavier, la navigation dans la page se fait par d\u00e9faut de mani\u00e8re lin\u00e9aire, en fonction de l'ordre du code source de la page et ind\u00e9pendamment de son affichage. Aussi, proposer un ordre logique de parcours au clavier permet une utilisation et une compr\u00e9hension plus ais\u00e9es des pages. C'est \u00e9galement le cas pour les utilisateurs ayant une limitation motrice qui utilisent le clavier pour se d\u00e9placer au sein d'une page, les personnes ayant des difficult\u00e9s de lecture et qui se d\u00e9placent au clavier et les personnes ayant besoin d'agrandir le texte \u00e0 l'\u00e9cran.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Le contenu mise \u00e0 jour en javascript ne sont pas atteignables de fa\u00e7on simple lors d'une navigation au clavier.", 
        "description": "Ordre d'acc\u00e8s au clavier aux contenus mis \u00e0 jour dynamiquement en javascript.", 
        "solution": "<p> Tout code javascript utilis\u00e9 dans la page. </p><br /><br /><li>Si du code javascript est utilis\u00e9 dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si le code javascript met \u00e0 jour ou g\u00e9n\u00e8re un contenu apr\u00e8s action de l'utilisateur, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si le contenu mis \u00e0 jour ou g\u00e9n\u00e9r\u00e9 comporte tous les attributs et \u00e9l\u00e9ments le rendant accessible, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Scripts", 
        "name": "[SCR]-06"
    }, 
    "10135": {
        "goal": "<ul><li><h5>1.3.1 : Information et relations : (A)</h5><br />Rendre l'information ind\u00e9pendante de sa mise en forme visuelle ou sonore.<br><br>Ce crit\u00e8re de succ\u00e8s est b\u00e9n\u00e9fique \u00e0 des personnes ayant diff\u00e9rents types de handicaps. Les personnes aveugles ou sourdes et aveugles utilisant un lecteur d'\u00e9cran ou un terminal braille auront acc\u00e8s \u00e0 l'information disponible par la couleur lorsque celle-ci est \u00e9galement mise \u00e0 disposition de fa\u00e7on textuelle.<br>Il vise notamment \u00e0 permettre \u00e0 ce que les agents utilisateurs restituent une information en fonction des besoins de l'utilisateur et cela ind\u00e9pendamment de sa mise en forme visuelle ou sonore. </li><li><h5>2.1.1 : Clavier : (A)</h5><br />Rendre les contenus accessibles via un p\u00e9riph\u00e9rique de type clavier. <br><br>Certains utilisateurs ayant un handicap moteur ou visuel n'utiliseront par exemple que le clavier ou un p\u00e9riph\u00e9rique adapt\u00e9 pour naviguer. De plus, il est \u00e0 noter que de nombreux terminaux mobiles ne proposent pas d'interface souris mais uniquement une interface clavier.</li><li><h5>4.1.2 : Nom, r\u00f4le et valeur : (A)</h5><br />Permettre aux agents utilisateurs et aux technologies d'assistance de disposer de l'information n\u00e9cessaire sur les changements d'\u00e9tats, de valeurs et de nom intervenant dans l'interface utilisateur. <br><br>Certains contenus ajout\u00e9s dans les pages peuvent en effet int\u00e9grer leur propre interface de navigation. Dans ce cas, certains utilisateurs peuvent se trouver dans l'impossibilit\u00e9 de les utiliser dans leur contexte de navigation si leur interface n'a pas \u00e9t\u00e9 con\u00e7ue dans une technologie susceptible d'\u00eatre accessible</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Des \u00e9l\u00e9ments d'interactions ne sont pas balis\u00e9s \u00e0 l'aide d'\u00e9l\u00e9ment d'interaction tel que a ou des \u00e9l\u00e9ments de formulaires.", 
        "description": "Utilisation correcte du r\u00f4le des \u00e9l\u00e9ments.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <abbr title=\"Hypertext Markup Language\" xml:lang=\"en\" lang=\"en\">HTML</abbr> </p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si une interaction avec l'\u00e9l\u00e9ment (clic de la souris sur l'\u00e9l\u00e9ment, arriv\u00e9e ou d\u00e9part du focus sur l'\u00e9l\u00e9ment) permet de d\u00e9clencher une action (validation de formulaire, acc\u00e8s \u00e0 une page, ouverture d'une fen\u00eatre, g\u00e9n\u00e9ration de contenu, etc.), poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Scripts", 
        "name": "[SCR]-07"
    }, 
    "10136": {
        "goal": "<ul><li><h5>2.3.1 : Pas plus de trois flashs ou sous le seuil critique : (A)</h5><br />Rendre le contenu accessible aux utilisateurs en situation de handicap les exposant \u00e0 un risque en cas de flash. <br><br>A certaines fr\u00e9quences, les changements brusques de luminosit\u00e9 des couleurs \u00e0 l'\u00e9cran, comme les effets stroboscopiques (flash), peuvent provoquer chez certains utilisateurs des crises d'\u00e9pilepsie</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Des \u00e9l\u00e9ments provoquent des changements brusques de luminosit\u00e9 ou des effets de flash rouge \u00e0 fr\u00e9quence \u00e9lev\u00e9e.", 
        "description": "Absence d'\u00e9l\u00e9ments provoquant des changements brusques de luminosit\u00e9 ou des effets de flash rouge \u00e0 fr\u00e9quence \u00e9lev\u00e9e.", 
        "solution": "<p> Tout \u00e9l\u00e9ment : </p><ul> <li> <code>object</code>, </li> <li> <code>embed</code>, </li> <li> <code>applet</code>, </li> <li> <code>img</code> au format <acronym title=\"Graphics Interchange Format\" xml:lang=\"en\" lang=\"en\">gif</acronym> , <abbr title=\"Animated Portable Network Graphics\" xml:lang=\"en\" lang=\"en\">apng</abbr> ou <abbr title=\"Multiple-image Network Graphics\" xml:lang=\"en\" lang=\"en\">mng</abbr>. </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment provoque des changements brusques de luminosit\u00e9 ou des effets de flash rouge, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Multim\u00e9dia", 
        "name": "[MUL]-13"
    }, 
    "10137": {
        "goal": "<ul><li><h5>2.3.1 : Pas plus de trois flashs ou sous le seuil critique : (A)</h5><br />Rendre le contenu accessible aux utilisateurs en situation de handicap les exposant \u00e0 un risque en cas de flash. <br><br>A certaines fr\u00e9quences, les changements brusques de luminosit\u00e9 des couleurs \u00e0 l'\u00e9cran, comme les effets stroboscopiques (flash), peuvent provoquer chez certains utilisateurs des crises d'\u00e9pilepsie</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Du code javascript provoquent des changements brusques de luminosit\u00e9 ou des effets de flash rouge \u00e0 fr\u00e9quence \u00e9lev\u00e9e. ", 
        "description": "Absence de code javascript provoquant des changements brusques de luminosit\u00e9 ou des effets de flash rouge \u00e0 fr\u00e9quence \u00e9lev\u00e9e.", 
        "solution": "<p> Tout code javascript utilis\u00e9 dans la page. </p><br /><br /><li>Si du code javascript est utilis\u00e9 dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si le code javascript provoque des changements brusques de luminosit\u00e9 ou des effets de flash rouge, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Multim\u00e9dia", 
        "name": "[MUL]-14"
    }, 
    "10138": {
        "goal": "<ul><li><h5>2.3.1 : Pas plus de trois flashs ou sous le seuil critique : (A)</h5><br />Rendre le contenu accessible aux utilisateurs en situation de handicap les exposant \u00e0 un risque en cas de flash. <br><br>A certaines fr\u00e9quences, les changements brusques de luminosit\u00e9 des couleurs \u00e0 l'\u00e9cran, comme les effets stroboscopiques (flash), peuvent provoquer chez certains utilisateurs des crises d'\u00e9pilepsie</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "La mise en forme par le biais des styles CSS provoquent des changements brusques de luminosit\u00e9 ou des effets de flash rouge \u00e0 fr\u00e9quence \u00e9lev\u00e9e.", 
        "description": "Absence de mise en forme provoquant des changements brusques de luminosit\u00e9 ou des effets de flash rouge \u00e0 fr\u00e9quence \u00e9lev\u00e9e.", 
        "solution": "<p> Tout \u00e9l\u00e9ment mis en forme par des styles utilisant au moins une des propri\u00e9t\u00e9s suivantes : </p><ul> <li> <code>background</code>, </li> <li> <code>background-image</code>, </li> <li> <code>content</code>. </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si la mise en forme de l'\u00e9l\u00e9ment provoque des changements brusques de luminosit\u00e9 ou des effets de flash rouge, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Multim\u00e9dia", 
        "name": "[MUL]-15"
    }, 
    "10139": {
        "goal": "<ul><li><h5>2.2.2 : Mettre en pause, arr\u00eater, masquer : (A)</h5><br />Rendre les contenus accessibles sans interf\u00e9rences dues \u00e0 une animation susceptible de g\u00eaner l'utilisateur. <br><br>Certaines personnes souffrant d'incapacit\u00e9s mentales ou visuelles ne peuvent pas lire un texte lorsqu'il clignote ou lorsqu'il bouge. Les clignotements/mouvements peuvent causer une distraction telle que le reste de la page devient illisible pour des gens souffrant de handicap cognitif.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Un \u00e9l\u00e9ment blink est pr\u00e9sent.", 
        "description": "Absence de l'\u00e9l\u00e9ment blink.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <code>blink</code>. </p><br /><br />", 
        "thema": "Multim\u00e9dia", 
        "name": "[MUL]-19"
    }, 
    "10140": {
        "goal": "<ul><li><h5>2.2.2 : Mettre en pause, arr\u00eater, masquer : (A)</h5><br />Rendre les contenus accessibles sans interf\u00e9rences dues \u00e0 une animation susceptible de g\u00eaner l'utilisateur. <br><br>Certaines personnes souffrant d'incapacit\u00e9s mentales ou visuelles ne peuvent pas lire un texte lorsqu'il clignote ou lorsqu'il bouge. Les clignotements/mouvements peuvent causer une distraction telle que le reste de la page devient illisible pour des gens souffrant de handicap cognitif.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Un \u00e9l\u00e9ment provoque des clignotements d\u00e9clench\u00e9s automatiquement ne pouvant pas \u00eatre arr\u00eat\u00e9s.", 
        "description": "Absence d'\u00e9l\u00e9ments provoquant des clignotements d\u00e9clench\u00e9s automatiquement ne pouvant pas \u00eatre arr\u00eat\u00e9s.", 
        "solution": "<p> Tout \u00e9l\u00e9ment :<br> </p><ul> <li> <code>object</code>, </li> <li> <code>embed</code>, </li> <li> <code>applet</code>, </li> <li> <code>img</code> avec l'extension <acronym title=\"Graphics Interchange Format\" xml:lang=\"en\" lang=\"en\">gif</acronym> , <abbr title=\"Animated Portable Network Graphics\" xml:lang=\"en\" lang=\"en\">apng</abbr> ou <abbr title=\"Multiple-image Network Graphics\" xml:lang=\"en\" lang=\"en\">mng</abbr>. </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment provoque des clignotements qui se d\u00e9clenchent sans action pr\u00e9alable de l'utilisateur, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si le clignotements n'apporte en lui m\u00eame aucune information ou qu'il s'agit d'une fonctionnalit\u00e9 qu'il serait possible \u00e0 reproduire sans clignotement, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Multim\u00e9dia", 
        "name": "[MUL]-20"
    }, 
    "10141": {
        "goal": "<ul><li><h5>2.2.2 : Mettre en pause, arr\u00eater, masquer : (A)</h5><br />Rendre les contenus accessibles sans interf\u00e9rences dues \u00e0 une animation susceptible de g\u00eaner l'utilisateur. <br><br>Certaines personnes souffrant d'incapacit\u00e9s mentales ou visuelles ne peuvent pas lire un texte lorsqu'il clignote ou lorsqu'il bouge. Les clignotements/mouvements peuvent causer une distraction telle que le reste de la page devient illisible pour des gens souffrant de handicap cognitif.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Du code javascript provoque des clignotements d\u00e9clench\u00e9s automatiquement ne pouvant pas \u00eatre arr\u00eat\u00e9s.", 
        "description": "Absence de code javascript provoquant des clignotements d\u00e9clench\u00e9s automatiquement ne pouvant pas \u00eatre arr\u00eat\u00e9s.", 
        "solution": "<p> Tout code javascript utilis\u00e9 dans la page. </p><br /><br /><li>Si du code javascript est utilis\u00e9 dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si le code javascript provoque des clignotements qui se d\u00e9clenchent sans action pr\u00e9alable de l'utilisateur, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si le clignotements n'apporte en lui m\u00eame aucune information ou qu'il s'agit d'une fonctionnalit\u00e9 qu'il serait possible \u00e0 reproduire sans clignotement, poursuivre le test, sinon le test est non applicable.</li> ", 
        "thema": "Multim\u00e9dia", 
        "name": "[MUL]-21"
    }, 
    "10142": {
        "goal": "<ul><li><h5>2.2.2 : Mettre en pause, arr\u00eater, masquer : (A)</h5><br />Rendre les contenus accessibles sans interf\u00e9rences dues \u00e0 une animation susceptible de g\u00eaner l'utilisateur. <br><br>Certaines personnes souffrant d'incapacit\u00e9s mentales ou visuelles ne peuvent pas lire un texte lorsqu'il clignote ou lorsqu'il bouge. Les clignotements/mouvements peuvent causer une distraction telle que le reste de la page devient illisible pour des gens souffrant de handicap cognitif.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Une mise en forme provoque des clignotements d\u00e9clench\u00e9s automatiquement ne pouvant pas \u00eatre arr\u00eat\u00e9s.", 
        "description": "Absence de mise en forme provoquant des clignotements d\u00e9clench\u00e9s automatiquement ne pouvant pas \u00eatre arr\u00eat\u00e9s.", 
        "solution": "<p> Tout \u00e9l\u00e9ment mis en forme par des styles utilisant au moins une des propri\u00e9t\u00e9s suivantes :<br> </p><ul> <li> <code>background</code>, </li> <li> <code>background-image</code>, </li> <li> <code>content</code>, </li> <li> <code>text-decoration</code> avec la valeur <code>blink</code>.</li></ul><br /><br /><li>Si la mise en forme de l'\u00e9l\u00e9ment provoque des clignotements qui se d\u00e9clenche sans action pr\u00e9alable de l'utilisateur, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si le clignotements n'apporte en lui m\u00eame aucune information ou qu'il s'agit d'une fonctionnalit\u00e9 qu'il serait possible \u00e0 reproduire sans clignotement, poursuivre le test, sinon le test est non applicable.</li> ", 
        "thema": "Multim\u00e9dia", 
        "name": "[MUL]-22"
    }, 
    "10143": {
        "goal": "<ul><li><h5>2.2.1 : R\u00e9glage du d\u00e9lai : (A)</h5><br />Rendre les contenus accessibles quelles que soient les contraintes de temps de consultation ou d'interaction dues \u00e0 des situations de handicap.<br><br>Certaines personnes souffrant\r\nd'incapacit\u00e9s mentales ou visuelles peuvent avoir besoin de plus de temps pour lire un texte. Les limites de temps peuvent rendre impossible la lecture ou la manipulation de l'interface pour ces personne.</li><li><h5>2.2.2 : Mettre en pause, arr\u00eater, masquer : (A)</h5><br />Rendre les contenus accessibles sans interf\u00e9rences dues \u00e0 une animation susceptible de g\u00eaner l'utilisateur. <br><br>Certaines personnes souffrant d'incapacit\u00e9s mentales ou visuelles ne peuvent pas lire un texte lorsqu'il clignote ou lorsqu'il bouge. Les clignotements/mouvements peuvent causer une distraction telle que le reste de la page devient illisible pour des gens souffrant de handicap cognitif.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Un \u00e9l\u00e9ment marquee est pr\u00e9sent.", 
        "description": "Absence d'\u00e9l\u00e9ment marquee.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <code>marquee</code>. </p><br /><br />", 
        "thema": "Multim\u00e9dia", 
        "name": "[MUL]-23"
    }, 
    "10144": {
        "goal": "<ul><li><h5>2.2.1 : R\u00e9glage du d\u00e9lai : (A)</h5><br />Rendre les contenus accessibles quelles que soient les contraintes de temps de consultation ou d'interaction dues \u00e0 des situations de handicap.<br><br>Certaines personnes souffrant\r\nd'incapacit\u00e9s mentales ou visuelles peuvent avoir besoin de plus de temps pour lire un texte. Les limites de temps peuvent rendre impossible la lecture ou la manipulation de l'interface pour ces personne.</li><li><h5>2.2.2 : Mettre en pause, arr\u00eater, masquer : (A)</h5><br />Rendre les contenus accessibles sans interf\u00e9rences dues \u00e0 une animation susceptible de g\u00eaner l'utilisateur. <br><br>Certaines personnes souffrant d'incapacit\u00e9s mentales ou visuelles ne peuvent pas lire un texte lorsqu'il clignote ou lorsqu'il bouge. Les clignotements/mouvements peuvent causer une distraction telle que le reste de la page devient illisible pour des gens souffrant de handicap cognitif.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Un \u00e9l\u00e9ment provoque des mouvements d\u00e9clench\u00e9s automatiquement ne pouvant pas \u00eatre arr\u00eat\u00e9s.", 
        "description": "Absence d'\u00e9l\u00e9ments affichant des mouvements d\u00e9clench\u00e9s automatiquement ne pouvant pas \u00eatre arr\u00eat\u00e9s.", 
        "solution": "<p> Tout \u00e9l\u00e9ment :<br> </p><ul> <li> <code>object</code>, </li> <li> <code>embed</code>, </li> <li> <code>applet</code>, </li> <li> <code>img</code> au format <acronym title=\"Graphics Interchange Format\" xml:lang=\"en\" lang=\"en\">gif</acronym> , <abbr title=\"Animated Portable Network Graphics\" xml:lang=\"en\" lang=\"en\">apng</abbr> ou <abbr title=\"Multiple-image Network Graphics\" xml:lang=\"en\" lang=\"en\">mng</abbr>. </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment affiche des mouvements qui se d\u00e9clenchent sans action pr\u00e9alable de l'utilisateur, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si le mouvement n'apporte en lui m\u00eame aucune information ou qu'il s'agit d'une fonctionnalit\u00e9 qu'il serait possible de reproduire sans mouvement, poursuivre le test, sinon le test est non applicable.</li> ", 
        "thema": "Multim\u00e9dia", 
        "name": "[MUL]-24"
    }, 
    "10145": {
        "goal": "<ul><li><h5>2.2.1 : R\u00e9glage du d\u00e9lai : (A)</h5><br />Rendre les contenus accessibles quelles que soient les contraintes de temps de consultation ou d'interaction dues \u00e0 des situations de handicap.<br><br>Certaines personnes souffrant\r\nd'incapacit\u00e9s mentales ou visuelles peuvent avoir besoin de plus de temps pour lire un texte. Les limites de temps peuvent rendre impossible la lecture ou la manipulation de l'interface pour ces personne.</li><li><h5>2.2.2 : Mettre en pause, arr\u00eater, masquer : (A)</h5><br />Rendre les contenus accessibles sans interf\u00e9rences dues \u00e0 une animation susceptible de g\u00eaner l'utilisateur. <br><br>Certaines personnes souffrant d'incapacit\u00e9s mentales ou visuelles ne peuvent pas lire un texte lorsqu'il clignote ou lorsqu'il bouge. Les clignotements/mouvements peuvent causer une distraction telle que le reste de la page devient illisible pour des gens souffrant de handicap cognitif.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Du code javascript provoque des mouvements d\u00e9clench\u00e9s automatiquement ne pouvant pas \u00eatre arr\u00eat\u00e9s.", 
        "description": "Absence de code javascript provoquant des mouvements d\u00e9clench\u00e9s automatiquement  ne pouvant pas \u00eatre arr\u00eat\u00e9s.", 
        "solution": "<p> Tout code javascript utilis\u00e9 dans la page. </p><br /><br /><li>Si du code javascript est utilis\u00e9 dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si le code javascript provoque des mouvements qui se d\u00e9clenchent sans action pr\u00e9alable de l'utilisateur, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si le mouvement n'apporte en lui m\u00eame aucune information ou qu'il s'agit d'une fonctionnalit\u00e9 qu'il serait possible de reproduire sans mouvement, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Multim\u00e9dia", 
        "name": "[MUL]-25"
    }, 
    "10146": {
        "goal": "<ul><li><h5>2.2.1 : R\u00e9glage du d\u00e9lai : (A)</h5><br />Rendre les contenus accessibles quelles que soient les contraintes de temps de consultation ou d'interaction dues \u00e0 des situations de handicap.<br><br>Certaines personnes souffrant\r\nd'incapacit\u00e9s mentales ou visuelles peuvent avoir besoin de plus de temps pour lire un texte. Les limites de temps peuvent rendre impossible la lecture ou la manipulation de l'interface pour ces personne.</li><li><h5>2.2.2 : Mettre en pause, arr\u00eater, masquer : (A)</h5><br />Rendre les contenus accessibles sans interf\u00e9rences dues \u00e0 une animation susceptible de g\u00eaner l'utilisateur. <br><br>Certaines personnes souffrant d'incapacit\u00e9s mentales ou visuelles ne peuvent pas lire un texte lorsqu'il clignote ou lorsqu'il bouge. Les clignotements/mouvements peuvent causer une distraction telle que le reste de la page devient illisible pour des gens souffrant de handicap cognitif.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Une mise en forme provoque des mouvements d\u00e9clench\u00e9s automatiquement ne pouvant pas \u00eatre arr\u00eat\u00e9s.", 
        "description": "Absence de mise en forme provoquant des mouvements d\u00e9clench\u00e9s automatiquement ne pouvant pas \u00eatre arr\u00eat\u00e9s.", 
        "solution": "<p> Tout \u00e9l\u00e9ment mis en forme par des styles utilisant au moins une des propri\u00e9t\u00e9s suivantes : </p><ul> <li> <code>background</code>, </li> <li> <code>background-image</code>, </li> <li> <code>content</code> </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si la mise en forme de l'\u00e9l\u00e9ment provoque des mouvements qui se d\u00e9clenchent sans action pr\u00e9alable de l'utilisateur, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si le mouvement n'apporte en lui m\u00eame aucune information ou qu'il s'agit d'une fonctionnalit\u00e9 qu'il serait possible de reproduire sans mouvement, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Multim\u00e9dia", 
        "name": "[MUL]-26"
    }, 
    "10147": {
        "goal": "<ul><li><h5>2.2.1 : R\u00e9glage du d\u00e9lai : (A)</h5><br />Rendre les contenus accessibles quelles que soient les contraintes de temps de consultation ou d'interaction dues \u00e0 des situations de handicap.<br><br>Certaines personnes souffrant\r\nd'incapacit\u00e9s mentales ou visuelles peuvent avoir besoin de plus de temps pour lire un texte. Les limites de temps peuvent rendre impossible la lecture ou la manipulation de l'interface pour ces personne.</li><li><h5>3.2.5 : Changement \u00e0 la demande : (AAA)</h5><br />Permettre aux utilisateurs d'anticiper le r\u00e9sultat de leurs actions lorsqu'ils interagissent avec le contenu.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Un \u00e9l\u00e9ment meta d\u00e9clenchant un rafraichissement automatique de la page est pr\u00e9sent.", 
        "description": "Absence d'\u00e9l\u00e9ment meta provoquant un rafra\u00eechissement automatique de la page.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <code>meta</code> ayant l'attribut <code>http-equiv='refresh'</code>. </p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si un attribut content est pr\u00e9sent sur l'\u00e9l\u00e9ment, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'attribut content a comme valeur un entier sup\u00e9rieur ou \u00e9gal \u00e0 0 et inf\u00e9rieure \u00e0 72000, poursuivre le test, sinon le test est non applicable.</li><li>Si la limite de temps avant le rafraichissement ne pourrait \u00eatre supprim\u00e9e sans changer fondamentalement l'information ou les fonctionnalit\u00e9s du contenu, poursuivre le test, sinon le test est non applicable.<br></li>", 
        "thema": "Navigation", 
        "name": "[NAV]-07"
    }, 
    "10148": {
        "goal": "<ul><li><h5>2.2.1 : R\u00e9glage du d\u00e9lai : (A)</h5><br />Rendre les contenus accessibles quelles que soient les contraintes de temps de consultation ou d'interaction dues \u00e0 des situations de handicap.<br><br>Certaines personnes souffrant\r\nd'incapacit\u00e9s mentales ou visuelles peuvent avoir besoin de plus de temps pour lire un texte. Les limites de temps peuvent rendre impossible la lecture ou la manipulation de l'interface pour ces personne.</li><li><h5>3.2.5 : Changement \u00e0 la demande : (AAA)</h5><br />Permettre aux utilisateurs d'anticiper le r\u00e9sultat de leurs actions lorsqu'ils interagissent avec le contenu.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Du code javascript d\u00e9clenchant un rafraichissement automatique de la page est pr\u00e9sent.", 
        "description": "Absence de code javascript provoquant un rafra\u00eechissement automatique de la page ne pouvant pas \u00eatre arr\u00eat\u00e9.", 
        "solution": "<p> Tout code javascript utilis\u00e9 dans la page. </p><br /><br /><li>Si du code javascript est utilis\u00e9 dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si le code javascript provoque un rafra\u00eechissement automatique de la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si le rafra\u00eechissement automatique ne pourrait \u00eatre supprim\u00e9e sans changer fondamentalement l'information ou les fonctionnalit\u00e9s du contenu, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Navigation", 
        "name": "[NAV]-08"
    }, 
    "10149": {
        "goal": "<ul><li><h5>2.2.1 : R\u00e9glage du d\u00e9lai : (A)</h5><br />Rendre les contenus accessibles quelles que soient les contraintes de temps de consultation ou d'interaction dues \u00e0 des situations de handicap.<br><br>Certaines personnes souffrant\r\nd'incapacit\u00e9s mentales ou visuelles peuvent avoir besoin de plus de temps pour lire un texte. Les limites de temps peuvent rendre impossible la lecture ou la manipulation de l'interface pour ces personne.</li><li><h5>2.2.4 : Interruptions : (AAA)</h5><br />Permettre aux utilisateurs de d\u00e9sactiver les mises \u00e0 jour automatiques ou les alertes \u00e0 l'exception des alertes d'urgence concernant des situations soudaines qui exige une action\r\n            imm\u00e9diate afin de pr\u00e9server la sant\u00e9, la s\u00e9curit\u00e9 ou la propri\u00e9t\u00e9 de l'utilisateur.<br><br>Cela permet aux personnes ayant des limitations cognitives ou des troubles de l'attention d'\u00eatre capable de se concentrer sur le contenu et permet \u00e9galement aux personnes aveugles ou mal voyantes de garder le focus sur la zone qu'elles sont en train de lire.</li><li><h5>3.2.5 : Changement \u00e0 la demande : (AAA)</h5><br />Permettre aux utilisateurs d'anticiper le r\u00e9sultat de leurs actions lorsqu'ils interagissent avec le contenu.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Un \u00e9l\u00e9ment meta d\u00e9clenchant une redirection automatique de la page est pr\u00e9sent.", 
        "description": "Absence d'\u00e9l\u00e9ment meta provoquant une redirection automatique de la page.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <code>meta</code> ayant l'attribut <code>http-equiv='refresh'</code>. </p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'attribut content est pr\u00e9sent sur l'\u00e9l\u00e9ment, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'attribut content a comme valeur un entier sup\u00e9rieur ou \u00e9gal \u00e0 0 et inf\u00e9rieure \u00e0 72000, poursuivre le test, sinon le test est non applicable.</li><li>Si la limite de temps avant le rafraichissement ne pourrait \u00eatre supprim\u00e9e sans changer fondamentalement l'information ou les fonctionnalit\u00e9s du contenu, poursuivre le test, sinon le test est non applicable.<br></li>", 
        "thema": "Navigation", 
        "name": "[NAV]-10"
    }, 
    "10150": {
        "goal": "<ul><li><h5>2.2.1 : R\u00e9glage du d\u00e9lai : (A)</h5><br />Rendre les contenus accessibles quelles que soient les contraintes de temps de consultation ou d'interaction dues \u00e0 des situations de handicap.<br><br>Certaines personnes souffrant\r\nd'incapacit\u00e9s mentales ou visuelles peuvent avoir besoin de plus de temps pour lire un texte. Les limites de temps peuvent rendre impossible la lecture ou la manipulation de l'interface pour ces personne.</li><li><h5>3.2.5 : Changement \u00e0 la demande : (AAA)</h5><br />Permettre aux utilisateurs d'anticiper le r\u00e9sultat de leurs actions lorsqu'ils interagissent avec le contenu.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Du code javascript d\u00e9clenchant une redirection automatique de la page est pr\u00e9sent.", 
        "description": "Absence de code javascript provoquant une redirection automatique de la page ne pouvant pas \u00eatre arr\u00eat\u00e9e.", 
        "solution": "<p> Tout code javascript utilis\u00e9 dans la page. </p><br /><br /><li>Si du code javascript est utilis\u00e9 dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si le code javascript provoque une redirection automatique, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si la redirection automatique ne pourrait \u00eatre supprim\u00e9e sans changer fondamentalement l'information ou les fonctionnalit\u00e9s du contenu, poursuivre le test, sinon le test est non applicable.</li> ", 
        "thema": "Navigation", 
        "name": "[NAV]-11"
    }, 
    "10151": {
        "goal": "<ul><li><h5>4.1.2 : Nom, r\u00f4le et valeur : (A)</h5><br />Permettre aux agents utilisateurs et aux technologies d'assistance de disposer de l'information n\u00e9cessaire sur les changements d'\u00e9tats, de valeurs et de nom intervenant dans l'interface utilisateur. <br><br>Certains contenus ajout\u00e9s dans les pages peuvent en effet int\u00e9grer leur propre interface de navigation. Dans ce cas, certains utilisateurs peuvent se trouver dans l'impossibilit\u00e9 de les utiliser dans leur contexte de navigation si leur interface n'a pas \u00e9t\u00e9 con\u00e7ue dans une technologie susceptible d'\u00eatre accessible</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Le contenu des \u00e9l\u00e9ments programmables n'est pas correctement restitu\u00e9 dans les aides techniques et ne dispose d'aucune alternative accessible.", 
        "description": "Compatibilit\u00e9 des \u00e9l\u00e9ments programmables avec les aides techniques.", 
        "solution": "<p> Tout \u00e9l\u00e9ment :<br> </p><ul> <li> <code>objet</code>, </li> <li> <code>applet</code>, </li> <li> <code>embed</code>. </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ment mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si l'\u00e9l\u00e9ment n'est pas accessible aux aides techniques par l'interm\u00e9diaire d'une <abbr title=\"Application programming interface\" xml:lang=\"en\" lang=\"en\">API</abbr> d'accessibilit\u00e9 ou des fonctionnalit\u00e9s d'accessibilit\u00e9, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Multim\u00e9dia", 
        "name": "[MUL]-16"
    }, 
    "10152": {
        "goal": "<ul><li><h5>3.3.5 : Aide : (AAA)</h5><br />Permettre aux utilisateurs d'\u00e9viter les erreurs de saisie de texte en leur fournissant une aide contextuelle. <br><br>Cela peut notamment \u00eatre utile pour les utilisateurs ayant des troubles moteurs ou d'apprentissage qui peuvent avoir des difficult\u00e9s \u00e0 \u00e9crire </li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Aucun m\u00e9canisme d'aide contextuel ou une page d'aide n'est pr\u00e9sent pour expliquer en d\u00e9tail comment remplir les formulaires.", 
        "description": "Pr\u00e9sence d'une page d'aide ou d'un m\u00e9canisme d'aide contextuelle pour la saisie des formulaires.", 
        "solution": "<p>Tout \u00e9l\u00e9ment :</p>\r\n<ul>\r\n<li><code>input type=\"text\"</code>,</li>\r\n<li><code>textarea.</code></li>\r\n</ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment permet de saisir des donn\u00e9es, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Formulaires", 
        "name": "[FOR]-16"
    }, 
    "10153": {
        "goal": "<ul><li><h5>2.1.1 : Clavier : (A)</h5><br />Rendre les contenus accessibles via un p\u00e9riph\u00e9rique de type clavier. <br><br>Certains utilisateurs ayant un handicap moteur ou visuel n'utiliseront par exemple que le clavier ou un p\u00e9riph\u00e9rique adapt\u00e9 pour naviguer. De plus, il est \u00e0 noter que de nombreux terminaux mobiles ne proposent pas d'interface souris mais uniquement une interface clavier.</li><li><h5>2.1.3 : Clavier (pas d'exception) : (AAA)</h5><br />Rendre les contenus accessibles via un p\u00e9riph\u00e9rique de type clavier.<br><br>Certains utilisateurs ayant un handicap moteur ou visuel n'utiliseront\r\npar exemple que le clavier ou un p\u00e9riph\u00e9rique adapt\u00e9 pour naviguer. De\r\nplus, il est \u00e0 noter que de nombreux terminaux mobiles ne proposent pas\r\nd'interface souris mais uniquement une interface clavier.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Le contenu des \u00e9l\u00e9ments object, applet, embed n'est pas navigable \u00e0 l'aide du clavier.", 
        "description": "Ind\u00e9pendance du p\u00e9riph\u00e9rique d'acc\u00e8s aux \u00e9l\u00e9ments object, embed, et applet.", 
        "solution": "<p> Tout \u00e9l\u00e9ment :<br> </p><ul> <li> <code>object</code>, </li> <li> <code>embed</code>, </li> <li> <code>applet</code>. </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si l'interface de l'\u00e9l\u00e9ment ne peut pas \u00eatre utilis\u00e9e par un p\u00e9riph\u00e9rique de pointage tel que la souris et par au moins une de ces deux techniques :\r\n<ul> <li>raccourci clavier, </li> <li>navigation au clavier au sein de l'interface d'\u00e9l\u00e9ment en \u00e9l\u00e9ment, </li> </ul>\r\npoursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Multim\u00e9dia", 
        "name": "[MUL]-27"
    }, 
    "10154": {
        "goal": "<ul><li><h5>2.1.1 : Clavier : (A)</h5><br />Rendre les contenus accessibles via un p\u00e9riph\u00e9rique de type clavier. <br><br>Certains utilisateurs ayant un handicap moteur ou visuel n'utiliseront par exemple que le clavier ou un p\u00e9riph\u00e9rique adapt\u00e9 pour naviguer. De plus, il est \u00e0 noter que de nombreux terminaux mobiles ne proposent pas d'interface souris mais uniquement une interface clavier.</li><li><h5>2.1.3 : Clavier (pas d'exception) : (AAA)</h5><br />Rendre les contenus accessibles via un p\u00e9riph\u00e9rique de type clavier.<br><br>Certains utilisateurs ayant un handicap moteur ou visuel n'utiliseront\r\npar exemple que le clavier ou un p\u00e9riph\u00e9rique adapt\u00e9 pour naviguer. De\r\nplus, il est \u00e0 noter que de nombreux terminaux mobiles ne proposent pas\r\nd'interface souris mais uniquement une interface clavier.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Du code javascript sp\u00e9cifique \u00e0 l'emploi d'un p\u00e9riph\u00e9rique est utilis\u00e9 sans qu'une alternative permettant d'acc\u00e9der \u00e0 la m\u00eame information par l'utilisation du clavier soit disponible.", 
        "description": "Pr\u00e9sence d'une alternative au code javascript utilisant un gestionnaire d'\u00e9v\u00e9nements sans \u00e9quivalent universel ou une propri\u00e9t\u00e9 propre \u00e0 un p\u00e9riph\u00e9rique.", 
        "solution": "<p> Tout code javascript utilis\u00e9 dans la page. </p><br /><br /><li>Si du code javascript est utilis\u00e9 dans la page, poursuivre le test, sinon le test est non applicable </li>\r\n<li>Si le code javascript utilise un gestionnaire d'\u00e9v\u00e9nements sans \u00e9quivalent universel ou une propri\u00e9t\u00e9 propre \u00e0 un p\u00e9riph\u00e9rique, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si le code javascript est n\u00e9cessaire pour avoir acc\u00e8s \u00e0 l'information, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Scripts", 
        "name": "[SCR]-08"
    }, 
    "10155": {
        "goal": "<ul><li><h5>2.1.1 : Clavier : (A)</h5><br />Rendre les contenus accessibles via un p\u00e9riph\u00e9rique de type clavier. <br><br>Certains utilisateurs ayant un handicap moteur ou visuel n'utiliseront par exemple que le clavier ou un p\u00e9riph\u00e9rique adapt\u00e9 pour naviguer. De plus, il est \u00e0 noter que de nombreux terminaux mobiles ne proposent pas d'interface souris mais uniquement une interface clavier.</li><li><h5>2.1.3 : Clavier (pas d'exception) : (AAA)</h5><br />Rendre les contenus accessibles via un p\u00e9riph\u00e9rique de type clavier.<br><br>Certains utilisateurs ayant un handicap moteur ou visuel n'utiliseront\r\npar exemple que le clavier ou un p\u00e9riph\u00e9rique adapt\u00e9 pour naviguer. De\r\nplus, il est \u00e0 noter que de nombreux terminaux mobiles ne proposent pas\r\nd'interface souris mais uniquement une interface clavier.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Des \u00e9l\u00e9ments object, applet ou embed utilisant un gestionnaire d'\u00e9v\u00e9nements sans \u00e9quivalent universel  sont utilis\u00e9s sans qu'une alternative permettant d'acc\u00e9der \u00e0 la m\u00eame information par l'utilisation du clavier soit disponible.", 
        "description": "Pr\u00e9sence d'une alternative aux \u00e9l\u00e9ments object, applet et embed d\u00e9pendant d'un p\u00e9riph\u00e9rique.", 
        "solution": "<p> Tout \u00e9l\u00e9ment :<br> </p><ul> <li> <code>object</code>, </li> <li> <code>embed</code>, </li> <li> <code>applet</code>. </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n\r\n<li>Si l'\u00e9l\u00e9ment est n\u00e9cessaire pour avoir acc\u00e8s \u00e0 l'information, poursuivre le test, sinon le test est non applicable. </li><li>Si l'information mise \u00e0 disposition par l'\u00e9l\u00e9ment ne peut pas \u00eatre obtenue \u00e0 l'aide d'un p\u00e9riph\u00e9rique de pointage, tel que la souris, et par un au moins une des solutions suivantes :<ul><li>raccourci clavier,</li><li>navigation au clavier au sein de l'interface d'\u00e9l\u00e9ment en \u00e9l\u00e9ment</li></ul>, poursuivre le\r\ntest, sinon le test est non applicable.</li>", 
        "thema": "Multim\u00e9dia", 
        "name": "[MUL]-28"
    }, 
    "10156": {
        "goal": "<ul><li><h5>2.4.3 : Parcours du focus : (A)</h5><br />Rendre les contenus accessibles au clavier dans un ordre coh\u00e9rent avec l'information d\u00e9livr\u00e9e.<br><br>Pour les utilisateurs de synth\u00e8ses vocales ou qui naviguent de lien en lien au clavier, la navigation dans la page se fait par d\u00e9faut de mani\u00e8re lin\u00e9aire, en fonction de l'ordre du code source de la page et ind\u00e9pendamment de son affichage. Aussi, proposer un ordre logique de parcours au clavier permet une utilisation et une compr\u00e9hension plus ais\u00e9es des pages. C'est \u00e9galement le cas pour les utilisateurs ayant une limitation motrice qui utilisent le clavier pour se d\u00e9placer au sein d'une page, les personnes ayant des difficult\u00e9s de lecture et qui se d\u00e9placent au clavier et les personnes ayant besoin d'agrandir le texte \u00e0 l'\u00e9cran.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "L'ordre de navigation au clavier est illogique.", 
        "description": "Navigation au clavier dans un ordre logique par rapport au contenu.", 
        "solution": "<p> Tout \u00e9l\u00e9ment pouvant recevoir le focus clavier :<br> </p><ul> <li> <code>a</code> avec un attribut <code>href</code>, </li> <li> <code>area</code> , </li> <li> <code>button</code>, </li> <li> <code>input</code>, </li> <li> <code>object</code>, </li> <li> <code>embed</code>, </li> <li> <code>select</code>, </li> <li> <code>textarea</code>, </li> <li>\u00e9l\u00e9ment avec attribut <code>tabindex sp\u00e9cifi\u00e9</code>. </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Navigation", 
        "name": "[NAV]-24"
    }, 
    "10157": {
        "goal": "<ul><li><h5>2.1.1 : Clavier : (A)</h5><br />Rendre les contenus accessibles via un p\u00e9riph\u00e9rique de type clavier. <br><br>Certains utilisateurs ayant un handicap moteur ou visuel n'utiliseront par exemple que le clavier ou un p\u00e9riph\u00e9rique adapt\u00e9 pour naviguer. De plus, il est \u00e0 noter que de nombreux terminaux mobiles ne proposent pas d'interface souris mais uniquement une interface clavier.</li><li><h5>2.4.7 : Visibilit\u00e9 du focus : (AA)</h5><br />Permettre aux utilisateurs recourant \u00e0 un acc\u00e8s clavier d'identifier l'\u00e9l\u00e9ment actif avec lequel ils interagissent.<br><br>Certains utilisateurs sont susceptible d'utiliser le clavier pour naviguer dans les pages, notamment les personnes ayant un handicap moteur, la visibilit\u00e9 du focus leur permet de rep\u00e9rer facilement leur position dans le parcours de la page</li><li><h5>3.2.1 : Au focus : (A)</h5><br />Permettre aux utilisateurs d'anticiper le r\u00e9sultat de leurs actions lorsqu'ils interagissent avec le contenu notamment lorsqu'ils naviguent au clavier au travers de l'interface</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Du code javascript est utilis\u00e9 pour supprimer le focus lorsqu'un \u00e9l\u00e9ment le re\u00e7oit.", 
        "description": "Absence de suppression du focus clavier \u00e0 l'aide de code javascript.", 
        "solution": "<p> Tout code javascript utilis\u00e9 dans la page. </p><br /><br /><li>Si du code javascript est utilis\u00e9 dans la page, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Scripts", 
        "name": "[SCR]-09"
    }, 
    "10158": {
        "goal": "<ul><li><h5>3.3.6 : Pr\u00e9vention des erreurs (toutes) : (AAA)</h5><br />Permettre aux utilisateurs d'\u00eatre alert\u00e9s en cas d'erreurs de saisie,\r\nd'identifier et de corriger celle-ci pour tout type de saisies.<br><br>Certains utilisateurs ayant un handicap sont susceptible de faire plus\r\nd'erreurs de saisie que les utilisateurs n'ayant aucun handicap. Il est\r\ndonc important de faciliter aux utilisateurs leur correction.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Aucun m\u00e9canisme n'est pr\u00e9sent pour v\u00e9rifier, modifier ou confirmer tous types de donn\u00e9es saisie par l'utilisateur.", 
        "description": "Pr\u00e9sence de m\u00e9canismes permettant de v\u00e9rifier, modifier ou confirmer tous types de donn\u00e9es saisie par l'utilisateur.", 
        "solution": "<p>Tout \u00e9l\u00e9ment <code>form</code>.</p><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment permet de saisir des donn\u00e9es, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Formulaires", 
        "name": "[FOR]-15"
    }, 
    "10159": {
        "goal": "<ul><li><h5>3.3.4 : Pr\u00e9vention des erreurs (juridiques, financi\u00e8res, de donn\u00e9es) : (AA)</h5><br />Permettre aux utilisateurs d'\u00eatre alert\u00e9s en cas d'erreurs de saisie, d'identifier et de corriger celle-ci pour les saisies \u00e0 caract\u00e8res juridiques, financi\u00e8res, de donn\u00e9es.<br><br>Certains utilisateurs ayant un handicap sont susceptible de faire plus\r\nd'erreurs de saisie que les utilisateurs n'ayant aucun handicap. Il est\r\ndonc important d'\u00e9viter aux utilisateurs des erreurs de saisie.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Aucun m\u00e9canisme n'est pr\u00e9sent pour v\u00e9rifier, modifier ou confirmer les saisies de donn\u00e9es \u00e0 caract\u00e8re juridique, financier ou personnel.", 
        "description": "Pr\u00e9sence de m\u00e9canismes permettant de v\u00e9rifier, modifier ou confirmer les donn\u00e9es \u00e0 caract\u00e8re juridique, financier, personnel.", 
        "solution": "<p>Tout \u00e9l\u00e9ment <code>form</code>.</p><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment permet de saisir des donn\u00e9es \u00e0 caract\u00e8re juridique,financier ou personnel, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Formulaires", 
        "name": "[FOR]-14"
    }, 
    "10160": {
        "goal": "<ul><li><h5>2.4.4 : Fonction du lien (selon le contexte) : (A)</h5><br />Permettre aux utilisateurs d'identifier le r\u00f4le, la destination ou l'effet des liens et d'en anticiper le r\u00e9sultat.<br><br>Avoir des liens compr\u00e9hensibles permet une lecture et une manipulation plus ais\u00e9e par les utilisateurs de technologies d'assistance, notamment lors de l'utilisation d'une liste de liens extraite de la page pour naviguer. Cela permet \u00e9galement une meilleure m\u00e9morisation et une plus grande lisibilit\u00e9 pour tous.</li><li><h5>3.2.5 : Changement \u00e0 la demande : (AAA)</h5><br />Permettre aux utilisateurs d'anticiper le r\u00e9sultat de leurs actions lorsqu'ils interagissent avec le contenu.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Des liens ouvrent une nouvelle fen\u00eatre via l'attribut target blank sans que cela soit signal\u00e9 \u00e0 l'utilisateur au pr\u00e9alable.", 
        "description": "Pr\u00e9sence d'un avertissement pr\u00e9alable \u00e0 l'ouverture de nouvelle fen\u00eatre lors de l'utilisation de l'attribut target sur les liens textuels et les formulaires.", 
        "solution": "<p> Tout \u00e9l\u00e9ment :<br> </p><ul> <li> <code>a</code> </li> <li> <code>form</code> </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment poss\u00e8de un attribut target, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si le contenu de l'attribut target est diff\u00e9rent de _top, _parent, _self, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment n'a pas pour unique enfant un \u00e9l\u00e9ment img, poursuivre le test sinon le test est non applicable.</li>\r\n", 
        "thema": "Navigation", 
        "name": "[NAV]-02"
    }, 
    "10161": {
        "goal": "<ul><li><h5>2.4.4 : Fonction du lien (selon le contexte) : (A)</h5><br />Permettre aux utilisateurs d'identifier le r\u00f4le, la destination ou l'effet des liens et d'en anticiper le r\u00e9sultat.<br><br>Avoir des liens compr\u00e9hensibles permet une lecture et une manipulation plus ais\u00e9e par les utilisateurs de technologies d'assistance, notamment lors de l'utilisation d'une liste de liens extraite de la page pour naviguer. Cela permet \u00e9galement une meilleure m\u00e9morisation et une plus grande lisibilit\u00e9 pour tous.</li><li><h5>3.2.5 : Changement \u00e0 la demande : (AAA)</h5><br />Permettre aux utilisateurs d'anticiper le r\u00e9sultat de leurs actions lorsqu'ils interagissent avec le contenu.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Des images liens ou des zones cliquables ouvrent une nouvelle fen\u00eatre via l'attribut target blank sans que cela soit signal\u00e9 \u00e0 l'utilisateur au pr\u00e9alable.", 
        "description": "Pr\u00e9sence d'un avertissement pr\u00e9alable \u00e0 l'ouverture de nouvelle fen\u00eatre lors de l'utilisation de l'attribut target sur les images liens et les zones cliquables.", 
        "solution": "<p> Tout \u00e9l\u00e9ment :<br> </p><ul> <li> <code>a</code> contenant uniquement un \u00e9l\u00e9ment <code>img</code> </li> <li> <code>area</code> </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment poss\u00e8de un attribut target, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si le contenu de l'attribut target est diff\u00e9rent de _top, _parent, _self, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment a un attribut alt, poursuivre le test sinon le test est non applicable.</li>", 
        "thema": "Navigation", 
        "name": "[NAV]-03"
    }, 
    "10162": {
        "goal": "<ul><li><h5>2.4.4 : Fonction du lien (selon le contexte) : (A)</h5><br />Permettre aux utilisateurs d'identifier le r\u00f4le, la destination ou l'effet des liens et d'en anticiper le r\u00e9sultat.<br><br>Avoir des liens compr\u00e9hensibles permet une lecture et une manipulation plus ais\u00e9e par les utilisateurs de technologies d'assistance, notamment lors de l'utilisation d'une liste de liens extraite de la page pour naviguer. Cela permet \u00e9galement une meilleure m\u00e9morisation et une plus grande lisibilit\u00e9 pour tous.</li><li><h5>3.2.5 : Changement \u00e0 la demande : (AAA)</h5><br />Permettre aux utilisateurs d'anticiper le r\u00e9sultat de leurs actions lorsqu'ils interagissent avec le contenu.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Des liens ouvrants dans une nouvelle fen\u00eatre via javascript sont pr\u00e9sent sans que cela soit signal\u00e9 \u00e0 l'utilisateur.", 
        "description": "Pr\u00e9sence d'un avertissement pr\u00e9alable \u00e0 l'ouverture de nouvelle fen\u00eatre lors de l'utilisation de code javascript.", 
        "solution": "<p> Tout code javascript utilis\u00e9 dans la page. </p><br /><br /><li>Si du code javascript est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si le code javascript d\u00e9clenche l'ouverture dans une nouvelle fen\u00eatre, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si le contenu de l'\u00e9l\u00e9ment sur lequel est appliqu\u00e9 le code javascript ne signale pas l'ouverture dans une nouvelle fen\u00eatre, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Navigation", 
        "name": "[NAV]-04"
    }, 
    "10163": {
        "goal": "<ul><li><h5>3.2.5 : Changement \u00e0 la demande : (AAA)</h5><br />Permettre aux utilisateurs d'anticiper le r\u00e9sultat de leurs actions lorsqu'ils interagissent avec le contenu.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Des \u00e9l\u00e9ments ouvrent une nouvelle fen\u00eatre sans que cela soit signal\u00e9 \u00e0 l'utilisateur au pr\u00e9alable.", 
        "description": "Pr\u00e9sence d'un avertissement pr\u00e9alable \u00e0 l'ouverture de nouvelle fen\u00eatre lors de l'utilisation d'\u00e9l\u00e9ments object ou embed.", 
        "solution": "<p> Tout \u00e9l\u00e9ment :<br></br> </p><ul> <li> <code>object</code>, </li> <li> <code>embed</code>. </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si l'utilisation de l'\u00e9l\u00e9ment d\u00e9clenche l'ouverture dans une nouvelle fen\u00eatre, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Navigation", 
        "name": "[NAV]-25"
    }, 
    "10164": {
        "goal": "<ul><li><h5>3.2.1 : Au focus : (A)</h5><br />Permettre aux utilisateurs d'anticiper le r\u00e9sultat de leurs actions lorsqu'ils interagissent avec le contenu notamment lorsqu'ils naviguent au clavier au travers de l'interface</li><li><h5>3.2.5 : Changement \u00e0 la demande : (AAA)</h5><br />Permettre aux utilisateurs d'anticiper le r\u00e9sultat de leurs actions lorsqu'ils interagissent avec le contenu.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Des nouvelles fen\u00eatres sont ouvertes au chargement de la page.", 
        "description": "Absence d'ouverture de nouvelles fen\u00eatres sans action de l'utilisateur.", 
        "solution": "<p> Tout code javascript utilis\u00e9 dans la page. </p><br /><br /><li>Si du code javascript est utilis\u00e9 dans la page, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Navigation", 
        "name": "[NAV]-05"
    }, 
    "10165": {
        "goal": "<ul><li><h5>3.3.2 : \u00c9tiquettes ou instructions : (A)</h5><br />Permettre aux utilisateurs d'\u00e9viter les erreurs de saisie. <br><br>Certains utilisateurs ayant un handicap sont susceptible de faire plus d'erreurs de saisie que les utilisateurs n'ayant aucun handicap. Il est donc important d'\u00e9viter aux utilisateurs des erreurs de saisie. </li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "L'emplacement de certaines \u00e9tiquettes de champs de formulaires pr\u00eate \u00e0 confusion : des  utilisateurs peuvent interpr\u00e9ter le formulaire de mani\u00e8re impropre.", 
        "description": "Positionnement correct des \u00e9tiquettes par rapport aux champs dans les formulaires.", 
        "solution": "<p> Tout \u00e9l\u00e9ment de formulaire :<br> </p><ul> <li> <code>input type=\"text\"</code>, </li> <li> <code>input type=\"password\"</code>, </li>  <li> <code>input type=\"checkbox\"</code>, </li> <li> <code>input type=\"file\"</code>, </li> <li> <code>input type=\"radio\"</code>, </li> <li> <code>select</code>, </li> <li> <code>textarea</code>, </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si un segment de texte sert d'\u00e9tiquette \u00e0 l'\u00e9l\u00e9ment du champ d'application, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Formulaires", 
        "name": "[FOR]-03"
    }, 
    "10166": {
        "goal": "<ul><li><h5>3.3.1 : Identification des erreurs : (A)</h5><br />Permettre aux utilisateurs d'\u00eatre alert\u00e9s en cas d'erreurs de saisie et d'identifier celles-ci. Le message d'erreur doit \u00eatre aussi pr\u00e9cis que possible. <br><br>En effet, dans certain cas r\u00e9afficher le formulaire en indiquant uniquement \"erreur de saisie\" ne suffira pas notamment lorsque les champs en question n\u00e9cessitent un format ou un type de saisie sp\u00e9cifique.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "En cas d'erreur de saisie il n'est pas indiqu\u00e9 \u00e0 l'utilisateur ou se trouve pr\u00e9cis\u00e9ment ses erreurs.", 
        "description": "Possibilit\u00e9 d'identifier les erreurs de saisie.", 
        "solution": "<p>Tout \u00e9l\u00e9ment <code>form</code>.</p><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment est soumis \u00e0  un contr\u00f4le de saisie avant d'\u00eatre trait\u00e9, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Formulaires", 
        "name": "[FOR]-01"
    }, 
    "10167": {
        "goal": "<ul><li><h5>3.3.2 : \u00c9tiquettes ou instructions : (A)</h5><br />Permettre aux utilisateurs d'\u00e9viter les erreurs de saisie. <br><br>Certains utilisateurs ayant un handicap sont susceptible de faire plus d'erreurs de saisie que les utilisateurs n'ayant aucun handicap. Il est donc important d'\u00e9viter aux utilisateurs des erreurs de saisie. </li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Aucun information pr\u00e9alable \u00e0 la saisie du formulaire n'est pr\u00e9sente pour indiquer le caract\u00e8re obligatoire des champs ou leur type/format de saisie attendue.", 
        "description": "Pr\u00e9sence d'information pr\u00e9alable sur le caract\u00e8re obligatoire de certains champs de saisie et du type/format de saisie attendue si n\u00e9cessaire.", 
        "solution": "<p>Tout \u00e9l\u00e9ment :</p>\r\n<ul>\r\n<li><code>input type=\"text\"</code>,</li>\r\n<li><code>input type=\"checkbox\"</code>,</li>\r\n<li><code>input type=\"file\"</code>,</li>\r\n<li><code>input type=\"radio\"</code>,</li>\r\n<li><code>input type=\"password\"</code>,</li>\r\n<li><code>select</code>,</li>\r\n<li><code>textarea</code>.</li>\r\n</ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment est soumis \u00e0  un contr\u00f4le de saisie avant d'\u00eatre trait\u00e9, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Formulaires", 
        "name": "[FOR]-02"
    }, 
    "10168": {
        "goal": "<ul><li><h5>1.4.1 : Utilisation de la couleur : (A)</h5><br />Rendre l'information v\u00e9hicul\u00e9e par la couleur perceptible pour tous les utilisateurs en situation de handicap visuel. Notamment, permettre l'acc\u00e8s \u00e0 l'information aux personnes aveugles,\r\nmal voyantes (d\u00e9ficiences de perception des couleurs, d\u00e9g\u00e9n\u00e9rescence maculaire li\u00e9e \u00e0 l'age,...) , utilisant des feuilles de styles personnalis\u00e9es ou ayant un \u00e9cran monochrome/avec un nombre de couleurs limit\u00e9.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Les liens ne sont pas distinguable du reste du texte.", 
        "description": "Maintien de la distinction visuelle des liens.", 
        "solution": "<p> Tout s\u00e9lecteur <abbr title=\"Cascading Style Sheet\" xml:lang=\"en\" lang=\"en\">CSS</abbr> ciblant l'\u00e9l\u00e9ment <code>a</code> et tout attribut :<br> </p><ul> <li> <code>link</code>, </li> <li> <code>alink</code>, </li> <li> <code>vlink</code>, </li> </ul><p> utilis\u00e9 sur l'\u00e9l\u00e9ment <code>body</code>. </p><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment est utilis\u00e9 pour styler les liens, poursuivre le test, sinon le test est non applicable.</li><li>Si l'\u00e9l\u00e9ment ne permet de distinguer les liens uniquement par la couleur, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Pr\u00e9sentation", 
        "name": "[PR\u00e9]-10"
    }, 
    "10169": {
        "goal": "<ul><li><h5>2.4.8 : Localisation : (AAA)</h5><br />Permettre \u00e0 l'utilisateur de s'orienter dans un site et d'y trouver l'information.<br><br>Cela permet notamment de faciliter la navigation aux utilisateurs ayant des troubles de la concentration ou de l'attention qui pourraient \u00eatre perdus lors de la navigation dans une s\u00e9rie de pages. De plus, cela peut \u00e9galement \u00eatre utile lorsque l'on arrive sur une page depuis les r\u00e9sultats d'un moteur de recherche ext\u00e9rieur au site.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "La position courante dans la navigation n'est pas indiqu\u00e9e visuellement.", 
        "description": "Pr\u00e9sence d'une indication de la position courante dans la navigation.", 
        "solution": "<p>Toute barre de navigation.</p> <br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Navigation", 
        "name": "[NAV]-36"
    }, 
    "10170": {
        "goal": "<ul><li><h5>3.2.4 : Identification coh\u00e9rente : (AA)</h5><br />Permettre aux utilisateurs de localiser ais\u00e9ment et d'atteindre les contenus qui sont disponibles de mani\u00e8re r\u00e9p\u00e9t\u00e9e dans une s\u00e9rie de page.<br><br>Cela permettra notamment aux utilisateurs habitu\u00e9s \u00e0 un type de comportement de ne pas \u00eatre perturber par des changements dans celui ci</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Des images ou des \u00e9tiquettes de formulaires identiques sont utilis\u00e9es dans des pages diff\u00e9rentes en ayant les m\u00eames fonctions ou le m\u00eame r\u00f4le alors qu'elles pr\u00e9sentent une alternative textuelles ou un contenu diff\u00e9rent.", 
        "description": "Coh\u00e9rence dans l'identification des alternatives textuelles et des \u00e9tiquettes de formulaires.", 
        "solution": "<p>Toute barre de navigation.</p> \r\n\r\n<p>Tout \u00e9l\u00e9ment :</p>\r\n<ul>\r\n<li><code>applet</code>,</li>\r\n<li><code>object</code>,</li>\r\n<li><code>img</code>,</li>\r\n<li><code>input type=\"image\"</code>,</li>\r\n<li><code>input type=\"text\"</code>,</li>\r\n<li><code>input type=\"checkbox\"</code>,</li>\r\n<li><code>input type=\"file\"</code>,</li>\r\n<li><code>input type=\"radio\"</code>,</li>\r\n<li><code>input type=\"password\"</code>,</li>\r\n<li><code>select</code>,</li>\r\n<li><code>textarea</code>,</li>\r\n</ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment est pr\u00e9sent sur plusieurs pages ou plusieurs fois dans une page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si le r\u00f4le de l'\u00e9l\u00e9ment est identique d'une page \u00e0 l'autre ou plusieurs fois dans la m\u00eame page, poursuivre le test, sinon le test est non applicable.</li> ", 
        "thema": "Images", 
        "name": "[IMA]-11"
    }, 
    "10171": {
        "goal": "<ul><li><h5>4.1.1 : Analyse syntaxique : (A)</h5><br />Permettre aux agents utilisateurs et aux technologies d'assistance d'interpr\u00e9ter correctement les contenus balis\u00e9s. <br><br>En effet, la pr\u00e9sence d'erreurs dans l'utilisation d'une grammaire formelle d\u00e9finie par le W3C peut perturber le bon fonctionnement des technologies d'assistance.</li><li><h5>4.1.2 : Nom, r\u00f4le et valeur : (A)</h5><br />Permettre aux agents utilisateurs et aux technologies d'assistance de disposer de l'information n\u00e9cessaire sur les changements d'\u00e9tats, de valeurs et de nom intervenant dans l'interface utilisateur. <br><br>Certains contenus ajout\u00e9s dans les pages peuvent en effet int\u00e9grer leur propre interface de navigation. Dans ce cas, certains utilisateurs peuvent se trouver dans l'impossibilit\u00e9 de les utiliser dans leur contexte de navigation si leur interface n'a pas \u00e9t\u00e9 con\u00e7ue dans une technologie susceptible d'\u00eatre accessible</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Des \u00e9l\u00e9ments listing, plaintext, et xmp sont pr\u00e9sent.", 
        "description": "Absence de composants obsol\u00e8tes par rapport \u00e0 la version des sp\u00e9cifications W3C utilis\u00e9e.", 
        "solution": "<p> Tout composant des sp\u00e9cifications du <abbr title=\"World Wide Web Consortium\" xml:lang=\"en\" lang=\"en\">W3C</abbr>. </p><br /><br />", 
        "thema": "Standards", 
        "name": "[STA]-05"
    }, 
    "10172": {
        "goal": "<ul><li><h5>2.3.2 : Trois flashs : (AAA)</h5><br />Rendre le contenu accessible aux utilisateurs en situation de handicap\r\nles exposant \u00e0 un risque en cas de flash. <br><br>A certaines fr\u00e9quences, les\r\nchangements brusques de luminosit\u00e9 des couleurs \u00e0 l'\u00e9cran, comme les\r\neffets stroboscopiques (flash), peuvent provoquer chez certains\r\nutilisateurs des crises d'\u00e9pilepsie</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Des \u00e9l\u00e9ments provoquent des changements brusques de luminosit\u00e9 ou des effets de flash rouge \u00e0 fr\u00e9quence \u00e9lev\u00e9e.", 
        "description": "Absence totale de changements brusques de luminosit\u00e9 ou des effets flash rouge \u00e0 fr\u00e9quence \u00e9lev\u00e9e.", 
        "solution": "<p>Tout code javascript utilis\u00e9 dans la page, tout \u00e9l\u00e9ment mis en forme par des styles utilisant au moins une des propri\u00e9t\u00e9s suivantes :</p>\r\n<ul>\r\n<li><code>background</code>,</li>\r\n<li><code>background-image</code>,</li>\r\n<li><code>content</code>.</li>\r\n</ul>\r\n<p>Tout \u00e9l\u00e9ment :</p>\r\n<ul>\r\n<li><code>applet</code>,</li>\r\n<li><code>object</code>,</li>\r\n<li><code>embed</code>,</li>\r\n<li><code>img</code> au format gif , apng ou mng.</li>\r\n</ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment provoque des changements brusques de luminosit\u00e9 ou des effets de flash rouge, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Multim\u00e9dia", 
        "name": "[MUL]-17"
    }, 
    "10173": {
        "goal": "<ul><li><h5>2.4.4 : Fonction du lien (selon le contexte) : (A)</h5><br />Permettre aux utilisateurs d'identifier le r\u00f4le, la destination ou l'effet des liens et d'en anticiper le r\u00e9sultat.<br><br>Avoir des liens compr\u00e9hensibles permet une lecture et une manipulation plus ais\u00e9e par les utilisateurs de technologies d'assistance, notamment lors de l'utilisation d'une liste de liens extraite de la page pour naviguer. Cela permet \u00e9galement une meilleure m\u00e9morisation et une plus grande lisibilit\u00e9 pour tous.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Le format des documents en t\u00e9l\u00e9chargements n'est pas indiqu\u00e9 dans le libell\u00e9 du lien (ou via son attribut TITLE) ou dans son contexte. Les utilisateurs consultant les liens hors contexte (liste de liens extraite par un lecteur d'\u00e9cran par exemple) n'auront pas acc\u00e8s \u00e0 ces informations.", 
        "description": "Pr\u00e9sence des informations de format pour les documents en t\u00e9l\u00e9chargement.", 
        "solution": "<p> Tout \u00e9l\u00e9ment :<br> </p><ul> <li> <code>a</code>, </li> <li> <code>area</code>, </li> </ul><p> ou tout code javascript utilis\u00e9 dans la page. </p><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent ou utilis\u00e9 dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment provoque le t\u00e9l\u00e9chargement d'un document, poursuivre le test, sinon le test est non applicable.</li>\r\n", 
        "thema": "Navigation", 
        "name": "[NAV]-26"
    }, 
    "10174": {
        "goal": "<ul><li><h5>1.4.2 : Contr\u00f4le du son : (A)</h5><br />Permettre aux utilisateurs technologies d'assistance de contr\u00f4ler les contenus sonores susceptibles d'interf\u00e9rer avec le rendu par leur propre outil. D\u00e9clencher automatiquement la lecture d'un son peut rendre particuli\u00e8rement difficile la consultation d'une page pour les utilisateurs de lecteur d'\u00e9cran ou pour les personnes ayant du mal \u00e0 se concentrer lors de la lecture d'un texte</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Des \u00e9l\u00e9ments d\u00e9clenchant la lecture de son ne pouvant pas \u00eatre arr\u00eat\u00e9e sont pr\u00e9sent dans la page.", 
        "description": "Absence d'\u00e9l\u00e9ments d\u00e9clenchant la lecture de son ne pouvant pas \u00eatre arr\u00eat\u00e9e.", 
        "solution": "<p> Tout \u00e9l\u00e9ment : </p><ul> <li> <code>object</code>, </li> <li> <code>embed</code>, </li> <li> <code>applet</code>, </li> <li>Tout code javascript utilis\u00e9 dans la page. </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si l'\u00e9l\u00e9ment d\u00e9clenche la lecture de son, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Multim\u00e9dia", 
        "name": "[MUL]-29"
    }, 
    "10175": {
        "goal": "<ul><li><h5>1.4.2 : Contr\u00f4le du son : (A)</h5><br />Permettre aux utilisateurs technologies d'assistance de contr\u00f4ler les contenus sonores susceptibles d'interf\u00e9rer avec le rendu par leur propre outil. D\u00e9clencher automatiquement la lecture d'un son peut rendre particuli\u00e8rement difficile la consultation d'une page pour les utilisateurs de lecteur d'\u00e9cran ou pour les personnes ayant du mal \u00e0 se concentrer lors de la lecture d'un texte</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Un \u00e9l\u00e9ment bgsound est pr\u00e9sent.", 
        "description": "Absence d'\u00e9l\u00e9ment bgsound.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <code>bgsound</code>. </p><br /><br />", 
        "thema": "Multim\u00e9dia", 
        "name": "[MUL]-30"
    }, 
    "10176": {
        "goal": "<ul><li><h5>2.4.4 : Fonction du lien (selon le contexte) : (A)</h5><br />Permettre aux utilisateurs d'identifier le r\u00f4le, la destination ou l'effet des liens et d'en anticiper le r\u00e9sultat.<br><br>Avoir des liens compr\u00e9hensibles permet une lecture et une manipulation plus ais\u00e9e par les utilisateurs de technologies d'assistance, notamment lors de l'utilisation d'une liste de liens extraite de la page pour naviguer. Cela permet \u00e9galement une meilleure m\u00e9morisation et une plus grande lisibilit\u00e9 pour tous.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Le poids des documents en t\u00e9l\u00e9chargements n'est pas syst\u00e9matiquement indiqu\u00e9 dans le libell\u00e9 du lien (ou via son attribut TITLE ou son contexte). Les utilisateurs consultant les liens hors contexte (liste de liens extraite par un lecteur d'\u00e9cran par exemple) n'auront pas acc\u00e8s \u00e0 ces informations.", 
        "description": "Pr\u00e9sence des informations de poids pour les documents en t\u00e9l\u00e9chargement.", 
        "solution": "<p> Tout \u00e9l\u00e9ment :<br> </p><ul> <li> <code>a</code>, </li> <li> <code>area</code>. </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment provoque le t\u00e9l\u00e9chargement d'un document, poursuivre le test, sinon le test est non applicable.</li>\r\n<li><br></li>", 
        "thema": "Navigation", 
        "name": "[NAV]-27"
    }, 
    "10177": {
        "goal": "<ul><li><h5>2.4.4 : Fonction du lien (selon le contexte) : (A)</h5><br />Permettre aux utilisateurs d'identifier le r\u00f4le, la destination ou l'effet des liens et d'en anticiper le r\u00e9sultat.<br><br>Avoir des liens compr\u00e9hensibles permet une lecture et une manipulation plus ais\u00e9e par les utilisateurs de technologies d'assistance, notamment lors de l'utilisation d'une liste de liens extraite de la page pour naviguer. Cela permet \u00e9galement une meilleure m\u00e9morisation et une plus grande lisibilit\u00e9 pour tous.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "La langue des documents en t\u00e9l\u00e9chargements n'est pas syst\u00e9matiquement indiqu\u00e9 dans le libell\u00e9 du lien (ou via son attribut TITLE ou son contexte). Les utilisateurs consultant les liens hors contexte (liste de liens extraite par un lecteur d'\u00e9cran par exemple) n'auront pas acc\u00e8s \u00e0 ces informations.", 
        "description": "Pr\u00e9sence des informations de langue pour les documents en t\u00e9l\u00e9chargement.", 
        "solution": "<p> Tout \u00e9l\u00e9ment :<br> </p><ul> <li> <code>a</code>, </li> <li> <code>area</code>, </li> </ul><p> ou tout code javascript utilis\u00e9 dans la page. </p><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent ou utilis\u00e9 dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment provoque le t\u00e9l\u00e9chargement d'un document, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si la langue du document est diff\u00e9rente de la langue de l'intitul\u00e9 de l'\u00e9l\u00e9ment d\u00e9clenchant le t\u00e9l\u00e9chargement, poursuivre le test, sinon le test est non applicable.</li>\r\n", 
        "thema": "Navigation", 
        "name": "[NAV]-28"
    }, 
    "10178": {
        "goal": "<ul><li><h5>2.2.5 : Nouvelle authentification : (AAA)</h5><br />Rendre les contenus accessibles quelles que soient les contraintes de temps de consultation ou d'interaction dues \u00e0 des situations de handicap.<br><br>Certaines personnes ayant un handicap moteur peuvent avoir besoin de plus de temps pour manipuler une interface ou remplir un formulaire, cela peut rendre impossible l'utilisation ou la saisie de contenu si une limite temporelle leur est impos\u00e9e</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Lors de l'expiration de sessions authentifi\u00e9es des donn\u00e9es sont perdues.", 
        "description": "Absence de perte d'informations lors de l'expiration des sessions authentifi\u00e9es.", 
        "solution": "<p>Toutes sessions authentifi\u00e9es c\u00f4t\u00e9 serveur.</p> <br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est utilis\u00e9 sur le site, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si une m\u00e9canisme pr\u00e9voit l'expiration ou la fermeture non sollicit\u00e9 de la session, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Scripts", 
        "name": "[SCR]-11"
    }, 
    "10179": {
        "goal": "<ul><li><h5>1.1.1 : Contenu non textuel : (A)</h5><br />Rendre le contenu non textuel accessible sous forme d'une alternative textuelle exploitable quel que soit le mode de perception de l'utilisateur (visuel, auditif, tactile).<br><br>Le contenu des \u00e9l\u00e9ments non textuels ne sera pas perceptible pour diff\u00e9rentes cat\u00e9gories d'utilisateurs tels que :<br><br><ul><li>Les personnes handicap\u00e9es visuelles acc\u00e9dant au site via la synth\u00e8se vocale d'un lecteur d'\u00e9cran,</li><li>Les utilisateurs ayant d\u00e9sactiv\u00e9 l'affichage des \u00e9l\u00e9ments graphiques ou multim\u00e9dias, pour r\u00e9duire notamment les temps de t\u00e9l\u00e9chargement des pages en bas d\u00e9bit.<br></li></ul><br>La pr\u00e9sence d'alternatives textuelles aux contenus non textuels permet \u00e9galement \u00e0 des robots d'indexation d'en exploiter l'information, ou \u00e0 des traducteurs automatiques d'en traduire le sens.</li><li><h5>1.3.1 : Information et relations : (A)</h5><br />Rendre l'information ind\u00e9pendante de sa mise en forme visuelle ou sonore.<br><br>Ce crit\u00e8re de succ\u00e8s est b\u00e9n\u00e9fique \u00e0 des personnes ayant diff\u00e9rents types de handicaps. Les personnes aveugles ou sourdes et aveugles utilisant un lecteur d'\u00e9cran ou un terminal braille auront acc\u00e8s \u00e0 l'information disponible par la couleur lorsque celle-ci est \u00e9galement mise \u00e0 disposition de fa\u00e7on textuelle.<br>Il vise notamment \u00e0 permettre \u00e0 ce que les agents utilisateurs restituent une information en fonction des besoins de l'utilisateur et cela ind\u00e9pendamment de sa mise en forme visuelle ou sonore. </li><li><h5>1.3.2 : Ordre s\u00e9quentiel logique : (A)</h5><br />Rendre l'ordre de restitution de l'information ind\u00e9pendant de sa mise en forme visuelle ou sonore lorsqu'il est lui-m\u00eame porteur de sens. <br><br>Les logiciels de lecture d'\u00e9cran, les logiciels automatiques de lecture et certains navigateurs textes lisent ou affichent les informations de mani\u00e8re lin\u00e9aire (dans le cas des tableaux cellule apr\u00e8s cellule, ligne apr\u00e8s ligne). C'est pourquoi l'information doit toujours \u00eatre logiquement ordonn\u00e9e, m\u00eame en mode de lecture lin\u00e9aire, afin que le contenu reste compr\u00e9hensible</li><li><h5>2.4.1 : Contourner des blocs : (A)</h5><br />Rendre les contenus navigables pour les utilisateurs qui y ont un acc\u00e8s s\u00e9quentiel lin\u00e9aire.<br><br>Les personnes utilisant un lecteur d'\u00e9cran, un agrandisseur, les\r\npersonnes qui ont une limitation cognitive ou celles qui ne se servent que du\r\nclavier pour cause de limitation motrice lisent la page de mani\u00e8re lin\u00e9aire. De ce fait, des liens internes \u00e0 la page ou les titres de hi\u00e9rarchie leur permettent soit d'acc\u00e9der directement \u00e0 l'information qui les int\u00e9resse, soit de sauter d'autres informations qui ne les int\u00e9ressent pas et de gagner ainsi un temps pr\u00e9cieux.</li><li><h5>2.4.3 : Parcours du focus : (A)</h5><br />Rendre les contenus accessibles au clavier dans un ordre coh\u00e9rent avec l'information d\u00e9livr\u00e9e.<br><br>Pour les utilisateurs de synth\u00e8ses vocales ou qui naviguent de lien en lien au clavier, la navigation dans la page se fait par d\u00e9faut de mani\u00e8re lin\u00e9aire, en fonction de l'ordre du code source de la page et ind\u00e9pendamment de son affichage. Aussi, proposer un ordre logique de parcours au clavier permet une utilisation et une compr\u00e9hension plus ais\u00e9es des pages. C'est \u00e9galement le cas pour les utilisateurs ayant une limitation motrice qui utilisent le clavier pour se d\u00e9placer au sein d'une page, les personnes ayant des difficult\u00e9s de lecture et qui se d\u00e9placent au clavier et les personnes ayant besoin d'agrandir le texte \u00e0 l'\u00e9cran.</li><li><h5>3.1.1 : Langue de la page : (A)</h5><br />Permettre aux navigateurs, aux aides techniques et aux autres agents utilisateurs de disposer des informations n\u00e9cessaires \u00e0 la restitution correcte du contenu quelle que soit sa langue. <br><br>Si la langue n'est pas d\u00e9finie dans la page, les synth\u00e8ses vocales utiliseront une langue par d\u00e9faut : une page en anglais se retrouvera par exemple lue avec une voix et un accent fran\u00e7ais ce qui peut rendre particuli\u00e8rement difficile la compr\u00e9hension du contenu de la page.</li><li><h5>4.1.2 : Nom, r\u00f4le et valeur : (A)</h5><br />Permettre aux agents utilisateurs et aux technologies d'assistance de disposer de l'information n\u00e9cessaire sur les changements d'\u00e9tats, de valeurs et de nom intervenant dans l'interface utilisateur. <br><br>Certains contenus ajout\u00e9s dans les pages peuvent en effet int\u00e9grer leur propre interface de navigation. Dans ce cas, certains utilisateurs peuvent se trouver dans l'impossibilit\u00e9 de les utiliser dans leur contexte de navigation si leur interface n'a pas \u00e9t\u00e9 con\u00e7ue dans une technologie susceptible d'\u00eatre accessible</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Les documents PDF disponibles en t\u00e9l\u00e9chargement ne sont pas structur\u00e9s avec des balises permettant un ordre de lecture logique dans un lecteur d'\u00e9cran, l'exploration du document par titres, liens, paragraphes et listes, ou encore l'association entre les champs et leur intitul\u00e9.", 
        "description": "Accessibilit\u00e9 des documents bureautiques en t\u00e9l\u00e9chargement.", 
        "solution": "<p> Tout \u00e9l\u00e9ment :</p><ul><li><code>a</code> ,</li><li> <code>area,</code></li><li><code>object</code>,</li><li><code>embed</code>,</li><li><code>applet</code>,</li></ul>\r\n<p>ou code javascript pointant vers un document bureautique. </p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Structure", 
        "name": "[STR]-13"
    }, 
    "10180": {
        "goal": "<ul><li><h5>1.4.1 : Utilisation de la couleur : (A)</h5><br />Rendre l'information v\u00e9hicul\u00e9e par la couleur perceptible pour tous les utilisateurs en situation de handicap visuel. Notamment, permettre l'acc\u00e8s \u00e0 l'information aux personnes aveugles,\r\nmal voyantes (d\u00e9ficiences de perception des couleurs, d\u00e9g\u00e9n\u00e9rescence maculaire li\u00e9e \u00e0 l'age,...) , utilisant des feuilles de styles personnalis\u00e9es ou ayant un \u00e9cran monochrome/avec un nombre de couleurs limit\u00e9.</li><li><h5>2.4.7 : Visibilit\u00e9 du focus : (AA)</h5><br />Permettre aux utilisateurs recourant \u00e0 un acc\u00e8s clavier d'identifier l'\u00e9l\u00e9ment actif avec lequel ils interagissent.<br><br>Certains utilisateurs sont susceptible d'utiliser le clavier pour naviguer dans les pages, notamment les personnes ayant un handicap moteur, la visibilit\u00e9 du focus leur permet de rep\u00e9rer facilement leur position dans le parcours de la page</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Des styles CSS sont utilis\u00e9s de mani\u00e8re \u00e0 supprimer l'effet visuel par d\u00e9faut pr\u00e9sent dans les navigateurs lors de la prise de focus sur les \u00e9l\u00e9ments.", 
        "description": "Absence de suppression de l'effet visuel au focus des \u00e9l\u00e9ments.", 
        "solution": "<p> Toute propri\u00e9t\u00e9 <abbr title=\"Cascading Style Sheet\" xml:lang=\"en\" lang=\"en\">CSS</abbr> :<br> </p><ul> <li> <code>outline</code>, </li> <li> <code>outline-color</code>, </li> <li> <code>outline-style</code>, </li> <li> <code>outline-width</code>. </li> </ul><br /><br /><li>Si l'une des propri\u00e9t\u00e9s mentionn\u00e9es dans le champ d'application est utilis\u00e9e dans la page, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Pr\u00e9sentation", 
        "name": "[PR\u00e9]-11"
    }, 
    "10181": {
        "goal": "<ul><li><h5>2.4.1 : Contourner des blocs : (A)</h5><br />Rendre les contenus navigables pour les utilisateurs qui y ont un acc\u00e8s s\u00e9quentiel lin\u00e9aire.<br><br>Les personnes utilisant un lecteur d'\u00e9cran, un agrandisseur, les\r\npersonnes qui ont une limitation cognitive ou celles qui ne se servent que du\r\nclavier pour cause de limitation motrice lisent la page de mani\u00e8re lin\u00e9aire. De ce fait, des liens internes \u00e0 la page ou les titres de hi\u00e9rarchie leur permettent soit d'acc\u00e9der directement \u00e0 l'information qui les int\u00e9resse, soit de sauter d'autres informations qui ne les int\u00e9ressent pas et de gagner ainsi un temps pr\u00e9cieux.</li><li><h5>4.1.2 : Nom, r\u00f4le et valeur : (A)</h5><br />Permettre aux agents utilisateurs et aux technologies d'assistance de disposer de l'information n\u00e9cessaire sur les changements d'\u00e9tats, de valeurs et de nom intervenant dans l'interface utilisateur. <br><br>Certains contenus ajout\u00e9s dans les pages peuvent en effet int\u00e9grer leur propre interface de navigation. Dans ce cas, certains utilisateurs peuvent se trouver dans l'impossibilit\u00e9 de les utiliser dans leur contexte de navigation si leur interface n'a pas \u00e9t\u00e9 con\u00e7ue dans une technologie susceptible d'\u00eatre accessible</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "La page pr\u00e9sente des frames ou des iframes ne comportant aucun attribut title.", 
        "description": "Absence de cadres non titr\u00e9s.", 
        "solution": "<p> Tout \u00e9l\u00e9ment :<br> </p><ul> <li> <code>frame</code> </li> <li> <code>iframe</code> </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Cadres", 
        "name": "[CAD]-01"
    }, 
    "10182": {
        "goal": "<ul><li><h5>2.4.1 : Contourner des blocs : (A)</h5><br />Rendre les contenus navigables pour les utilisateurs qui y ont un acc\u00e8s s\u00e9quentiel lin\u00e9aire.<br><br>Les personnes utilisant un lecteur d'\u00e9cran, un agrandisseur, les\r\npersonnes qui ont une limitation cognitive ou celles qui ne se servent que du\r\nclavier pour cause de limitation motrice lisent la page de mani\u00e8re lin\u00e9aire. De ce fait, des liens internes \u00e0 la page ou les titres de hi\u00e9rarchie leur permettent soit d'acc\u00e9der directement \u00e0 l'information qui les int\u00e9resse, soit de sauter d'autres informations qui ne les int\u00e9ressent pas et de gagner ainsi un temps pr\u00e9cieux.</li><li><h5>4.1.2 : Nom, r\u00f4le et valeur : (A)</h5><br />Permettre aux agents utilisateurs et aux technologies d'assistance de disposer de l'information n\u00e9cessaire sur les changements d'\u00e9tats, de valeurs et de nom intervenant dans l'interface utilisateur. <br><br>Certains contenus ajout\u00e9s dans les pages peuvent en effet int\u00e9grer leur propre interface de navigation. Dans ce cas, certains utilisateurs peuvent se trouver dans l'impossibilit\u00e9 de les utiliser dans leur contexte de navigation si leur interface n'a pas \u00e9t\u00e9 con\u00e7ue dans une technologie susceptible d'\u00eatre accessible</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Les titres donn\u00e9s aux cadres ne sont pas pertinents.", 
        "description": "Pertinence des titres donn\u00e9s aux cadres.", 
        "solution": "<p> Tout \u00e9l\u00e9ment :<br> </p><ul> <li> <code>frame</code> </li> <li> <code>iframe</code> </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li><li>Si l'\u00e9l\u00e9ment contient un attribut <code>title</code> non vide, poursuivre le test, sinon le test est non applicable.  </li>", 
        "thema": "Cadres", 
        "name": "[CAD]-02"
    }, 
    "10183": {
        "goal": "<ul><li><h5>2.2.3 : Pas de d\u00e9lai d'ex\u00e9cution : (AAA)</h5><br />Rendre les contenus accessibles quelques soient les contraintes de temps de consultation ou d'interaction dues \u00e0 des situations de handicap. <br><br>Certaines personnes souffrant d'incapacit\u00e9s mentales, visuelles ou motrices peuvent avoir besoin de plus de temps pour accomplir une t\u00e2che.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Une limite de temps emp\u00eache l'utilisateur de compl\u00e9ter une tache.", 
        "description": "Absence de limite de temps pour compl\u00e9ter une t\u00e2che.", 
        "solution": "<p>Toute t\u00e2che n\u00e9cessitant une interaction avec l'utilisateur (lecture, manipulation de l'interface, navigation, saisie de donn\u00e9es, etc).</p> <br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'accomplissement de la t\u00e2che est limit\u00e9 dans le temps, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Scripts", 
        "name": "[SCR]-10"
    }, 
    "10184": {
        "goal": "<ul><li><h5>2.1.2 : Pas de pi\u00e8ge au clavier : (A)</h5><br />Rendre les contenus accessibles via un p\u00e9riph\u00e9rique de type clavier et \u00e9viter qu'il n'y ait d'\u00e9l\u00e9ment pi\u00e9geant l'utilisateur dans sa navigation au clavier l'emp\u00eachant de continuer ou de revenir en arri\u00e8re dans sa navigation.<br><br>Certains utilisateurs ayant un handicap moteur ou visuel n'utiliseront\r\npar exemple que le clavier ou un p\u00e9riph\u00e9rique adapt\u00e9 pour naviguer. De\r\nplus, il est \u00e0 noter que de nombreux terminaux mobiles ne proposent pas\r\nd'interface souris mais uniquement une interface clavier.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "L'utilisateur se retrouve bloquer dans sa progression lors de la navigation au clavier", 
        "description": "Absence de pi\u00e8ge lors de la navigation clavier.", 
        "solution": "<p>Tout \u00e9l\u00e9ment pouvant recevoir le focus clavier.</p> <br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si lors de la prise de focus sur un \u00e9l\u00e9ment par l'interm\u00e9diaire d'une navigation au clavier, il est  impossible d'une fa\u00e7on standard (tabulation, fl\u00e8che,etc) d'aller \u00e0 l'\u00e9l\u00e9ment pr\u00e9c\u00e9dent ou suivant pouvant \u00e9galement recevoir le focus au clavier, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Navigation", 
        "name": "[NAV]-06"
    }, 
    "10185": {
        "goal": "<ul><li><h5>1.3.1 : Information et relations : (A)</h5><br />Rendre l'information ind\u00e9pendante de sa mise en forme visuelle ou sonore.<br><br>Ce crit\u00e8re de succ\u00e8s est b\u00e9n\u00e9fique \u00e0 des personnes ayant diff\u00e9rents types de handicaps. Les personnes aveugles ou sourdes et aveugles utilisant un lecteur d'\u00e9cran ou un terminal braille auront acc\u00e8s \u00e0 l'information disponible par la couleur lorsque celle-ci est \u00e9galement mise \u00e0 disposition de fa\u00e7on textuelle.<br>Il vise notamment \u00e0 permettre \u00e0 ce que les agents utilisateurs restituent une information en fonction des besoins de l'utilisateur et cela ind\u00e9pendamment de sa mise en forme visuelle ou sonore. </li><li><h5>3.3.2 : \u00c9tiquettes ou instructions : (A)</h5><br />Permettre aux utilisateurs d'\u00e9viter les erreurs de saisie. <br><br>Certains utilisateurs ayant un handicap sont susceptible de faire plus d'erreurs de saisie que les utilisateurs n'ayant aucun handicap. Il est donc important d'\u00e9viter aux utilisateurs des erreurs de saisie. </li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Les \u00e9l\u00e9ments FIELDSET ne sont pas utilis\u00e9s dans le formulaire pour regrouper les  champs logiquement associ\u00e9s.", 
        "description": "Regroupement d'\u00e9l\u00e9ments de formulaire via l'\u00e9l\u00e9ment fieldset.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <code>form</code>. </p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page,&nbsp; poursuivre le test, sinon le test est non applicable. </li> <li>Si l'\u00e9l\u00e9ment ne contient pas d'\u00e9l\u00e9ment <code>fieldset</code>, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Formulaires", 
        "name": "[FOR]-04"
    }, 
    "10186": {
        "goal": "<ul><li><h5>3.3.2 : \u00c9tiquettes ou instructions : (A)</h5><br />Permettre aux utilisateurs d'\u00e9viter les erreurs de saisie. <br><br>Certains utilisateurs ayant un handicap sont susceptible de faire plus d'erreurs de saisie que les utilisateurs n'ayant aucun handicap. Il est donc important d'\u00e9viter aux utilisateurs des erreurs de saisie. </li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Certains \u00e9l\u00e9ments FIELDSET ne sont pas accompagn\u00e9s d'\u00e9l\u00e9ments LEGEND explicitant le regroupement des champs de formulaires.", 
        "description": "Absence d'\u00e9l\u00e9ment fieldset sans \u00e9l\u00e9ment legend.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <code>fieldset</code>. </p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Formulaires", 
        "name": "[FOR]-05"
    }, 
    "10187": {
        "goal": "<ul><li><h5>1.3.1 : Information et relations : (A)</h5><br />Rendre l'information ind\u00e9pendante de sa mise en forme visuelle ou sonore.<br><br>Ce crit\u00e8re de succ\u00e8s est b\u00e9n\u00e9fique \u00e0 des personnes ayant diff\u00e9rents types de handicaps. Les personnes aveugles ou sourdes et aveugles utilisant un lecteur d'\u00e9cran ou un terminal braille auront acc\u00e8s \u00e0 l'information disponible par la couleur lorsque celle-ci est \u00e9galement mise \u00e0 disposition de fa\u00e7on textuelle.<br>Il vise notamment \u00e0 permettre \u00e0 ce que les agents utilisateurs restituent une information en fonction des besoins de l'utilisateur et cela ind\u00e9pendamment de sa mise en forme visuelle ou sonore. </li><li><h5>3.3.2 : \u00c9tiquettes ou instructions : (A)</h5><br />Permettre aux utilisateurs d'\u00e9viter les erreurs de saisie. <br><br>Certains utilisateurs ayant un handicap sont susceptible de faire plus d'erreurs de saisie que les utilisateurs n'ayant aucun handicap. Il est donc important d'\u00e9viter aux utilisateurs des erreurs de saisie. </li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Le contenu de l'\u00e9l\u00e9ment legend ne permet pas d'identifier clairement le r\u00f4le de chacun des groupes et n'apporte pas suffisamment d'information pour rendre explicite les \u00e9tiquettes pr\u00e9sentes dans ces groupes.", 
        "description": "Pertinence du contenu de l'\u00e9l\u00e9ment legend dans l'\u00e9l\u00e9ment fieldset.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <code>fieldset</code> contenant un \u00e9l\u00e9ment <code>legend</code>. </p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Formulaires", 
        "name": "[FOR]-06"
    }, 
    "10188": {
        "goal": "<ul><li><h5>1.3.1 : Information et relations : (A)</h5><br />Rendre l'information ind\u00e9pendante de sa mise en forme visuelle ou sonore.<br><br>Ce crit\u00e8re de succ\u00e8s est b\u00e9n\u00e9fique \u00e0 des personnes ayant diff\u00e9rents types de handicaps. Les personnes aveugles ou sourdes et aveugles utilisant un lecteur d'\u00e9cran ou un terminal braille auront acc\u00e8s \u00e0 l'information disponible par la couleur lorsque celle-ci est \u00e9galement mise \u00e0 disposition de fa\u00e7on textuelle.<br>Il vise notamment \u00e0 permettre \u00e0 ce que les agents utilisateurs restituent une information en fonction des besoins de l'utilisateur et cela ind\u00e9pendamment de sa mise en forme visuelle ou sonore. </li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Certaines listes SELECT comportent des regroupements d'OPTION simul\u00e9s \u00e0 l'aide d'\u00e9l\u00e9ments OPTION d\u00e9sactiv\u00e9s. Ces regroupements apparents ne seront pas fonctionnels pour un utilisateur de lecteur d'\u00e9cran.", 
        "description": "Regroupement d'\u00e9l\u00e9ments option dans un \u00e9l\u00e9ment select via l'\u00e9l\u00e9ment optgroup.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <code>select</code>. </p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li> <li>Si l'\u00e9l\u00e9ment ne contient aucun \u00e9l\u00e9ment <code>optgroup</code>, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Formulaires", 
        "name": "[FOR]-07"
    }, 
    "10189": {
        "goal": "<ul><li><h5>1.3.1 : Information et relations : (A)</h5><br />Rendre l'information ind\u00e9pendante de sa mise en forme visuelle ou sonore.<br><br>Ce crit\u00e8re de succ\u00e8s est b\u00e9n\u00e9fique \u00e0 des personnes ayant diff\u00e9rents types de handicaps. Les personnes aveugles ou sourdes et aveugles utilisant un lecteur d'\u00e9cran ou un terminal braille auront acc\u00e8s \u00e0 l'information disponible par la couleur lorsque celle-ci est \u00e9galement mise \u00e0 disposition de fa\u00e7on textuelle.<br>Il vise notamment \u00e0 permettre \u00e0 ce que les agents utilisateurs restituent une information en fonction des besoins de l'utilisateur et cela ind\u00e9pendamment de sa mise en forme visuelle ou sonore. </li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Aucun attribut label n'est pr\u00e9sent sur les \u00e9l\u00e9ments optgroup.", 
        "description": "Pr\u00e9sence d'un attribut label sur l'\u00e9l\u00e9ment optgroup.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <code>optgroup</code>. </p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Formulaires", 
        "name": "[FOR]-08"
    }, 
    "10190": {
        "goal": "<ul><li><h5>1.3.1 : Information et relations : (A)</h5><br />Rendre l'information ind\u00e9pendante de sa mise en forme visuelle ou sonore.<br><br>Ce crit\u00e8re de succ\u00e8s est b\u00e9n\u00e9fique \u00e0 des personnes ayant diff\u00e9rents types de handicaps. Les personnes aveugles ou sourdes et aveugles utilisant un lecteur d'\u00e9cran ou un terminal braille auront acc\u00e8s \u00e0 l'information disponible par la couleur lorsque celle-ci est \u00e9galement mise \u00e0 disposition de fa\u00e7on textuelle.<br>Il vise notamment \u00e0 permettre \u00e0 ce que les agents utilisateurs restituent une information en fonction des besoins de l'utilisateur et cela ind\u00e9pendamment de sa mise en forme visuelle ou sonore. </li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Le contenu des attributs label sur les \u00e9l\u00e9ments optgroup ne permet d'identifier clairement le contenu du groupe.", 
        "description": "Pertinence du contenu de l'attribut label de l'\u00e9l\u00e9ment optgroup.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <code>optgroup</code> ayant un attribut <code>label</code>. </p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Formulaires", 
        "name": "[FOR]-09"
    }, 
    "10191": {
        "goal": "<ul><li><h5>1.1.1 : Contenu non textuel : (A)</h5><br />Rendre le contenu non textuel accessible sous forme d'une alternative textuelle exploitable quel que soit le mode de perception de l'utilisateur (visuel, auditif, tactile).<br><br>Le contenu des \u00e9l\u00e9ments non textuels ne sera pas perceptible pour diff\u00e9rentes cat\u00e9gories d'utilisateurs tels que :<br><br><ul><li>Les personnes handicap\u00e9es visuelles acc\u00e9dant au site via la synth\u00e8se vocale d'un lecteur d'\u00e9cran,</li><li>Les utilisateurs ayant d\u00e9sactiv\u00e9 l'affichage des \u00e9l\u00e9ments graphiques ou multim\u00e9dias, pour r\u00e9duire notamment les temps de t\u00e9l\u00e9chargement des pages en bas d\u00e9bit.<br></li></ul><br>La pr\u00e9sence d'alternatives textuelles aux contenus non textuels permet \u00e9galement \u00e0 des robots d'indexation d'en exploiter l'information, ou \u00e0 des traducteurs automatiques d'en traduire le sens.</li><li><h5>1.3.1 : Information et relations : (A)</h5><br />Rendre l'information ind\u00e9pendante de sa mise en forme visuelle ou sonore.<br><br>Ce crit\u00e8re de succ\u00e8s est b\u00e9n\u00e9fique \u00e0 des personnes ayant diff\u00e9rents types de handicaps. Les personnes aveugles ou sourdes et aveugles utilisant un lecteur d'\u00e9cran ou un terminal braille auront acc\u00e8s \u00e0 l'information disponible par la couleur lorsque celle-ci est \u00e9galement mise \u00e0 disposition de fa\u00e7on textuelle.<br>Il vise notamment \u00e0 permettre \u00e0 ce que les agents utilisateurs restituent une information en fonction des besoins de l'utilisateur et cela ind\u00e9pendamment de sa mise en forme visuelle ou sonore. </li><li><h5>3.3.2 : \u00c9tiquettes ou instructions : (A)</h5><br />Permettre aux utilisateurs d'\u00e9viter les erreurs de saisie. <br><br>Certains utilisateurs ayant un handicap sont susceptible de faire plus d'erreurs de saisie que les utilisateurs n'ayant aucun handicap. Il est donc important d'\u00e9viter aux utilisateurs des erreurs de saisie. </li><li><h5>4.1.2 : Nom, r\u00f4le et valeur : (A)</h5><br />Permettre aux agents utilisateurs et aux technologies d'assistance de disposer de l'information n\u00e9cessaire sur les changements d'\u00e9tats, de valeurs et de nom intervenant dans l'interface utilisateur. <br><br>Certains contenus ajout\u00e9s dans les pages peuvent en effet int\u00e9grer leur propre interface de navigation. Dans ce cas, certains utilisateurs peuvent se trouver dans l'impossibilit\u00e9 de les utiliser dans leur contexte de navigation si leur interface n'a pas \u00e9t\u00e9 con\u00e7ue dans une technologie susceptible d'\u00eatre accessible</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Certains champs de formulaire ne sont pas dot\u00e9s d'identifiants ID permettant de les associer explicitement \u00e0 une \u00e9tiquette balis\u00e9e \u00e0 l'aide de l'\u00e9l\u00e9ment LABEL.", 
        "description": "Absence d'\u00e9l\u00e9ment de formulaire sans identifiant.", 
        "solution": "<p> Tout \u00e9l\u00e9ment de formulaire :<br> </p><ul> <li> <code>input type=\"text\"</code>, </li> <li> <code>input type=\"password\"</code>,</li> <li> <code>input type=\"file\"</code>, </li> <li> <code>input type=\"radio\"</code>, </li> <li> <code>input type=\"checkbox\"</code>, </li> <li> <code>textarea</code>, </li> <li> <code>select</code>. </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si l'\u00e9l\u00e9ment n'a pas d'attribut <code>title</code> dont la valeur donne la fonction exacte de l'\u00e9l\u00e9ment, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Formulaires", 
        "name": "[FOR]-10"
    }, 
    "10192": {
        "goal": "<ul><li><h5>1.1.1 : Contenu non textuel : (A)</h5><br />Rendre le contenu non textuel accessible sous forme d'une alternative textuelle exploitable quel que soit le mode de perception de l'utilisateur (visuel, auditif, tactile).<br><br>Le contenu des \u00e9l\u00e9ments non textuels ne sera pas perceptible pour diff\u00e9rentes cat\u00e9gories d'utilisateurs tels que :<br><br><ul><li>Les personnes handicap\u00e9es visuelles acc\u00e9dant au site via la synth\u00e8se vocale d'un lecteur d'\u00e9cran,</li><li>Les utilisateurs ayant d\u00e9sactiv\u00e9 l'affichage des \u00e9l\u00e9ments graphiques ou multim\u00e9dias, pour r\u00e9duire notamment les temps de t\u00e9l\u00e9chargement des pages en bas d\u00e9bit.<br></li></ul><br>La pr\u00e9sence d'alternatives textuelles aux contenus non textuels permet \u00e9galement \u00e0 des robots d'indexation d'en exploiter l'information, ou \u00e0 des traducteurs automatiques d'en traduire le sens.</li><li><h5>1.3.1 : Information et relations : (A)</h5><br />Rendre l'information ind\u00e9pendante de sa mise en forme visuelle ou sonore.<br><br>Ce crit\u00e8re de succ\u00e8s est b\u00e9n\u00e9fique \u00e0 des personnes ayant diff\u00e9rents types de handicaps. Les personnes aveugles ou sourdes et aveugles utilisant un lecteur d'\u00e9cran ou un terminal braille auront acc\u00e8s \u00e0 l'information disponible par la couleur lorsque celle-ci est \u00e9galement mise \u00e0 disposition de fa\u00e7on textuelle.<br>Il vise notamment \u00e0 permettre \u00e0 ce que les agents utilisateurs restituent une information en fonction des besoins de l'utilisateur et cela ind\u00e9pendamment de sa mise en forme visuelle ou sonore. </li><li><h5>2.4.6 : En-t\u00eates et \u00e9tiquettes : (AA)</h5><br />Permettre aux utilisateurs d'identifier l'information donn\u00e9e dans une page Web et de comprendre son organisation.<br><br>    L'utilisation d'en-t\u00eates et d'\u00e9tiquettes facilitera la lecture et la compr\u00e9hension d'une page pour les personnes ayant une m\u00e9moire \u00e0 court terme ou des difficult\u00e9s de lecture. Cela permettra \u00e9galement aux utilisateurs de lecteur d'\u00e9cran de pouvoir aller ou sauter directement \u00e0 un contenu</li><li><h5>3.3.2 : \u00c9tiquettes ou instructions : (A)</h5><br />Permettre aux utilisateurs d'\u00e9viter les erreurs de saisie. <br><br>Certains utilisateurs ayant un handicap sont susceptible de faire plus d'erreurs de saisie que les utilisateurs n'ayant aucun handicap. Il est donc important d'\u00e9viter aux utilisateurs des erreurs de saisie. </li><li><h5>4.1.2 : Nom, r\u00f4le et valeur : (A)</h5><br />Permettre aux agents utilisateurs et aux technologies d'assistance de disposer de l'information n\u00e9cessaire sur les changements d'\u00e9tats, de valeurs et de nom intervenant dans l'interface utilisateur. <br><br>Certains contenus ajout\u00e9s dans les pages peuvent en effet int\u00e9grer leur propre interface de navigation. Dans ce cas, certains utilisateurs peuvent se trouver dans l'impossibilit\u00e9 de les utiliser dans leur contexte de navigation si leur interface n'a pas \u00e9t\u00e9 con\u00e7ue dans une technologie susceptible d'\u00eatre accessible</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Certains \u00e9l\u00e9ments de formulaire ne sont pas dot\u00e9s d'\u00e9tiquettes explicitement balis\u00e9es \u00e0 l'aide d'\u00e9l\u00e9ments LABEL, ou \u00e0 d\u00e9faut d'\u00e9tiquettes sous forme d'attribut TITLE.", 
        "description": "Absence d'\u00e9l\u00e9ment de formulaire sans \u00e9tiquette associ\u00e9e.", 
        "solution": "<p> Tout \u00e9l\u00e9ment de formulaire :<br> </p><ul> <li> <code>input type=\"text\"</code>, </li> <li> <code>input type=\"password\"</code>, </li> <li> <code>input type=\"file\"</code>, </li> <li> <code>input type=\"radio\"</code>, </li> <li> <code>input type=\"checkbox\"</code>, </li> <li> <code>textarea</code>, </li> <li> <code>select</code>, </li> </ul><p> ayant un attribut <code>id</code> unique et non vide. </p><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si l'\u00e9l\u00e9ment n'a pas d'attribut <code>title</code> dont la valeur donne la fonction exacte de l'\u00e9l\u00e9ment, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Formulaires", 
        "name": "[FOR]-11"
    }, 
    "10193": {
        "goal": "<ul><li><h5>1.1.1 : Contenu non textuel : (A)</h5><br />Rendre le contenu non textuel accessible sous forme d'une alternative textuelle exploitable quel que soit le mode de perception de l'utilisateur (visuel, auditif, tactile).<br><br>Le contenu des \u00e9l\u00e9ments non textuels ne sera pas perceptible pour diff\u00e9rentes cat\u00e9gories d'utilisateurs tels que :<br><br><ul><li>Les personnes handicap\u00e9es visuelles acc\u00e9dant au site via la synth\u00e8se vocale d'un lecteur d'\u00e9cran,</li><li>Les utilisateurs ayant d\u00e9sactiv\u00e9 l'affichage des \u00e9l\u00e9ments graphiques ou multim\u00e9dias, pour r\u00e9duire notamment les temps de t\u00e9l\u00e9chargement des pages en bas d\u00e9bit.<br></li></ul><br>La pr\u00e9sence d'alternatives textuelles aux contenus non textuels permet \u00e9galement \u00e0 des robots d'indexation d'en exploiter l'information, ou \u00e0 des traducteurs automatiques d'en traduire le sens.</li><li><h5>2.4.6 : En-t\u00eates et \u00e9tiquettes : (AA)</h5><br />Permettre aux utilisateurs d'identifier l'information donn\u00e9e dans une page Web et de comprendre son organisation.<br><br>    L'utilisation d'en-t\u00eates et d'\u00e9tiquettes facilitera la lecture et la compr\u00e9hension d'une page pour les personnes ayant une m\u00e9moire \u00e0 court terme ou des difficult\u00e9s de lecture. Cela permettra \u00e9galement aux utilisateurs de lecteur d'\u00e9cran de pouvoir aller ou sauter directement \u00e0 un contenu</li><li><h5>3.3.2 : \u00c9tiquettes ou instructions : (A)</h5><br />Permettre aux utilisateurs d'\u00e9viter les erreurs de saisie. <br><br>Certains utilisateurs ayant un handicap sont susceptible de faire plus d'erreurs de saisie que les utilisateurs n'ayant aucun handicap. Il est donc important d'\u00e9viter aux utilisateurs des erreurs de saisie. </li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Certains champs de formulaires ne sont pas dot\u00e9s d'une \u00e9tiquette pertinente qui en explicite le r\u00f4le.", 
        "description": "Pertinence des \u00e9tiquettes d'\u00e9l\u00e9ment de formulaire.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <code>label</code>. </p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n", 
        "thema": "Formulaires", 
        "name": "[FOR]-12"
    }, 
    "10194": {
        "goal": "<ul><li><h5>2.4.4 : Fonction du lien (selon le contexte) : (A)</h5><br />Permettre aux utilisateurs d'identifier le r\u00f4le, la destination ou l'effet des liens et d'en anticiper le r\u00e9sultat.<br><br>Avoir des liens compr\u00e9hensibles permet une lecture et une manipulation plus ais\u00e9e par les utilisateurs de technologies d'assistance, notamment lors de l'utilisation d'une liste de liens extraite de la page pour naviguer. Cela permet \u00e9galement une meilleure m\u00e9morisation et une plus grande lisibilit\u00e9 pour tous.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "La lecture des intitul\u00e9s de liens seul ou avec leur contexte ne permet pas d'identifier quelle est la destination ou l'action des liens.", 
        "description": "Possibilit\u00e9 d'identifier la destination ou l'action des liens et des boutons.", 
        "solution": "<p> Tout \u00e9l\u00e9ment :<br> </p><ul> <li> <code>a</code>, </li> <li> <code>area</code>, </li> <li> <code>button</code>, </li> <li> <code>input type=\"image\"</code>, </li> <li> <code>input type=\"submit\"</code>, </li> <li> <code>input type=\"button\"</code>, </li><li> <code>input type=\"reset\"</code>. </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si la lecture de l'intitul\u00e9 du lien seul en dehors de son contexte permet \u00e0 une personne n'ayant aucun handicap de comprendre l'action ou d'identifier la destination du lien, poursuivre le test, sinon le test est non applicable</li>\r\n", 
        "thema": "Navigation", 
        "name": "[NAV]-13"
    }, 
    "10195": {
        "goal": "<ul><li><h5>2.4.4 : Fonction du lien (selon le contexte) : (A)</h5><br />Permettre aux utilisateurs d'identifier le r\u00f4le, la destination ou l'effet des liens et d'en anticiper le r\u00e9sultat.<br><br>Avoir des liens compr\u00e9hensibles permet une lecture et une manipulation plus ais\u00e9e par les utilisateurs de technologies d'assistance, notamment lors de l'utilisation d'une liste de liens extraite de la page pour naviguer. Cela permet \u00e9galement une meilleure m\u00e9morisation et une plus grande lisibilit\u00e9 pour tous.</li><li><h5>3.2.4 : Identification coh\u00e9rente : (AA)</h5><br />Permettre aux utilisateurs de localiser ais\u00e9ment et d'atteindre les contenus qui sont disponibles de mani\u00e8re r\u00e9p\u00e9t\u00e9e dans une s\u00e9rie de page.<br><br>Cela permettra notamment aux utilisateurs habitu\u00e9s \u00e0 un type de comportement de ne pas \u00eatre perturber par des changements dans celui ci</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Le site comporte des liens aux libell\u00e9s identiques sur une m\u00eame page, mais ayant des cibles diff\u00e9rentes. Ce type de liens ne permet pas \u00e0 l'utilisateur d'anticiper correctement le r\u00e9sultat de ses actions.", 
        "description": "Coh\u00e9rence de la destination ou de l'action des liens ayant un intitul\u00e9 identique.", 
        "solution": "<p> Tout \u00e9l\u00e9ment :<br> </p><ul> <li> <code>a</code>, </li> <li> <code>area</code>, </li> <li> <code>button</code>, </li> <li> <code>input type=\"image\"</code>, </li> <li> <code>input type=\"submit\"</code>, </li> <li> <code>input type=\"reset\"</code>. </li> </ul><br /><br /><li>Si au moins deux \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application sont pr\u00e9sents dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si les \u00e9l\u00e9ments ont le m\u00eame intitul\u00e9 et pointent sur une destination ou entrainent une action diff\u00e9rente, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si les \u00e9l\u00e9ments ont un intitul\u00e9 identique lorsque l'on leur additionne un contenu r\u00e9cup\u00e9rable dans au moins un des contextes suivant :\r\n<ul>\r\n<li>contenu de leur \u00e9l\u00e9ment html parent si il s'agit d'un \u00e9l\u00e9ment p ou li,</li> \r\n<li>contenu du titre de hi\u00e9rarchie (hx) pr\u00e9c\u00e9dent les \u00e9l\u00e9ment, </li>\r\n<li>contenu de l'ent\u00eate (th) qui leur est rattach\u00e9 si l'\u00e9l\u00e9ment est dans une cellule de tableau (td),</li>\r\n<li>contenu des \u00e9l\u00e9ments de listes parents des \u00e9l\u00e9ments dans une liste arborescente (ul,ol,dl),</li>\r\n</ul>\r\nqui pointent sur une destination ou entrainent une action diff\u00e9rente, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Navigation", 
        "name": "[NAV]-15"
    }, 
    "10196": {
        "goal": "<ul><li><h5>1.1.1 : Contenu non textuel : (A)</h5><br />Rendre le contenu non textuel accessible sous forme d'une alternative textuelle exploitable quel que soit le mode de perception de l'utilisateur (visuel, auditif, tactile).<br><br>Le contenu des \u00e9l\u00e9ments non textuels ne sera pas perceptible pour diff\u00e9rentes cat\u00e9gories d'utilisateurs tels que :<br><br><ul><li>Les personnes handicap\u00e9es visuelles acc\u00e9dant au site via la synth\u00e8se vocale d'un lecteur d'\u00e9cran,</li><li>Les utilisateurs ayant d\u00e9sactiv\u00e9 l'affichage des \u00e9l\u00e9ments graphiques ou multim\u00e9dias, pour r\u00e9duire notamment les temps de t\u00e9l\u00e9chargement des pages en bas d\u00e9bit.<br></li></ul><br>La pr\u00e9sence d'alternatives textuelles aux contenus non textuels permet \u00e9galement \u00e0 des robots d'indexation d'en exploiter l'information, ou \u00e0 des traducteurs automatiques d'en traduire le sens.</li><li><h5>2.4.4 : Fonction du lien (selon le contexte) : (A)</h5><br />Permettre aux utilisateurs d'identifier le r\u00f4le, la destination ou l'effet des liens et d'en anticiper le r\u00e9sultat.<br><br>Avoir des liens compr\u00e9hensibles permet une lecture et une manipulation plus ais\u00e9e par les utilisateurs de technologies d'assistance, notamment lors de l'utilisation d'une liste de liens extraite de la page pour naviguer. Cela permet \u00e9galement une meilleure m\u00e9morisation et une plus grande lisibilit\u00e9 pour tous.</li><li><h5>2.4.9 : Fonction du lien (lien uniquement) : (AAA)</h5><br />Permettre aux utilisateurs d'identifier le r\u00f4le, la destination ou\r\nl'effet des liens et d'en anticiper le r\u00e9sultat. <br><br>Avoir des liens\r\ncompr\u00e9hensibles permet une lecture et une manipulation plus ais\u00e9e par\r\nles utilisateurs de technologies d'assistance, notamment lors de l'utilisation\r\nd'une liste de liens extraite de la page pour naviguer. Cela permet\r\n\u00e9galement une meilleure m\u00e9morisation et une plus grande lisibilit\u00e9 pour\r\ntous.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "", 
        "description": "Absence de liens sans intitul\u00e9.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <code>a</code>. </p><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si l'\u00e9l\u00e9ment n'est pas un \u00e9l\u00e9ment <code>a</code> ayant un attribut <code>name</code> ou <code>id</code>, d\u00e9pourvu d'attribut <code>href</code> ou ayant un attribut <code>href</code> dont la valeur est \u00e9gale au caract\u00e8re # suivi du contenu de l'attribut <code>name</code> ou <code>id</code>, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Navigation", 
        "name": "[NAV]-16"
    }, 
    "10197": {
        "goal": "<ul><li><h5>1.4.8 : Pr\u00e9sentation visuelle : (AAA)</h5><br />Rendre les contenus textuels visuellement perceptibles sans interf\u00e9rence dans leur lisibilit\u00e9 due \u00e0 leur pr\u00e9sentation.<br><br>Les personnes ayant des d\u00e9ficiences cognitives, du langage, d'apprentissage et certaines personnes ayant une d\u00e9ficience visuelle ne peuvent lire et comprendre un texte lorsque celui-ci est pr\u00e9senter d'une fa\u00e7on qui rend sa lecture difficile sans qu'il ne soit possible de modifier cette pr\u00e9sentation.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Lors d'un affichage en 1024 une barre de d\u00e9filement horizontale appara\u00eet.", 
        "description": "Absence d'apparition de barre de d\u00e9filement horizontale en  affichage plein \u00e9cran.", 
        "solution": "<p>Tout \u00e9l\u00e9ment constituant visuellement un bloc de texte.</p><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si en affichage plein \u00e9cran une barre de d\u00e9filement horizontale appara\u00eet, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Pr\u00e9sentation", 
        "name": "[PR\u00e9]-15"
    }, 
    "10198": {
        "goal": "<ul><li><h5>2.4.2 : Titre de page : (A)</h5><br />Permettre aux utilisateurs d'identifier le contenu d'une page et de s'orienter dans un site.<br><br>La pr\u00e9sence d'un titre appropri\u00e9 permet l'identification de la page. C'est la premi\u00e8re information lue par les synth\u00e8ses vocales. Elle est \u00e9galement utilis\u00e9e par les navigateurs pour titrer les fen\u00eatres et par les moteurs de recherche dans leurs listes de r\u00e9sultats.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Certaines pages ne sont pas dot\u00e9es d'un \u00e9l\u00e9ment de titre TITLE.", 
        "description": "Pr\u00e9sence d'un titre dans la page.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <code>title</code>. </p><br /><br />", 
        "thema": "Standards", 
        "name": "[STA]-06"
    }, 
    "10199": {
        "goal": "<ul><li><h5>2.4.2 : Titre de page : (A)</h5><br />Permettre aux utilisateurs d'identifier le contenu d'une page et de s'orienter dans un site.<br><br>La pr\u00e9sence d'un titre appropri\u00e9 permet l'identification de la page. C'est la premi\u00e8re information lue par les synth\u00e8ses vocales. Elle est \u00e9galement utilis\u00e9e par les navigateurs pour titrer les fen\u00eatres et par les moteurs de recherche dans leurs listes de r\u00e9sultats.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Les titres TITLE de page ne fournissent pas syst\u00e9matiquement toutes les informations n\u00e9cessaires pour identifier pr\u00e9cis\u00e9ment le contenu de la page.", 
        "description": "Pertinence du titre de la page.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <code>title</code>. </p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n", 
        "thema": "Standards", 
        "name": "[STA]-07"
    }, 
    "10200": {
        "goal": "<ul><li><h5>1.4.8 : Pr\u00e9sentation visuelle : (AAA)</h5><br />Rendre les contenus textuels visuellement perceptibles sans interf\u00e9rence dans leur lisibilit\u00e9 due \u00e0 leur pr\u00e9sentation.<br><br>Les personnes ayant des d\u00e9ficiences cognitives, du langage, d'apprentissage et certaines personnes ayant une d\u00e9ficience visuelle ne peuvent lire et comprendre un texte lorsque celui-ci est pr\u00e9senter d'une fa\u00e7on qui rend sa lecture difficile sans qu'il ne soit possible de modifier cette pr\u00e9sentation.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Pr\u00e9sence de style CSS permettant de justifier les textes.x", 
        "description": "Absence de justification du texte.", 
        "solution": "<p>Tout \u00e9l\u00e9ment constituant visuellement un bloc de texte.</p><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Pr\u00e9sentation", 
        "name": "[PR\u00e9]-12"
    }, 
    "10201": {
        "goal": "<ul><li><h5>1.4.8 : Pr\u00e9sentation visuelle : (AAA)</h5><br />Rendre les contenus textuels visuellement perceptibles sans interf\u00e9rence dans leur lisibilit\u00e9 due \u00e0 leur pr\u00e9sentation.<br><br>Les personnes ayant des d\u00e9ficiences cognitives, du langage, d'apprentissage et certaines personnes ayant une d\u00e9ficience visuelle ne peuvent lire et comprendre un texte lorsque celui-ci est pr\u00e9senter d'une fa\u00e7on qui rend sa lecture difficile sans qu'il ne soit possible de modifier cette pr\u00e9sentation.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Les blocs de texte font plus de 80 caract\u00e8res de large.", 
        "description": "Largeur des blocs de textes.", 
        "solution": "<p>Tout \u00e9l\u00e9ment constituant visuellement un bloc de texte.</p><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Pr\u00e9sentation", 
        "name": "[PR\u00e9]-16"
    }, 
    "10202": {
        "goal": "<ul><li><h5>2.4.5 : Acc\u00e8s multiples : (AA)</h5><br />Permettre aux utilisateurs d'acc\u00e9der aux pages Web par le moyen le plus adapt\u00e9 \u00e0 leurs besoins ou leur permettre de trouver plus facilement l'information recherch\u00e9e.<br><br>Certains utilisateurs notamment les personnes d\u00e9ficientes visuelles ou cognitives peuvent trouver plus simple et plus rapide d'utiliser un moteur de recherche ou un plan du site pour acc\u00e8der \u00e0 l'information qui les int\u00e9resse</li><li><h5>2.4.8 : Localisation : (AAA)</h5><br />Permettre \u00e0 l'utilisateur de s'orienter dans un site et d'y trouver l'information.<br><br>Cela permet notamment de faciliter la navigation aux utilisateurs ayant des troubles de la concentration ou de l'attention qui pourraient \u00eatre perdus lors de la navigation dans une s\u00e9rie de pages. De plus, cela peut \u00e9galement \u00eatre utile lorsque l'on arrive sur une page depuis les r\u00e9sultats d'un moteur de recherche ext\u00e9rieur au site.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Aucune page plan du site n'est pr\u00e9sente sur le site.", 
        "description": "Pr\u00e9sence d'une page contenant le plan du site.", 
        "solution": "<p> Toute page r\u00e9capitulant l'architecture g\u00e9n\u00e9rale du site sous forme de liens hypertextes. </p><br /><br /><li>Si aucun page mentionn\u00e9e dans le champ d'application n'est pr\u00e9sente dans le site, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Navigation", 
        "name": "[NAV]-17"
    }, 
    "10203": {
        "goal": "<ul><li><h5>2.4.5 : Acc\u00e8s multiples : (AA)</h5><br />Permettre aux utilisateurs d'acc\u00e9der aux pages Web par le moyen le plus adapt\u00e9 \u00e0 leurs besoins ou leur permettre de trouver plus facilement l'information recherch\u00e9e.<br><br>Certains utilisateurs notamment les personnes d\u00e9ficientes visuelles ou cognitives peuvent trouver plus simple et plus rapide d'utiliser un moteur de recherche ou un plan du site pour acc\u00e8der \u00e0 l'information qui les int\u00e9resse</li><li><h5>2.4.8 : Localisation : (AAA)</h5><br />Permettre \u00e0 l'utilisateur de s'orienter dans un site et d'y trouver l'information.<br><br>Cela permet notamment de faciliter la navigation aux utilisateurs ayant des troubles de la concentration ou de l'attention qui pourraient \u00eatre perdus lors de la navigation dans une s\u00e9rie de pages. De plus, cela peut \u00e9galement \u00eatre utile lorsque l'on arrive sur une page depuis les r\u00e9sultats d'un moteur de recherche ext\u00e9rieur au site.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Le plan du site ne permet de naviguer vers les pages qu'il indique.", 
        "description": "Coh\u00e9rence du plan du site.", 
        "solution": "<p> Toute page r\u00e9capitulant l'architecture g\u00e9n\u00e9rale du site sous forme de liens hypertextes. </p><br /><br /><li>Si la page mentionn\u00e9e dans le champ d'application est pr\u00e9sente dans le site, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Navigation", 
        "name": "[NAV]-18"
    }, 
    "10204": {
        "goal": "<ul><li><h5>2.4.5 : Acc\u00e8s multiples : (AA)</h5><br />Permettre aux utilisateurs d'acc\u00e9der aux pages Web par le moyen le plus adapt\u00e9 \u00e0 leurs besoins ou leur permettre de trouver plus facilement l'information recherch\u00e9e.<br><br>Certains utilisateurs notamment les personnes d\u00e9ficientes visuelles ou cognitives peuvent trouver plus simple et plus rapide d'utiliser un moteur de recherche ou un plan du site pour acc\u00e8der \u00e0 l'information qui les int\u00e9resse</li><li><h5>2.4.8 : Localisation : (AAA)</h5><br />Permettre \u00e0 l'utilisateur de s'orienter dans un site et d'y trouver l'information.<br><br>Cela permet notamment de faciliter la navigation aux utilisateurs ayant des troubles de la concentration ou de l'attention qui pourraient \u00eatre perdus lors de la navigation dans une s\u00e9rie de pages. De plus, cela peut \u00e9galement \u00eatre utile lorsque l'on arrive sur une page depuis les r\u00e9sultats d'un moteur de recherche ext\u00e9rieur au site.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Aucun lien d'acc\u00e8s vers le plan du site n'est pr\u00e9sent sur la page d'accueil.", 
        "description": "Pr\u00e9sence d'un acc\u00e8s \u00e0 la page contenant le plan du site depuis la page d'accueil.", 
        "solution": "<p> Toute page r\u00e9capitulant l'architecture g\u00e9n\u00e9rale du site sous forme de liens hypertextes. </p><br /><br /><li>Si la page mentionn\u00e9e dans le champ d'application est pr\u00e9sente dans le site, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Navigation", 
        "name": "[NAV]-19"
    }, 
    "10205": {
        "goal": "<ul><li><h5>2.4.8 : Localisation : (AAA)</h5><br />Permettre \u00e0 l'utilisateur de s'orienter dans un site et d'y trouver l'information.<br><br>Cela permet notamment de faciliter la navigation aux utilisateurs ayant des troubles de la concentration ou de l'attention qui pourraient \u00eatre perdus lors de la navigation dans une s\u00e9rie de pages. De plus, cela peut \u00e9galement \u00eatre utile lorsque l'on arrive sur une page depuis les r\u00e9sultats d'un moteur de recherche ext\u00e9rieur au site.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Le site n'offre pas de fil d'Ariane permettant \u00e0 l'utilisateur de se rep\u00e9rer imm\u00e9diatement dans l'architecture des contenus.", 
        "description": "Pr\u00e9sence d'un fil d'ariane.", 
        "solution": "<p> Toute succession ou liste d'\u00e9l\u00e9ment <code>a</code> permettant de naviguer dans l'arborescence amenant \u00e0 la page en cours de consultation. </p><br /><br />", 
        "thema": "Navigation", 
        "name": "[NAV]-20"
    }, 
    "10206": {
        "goal": "<ul><li><h5>3.2.3 : Navigation coh\u00e9rente : (AA)</h5><br />Permettre aux utilisateurs de localiser ais\u00e9ment et d'atteindre les contenus qui sont disponibles de mani\u00e8re r\u00e9p\u00e9t\u00e9e dans une s\u00e9rie de page. La coh\u00e9rence de la structuration, et de la pr\u00e9sentation des pages rend ces \u00e9l\u00e9ments pr\u00e9visibles tout au long de la navigation. Elle permet aux utilisateurs de trouver plus facilement l'information qu'ils cherchent et, \u00e0 l'inverse, d'\u00e9viter celle qui ne les int\u00e9resse pas.<br><br>Le rep\u00e9rage dans une page peut devenir tr\u00e8s probl\u00e9matique s'il n'y a pas un minimum de structure commune d'une page \u00e0 l'autre, et particuli\u00e8rement sur les \u00e9l\u00e9ments servant \u00e0 la navigation entre les pages ou dans les pages elles-m\u00eames. De plus, une pr\u00e9sentation visuelle de ces \u00e9l\u00e9ments aident \u00e0 leur rep\u00e9rage et leur identification dans la page.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "L'ordre des menus ou barres de navigation dans le code source des pages est diff\u00e9rent d'une page \u00e0 l'autre.", 
        "description": "Coh\u00e9rence de la position des menus et barres de navigation dans le code source de la structure HTML.", 
        "solution": "<p> Groupe d'\u00e9l\u00e9ments <code>a</code> permettant la navigation dans le site ou dans une page. </p><br /><br /><li>Si le groupe d'\u00e9l\u00e9ments mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si le groupe d'\u00e9l\u00e9ments est pr\u00e9sent sur au moins une autre page du site, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si la page en cours d'analyse n'est pas la page d'accueil, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Navigation", 
        "name": "[NAV]-22"
    }, 
    "10207": {
        "goal": "<ul><li><h5>3.2.3 : Navigation coh\u00e9rente : (AA)</h5><br />Permettre aux utilisateurs de localiser ais\u00e9ment et d'atteindre les contenus qui sont disponibles de mani\u00e8re r\u00e9p\u00e9t\u00e9e dans une s\u00e9rie de page. La coh\u00e9rence de la structuration, et de la pr\u00e9sentation des pages rend ces \u00e9l\u00e9ments pr\u00e9visibles tout au long de la navigation. Elle permet aux utilisateurs de trouver plus facilement l'information qu'ils cherchent et, \u00e0 l'inverse, d'\u00e9viter celle qui ne les int\u00e9resse pas.<br><br>Le rep\u00e9rage dans une page peut devenir tr\u00e8s probl\u00e9matique s'il n'y a pas un minimum de structure commune d'une page \u00e0 l'autre, et particuli\u00e8rement sur les \u00e9l\u00e9ments servant \u00e0 la navigation entre les pages ou dans les pages elles-m\u00eames. De plus, une pr\u00e9sentation visuelle de ces \u00e9l\u00e9ments aident \u00e0 leur rep\u00e9rage et leur identification dans la page.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Les menus ou barres de navigation pr\u00e9sente une pr\u00e9sentation visuelles totalement diff\u00e9rentes d'une page \u00e0 l'autre.", 
        "description": "Coh\u00e9rence de la pr\u00e9sentation des menus et barres de navigation.", 
        "solution": "<p> Groupe d'\u00e9l\u00e9ments <code>a</code> permettant la navigation dans le site ou dans une page. </p><br /><br /><li>Si le groupe d'\u00e9l\u00e9ments mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si le groupe d'\u00e9l\u00e9ments est pr\u00e9sent sur au moins une autre page du site, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si la page en cours d'analyse n'est pas la page d'accueil, poursuivre le test, sinon le test est non applicable.</li>\r\n", 
        "thema": "Navigation", 
        "name": "[NAV]-23"
    }, 
    "10208": {
        "goal": "<ul><li><h5>1.4.8 : Pr\u00e9sentation visuelle : (AAA)</h5><br />Rendre les contenus textuels visuellement perceptibles sans interf\u00e9rence dans leur lisibilit\u00e9 due \u00e0 leur pr\u00e9sentation.<br><br>Les personnes ayant des d\u00e9ficiences cognitives, du langage, d'apprentissage et certaines personnes ayant une d\u00e9ficience visuelle ne peuvent lire et comprendre un texte lorsque celui-ci est pr\u00e9senter d'une fa\u00e7on qui rend sa lecture difficile sans qu'il ne soit possible de modifier cette pr\u00e9sentation.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Aucun m\u00e9canisme pour personnaliser la couleur d'avant et d'arri\u00e8re plan des blocs de texte n'est pr\u00e9sent.", 
        "description": "Pr\u00e9sence d'un m\u00e9canisme pour personnaliser la couleur d'avant plan et d'arri\u00e8re plan des blocs de texte.", 
        "solution": "Tout \u00e9l\u00e9ment :\r\n<ul>\r\n<li><code>applet</code>,</li>\r\n<li><code>object</code>,</li>\r\n<li><code>embed</code>,</li><li>tout \u00e9l\u00e9ment html<br></li>\r\n</ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li><li>Si l'\u00e9l\u00e9ment permet d'afficher des blocs de texte, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Multim\u00e9dia", 
        "name": "[MUL]-34"
    }, 
    "10209": {
        "goal": "<ul><li><h5>2.4.5 : Acc\u00e8s multiples : (AA)</h5><br />Permettre aux utilisateurs d'acc\u00e9der aux pages Web par le moyen le plus adapt\u00e9 \u00e0 leurs besoins ou leur permettre de trouver plus facilement l'information recherch\u00e9e.<br><br>Certains utilisateurs notamment les personnes d\u00e9ficientes visuelles ou cognitives peuvent trouver plus simple et plus rapide d'utiliser un moteur de recherche ou un plan du site pour acc\u00e8der \u00e0 l'information qui les int\u00e9resse</li><li><h5>2.4.8 : Localisation : (AAA)</h5><br />Permettre \u00e0 l'utilisateur de s'orienter dans un site et d'y trouver l'information.<br><br>Cela permet notamment de faciliter la navigation aux utilisateurs ayant des troubles de la concentration ou de l'attention qui pourraient \u00eatre perdus lors de la navigation dans une s\u00e9rie de pages. De plus, cela peut \u00e9galement \u00eatre utile lorsque l'on arrive sur une page depuis les r\u00e9sultats d'un moteur de recherche ext\u00e9rieur au site.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Aucune barre ou menu de navigation n'est pr\u00e9sent dans la page.", 
        "description": "Pr\u00e9sence de menus ou de barres de navigation.", 
        "solution": "<p> Tout groupe d'\u00e9l\u00e9ments<code></code> permettant la navigation dans le site ou dans une page. </p><br /><br /><li>Si le site ne comporte ni moteur de recherche ni plan du site, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Navigation", 
        "name": "[NAV]-21"
    }, 
    "10210": {
        "goal": "<ul><li><h5>1.4.7 : Arri\u00e8re-plan sonore de faible volume ou absent : (AAA)</h5><br />Permettre de s'assurer que les \u00e9l\u00e9ments sonores, qui ne sont pas des pistes de dialogue, ont un niveau sonore suffisamment faible pour que les \u00e9l\u00e9ments sonores qui sont des pistes de dialogue puissent \u00eatre entendu par les personnes ayant une d\u00e9ficience auditive. </li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "La piste de dialogue n'est pas 20 d\u00e9cibels plus fort que le fond sonore ambiant.", 
        "description": "Niveau sonore de la piste de dialogue.", 
        "solution": "Tout \u00e9l\u00e9ment :\r\n<ul>\r\n<li><code>a</code>,</li>\r\n<li><code>area</code>,</li>\r\n<li><code>applet</code>,</li>\r\n<li><code>object</code>,</li>\r\n<li><code>embed</code>,</li>\r\n</ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment permet de jouer ou de t\u00e9l\u00e9charger un \u00e9l\u00e9ment contenant au moins une piste de dialogue apportant de l'information et au moins une piste de fond sonore, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Multim\u00e9dia", 
        "name": "[MUL]-33"
    }, 
    "10211": {
        "goal": "<ul><li><h5>2.4.1 : Contourner des blocs : (A)</h5><br />Rendre les contenus navigables pour les utilisateurs qui y ont un acc\u00e8s s\u00e9quentiel lin\u00e9aire.<br><br>Les personnes utilisant un lecteur d'\u00e9cran, un agrandisseur, les\r\npersonnes qui ont une limitation cognitive ou celles qui ne se servent que du\r\nclavier pour cause de limitation motrice lisent la page de mani\u00e8re lin\u00e9aire. De ce fait, des liens internes \u00e0 la page ou les titres de hi\u00e9rarchie leur permettent soit d'acc\u00e9der directement \u00e0 l'information qui les int\u00e9resse, soit de sauter d'autres informations qui ne les int\u00e9ressent pas et de gagner ainsi un temps pr\u00e9cieux.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Pr\u00e9ciser la langue du document cible, soit dans le libell\u00e9 du lien, soit dans le contenu de son attribut TITLE reprenant et compl\u00e9tant ce libell\u00e9,  soit dans leur contexte (p,li, hx pr\u00e9c\u00e9dent).", 
        "description": "Pr\u00e9sence de regroupement pour les liens importants.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <code>a</code>. </p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent au moins deux fois dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si le lien fait partie d'un groupe important (zone de navigation, zone de contenu global, zone d'outils, etc), poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Navigation", 
        "name": "[NAV]-29"
    }, 
    "10212": {
        "goal": "<ul><li><h5>2.4.1 : Contourner des blocs : (A)</h5><br />Rendre les contenus navigables pour les utilisateurs qui y ont un acc\u00e8s s\u00e9quentiel lin\u00e9aire.<br><br>Les personnes utilisant un lecteur d'\u00e9cran, un agrandisseur, les\r\npersonnes qui ont une limitation cognitive ou celles qui ne se servent que du\r\nclavier pour cause de limitation motrice lisent la page de mani\u00e8re lin\u00e9aire. De ce fait, des liens internes \u00e0 la page ou les titres de hi\u00e9rarchie leur permettent soit d'acc\u00e9der directement \u00e0 l'information qui les int\u00e9resse, soit de sauter d'autres informations qui ne les int\u00e9ressent pas et de gagner ainsi un temps pr\u00e9cieux.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "La structure html ne permet pas d'identifier les  regroupement pour les grandes zones de la page tel que la zone de contenu, la zone du moteur de recherche ou la zone de navigation.", 
        "description": "Pr\u00e9sence d'un balisage permettant d'identifier les groupes de liens importants.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <abbr title=\"Hypertext Markup Language\" xml:lang=\"en\" lang=\"en\">HTML</abbr> contenant un groupe de liens importants (zone de navigation, zone de contenu global ou partie de contenu, zone d'outils, etc). </p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Navigation", 
        "name": "[NAV]-30"
    }, 
    "10213": {
        "goal": "<ul><li><h5>2.4.1 : Contourner des blocs : (A)</h5><br />Rendre les contenus navigables pour les utilisateurs qui y ont un acc\u00e8s s\u00e9quentiel lin\u00e9aire.<br><br>Les personnes utilisant un lecteur d'\u00e9cran, un agrandisseur, les\r\npersonnes qui ont une limitation cognitive ou celles qui ne se servent que du\r\nclavier pour cause de limitation motrice lisent la page de mani\u00e8re lin\u00e9aire. De ce fait, des liens internes \u00e0 la page ou les titres de hi\u00e9rarchie leur permettent soit d'acc\u00e9der directement \u00e0 l'information qui les int\u00e9resse, soit de sauter d'autres informations qui ne les int\u00e9ressent pas et de gagner ainsi un temps pr\u00e9cieux.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Le site ne contient pas de liens d'\u00e9vitement des menus, et d'acc\u00e8s rapide au contenu principal de chaque page. Il est imp\u00e9ratif de mettre en place des liens d'\u00e9vitement de type \u00ab\u00a0Aller au menu\u00a0\u00bb ou \u00ab\u00a0Aller au contenu\u00a0\u00bb afin de permettre une navigation plus rapide dans les pages. Ce type de liens ne doit pas forc\u00e9ment \u00eatre visible, mais cela reste tout de m\u00eame pr\u00e9f\u00e9rable. De plus, ils peuvent servir \u00e9norm\u00e9ment dans le cadre de consultation en mode mobile.", 
        "description": "Pr\u00e9sence de liens d'\u00e9vitement ou d'acc\u00e8s rapide aux groupes de liens importants.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <abbr title=\"Hypertext Markup Language\" xml:lang=\"en\" lang=\"en\">HTML</abbr> contenant un groupe de liens importants (zone de navigation, zone de contenu global ou partie de contenu, zone d'outils, etc) et identifi\u00e9 par une ancre. </p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Navigation", 
        "name": "[NAV]-31"
    }, 
    "10214": {
        "goal": "<ul><li><h5>2.4.3 : Parcours du focus : (A)</h5><br />Rendre les contenus accessibles au clavier dans un ordre coh\u00e9rent avec l'information d\u00e9livr\u00e9e.<br><br>Pour les utilisateurs de synth\u00e8ses vocales ou qui naviguent de lien en lien au clavier, la navigation dans la page se fait par d\u00e9faut de mani\u00e8re lin\u00e9aire, en fonction de l'ordre du code source de la page et ind\u00e9pendamment de son affichage. Aussi, proposer un ordre logique de parcours au clavier permet une utilisation et une compr\u00e9hension plus ais\u00e9es des pages. C'est \u00e9galement le cas pour les utilisateurs ayant une limitation motrice qui utilisent le clavier pour se d\u00e9placer au sein d'une page, les personnes ayant des difficult\u00e9s de lecture et qui se d\u00e9placent au clavier et les personnes ayant besoin d'agrandir le texte \u00e0 l'\u00e9cran.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Les liens d'\u00e9vitement ou d'acc\u00e8s rapide ne sont pas syst\u00e9matiquement pr\u00e9sents dans les pages contenant les groupes de liens importants ou ne sont pas fonctionnels.", 
        "description": "Coh\u00e9rence des liens d'\u00e9vitement ou d'acc\u00e8s rapide aux groupes de liens importants.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <code>a</code>. </p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si l'activation de l'\u00e9l\u00e9ment permet de passer ou d'acc\u00e9der \u00e0 un groupe de liens importants, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Navigation", 
        "name": "[NAV]-32"
    }, 
    "10215": {
        "goal": "<ul><li><h5>3.2.3 : Navigation coh\u00e9rente : (AA)</h5><br />Permettre aux utilisateurs de localiser ais\u00e9ment et d'atteindre les contenus qui sont disponibles de mani\u00e8re r\u00e9p\u00e9t\u00e9e dans une s\u00e9rie de page. La coh\u00e9rence de la structuration, et de la pr\u00e9sentation des pages rend ces \u00e9l\u00e9ments pr\u00e9visibles tout au long de la navigation. Elle permet aux utilisateurs de trouver plus facilement l'information qu'ils cherchent et, \u00e0 l'inverse, d'\u00e9viter celle qui ne les int\u00e9resse pas.<br><br>Le rep\u00e9rage dans une page peut devenir tr\u00e8s probl\u00e9matique s'il n'y a pas un minimum de structure commune d'une page \u00e0 l'autre, et particuli\u00e8rement sur les \u00e9l\u00e9ments servant \u00e0 la navigation entre les pages ou dans les pages elles-m\u00eames. De plus, une pr\u00e9sentation visuelle de ces \u00e9l\u00e9ments aident \u00e0 leur rep\u00e9rage et leur identification dans la page.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Les liens d'\u00e9vitement ou d'acc\u00e8s rapide ne sont pas syst\u00e9matiquement \u00e0 la m\u00eame place dans l'ordre du code source.", 
        "description": "Ordre des liens d'\u00e9vitement ou d'acc\u00e8s rapide dans le code source des pages.", 
        "solution": "<p> Tout \u00e9l\u00e9ment <code>a</code>. </p><br /><br /><li>Si l'\u00e9l\u00e9ment mentionn\u00e9 dans le champ d'application est pr\u00e9sent au moins deux fois dans la page, poursuivre le test, sinon le test est non applicable. </li> <li>Si l'activation de l'\u00e9l\u00e9ment permet d'acc\u00e9der \u00e0 un groupe de liens importants, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Navigation", 
        "name": "[NAV]-33"
    }, 
    "10216": {
        "goal": "<ul><li><h5>2.4.5 : Acc\u00e8s multiples : (AA)</h5><br />Permettre aux utilisateurs d'acc\u00e9der aux pages Web par le moyen le plus adapt\u00e9 \u00e0 leurs besoins ou leur permettre de trouver plus facilement l'information recherch\u00e9e.<br><br>Certains utilisateurs notamment les personnes d\u00e9ficientes visuelles ou cognitives peuvent trouver plus simple et plus rapide d'utiliser un moteur de recherche ou un plan du site pour acc\u00e8der \u00e0 l'information qui les int\u00e9resse</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Aucun moteur de recherche n'est pr\u00e9sent.", 
        "description": "Pr\u00e9sence d'un moteur de recherche.", 
        "solution": "<p> Moteur de recherche du site. </p><br /><br /><li>Si aucun moteur de recherche n'est pr\u00e9sent dans le site, poursuivre le test, sinon le test est non applicable. <br></li>", 
        "thema": "Navigation", 
        "name": "[NAV]-34"
    }, 
    "10217": {
        "goal": "<ul><li><h5>3.1.5 : Niveau de lecture : (AAA)</h5><br />Permettre aux utilisateurs en situation de handicap cognitif d'acc\u00e9der au sens des contenus exigeant un niveau de lecture \u00e9lev\u00e9.<br><br>Cela permettra notamment aux utilisateurs ayant des difficult\u00e9s de compr\u00e9hension ou d'interpr\u00e9tation du texte \u00e9crit de comprendre l'information transmise par le biais d'une forme diff\u00e9rente de diffusion de l'information (visuelle, sonore, etc)</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Le contenu textuel n'est pas  compr\u00e9hensible pour un visiteur ayant un niveau d'\u00e9ducation \u00e9quivalent au niveau 3\u00e8me.", 
        "description": "Utilisation d'un style de r\u00e9daction simple et compr\u00e9hensible de tous.", 
        "solution": "<p> Tout segment de texte. </p><br /><br /><li>Si un segment de texte est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si la compr\u00e9hension du segment de texte n\u00e9cessite un niveau d'\u00e9ducation plus avanc\u00e9e que celui obtenu environ neuf ans apr\u00e8s le d\u00e9but de la scolarisation (environ niveau 3\u00e8me), apr\u00e8s la suppression des noms propres et des titres, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Textes", 
        "name": "[TEX]-10"
    }, 
    "10218": {
        "goal": "<ul><li><h5>2.4.5 : Acc\u00e8s multiples : (AA)</h5><br />Permettre aux utilisateurs d'acc\u00e9der aux pages Web par le moyen le plus adapt\u00e9 \u00e0 leurs besoins ou leur permettre de trouver plus facilement l'information recherch\u00e9e.<br><br>Certains utilisateurs notamment les personnes d\u00e9ficientes visuelles ou cognitives peuvent trouver plus simple et plus rapide d'utiliser un moteur de recherche ou un plan du site pour acc\u00e8der \u00e0 l'information qui les int\u00e9resse</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Il est impossible de naviguer dans un groupe de page.", 
        "description": "Possibilit\u00e9 de naviguer facilement dans un groupe de pages.", 
        "solution": "<p> Groupe de pages. </p><br /><br /><li>Si un groupe de pages est pr\u00e9sent dans le site, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Navigation", 
        "name": "[NAV]-35"
    }, 
    "10219": {
        "goal": "<ul><li><h5>3.1.3 : Mots rares : (AAA)</h5><br />Permettre aux utilisateurs de comprendre l'information v\u00e9hicul\u00e9e par un vocabulaire sp\u00e9cifique employ\u00e9 de mani\u00e8re inhabituelle ou de fa\u00e7on limit\u00e9e, y compris les expressions idiomatique et le jargon.<br><br>Ce crit\u00e8re de succ\u00e8s peut notamment \u00eatre b\u00e9n\u00e9fique aux utilisateurs ayant des d\u00e9ficiences cognitives, du langage ou des difficult\u00e9s d'apprentissage car ils peuvent avoir des difficult\u00e9s pour comprendre les mots ou les phrases ou leur contexte pour les comprendre. </li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Aucun lien ou d\u00e9finition n'est pr\u00e9sent afin de rendre compr\u00e9hensible les contenus.", 
        "description": "Pr\u00e9sence de liens ou de d\u00e9finitions permettant d'avoir acc\u00e8s aux informations n\u00e9cessaires \u00e0 la compr\u00e9hension des contenus.", 
        "solution": "<p> Tout segment de texte. </p><br /><br /><li>Si un segment de texte est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si le segment de texte est utilis\u00e9 de mani\u00e8re inhabituelle ou de fa\u00e7on limit\u00e9e, y compris les expressions idiomatiques et le jargon, poursuivre le test, sinon le test non applicable. </li>", 
        "thema": "Textes", 
        "name": "[TEX]-04"
    }, 
    "10220": {
        "goal": "<ul><li><h5>1.1.1 : Contenu non textuel : (A)</h5><br />Rendre le contenu non textuel accessible sous forme d'une alternative textuelle exploitable quel que soit le mode de perception de l'utilisateur (visuel, auditif, tactile).<br><br>Le contenu des \u00e9l\u00e9ments non textuels ne sera pas perceptible pour diff\u00e9rentes cat\u00e9gories d'utilisateurs tels que :<br><br><ul><li>Les personnes handicap\u00e9es visuelles acc\u00e9dant au site via la synth\u00e8se vocale d'un lecteur d'\u00e9cran,</li><li>Les utilisateurs ayant d\u00e9sactiv\u00e9 l'affichage des \u00e9l\u00e9ments graphiques ou multim\u00e9dias, pour r\u00e9duire notamment les temps de t\u00e9l\u00e9chargement des pages en bas d\u00e9bit.<br></li></ul><br>La pr\u00e9sence d'alternatives textuelles aux contenus non textuels permet \u00e9galement \u00e0 des robots d'indexation d'en exploiter l'information, ou \u00e0 des traducteurs automatiques d'en traduire le sens.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Des textes \u00e9crit dans une syntaxe cyptique sont pr\u00e9sent dans la page.", 
        "description": "Absence de syntaxes cryptiques par rapport au contenu de votre site.", 
        "solution": "<p> Tout segment de texte. </p><br /><br /><li>Si un segment de texte est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li> <li>Si le segment de texte est \u00e9crit dans une syntaxe ne permettant pas facilement sa compr\u00e9hension, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Textes", 
        "name": "[TEX]-05"
    }, 
    "10221": {
        "goal": "<ul><li><h5>3.1.6 : Prononciation : (AAA)</h5><br />Permettre aux utilisateurs en situation de handicap visuel, ou ayant des difficult\u00e9s de lecture, de comprendre le sens du contenu lorsque celui-ci d\u00e9pend de sa prononciation.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Des homographes h\u00e9t\u00e9rophones sont pr\u00e9sent dans la page.", 
        "description": "Pr\u00e9sence d'informations sur les mots par la mise \u00e0 disposition de leur prononciation phon\u00e9tique", 
        "solution": "<p> Tout segment de texte. </p><br /><br /><li>Si un segment de texte est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si la compr\u00e9hension de certains mots composant le segment de texte peut pr\u00e9senter des difficult\u00e9s lors de la lecture de celui-ci, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Textes", 
        "name": "[TEX]-06"
    }, 
    "10222": {
        "goal": "<ul><li><h5>3.3.3 : Suggestion apr\u00e8s une erreur : (AA)</h5><br />Permettre aux utilisateurs de corriger leurs erreurs de saisie. <br><br>Certains utilisateurs ayant un handicap sont susceptible de faire plus\r\nd'erreurs de saisie que les utilisateurs n'ayant aucun handicap. Il est\r\ndonc important de faciliter leur correction aux utilisateurs.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Aucune information n'est pr\u00e9sente pour faciliter la correction des erreurs de saisie.", 
        "description": "Pr\u00e9sence d'informations ou de suggestions facilitant la correction des erreurs de saisie", 
        "solution": "Tout \u00e9l\u00e9ment <code>form</code>.<br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est\r\npr\u00e9sent dans la page, poursuivre le test, sinon le test est non\r\napplicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment est soumis \u00e0  un contr\u00f4le de saisie avant d'\u00eatre trait\u00e9, poursuivre le test, sinon le test est non applicable.</li><li>Si des\r\nformats ou types de saisie sp\u00e9cifiques sont attendus, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Formulaires", 
        "name": "[FOR]-13"
    }, 
    "10223": {
        "goal": "<ul><li><h5>1.2.6 : Langue des signes (pr\u00e9-enregistr\u00e9e) : (AAA)</h5><br />Permettre aux utilisateurs en situation de handicap auditif et qui maitrisent la langue de signes de percevoir l'information sonore v\u00e9hicul\u00e9e par les contenus multim\u00e9dia. De plus, <br>un certains nombre de personnes ayant une d\u00e9fiance auditive\r\npeuvent \u00eatre en situation d'illettrisme ou d'analphab\u00e9tisme ce qui leur\r\nrend impossible la compr\u00e9hension d'un texte \u00e9crit. </li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Le site ne propose pas de version en langue des signes fran\u00e7aise facilitant la compr\u00e9hension des contenus pour des utilisateurs handicap\u00e9s auditifs.", 
        "description": "Pr\u00e9sence de version en langue des signes fran\u00e7aise facilitant la compr\u00e9hension des m\u00e9dias synchronis\u00e9s.", 
        "solution": "<p> Tout \u00e9l\u00e9ment : </p><ul> <li> <code>a</code>, </li> <li> <code>area</code>, </li> <li> <code>applet</code>, </li> <li> <code>embed</code>, </li> <li> <code>object</code>. </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Multim\u00e9dia", 
        "name": "[MUL]-31"
    }, 
    "10224": {
        "goal": "<ul><li><h5>1.2.6 : Langue des signes (pr\u00e9-enregistr\u00e9e) : (AAA)</h5><br />Permettre aux utilisateurs en situation de handicap auditif et qui maitrisent la langue de signes de percevoir l'information sonore v\u00e9hicul\u00e9e par les contenus multim\u00e9dia. De plus, <br>un certains nombre de personnes ayant une d\u00e9fiance auditive\r\npeuvent \u00eatre en situation d'illettrisme ou d'analphab\u00e9tisme ce qui leur\r\nrend impossible la compr\u00e9hension d'un texte \u00e9crit. </li><li><h5>3.1.5 : Niveau de lecture : (AAA)</h5><br />Permettre aux utilisateurs en situation de handicap cognitif d'acc\u00e9der au sens des contenus exigeant un niveau de lecture \u00e9lev\u00e9.<br><br>Cela permettra notamment aux utilisateurs ayant des difficult\u00e9s de compr\u00e9hension ou d'interpr\u00e9tation du texte \u00e9crit de comprendre l'information transmise par le biais d'une forme diff\u00e9rente de diffusion de l'information (visuelle, sonore, etc)</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Le contenu en langue des signes fran\u00e7aise ne restitue pas l'ensemble des informations disponibles dans les m\u00e9dias synchronis\u00e9s.", 
        "description": "Pertinence de la version en langue des signes fran\u00e7aise.", 
        "solution": "<p> Tout \u00e9l\u00e9ment : </p><ul> <li> <code>a</code>, </li> <li> <code>area</code>, </li> <li> <code>applet</code>, </li> <li> <code>embed</code>, </li> <li> <code>object</code>. </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si l'\u00e9l\u00e9ment permet de t\u00e9l\u00e9charger ou de mettre \u00e0 disposition une version compl\u00e9mentaire en langue des signes d'un contenu, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Multim\u00e9dia", 
        "name": "[MUL]-32"
    }, 
    "10225": {
        "goal": "<ul><li><h5>1.3.3 : Caract\u00e9ristiques sensorielles : (A)</h5><br />Rendre les instructions n\u00e9cessaires \u00e0 l'utilisation d'un contenu ind\u00e9pendantes des caract\u00e9ristiques visuelles de celui-ci. Notamment, permettre l'acc\u00e8s \u00e0 l'information aux personnes aveugles, mal voyantes,  utilisant des feuilles de styles personnalis\u00e9es</li><li><h5>1.4.1 : Utilisation de la couleur : (A)</h5><br />Rendre l'information v\u00e9hicul\u00e9e par la couleur perceptible pour tous les utilisateurs en situation de handicap visuel. Notamment, permettre l'acc\u00e8s \u00e0 l'information aux personnes aveugles,\r\nmal voyantes (d\u00e9ficiences de perception des couleurs, d\u00e9g\u00e9n\u00e9rescence maculaire li\u00e9e \u00e0 l'age,...) , utilisant des feuilles de styles personnalis\u00e9es ou ayant un \u00e9cran monochrome/avec un nombre de couleurs limit\u00e9.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Des \u00e9l\u00e9ments non textuels restituent de l'information par le biais de formes ou par la position d'\u00e9l\u00e9ment dans les \u00e9l\u00e9ments non textuels.", 
        "description": "Pr\u00e9sence d'un moyen de transmission de l'information autre qu'une utilisation de la forme ou la position dans les \u00e9l\u00e9ments non textuels.", 
        "solution": "    Tout \u00e9l\u00e9ment :\r\n<ul>\r\n<li><code>img</code>,</li>\r\n<li><code>input</code> de type image,</li>\r\n<li><code>applet</code>,</li>\r\n<li><code>object</code>,</li>\r\n<li><code>embed</code>,</li>\r\n</ul>\r\nou code javascript g\u00e9n\u00e9rant un des \u00e9l\u00e9ments pr\u00e9c\u00e9dents.<br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent ou utilis\u00e9 dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment affiche des zones dont leur forme ou leur position donne de l'information, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Textes", 
        "name": "[TEX]-07"
    }, 
    "10226": {
        "goal": "<ul><li><h5>1.3.3 : Caract\u00e9ristiques sensorielles : (A)</h5><br />Rendre les instructions n\u00e9cessaires \u00e0 l'utilisation d'un contenu ind\u00e9pendantes des caract\u00e9ristiques visuelles de celui-ci. Notamment, permettre l'acc\u00e8s \u00e0 l'information aux personnes aveugles, mal voyantes,  utilisant des feuilles de styles personnalis\u00e9es</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Des \u00e9l\u00e9ments non textuels font r\u00e9f\u00e9rence \u00e0 un autre \u00e9l\u00e9ment dans la page par sa forme ou sa position.", 
        "description": "Pr\u00e9sence d'un autre moyen que la forme ou la position pour identifier un contenu auquel il est fait r\u00e9f\u00e9rence dans un \u00e9l\u00e9ment non textuel.", 
        "solution": "Tout \u00e9l\u00e9ment :\r\n<ul>\r\n<li><code>img</code>,</li>\r\n<li><code>input</code> de type image,</li>\r\n<li><code>applet</code>,</li>\r\n<li><code>object</code>,</li>\r\n<li><code>embed</code>,</li>\r\n</ul>\r\nou code javascript g\u00e9n\u00e9rant un des \u00e9l\u00e9ments pr\u00e9c\u00e9dents.<br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent ou utilis\u00e9 dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment permet d'afficher un texte de fa\u00e7on graphique ou poss\u00e8de un attribut alt non vide, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si le texte graphique ou son alternative mentionne une forme ou une position et fait r\u00e9f\u00e9rence \u00e0 un contenu de la page ou du site, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Textes", 
        "name": "[TEX]-08"
    }, 
    "10227": {
        "goal": "<ul><li><h5>1.3.3 : Caract\u00e9ristiques sensorielles : (A)</h5><br />Rendre les instructions n\u00e9cessaires \u00e0 l'utilisation d'un contenu ind\u00e9pendantes des caract\u00e9ristiques visuelles de celui-ci. Notamment, permettre l'acc\u00e8s \u00e0 l'information aux personnes aveugles, mal voyantes,  utilisant des feuilles de styles personnalis\u00e9es</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Un texte fait r\u00e9f\u00e9rence \u00e0 un autre \u00e9l\u00e9ment dans la page par sa forme ou sa position.", 
        "description": "Pr\u00e9sence d'un autre moyen que la forme ou la position pour identifier un contenu auquel il est fait r\u00e9f\u00e9rence textuellement.", 
        "solution": "<p>Tout segment de texte mentionnant une forme ou une position (mot, groupe de mots, phrase, bloc de texte), contenu ou non dans un \u00e9l\u00e9ment HTML, ou g\u00e9n\u00e9r\u00e9 via du code javascript ou des feuilles de styles.</p><br /><br /><li>Si le segment de texte mentionn\u00e9 dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si le segment de texte mentionne une forme ou une position et fait r\u00e9f\u00e9rence \u00e0 un contenu de la page ou du site, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Textes", 
        "name": "[TEX]-09"
    }, 
    "10228": {
        "goal": "<ul><li><h5>1.3.1 : Information et relations : (A)</h5><br />Rendre l'information ind\u00e9pendante de sa mise en forme visuelle ou sonore.<br><br>Ce crit\u00e8re de succ\u00e8s est b\u00e9n\u00e9fique \u00e0 des personnes ayant diff\u00e9rents types de handicaps. Les personnes aveugles ou sourdes et aveugles utilisant un lecteur d'\u00e9cran ou un terminal braille auront acc\u00e8s \u00e0 l'information disponible par la couleur lorsque celle-ci est \u00e9galement mise \u00e0 disposition de fa\u00e7on textuelle.<br>Il vise notamment \u00e0 permettre \u00e0 ce que les agents utilisateurs restituent une information en fonction des besoins de l'utilisateur et cela ind\u00e9pendamment de sa mise en forme visuelle ou sonore. </li><li><h5>1.3.2 : Ordre s\u00e9quentiel logique : (A)</h5><br />Rendre l'ordre de restitution de l'information ind\u00e9pendant de sa mise en forme visuelle ou sonore lorsqu'il est lui-m\u00eame porteur de sens. <br><br>Les logiciels de lecture d'\u00e9cran, les logiciels automatiques de lecture et certains navigateurs textes lisent ou affichent les informations de mani\u00e8re lin\u00e9aire (dans le cas des tableaux cellule apr\u00e8s cellule, ligne apr\u00e8s ligne). C'est pourquoi l'information doit toujours \u00eatre logiquement ordonn\u00e9e, m\u00eame en mode de lecture lin\u00e9aire, afin que le contenu reste compr\u00e9hensible</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Des tableaux ou des colonnes sont simul\u00e9s \u00e0 l'aide d'espace ins\u00e9cables.", 
        "description": "Absence de tableaux de donn\u00e9es ou de colonnes format\u00e9s \u00e0 l'aide de texte", 
        "solution": "<p>Toute suite de caract\u00e8res ins\u00e9cables &nbsp; ou toute suite d'espaces typographiques dans un \u00e9l\u00e9ment pre.<br></p><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Tableaux", 
        "name": "[TAB]-05"
    }, 
    "10229": {
        "goal": "<ul><li><h5>1.3.2 : Ordre s\u00e9quentiel logique : (A)</h5><br />Rendre l'ordre de restitution de l'information ind\u00e9pendant de sa mise en forme visuelle ou sonore lorsqu'il est lui-m\u00eame porteur de sens. <br><br>Les logiciels de lecture d'\u00e9cran, les logiciels automatiques de lecture et certains navigateurs textes lisent ou affichent les informations de mani\u00e8re lin\u00e9aire (dans le cas des tableaux cellule apr\u00e8s cellule, ligne apr\u00e8s ligne). C'est pourquoi l'information doit toujours \u00eatre logiquement ordonn\u00e9e, m\u00eame en mode de lecture lin\u00e9aire, afin que le contenu reste compr\u00e9hensible</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Les lettres d'un mot sont s\u00e9par\u00e9es par des espaces ins\u00e9cables.", 
        "description": "Absence d'espaces utilis\u00e9s pour s\u00e9parer les lettres d'un mot.", 
        "solution": "<p>Tout espace typographique ou \u00e9l\u00e9ment vide utilis\u00e9 pour simuler une espace.</p><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>", 
        "thema": "Pr\u00e9sentation", 
        "name": "[PR\u00e9]-04"
    }, 
    "10230": {
        "goal": "<ul><li><h5>1.1.1 : Contenu non textuel : (A)</h5><br />Rendre le contenu non textuel accessible sous forme d'une alternative textuelle exploitable quel que soit le mode de perception de l'utilisateur (visuel, auditif, tactile).<br><br>Le contenu des \u00e9l\u00e9ments non textuels ne sera pas perceptible pour diff\u00e9rentes cat\u00e9gories d'utilisateurs tels que :<br><br><ul><li>Les personnes handicap\u00e9es visuelles acc\u00e9dant au site via la synth\u00e8se vocale d'un lecteur d'\u00e9cran,</li><li>Les utilisateurs ayant d\u00e9sactiv\u00e9 l'affichage des \u00e9l\u00e9ments graphiques ou multim\u00e9dias, pour r\u00e9duire notamment les temps de t\u00e9l\u00e9chargement des pages en bas d\u00e9bit.<br></li></ul><br>La pr\u00e9sence d'alternatives textuelles aux contenus non textuels permet \u00e9galement \u00e0 des robots d'indexation d'en exploiter l'information, ou \u00e0 des traducteurs automatiques d'en traduire le sens.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Les contenus sonores, visuel anim\u00e9 ou synchronis\u00e9s ne sont pas identifiable par une information synth\u00e9tique d\u00e9crivant leur contenu.", 
        "description": "Acc\u00e8s \u00e0 une information synth\u00e9tique pour les contenus sonores, visuel anim\u00e9 ou les m\u00e9dias synchronis\u00e9s", 
        "solution": "<p> Tout \u00e9l\u00e9ment : </p>\r\n<ul><li> <code>img</code> au format <acronym title=\"Graphics Interchange Format\" xml:lang=\"en\" lang=\"en\">gif</acronym> , <abbr title=\"Animated Portable Network Graphics\" xml:lang=\"en\" lang=\"en\">apng</abbr> ou <abbr title=\"Multiple-image Network Graphics\" xml:lang=\"en\" lang=\"en\">mng</abbr>, </li><li> <code>applet</code>,</li><li><code>object</code></li><li><code>embed</code></li><li>tout code javascript g\u00e9n\u00e9rant un des \u00e9l\u00e9ments pr\u00e9c\u00e9dents. </li></ul>\r\n<br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est\r\npr\u00e9sent dans la page, poursuivre le test, sinon le test est non\r\napplicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment n'est pas contenu dans un \u00e9l\u00e9ment a ou button, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment apporte une information, poursuivre le test, sinon le test est non\r\napplicable.</li>", 
        "thema": "Multim\u00e9dia", 
        "name": "[MUL]-01"
    }, 
    "10231": {
        "goal": "<ul><li><h5>1.2.7 : Audio-description \u00e9tendue (pr\u00e9-enregistr\u00e9e) : (AAA)</h5><br />Permettre aux utilisateurs en situation de handicap visuel de percevoir l'information visuelle v\u00e9hicul\u00e9e par les contenus multim\u00e9dia.<br><br>Toutes les aides techniques ne sont pas en mesure de lire\r\nautomatiquement la description textuelle des contenus multim\u00e9dias. Il\r\nest donc n\u00e9cessaire de la compl\u00e9ter d'une description audio. Ainsi, une\r\npersonne pr\u00e9sentant une d\u00e9ficience visuelle ou ayant des probl\u00e8mes de\r\ncompr\u00e9hension de l'\u00e9crit pourra profiter de cette description audio.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Aucune description audio synchronis\u00e9e \u00e9tendue n'est pr\u00e9sente.", 
        "description": "Pr\u00e9sence d'une description audio synchronis\u00e9e \u00e9tendue pour les contenus visuels anim\u00e9s ou les m\u00e9dias synchronis\u00e9s.", 
        "solution": "<p> Tout \u00e9l\u00e9ment : </p><ul> <li> <code>a</code>, </li> <li> <code>area</code>, </li> <li> <code>applet</code>,</li><li> <code>object</code>,</li><li> <code>embed</code>,</li><li>tout code javascript g\u00e9n\u00e9rant un des \u00e9l\u00e9ments pr\u00e9c\u00e9dents ou d\u00e9clenchant un t\u00e9l\u00e9chargement. </li> </ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est\r\npr\u00e9sent ou utilis\u00e9 dans la page, poursuivre le test, sinon le test est\r\nnon applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment permet de t\u00e9l\u00e9charger ou de restituer un contenu\r\nvisuel anim\u00e9 ou un m\u00e9dia synchronis\u00e9 qui apporte de l'information, poursuivre le\r\ntest, sinon le test est non applicable.</li>\r\n<li>Si le\r\ncontenu visuel anim\u00e9 ou le m\u00e9dia synchronis\u00e9 n'est pas une\r\nalternative anim\u00e9e ou synchronis\u00e9e \u00e0  un contenu textuel\r\npr\u00e9sent dans la page,  qui est identifi\u00e9e en tant\r\nque tel et qui n'apporte pas plus d'information que le contenu\r\ntextuel, poursuivre le test, sinon le test est non applicable.</li><li>Si le contenu de l'\u00e9l\u00e9ment n\u00e9cessite l'utilisation d'une\r\ndescription audio pour le rendre compr\u00e9hensible, poursuivre le test,\r\nsinon le test est non applicable.</li><li>Si la dur\u00e9e des pauses dans la piste sonore du contenu visuel anim\u00e9 ou du m\u00e9dia synchronis\u00e9 ne permet pas de restituer l'ensemble des informations n\u00e9cessaire \u00e0 la compr\u00e9hension de l'\u00e9l\u00e9ment,\r\npoursuivre le test, sinon le test est non applicable</li>", 
        "thema": "Multim\u00e9dia", 
        "name": "[MUL]-07"
    }, 
    "10232": {
        "goal": "<ul><li><h5>1.4.6 : Contraste (am\u00e9lior\u00e9) : (AAA)</h5><br />Rendre perceptibles les contenus visuels ind\u00e9pendamment de la capacit\u00e9 \u00e0 percevoir les contrastes de couleurs.<br><br>La\r\nsaturation et la teinte n'ont que peu d'incidence pour les personnes ayant des d\u00e9ficiences de perception des couleurs&nbsp;\r\n(Knoblauch et al., 1991). Elle peut par contre affecter la\r\nperception de la luminosit\u00e9 des couleurs entre elles et donc le\r\ncontraste per\u00e7u entre une couleur de premier plan et d'arri\u00e8re plan.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Le rapport de contraste est insuffisant pour certains textes contenu dans des \u00e9l\u00e9ments non textuels.", 
        "description": "Valeur du rapport de contraste du texte contenu dans des \u00e9l\u00e9ments non textuels. (am\u00e9lior\u00e9e)", 
        "solution": "<p> Tout \u00e9l\u00e9ment : </p><ul><li> <code>img</code>, </li><li> <code>input</code> de type image, </li><li> <code>applet</code>, </li><li> <code>object</code>, </li><li> <code>embed</code>, </li></ul><p> ou propri\u00e9t\u00e9 <abbr title=\"Cascading Style Sheets\" xml:lang=\"en\" lang=\"en\">CSS</abbr> g\u00e9n\u00e9rant un des \u00e9l\u00e9ments pr\u00e9c\u00e9dents,<br> ou code javascript g\u00e9n\u00e9rant un des \u00e9l\u00e9ments pr\u00e9c\u00e9dents. </p><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est\r\npr\u00e9sent ou utilis\u00e9 dans la page, poursuivre le test, sinon le test est\r\nnon applicable. </li>\r\n<li>Si l'\u00e9l\u00e9ment permet d'afficher du texte qui apporte de\r\nl'information, n'est pas un logo ou un texte faisant parti d'un logo et\r\nqu'aucun m\u00e9canisme permettant d'afficher l'\u00e9l\u00e9ment avec un rapport de\r\ncontraste suffisant n'est pr\u00e9sent,\r\npoursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si la taille finale du texte affich\u00e9e est inf\u00e9rieure \u00e0 150% ou 120% gras de la taille du texte par d\u00e9faut sp\u00e9cifi\u00e9e par les\r\nstyles de la page, ou, en son absence, de la taille fix\u00e9e couramment\r\npar un navigateur, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si la couleur du texte et celle de son arri\u00e8re plan ont \u00e9t\u00e9\r\nd\u00e9finies par la charte graphique du service de communication publique\r\nen ligne, et que cette d\u00e9finition est ult\u00e9rieure \u00e0 publication du <abbr title=\"R\u00e9f\u00e9rentiel G\u00e9n\u00e9ral d'Accessibilit\u00e9 pour les Administrations\"> RGAA</abbr>, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Couleurs", 
        "name": "[COU]-11"
    }, 
    "10233": {
        "goal": "<ul><li><h5>1.4.6 : Contraste (am\u00e9lior\u00e9) : (AAA)</h5><br />Rendre perceptibles les contenus visuels ind\u00e9pendamment de la capacit\u00e9 \u00e0 percevoir les contrastes de couleurs.<br><br>La\r\nsaturation et la teinte n'ont que peu d'incidence pour les personnes ayant des d\u00e9ficiences de perception des couleurs&nbsp;\r\n(Knoblauch et al., 1991). Elle peut par contre affecter la\r\nperception de la luminosit\u00e9 des couleurs entre elles et donc le\r\ncontraste per\u00e7u entre une couleur de premier plan et d'arri\u00e8re plan.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Le rapport de contraste est insuffisant pour certains textes contenu dans des \u00e9l\u00e9ments non textuels utilis\u00e9s comme fond d'\u00e9l\u00e9ments HTML.", 
        "description": "Valeur du rapport de contraste du texte contenu\r\ndans des \u00e9l\u00e9ments non textuels utilis\u00e9s comme fond d'\u00e9l\u00e9ments HTML.\r\n(am\u00e9lior\u00e9e)", 
        "solution": "<p> Tout \u00e9l\u00e9ment <abbr title=\"Hypertext Markup Language\" xml:lang=\"en\" lang=\"en\">HTML</abbr> ayant des styles associ\u00e9s, utilisant au moins l'une des propri\u00e9t\u00e9s <abbr title=\"Cascading Style Sheets\" xml:lang=\"en\" lang=\"en\">CSS</abbr> suivantes : </p><ul><li> <code>background</code>, </li><li> <code>background-image</code>, </li><li> <code>list</code>, </li><li> <code>list-style-image.</code> </li></ul><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est\r\npr\u00e9sent dans la page, poursuivre le test, sinon le test est non\r\napplicable. </li><li>Si l'\u00e9l\u00e9ment permet d'afficher du texte qui\r\napporte de\r\nl'information, n'est pas un logo ou un texte faisant parti d'un logo et\r\nqu'aucun m\u00e9canisme permettant d'afficher l'\u00e9l\u00e9ment avec un rapport de\r\ncontraste suffisant n'est pr\u00e9sent,\r\npoursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si la taille finale du texte affich\u00e9e est inf\u00e9rieure \u00e0 150% ou 120% gras de la taille du texte par d\u00e9faut sp\u00e9cifi\u00e9e par les\r\nstyles de la page, ou, en son absence, de la taille fix\u00e9e couramment\r\npar un navigateur, poursuivre le test, sinon le test est non applicable. </li>\r\n<li>Si la couleur du texte et celle de son arri\u00e8re plan ont \u00e9t\u00e9\r\nd\u00e9finies par la charte graphique du service de communication publique\r\nen ligne, et que cette d\u00e9finition est ult\u00e9rieure \u00e0 publication du <abbr title=\"R\u00e9f\u00e9rentiel G\u00e9n\u00e9ral d'Accessibilit\u00e9 pour les Administrations\"> RGAA</abbr>, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Couleurs", 
        "name": "[COU]-12"
    }, 
    "10234": {
        "goal": "<ul><li><h5>1.4.6 : Contraste (am\u00e9lior\u00e9) : (AAA)</h5><br />Rendre perceptibles les contenus visuels ind\u00e9pendamment de la capacit\u00e9 \u00e0 percevoir les contrastes de couleurs.<br><br>La\r\nsaturation et la teinte n'ont que peu d'incidence pour les personnes ayant des d\u00e9ficiences de perception des couleurs&nbsp;\r\n(Knoblauch et al., 1991). Elle peut par contre affecter la\r\nperception de la luminosit\u00e9 des couleurs entre elles et donc le\r\ncontraste per\u00e7u entre une couleur de premier plan et d'arri\u00e8re plan.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Le rapport de contraste est insuffisant pour certains textes.", 
        "description": "Valeur du rapport de contraste du texte contenu dans un segment de texte. (am\u00e9lior\u00e9e)", 
        "solution": "<p> Tout segment de texte (mot, groupe de mots, phrase, bloc de texte), contenu ou non dans un \u00e9l\u00e9ment <abbr title=\"Hypertext Markup Language\" xml:lang=\"en\" lang=\"en\">HTML</abbr>,\r\nou g\u00e9n\u00e9r\u00e9 via du code javascript ou des feuilles de styles, et mis en\r\ncouleur par des styles utilisant au moins l'une des propri\u00e9t\u00e9s <abbr title=\"Cascading Style Sheets\" xml:lang=\"en\" lang=\"en\">CSS</abbr> suivantes : </p><ul><li> <code>color</code>, </li><li> <code>background</code>, </li><li> <code>background-color</code>, </li><li> <code>background-image</code>, </li><li> <code>content</code>, </li><li> <code>list</code>, </li><li> <code>list-style-image</code>. </li></ul><br /><br /><li>Si le segment de texte mentionn\u00e9 dans le champ d'application est\r\npr\u00e9sent dans la page, poursuivre le test, sinon le test est non\r\napplicable.</li><li>Si le segment de texte apporte de\r\nl'information, n'est pas un logo ou un texte faisant parti d'un logo et\r\nqu'aucun m\u00e9canisme permettant d'afficher l'\u00e9l\u00e9ment avec un rapport de\r\ncontraste suffisant n'est pr\u00e9sent,\r\npoursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si la taille finale du texte affich\u00e9e est inf\u00e9rieure \u00e0 150% ou 120% gras de la taille du texte par d\u00e9faut sp\u00e9cifi\u00e9e par les\r\nstyles de la page, ou, en son absence, de la taille fix\u00e9e couramment\r\npar un navigateur, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Couleurs", 
        "name": "[COU]-13"
    }, 
    "10235": {
        "goal": "<ul><li><h5>1.4.6 : Contraste (am\u00e9lior\u00e9) : (AAA)</h5><br />Rendre perceptibles les contenus visuels ind\u00e9pendamment de la capacit\u00e9 \u00e0 percevoir les contrastes de couleurs.<br><br>La\r\nsaturation et la teinte n'ont que peu d'incidence pour les personnes ayant des d\u00e9ficiences de perception des couleurs&nbsp;\r\n(Knoblauch et al., 1991). Elle peut par contre affecter la\r\nperception de la luminosit\u00e9 des couleurs entre elles et donc le\r\ncontraste per\u00e7u entre une couleur de premier plan et d'arri\u00e8re plan.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Le rapport de contraste est insuffisant pour certains textes agrandi contenu dans des \u00e9l\u00e9ments non textuels.", 
        "description": "Valeur du rapport de contraste du texte agrandi contenu dans des \u00e9l\u00e9ments non textuels. (am\u00e9lior\u00e9e)", 
        "solution": "<p> Tout \u00e9l\u00e9ment :<br> </p><ul><li> <code>img</code>, </li><li> <code>input</code> de type image, </li><li> <code>applet</code>, </li><li> <code>object</code>, </li><li> <code>embed</code>, </li></ul><p> ou propri\u00e9t\u00e9 <abbr title=\"Cascading Style Sheets\" xml:lang=\"en\" lang=\"en\">CSS</abbr> g\u00e9n\u00e9rant un des \u00e9l\u00e9ments pr\u00e9c\u00e9dents,<br> ou code javascript g\u00e9n\u00e9rant un des \u00e9l\u00e9ments pr\u00e9c\u00e9dents. </p><br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est\r\npr\u00e9sent ou utilis\u00e9 dans la page, poursuivre le test, sinon le test est\r\nnon applicable. </li><li>Si l'\u00e9l\u00e9ment permet d'afficher du texte qui apporte de\r\nl'information, n'est pas un logo ou un texte faisant parti d'un logo et\r\nqu'aucun m\u00e9canisme permettant d'afficher l'\u00e9l\u00e9ment avec un rapport de\r\ncontraste suffisant n'est pr\u00e9sent,\r\npoursuivre le test, sinon le test est non applicable.</li><li>Si\r\nla taille finale du texte affich\u00e9e est sup\u00e9rieure ou \u00e9gale \u00e0 150% ou\r\n120% gras de la taille du texte par d\u00e9faut sp\u00e9cifi\u00e9e par les\r\nstyles de la page, ou, en son absence, de la taille fix\u00e9e couramment\r\npar un navigateur, poursuivre le test, sinon le test est non\r\napplicable. </li><li>Si\r\nla couleur du texte et celle de son arri\u00e8re plan ont \u00e9t\u00e9 d\u00e9finies par\r\nla charte graphique du service de communication publique en ligne, et\r\nque cette d\u00e9finition est ult\u00e9rieure \u00e0 la publication du <abbr title=\"R\u00e9f\u00e9rentiel G\u00e9n\u00e9ral d'Accessibilit\u00e9 pour les Administrations\"> RGAA</abbr>, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Couleurs", 
        "name": "[COU]-14"
    }, 
    "10236": {
        "goal": "<ul><li><h5>1.4.6 : Contraste (am\u00e9lior\u00e9) : (AAA)</h5><br />Rendre perceptibles les contenus visuels ind\u00e9pendamment de la capacit\u00e9 \u00e0 percevoir les contrastes de couleurs.<br><br>La\r\nsaturation et la teinte n'ont que peu d'incidence pour les personnes ayant des d\u00e9ficiences de perception des couleurs&nbsp;\r\n(Knoblauch et al., 1991). Elle peut par contre affecter la\r\nperception de la luminosit\u00e9 des couleurs entre elles et donc le\r\ncontraste per\u00e7u entre une couleur de premier plan et d'arri\u00e8re plan.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Le rapport de contraste est insuffisant pour certains textes agrandi contenu dans des \u00e9l\u00e9ments non textuels utilis\u00e9s comme fond d'\u00e9l\u00e9ments HTML.", 
        "description": "Valeur du rapport de contraste du texte agrandi contenu\r\ndans des \u00e9l\u00e9ments non textuels utilis\u00e9s comme fond d'\u00e9l\u00e9ments HTML.\r\n(am\u00e9lior\u00e9e)", 
        "solution": "<p> Tout \u00e9l\u00e9ment <abbr title=\"Hypertext Markup Language\" xml:lang=\"en\" lang=\"en\">HTML</abbr> ayant des styles associ\u00e9s, utilisant au moins l'une des propri\u00e9t\u00e9s <abbr title=\"Cascading Style Sheets\" xml:lang=\"en\" lang=\"en\">CSS</abbr> suivantes : </p>\r\n<ul><li> <code>background</code>, </li><li> <code>background-image</code>, </li><li> <code>list</code>, </li><li> <code>list-style-image.</code> </li></ul>\r\n<br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est\r\npr\u00e9sent dans la page, poursuivre le test, sinon le test est non\r\napplicable. </li><li>Si l'\u00e9l\u00e9ment permet d'afficher du texte qui apporte de\r\nl'information, n'est pas un logo ou un texte faisant parti d'un logo et\r\nqu'aucun m\u00e9canisme permettant d'afficher l'\u00e9l\u00e9ment avec un rapport de\r\ncontraste suffisant n'est pr\u00e9sent,\r\npoursuivre le test, sinon le test est non applicable.</li><li>Si la taille finale du texte affich\u00e9e est sup\u00e9rieure ou \u00e9gale \u00e0 150% ou\r\n120% gras de la taille du texte par d\u00e9faut sp\u00e9cifi\u00e9e par les\r\nstyles de la page, ou, en son absence, de la taille fix\u00e9e couramment\r\npar un navigateur, poursuivre le test, sinon le test est non\r\napplicable.</li><li>Si\r\nla couleur du texte et celle de son arri\u00e8re plan ont \u00e9t\u00e9 d\u00e9finies par\r\nla charte graphique du service de communication publique en ligne, et\r\nque cette d\u00e9finition est ult\u00e9rieure \u00e0 publication du <abbr title=\"R\u00e9f\u00e9rentiel G\u00e9n\u00e9ral d'Accessibilit\u00e9 pour les Administrations\"> RGAA</abbr>, poursuivre le test, sinon le test est non applicable. </li>", 
        "thema": "Couleurs", 
        "name": "[COU]-15"
    }, 
    "10237": {
        "goal": "<ul><li><h5>1.4.6 : Contraste (am\u00e9lior\u00e9) : (AAA)</h5><br />Rendre perceptibles les contenus visuels ind\u00e9pendamment de la capacit\u00e9 \u00e0 percevoir les contrastes de couleurs.<br><br>La\r\nsaturation et la teinte n'ont que peu d'incidence pour les personnes ayant des d\u00e9ficiences de perception des couleurs&nbsp;\r\n(Knoblauch et al., 1991). Elle peut par contre affecter la\r\nperception de la luminosit\u00e9 des couleurs entre elles et donc le\r\ncontraste per\u00e7u entre une couleur de premier plan et d'arri\u00e8re plan.</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Le rapport de contraste est insuffisant pour certains textes agrandi.", 
        "description": "Valeur du rapport de contraste du texte agrandi contenu dans un segment de texte. (am\u00e9lior\u00e9e)", 
        "solution": "<p> Tout segment de texte (mot, groupe de mots, phrase, bloc de texte), contenu ou non dans un \u00e9l\u00e9ment <abbr title=\"Hypertext Markup Language\" xml:lang=\"en\" lang=\"en\">HTML</abbr>,\r\nou g\u00e9n\u00e9r\u00e9 via du code javascript ou des feuilles de styles, et mis en\r\ncouleur par des styles utilisant au moins l'une des propri\u00e9t\u00e9s <abbr title=\"Cascading Style Sheets\" xml:lang=\"en\" lang=\"en\">CSS</abbr> suivantes : </p><ul><li> <code>color</code>, </li><li> <code>background</code>, </li><li> <code>background-color</code>, </li><li> <code>background-image</code>, </li><li> <code>content</code>, </li><li> <code>list</code>, </li><li> <code>list-style-image</code>. </li></ul><br /><br /><li>Si le segment de texte mentionn\u00e9 dans le champ d'application est\r\npr\u00e9sent dans la page, poursuivre le test, sinon le test est non\r\napplicable. </li><li>Si le segment de texte apporte de\r\nl'information, n'est pas un logo ou un texte faisant parti d'un logo et\r\nqu'aucun m\u00e9canisme permettant d'afficher l'\u00e9l\u00e9ment avec un rapport de\r\ncontraste suffisant n'est pr\u00e9sent,\r\npoursuivre le test, sinon le test est non applicable.</li><li>Si la taille finale du texte affich\u00e9e est sup\u00e9rieure ou \u00e9gale \u00e0 150% ou\r\n120% gras de la taille du texte par d\u00e9faut sp\u00e9cifi\u00e9e par les\r\nstyles de la page, ou, en son absence, de la taille fix\u00e9e couramment\r\npar un navigateur, poursuivre le test, sinon le test est non\r\napplicable.</li>", 
        "thema": "Couleurs", 
        "name": "[COU]-16"
    }, 
    "10238": {
        "goal": "<ul><li><h5>1.4.4 : Redimensionnement du texte : (AA)</h5><br />Permettre aux utilisateurs en situation de handicap visuel de recourir \u00e0 l'agrandissement des textes sans perte d'information et sans avoir recours \u00e0 une technologie d'assistance</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Certains textes ne peuvent \u00eatre agrandis avec le zoom typographique de Firefox sans provoquer des pertes d'information dues \u00e0 des chevauchements de contenu.", 
        "description": "Lisibilit\u00e9 du document en cas d'agrandissement de la taille du texte.", 
        "solution": "Tout le document<br /><br /><li><br></li>", 
        "thema": "Pr\u00e9sentation", 
        "name": "[PR\u00e9]-13"
    }, 
    "10239": {
        "goal": "<ul><li><h5>1.4.4 : Redimensionnement du texte : (AA)</h5><br />Permettre aux utilisateurs en situation de handicap visuel de recourir \u00e0 l'agrandissement des textes sans perte d'information et sans avoir recours \u00e0 une technologie d'assistance</li></ul>", 
        "checklist": {
            "id": 9, 
            "name": "RGAA v2.2.1"
        }, 
        "explanation": "Des unit\u00e9s absolues qui ne sont pas destin\u00e9es au rendu \u00e0 l'\u00e9cran sont pr\u00e9sentes dans certains styles CSS.", 
        "description": "Absence d'unit\u00e9s absolues ou de pixel dans les feuilles de styles pour la taille de caract\u00e8re des \u00e9l\u00e9ments de formulaire.", 
        "solution": "Toute propri\u00e9t\u00e9 CSS contenant une\r\nvaleur non nulle exprim\u00e9e en :<br><br> \r\n<ul><li>pt (point), \r\n\r\n    </li><li>pc (pica), \r\n    \r\n    </li><li>px\r\n    (pixel), \r\n    </li><li>cm (centim\u00e8tre), \r\n\r\n    </li><li>mm (millim\u00e8tre), \r\n    \r\n    </li><li>in (pouce). \r\n    \r\n</li></ul>\r\n<br /><br /><li>Si l'une des valeurs mentionn\u00e9es dans le champ d'application est pr\u00e9sente dans la feuille de style, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si la propri\u00e9t\u00e9 CSS utilisant cette valeur est la propri\u00e9t\u00e9 font-size ou font, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si cette propri\u00e9t\u00e9 est utilis\u00e9e pour styler un \u00e9l\u00e9ment de formulaire (input, textarea, select, button), poursuivre le test, sinon le test est non applicable.</li>\r\n", 
        "thema": "Pr\u00e9sentation", 
        "name": "[PR\u00e9]-14"
    }
};



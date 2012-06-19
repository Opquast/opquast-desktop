checklists = {
  "10242": {
    "goal": "<ul><li><h5>2.2.1 : R\u00e9glage du d\u00e9lai : (A)</h5><br />Rendre les contenus accessibles quelles que soient les contraintes de temps de consultation ou d'interaction dues \u00e0 des situations de handicap.<br><br>Certaines personnes souffrant\r\nd'incapacit\u00e9s mentales ou visuelles peuvent avoir besoin de plus de temps pour lire un texte. Les limites de temps peuvent rendre impossible la lecture ou la manipulation de l'interface pour ces personne.</li><li><h5>2.2.2 : Mettre en pause, arr\u00eater, masquer : (A)</h5><br />Rendre les contenus accessibles sans interf\u00e9rences dues \u00e0 une animation susceptible de g\u00eaner l'utilisateur. <br><br>Certaines personnes souffrant d'incapacit\u00e9s mentales ou visuelles ne peuvent pas lire un texte lorsqu'il clignote ou lorsqu'il bouge. Les clignotements/mouvements peuvent causer une distraction telle que le reste de la page devient illisible pour des gens souffrant de handicap cognitif.</li></ul>", 
    "checklist": {
      "id": 9, 
      "name": "RGAA v2.2.1"
    }, 
    "explanation": "Un \u00e9l\u00e9ment d\u00e9clenchant un rafraichissement automatique de la page est pr\u00e9sent.", 
    "description": "Absence d'\u00e9l\u00e9ments provoquant un rafra\u00eechissement automatique de la page ne pouvant pas \u00eatre arr\u00eat\u00e9", 
    "solution": "Tout \u00e9l\u00e9ment :\r\n<br>\r\n<br>\r\n<ul><li>script cot\u00e9 serveur (expiration de session, ent\u00eate http refresh)\r\n  </li><li>applet,\r\n  </li><li>object,\r\n  </li><li>embed.</li></ul>\r\n<br /><br /><li>Si l'un des \u00e9l\u00e9ments mentionn\u00e9s dans le champ d'application est pr\u00e9sent dans la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si l'\u00e9l\u00e9ment provoque un rafra\u00eechissement automatique de la page, poursuivre le test, sinon le test est non applicable.</li>\r\n<li>Si le rafra\u00eechissement automatique ne pourrait \u00eatre supprim\u00e9e sans changer fondamentalement l'information ou les fonctionnalit\u00e9s du contenu, poursuivre le test, sinon le test est non applicable. </li>", 
    "name": "[NAV]-09"
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
    "name": "28"
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
    "name": "75"
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
    "name": "30"
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
    "name": "36"
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
    "name": "77"
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
    "name": "39"
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
    "name": "42"
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
    "name": "49"
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
    "name": "53"
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
    "name": "60"
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
    "name": "63"
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
    "name": "21"
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
    "name": "84"
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
    "name": "86"
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
    "name": "89"
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
    "name": "20"
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
    "name": "97"
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
    "name": "55"
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
    "name": "5"
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
    "name": "100"
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
    "name": "1.1.1"
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
    "name": "119"
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
    "name": "121"
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
    "name": "126"
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
    "name": "128"
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
    "name": "65"
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
    "name": "137"
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
    "name": "46"
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
    "name": "142"
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
    "name": "32"
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
    "name": "147"
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
    "name": "4"
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
    "name": "59"
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
    "name": "152"
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
    "name": "70"
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
    "name": "159"
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
    "name": "162"
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
    "name": "1"
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
    "name": "8"
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
    "name": "15"
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
    "name": "30"
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
    "name": "178"
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
    "name": "180"
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
    "name": "185"
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
    "name": "29"
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
    "name": "6"
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
    "name": "5.3.1"
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
    "name": "191"
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
    "name": "17"
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
    "name": "18"
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
    "name": "19"
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
    "name": "197"
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
    "name": "21"
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
    "name": "203"
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
    "name": "16"
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
    "name": "206"
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
    "name": "2"
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
    "name": "210"
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
    "name": "7"
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
    "name": "213"
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
    "name": "217"
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
    "name": "25"
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
    "name": "10"
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
    "name": "11"
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
    "name": "14"
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
    "name": "22"
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
    "name": "26"
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
    "name": "13.15.2"
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
    "name": "34"
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
    "name": "35"
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
    "name": "38"
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
    "name": "3"
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
    "name": "40"
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
    "name": "41"
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
    "name": "42"
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
    "name": "45"
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
    "name": "7.3.3"
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
    "name": "47"
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
    "name": "49"
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
    "name": "7.6.1"
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
    "name": "29"
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
    "name": "33"
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
    "name": "32"
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
    "name": "12"
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
    "name": "8.6.1"
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
    "name": "5"
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
    "name": "42"
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
    "name": "24"
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
    "name": "4"
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
    "name": "52"
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
    "name": "13"
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
    "name": "9.4.2"
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
    "name": "27"
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
    "name": "27"
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
    "name": "10.2.1"
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
    "name": "37"
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
    "name": "36"
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
    "name": "44"
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
    "name": "61"
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
    "name": "47"
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
    "name": "31"
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
    "name": "49"
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
    "name": "51"
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
    "name": "80"
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
    "name": "25"
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
    "name": "9"
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
    "name": "10"
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
    "name": "16"
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
    "name": "11.1.3"
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
    "name": "17"
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
    "name": "23"
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
    "name": "11.4.1"
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
    "name": "24"
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
    "name": "3"
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
    "name": "11"
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
    "name": "12"
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
    "name": "35"
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
    "name": "39"
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
    "name": "45"
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
    "name": "38"
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
    "name": "40"
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
    "name": "73"
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
    "name": "67"
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
    "name": "[IMA]-01"
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
    "name": "19"
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
    "name": "[MUL]-02"
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
    "name": "68"
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
    "name": "[MUL]-09"
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
    "name": "64"
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
    "name": "56"
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
    "name": "48"
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
    "name": "9"
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
    "name": "58"
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
    "name": "62"
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
    "name": "54"
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
    "name": "74"
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
    "name": "63"
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
    "name": "[PR\u00e9]-08"
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
    "name": "4"
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
    "name": "[STR]-03"
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
    "name": "28"
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
    "name": "[STR]-07"
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
    "name": "39"
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
    "name": "3"
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
    "name": "66"
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
    "name": "[STR]-12"
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
    "name": "[PR\u00e9]-01"
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
    "name": "41"
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
    "name": "[MUL]-12"
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
    "name": "76"
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
    "name": "[SCR]-04"
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
    "name": "8"
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
    "name": "[MUL]-14"
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
    "name": "[MUL]-21"
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
    "name": "[MUL]-25"
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
    "name": "[NAV]-10"
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
    "name": "[MUL]-28"
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
    "name": "[NAV]-04"
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
    "name": "[FOR]-02"
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
    "name": "[STA]-05"
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
    "name": "[MUL]-30"
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
    "name": "72"
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
    "name": "[CAD]-02"
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
    "name": "[FOR]-11"
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
    "name": "[NAV]-16"
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
    "name": "7"
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
    "name": "[STA]-07"
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
    "name": "4.4.1"
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
    "name": "71"
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
    "name": "26"
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
    "name": "60"
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
    "name": "34"
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
    "name": "[MUL]-32"
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
    "name": "57"
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
    "name": "2"
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
    "name": "[MUL]-07"
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
    "name": "5"
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
    "name": "12"
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
    "name": "9"
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
    "name": "[PR\u00e9]-14"
  }
};



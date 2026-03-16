# React Hook & Gestion des formulaires

## Qu'est-ce qu'un Hook ?
- **Les problèmes avant les Hooks:** les composants de classe étaient lourds, le cycle de vie (componentDidMount, etc.) était complexe, et la logique était difficile à partager. 
- **la solution :** Les hooks ( apparus avec react 16.8) sont des fonctions spéciales qui permettent de "s'accrocher" (to hook into) aux fonctionnalités de react (état, cycle de vie) depuis des composants fonctionnels.
- **Règles d'or :**
    - Toujours appeler au niveau supérieur (pas dans des boucles ou des conditions)
    - Uniquement dans des composants fonctions React (ou d'autres hooks personnalisés)

## Gérer l'état local avec `useState`
- **Concept:** Permet d'ajouter une "mémoire" (un état local) à un composant fonctionnel. la fonction `useState` renvoie toujours un tableau de deux éléments : la valeur actuelle et la fonction pour la modifier.
- **Intérêt de l'utilisation :**C'est le coeur de l'intéractivité en React. sans état, une application est purement statique. chaque fois que la fonction de mise à jour est appelée, React est prévenu qu'une donnée à changé et déclenche automatiquement un nouveau rendu(re-render) du composant pour mettre à jour l'interface visuelle.

## Gérer les effets de bord avec `useEffect`
- **Concept :** Permet d'exécuter du code "en dehors" du rendu pur de react (ex: Appels API, abonnements, manipulation manuelle du DOM)
- **Qu'est-ce qu'un "effet de bord" :** En programmation, un composant React idéal est une "fonction pure" : il recoit des donnees (props / state) et renvoie du JSX, sans rien modifier d'autre. un **effet de bord** est tout ce qui sort de ce cadre et interagit avec le "monde extérieur" :
    - Récupérer des données sur un serveur (appels API)
    - Modifier manuellement le titre de l'onglet (document.title)
    - configurer un intervalle ou un timer (`setInterval`,`setTimemout`)
    - s'abonner à un sevice externe (Websockets, Firebase)
- **le tableau de dépendances :**
    - `[]` : s'exécute uniquement au montage
    - `[var1, var2]` : s'exécute au montage ET quand les variables changent
    - *Rien* : s'éxécute à chaque rendu ( à éviter en général )

## Optimisation avec `useMemo`
- **Concept :** la "mémoïsation" est à mettre en cache le résultat d'un calcul coûteux pour éviter de le refaire à chaque rendu du composant.
- **analogie :** "si je te demande combien font 345 x 897, tu vas calculer. Si je te redemande 2 secondes plus tard, tu vas me donner la réponse de mémoire sans recalculer, sauf si je change les nombres."
- **un exemple :** Créer une fonction de filtrage sur une liste de 10 000 éléments

## Fluidité de l'UI avec `UseTransition`
- **Concept (react > 18):** Permet de marquer certaines mises à jour d'état comme "non urgentes" (transitions). On garde l'interface reactive (comme un champ de texte) meme si un rendu lourd se prépare en arrière plan
- **Intérêt de l'utilisation :** Le but principal est d'améliorer considérablement l'expérience utilisateur (UX) en évitant les blocages ou les saccades ( les fameux "freezes"). au lieu de paralyser l'écran pendant le calcul d'un filtre complexe ou le rendu d'une énorme liste, l'utilisateur peut continuer à interagir de manière fluide (par exemple, continuer à taper au clavier). l'état `isPending` fourni par le hook est également parfait pour afficher un petit indicateur de chargement, montrant que l'application travaille en tâche de fond
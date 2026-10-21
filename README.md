# HashCode Foundations

> Le socle de connaissances informatiques pour préparer les apprenants de HashCode aux fondamentaux de la cybersécurité.

**Cours en français · Markdown comme source de vérité · Site documentaire Astro + Starlight · Déploiement Vercel**

## Objectif

Ce dépôt rassemble des cours progressifs, des exercices guidés, un glossaire et des évaluations de positionnement. Le contenu est écrit en Markdown et publié sous forme de site statique afin de rester facile à maintenir, à relire et à enrichir par la communauté.

## Parcours pédagogique

1. **Bases de l'informatique** — matériel, CPU, RAM, stockage, fichiers et applications.
2. **Systèmes d'exploitation** — Windows et Linux, utilisateurs, permissions, processus et mises à jour.
3. **Réseaux informatiques** — LAN, adresses IP, routeurs, ports, TCP/UDP et modèle client-serveur.
4. **Internet et Web** — DNS, domaines, HTTP/HTTPS, serveurs Web et certificats TLS.
5. **Ligne de commande** — navigation, manipulation de fichiers et inspection de base du système.
6. **Sécurité numérique** — authentification, mots de passe, phishing, logiciels malveillants, sauvegardes et mises à jour.

## Architecture

~~~text
hashcode-foundations/
├── README.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── package.json
├── astro.config.mjs
├── tsconfig.json
├── src/
│   ├── content.config.ts
│   ├── content/
│   │   └── docs/                 # Source canonique des cours en Markdown/MDX
│   │       ├── index.mdx
│   │       ├── parcours-pedagogique.md
│   │       ├── fondamentaux/
│   │       ├── evaluation/
│   │       └── references/
│   └── styles/
│       └── custom.css
├── assessments/                  # Ressources d'évaluation complémentaires
├── docs/                         # Documents d'architecture et planification
├── exercises/                    # Exercices complémentaires
├── glossary/                     # Glossaire de contribution
├── resources/                    # Références externes
└── .github/
    └── PULL_REQUEST_TEMPLATE.md
~~~

### Choix techniques

- **Astro + Starlight** : génération d'un site documentaire statique, navigation, recherche, sommaires et affichage responsive.
- **Markdown/MDX** : format de référence pour le contenu pédagogique.
- **CSS personnalisé** : identité HashCode avec accent lime #C5F441 et thèmes clair/sombre.
- **Vercel** : hébergement et déploiement automatique à partir de GitHub.

Les cours publiés sont maintenus dans src/content/docs/. Évite de créer une deuxième copie des mêmes leçons dans docs/ : ce dossier sert aux documents de planification, tandis que le répertoire de contenu Astro est la source canonique du site.

## Développement local

Prérequis : Node.js 22 ou une version compatible avec Astro 5, et npm.

~~~bash
npm install
npm run dev
~~~

Pour vérifier le site avant publication :

~~~bash
npm run check
npm run build
npm run preview
~~~

Le site généré est placé dans dist/.

## Déploiement automatique sur Vercel

1. Ouvrir Vercel et importer le dépôt digitaleflex/hashcode-foundations.
2. Garder le répertoire racine du projet à la racine du dépôt.
3. Vérifier que Vercel détecte Astro.
4. Utiliser npm install comme commande d'installation et npm run build comme commande de build, si Vercel ne les détecte pas automatiquement.
5. Laisser le répertoire de sortie sur dist ou utiliser la détection automatique du framework.
6. Déployer. Les nouveaux commits de la branche connectée déclencheront ensuite les déploiements selon les réglages Git de Vercel.

Aucune variable d'environnement n'est requise pour le site statique initial. L'URL de production réelle dépendra du nom et du domaine configurés dans le projet Vercel.

## Principes pédagogiques

- **Accessible aux débutants** : expliquer chaque terme technique avant de l'utiliser.
- **Progressif** : partir des concepts simples et relier chaque chapitre au suivant.
- **Pratique** : proposer des exercices vérifiables sur un poste personnel ou un environnement de laboratoire.
- **Sécurisé et légal** : toute expérimentation réseau ou sécurité doit être réalisée sur des systèmes appartenant à l'apprenant ou avec une autorisation explicite.
- **Traçable** : citer les sources et vérifier les informations susceptibles d'évoluer.
- **Contributif** : garder les cours faciles à relire, versionner et améliorer.

## Contribution

Consulter CONTRIBUTING.md avant de proposer un nouveau cours, un exercice ou une correction.

## Statut

Première version du site et des contenus de base. Les leçons doivent encore être enrichies avec des exercices progressifs, des références vérifiées et des évaluations pratiques avant de considérer le parcours comme complet.

---
title: "04 · Internet et Web"
description: Comprendre les domaines, le DNS, HTTP, HTTPS et TLS.
---

## Pourquoi ce module compte

Une grande partie des usages numériques repose sur le Web : sites, services cloud, API et plateformes de formation. Comprendre le trajet d’une requête aide à distinguer les problèmes de réseau, les erreurs de configuration et les risques liés à la confiance.

## Objectifs d’apprentissage

À la fin de cette leçon, tu dois pouvoir :

- distinguer Internet et le Web ;
- expliquer le rôle d’un nom de domaine et du DNS ;
- décrire les étapes générales d’une requête Web ;
- expliquer ce que HTTPS protège et ce qu’il ne garantit pas ;
- reconnaître la différence entre chiffrement du transport et confiance dans un site.

## 1. Internet n’est pas le Web

**Internet** est une infrastructure mondiale de réseaux interconnectés. **Le Web** est un ensemble de services qui fonctionnent au-dessus d’Internet et utilisent notamment les navigateurs, les serveurs Web, les URL et HTTP.

Le courrier électronique, certains jeux en ligne et d’autres services utilisent Internet sans être pour autant des pages Web.

## 2. URL, domaine et DNS

Une URL indique comment accéder à une ressource. Elle peut contenir un schéma, un nom d’hôte, un chemin et d’autres éléments.

Dans une URL comme https://example.com/cours, le schéma indique HTTPS, le nom d’hôte est example.com et le chemin est /cours.

Le **DNS** (*Domain Name System*) permet notamment de retrouver des informations associées à un nom de domaine, dont des adresses utilisées pour joindre un service. La résolution peut utiliser un cache ; une requête DNS n’est donc pas nécessairement envoyée à chaque visite.

## 3. Le trajet simplifié d’une requête Web

Lorsqu’un utilisateur ouvre une page, plusieurs opérations peuvent se produire :

1. Le navigateur analyse l’URL.
2. Il obtient les informations réseau nécessaires, éventuellement depuis un cache DNS.
3. Il établit une connexion avec le serveur, selon le protocole utilisé.
4. En HTTPS, la connexion TLS est négociée et le certificat du serveur est vérifié.
5. Le navigateur envoie une requête HTTP.
6. Le serveur renvoie une réponse, qui peut contenir du HTML, des données, des images ou d’autres ressources.
7. Le navigateur traite la réponse et affiche la page.

C’est un modèle simplifié. Les caches, les proxys, les CDN, HTTP/2, HTTP/3 et les connexions déjà établies peuvent modifier le détail des étapes.

## 4. HTTP, HTTPS et TLS

HTTP définit la structure des requêtes et des réponses Web. HTTPS utilise HTTP au-dessus de TLS pour protéger la communication en transit.

TLS vise notamment à fournir la confidentialité et l’intégrité des données échangées, ainsi qu’une authentification du serveur lorsque le certificat et le nom demandé sont correctement validés.

**HTTPS ne prouve pas qu’un site est honnête.** Un site de phishing peut également disposer d’un certificat valide. HTTPS ne garantit pas non plus que le site ne contient aucune vulnérabilité ou que les données sont bien protégées après leur arrivée sur le serveur.

## Atelier pratique — Lire une URL et évaluer la connexion

**Durée indicative : 15 minutes.**

Sur un site que tu es autorisé à consulter :

1. Repère le schéma, le nom d’hôte et le chemin de l’URL.
2. Vérifie si le site utilise HTTPS.
3. Consulte les informations de connexion fournies par le navigateur.
4. Identifie le nom de domaine exact et vérifie qu’il correspond au service attendu.
5. Explique pourquoi un cadenas ne suffit pas à prouver qu’un site est légitime.

N’ouvre pas de liens suspects pour les besoins de cet exercice. Utilise un site connu et public.

**Livrable :** une analyse d’URL sans paramètres personnels, jetons de session ni liens privés.

## Vérification des acquis

1. Quelle différence existe-t-il entre Internet et le Web ?
2. Quel est le rôle du DNS ?
3. Que protège HTTPS pendant le transport ?
4. Pourquoi un site de phishing peut-il quand même utiliser HTTPS ?
5. Le navigateur contacte-t-il nécessairement un serveur DNS à chaque visite ?

<details>
<summary>Corrigé expliqué</summary>

1. Internet est l’infrastructure de réseaux ; le Web est un service qui fonctionne au-dessus.
2. Le DNS permet notamment de retrouver les informations associées à un nom de domaine.
3. TLS protège la communication en transit et permet l’authentification du serveur selon la validation du certificat.
4. Un certificat valide prouve certains éléments de contrôle du domaine et de la connexion, pas la bienveillance du contenu.
5. Non. Les informations peuvent être mises en cache.

</details>

## À retenir

Le DNS aide à retrouver les informations réseau d’un domaine, HTTP organise les échanges Web et TLS protège la connexion HTTPS. Il faut évaluer séparément la sécurité du transport, l’identité attendue du service et la confiance accordée au contenu.

## Pour aller plus loin

- [How DNS works — Cloudflare Learning Center](https://www.cloudflare.com/learning/dns/what-is-dns/)
- [What is HTTPS? — MDN Web Docs](https://developer.mozilla.org/en-US/docs/Glossary/HTTPS)
- [Transport Layer Security — MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Security/Transport_Layer_Security)

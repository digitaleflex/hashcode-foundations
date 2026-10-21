---
title: "03 · Réseaux informatiques"
description: Comprendre les réseaux locaux, les adresses IP, les routeurs, les ports et les protocoles.
---

## Pourquoi ce module compte

Les systèmes modernes communiquent en permanence : navigateur vers serveur, téléphone vers point d’accès, application vers API. Comprendre les réseaux permet de mieux lire les journaux, diagnostiquer les pannes et comprendre une grande partie des scénarios de cybersécurité.

## Objectifs d’apprentissage

À la fin de cette leçon, tu dois pouvoir :

- décrire un réseau local et le rôle d’un routeur ;
- expliquer la fonction générale d’une adresse IP ;
- distinguer adresse IP, port et protocole ;
- expliquer les rôles généraux de TCP et UDP ;
- représenter un échange client-serveur.

## 1. Qu’est-ce qu’un réseau ?

Un réseau relie des appareils pour leur permettre d’échanger des données. Un réseau local (LAN) couvre généralement une zone limitée : domicile, bureau, salle informatique ou laboratoire.

Un appareil peut utiliser plusieurs interfaces réseau : Wi-Fi, Ethernet ou interface virtuelle, par exemple. Chaque interface peut avoir sa propre configuration.

## 2. Adresse IP et routeur

Une adresse IP permet d’identifier une interface pour l’acheminement de paquets au niveau IP. IPv4 et IPv6 sont deux versions du protocole IP. Une adresse peut être attribuée dynamiquement et changer ; elle ne doit pas être considérée comme une identité permanente d’une personne.

Un **routeur** transfère des paquets entre réseaux en fonction des routes disponibles. Un routeur domestique combine souvent plusieurs fonctions, notamment le routage, le Wi-Fi et parfois le pare-feu.

## 3. Adresse IP, port et protocole

Ces notions répondent à des questions différentes :

- **Adresse IP :** vers quelle interface réseau acheminer les paquets ?
- **Port :** vers quelle destination de transport ou quel service sur l’hôte remettre les données ?
- **Protocole :** quelles règles les systèmes doivent-ils respecter pour communiquer ?

Un port n’est pas un câble physique ni une adresse de machine. Les numéros de port sont associés à des protocoles de transport comme TCP ou UDP.

## 4. TCP et UDP

**TCP** établit une connexion et fournit un flux d’octets fiable et ordonné. Il est utilisé lorsque les applications ont besoin de ces garanties.

**UDP** envoie des datagrammes sans fournir à lui seul les mêmes garanties de livraison, d’ordre ou de retransmission. Il peut convenir à des usages qui privilégient la faible latence ou gèrent eux-mêmes les pertes.

Aucun de ces protocoles n’est « sécurisé » par sa seule présence : la sécurité dépend aussi des protocoles applicatifs, du chiffrement, de la configuration et du contexte.

## 5. Le modèle client-serveur

Le client demande généralement une ressource ou un service ; le serveur répond. Par exemple, un navigateur demande une page Web et un serveur Web renvoie une réponse.

Un même appareil peut être client dans une communication et serveur dans une autre. Les rôles dépendent de l’échange, pas uniquement du type d’appareil.

## Atelier pratique — Dessiner et expliquer un réseau

**Durée indicative : 20 minutes.**

Dessine un réseau fictif comprenant :

- un ordinateur portable ;
- un téléphone ;
- un routeur ;
- un serveur Web situé sur un autre réseau.

Ajoute des flèches pour représenter une requête du navigateur vers le serveur et la réponse. Indique le rôle des adresses IP, du routeur et du port de service dans cette communication.

Si tu souhaites observer ta propre configuration, utilise uniquement les paramètres réseau de ton appareil. Ne scanne pas de réseau tiers et ne modifie pas la configuration du routeur pour cet exercice.

**Livrable :** un schéma annoté et un paragraphe de cinq à huit phrases expliquant l’échange.

## Vérification des acquis

1. Quel est le rôle d’un routeur ?
2. Quelle différence existe-t-il entre une adresse IP et un port ?
3. Quelle garantie TCP fournit-il que UDP n’offre pas à lui seul ?
4. Un ordinateur peut-il être client et serveur ? Explique.
5. Une adresse IP identifie-t-elle nécessairement une personne de façon permanente ?

<details>
<summary>Corrigé expliqué</summary>

1. Il transfère les paquets entre réseaux selon les routes disponibles.
2. L’adresse IP aide à acheminer les paquets vers une interface ; le port identifie une destination de transport sur l’hôte.
3. TCP fournit un flux fiable et ordonné ; UDP ne fournit pas à lui seul les mêmes garanties.
4. Oui, selon les services et les échanges concernés.
5. Non. Les adresses peuvent changer, être partagées ou représenter une interface plutôt qu’une personne.

</details>

## À retenir

Une communication réseau repose sur plusieurs couches de mécanismes. L’adresse IP, le port et le protocole ont des rôles distincts. Savoir les distinguer aide à comprendre les connexions et à éviter les conclusions hâtives lors d’un diagnostic.

## Pour aller plus loin

- [What is TCP/IP? — Cloudflare Learning Center](https://www.cloudflare.com/learning/ddos/glossary/tcp-ip/)
- [Internet Protocol — Cloudflare Learning Center](https://www.cloudflare.com/learning/network-layer/internet-protocol/)

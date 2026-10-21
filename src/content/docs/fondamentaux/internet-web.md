---
title: "04 · Internet et Web"
description: Comprendre les domaines, le DNS, HTTP, HTTPS et TLS.
---

## Objectifs

- Distinguer Internet et le Web.
- Expliquer le rôle du DNS.
- Décrire une requête Web à haut niveau.
- Expliquer les garanties et les limites de HTTPS.

## 1. Internet et Web

Internet est un ensemble de réseaux interconnectés. Le Web est un service qui fonctionne au-dessus d’Internet et permet notamment de consulter des ressources au moyen de navigateurs et de serveurs Web.

## 2. Domaines et DNS

Un nom de domaine, comme example.com, est plus facile à retenir qu’une adresse IP. Le DNS permet notamment de retrouver les informations nécessaires pour joindre les services associés à un nom de domaine.

## 3. Requête et réponse Web

À haut niveau, un navigateur résout le nom de domaine si nécessaire, établit une connexion avec le serveur, envoie une requête HTTP et reçoit une réponse. Les détails varient selon le protocole, le cache, le réseau et les mécanismes de connexion.

## 4. HTTP, HTTPS et TLS

HTTP définit la façon dont le client et le serveur échangent des requêtes et des réponses Web. HTTPS utilise TLS pour protéger la communication en transit et authentifier le serveur selon la validation du certificat et le nom demandé.

**HTTPS ne prouve pas qu’un site est honnête.** Un site malveillant peut lui aussi utiliser HTTPS. La protection du transport ne garantit pas l’absence de fraude, de vulnérabilité ou de contenu dangereux.

## Mise en pratique

Sur un site que tu es autorisé à consulter :

1. Repère le nom de domaine dans la barre d’adresse.
2. Vérifie si la connexion utilise HTTPS.
3. Observe les informations de connexion fournies par le navigateur.
4. Explique pourquoi le cadenas ne suffit pas à garantir la fiabilité du site.

## Vérification

- À quoi sert le DNS ?
- Quelle différence existe-t-il entre Internet et le Web ?
- Quelles sont les limites de HTTPS ?

## À retenir

Le DNS aide à localiser les services, HTTP organise les échanges Web et TLS protège la connexion. Ces mécanismes sont importants, mais ne remplacent pas le jugement de l’utilisateur ni les autres contrôles de sécurité.

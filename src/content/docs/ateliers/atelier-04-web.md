---
title: "Atelier 04 · Lire une URL et comprendre HTTPS"
description: Analyser les composants d'une URL et les limites de la sécurité HTTPS.
---

## Objectif

Savoir lire une URL et distinguer la protection de la connexion de la confiance accordée à un site.

**Durée :** 15 minutes.  
**Matériel :** navigateur et site public connu.

## Consignes

Utilise uniquement un site public connu et que tu es autorisé à consulter.

1. Note une URL publique non personnalisée.
2. Identifie le schéma, le nom d’hôte et le chemin.
3. Vérifie si la connexion utilise HTTPS.
4. Consulte les informations de connexion présentées par le navigateur.
5. Explique ce que TLS protège pendant le transport.
6. Explique pourquoi le cadenas ne prouve pas que le site est honnête.

Ne partage pas de liens contenant des jetons, des identifiants, des paramètres privés ou des URL de réinitialisation de mot de passe.

## Tableau à compléter

| Élément | Valeur observée |
| --- | --- |
| Schéma | À compléter |
| Nom d’hôte | À compléter |
| Chemin | À compléter |
| HTTPS utilisé ? | Oui / Non |
| Ce que la connexion protège | À compléter |
| Ce qu’elle ne garantit pas | À compléter |

## Questions

1. Quel rôle joue le DNS avant une connexion, dans le cas courant ?
2. Un site de phishing peut-il utiliser HTTPS ?
3. Pourquoi faut-il vérifier le nom de domaine exact ?

## Critères de réussite

- Les composants de l’URL sont correctement identifiés.
- La protection du transport est distinguée de la légitimité du contenu.
- Aucun lien privé ou secret n’est inclus dans le livrable.

## Corrigé indicatif

Le DNS permet notamment de retrouver les informations nécessaires pour joindre le nom de domaine. HTTPS utilise TLS pour protéger la communication en transit et authentifier le serveur selon la validation du certificat et du nom demandé. Un site malveillant peut aussi utiliser HTTPS ; il faut donc vérifier que le domaine correspond bien au service attendu.

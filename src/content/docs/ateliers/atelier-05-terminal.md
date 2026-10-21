---
title: "Atelier 05 · Premiers pas dans le terminal"
description: Utiliser des commandes d'inspection et créer un dossier de test.
---

## Objectif

Apprendre à se repérer dans le terminal, à lister des fichiers et à travailler dans un dossier de test.

**Durée :** 20 minutes.  
**Environnement :** compte utilisateur personnel, sans privilèges administratifs.

## Commandes d’observation

### Linux — Bash

~~~bash
pwd
ls
whoami
~~~

### Windows — PowerShell

~~~powershell
Get-Location
Get-ChildItem
whoami
~~~

Ces commandes affichent le répertoire courant, son contenu et le nom de l’utilisateur. Les résultats dépendent de ton système et de ton compte.

## Consignes

1. Ouvre le terminal ou PowerShell.
2. Exécute les trois commandes correspondant à ton environnement.
3. Explique chaque résultat en une phrase.
4. Crée ensuite un dossier de test en utilisant la commande adaptée à ton shell.
5. Vérifie que le dossier apparaît dans la liste.
6. Ne lance pas de commande de suppression, de modification système ou d’administration pour cet exercice.

Si tu ne connais pas la commande pour créer un dossier, consulte l’aide officielle de ton shell avant de continuer.

## Journal de commandes

| Commande | Résultat observé | Explication |
| --- | --- | --- |
| Afficher le répertoire courant | À compléter | À quoi sert l’emplacement courant ? |
| Lister le contenu | À compléter | Quels éléments sont visibles ? |
| Identifier l’utilisateur | À compléter | Quel compte exécute la commande ? |
| Créer un dossier de test | À compléter | Comment vérifier le résultat ? |

## Questions

1. Quelle différence existe-t-il entre un terminal et un shell ?
2. Pourquoi faut-il savoir quel dossier est courant avant d’agir sur des fichiers ?
3. Pourquoi cet exercice ne demande-t-il pas de privilèges administratifs ?

## Critères de réussite

- Chaque commande est expliquée avec des mots simples.
- Le dossier de test est créé et vérifié.
- Aucun changement système sensible n’est effectué.

## Corrigé indicatif

Le terminal est l’interface de saisie et d’affichage ; le shell interprète les commandes. Le répertoire courant influence la façon dont les chemins relatifs sont interprétés. Les tâches ordinaires de navigation et de création d’un dossier dans son propre espace ne nécessitent normalement pas de droits administratifs.

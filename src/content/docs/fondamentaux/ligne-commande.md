---
title: "05 · Ligne de commande"
description: Découvrir le terminal, les chemins et les commandes d’inspection sûres.
---

## Pourquoi ce module compte

La ligne de commande permet d’inspecter un système et d’effectuer des tâches répétitives avec précision. Elle est utilisée dans l’administration, le développement, le cloud et la cybersécurité. Le premier objectif n’est pas de mémoriser beaucoup de commandes, mais de comprendre leurs effets.

## Objectifs d’apprentissage

À la fin de cette leçon, tu dois pouvoir :

- distinguer terminal et shell ;
- afficher le répertoire courant ;
- lister le contenu d’un dossier et changer de répertoire ;
- créer un dossier de test ;
- expliquer pourquoi certaines commandes sont dangereuses.

## 1. Terminal, shell et commande

Le **terminal** est l’interface qui permet de saisir et lire du texte. Le **shell** interprète les commandes et lance les programmes. Une **commande** demande au système ou à un programme d’effectuer une action.

PowerShell est courant sous Windows. Bash est courant sur de nombreux systèmes Linux. Les commandes et leur syntaxe diffèrent selon le shell.

## 2. Les premières commandes

### Linux — Bash

~~~bash
pwd
ls
whoami
cd Documents
~~~

### Windows — PowerShell

~~~powershell
Get-Location
Get-ChildItem
whoami
Set-Location Documents
~~~

Ces commandes permettent d’afficher l’emplacement courant, de lister des éléments, d’identifier le compte courant et de changer de dossier. Le dossier Documents doit exister à l’emplacement où tu te trouves ; sinon, adapte le chemin.

## 3. Chemins relatifs et absolus

Un **chemin absolu** décrit un emplacement à partir de la racine du système ou du lecteur. Un **chemin relatif** est interprété à partir du répertoire courant.

Le symbole du répertoire courant et les séparateurs de chemin varient selon les systèmes et les shells. Avant d’exécuter une commande sur un fichier, vérifie toujours le chemin concerné.

## 4. Lire avant d’exécuter

Une commande peut lire, créer, modifier ou supprimer des données. Certaines commandes combinent plusieurs opérations ou transmettent le résultat à un autre programme.

Adopte ces règles :

- travaille dans un dossier de test ;
- lis la documentation ou l’aide de la commande ;
- vérifie le répertoire courant avant de modifier des fichiers ;
- évite les privilèges administratifs si la tâche ne les nécessite pas ;
- ne copie pas une commande trouvée en ligne sans comprendre ses effets ;
- fais particulièrement attention à la suppression récursive, aux redirections et aux scripts inconnus.

## Atelier pratique — Créer un mini-laboratoire

**Durée indicative : 20 minutes.**

Effectue ces tâches dans ton compte utilisateur, sans privilèges administratifs :

1. Affiche le répertoire courant.
2. Liste son contenu.
3. Crée un dossier HashCode-Lab.
4. Entre dans ce dossier et crée un sous-dossier Notes.
5. Affiche le contenu pour vérifier le résultat.
6. Reviens au dossier parent et explique comment tu sais où tu te trouves.

Si tu ne sais pas encore créer un dossier, consulte l’aide du shell que tu utilises ou demande à l’encadrant une démonstration adaptée à ton système.

**Livrable :** la liste des commandes utilisées, leur explication en langage simple et une phrase décrivant la différence entre chemin relatif et chemin absolu.

## Vérification des acquis

1. Quelle différence existe-t-il entre terminal et shell ?
2. À quoi sert une commande qui affiche le répertoire courant ?
3. Pourquoi faut-il vérifier un chemin avant une opération sur les fichiers ?
4. Pourquoi est-il risqué d’exécuter une commande inconnue avec des privilèges administratifs ?

<details>
<summary>Corrigé expliqué</summary>

1. Le terminal est l’interface ; le shell interprète les commandes.
2. Elle indique le dossier dans lequel les commandes s’exécutent par défaut.
3. Une erreur de chemin peut viser les mauvais fichiers ou le mauvais dossier.
4. Une commande disposant de droits élevés peut modifier des ressources importantes ou endommager le système.

</details>

## À retenir

La ligne de commande est un outil puissant parce qu’elle permet d’agir précisément. Cette puissance exige de comprendre la commande, son contexte et ses effets avant de l’exécuter.

## Pour aller plus loin

- [Bash Reference Manual — GNU](https://www.gnu.org/software/bash/manual/)
- [PowerShell documentation — Microsoft Learn](https://learn.microsoft.com/en-us/powershell/)

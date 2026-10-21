---
title: "05 · Ligne de commande"
description: Découvrir le terminal, les chemins et les commandes d’inspection sûres.
---

## Objectifs

- Distinguer terminal et shell.
- Comprendre le répertoire courant et les chemins.
- Lister et parcourir des fichiers.
- Lire une commande avant de l’exécuter.

## 1. Terminal et shell

Le terminal est l’interface dans laquelle on saisit et lit du texte. Le shell interprète les commandes et lance les programmes. PowerShell est un shell courant sous Windows ; Bash est courant sur de nombreux systèmes Linux.

## 2. Commandes de départ

### Linux

~~~
pwd
ls
cd Documents
whoami
~~~

### Windows PowerShell

~~~
Get-Location
Get-ChildItem
Set-Location Documents
whoami
~~~

Ces commandes affichent le répertoire courant, listent des éléments, changent de dossier ou indiquent l’utilisateur courant. Le dossier Documents doit exister dans le répertoire où tu te trouves, sinon adapte le chemin.

## 3. Bonnes habitudes

- Comprendre chaque commande avant de l’exécuter.
- S’entraîner dans un dossier de test.
- Ne pas copier une commande administrateur trouvée en ligne sans en comprendre les effets.
- Être particulièrement prudent avec la suppression récursive, les redirections et les commandes exécutées avec des privilèges élevés.

## Exercice

Crée un dossier hashcode-lab, ajoute un sous-dossier notes, puis utilise les commandes appropriées pour te déplacer entre les deux. Liste leur contenu et explique chaque commande.

## Vérification

1. Que fait une commande qui affiche le répertoire courant ?
2. Quelle différence existe-t-il entre terminal et shell ?
3. Pourquoi faut-il comprendre une commande avant de l’exécuter ?

## À retenir

Le terminal permet d’observer et de contrôler un système avec précision. La priorité est de comprendre les commandes et leurs effets, pas de les mémoriser aveuglément.

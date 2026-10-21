---
title: "01 · Bases de l’informatique"
description: Comprendre les composants d’un ordinateur, les fichiers, les logiciels et les applications.
---

## Pourquoi ce module compte

La cybersécurité consiste notamment à protéger des systèmes, des données et des utilisateurs. Pour comprendre une panne, une attaque ou une mesure de protection, il faut d’abord savoir ce que l’on protège et comment les composants travaillent ensemble.

## Objectifs d’apprentissage

À la fin de cette leçon, tu dois pouvoir :

- distinguer matériel et logiciel ;
- expliquer les rôles du processeur, de la RAM et du stockage ;
- distinguer système d’exploitation et application ;
- organiser des fichiers et expliquer un chemin ;
- décrire simplement ce qui se passe lorsqu’une application s’ouvre.

## 1. Matériel et logiciel

Le **matériel** (*hardware*) désigne les composants physiques : processeur, mémoire, disque, écran, clavier ou carte réseau. Le **logiciel** (*software*) regroupe les programmes et les instructions qui indiquent à l’ordinateur ce qu’il doit faire.

Ces deux dimensions dépendent l’une de l’autre. Un logiciel a besoin de ressources matérielles pour s’exécuter ; le matériel a besoin d’instructions pour accomplir une tâche utile.

## 2. Trois composants à ne pas confondre

### Le processeur — CPU

Le processeur exécute les instructions des programmes. Il effectue des opérations et participe à la coordination des tâches. La fréquence, le nombre de cœurs et l’architecture influencent les performances : un seul chiffre ne suffit pas à comparer deux processeurs.

### La mémoire vive — RAM

La RAM conserve temporairement les données et instructions nécessaires aux programmes en cours d’utilisation. Elle est généralement volatile : son contenu n’est pas conservé lorsque l’alimentation est coupée.

### Le stockage — SSD ou disque dur

Le stockage conserve les fichiers et les applications sur la durée, y compris lorsque l’ordinateur est éteint. Un SSD est généralement plus rapide qu’un disque dur mécanique, mais les deux servent au stockage persistant.

| Élément | Fonction | Exemple concret |
| --- | --- | --- |
| CPU | Exécuter des instructions | Calculer le résultat d’une opération |
| RAM | Garder les données actives à disposition | Maintenir plusieurs applications ouvertes |
| SSD/HDD | Conserver les données | Retrouver un document après redémarrage |

**Analogie :** imagine une cuisine. Le CPU est la personne qui prépare le plat, la RAM est le plan de travail où se trouvent les ingrédients utilisés immédiatement, et le stockage est le garde-manger. L’analogie aide à mémoriser les rôles, mais ne décrit pas tous les détails techniques.

## 3. Système d’exploitation et applications

Le **système d’exploitation** (OS) gère les ressources de la machine et fournit des services aux logiciels : fichiers, mémoire, périphériques, utilisateurs et réseau. Windows et Linux en sont des exemples.

Une **application** accomplit une tâche pour l’utilisateur ou pour un autre système : navigateur Web, éditeur de texte, lecteur multimédia ou terminal. Une application n’est donc pas la même chose que le système qui la fait fonctionner.

## 4. Fichiers, dossiers et chemins

Un fichier contient des données. Un dossier organise des fichiers et d’autres dossiers. Un chemin décrit l’emplacement d’un élément dans cette organisation.

Exemple de chemin Linux :

~~~text
/home/eurin/Documents/cours/notes.txt
~~~

Exemple de chemin Windows :

~~~text
C:\Users\Eurin\Documents\cours\notes.txt
~~~

Les chemins et les noms de dossiers varient selon la machine. Évite de publier des captures révélant ton nom de compte, des clés de licence ou d’autres informations personnelles.

## 5. Que se passe-t-il quand tu ouvres une application ?

À un niveau simplifié, le système charge le programme depuis le stockage, place en RAM les données nécessaires et demande au CPU d’exécuter les instructions. L’application peut ensuite solliciter d’autres ressources, comme un fichier ou le réseau.

Cette compréhension est utile en cybersécurité : une application peut lire des fichiers, utiliser le réseau et agir avec les permissions de son compte.

## Atelier pratique — Observer son ordinateur

**Durée indicative : 15 à 20 minutes.**

1. Identifie le système d’exploitation et sa version.
2. Repère la quantité de RAM et le type de stockage si ces informations sont disponibles.
3. Crée un dossier nommé HashCode-Lab, puis un sous-dossier Notes.
4. Crée un fichier texte dans Notes et relève son chemin.
5. Ouvre une application et explique les ressources qu’elle peut utiliser.

**Livrable :** une courte fiche comprenant les composants identifiés, le chemin du fichier de test et trois phrases expliquant les rôles du CPU, de la RAM et du stockage.

## Vérification des acquis

1. Quelle différence existe-t-il entre la RAM et un SSD ?
2. Le navigateur est-il du matériel, un système d’exploitation ou une application ?
3. Pourquoi un programme peut-il utiliser de la RAM même si son fichier est conservé sur le SSD ?
4. Quelle information un chemin de fichier permet-il de retrouver ?

<details>
<summary>Corrigé expliqué</summary>

1. La RAM accueille temporairement les données actives ; le SSD conserve les données même lorsque l’ordinateur est éteint.
2. Le navigateur est une application.
3. Le fichier du programme est stocké durablement, mais son exécution nécessite des données et instructions en mémoire.
4. Le chemin indique l’emplacement du fichier dans l’arborescence du système.

</details>

## À retenir

Le CPU exécute les instructions, la RAM garde temporairement les données actives, le stockage conserve les données et le système d’exploitation coordonne les ressources. Ces notions constituent le vocabulaire de base pour comprendre les systèmes que l’on apprendra ensuite à sécuriser.

## Pour aller plus loin

- [Computer basics — GCFGlobal](https://edu.gcfglobal.org/en/computerbasics/)
- [What is an operating system? — IBM](https://www.ibm.com/think/topics/operating-systems)

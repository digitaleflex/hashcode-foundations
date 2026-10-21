---
title: "06 · Sécurité numérique"
description: Comprendre les risques courants et adopter les premiers réflexes de protection.
---

## Pourquoi ce module compte

La sécurité numérique ne dépend pas uniquement des outils techniques. Elle repose sur la compréhension des risques, la configuration des systèmes, les comportements des utilisateurs et la capacité à récupérer après un incident.

## Objectifs d’apprentissage

À la fin de cette leçon, tu dois pouvoir :

- expliquer confidentialité, intégrité et disponibilité ;
- distinguer menace, vulnérabilité et risque ;
- identifier plusieurs signaux possibles d’hameçonnage ;
- expliquer le rôle des mots de passe uniques, du MFA, des mises à jour et des sauvegardes ;
- choisir une réaction prudente face à un incident suspect.

## 1. Les trois objectifs de sécurité

La triade **CID** désigne trois objectifs souvent utilisés pour raisonner sur la sécurité :

- **Confidentialité :** l’information n’est accessible qu’aux personnes ou systèmes autorisés.
- **Intégrité :** l’information reste exacte et n’est modifiée que de manière autorisée.
- **Disponibilité :** les systèmes et données sont accessibles lorsque cela est nécessaire.

Exemple : une fuite de dossiers médicaux porte atteinte à la confidentialité ; une modification frauduleuse d’un relevé compromet l’intégrité ; une panne prolongée d’un service peut compromettre la disponibilité.

## 2. Menace, vulnérabilité et risque

Une **menace** est une cause potentielle de dommage. Une **vulnérabilité** est une faiblesse qui peut être exploitée. Un **risque** décrit la possibilité d’un événement et ses conséquences dans un contexte donné.

Exemple : un logiciel non corrigé peut présenter une vulnérabilité ; un acteur malveillant ou une erreur humaine peut être à l’origine d’un événement ; l’impact sur les données et les services contribue à caractériser le risque.

Ces notions sont liées, mais ne sont pas interchangeables.

## 3. Mots de passe et authentification multifacteur

Utilise un mot de passe unique pour chaque service important. Un gestionnaire de mots de passe peut aider à générer et conserver des mots de passe robustes.

L’**authentification multifacteur** (MFA) demande des preuves provenant de plusieurs catégories de facteurs, par exemple quelque chose que l’on connaît et quelque chose que l’on possède. Elle réduit le risque lié à un mot de passe volé, sans éliminer tous les scénarios d’attaque.

Ne partage jamais un code de connexion ou une demande d’approbation MFA avec une personne qui te contacte de façon inattendue.

## 4. Reconnaître l’hameçonnage

L’hameçonnage (*phishing*) cherche à tromper une personne pour lui faire révéler des informations, ouvrir un fichier, payer ou effectuer une action.

Signaux possibles :

- demande inattendue ou pression artificielle ;
- adresse d’expéditeur ou domaine qui ne correspond pas au service annoncé ;
- demande de mot de passe, de code ou de paiement inhabituelle ;
- pièce jointe ou lien non attendu ;
- message qui empêche de vérifier la demande par un canal indépendant.

Un seul signal ne suffit pas toujours à conclure qu’un message est malveillant. En cas de doute, n’utilise pas le lien reçu : ouvre le service par son adresse connue ou contacte l’organisation par un canal officiel.

## 5. Mises à jour et sauvegardes

Les mises à jour corrigent notamment des vulnérabilités. Installe-les depuis les mécanismes officiels et redémarre lorsque cela est nécessaire.

Les sauvegardes permettent de récupérer des données après une suppression accidentelle, une panne ou certains incidents de sécurité. Elles doivent être protégées contre l’accès non autorisé et testées par des restaurations. Une sauvegarde connectée en permanence peut elle aussi être touchée par certains incidents.

## 6. Réagir à un incident suspect

Si tu penses avoir cliqué sur un lien malveillant ou partagé un secret :

1. Arrête l’interaction avec le message ou le site.
2. Ne transmets pas d’autres informations et ne valide aucune demande inattendue.
3. Depuis un appareil ou une session de confiance, change le secret compromis si nécessaire et révoque les sessions suspectes.
4. Active ou vérifie le MFA.
5. Préviens l’équipe ou le responsable concerné si un compte professionnel ou partagé est touché.
6. Conserve les informations utiles sans redistribuer le lien ou le fichier suspect.

Pour un incident réel, suis les procédures de l’organisation et demande de l’aide à une personne compétente. N’efface pas précipitamment les éléments qui pourraient être utiles à l’analyse.

## Atelier pratique — Analyser quatre scénarios

Pour chaque scénario, indique l’objectif de sécurité concerné, le risque possible et une mesure de réduction du risque.

1. Un compte utilise le même mot de passe sur plusieurs services.
2. Un message inattendu demande une connexion immédiate via un lien.
3. Un ordinateur contient des documents importants sans sauvegarde.
4. Un système ne reçoit plus de mises à jour depuis longtemps.

**Livrable :** un tableau de quatre lignes avec scénario, risque et mesure de protection.

## Vérification des acquis

1. Quelle différence existe-t-il entre menace et vulnérabilité ?
2. Quel objectif de sécurité est affecté par une modification non autorisée des données ?
3. Pourquoi HTTPS ne garantit-il pas qu’un site est légitime ?
4. Pourquoi faut-il tester la restauration d’une sauvegarde ?
5. Que faire si un message inattendu demande un code MFA ?

<details>
<summary>Corrigé expliqué</summary>

1. La menace peut provoquer un dommage ; la vulnérabilité est une faiblesse qui peut être exploitée.
2. L’intégrité.
3. HTTPS protège la connexion en transit ; un site malveillant peut également l’utiliser.
4. Un test confirme que les données peuvent effectivement être récupérées et que la procédure fonctionne.
5. Ne pas partager le code ni approuver la demande ; vérifier par un canal officiel et signaler l’incident si nécessaire.

</details>

## À retenir

La sécurité repose sur plusieurs couches : accès limités, authentification solide, mises à jour, sauvegardes testées, vigilance face aux messages suspects et réaction organisée aux incidents. Aucune mesure unique ne protège de tous les risques.

## Pour aller plus loin

- [Cybersecurity basics — CISA](https://www.cisa.gov/topics/cybersecurity-best-practices)
- [Secure Our World — CISA](https://www.cisa.gov/secure-our-world)
- [Cybersecurity — NIST](https://www.nist.gov/cybersecurity)

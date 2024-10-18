# HRnet - Employee Management Application

## Description

HRnet est une application interne utilisée pour gérer les dossiers des employés. Cette application permet d'ajouter des employés via un formulaire et de visualiser la liste des employés ajoutés.

L'application est construite en **React** avec **React Router** pour la gestion des routes, **React Context** pour la gestion de l'état des employés, et utilise **react-data-table-component** pour afficher la liste des employés sous forme de tableau interactif.

## Fonctionnalités

- Ajouter un employé via un formulaire comprenant des informations de base (prénom, nom, date de naissance, date de début, adresse, département).
- Voir la liste actuelle des employés avec tri et pagination.
- Confirmation de la création d'un employé via une modal.
- Persistance des employés dans le `sessionStorage` pour maintenir les données pendant la session.

## Structure du projet

```bash
├── src
│   ├── components
│   │   └── Modal.jsx            # Composant Modal pour afficher une fenêtre de confirmation
│   ├── context
│   │   └── EmployeeContext.jsx  # Gestion du contexte pour stocker et partager les employés
│   ├── pages
│   │   ├── EmployeeFormPage.jsx  # Page pour ajouter un employé
│   │   └── EmployeeListPage.jsx  # Page pour afficher la liste des employés
│   ├── App.js                   # Fichier principal contenant les routes de l'application
│   ├── index.js                 # Point d'entrée de l'application React
│   └── index.css                # Styles globaux de l'application
├── public
│   └── index.html               # Fichier HTML de base
├── README.md                    # Documentation du projet
└── package.json                 # Dépendances du projet
```

## Prérequis

- Node.js (v12 ou supérieur)
- npm (v6 ou supérieur)

## Installation

1 - Cloner le projet :

```shell
git clone https://github.com/Emilie90/hrnet-react-p14
```

2 - Naviguer dans le dossier du projet :

```shell
cd hrnet
```

3 - Installer les dépendances :

```shell
npm install
```

## Lancement de l'application

1 - Lancer le serveur de développement :

```shell
npm start
```

2 - Accéder à l'application :

Ouvrez votre navigateur et accédez à http://localhost:3000.

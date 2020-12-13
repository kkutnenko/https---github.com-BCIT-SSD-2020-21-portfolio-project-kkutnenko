import React, { Component } from 'react';
import menuApp from '../assets/projects/menu.PNG'
import electroSparks from '../assets/projects/electrosparks1.png'
import designPrinciples from '../assets/projects/design.png'
import electrosparks from '../assets/projects/electrosparks2.png'
import movieApp from '../assets/projects/movie.png'
import eshop from '../assets/projects/eshop.png'

const projectData = [
    {
        name: 'MenuApp',
        image: menuApp,
        github: 'https://github.com/BCIT-SSD-2020-21/lab-7-intermediate-javascript-group_l.git',
        category: ['JavaScript']
    },
    {
        name: 'ElectroSparks',
        image: electroSparks,
        github: 'https://github.com/BCIT-SSD-2020-21/front-end-project-the-spartans',
        category: ['Html, Css, JavaScript']
    },
    {
        name: 'DesignPrinciples',
        image: designPrinciples,
        github: 'https://github.com/BCIT-SSD-2020-21/lab-3-advanced-css-group-a',
        category: ['Html, Css']
    },
    {
        name: 'Electrosparks',
        image: electrosparks,
        github: 'https://github.com/BCIT-SSD-2020-21/lab-1---angular-kkutnenko',
        category: ['Angular']
    },
    {
        name: 'MovieApp',
        image: movieApp,
        github: 'https://github.com/BCIT-SSD-2020-21/lab-2---react-kkutnenko',
        category: ['ReactJS']
    },
    {
        name: 'Eshop',
        image: eshop,
        github: 'https://github.com/BCIT-SSD-2020-21/ssdeshoponweb-kkutnenko',
        category: ['Asp.Net']
    },
]

export default projectData;
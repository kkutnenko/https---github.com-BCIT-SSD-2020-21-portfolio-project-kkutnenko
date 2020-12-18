import React, { Component } from 'react';
import menuApp from '../../assets/projects/menu.PNG'
import electroSparks from '../../assets/projects/electrosparks1.png'
import designPrinciples from '../../assets/projects/design.png'
import electrosparks from '../../assets/projects/electrosparks2.png'
import movieApp from '../../assets/projects/movie.png'
import eshop from '../../assets/projects/eshop.png'
import betterbuys from '../../assets/projects/Betterbuys.PNG'

const projectData = [
    
    {
        name: 'BetterBuys',
        image: betterbuys,
        github: 'https://betterbuysco.azurewebsites.net/',
        category: ['Asp.Net']
    },
    {
        name: 'Eshop',
        image: eshop,
        github: 'https://github.com/BCIT-SSD-2020-21/ssdeshoponweb-kkutnenko',
        category: ['Asp.Net']
    },
    {
        name: 'MovieApp',
        image: movieApp,
        github: 'https://github.com/BCIT-SSD-2020-21/lab-2---react-kkutnenko',
        category: ['ReactJS']
    },
    {
        name: 'Electrosparks',
        image: electroSparks,
        github: 'https://github.com/BCIT-SSD-2020-21/front-end-project-the-spartans',
        category: ['HTML', 'JavaScript']
    },
    {
        name: 'DesignPrinciples',
        image: designPrinciples,
        github: 'https://github.com/BCIT-SSD-2020-21/lab-3-advanced-css-group-a',
        category: ['HTML']
    },
    {
        name: 'Electrosparks with Angular',
        image: electrosparks,
        github: 'https://github.com/BCIT-SSD-2020-21/lab-1---angular-kkutnenko',
        category: ['Angular']
    }
    
]

export default projectData;
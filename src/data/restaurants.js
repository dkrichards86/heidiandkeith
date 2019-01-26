import React from 'react';

const dataset = [
  {
    title: "Gonza Tacos y Tequila",
    description: () => (
      <div>
        Because tacos, what else do you need to know? Gonza makes an ideal date
        night: guacamole, tacos, and a pitcher of margaritas. Usually followed
        by a quick disagreement about who gets to finish the margarita and who
        has to drive home.
      </div>
    ),
    image: "gonza_400x400.jpg",
    links: [
      {
        link: "http://durham.gonzatacosytequila.com/",
        icon: 'link'
      },
      {
        link: "https://goo.gl/maps/JSRNJBNSCfG2",
        icon: 'directions'
      }
    ]
  },
  {
    title: "Bull City Burger and Brewery",
    description: () => (
      <div>
        If you get a Bull City Burger and Brewery tattoo, you get free burgers
        for life. We really like their passion for quaility prducts. Try the
        Duck Frites.
      </div>
    ),
    image: "bcbb_400x400.jpg",
    links: [
      {
        link: "http://www.bullcityburgerandbrewery.com/",
        icon: 'link'
      },
      {
        link: "https://goo.gl/maps/3bWNBm7KkFx",
        icon: 'directions'
      }
    ]
  },
  {
    title: "Pompieri Pizza",
    description: () => (
      <div>
        Pompieri is a sister restaurant to Bull City Burger and Brewery, serving
        a Durhamers take on Neopolitan pizza. They also host Family Dinner on
        Sunday evenings, giving the chefs a chance to experiment and serve up
        some crazy pies.
      </div>
    ),
    image: "pompieri_400x400.jpg",
    links: [
      {
        link: "http://www.pompieripizza.com/",
        icon: 'link'
      },
      {
        link: "https://goo.gl/maps/ww5iNtNt7K22",
        icon: 'directions'
      }
    ]
  },
  {
    title: "Treforni",
    description: () => (
      <div>
        If you like Neopolitan style pizza straight from a brick oven, this South
        Durham gem is the place to get it. The olive oil is good enough to drink.
      </div>
    ),
    image: "treforni_400x400.jpg",
    links: [
      {
        link: "http://www.treforni.com/",
        icon: 'link'
      },
      {
        link: "https://goo.gl/maps/pNWRpryfVZu",
        icon: 'directions'
      }
    ]
  },
  {
    title: "Guglhupf",
    description: () => (
      <div>
        Guglhupf's is one of our favorite places to get breakfast. It is a
        traditional German bakery with incredible pastries. Heidi strongly
        recommends the chocolate croissant.
      </div>
    ),
    image: "guglhupf_400x400.jpg",
    links: [
      {
        link: "https://guglhupf.com/",
        icon: 'link'
      },
      {
        link: "https://goo.gl/maps/QZQqu8UmgPF2",
        icon: 'directions'
      }
    ]
  },
  {
    title: "The Parlour",
    description: () => (
      <div>
        We love The Parlour's artisanal ice creams! Just wait for the post-dinner
        ice cream social!
      </div>
    ),
    image: "parlour_400x400.jpeg",
    links: [
      {
        link: "https://theparlour.co/",
        icon: 'link'
      },
      {
        link: "https://goo.gl/maps/vRe7487SfrD2",
        icon: 'directions'
      }
    ]
  }
];

export default dataset;
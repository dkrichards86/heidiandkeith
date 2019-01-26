import React from 'react';

const dataset = [
  {
    title: "Ponysaurus",
    description: () => (
      <div>
        Ponysaurus makes "The beer beer could drink if beer could drink beer".
        We really like the Biere de Garde and Golden Rule Saison. In addition to
        great brews, we also appreciate Ponysaurus' philanthropy, donating
        proceeds and hosting festivals to support North Carolina's LGBTQ community.
      </div>
    ),
    image: "ponysaurus_400x400.png",
    links: [
      {
        link: "http://ponysaurusbrewing.com/",
        icon: 'link'
      },
      {
        link: "https://goo.gl/maps/XonFdTmGgum",
        icon: 'directions'
      }
    ]
  },
  {
    title: "Sams Bottle Shop",
    description: () => (
      <div>
        Sam's Bottle Shop is one of our favorite bottle shops in the area, with
        a huge selection of beers from around the world. Plus they play great
        music. It's metal. Heidi hates it.
      </div>
    ),
    image: "sams_400x400.jpg",
    links: [
      {
        link: 'http://samsbottleshop.com/',
        icon: 'link'
      },
      {
        link: 'https://goo.gl/maps/NmbAp7tEkkB2',
        icon: 'directions'
      }
    ]
  },
  {
    title: "Pour Taproom",
    description: () => (
      <div>
        We like Pour's huge selection (60 taps!) and great location in the heart
        of downtown Durham.
      </div>
    ),
    image: "pour_400x400.jpeg",
    links: [
      {
        link: 'http://durham.pourtaproom.com/',
        icon: 'link'
      },
      {
        link: 'https://goo.gl/maps/G5ZKk2Y8YBu',
        icon: 'directions'
      }
    ]
  },
  {
    title: "Bull City Ciderworks",
    description: () => (
      <div>
        Bull City Ciderworks is Durham's premier cidery. Heidi likes their subtle
        approach to craft ciders.
      </div>
    ),
    image: "ciderworks_400x400.jpg",
    links: [
      {
        link: "http://www.bullcityciderworks.com/durham",
        icon: 'link'
      },
      {
        link: "https://goo.gl/maps/5ofk7DF32N42",
        icon: 'directions'
      }
    ]
  }
];

export default dataset;
import React from 'react';

const dataset = [
  {
    title: "American Tobacco Campus",
    description: () => (
      <div>
        American Tobacco Campus is a former tobacco factory turned into restaurants
        and tech offices. Check out the renovated buildings, central millrace,
        and the iconic Lucky Stike Tower. Venture across the street to the
        current home of the Durham Bulls.
      </div>
    ),
    image: "atc_400x400.jpg",
    links: [
      {
        link: "https://americantobaccocampus.com/",
        icon: 'link'
      },
      {
        link: "https://goo.gl/maps/amQjqiJrMey",
        icon: 'directions'
      }
    ]
  },
  {
    title: "Museum of Life and Science",
    description: () => (
      <div>
        We like the Museum of Life and Science for its hands-on exhibits,
        centered around STEM (science, technology, engineering and mathematics)
        disciplines.
      </div>
    ),
    image: "life-science_400x400.png",
    links: [
      {
        link: "https://www.lifeandscience.org/",
        icon: 'link'
      },
      {
        link: "https://goo.gl/maps/RM5i1tAFSzS2",
        icon: 'directions'
      }
    ]
  },
  {
    title: "Duke Lemur Center",
    description: () => (
      <div>
        <p>
          From their website, "The Duke Lemur Center houses nearly 240 rare and
          endangered prosimian primates and constitutes the world’s largest and
          most diverse population of lemurs outside their native Madagascar."
        </p>
        <p>
          The DLC tour gets you up close and personal with the gregarious lemurs.
          We've arragned a private tour at 11am on Saturday, March 23rd. For $8.60
          per person, you can see what the Duke Lemur Center has to offer.
          Contact <a href="mailto:heidi.schoeppner@gmail.com?subject=Lemur Tour">Heidi</a> to
          reserve a spot!
        </p>
      </div>
    ),
    image: "dlc_400x400.jpg",
    links: [
      {
        link: "https://lemur.duke.edu/",
        icon: 'link'
      },
      {
        link: "https://goo.gl/maps/hMEBcJm7kXz",
        icon: 'directions'
      }
    ]
  },
  {
    title: "Eno River State Park",
    description: () => (
      <div>
        We like Eno River State Park's 4,200 acres and several miles of hiking
        and walking trails. Be sure to check out the suspension bridge crossing
        the Eno River.
      </div>
    ),
    image: "eno_400x400.jpg",
    links: [
      {
        link: "https://www.ncparks.gov/eno-river-state-park",
        icon: 'link'
      },
      {
        link: "https://goo.gl/maps/JDBWrMJhsYu",
        icon: 'directions'
      }
    ]
  },
  {
    title: "Sarah P. Duke Gardens",
    description: () => (
      <div>
        Duke Gardens offer 55 acres of landscaped and wooded areas, with 5 miles
        of walking trails weaving through the garden. We like it as a peaceful escape.
      </div>
    ),
    image: "dukegardens_400x400.jpg",
    links: [
      {
        link: "http://gardens.duke.edu/",
        icon: 'link'
      },
      {
        link: "https://goo.gl/maps/V5Q5C7PgQqm",
        icon: 'directions'
      }
    ]
  },
  {
    title: "Third Friday Durham",
    description: () => (
      <div>
        On the third Friday of every month, downtown Durham shops and art
        boutiques extend their hours to encourage economic development.
      </div>
    ),
    image: "thirdfriday_400x400.jpeg",
    links: [
      {
        link: "https://downtowndurham.com/event/third-friday-durham/",
        icon: 'link'
      }
    ]
  },
  {
    title: "Durham Farmers Market",
    description: () => (
      <div>
        Every Saturday morning, Durham's Central Park hosts a large farmers
        market and Food Truck Rodeo, appealing to the city's foodie scene.
      </div>
    ),
    image: "farmersmarket_400x400.bmp",
    links: [
      {
        link: "https://durhamfarmersmarket.com/",
        icon: 'link'
      },
      {
        link: "https://goo.gl/maps/sDProMtSRW52",
        icon: 'directions'
      }
    ]
  }
];


export default dataset;

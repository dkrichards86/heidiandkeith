import React from 'react';

const dataset = [
  {
    title: "Durham Habitat for Humanity",
    description: () => (
      <div>
        We believe everyone needs a place to live. Heidi is a fan of Habitat,
        volunteering to help the community. She even travelled to Honduras to
        build houses for Habitat for Humanity's Global Village.
      </div>
    ),
    image: "habitat_400x400.jpg",
    links: [
      {
        link: 'http://www.durhamhabitat.org/',
        icon: 'link'
      },
      {
        link: 'http://www.durhamhabitat.org/donate',
        icon: 'donate'
      }
    ]
  },
  {
    title: "Wounded Warrior Project",
    description: () => (
      <div>
        As a United States Marine Corps veteran, Keith appreciates Wounded
        Warrior Project for bettering the quality of life for veterans and active
        duty service members.
      </div>
    ),
    image: "wwp_400x400.jpg",
    links: [
      {
        link: 'https://www.woundedwarriorproject.org/',
        icon: 'link'
      },
      {
        link: 'https://support.woundedwarriorproject.org/Default.aspx?tsid=10043',
        icon: 'donate'
      }
    ]
  },
  {
    title: "Duke Lemur Center",
    description: () => (
      <div>
        The Duke Lemur Center is home to 240 species of Lemurs and other
        prosimians. We appreciate their mission and their awesome tour.
      </div>
    ),
    image: "dlc_400x400.jpg",
    links: [
      {
        link: 'https://lemur.duke.edu/',
        icon: 'link'
      },
      {
        link: 'https://lemur.duke.edu/donate/',
        icon: 'donate'
      }
    ]
  }
];

export default dataset;
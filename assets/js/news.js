

export const news = [
  {
    id:0,
    title: "Meeting with the Federation of Pedicab Drivers of Calbayog",
    date: "October 1, 2022",
    description:
      "Meeting with the Federation of Pedicab Drivers of Calbayog The members of the federation expressed their willingness to join the city in commemorating its Charter Day in October 16, 2022. They will celebrate Pedicab Drivers Day in October 14, 2022 with some series of activities. Also present during the meeting was Hon. Rosendo A. Morales, SP Chairman of the Committee on Transportation and Communications",
      images: [
        "/images/news/coa/pic1.jpg",
        "/images/news/coa/pic2.jpg"
      ],
  },
  {
    id:1,
    title:"CONGRATULATIONS to the City Solid Waste Management Office for initiating BASURA CAMPAIGN today and BIG THANKS to all barangays who participated in this activity",
    date: "September 30, 2022",
    description:'This is to commence series of activities initiated by CSWMO in line with its 25th Anniversary with the theme "Public Private Partnership Towards Saving the Environment Through Waste Minimization Approach for a Cleaner and Healthier City',
    images: [
      "/images/news/coa/pic1.jpg",
      "/images/news/coa/pic2.jpg"
    ],
  },
  {
    id:2,
    title: "COA EXIT CONFERENCE for 60 Barangays",
    date: "September 30, 2022",
    description:
      "COA EXIT CONFERENCE for 60 Barangays CY 2019-2021 @Baypark Hotel, Calbayog City",
      images: [
      "/images/news/coa/pic1.jpg",
      "/images/news/coa/pic2.jpg"
    ],
  },
]


export var selectedNewsIndex = 1;
export function setSelected(value){selectedNewsIndex =value };
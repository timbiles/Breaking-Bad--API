import React from 'react'

export const characterExample = (
    <pre>
      {
`{
    char_id: 1,
    name: "Walter White",
    birthday: "09-07-1958",
    occupation: [
        "High School Chemistry Teacher",
        "Meth King Pin"
    ],
    img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
    status: "Deceased",
    appearance: [1, 2, 3, 4, 5],
    nickname: "Heisenberg",
    portrayed: "Bryan Cranston"
}`}
    </pre>
);

export const multipleCharacterExample = (
    <pre>
      {
`{
    char_id: 1,
    name: "Walter White",
    birthday: "09-07-1958",
    occupation: [
        "High School Chemistry Teacher",
        "Meth King Pin"
    ],
    img: "https://images.amcnetworks.com/amc.com/wp-content/uploa...",
    status: "Deceased",
    appearance: [1, 2, 3, 4, 5],
    nickname: "Heisenberg",
    portrayed: "Bryan Cranston",
    better_call_saul_appearance: [ ]
},
{
    char_id: 4,
    name: "Walter White Jr.",
    birthday: "07-08-1993",
    occupation: [
        "Teenager"
    ],
    img: "https://media1.popsugar-assets.com/files/thumbor/WeLUSvbA...",
    status: "Alive",
    nickname: "Flynn",
    appearance: [ 1, 2, 3, 4, 5 ],
    portrayed: "RJ Mitte",
    category: "Breaking Bad",
    better_call_saul_appearance: [ ]
}`}
    </pre>
);

export const episodeExample = (
    <pre>{
`{
    episode_id: 60,
    title: "Ozymandias",
    season: 5,
    episode: 14,
    air_date: "09-15-2013",
    characters: [
        "Walter White",
        "Jesse Pinkman",
        "Skyler White",
        Walter White Jr.",
        ...
    ]
}`}</pre>
  );

export const quoteExample = (
    <pre>{
`[
    {
        quote_id: 9,
        quote: "Funyuns are awesome.",
        author: "Jesse Pinkman"
    },
    {
        quote_id: 10,
        quote: "Ooooooh, Wire.",
        author: "Jesse Pinkman"
    },
    ...`}</pre>
  );

export const deathExample = (
    <pre>{
`{
    name: "Gustavo Fring",
    deathCount: 22
}`}</pre>
  );
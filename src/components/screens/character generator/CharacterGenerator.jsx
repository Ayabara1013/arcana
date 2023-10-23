import { useState } from 'react';

import options from './characterOptions.json';
const origins = options.origins;

const capitalizedString = (string) => {
  let newString = string.toUpperCase();
  let firstLetter = newString.charAt(0).toUpperCase();
  // console.log(firstLetter + string.slice(1));
  newString = firstLetter + string.slice(1);
  // return newString;

  return string.charAt(0).toUpperCase() + string.slice(1);
};

const getLanguages = () => {
  let results = [];

  for (const item in origins) {

    if (Array.isArray(origins[item].language)) {
      origins[item].language.forEach(language => {
        // console.log(language);

        if (!results.includes(language)) {
          results.push(language);
        }
      })
    }
    else if (!results.includes(origins[item].language)) {
      results.push(origins[item].language);
    }
  }

  return results;
}

const getOrigin = () => {
  const numOrigins = Object.keys(origins).length;
  const originNum = Math.floor(Math.random() * numOrigins);
  const origin = Object.values(origins)[originNum];

  return origin;
}

const getGender = () => {
  if (Math.random() < 0.45) return 'male';
  else if (Math.random() < 0.9) return 'female';
  else return 'other';
}

const getSpokenLangauges = () => {
  let spokenLangauges = languages[Math.floor(Math.random() * languages.length)];
  // console.log(spokenLangauges);
  return spokenLangauges;
}


const languages = getLanguages();

export default function CharacterGenerator() {
  const tempOrigin = getOrigin();

  const [result, setResult] = useState({
    name: ['JOHN', 'SMITH'],
    origin: tempOrigin || {
      name: 'WHITE',
      language: 'ENGLISH',
    },
    ethnicity: getOrigin().name || 'WHITE',
    spokenLangauges: getSpokenLangauges() || 'ENGLISH',
  });

  // console.log(generateThing(getString(), getNumber()));
  // console.log(getGender());
  // console.log(getSpokenLangauges());

  return (
    <div className='character-generator d-flex flex-column h-100 box'>
      <h1>Character Generator</h1>

      <div className='d-flex flex-row box -red'>
        <div className='tool-column flex-grow-1 box -blue'>
          <div className="d-flex flex-row gap-2 box -w2 -skyblue">
            <button className={`btn btn-primary`} onClick={() => {
              // set origin
              setResult(prevResult => ({
                ...prevResult,
                origin: getOrigin(),
                ethnicity: getOrigin().name,
              }))
            }
            }>
              generate origin
            </button>

            <button className={`btn btn-primary`} onClick={() => console.log(capitalizedString('hello'))}>
              test
            </button>
            <button className={`btn btn-primary`} onClick={getLanguages}>
              test languages
            </button>
          </div>
        </div>

        <div className='result-column flex-grow-1 box -green'>
          <div></div>
          <div>origin: {Object(result.origin.name)}</div>
          <div>ethnicity: {result.ethnicity}</div>
          <div>languages: {result.spokenLangauges}</div>
          <div>gender: {getGender()}</div>
        </div>
      </div>
    </div>
  )
}




function getString() {
  return 'hello';
}

function getNumber() {
  return 1;
}

function generateThing(string, number) {
  return string + number;
}
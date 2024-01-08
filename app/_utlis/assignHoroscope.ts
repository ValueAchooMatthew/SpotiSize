import { StarLinks, StarNodes } from "../_types/data";
import { horoscopes } from "@/app/_types/data";

export default function assignHoroscope(danceability: number, energy: number, valence: number, tempo: number){

  const danceabilityRange = danceability >= 0.5 ? "high" : "low";
  const energyRange = energy >= 0.5 ? "high" : "low";
  const valenceRange = valence >= 0.5 ? "high" : "low";
  const tempoRange = tempo >= 120 ? "high" : "low";
  const horoscopeMap: { [key: string]: {horoscope: horoscopes, emoji: string, data: {nodes: StarNodes[], links: StarLinks[]}} } = {
    "low_low_low_low": {horoscope: "Aquarius", emoji: "🌊", data:
       {nodes: [{id: "a", default: {x: 450, y: 0}, size: 25}, {id: "b", default: {x: 325, y:80} , size:15},
         {id: "c", default: {x: 250, y: 140}, size: 15}, {id: "d", default: {x: 300, y: 200}, size: 25},
         {id: "e", default: {x: 410, y: 195}, size: 15}, {id: "f", default: {x: 225, y: 180}, size: 15},
         {id: "g", default: {x: 160, y: 110}, size: 25}, {id: "h", default: {x: 145, y: 165}, size: 15},
         {id: "i", default: {x: 230, y: 350}, size: 15}, {id: "j", default: {x: 265, y: 275}, size: 15},
         {id: "k", default: {x: 400, y: 280}, size: 15}, {id: "l", default: {x: 440, y: 350}, size: 25},
         {id: "m", default: {x: 480, y: 400}, size: 15}
       ], links: [{source: "a", target: "b"}, {source: "b", target: "c"}, {source: "c", target: "d"}, {source: "d", target: "e"},
         {source: "c", target: "f"}, {source: "f", target: "g"}, {source: "g", target: "h"}, {source: "h", target: "i"},
         {source: "i", target: "j"}, {source: "j", target: "k"}, {source: "k", target: "l"}, {source: "l", target: "m"} 
       ]}},
    "low_low_low_high": {horoscope: "Pisces", emoji: "🐟", data: 
    {nodes: [{id: "a", default: {x: 10, y: 0}, size: 10}, {id: "b", default: {x: 0, y: 60} , size: 10},
      {id: "c", default: {x: 30, y: 110}, size: 20}, {id: "d", default: {x: 25, y: 200}, size: 20},
      {id: "e", default: {x: 10, y: 275}, size: 10}, {id: "f", default: {x: -12, y: 350}, size: 30},
      {id: "g", default: {x: 40, y: 300}, size: 20}, {id: "h", default: {x: 85, y: 275}, size: 15},
      {id: "i", default: {x: 150, y: 225}, size: 10}, {id: "j", default: {x: 180, y: 190}, size: 8},
      {id: "k", default: {x: 300, y: 140}, size: 20}, {id: "l", default: {x: 340, y: 120}, size: 8},
      {id: "m", default: {x: 370, y: 90}, size: 8}, {id: "n", default: {x: 400, y: 120}, size: 15},
      {id: "o", default: {x: 385, y: 150}, size: 8}, {id: "p", default: {x: 345, y: 175}, size: 8}
    ], links: [{source: "a", target: "b"}, {source: "a", target: "c"}, {source: "b", target: "c"}, {source: "c", target: "d"}, {source: "d", target: "e"},
      {source: "e", target: "f"}, {source: "f", target: "g"}, {source: "g", target: "h"}, {source: "h", target: "i"}, {source: "i", target: "j"},
      {source: "j", target: "k"}, {source: "k", target: "l"}, {source: "l", target: "m"}, {source: "m", target: "n"}, {source: "n", target: "o"},
      {source: "o", target: "p"}, {source: "p", target: "l"}, 
    ]}
  
  
    },
    "low_low_high_low": {horoscope: "Aries", emoji: "🐏", data: {
      nodes: [{id: "a", default: {x: 0, y: 30}, size: 15}, {id: "b", default: {x: 225, y: 80}, size: 20},
        {id: "c", default: {x: 300, y: 140}, size: 15}, {id: "d", default: {x: 340, y: 200}, size: 10}],
      links: [{source: "a", target: "b"}, {source: "b", target: "c"}, {source: "c", target: "d"}]
    }},
    "low_low_high_high": {horoscope: "Taurus", emoji: "🐂", data: {
      nodes: [{id: "a", default: {x: 20, y: 30}, size: 15}, {id: "b", default: {x: 100, y: 80}, size: 17}, {id: "c", default: {x: 140, y: 120}, size: 17},
        {id: "d", default: {x: 165, y: 155}, size: 7}, {id: "e", default: {x: 195, y: 185}, size: 10}, {id: "f", default: {x: 162, y: 215}, size: 8},
        {id: "g", default: {x: 130, y: 185}, size: 17}, {id: "h", default: {x: 0, y: 140}, size: 15}, {id: "i", default: {x: 240, y: 245}, size: 17},
        {id: "j", default: {x: 205, y: 260}, size: 7}, {id: "k", default: {x: 230, y: 300}, size: 8}, {id: "l", default: {x: 300, y: 210}, size: 7},
        {id: "m", default: {x: 305, y: 250}, size: 7}, {id: "n", default: {x: 320, y: 265}, size: 6}],
      links: [{source: "a", target: "b"}, {source: "b", target: "c"}, {source: "c", target: "d"}, {source: "d", target: "e"}, {source: "e", target: "f"},
        {source: "f", target: "g"}, {source: "g", target: "h"}, {source: "e", target: "i"}, {source: "i", target: "j"}, {source: "j", target: "k"},
        {source: "i", target: "l"}, {source: "l", target: "m"}, {source: "m", target: "n"}]
    }},
    "low_high_low_low": {horoscope: "Gemini", emoji: "👬", data: {
      nodes: [{id: "a", default: {x: 60, y: -10}, size: 20},{id: "b", default: {x: 70, y: 50}, size: 10}, {id: "c", default: {x: 10, y: 60}, size: 10},
        {id: "d", default: {x: 100, y: 60}, size: 10}, {id: "e", default: {x: 60, y: 120}, size: 10}, {id: "f", default: {x: 0, y: 180}, size: 10},
        {id: "g", default: {x: 20, y: 280}, size: 12}, {id: "h", default: {x: 95, y: 180}, size: 10}, {id: "i", default: {x: 80, y: 270}, size: 12},
        {id: "j", default: {x: 150, y: 65}, size: 10}, {id: "k", default: {x: 120, y: 18}, size: 20}, {id: "l", default: {x: 195, y: 55}, size: 10},
        {id: "m", default: {x: 140, y: 200}, size: 10}, {id: "n", default: {x: 125, y: 265}, size: 12}, {id: "o", default: {x: 170, y: 235}, size: 10},
        {id: "p", default: {x: 192, y: 275}, size: 10}, {id: "q", default: {x: 230, y: 290}, size: 12}],
      links: [{source: "a", target: "b"}, {source: "b", target: "c"}, {source: "b", target: "d"}, {source: "b", target: "e"}, {source: "e", target: "f"},
        {source: "f", target: "g"}, {source: "e", target: "h"}, {source: "h", target: "i"}, {source: "d", target: "j"}, {source: "j", target: "k"}, {source: "j", target: "l"},
        {source: "j", target: "m"}, {source: "m", target: "n"}, {source: "m", target: "o"}, {source: "o", target: "p"}, {source: "p", target: "q"},]

    }}, 
    "low_high_low_high": {horoscope: "Cancer", emoji: "🦀", data: {
      nodes: [{ id: "a", default: {x: 100, y: 0}, size: 25 }, 
        { id: "b", default: {x: 90, y: 325}, size: 15}, 
        { id: "c", default: {x: 255, y: 80}, size: 10},
        { id: "d", default: {x: 325, y: 100}, size: 17 },
        { id: "e", default: {x: 425, y: 90}, size: 18 },
        { id: "f", default: {x: 550, y: 0}, size: 25}],
      links: [
        { source: "a", target: "c"},
        { source: "c", target: "d"},
        { source: "d", target: "b"},
        { source: "d", target: "e"},
        { source: "e", target: "f"},
      ],
    },
    },
    "low_high_high_low": {horoscope: "Leo", emoji: "🦁", data: {
      nodes: [{ id: "a", default: {x: 50, y: 200}, size: 15}, { id: "b", default: {x: 110, y: 130}, size: 15},
        { id: "c", default: {x: 200, y: 135}, size: 10}, { id: "d", default: {x: 210, y: 95}, size: 8},
        { id: "e", default: {x: 260, y: 30}, size: 8}, { id: "f", default: {x: 290, y: 45}, size: 10},
        { id: "g", default: {x: 240, y: 215}, size: 20}, { id: "h", default: {x: 100, y: 190}, size: 8}],
      links: [{source: "a", target: "b"}, { source: "b", target: "c"}, { source: "c", target: "d"}, { source: "d", target: "e"},
        { source: "e", target: "f"}, { source: "c", target: "g"}, { source: "g", target: "h"}, { source: "h", target: "a"}]


    }},
    "low_high_high_high": {horoscope: "Virgo", emoji: "😇", data: {
      nodes: [{id: "a", default: {x: 170, y: 50}, size: 10}, {id: "b", default: {x: 200, y: 90}, size: 8}, {id: "c", default: {x: 165, y: 160}, size: 6}, 
        {id: "d", default: {x: 100, y: 190}, size: 8}, {id: "e", default: {x: 35, y: 205}, size: 8}, {id: "f", default: {x: 200, y: 230}, size: 15},
        {id: "g", default: {x: 130, y: 270}, size: 8}, {id: "h", default: {x: 50, y: 295}, size: 6}, {id: "i", default: {x: 250, y: 140}, size: 10},
        {id: "j", default: {x: 280, y: 100}, size: 10}, {id: "k", default: {x: 320, y: 20}, size: 10}],
      links: [{source: "a", target: "b"}, {source: "b", target: "c"}, {source: "c", target: "d"}, {source: "d", target: "e"},
        {source: "c", target: "f"}, {source: "f", target: "g"}, {source: "g", target: "h"}, {source: "f", target: "i"}, {source: "i", target: "b"},
        {source: "i", target: "j"}, {source: "j", target: "k"},]



    }},
    "high_low_low_low": {horoscope: "Libra", emoji: "⚖️", data: {
      nodes: [{id: "a", default: {x: 100, y: 0}, size: 15}, {id: "b", default: {x: 0, y: 85}, size: 10},{id: "c", default: {x: 200, y: 85}, size: 10}, 
        {id: "d", default: {x: 45, y: 200}, size: 10}, {id: "e", default: {x: 18, y: 250}, size: 10}, {id: "f", default: {x: 180, y: 195}, size: 10}],
      links: [{source: "a", target: "b"}, {source: "a", target: "c"}, {source: "b", target: "c"}, {source: "b", target: "d"}, {source: "d", target: "e"}, 
        {source: "c", target: "f"},]
    }},
    "high_low_low_high": {horoscope: "Scorpio", emoji: "🦂", data: {
      nodes: [{id: "a", default: {x: 100, y: 250}, size: 15}, {id: "b", default: {x: 60, y: 290}, size: 10}, {id: "c", default: {x: 10, y: 330}, size: 8},
        {id: "d", default: {x: 95, y: 360}, size: 10}, {id: "e", default: {x: 160, y: 360}, size: 10}, {id: "f", default: {x: 200, y: 340}, size: 10},
        {id: "g", default: {x: 210, y: 280}, size: 10}, {id: "h", default: {x: 220, y: 230}, size: 10}, {id: "i", default: {x: 225, y: 160}, size: 10},
        {id: "j", default: {x: 265, y: 120}, size: 15}, {id: "k", default: {x: 290, y: 100}, size: 10}, {id: "l", default: {x: 330, y: 60}, size: 12},
        {id: "m", default: {x: 315, y: 5}, size: 10}, {id: "n", default: {x: 280, y: -15}, size: 10}, {id: "o", default: {x: 335, y: 160}, size: 10},
        {id: "p", default: {x: 342, y: 230}, size: 10}],
      links: [{source: "a", target: "b"}, {source: "b", target: "c"}, {source: "c", target: "d"}, {source: "d", target: "e"}, {source: "e", target: "f"},
        {source: "f", target: "g"}, {source: "g", target: "h"}, {source: "h", target: "i"}, {source: "i", target: "j"}, {source: "j", target: "k"}, 
        {source: "k", target: "l"}, {source: "l", target: "m"}, {source: "m", target: "n"}, {source: "l", target: "o"}, {source: "o", target: "p"}]

    }},
    // "high_low_high_low": "Sagitarius"
    // "high_low_high_high": "Capricorn"

    // const key = `${danceabilityRange}_${energyRange}_${valenceRange}_${tempoRange}`;
    // if(horoscopeMap[key]){
    //   return horoscopeMap[key]
    // }else{
    //   return undefined
    // }

  }
  return horoscopeMap.high_low_low_high

}
import axios from "axios";

export default {
    Query: {
        parks: () => {
            return list;
        },

        attractions: async (_parent: any, park: any) => {
            var attractions: Attraction[] = [];
            await axios.get<Attraction[]>(`https://api.themeparks.wiki/preview/parks/${park.park}/waittime`)
            .then(res => {
                attractions = res.data;
            });
            return attractions;
        }
    }
}

interface Attraction {
    id: string;
    name: string;
    waitTime: number;
    status: string;
    active: boolean;
    lastUpdate: string;
    fastPass: boolean;
}

interface Park {
    name: string
}

const list: Park[] = [
   {name: "WaltDisneyWorldMagicKingdom"}, 
   {name: "WaltDisneyWorldEpcot"},
   {name: "WaltDisneyWorldHollywoodStudios"},
   {name: "WaltDisneyWorldAnimalKingdom"},
   {name: "DisneylandResortCaliforniaAdventure"},
   {name: "DisneylandResortMagicKingdom"},
   {name: "DisneylandParisWaltDisneyStudios"},
   {name: "DisneylandParisMagicKingdom"},
   {name: "HongKongDisneylandPark"},
   {name: "ShanghaiDisneylandPark"},
   {name: "TokyoDisneyland"},
   {name: "TokyoDisneySea"},
];
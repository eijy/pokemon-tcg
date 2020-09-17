export interface cards {
    id: string;
    name: string;
    nationalPokedexNumber: number;
    imageUrl: string;
    imageUrlHiRes: string;
    types: Array<string>;
    supertype: string;
    subtype: string;
    evolvesFrom: string;
    hp: string;
    retreatCost: Array<string>;
    number: string;
    artist: string;
    rarity: string;
    series: string;
    set: string;
    setCode: string;
    attacks: attacks[];
    weaknesses: weaknesses[];
    resistances: Array<string>
  }
  interface attacks {
        cost: Array<string>;
        name: string;
        text: string;
        damage: string;
        convertedEnergyCost: number;
  }
  interface weaknesses {
      type: string,
      value: string
  }
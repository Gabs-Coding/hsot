declare namespace CoC7 {
  interface Attributes {
    hp: {
      "value": number,
      "max": number,
      "short": string,
      "label": string,
      "auto": boolean
    };
  }

  interface ActorSystemData {
    attribs: Attributes;
  }
}

// Extensão do tipo base do Foundry
interface Actor {
  system: CoC7.ActorSystemData;
}

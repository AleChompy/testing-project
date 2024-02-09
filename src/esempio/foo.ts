export const ordinilist : ordine[] = []; 

type ordine = {
  cf : string,
  name : string,
  surname : string,
  email: string, 
  giftcard: Giftcard []
}

type Giftcard = {
  digitale : boolean; 
  taglio : number; 
  quantita : number,
}

type TypeAmount = {
  iva : number; 
  imponibile : number; 
  sommaIva : number,
}


 export const newOrder = ({cf, name, surname, email}) : ordine => {
  const ordine : ordine  = {
    cf : cf,
    name : name,
    surname : surname,
    email: email, 
    giftcard : [],
  }
  return ordine; 
}

 export const addGiftcard = ({digitale, taglio, quantita}) :  ordine => {
  const ordine : ordine = ordinilist [ordinilist.length-1];
  ordine.giftcard.push(digitale, taglio, quantita);
  if(ordine.giftcard[ordine.giftcard.length-1].taglio === taglio){
    ordine.giftcard[ordine.giftcard.length-1].quantita = ordine.giftcard[ordine.giftcard.length-1].quantita + quantita;
  }
  return ordine;
}


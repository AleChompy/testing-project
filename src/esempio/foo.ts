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

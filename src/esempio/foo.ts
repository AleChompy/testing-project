type customer = {
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

 export const newOrder = ({cf, name, surname, email}) : customer => {
  const ordine : customer  = {
    cf : cf,
    name : name,
    surname : surname,
    email: email, 
    giftcard : [],
  }
  return ordine; 
 }
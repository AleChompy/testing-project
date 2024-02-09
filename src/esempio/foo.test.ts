import { newOrder } from "./foo";

// Test newOrder
const customerData = {
  cf : "RRGLSN03P13F133C",
  name : "Alessandro",
  surname : "Arrigoni",
  email : "ale-arrigoni@live.com"
}

describe('newOrder', () => {
    test('Crea correttamente un ordine', () => {
        const order = newOrder(customerData);
        expect(order).toBeDefined();
    });

    test('ordine contiene i dati corretti', () => {
        const order = newOrder(customerData);
        expect(order.cf).toBe(customerData.cf);
        expect(order.name).toBe(customerData.name);
        expect(order.surname).toBe(customerData.surname);
        expect(order.email).toBe(customerData.email);
    });
  

    test('cf del cliente nell ordine è corretto', () => {
        const order = newOrder(customerData);
        expect(order.cf).toBe(customerData.cf);
    });
  

    test ("controllo la lunghezza del nome", () =>{
      expect(customerData.name.length<50).toBe(true); 
    });

    test ("controllo la lunghezza del cognome", () => {
      expect(customerData.surname.length<50).toBe(true); 
    });

    test ("controllo mail con @", () => {
      expect(customerData.email).toContain("@");
    }); 

    test ("controllo cf", () => {
      expect(customerData.cf.length === 16).toBe(true);
      expect((customerData.cf.match(/[A-Z]/g) || []).length==9).toBe(true);
    }); 
});

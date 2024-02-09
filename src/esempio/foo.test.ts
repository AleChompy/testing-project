import { newOrder } from "./foo";

// Test newOrder
const customerData = {
  cf : "RRGLSN03P13F133C",
  name : "Alessandro",
  surname : "Arrigoni",
  email : "ale-arrigoni@live.com"
}

const giftCardData = {
  digitale : true, 
  taglio : 100,
  quantita : 1,
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

  describe('addGiftcard', () => {
    test("Controllo taglio giftcard", () => {
      expect(giftCardData.taglio===10 || giftCardData.taglio===20 || giftCardData.taglio===50 || giftCardData.taglio===100).toBe(true);
    });

    test("Controllo quantità", () => {
      expect(giftCardData.quantita>0).toBe(true);
    });
  });

  describe('getAmount', () => {
    test("Happy path", () => {
      
    })
  }); 


// Test newOrder
const customerData = {
  cf : "AAA132215C12",
  name : "alberto",
  surname : "palezza",
  email : "oba@oba.it"
}

describe('newOrder', () => {
    test('Crea correttamente un ordine', () => {
        const order = newOrder(customerData);
        expect(order).toBeDefined();
    });

    test('ordine contiene i dati corretti', () => {
        const order = newOrder(customerData);
        expect(order.customerCf).toBe(customerData.cf);
        expect(order.customerName).toBe(customerData.name);
        expect(order.customerSurname).toBe(customerData.surname);
        expect(order.customerEmail).toBe(customerData.email);
    });
  

    test('cf del cliente nell ordine è corretto', () => {
        const order = newOrder(customerData);
        expect(order.customerCf).toBe(customerData.cf);
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
      expect(customerData.cf.replace("/[^A-Z]/gi","").length==9).toBe(true);
    }); 0
});

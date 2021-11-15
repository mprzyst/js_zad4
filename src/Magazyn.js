import { ListaTowarow } from "./ListaTowarow";
export class Magazyn extends ListaTowarow {
  dodajProdukt(produkt, ilosc) {
    //oprócz samego produktu będzie zawierała ilość sztuk, które zostają dane
    if (this.znajdzProdukt(produkt.id).length == 0) {
      this.lista.push({ produkt: produkt, ilosc: ilosc });
    } else {
      throw "Produkt juz istnieje";
    }
  }

  zabierzProdukt(produkt, ilosc) {
    if (this.znajdzProdukt(produkt.id).length == 0) {
      console.log("Produkt nie istnieje.");
    } else {
      for (let i = 0; i < this.lista.length; i++) {
        if (
          this.lista[i].produkt.id === produkt.id &&
          this.lista[i].ilosc >= ilosc
        ) {
          this.lista[i].ilosc -= ilosc;
        }
      }
    }
  }
}

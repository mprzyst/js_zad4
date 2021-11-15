import { ListaTowarow } from "./ListaTowarow";
import { Produkt } from "./Produkt";
import { Magazyn } from "./Magazyn";

export class Sklep extends ListaTowarow {
  zamowienie = new Array();
  //magazyn = new Magazyn();

  dodajProdukt(nazwa, model, cena, zuzycieEnergii) {
    //id produktu powinno byc generowane automatycznie
    let sameIdExists = true;
    while (sameIdExists) {
      let id = Math.floor(Math.random() * 101 + 1);
      if (this.znajdzProdukt(id).length == 0) {
        let produkt = new Produkt();
        produkt.id = id;
        produkt.nazwa = nazwa;
        produkt.model = model;
        produkt.cena = cena;
        produkt.zuzycieEnergii = zuzycieEnergii;
        this.lista.push({ produkt: produkt });
        sameIdExists = false;
      }
    }
  }

  dodajProdukt(idProduktu, nazwa, model, cena, zuzycieEnergii) {
    if (this.znajdzProdukt(idProduktu).length == 0) {
      let produkt = new Produkt();
      produkt.id = idProduktu;
      produkt.nazwa = nazwa;
      produkt.model = model;
      produkt.cena = cena;
      produkt.zuzycieEnergii = zuzycieEnergii;
      this.lista.push({ produkt: produkt });
    } else {
      console.log("Produkt juz istnieje");
    }
  }

  dodajZamowienie(idProduktu, ilosc) {
    //będzie umożliwiało dodanie produktów do zamówienia (po ID istniejącego produktu)
    if (this.znajdzProdukt(idProduktu).length == 0) {
      console.log("Nie znaleziono produktu.");
    } else {
      let index = this.lista.findIndex(
        (element) => element.produkt.id === idProduktu
      );
      if (this.lista[index].ilosc >= ilosc) {
        this.zamowienie.push({
          produkt: this.lista[index].produkt,
          ilosc: ilosc,
        });
      }
    }
  }

  zrealizujZamowienie() {
    //usuwa produkt (odpowiednią ilość) z magazynu z którego pochodzi
    for (let i = 0; i < this.zamowienie.length; i++) {
      let index = this.lista.findIndex(
        (element) => element.produkt.id == this.zamowienie[i].produkt.id
      );
      this.lista[index].ilosc -= this.zamowienie[i].ilosc;
    }
  }
}

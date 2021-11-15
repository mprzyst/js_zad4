export class ListaTowarow {
  lista = new Array();

  dodajProdukt(produkt) {
    //wyjatek jeśli produkt o tym id już jest na liście

    if (this.znajdzProdukt(produkt.id).length == 0) {
      this.lista.push({ produkt: produkt });
    } else {
      throw "Produkt juz istnieje";
    }
  }
  zmienProdukt(idProduktu, Produkt) {
    //znajduje produkt o tym ID i podmienia wszystkie jego składowe wartościami z obiektu produkt
    if (this.znajdzProdukt(idProduktu).length == 0) {
      console.log("Nie znaleziono");
    } else {
      this.lista.forEach(function (element) {
        if (element.produkt.id === idProduktu) {
          element.produkt.nazwa = Produkt.nazwa;
          element.produkt.model = Produkt.model;
          element.produkt.rok = Produkt.rok;
          element.produkt.cena = Produkt.cena;
          element.produkt.zuzycieEnergii = Produkt.zuzycieEnergii;
        }
      });
    }
  }
  wypiszProdukt(idProduktu) {
    let znaleziony = this.znajdzProdukt(idProduktu);
    if (znaleziony.length == 0) {
      return console.log("Nie znaleziono");
    } else {
      return znaleziony.forEach((element) =>
        console.log(
          "ID: " +
            element.produkt.id +
            "\nNazwa: " +
            element.produkt.nazwa +
            "\nModel: " +
            element.produkt.model +
            "\nRok produkcji: " +
            element.produkt.rok +
            "\nCena: " +
            element.produkt.koszt() +
            "\nZuzycie energii: " +
            element.produkt.zuzycieEnergii +
            " kWh"
        )
      );
    }
  }
  wypiszWszystkieProdukty() {
    return this.lista.forEach((element) =>
      console.log(
        "ID: " +
          element.produkt.id +
          "\nNazwa: " +
          element.produkt.nazwa +
          "\nModel: " +
          element.produkt.model +
          "\nRok produkcji: " +
          element.produkt.rok +
          "\nCena: " +
          element.produkt.koszt() +
          "\nZuzycie energii: " +
          element.produkt.zuzycieEnergii +
          " kWh"
      )
    );
  }
  znajdzProdukt(idProduktu) {
    return this.lista.filter((element) => element.produkt.id === idProduktu);
  }
  stanMagazynu() {
    return this.lista.forEach((element) =>
      console.log(
        "ID: " +
          element.produkt.id +
          "\nIlosc: " +
          element.ilosc +
          "\nNazwa: " +
          element.produkt.nazwa +
          "\nModel: " +
          element.produkt.model +
          "\nRok produkcji: " +
          element.produkt.rok +
          "\nCena: " +
          element.produkt.koszt() +
          "\nZuzycie energii: " +
          element.produkt.zuzycieEnergii +
          " kWh"
      )
    );
  }
}

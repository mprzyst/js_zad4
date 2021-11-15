export class Produkt {
  constructor(id, nazwa, model, rok, cena, zuzycieEnergii) {
    this.id = id;
    this.nazwa = nazwa;
    this.model = model;
    this.rok = rok;
    this.cena = cena;
    this.zuzycieEnergii = zuzycieEnergii;
  }

  koszt() {
    return this.cena + " zł";
  }
  kosztEnergii(cenaEnergii) {
    return Number.parseFloat(this.zuzycieEnergii * cenaEnergii)
      .toFixed(2)
      .toString();
  }

  wiekProduktu() {
    return this.rok.toString();
  }
  wiekProduktLata() {
    const yearNow = new Date().getFullYear();
    let age = yearNow - this.rok;
    age = age.toString();

    if (age.slice(-1) === 1) {
      return age + " rok";
    } else if (age.slice(-1) >= 2 && age.slice(-1) <= 4) {
      return age + " lata";
    } else {
      return age + " lat";
    }
  }
}

import { Produkt } from "./Produkt";
import { ListaTowarow } from "./ListaTowarow";
import { Magazyn } from "./Magazyn";
import { Sklep } from "./Sklep";

const cenaEnergii = 0.77;

var p1 = new Produkt(1, "produkt1", "model1", 2001, 12.2, 20);
var p2 = new Produkt(2, "produkt2", "model2", 2002, 54.4, 42);
var p3 = new Produkt(2, "produkt3", "model3", 2003, 20.4, 30);
var p4 = new Produkt(4, "produkt4", "model4", 2004, 224.4, 35);
var p5 = new Produkt(5, "produkt5", "model5", 2005, 124.4, 23);
var p6 = new Produkt(6, "produkt6", "model6", 2006, 22.4, 66);
var p7 = new Produkt(7, "produkt7", "model7", 2007, 111.4, 45);

console.log("Wypisanie Produktu:");
console.log(p1.koszt());
console.log(p1.kosztEnergii(cenaEnergii));
console.log(p1.wiekProduktu());
console.log(p1.wiekProduktLata());

var listOfProducts = new ListaTowarow();

useDodajProduktLista(p1);
useDodajProduktLista(p2);
useDodajProduktLista(p2);
useDodajProduktLista(p3);
useDodajProduktLista(p4);
useDodajProduktLista(p5);
useDodajProduktLista(p6);
useDodajProduktLista(p7);

console.log("ListaTowarów:");
listOfProducts.wypiszProdukt(4);
listOfProducts.wypiszWszystkieProdukty();

console.log("Zmiana produktu: (id 7)");
listOfProducts.zmienProdukt(7, p3);
listOfProducts.wypiszProdukt(7);
console.log("Zmiana produktu: (id 10)");
listOfProducts.zmienProdukt(10, p3);

var warehouse = new Magazyn();

useDodajProduktMagazyn(p1, 100);
useDodajProduktMagazyn(p2, 200);
console.log("To samo id: ");
useDodajProduktMagazyn(p2, 200);
useDodajProduktMagazyn(p4, 400);
useDodajProduktMagazyn(p5, 500);
useDodajProduktMagazyn(p6, 600);
useDodajProduktMagazyn(p7, 700);

console.log("Stan magazynu: ");
warehouse.stanMagazynu();
warehouse.zabierzProdukt(p7, 10);
warehouse.stanMagazynu();

var sklep = new Sklep();

sklep.lista = warehouse.lista;
console.log("Dodawanie do zamówienia:");
sklep.dodajZamowienie(8, 2);
sklep.dodajZamowienie(2, 100);
sklep.dodajZamowienie(5, 100);
sklep.dodajZamowienie(6, 100);
sklep.dodajZamowienie(7, 100);

console.log("Stan magazynu przed realizacją zamówienia:");
sklep.stanMagazynu();
sklep.zrealizujZamowienie();
console.log("Stan magazynu po realizacji zamówienia:");
sklep.stanMagazynu();

function useDodajProduktLista(produkt) {
  try {
    listOfProducts.dodajProdukt(produkt);
  } catch {
    console.log("Produkt z takim samym id juz istnieje");
  }
}

function useDodajProduktMagazyn(produkt, ilosc) {
  try {
    warehouse.dodajProdukt(produkt, ilosc);
  } catch {
    console.log("Produkt z takim samym id juz istnieje");
  }
}

package hu.katolikuskeri.nobelvizsga.cli;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<Dijazott> dijazottak = Dijazott.dataReader("orvosi_nobeldijak.txt");

        int db = 0;
        for(Dijazott elem : dijazottak){
            if(elem.getOrszagKod().equals("USA")){
                db++;
            }
        }

        System.out.printf("5.a. feladat: Az USA-nak %d fő orvosi Nobel-díjasa van!\n", db);

        int osszeg = 0;
        for (Dijazott elem : dijazottak){
            osszeg += elem.getElnyeresEve() - elem.getSzuletesEve();
        }
        double atlag = (double)osszeg / dijazottak.size();
        System.out.printf("5.b. feladat: Átlagosan %.0f éves korban kapták meg a díjazottak az orvosi Nobel-díjat", Math.floor(atlag));
    }
}
package hu.katolikuskeri.nobelvizsga.cli;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;

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
        System.out.printf("5.b. feladat: Átlagosan %.0f éves korban kapták meg a díjazottak az orvosi Nobel-díjat\n", Math.floor(atlag));

        System.out.print("5.c. feladat: Kérem egy ország kódját: ");
        Scanner konzol = new Scanner(System.in);
        String orszagkod = konzol.nextLine();

        int index = -1;
        for (int i = 0; i < dijazottak.size(); i++) {
            if (dijazottak.get(i).getOrszagKod().equals(orszagkod)){
                index = i;
                break;
            }
        }

        if(index >=0) {
            Dijazott max = dijazottak.get(index);
            for (int i = index+1; i < dijazottak.size(); i++) {
                if(dijazottak.get(i).getOrszagKod().equals(orszagkod)) {
                    if (max.getElnyeresEve() > dijazottak.get(i).getElnyeresEve()) {
                        max = dijazottak.get(i);
                    }
                }
            }
            System.out.println("\t Legutóbb díjazott adatai:");
            System.out.printf("\t\tDíjazás éve: %d\n", max.getElnyeresEve());
            System.out.printf("\t\tDíjazott neve: %s\n", max.getNev());
            System.out.printf("\t\tSzületési éve: %d\n", max.getSzuletesEve());
            System.out.printf("\t\tElhalálozásának éve: %d\n", max.getHalalozasEve());
            System.out.printf("\t\tOrszágkódja: %s\n", max.getOrszagKod());
        }else {
            System.out.println("\t Nincs ilyen országkóddal díjazott.");
        }

        HashMap<String, Integer> statisztika = new HashMap<>();
        for (Dijazott elem : dijazottak){
            if (statisztika.containsKey(elem.getOrszagKod())){
                int darab = statisztika.get(elem.getOrszagKod()) +1;
                statisztika.put(elem.getOrszagKod(), darab);
            }else {
                statisztika.put(elem.getOrszagKod(), 1);
            }
        }
        System.out.println("5.d. feladat: Statisztika");
        statisztika.forEach((kulcs, ertek) -> {
            System.out.printf("\t%s: %d\n", kulcs, ertek);
        });
    }
}
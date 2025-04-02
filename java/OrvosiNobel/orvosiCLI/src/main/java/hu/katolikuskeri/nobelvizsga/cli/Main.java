package hu.katolikuskeri.nobelvizsga.cli;

import java.util.ArrayList;
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
        System.out.printf("5.b. feladat: Átlagosan %.0f éves korban kapták meg a díjazottak az orvosi Nobel-díjat", Math.floor(atlag));

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
        Dijazott max = dijazottak.get(index);
        




    }
}
package hu.katolikuskeri.berekvizsga.cli;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        ArrayList<Dolgozo> dolgozok = Dolgozo.beolvasas("berek2020.csv");

        int osszeg = 0;
        for(Dolgozo elem : dolgozok){
            osszeg += elem.getBer();
        }
        double atalgBer = (double) osszeg / dolgozok.size();
        System.out.printf("A doglozók átlagbére: %.1f eFt\n", atalgBer / 1000);

        Scanner konzol = new Scanner(System.in);
        System.out.print("Kérem egy részleg nevét: ");
        String reszleg = konzol.nextLine();
        boolean volt = false;
        int elso = -1;
        for (int i = 0; i < dolgozok.size(); i++) {
            if (dolgozok.get(i).getResznev().equals(reszleg)){
                volt = true;
                elso = i;
                break;
            }
        }
        if (volt){
            int maxIndex = elso;
            for (int i = 1; i < dolgozok.size(); i++) {
                if (dolgozok.get(i).getResznev().equals(reszleg)) {
                    if (dolgozok.get(i).getBer() > dolgozok.get(maxIndex).getBer()) {
                        maxIndex = i;
                    }
                }
            }
            System.out.println("A legnagyobb bérrel rendelkező dolgozó a megadott részlegen:");
            System.out.printf("\tDolgozó neve: %s\n", dolgozok.get(maxIndex).getNev());
            System.out.printf("\tDolgozó neme: %s\n", dolgozok.get(maxIndex).getNem());
            System.out.printf("\tDolgozó részleg: %s\n", dolgozok.get(maxIndex).getResznev());
            System.out.printf("\tDolgozó belépési éve: %d\n", dolgozok.get(maxIndex).getEvszam());
        }
        else {
            System.out.println("Nincs ilyen részleg az adatok között!");
        }
        ArrayList<String> reszlegek = new ArrayList<>();
        for (Dolgozo elem : dolgozok){
            if (!reszlegek.contains(elem.getResznev())){
                reszlegek.add(elem.getResznev());
            }
        }

        for (String r : reszlegek){
            int db = 0;
            for (Dolgozo elem: dolgozok){
                if (elem.getResznev().equals(r)){
                    db++;
                }
            }
            System.out.printf("\t%s - %d fő\n", r, db);
        }
    }
}
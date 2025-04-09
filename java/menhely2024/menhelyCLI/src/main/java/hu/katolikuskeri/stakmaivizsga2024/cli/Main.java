package hu.katolikuskeri.stakmaivizsga2024.cli;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<Kutyus> kutyuses = null;
        try {
            kutyuses = Kutyus.forrasOlvasas(new File("allatok.csv"));

        }catch (FileNotFoundException ex){
            System.err.println("A forrásállomány nem található!");
            System.exit(1);
        }

        int osszeg = 0;
        int db = 0;

        for(Kutyus elem : kutyuses){
            if((elem.getKennelSsz() == 5) && (elem.getIvar() == 'H')){
                osszeg += elem.getKor();
                db++;
            }
        }
        double atlag = (double) osszeg /db;
        System.out.printf("6. feladat: Az 5-ös kennelben található kan kutyák átlagkora %.1f év!\n", atlag);

        boolean volt = false;
        Kutyus megfelelo = null;
        for(Kutyus elem : kutyuses){
            if((elem.getKor() < 5) && (elem.getIvar() == 'N') && (elem.getFajta().equals("mopsz"))){
                volt = true;
                megfelelo = elem;
                break;
            }
        }
        if (volt){
            System.out.println("7. feladat: A menhelyen található megfelelő kutya:");
            System.out.printf("\tNév: %s\n\tIvar: %s\n\tFajta: %s\n\tKor: %d év\n\tKennel: %d.\n",
            megfelelo.getNev(),
            megfelelo.getIvar() == 'N' ? "Nőstény" : "Hím",
            megfelelo.getFajta(),
            megfelelo.getKor(),
            megfelelo.getKennelSsz()
            );
        }else{
            System.out.println("7. feladat: A menhelyen nem található örökbefogadásra megfelelő kutya!");
        }
    }
}
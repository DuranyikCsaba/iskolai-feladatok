package hu.katolikuskeri.berekvizsga.cli;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;

public class Dolgozo {
    private String nev;
    private String nem;
    private String resznev;
    private int evszam;
    private int ber;

    public Dolgozo(String nev, String nem, String resznev, int evszam, int ber) {
        this.nev = nev;
        this.nem = nem;
        this.resznev = resznev;
        this.evszam = evszam;
        this.ber = ber;
    }

    public String getNev() {
        return nev;
    }

    public void setNev(String nev) {
        this.nev = nev;
    }

    public String getNem() {
        return nem;
    }

    public void setNem(String nem) {
        this.nem = nem;
    }

    public String getResznev() {
        return resznev;
    }

    public void setResznev(String resznev) {
        this.resznev = resznev;
    }

    public int getEvszam() {
        return evszam;
    }

    public void setEvszam(int evszam) {
        this.evszam = evszam;
    }

    public int getBer() {
        return ber;
    }

    public void setBer(int ber) {
        this.ber = ber;
    }

    @Override
    public String toString() {
            return String.format("%s, (%s)", this.nev, this.resznev);
    }

    public static ArrayList<Dolgozo> beolvasas (String fajl){
        return beolvasas(new File(fajl));
    }

    public static ArrayList<Dolgozo> beolvasas (File fajl) {
        ArrayList<Dolgozo> dolgozok = new ArrayList<>();
        try {
            Scanner olvaso = new Scanner(fajl);
            olvaso.nextLine();
            while (olvaso.hasNextLine()){
                String sor = olvaso.nextLine();
                String[] adatok = sor.split(";");
                Dolgozo d = new Dolgozo(
                        adatok[0],
                        adatok[1],
                        adatok[2],
                        Integer.parseInt(adatok[3]),
                        Integer.parseInt(adatok[4])
                );
                dolgozok.add(d);
            }
            olvaso.close();
        }catch (FileNotFoundException exception){
            System.err.println("A forrásállomány nem található meg!");
        }
        return dolgozok;
    }
}

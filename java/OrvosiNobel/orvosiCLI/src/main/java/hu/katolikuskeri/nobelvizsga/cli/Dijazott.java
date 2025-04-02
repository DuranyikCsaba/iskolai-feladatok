package hu.katolikuskeri.nobelvizsga.cli;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;

public class Dijazott {
//    Év;Név;SzületésHalálozás;Országkód

    private int elnyeresEve;
    private String nev;
    private int szuletesEve;
    private int halalozasEve; // 0 azt jelenti, hogy még él.
    private String orszagKod;

    public Dijazott(int elnyeresEve, String nev, int szuletesEve, int halalozasEve, String orszagKod) {
        this.elnyeresEve = elnyeresEve;
        this.nev = nev;
        this.szuletesEve = szuletesEve;
        this.halalozasEve = halalozasEve;
        this.orszagKod = orszagKod;
    }

    public Dijazott(String[] adatok){
        this.elnyeresEve = Integer.parseInt(adatok[0]);
        this.nev = adatok[1];
        String[] evszamok = adatok[2].split("-");
        this.szuletesEve = Integer.parseInt(evszamok[0]);
        if (evszamok.length == 1){
            this.halalozasEve = 0;
        }else{
            halalozasEve = Integer.parseInt(evszamok[1]);
        }
        this.orszagKod = adatok[3];
    }

    public int getElnyeresEve() {
        return elnyeresEve;
    }

    public void setElnyeresEve(int elnyeresEve) {
        this.elnyeresEve = elnyeresEve;
    }

    public String getNev() {
        return nev;
    }

    public void setNev(String nev) {
        this.nev = nev;
    }

    public int getSzuletesEve() {
        return szuletesEve;
    }

    public void setSzuletesEve(int szuletesEve) {
        this.szuletesEve = szuletesEve;
    }

    public int getHalalozasEve() {
        return halalozasEve;
    }

    public void setHalalozasEve(int halalozasEve) {
        this.halalozasEve = halalozasEve;
    }

    public String getOrszagKod() {
        return orszagKod;
    }

    public void setOrszagKod(String orszagKod) {
        this.orszagKod = orszagKod;
    }

    @Override
    public String toString() {
        return String.format("%s (%d)", this.nev, this.elnyeresEve);
    }

    public static ArrayList<Dijazott> dataReader(String fajl){
        return dataReader(new File(fajl));
    }
    public static ArrayList<Dijazott> dataReader(File fajl){
        ArrayList<Dijazott> dijazottak = new ArrayList<>();
        try {
            Scanner olvaso = new Scanner(fajl);

            olvaso.nextLine();

            while(olvaso.hasNextLine()){
                String sor = olvaso.nextLine();
                String[] adatok = sor.split(";");
                dijazottak.add(new Dijazott(adatok));
            }

            olvaso.close();

        }catch (FileNotFoundException ex){
            System.err.println("A forrásállmány nem tanálható");
        }

        return dijazottak;
    }
}

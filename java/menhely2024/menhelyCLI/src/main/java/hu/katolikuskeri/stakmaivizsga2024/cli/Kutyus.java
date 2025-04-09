package hu.katolikuskeri.stakmaivizsga2024.cli;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;

public class Kutyus {

//    ivar;nev;fajta;kor;kennel-ssz

    private char ivar;
    private String nev;
    private String fajta;
    private int kor;
    private int kennelSsz;

    public Kutyus(char ivar, String nev, String fajta, int kor, int kennelSsz) {
        this.ivar = ivar;
        this.nev = nev;
        this.fajta = fajta;
        this.kor = kor;
        this.kennelSsz = kennelSsz;
    }

    public Kutyus(String[] adatok){
     this.ivar = adatok[0].charAt(0);
     this.nev = adatok[1];
     this.fajta = adatok[2];
     this.kor = Integer.parseInt(adatok[3]);
     this.kennelSsz = Integer.parseInt(adatok[4]);
    }

    public char getIvar() {
        return ivar;
    }

    public void setIvar(char ivar) {
        this.ivar = ivar;
    }

    public String getNev() {
        return nev;
    }

    public void setNev(String nev) {
        this.nev = nev;
    }

    public String getFajta() {
        return fajta;
    }

    public void setFajta(String fajta) {
        this.fajta = fajta;
    }

    public int getKor() {
        return kor;
    }

    public void setKor(int kor) {
        this.kor = kor;
    }

    public int getKennelSsz() {
        return kennelSsz;
    }

    public void setKennelSsz(int kennelSsz) {
        this.kennelSsz = kennelSsz;
    }

    @Override
    public String toString() {
        return String.format("%s (%s, %d. kennel)", this.nev, this.fajta, this.kennelSsz);
    }

    public static ArrayList<Kutyus> forrasOlvasas(File fajl) throws FileNotFoundException {
        ArrayList<Kutyus> kutyuses = new ArrayList<>();
        Scanner olvaso = new Scanner(fajl);

        olvaso.nextLine();
        while(olvaso.hasNextLine()){
            String[] adatok = olvaso.nextLine().split(";");
            kutyuses.add(new Kutyus(adatok));

        }

        olvaso.close();
        return kutyuses;
    }
}

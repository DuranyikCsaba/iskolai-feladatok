package hu.katolikuskeri.osztalyzatok.gui;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

public class Main {
    public static void main(String[] args) {
        //Létrehozás: A kulcs Integer tipusu az érték pedig String
        //Primitiv tipusok eseten mindig a tipushoz tartoo csomagolo osztalyt hasznaljuk

        HashMap<Integer, String> termek = new HashMap<>();

        //Elem tárolása a szótárban

        termek.put(2, "Földszint 2.");
        termek.put(6, "Földszint 6.");
        termek.put(9, "Földszint 9.");
        termek.put(11, "Földszint 11.");
        termek.put(12, "Földszint 12.");
        termek.put(13, "Földszint 13.");
        // Null is használható kulcsként, de csak egyszer
        termek.put(null, "Aula");

        //Tároljunk egy új elemet ha nins benne a szótárban

        termek.putIfAbsent(1, "Szakképző emelet 1");


        // Elem lekérdezése kulcs segítségével

        System.out.println(termek.get(9));
        System.out.println(termek.getOrDefault(14, "Nincs ilyen terem hejj"));

        // Elem eltávolítása
        termek.remove(null);
        termek.remove(2, "Fődcint kető");

        System.out.println(termek.get(null));
        System.out.println(termek.get(2));

        //Kulcs meglétének ellentőrzése

        if(termek.containsKey(10)){
            System.out.println("Van ilyen terem");
        }else{
            System.out.println("Nincs ilyen terem");
        }

        // HashMap bejárása

//        for (Map.Entry<Integer, String> elem : termek.entrySet()){
//            System.out.printf("Kulcs: %d, Érték: %s\n", elem.getKey(), elem.getValue());
//        }

        termek.forEach((kulcs, ertek) -> {
            System.out.printf("Kulcs: %d, Érték: %s\n", kulcs, ertek);
        });


        ArrayList<Integer> dobasok = new ArrayList<>();
        Random rng = new Random(319);
        for (int i = 0; i < 1210; i++) {
            dobasok.add(rng.nextInt(1, 7));
        }

        HashMap<Integer, Integer> stats = new HashMap<>();
        for (Integer elem : dobasok){
            if(!(stats.containsKey(elem))){
                stats.put(elem, 1);
            }else{
                int db = stats.get(elem);
                db++;
                stats.put(elem, db);
            }
        }
    }
}
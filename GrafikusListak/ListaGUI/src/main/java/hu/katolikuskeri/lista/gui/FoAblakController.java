package hu.katolikuskeri.lista.gui;

import javafx.fxml.FXML;
import javafx.scene.control.Alert;
import javafx.scene.control.ListView;
import javafx.scene.control.TextField;

public class FoAblakController {
    public TextField txtTanuloNeve;
    public TextField txtTanuloUjNeve;
    public ListView<String> ListTanulok;

    @FXML
    public void ujTanloHozzaadasa(){
        String tanuloNeve = txtTanuloNeve.getText();
        if (tanuloNeve.isEmpty()){
            //System.out.println("Nincs megadva a tanuló neve!");
            Alert hibauzenet = new Alert(Alert.AlertType.ERROR);
            hibauzenet.setTitle("Új tanuló hozzáadása sikertelen!");
            hibauzenet.setHeaderText(null);
            hibauzenet.setContentText("Új tanuló hozzáadása sikertelen! Nincs megadva a tanuló neve!");
            hibauzenet.show();

            return;
        }
        ListTanulok.getItems().add(tanuloNeve);
        Alert info = new Alert(Alert.AlertType.INFORMATION);
        info.setTitle("Sikeres hozzáadás!");
        info.setHeaderText(null);
        info.setContentText("Új tanuló hozzáadása sikeres!");
        info.show();
    }

    @FXML
    public void TanuloNevModositas(){
        String ujNev = txtTanuloUjNeve.getText();

        if (ujNev.isEmpty()){
            Alert hibauzenet = new Alert(Alert.AlertType.ERROR);
            hibauzenet.setTitle("Módosítási hiba!");
            hibauzenet.setHeaderText(null);
            hibauzenet.setContentText("A tanuló neve nem módosítható! Nincs kitöltve a beviteli mező!");
            hibauzenet.show();
            return;
        }

        int modositTanuloindex = ListTanulok.getSelectionModel().getSelectedIndex();

        if (modositTanuloindex == -1){
            Alert hibauzenet = new Alert(Alert.AlertType.ERROR);
            hibauzenet.setTitle("Módosítási hiba!");
            hibauzenet.setHeaderText(null);
            hibauzenet.setContentText("A tanuló neve nem módosítható! Nincs tanuló kiválasztva a listából!");
            hibauzenet.show();
            return;
        }

        ListTanulok.getItems().set(modositTanuloindex, ujNev);
        /*
        Alert info = new Alert(Alert.AlertType.INFORMATION);
        info.setTitle("Sikeres módoítás");
        info.setHeaderText(null);
        info.setContentText("A tanuló nevének módosítása sikeres!");
        info.show();
         */
        App.parbeszedalbak(
                Alert.AlertType.INFORMATION,
                "Sikeres módosítás!",
                "A tanuló nevének módosítása sikeres!");
    }

    @FXML
    public void tanuloTorlese(){
        int kivalasztott = ListTanulok.getSelectionModel().getSelectedIndex();

        if (kivalasztott == -1){
            App.parbeszedalbak(
                    Alert.AlertType.ERROR,
                    "Törlés sikertelen!",
                    "Tanuló törlése sikertelen! Nincs kiválasztva tanuló a listából"
            );
            return;
        }
        ListTanulok.getItems().remove(kivalasztott);
        App.parbeszedalbak(
                Alert.AlertType.INFORMATION,
                "Tanuló sikeresen törölve!",
                "A tanuló sikeresen törlésre került a névsorból!"
        );
    }
}

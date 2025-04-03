package hu.katolikuskeri.nobelvizsga.GUI;

import java.io.IOException;
import java.net.URL;
import java.util.ResourceBundle;

import hu.katolikuskeri.nobelvizsga.cli.Dijazott;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.ListView;
import javafx.scene.control.TextField;

public class FoAblakController implements Initializable {

    @FXML
    private ListView<Dijazott> lstDijazottak;

    @FXML
    private TextField txtDijazasEve;

    @FXML
    private TextField txtDijazottNeve;

    @FXML
    private TextField txtHalalozasiEv;

    @FXML
    private TextField txtOrszagkod;

    @FXML
    private TextField txtSzuletesiEv;

    @Override
    public void initialize(URL url, ResourceBundle resourceBundle) {
        lstDijazottak.getItems().addAll(Dijazott.dataReader("orvosi_nobeldijak.txt"));
    }

    @FXML
    public void kivalasztas() {
        Dijazott kivaslaztott = lstDijazottak.getSelectionModel().getSelectedItem();
        txtDijazasEve.setText(Integer.toString(kivaslaztott.getElnyeresEve()));
        txtDijazottNeve.setText(kivaslaztott.getNev());
        txtSzuletesiEv.setText(Integer.toString(kivaslaztott.getSzuletesEve()));
        if (kivaslaztott.getHalalozasEve() == 0){
            txtHalalozasiEv.setText("-");
        }else {
            txtHalalozasiEv.setText(Integer.toString(kivaslaztott.getHalalozasEve()));
        }
        txtOrszagkod.setText(kivaslaztott.getOrszagKod());
    }

    public void mentes(){
        Dijazott kivalasztott = lstDijazottak.getSelectionModel().getSelectedItem();
        kivalasztott.setElnyeresEve(Integer.parseInt(txtDijazasEve.getText()));
        kivalasztott.setNev(txtDijazottNeve.getText());
        kivalasztott.setSzuletesEve(Integer.parseInt(txtSzuletesiEv.getText()));
    }
}

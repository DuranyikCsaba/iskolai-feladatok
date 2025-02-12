package hu.katolikuskeri.asztali;

import java.io.IOException;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.stage.Stage;

public class FoablakController {
    @FXML
    private Label nevLabel;

    @FXML
    private Button beallitoButton;

    public void setNevLabel(String nev) {
        nevLabel.setText(nev);
    }

    @FXML
    private void beallitasokMegnyitasa() throws IOException {
        FXMLLoader fxmlLoader = new FXMLLoader(getClass().getResource("beallitas-view.fxml")); // Helyes elérési út
        Scene scene = new Scene(fxmlLoader.load(), 250, 150);
        Stage beallitasStage = new Stage();
        beallitasStage.setTitle("Beállítások");
        beallitasStage.setScene(scene);
        beallitasStage.setResizable(false);

        BeallitasokController controller = fxmlLoader.getController();
        controller.setMainController(this);

        beallitasStage.show();
    }
}

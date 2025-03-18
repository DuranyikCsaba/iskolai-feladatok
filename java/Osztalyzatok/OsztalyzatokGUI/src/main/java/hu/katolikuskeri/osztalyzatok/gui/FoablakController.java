package hu.katolikuskeri.osztalyzatok.gui;

import java.io.IOException;
import javafx.fxml.FXML;

public class FoablakController {

    @FXML
    private void switchToSecondary() throws IOException {
        App.setRoot("secondary");
    }
}

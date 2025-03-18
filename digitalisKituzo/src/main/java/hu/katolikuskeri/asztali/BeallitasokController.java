package hu.katolikuskeri.asztali;

import javafx.fxml.FXML;
import javafx.scene.control.TextField;
import javafx.stage.Stage;

public class BeallitasokController {

    @FXML
    private TextField nevInput;

    private FoablakController foablakController;

    public void setMainController(FoablakController foablakController) {
        this.foablakController = foablakController;
    }

    @FXML
    public void updateName() {
        if (foablakController != null) {
            foablakController.setNevLabel(nevInput.getText());
        }
    }

    @FXML
    public void ablakBezárása() {
        Stage stage = (Stage) nevInput.getScene().getWindow();
        stage.close();
    }
}

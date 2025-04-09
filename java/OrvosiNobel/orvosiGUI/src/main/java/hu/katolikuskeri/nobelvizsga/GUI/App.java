package hu.katolikuskeri.nobelvizsga.GUI;

import hu.katolikuskeri.nobelvizsga.cli.Dijazott;
import javafx.application.Application;
import javafx.application.Platform;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.Button;
import javafx.scene.control.ButtonType;
import javafx.scene.control.ListView;
import javafx.stage.FileChooser;
import javafx.stage.Stage;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;

/**
 * JavaFX App
 */
public class App extends Application {

    private static Scene scene;

    @Override
    public void start(Stage stage) throws IOException {
        scene = new Scene(loadFXML("FoAblakView"), 800, 467);
        stage.setScene(scene);
        stage.setResizable(false);
        stage.setTitle("Orvosi Nobel-díjasok adatainak kezelése");

        stage.setOnCloseRequest(windowEvent -> {
            windowEvent.consume();
            Alert kerdes = new Alert(Alert.AlertType.CONFIRMATION);
            kerdes.setTitle("Kilépés");
            kerdes.setHeaderText(null);
            kerdes.setContentText("Kilépés előtt szeretné menteni a módosításokat");
            kerdes.getButtonTypes().clear();
            ButtonType btnIgen = new ButtonType("Igen");
            ButtonType btnNem = new ButtonType("Nem");
            kerdes.getButtonTypes().addAll(btnIgen, btnNem);
            if (kerdes.showAndWait().get() == btnIgen) {
                FileChooser mentes = new FileChooser();
                mentes.setTitle("Mentés helyének kiválasztása");
                mentes.getExtensionFilters().add(new FileChooser.ExtensionFilter("Nobel-díjasok állomány", "*.txt"));
                File mentesFajl = mentes.showSaveDialog(stage);
                try {
                    PrintWriter iro = new PrintWriter(mentesFajl, StandardCharsets.UTF_8);

                    ListView<Dijazott> lstDijazottak = (ListView<Dijazott>) (stage.getScene().lookup("#lstDijazottak"));
                    for (Dijazott elem : lstDijazottak.getItems()) {
                        if (elem.getHalalozasEve() == 0) {
                            iro.printf(
                                    "%d;%s;%d-%d;%s\n",
                                    elem.getElnyeresEve(),
                                    elem.getNev(),
                                    elem.getSzuletesEve(),
                                    elem.getHalalozasEve(),
                                    elem.getOrszagKod()
                                );
                            }
                        }
                    }catch(IOException ex){
                        Alert hiba = new Alert(Alert.AlertType.ERROR);
                        hiba.setTitle("Mentési hiba");
                        hiba.setHeaderText(null);
                        hiba.setContentText("A mentés során hiba keletkezett.");
                        hiba.showAndWait();
                    }

                }

            Platform.exit();
        });

        stage.show();
    }

    static void setRoot(String fxml) throws IOException {
        scene.setRoot(loadFXML(fxml));
    }

    private static Parent loadFXML(String fxml) throws IOException {
        FXMLLoader fxmlLoader = new FXMLLoader(App.class.getResource(fxml + ".fxml"));
        return fxmlLoader.load();
    }

    public static void main(String[] args) {
        launch();
    }

}
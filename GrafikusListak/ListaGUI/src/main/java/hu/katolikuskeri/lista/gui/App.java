package hu.katolikuskeri.lista.gui;

import javafx.application.Application;
import javafx.application.Platform;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.ButtonType;
import javafx.scene.control.ListView;
import javafx.stage.Stage;
import javafx.stage.WindowEvent;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.charset.Charset;
import java.util.Optional;

/**
 * JavaFX App
 */
public class App extends Application {

    private static Scene scene;

    @Override
    public void start(Stage stage) throws IOException {
        scene = new Scene(loadFXML("FoAblakView"), 800, 600);
        stage.setScene(scene);
        stage.setOnCloseRequest((WindowEvent e) -> {
            e.consume();

            Alert kerdes = new Alert(Alert.AlertType.CONFIRMATION);
            kerdes.setTitle("Kilépés");
            kerdes.setHeaderText(null);
            kerdes.setContentText("Kilépés előtt szeretné menteni a névsort?");

            kerdes.getButtonTypes().clear();
            ButtonType btnIgen = new ButtonType("Igen");
            ButtonType btnNem = new ButtonType("Nem");
            kerdes.getButtonTypes().addAll(btnIgen, btnNem);

            Optional<ButtonType> eredmeny = kerdes.showAndWait();
            if (eredmeny.get() == btnIgen){
                try {
                    PrintWriter iro = new PrintWriter(
                            new File("nevsor.txt"),
                            Charset.forName("UTF-8")
                    );

                    ListView<String> tanulok = (ListView<String>) (stage.getScene().getRoot().lookup("#ListTanulok"));
                    for (String tanulo : tanulok.getItems()){
                        iro.println(tanulo);
                    }

                    iro.close();

                    Platform.exit();
                }
                catch (IOException ex){
                    App.parbeszedalbak(
                            Alert.AlertType.ERROR,
                            "Mentés sikertelen!",
                            "A mentés során fájlkezelési hiba merült fel!"
                    );
                }
            }
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

    public static void parbeszedalbak(Alert.AlertType tipus, String title, String content){
        Alert info = new Alert(tipus);
        info.setTitle(title);
        info.setHeaderText(null);
        info.setContentText(content);
        info.show();
    }

    public static void main(String[] args) {
        launch();
    }

}
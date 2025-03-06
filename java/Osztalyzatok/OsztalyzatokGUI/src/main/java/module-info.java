module hu.katolikuskeri.osztalyzatok.gui {
    requires javafx.controls;
    requires javafx.fxml;
    requires OsztalyzatokCLI;

    opens hu.katolikuskeri.osztalyzatok.gui to javafx.fxml;
    exports hu.katolikuskeri.osztalyzatok.gui;
}

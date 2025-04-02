module hu.katolikuskeri.berekvizsga.GUI {
    requires javafx.controls;
    requires javafx.fxml;
    requires berekCLI;

    opens hu.katolikuskeri.berekvizsga.GUI to javafx.fxml;
    exports hu.katolikuskeri.berekvizsga.GUI;
}

module hu.katolikuskeri.nobelvizsga.GUI {
    requires javafx.controls;
    requires javafx.fxml;
    requires orvosiCLI;

    opens hu.katolikuskeri.nobelvizsga.GUI to javafx.fxml;
    exports hu.katolikuskeri.nobelvizsga.GUI;
}

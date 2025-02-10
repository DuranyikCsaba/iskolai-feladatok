module hu.katolikuskeri.gyak1.gui {
    requires javafx.controls;
    requires javafx.fxml;
    requires hu.katolikuskeri.gyak1.cli;

    opens hu.katolikuskeri.gyak1.gui to javafx.fxml;
    exports hu.katolikuskeri.gyak1.gui;
}

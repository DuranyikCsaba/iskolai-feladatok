module hu.katolikuskeri.lista.gui {
    requires javafx.controls;
    requires javafx.fxml;
    requires ListaCLI;

    opens hu.katolikuskeri.lista.gui to javafx.fxml;
    exports hu.katolikuskeri.lista.gui;
}

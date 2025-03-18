module hu.katolikuskeri.asztali {
    requires javafx.controls;
    requires javafx.fxml;

    opens hu.katolikuskeri.asztali to javafx.fxml;
    exports hu.katolikuskeri.asztali;
}

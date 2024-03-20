// Implement the launch sequence function here and export it as the default export.
import { loadPayload } from "./core/load";
import { fuel } from "./core/fuel";
import { countdown } from "./core/countdown";

function launchSequence() {
    loadPayload();
fuel();
countdown();

};




default export launchSequence;
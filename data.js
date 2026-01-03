/* Hard-coded sensor data – in real life this would come from OBD-II, CAN-bus, etc. */
window.carHealthData = {
  engine:       { health: 62, tasks: ["Change engine oil & filter", "Check spark-plug gap", "Inspect timing belt wear"] },
  fuel:         { health: 85, tasks: ["Replace fuel filter in 3 000 km"] },
  cooling:      { health: 40, tasks: ["Coolant low – top up", "Replace thermostat", "Pressure-test radiator"] },
  lubrication:  { health: 62, tasks: ["Same as engine – shared oil circuit"] },
  transmission: { health: 78, tasks: ["ATF flush recommended", "Clutch pedal free-play check"] },
  suspension:   { health: 55, tasks: ["Replace front struts", "Lubricate control-arm bushings"] },
  steering:     { health: 90, tasks: [] },
  brake:        { health: 30, tasks: ["Replace front pads (<2 mm)", "Flush brake fluid", "Check ABS sensor resistance"] },
  wheels:       { health: 70, tasks: ["Rotate tires", "Balance front wheels"] },
  ac:           { health: 50, tasks: ["Re-gas R134a", "Clean cabin filter"] },
  electrical:   { health: 88, tasks: ["Battery terminal corrosion noticed"] },
  exhaust:      { health: 65, tasks: ["Small leak at manifold gasket"] },
  body:         { health: 92, tasks: ["Touch-up paint on left door"] },
  interior:     { health: 95, tasks: [] },
  safety:       { health: 100, tasks: [] },
  lighting:     { health: 80, tasks: ["Replace left fog-lamp bulb"] },
  glass:        { health: 85, tasks: ["Refill washer fluid"] },
  chassis:      { health: 75, tasks: ["Under-body anti-rust spray"] }
};
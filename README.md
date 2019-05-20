# EMU-Telemetry

## Main
*The main front end page output*
#### app.component.html
This is where the front end page is built. 
Each segment of the page is denoted with comments and is seperated by: 
- Header
- UIA components
- Controllers
- Mission Control/Suit telemetry output
- Footer

Suit telemetry Data Points are displayed via a table the data is pulled from **emu.services.ts** and put into an array. 

#### app.components.scss
This is where alignment functions were built
#### app.component.ts
This is where the telemetry stream is handled. The user can press buttons with either change the state (true or false) or send a post request with a url. 
#### app.module.ts
This is where the application is initiated, dependencies are imported, and routes are created 
## Controllers
### dcu
*The DCU components of the GUI*
#### dcu.component.html
This is where the DCU Controller is built. 
- The controller has 6 switches: 
- Suit Power
- 02 Switch
- Aux
- Fan Switch
- RCA
- Pump
Each switch makes sends its current state (true or false) to its respective function in **dcu.component.ts**

#### dcu.component.scss
This is where the sliders for the dcu on screen controller are built.
#### dcu.component.ts
This is where PATCH requests are sent from the GUI to the telemetry server. Each function receives a state value (true or false) from **dcu.component.html**, that value is then sent to the telemetry server. The state of the switch determines what is displayed from the telemetry stream. 

### UIA
*The UIA Components of the GUI*
#### uia.component.html
This is where the UIA Controller is built. 
- The controller has 10 switches: 
- EMU1
- EMU2
- EV1 Supply
- EV2 Supply
- EV1 Waste
- EV2 Waste
- EV1 Oxygen
- EV2 Oxygen
- O2 Vent
- Depress Pump

Each switch makes sends its current state (true or false) to its respective function in **uia.component.ts**
#### uia.component.scss
This is where the sliders for the uia on screen controller are built.
#### uia.component.ts
This is where PATCH requests are sent from the GUI to the telemetry server. Each function receives a state value (true or false) from **uia.component.html**, that value is then sent to the telemetry server. The state of the switch determines what is displayed from the telemetry stream. 

## Services
#### emu.service.ts
This is where the data is read in from the telemetry stream server using GET requests. 


# meteor-bt-website

## Features:
- subpage of meteor-bt.com
- Hosted on VPS via NGINX (login required)
- Minimalist design, mirroring the feel (fonts, styling, colors) of this: https://app.corcel.io/chat 
- Displays Figures and tables of weather forecasts vs actual weather. User selectable variables via dropdown.
    * User choice of Weather metric: Precipitation, Temperature, Humidity, Windspeed. From openmeteo.
    * Map of Error (Actual - Forecasted), Actual, or Forecasted (choice) with a raster land mask. Ideal would be a rotating globe with city name callouts and error interpolated between cities, and city names displayed. More accessible would be a flat map projection of same (Goode’s Homolosine, or Winkel Tripel prpoojection). Designed to show the user a global view of the 
    * Graph of actual and forecast over time, by selectable city and time window
    * Graph of Error over time for selected variable. Goal is to show if error is changing over time. Probably use LOESS smoothing line overlaid on transparent points.
- Accessibility and security considerations: DB should allow insert from credentialized users - Will be a part of a decentralized ML project so will require write permissions from authorized users. Want to have this not compromise security, as much as possible.
- Website (not db) will be public, and not require credentials
- Forecast API should be available, API request form needed. Need to limit user requests based on key type: free, premium, and enterprise. Reasonable rates will be provided. Idea: pass though meteo API costs, or cost+




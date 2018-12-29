import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
import "hammerjs";

import { Theme } from "./app/shared/theme.class";

if (environment.production) {
	enableProdMode();
}

// Apply default theme class to body. AppComponent will also change body class along themes switches
document.body.setAttribute("class", Theme.getDefault());

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.log(err));

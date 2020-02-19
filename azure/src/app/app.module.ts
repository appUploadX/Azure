import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { PostProvider } from '../providers/post-providers';

import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';

import { Camera } from '@ionic-native/camera/ngx';

import { ImageProviderService } from '../app/service/image-provider.service';

import { AppVersion } from '@ionic-native/app-version/ngx';
import { version } from 'punycode';

@NgModule({
	declarations: [AppComponent],
	entryComponents: [],
	imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule],
	providers: [
		StatusBar,
		PostProvider,
		SplashScreen,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		File,
		FileTransfer,
		DocumentViewer,
		FileOpener,
		Camera,
		ImageProviderService,
		AppVersion,
	],
	bootstrap: [AppComponent]
})
export class AppModule {

	constructor() {
	}

}

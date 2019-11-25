import { Component, OnInit } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { Platform } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-notice-rules-details',
  templateUrl: './notice-rules-details.page.html',
  styleUrls: ['./notice-rules-details.page.scss'],
})
export class NoticeRulesDetailsPage implements OnInit {
  desc: string;
  title:string;
  listType:string;
  docPath:string;
  constructor(
    private platform: Platform,
    private document: DocumentViewer,
    private file: File,
    private fileOpener: FileOpener,
    private transfer: FileTransfer,
    public toastController: ToastController,
  ) { }

  ngOnInit() {
    this.title = history.state.title;
    this.listType = history.state.listType;
    this.desc = history.state.desc;
    this.docPath = history.state.docPath;
    console.log(history.state);
  }

  async openToast(msg)
  {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });

    toast.present();
  }


  extToMimes = [
    { ext: 'jpeg', MType: 'image/jpeg' },
    { ext: 'jpg', MType: 'image/jpeg' },
    { ext: 'png', MType: 'image/png' },
    { ext: 'doc', MType: 'application/msword' },
    { ext: 'docx', MType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' },
    { ext: 'xls', MType: 'application/vnd.ms-excel' },
    { ext: 'xlsx', MType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' },
    { ext: 'gif', MType: 'image/gif' },
    { ext: 'pdf', MType: 'application/pdf' }
  ];

  download(name) { //name : any file name
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = 'https://www.asi-ph.com/sandboxes/condominium/' + name;
    

    console.log(url);
    fileTransfer.download(url, this.file.dataDirectory + name).then((entry) => {
      this.fileOpener.open(entry.toURL(), this.getMimeByExt(name))
        .then(() => this.openToast('File is opened'))
        .catch(e => this.openToast('Error opening file'));
    }, (error) => {
      console.log(error);

    });
  }

  getMimeByExt(name: any) {
    var extention = name.split('.').pop();
    for (let i = 0; i < this.extToMimes.length; i++) {
      const element = this.extToMimes[i];
      if (element.ext == extention) {
        return element.MType;
      }
    }
  }
}

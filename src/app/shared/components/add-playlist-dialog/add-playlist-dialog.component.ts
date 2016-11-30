import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import {Playlist} from '../../models/playlist';
import { PlaylistService } from '../../services/api/playlist.service';

@Component({
  selector: 'app-add-playlist-dialog',
  templateUrl: './add-playlist-dialog.component.html',
  styleUrls: ['./add-playlist-dialog.component.scss'],
  providers: [ PlaylistService ]
})
export class AddPlaylistDialogComponent {

  //playlist pour tester l'ajout a la db
  private playlist = <Playlist>{
    name: '',
    public: true
  };

  constructor(
    public dialogRef: MdDialogRef<AddPlaylistDialogComponent>,
    private _playlistService: PlaylistService
  ) {
  }

//TODO add description when it ok in backend change model to
  addPlaylist() {
    this._playlistService.create({
      name: this.playlist.name,
      public: this.playlist.public
    }).then((result) => {
      console.log('Added Playlist : ' + this.playlist.name, result);

    }).catch((error) => {
      console.error('Error Add Playlist : ' + this.playlist.name, error);
    });
  }
}

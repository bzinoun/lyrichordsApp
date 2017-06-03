import { Storage } from '@ionic/storage';
import { Lyrics } from '../models/lyrics';
import { Injectable } from '@angular/core'


@Injectable()

export class StorageService {

  private lists: Lyrics[] = [];

  constructor(private storage: Storage) { }


  // Favourite data start storing here

  storeItem(title: any, content: any, id : number) {
    //    console.log('from service', title, content);
    const list = new Lyrics(title, content, id);
    this.lists.push(list);
    this.storage.set('lists', this.lists)
      .then()
      .catch(
      err => {
        this.lists.splice(this.lists.indexOf(list), 1);
      }
      );
  }
  //end of favourite storing


  //Favourite data fetching starts here

  fetchItem() {
    return this.storage.get('lists')
      .then(
      (lists: Lyrics[]) => {
        this.lists = lists != null ? lists : [];
        return this.lists;
      }
      )
      .catch(
      err => console.log(err)
      );
  }
  //end favourite fetching

//check item starts here!
checkItem(id :number){

return this.lists.find(list => list.id == id) ? true : false;

}
//check item ends here!

//delete favourite starts here
  deleteItem(index: number) {
    const list = this.lists[index];
    this.lists.splice(index, 1);
    this.storage.set('lists', this.lists)
    .then(
      () => { console.log('Deleted successfully!');}
    )
    .catch(
      err => console.log(err)
    );
  }
//favourite delete ends here
}

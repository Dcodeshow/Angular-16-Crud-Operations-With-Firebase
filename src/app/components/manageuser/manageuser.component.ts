import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { usertype } from './user.model';

@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.scss'],
})
export class ManageuserComponent {
  @ViewChild('myForm') myForm: NgForm;
  url: string = 'https://prouduct-update-default-rtdb.firebaseio.com/user.json';
  editMode: boolean = false;
  useridEdit: string = '';
  constructor(private http: HttpClient) {}
  userArrayDetails: any[] = [
    // {
    //   username: 'Nawaz',
    //   technology: 'Angular',
    // },
  ];

  onSubmit(userDetails: usertype) {
    if (this.myForm.valid) {
      if (this.editMode) {
        console.log();
        this.http
          .put(
            'https://prouduct-update-default-rtdb.firebaseio.com/user/' +
              this.useridEdit +
              '.json',
            userDetails
          )
          .subscribe(() => {
            this.FetchUser();
          });
      } else {
        console.log(userDetails);
        this.userArrayDetails.push(userDetails);
        this.myForm.reset();
        this.http.post(this.url, userDetails).subscribe();
      }
    } else {
    }
  }

  FetchUser() {
    this.http
      .get<usertype>(this.url)
      .pipe(
        map((rec) => {
          const newarr: any[] = [];
          for (const key in rec) {
            if (rec.hasOwnProperty(key)) {
              newarr.push({ userid: key, ...rec[key] });
            }
          }
          return newarr;
        })
      )
      .subscribe((response) => {
        this.userArrayDetails = response;
      });
  }

  ngOnInit(): void {
    this.FetchUser();
  }

  onDelete(id: any) {
    this.http
      .delete(
        'https://prouduct-update-default-rtdb.firebaseio.com/user/' +
          id +
          '.json'
      )
      .subscribe(() => {
        this.FetchUser();
      });
  }

  onEdit(index: any, userid: any) {
    this.editMode = true;
    this.useridEdit = userid;
    console.log(this.userArrayDetails[index]);
    this.myForm.setValue({
      username: this.userArrayDetails[index].username,
      technology: this.userArrayDetails[index].technology,
    });
  }
}

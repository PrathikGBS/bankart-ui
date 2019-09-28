import { OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";
import * as moment from "moment";
declare let $: any;

export class BaseComponent implements OnInit {
  userId: string;
  constructor() {}

  ngOnInit() {}

  onKeyPressAcceptNumberOnly(event: KeyboardEvent): any {
    const charCode = event.which ? event.which : event.keyCode;

    return charCode >= 48 && charCode <= 57;
  }

  // Below two functions are to display cross in the invalid field
  isFieldInvalid(form: FormGroup, field: string) {
    return (
      form.get(field).invalid &&
      form.get(field).dirty &&
      form.get(field).touched
    );
  }

  displayFeedback(form: FormGroup, field: string) {
    return {
      "has-feedback": this.isFieldInvalid(form, field),
      "has-error": this.isFieldInvalid(form, field)
    };
  }

  isFieldDateInvalid(form: FormGroup, field: string) {
    const currentDate = moment(form.get(field).value, "DD/MM/YYYY");
    const minDateMoment = moment().add(-16, "years");

    if (currentDate.isAfter(minDateMoment) && form.get(field).touched) {
      return true;
    }

    return (
      form.get(field).invalid &&
      (form.get(field).dirty || form.get(field).touched)
    );
  }

  displayDateFeedback(form: FormGroup, field: string) {
    return {
      "has-feedback": this.isFieldDateInvalid(form, field),
      "has-error": this.isFieldDateInvalid(form, field)
    };
  }

  getTime(date: string) {
    if (new Date(date).toString() === "Invalid Date") {
      return date;
    }
    if (!date || date === "") {
      return "";
    }
    return (
      new Date(date).getHours().toString() +
      ":" +
      new Date(date).getMinutes().toString() +
      ":00"
    );
  }

  display24HourTime(date: string) {
    date = this.getTime(date);
    let H = +date.split(":")[0];
    let h = H < 10 ? "0" + H : H; // leading 0 at the left for 1 digit hours
    var ampm = H < 12 ? " AM" : " PM";
    let m = parseInt(date.split(":")[1]);
    date = h + (m < 10 ? "0" + m : m).toString();
    return date + ampm;
  }
}

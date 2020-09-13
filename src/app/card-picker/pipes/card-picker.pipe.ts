import { Pipe, PipeTransform } from "@angular/core";

// this pipe is genrating the image path according to which type of card
@Pipe({
  name: "cardImagePicker",
})
export class CardPickerPipe implements PipeTransform {
  transform(type: any): any {
    switch (type) {
      case "spades":
        return "assets/spade.png";

      case "diamonds":
        return "assets/diamond.png";

      case "clubs":
        return "assets/club.png";

      case "hearts":
        return "assets/heart.png";

      default:
        return "";
    }
  }
}

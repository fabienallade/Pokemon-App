import {Directive, ElementRef, HostListener} from "@angular/core";

@Directive({
  selector: "img[imageNotFound]",
})
export class ImageNotFoundDirective {
  constructor(private el: ElementRef) {
  }

  @HostListener("error")
  private onError() {
    this.el.nativeElement.src = "./assets/img/not_found.png";
  }
}
